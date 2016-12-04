// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('shodan.console');
goog.require('cljs.core');
var methods_21448 = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"], null);
var console_21449 = ((typeof console !== 'undefined')?console:(function (){var polyfill = ({"memory": null});
(window["console"] = polyfill);

return polyfill;
})());
var noop_21450 = cljs.core.constantly(null);
var seq__21444_21451 = cljs.core.seq(methods_21448);
var chunk__21445_21452 = null;
var count__21446_21453 = (0);
var i__21447_21454 = (0);
while(true){
if((i__21447_21454 < count__21446_21453)){
var m_21455 = chunk__21445_21452.cljs$core$IIndexed$_nth$arity$2(null,i__21447_21454);
var or__7389__auto___21456 = (console_21449[m_21455]);
if(cljs.core.truth_(or__7389__auto___21456)){
} else {
(console_21449[m_21455] = noop_21450);
}

var G__21457 = seq__21444_21451;
var G__21458 = chunk__21445_21452;
var G__21459 = count__21446_21453;
var G__21460 = (i__21447_21454 + (1));
seq__21444_21451 = G__21457;
chunk__21445_21452 = G__21458;
count__21446_21453 = G__21459;
i__21447_21454 = G__21460;
continue;
} else {
var temp__6753__auto___21461 = cljs.core.seq(seq__21444_21451);
if(temp__6753__auto___21461){
var seq__21444_21462__$1 = temp__6753__auto___21461;
if(cljs.core.chunked_seq_QMARK_(seq__21444_21462__$1)){
var c__8295__auto___21463 = cljs.core.chunk_first(seq__21444_21462__$1);
var G__21464 = cljs.core.chunk_rest(seq__21444_21462__$1);
var G__21465 = c__8295__auto___21463;
var G__21466 = cljs.core.count(c__8295__auto___21463);
var G__21467 = (0);
seq__21444_21451 = G__21464;
chunk__21445_21452 = G__21465;
count__21446_21453 = G__21466;
i__21447_21454 = G__21467;
continue;
} else {
var m_21468 = cljs.core.first(seq__21444_21462__$1);
var or__7389__auto___21469 = (console_21449[m_21468]);
if(cljs.core.truth_(or__7389__auto___21469)){
} else {
(console_21449[m_21468] = noop_21450);
}

var G__21470 = cljs.core.next(seq__21444_21462__$1);
var G__21471 = null;
var G__21472 = (0);
var G__21473 = (0);
seq__21444_21451 = G__21470;
chunk__21445_21452 = G__21471;
count__21446_21453 = G__21472;
i__21447_21454 = G__21473;
continue;
}
} else {
}
}
break;
}
