(ns thi.ng.domus.utils
 (:require
  [clojure.string :as str]))

(def html-entities
  {\& "&amp;"
   \< "&lt;"
   \> "&gt;"
   \" "&quot;"})

(defn as-str [x]
  (if (or (keyword? x) (symbol? x))
    (name x)
    (str x)))

(defn escape-html
  [x] (str/escape (as-str x) html-entities))
