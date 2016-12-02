// Compiled by ClojureScript 1.9.293 {}
goog.provide('shodan.console');
goog.require('cljs.core');
var methods_15892 = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"], null);
var console_15893 = ((typeof console !== 'undefined')?console:(function (){var polyfill = ({"memory": null});
(window["console"] = polyfill);

return polyfill;
})());
var noop_15894 = cljs.core.constantly.call(null,null);
var seq__15888_15895 = cljs.core.seq.call(null,methods_15892);
var chunk__15889_15896 = null;
var count__15890_15897 = (0);
var i__15891_15898 = (0);
while(true){
if((i__15891_15898 < count__15890_15897)){
var m_15899 = cljs.core._nth.call(null,chunk__15889_15896,i__15891_15898);
var or__7389__auto___15900 = (console_15893[m_15899]);
if(cljs.core.truth_(or__7389__auto___15900)){
} else {
(console_15893[m_15899] = noop_15894);
}

var G__15901 = seq__15888_15895;
var G__15902 = chunk__15889_15896;
var G__15903 = count__15890_15897;
var G__15904 = (i__15891_15898 + (1));
seq__15888_15895 = G__15901;
chunk__15889_15896 = G__15902;
count__15890_15897 = G__15903;
i__15891_15898 = G__15904;
continue;
} else {
var temp__6753__auto___15905 = cljs.core.seq.call(null,seq__15888_15895);
if(temp__6753__auto___15905){
var seq__15888_15906__$1 = temp__6753__auto___15905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15888_15906__$1)){
var c__8295__auto___15907 = cljs.core.chunk_first.call(null,seq__15888_15906__$1);
var G__15908 = cljs.core.chunk_rest.call(null,seq__15888_15906__$1);
var G__15909 = c__8295__auto___15907;
var G__15910 = cljs.core.count.call(null,c__8295__auto___15907);
var G__15911 = (0);
seq__15888_15895 = G__15908;
chunk__15889_15896 = G__15909;
count__15890_15897 = G__15910;
i__15891_15898 = G__15911;
continue;
} else {
var m_15912 = cljs.core.first.call(null,seq__15888_15906__$1);
var or__7389__auto___15913 = (console_15893[m_15912]);
if(cljs.core.truth_(or__7389__auto___15913)){
} else {
(console_15893[m_15912] = noop_15894);
}

var G__15914 = cljs.core.next.call(null,seq__15888_15906__$1);
var G__15915 = null;
var G__15916 = (0);
var G__15917 = (0);
seq__15888_15895 = G__15914;
chunk__15889_15896 = G__15915;
count__15890_15897 = G__15916;
i__15891_15898 = G__15917;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=console.js.map