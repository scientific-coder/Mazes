// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_22393 = null;
if(cljs.core.truth_((function (){var and__7377__auto__ = repl_conn_22393;
if(cljs.core.truth_(and__7377__auto__)){
return cljs.core.not(weasel.repl.alive_QMARK_());
} else {
return and__7377__auto__;
}
})())){
weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.array_seq([cljs.core.cst$kw$print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repl,null,cljs.core.cst$kw$console,null], null), null)], 0));
} else {
}
