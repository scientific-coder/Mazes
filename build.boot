(set-env!
 :source-paths #{"src/cljs" "../clj-kdtree/src/" }
 :resource-paths #{"html"}

 :dependencies '[[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.293"]
                 [adzerk/boot-cljs "1.7.228-2"]
                 [pandeiro/boot-http "0.7.6"]
                 [adzerk/boot-reload "0.4.13"]
                 [adzerk/boot-cljs-repl   "0.3.3"]
                 [com.cemerick/piggieback "0.2.1" :scope "test"]
                 [weasel "0.7.0" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                 [thi.ng/geom "0.0.1178-SNAPSHOT"]
                 [thi.ng/domus "0.3.0-SNAPSHOT"]
                 [reagent "0.6.0" ]
                 [shodan "0.4.2"]])

 (require '[adzerk.boot-cljs :refer [cljs]]
          '[pandeiro.boot-http :refer [serve]]
          '[adzerk.boot-reload :refer [reload]]
          '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])
(deftask dev
  "Launch Immediate Feedback Development Environment"
  []
  (comp
   (serve :dir "target")
   (watch)
   (reload :on-jsload 'my-mazes.core/main)
   (cljs-repl) ;; before cljs task
   ;;(cljs :source-map true :optimizations :none)
   (cljs :optimizations :advanced)
   (target :dir #{"target"})))
