// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_reload.websocket');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.WebSocket');

/**
 * @interface
 */
adzerk.boot_reload.websocket.IWebSocket = function(){};

adzerk.boot_reload.websocket.open_QMARK_ = (function adzerk$boot_reload$websocket$open_QMARK_(this$){
if((!((this$ == null))) && (!((this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1 == null)))){
return this$.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__8102__auto__ = (((this$ == null))?null:this$);
var m__8103__auto__ = (adzerk.boot_reload.websocket.open_QMARK_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8103__auto__.call(null,this$));
} else {
var m__8103__auto____$1 = (adzerk.boot_reload.websocket.open_QMARK_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8103__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWebSocket.open?",this$);
}
}
}
});

adzerk.boot_reload.websocket.websocket_connection = (function adzerk$boot_reload$websocket$websocket_connection(var_args){
var args21043 = [];
var len__8605__auto___21046 = arguments.length;
var i__8606__auto___21047 = (0);
while(true){
if((i__8606__auto___21047 < len__8605__auto___21046)){
args21043.push((arguments[i__8606__auto___21047]));

var G__21048 = (i__8606__auto___21047 + (1));
i__8606__auto___21047 = G__21048;
continue;
} else {
}
break;
}

var G__21045 = args21043.length;
switch (G__21045) {
case 0:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21043.length)].join('')));

}
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2(null,null);
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2(auto_reconnect_QMARK_,null);
});

adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

adzerk.boot_reload.websocket.websocket_connection.cljs$lang$maxFixedArity = 2;

goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.adzerk$boot_reload$websocket$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
if(cljs.core.truth_(adzerk.boot_reload.websocket.open_QMARK_(this$__$1))){
return this$__$1.send(message);
} else {
return null;
}
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__21050){
var vec__21051 = p__21050;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21051,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.WebSocket.EventType)], 0))));
});
