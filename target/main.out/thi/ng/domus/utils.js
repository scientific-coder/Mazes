// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.domus.utils');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.domus.utils.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.domus.utils.as_str = (function thi$ng$domus$utils$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name(x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.domus.utils.escape_html = (function thi$ng$domus$utils$escape_html(x){
return clojure.string.escape(thi.ng.domus.utils.as_str(x),thi.ng.domus.utils.html_entities);
});
