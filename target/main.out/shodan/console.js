// Compiled by ClojureScript 1.9.293 {}
goog.provide('shodan.console');
goog.require('cljs.core');
var methods_15266 = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"], null);
var console_15267 = ((typeof console !== 'undefined')?console:(function (){var polyfill = ({"memory": null});
(window["console"] = polyfill);

return polyfill;
})());
var noop_15268 = cljs.core.constantly.call(null,null);
var seq__15262_15269 = cljs.core.seq.call(null,methods_15266);
var chunk__15263_15270 = null;
var count__15264_15271 = (0);
var i__15265_15272 = (0);
while(true){
if((i__15265_15272 < count__15264_15271)){
var m_15273 = cljs.core._nth.call(null,chunk__15263_15270,i__15265_15272);
var or__7389__auto___15274 = (console_15267[m_15273]);
if(cljs.core.truth_(or__7389__auto___15274)){
} else {
(console_15267[m_15273] = noop_15268);
}

var G__15275 = seq__15262_15269;
var G__15276 = chunk__15263_15270;
var G__15277 = count__15264_15271;
var G__15278 = (i__15265_15272 + (1));
seq__15262_15269 = G__15275;
chunk__15263_15270 = G__15276;
count__15264_15271 = G__15277;
i__15265_15272 = G__15278;
continue;
} else {
var temp__6753__auto___15279 = cljs.core.seq.call(null,seq__15262_15269);
if(temp__6753__auto___15279){
var seq__15262_15280__$1 = temp__6753__auto___15279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15262_15280__$1)){
var c__8295__auto___15281 = cljs.core.chunk_first.call(null,seq__15262_15280__$1);
var G__15282 = cljs.core.chunk_rest.call(null,seq__15262_15280__$1);
var G__15283 = c__8295__auto___15281;
var G__15284 = cljs.core.count.call(null,c__8295__auto___15281);
var G__15285 = (0);
seq__15262_15269 = G__15282;
chunk__15263_15270 = G__15283;
count__15264_15271 = G__15284;
i__15265_15272 = G__15285;
continue;
} else {
var m_15286 = cljs.core.first.call(null,seq__15262_15280__$1);
var or__7389__auto___15287 = (console_15267[m_15286]);
if(cljs.core.truth_(or__7389__auto___15287)){
} else {
(console_15267[m_15286] = noop_15268);
}

var G__15288 = cljs.core.next.call(null,seq__15262_15280__$1);
var G__15289 = null;
var G__15290 = (0);
var G__15291 = (0);
seq__15262_15269 = G__15288;
chunk__15263_15270 = G__15289;
count__15264_15271 = G__15290;
i__15265_15272 = G__15291;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=console.js.map