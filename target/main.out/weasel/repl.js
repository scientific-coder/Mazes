// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
goog.require('weasel.impls.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
weasel.repl.ws_connection = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
weasel.repl.alive_QMARK_ = (function weasel$repl$alive_QMARK_(){

return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection)) == null));
});
if(typeof weasel.repl.process_message !== 'undefined'){
} else {
weasel.repl.process_message = (function (){var method_table__8415__auto__ = (function (){var G__20884 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20884) : cljs.core.atom.call(null,G__20884));
})();
var prefer_table__8416__auto__ = (function (){var G__20885 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20885) : cljs.core.atom.call(null,G__20885));
})();
var method_cache__8417__auto__ = (function (){var G__20886 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20886) : cljs.core.atom.call(null,G__20886));
})();
var cached_hierarchy__8418__auto__ = (function (){var G__20887 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20887) : cljs.core.atom.call(null,G__20887));
})();
var hierarchy__8419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("weasel.repl","process-message"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$eval_DASH_js,(function (message){
var code = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$result,cljs.core.cst$kw$value,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$value,[cljs.core.str(eval(code))].join('')], null);
}catch (e20888){if((e20888 instanceof Error)){
var e = e20888;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e20888;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function weasel$repl$repl_print(var_args){
var args__8612__auto__ = [];
var len__8605__auto___20890 = arguments.length;
var i__8606__auto___20891 = (0);
while(true){
if((i__8606__auto___20891 < len__8605__auto___20890)){
args__8612__auto__.push((arguments[i__8606__auto___20891]));

var G__20892 = (i__8606__auto___20891 + (1));
i__8606__auto___20891 = G__20892;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__6751__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection));
if(cljs.core.truth_(temp__6751__auto__)){
var conn = temp__6751__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(weasel.repl.ws_connection) : cljs.core.deref.call(null,weasel.repl.ws_connection)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$print,cljs.core.cst$kw$value,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else {
return null;
}
});

weasel.repl.repl_print.cljs$lang$maxFixedArity = (0);

weasel.repl.repl_print.cljs$lang$applyTo = (function (seq20889){
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20889));
});

weasel.repl.console_print = (function weasel$repl$console_print(var_args){
var args__8612__auto__ = [];
var len__8605__auto___20894 = arguments.length;
var i__8606__auto___20895 = (0);
while(true){
if((i__8606__auto___20895 < len__8605__auto___20894)){
args__8612__auto__.push((arguments[i__8606__auto___20895]));

var G__20896 = (i__8606__auto___20895 + (1));
i__8606__auto___20895 = G__20896;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

weasel.repl.console_print.cljs$lang$maxFixedArity = (0);

weasel.repl.console_print.cljs$lang$applyTo = (function (seq20893){
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20893));
});

weasel.repl.print_fns = cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$repl,weasel.repl.repl_print,cljs.core.cst$kw$console,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$repl,null,cljs.core.cst$kw$console,null], null), null),(function() { 
var G__20897__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__20897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20898__i = 0, G__20898__a = new Array(arguments.length -  0);
while (G__20898__i < G__20898__a.length) {G__20898__a[G__20898__i] = arguments[G__20898__i + 0]; ++G__20898__i;}
  args = new cljs.core.IndexedSeq(G__20898__a,0);
} 
return G__20897__delegate.call(this,args);};
G__20897.cljs$lang$maxFixedArity = 0;
G__20897.cljs$lang$applyTo = (function (arglist__20899){
var args = cljs.core.seq(arglist__20899);
return G__20897__delegate(args);
});
G__20897.cljs$core$IFn$_invoke$arity$variadic = G__20897__delegate;
return G__20897;
})()
], true, false);
weasel.repl.connect = (function weasel$repl$connect(var_args){
var args__8612__auto__ = [];
var len__8605__auto___20907 = arguments.length;
var i__8606__auto___20908 = (0);
while(true){
if((i__8606__auto___20908 < len__8605__auto___20907)){
args__8612__auto__.push((arguments[i__8606__auto___20908]));

var G__20909 = (i__8606__auto___20908 + (1));
i__8606__auto___20908 = G__20909;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (repl_server_url,p__20902){
var map__20903 = p__20902;
var map__20903__$1 = ((((!((map__20903 == null)))?((((map__20903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20903.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20903):map__20903);
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20903__$1,cljs.core.cst$kw$verbose,true);
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$on_DASH_open);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$on_DASH_error);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,cljs.core.cst$kw$on_DASH_close);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20903__$1,cljs.core.cst$kw$print,cljs.core.cst$kw$repl);
var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$opened,((function (repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op,cljs.core.cst$kw$ready], null)], 0)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_open)){
return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else {
return null;
}
});})(repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$message,((function (repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
var map__20905 = cljs.reader.read_string(evt.message);
var map__20905__$1 = ((((!((map__20905 == null)))?((((map__20905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20905):map__20905);
var message = map__20905__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,cljs.core.cst$kw$op);
var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(message) : weasel.repl.process_message.call(null,message))], 0));
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$closed,((function (repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,null) : cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null));

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});})(repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$error,((function (repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_(on_error)){
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(evt) : on_error.call(null,evt));
} else {
return null;
}
});})(repl_connection,map__20903,map__20903__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.repl.bootstrap();

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
});

weasel.repl.connect.cljs$lang$maxFixedArity = (1);

weasel.repl.connect.cljs$lang$applyTo = (function (seq20900){
var G__20901 = cljs.core.first(seq20900);
var seq20900__$1 = cljs.core.next(seq20900);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(G__20901,seq20900__$1);
});

