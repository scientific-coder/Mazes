(ns adzerk.boot-reload.init714 (:require [adzerk.boot-reload.client :as client] my-mazes.core))
(client/connect "ws://localhost:42747" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (my-mazes.core/main))})