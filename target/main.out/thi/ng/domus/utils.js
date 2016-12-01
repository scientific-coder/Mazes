// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.domus.utils');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.domus.utils.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.domus.utils.as_str = (function thi$ng$domus$utils$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name.call(null,x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.domus.utils.escape_html = (function thi$ng$domus$utils$escape_html(x){
return clojure.string.escape.call(null,thi.ng.domus.utils.as_str.call(null,x),thi.ng.domus.utils.html_entities);
});

//# sourceMappingURL=utils.js.map