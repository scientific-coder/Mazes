(ns my-mazes.core
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.matrix :as mat :refer [M32 M44]]
   [thi.ng.math.core :as m :refer [INF- INF+ PI TWO_PI SQRT2 DEG RAD *eps*]]
   [thi.ng.geom.svg.core :as svg]
  ;; [thi.ng.geom.webgl.animator :refer [animate]]
   [thi.ng.domus.core :as dom]
   [reagent.core :as r]
   [kdtree :as kd]
   [shodan.inspection :as shodan]))

(defn abs[n]
  (if (<= 0 n) n (- n)))

(defn flip-2[f]
  #(f %2 %1))

(def rotate (flip-2 g/rotate))

(defn regular-polygon[n]
  (take (inc n) (iterate (partial rotate(/ TWO_PI n)) (vec2 1. 0))))

(defn square [[x y] r]
  (map (comp (partial m/+ (vec2 x y)) #(g/scale % r) (partial rotate (/ PI 4)))
       (regular-polygon 4)))

(defn square-grid [n-rows n-cols cell-size]
  (for [r (range n-rows)
        c (range n-cols)]
    (square (map (comp (partial + (/ cell-size 2)) (partial * cell-size))
                 [r c])
            (/ cell-size SQRT2))))

(defn barycenter[xys]
  (g/scale (reduce m/+ xys) (/ 1. (count xys))))

;; create an index of segments (the middle of the segments) with id of the cell as meta data

(defn cell->barys-id [c]
  (map #(with-meta (barycenter %) (:id c)) (partition 2 1 (:borders c))))

(defn index-cells[cells]
  (kd/build-tree (reduce into [] (map cell->barys-id cells))))

(defn matching-seg[t id seg ]
  (let[b (barycenter seg)]
    (->> (kd/nearest-neighbor t b 2)
         (map #(vector (meta %) (:point %)))
         (filter (fn[[id-t b-t]] (and (not= id-t id) (m/delta= b-t b))))
         (map first)
         first)))

(defn scene->graph[polys]
  (let [cells (map-indexed #(hash-map :id %1  :borders %2) polys)
        t (index-cells cells)
        indexed (zipmap (iterate inc 0) cells)
        neighbors #(map (partial (partition 2 1 (:borders %))))]
    (reduce-kv #(assoc %1 %2 (assoc %3 :neighbors (map (partial matching-seg t %2) (partition 2 1 (:borders %3)))))
               {} indexed)))

(defn pick-random-non-nil[bias xs]
  (when (seq (keep identity xs))
    (let [bias-s (bias (count xs))
          [bias-non-nil xs-non-nil nb-nils delta](reduce (fn[[bias-non-nil xs-non-nil nb-nils delta last-b] [bias-b v]]
                                                           (if v
                                                             [(conj bias-non-nil (- bias-b delta)) (conj xs-non-nil v) nb-nils delta bias-b]
                                                             [bias-non-nil xs-non-nil (inc nb-nils) (+ delta (- bias-b last-b)) bias-b]))
                                                         [[] [] 0 0. 0.]
                                                         (map vector bias-s xs))
          bias-rescaled (mapv (partial * (/ 1. (peek bias-non-nil))) bias-non-nil)
          rnd (rand)]
      (nth xs-non-nil (first (keep-indexed #(when (> %2 rnd) %1) bias-rescaled))))))

(defn no-bias [[x y]]
  #(let[delta (/ 1. %)](->> delta (iterate (partial + delta)) (take %))))

(defn alternate-bias[f]
  (fn[xy]
    (fn[n]
      (let[n-v0 (quot n 2)
           n-v1 (- n n-v0)
           delta (f xy)]
        (reductions + (take n (interleave (repeat (/ delta n-v0)) (repeat (/ (- 1. delta) n-v1)))))))))

(defn make-horizontal-bias[[[x-min y-min][x-max y-max]]]
  (let[w (- x-max x-min)](alternate-bias (fn [[x y]] (/ x w)))))

(defn make-T-bias [[[x-min y-min][x-max y-max]]]
  (let[y-T (+ y-min (/ (- y-max y-min) 4))
       x-d (/ (- x-max x-min) 8)
       x-center (/ (+ x-min x-max) 2)]
    (alternate-bias (fn[[x y]]
                      (if (or (< y y-T) (< (abs (- x x-center)) x-d))
                        0.1
                        0.9)))))

(defn remove-walls [indexed-cells id-start bias-f]
  (loop[visited #{}
        [to-visit connections] [[id-start] #{}]]
    (if (empty? to-visit)
      connections
      (let[visiting (peek to-visit)
           visiting-cell (get indexed-cells visiting)
           to-visit (pop to-visit)
           visited (conj visited visiting)
           next-visit (pick-random-non-nil (bias-f (barycenter (:borders visiting-cell)))(map #(when (not (visited %1)) %1) (:neighbors visiting-cell)))]
        (recur visited (if next-visit
                          [(conj to-visit visiting next-visit) (conj connections #{visiting next-visit})]
                          [to-visit connections]))))))

(defn maze->polylines[cells removed-walls]
  (reduce into []
          (map (fn[{:keys [id borders neighbors]}]
                 (filter identity
                         (map (fn[n s]
                                (if (not (and n (removed-walls #{id n}))) s ))
                              neighbors
                              (partition 2 1 borders))))
               cells)))

(defn bounding-box [polylines]
  (->> polylines (reduce into []) (reduce (fn[[[x-min y-min][x-max y-max]] [x y]]
                                            [(vec2 (min x-min x) (min y-min y)) (vec2 (max x-max x) (max y-max y))])
                                          [(vec2 INF+ INF+) (vec2 INF- INF-)])))

(defn transform-polylines[f polys] (map (partial map f) polys))

(defn draw-scene![root width height scene]
  (->> root (dom/clear!)
       (dom/create-dom! (svg/svg
                         {:width width :height height}
                         (apply (partial svg/group {}) scene)))))

(defn svg-polyline [color width ps]
  (svg/group {:stroke color :stroke-width width} (svg/line-strip ps)))

(defn less-than-xy? [[x0 y0][x1 y1]]
  (or (< x0 x1) (and (= x0 x1) (< y0 y1))))

(defn order-seg [xy0 xy1]
  (if (less-than-xy? xy0 xy1) [xy0 xy1] [xy1 xy0]))

(defn less-than-seg?[s0 s1]
  (let[[xy0-0 xy0-1] (apply order-seg s0)
       [xy1-0 xy1-1] (apply order-seg s1)]
    (less-than-xy? xy0-0 xy1-0)))

(defn remove-min [lt vs]
  (when (seq vs)
    (first (reduce (fn[[res v-min] v]
              (if (lt v v-min)
                [(conj res v-min) v]
                [(conj res v) v-min]))
            [[] (first vs)]
            (rest vs)))))

(enable-console-print!)
;; (def w 1024)
;; (def h 1024)
;; (def paint! (partial draw-scene! (dom/by-id "maze") w h))
;; (def test-scene (square-grid 3 3 32))
;; (def scene-bb (bounding-box test-scene))
;; (def start-time (.getTime (js/Date.)))
;; (def test-graph (scene->graph test-scene))
;; (println (- (.getTime (js/Date.)) start-time))
;; ;; TODO have random-biased take id or cell instead of x y and then n
;; ;; at construction, can create a map id -> barycenter
;; ;; and id -> normal vector angles list
;; (def test-rw (remove-walls test-graph 0 (make-T-bias scene-bb)))
;; (def test-maze (maze->polylines (vals test-graph) test-rw))
;;(println test-maze)
(defonce app-state (r/atom {}))

(defn do-paint![]
  (let[{:keys [rows cols size]} @app-state
       scene (square-grid cols rows size)
       pen-width 6
       scene-bb (bounding-box scene)
       [[x-min y-min][x-max y-max]] scene-bb
       graph (scene->graph scene)
       r-w (remove-walls graph 0 (make-T-bias scene-bb))
       maze (maze->polylines (vals graph) r-w)
       w (+ (- x-max x-min) pen-width)
       h (+ (- y-max y-min) pen-width)
       paint! (partial draw-scene! (dom/by-id "maze") w h)]
    (paint! (map (partial svg-polyline "#00F" pen-width)
               (->> maze
                    (transform-polylines (partial m/+  (m/- (barycenter [(vec2 0 0)(vec2 w h)]) (barycenter scene-bb))))
                    (remove-min less-than-seg?) (remove-min (complement less-than-seg?)))))
    ))
(println "Done !")

(def error-state (r/atom nil))

(defn set-error!
  [err]
  (reset! error-state err)
  (when err
    (js/setTimeout #(set-error! nil) 1000)))

(defn swap*!
  "Similar to clojure.core/swap!, but records history and returns atom."
  [ref f & args]
  (swap! ref
         (fn [ref-val] (apply f ref-val  args)))
  (do-paint!)
  ref)

;; Components

(defn user-error
  "Component displaying current error message"
  []
  (when-let [err @error-state]
    [:p {:style {:background "red" :padding "10px" :color "white"}} err]))
(defn slider [param value min max width]
  [:input {:type "range" :value value :min min :max max
           :style {:width (str width "%")}
           :on-change (fn [e]
                        (swap*! app-state assoc param (int (.-target.value e))))}])


(defn main-panel
  "Application root component"
  []
  [:div
   [user-error]
   [:p [slider :cols (:cols @app-state) 2 40 50] "cols: " (:cols @app-state)  ]
   [:p [slider :rows (:rows @app-state) 2 40 50] "rows : " (:rows @app-state) ]
   [:p [slider :size (:size @app-state) 10 100 50] "size : " (:size @app-state) ]
   ])

(defn init-app
  "Initializes app-state atom with default state"
  []
  (swap*! app-state merge
          {:cols 2
           :rows 2
           :size 32}))

(defn main
  "Application main entry point. Initializes app-state and
  kicks off React component lifecycle."
  []
  (init-app)
  (r/render-component
    [main-panel]
    ;;(.-body js/document)
    (.getElementById js/document "app")))


(main)
(println "main called")

