(ns adzerk.boot-reload.init714 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:44421" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})