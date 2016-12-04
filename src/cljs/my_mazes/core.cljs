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
(enable-console-print!)

(defn abs[n]
  (if (<= 0 n) n (- n)))

(defn sqrt[x]
  (.sqrt js/Math x))

(defn flip-2[f]
  #(f %2 %1))

(def rotate (flip-2 g/rotate))

(defn transform-polylines[f polys] (map (partial map f) polys))
(defn barycenter[xys]
  (g/scale (reduce m/+ xys) (/ 1. (count xys))))
(defn rotate-around [a c p]
  (-> p (m/- c) (g/rotate a) (m/+ c)))
(defn rotate-centered [a xys] ;; assume CLOSED poly : removes the first value (= last value) !
    (map (partial rotate-around a (barycenter (rest xys))) xys))
(defn regular-polygon[n]
  (take (inc n) (iterate (partial rotate(/ TWO_PI n)) (vec2 1. 0))))

(defn square [[x y] r]
  (map (comp (partial m/+ (vec2 x y)) #(g/scale % r) (partial rotate (/ PI 4)))
       (regular-polygon 4)))

(defn square-grid [n-rows n-cols cell-size]
  (for [r (range n-rows)
        c (range n-cols)]
    (let[x (-> c (* cell-size) (+ (/ cell-size 2) ))]
      (square (map (comp (partial + (/ cell-size 2)) (partial * cell-size))
                   [r c])
              (/ cell-size SQRT2)))))

(defn hexagon[[x y] r]
    (map (comp (partial m/+ (vec2 x y)) #(g/scale % r) (partial rotate (/ PI 6)))
         (regular-polygon 6)))

(defn hexagon-grid[n-rows n-cols cell-size]
  (let [v0 (rotate (/ PI 6) (vec2 cell-size 0.))
        [x0 y0] v0
        d-odd (vec2 x0 (* 2 y0))
        d-even (vec2 0. cell-size)]
    (for[r (range n-rows)
         c (range n-cols)]
      (let[x (* 2. x0 c)
           y (* 1.5  r)
           center (vec2 x y)]
        (hexagon (m/+ (if (odd? r) d-odd d-even) center) cell-size )))))


(defn triangle[[x y] r]
  (map (comp (partial m/+ (vec2 x y)) #(g/scale % r) (partial rotate (/ PI 6)))
       (regular-polygon 3)))


(defn triangle-grid[n-rows n-cols cell-size]
  (let [ side (/ (* 3 cell-size) (sqrt 3))
        c-i (/ (* side (sqrt 3)) 6)
        h (* side (sqrt 3) 0.5)]
    (for[r (range n-rows)
         c (range n-cols)]
      (let[center (m/+ (m/+ (g/scale (vec2 (/ side 2) 0.) c) (g/scale (vec2 0 h) r))
                       (if (even? (+ c r)) (vec2 0 (/ (- cell-size c-i) 2)) (vec2 0 (/ (- c-i cell-size) 2))))
           shape (triangle center  cell-size)]
        (if (odd? (+ c r)) (rotate-centered PI shape) shape)))))



;; create an index of segments (the middle of the segments) with id of the cell as meta data

(defn cell->barys-id [c]
  (map #(with-meta (barycenter %) (:id c)) (partition 2 1 (:borders c))))

(defn index-cells[cells]
  (kd/build-tree (reduce into [] (map cell->barys-id cells))))

(def my-eps 0.001)

(defn rel= [v0 v1]
  (let[abs0 (abs v0)
       abs1 (abs v1)
       diff (abs (- v1 v0))]
    (cond
      (= v0 v1) true
      (or (zero? v0) (zero? v1)) (< diff my-eps)
      :else (< (/ diff (+ abs0 abs1)) my-eps))))

(defn delta= [[x0 y0] [x1 y1]]
  (and (rel= x0 x1) (rel= y0 y1)))

(defn matching-seg[t id seg ]
  (let[b (barycenter seg)]
    (->> (kd/nearest-neighbor t b 2)
         (map #(vector (meta %) (:point %)))
         (filter (fn[[id-t b-t]] (and (not= id-t id) (delta= b-t b))))
         (map first)
         first)))
;; TODO add :border-angles
;; or normal vectors (https://github.com/thi-ng/geom/blob/develop/src/utils/utils.org)(defn ortho-normal 
;;(if (> (abs dx) eps) (.atan js/Math (/ dy dx)) 
;; 

(defn scene->graph[polys]
  (let [cells (map-indexed #(hash-map :id %1  :borders %2) polys)
        t (index-cells cells)
        indexed (zipmap (iterate inc 0) cells)
        neighbors #(map (partial (partition 2 1 (:borders %))))]
    (reduce-kv #(assoc %1 %2 (assoc %3 :neighbors (map (partial matching-seg t %2) (partition 2 1 (:borders %3)))))
               {} indexed)))

;; TODO make-bias w h a-ref -> bias x y -> f (cos (- a-ref angle))

;; pick-random-non-nil
;; in : f neighbors-id-or-nil angles
;; seq des coeffs (f angle) ou nil si neighbor-id est nil
;; remove les nils des deux seqs
;; rescale des coefs ->> #(let [min-b (apply min %)](map (partial (flip2 -) min-b) %)
;; #(let[scale (apply + %)](map (partial * ( 1. scale)) %))
;; (nth xs-non-nil (first (keep-indexed ))(reductions + ))
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

(defn make-vertical-bias[[[x-min y-min][x-max y-max]]]
  (let[h (- y-max y-min)](alternate-bias (fn [[x y]] (/ y h)))))


(defn make-T-bias [[[x-min y-min][x-max y-max]]]
  (let[y-T (+ y-min (/ (- y-max y-min) 4))
       x-d (/ (- x-max x-min) 8)
       x-center (/ (+ x-min x-max) 2)]
    (alternate-bias (fn[[x y]]
                      (if (or (< y y-T) (< (abs (- x x-center)) x-d))
                        0.1
                        0.9)))))

(defn remove-walls [id-start bias-f indexed-cells]
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
    (less-than-xy? (barycenter s0) (barycenter s1))))

(defn remove-min [lt vs]
  (when (seq vs)
    (first (reduce (fn[[res v-min] v]
              (if (lt v v-min)
                [(conj res v-min) v]
                [(conj res v) v-min]))
            [[] (first vs)]
            (rest vs)))))

(defonce app-state (r/atom {}))
(defn swap*!
  "Similar to clojure.core/swap!, but records history and returns atom."
  [ref f & args]
  (swap! ref (fn [ref-val] (apply f ref-val  args)))
  ref)

(defn update-maze-display![]
  (let[{:keys [maze size line-width]} @app-state
       zoomed-maze (transform-polylines #(g/scale % size) maze)
       scene-bb (bounding-box zoomed-maze)
       [[x-min y-min][x-max y-max]] scene-bb
       w (max 64 (+ (- x-max x-min) line-width))
       h (max 64 (+ (- y-max y-min) line-width))
       paint! (partial draw-scene! (dom/by-id "maze") w h)
       _ (swap*! app-state assoc :dummy nil)]
    (paint! (map (partial svg-polyline "#00F" line-width)
                 (->> zoomed-maze
                      (transform-polylines (partial m/+  (m/- (barycenter [(vec2 0 0)(vec2 w h)]) (barycenter scene-bb)))))))))

;; TODO make it memoized (and recursive ?)
(defn compute-maze[indexed-cells bias-f]
  (let[cells (vals indexed-cells)
       bias  (->> cells (map :borders) bounding-box bias-f)]
    (->> indexed-cells (remove-walls 0 bias) (maze->polylines cells) (remove-min less-than-seg?) (remove-min (complement less-than-seg?)))))

(defn update-maze![]
  (let[{:keys [indexed-cells bias]} @app-state
       bias-f (condp = bias
                "vertical" make-vertical-bias
                "horizontal" make-horizontal-bias
                "T" make-T-bias
                (fn[_] no-bias))]
    (do (swap*! app-state assoc :maze (compute-maze indexed-cells bias-f))
        (update-maze-display!))))


(defn compute-cells [shape-f rows cols]
  (scene->graph (shape-f rows cols 1.)))

(defn update-cells![]
  (let[{:keys [shape rows cols]} @app-state
       shape-f (condp = shape
                 "hexagon" hexagon-grid
                 "square" square-grid
                 "triangle" triangle-grid
                 square-grid)]
    (do
      (swap*! app-state assoc :indexed-cells (compute-cells shape-f rows cols))
      (update-maze!)
      )))

;; (def callbacks {:cols update-cells!
;;                 :rows update-cells!
;;                 :size update-cells!
;;                 :line-width update-cells!
;;                 :bias update-cells!})
(def callbacks {:cols update-cells!
                :rows update-cells!
                :size update-maze-display!
                :line-width update-maze-display!
                :shape update-cells!
                :bias update-maze!})

;; Components
(defn slider [param value min max width]
  [:input {:type "range" :value value :min min :max max
           :style {:width (str width "%")}
           :on-change (fn [e]
                        (do (swap*! app-state assoc param (int (.-target.value e)))
                            ((param callbacks))))}])

(defn menu [id param values]
(let [current (param @app-state)]
  [:select {:id current :name current :value current :on-change #(do (swap*! app-state assoc param (.-target.value %))
                                                                     ((param callbacks)))}
   (for [v values]
     ^{:key v}[:option v])]))

(defn main-panel
  "Application root component"
  []
  [:div
   [:p [slider :cols (:cols @app-state) 1 100 50] "cols: " (:cols @app-state)]
   [:p [slider :rows (:rows @app-state) 1 100 50] "rows : " (:rows @app-state)]
   [:p [slider :size (:size @app-state) 10 100 50] "size : " (:size @app-state)]
   [:p [slider :line-width (:line-width @app-state) 1 10 20] "line width : " (:line-width @app-state)]
   (menu "shape" :shape ["square" "hexagon" "triangle"])
   (menu "Bias" :bias ["unbiased" "vertical" "horizontal" "T"])
   ])

(defn init-app
  "Initializes app-state atom with default state"
  []
  (do
    (swap*! app-state merge
          {:cols 2
           :rows 2
           :size 32
           :line-width 5
           :shape "square"
           :bias "unbiased"})
    (update-cells!)))

(defn main
  "Application main entry point. Initializes app-state and
  kicks off React component lifecycle."
  []
  (init-app)
  (r/render-component
    [main-panel]
    (.getElementById js/document "app"))
  )


(main)
(println "main called")

