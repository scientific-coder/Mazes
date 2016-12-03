// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.connection');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.Uri');
goog.require('adzerk.boot_reload.display');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function adzerk$boot_reload$client$patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
adzerk.boot_reload.client.resolve_url = (function adzerk$boot_reload$client$resolve_url(url,ws_host){
var passed_uri = (new goog.Uri(url));
var protocol = passed_uri.getScheme();
var host = (function (){var or__7389__auto__ = ws_host;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
var or__7389__auto____$1 = window.location.hostname;
if(cljs.core.truth_(or__7389__auto____$1)){
return or__7389__auto____$1;
} else {
console.warn("Both :ws-host and window.location.hostname are empty.","This might happen if you are accessing the files directly instead of over http.","You should probably set :ws-host manually.");

return null;
}
}
})();
var port = passed_uri.getPort();
return [cljs.core.str(protocol),cljs.core.str("://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str(port)].join('');
});
if(typeof adzerk.boot_reload.client.handle !== 'undefined'){
} else {
adzerk.boot_reload.client.handle = (function (){var method_table__8415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8419__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"adzerk.boot-reload.client","handle"),((function (method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__){
return (function (msg,opts){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"reload","reload",863702807),(function (p__15540,opts){
var map__15541 = p__15540;
var map__15541__$1 = ((((!((map__15541 == null)))?((((map__15541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15541):map__15541);
var files = cljs.core.get.call(null,map__15541__$1,new cljs.core.Keyword(null,"files","files",-472457450));
return adzerk.boot_reload.reload.reload.call(null,files,opts);
}));
cljs.core._add_method.call(null,adzerk.boot_reload.client.handle,new cljs.core.Keyword(null,"visual","visual",942787224),(function (state,opts){
if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
return adzerk.boot_reload.display.display.call(null,state,opts);
} else {
return null;
}
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15549 = arguments.length;
var i__8606__auto___15550 = (0);
while(true){
if((i__8606__auto___15550 < len__8605__auto___15549)){
args__8612__auto__.push((arguments[i__8606__auto___15550]));

var G__15551 = (i__8606__auto___15550 + (1));
i__8606__auto___15550 = G__15551;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15545){
var vec__15546 = p__15545;
var opts = cljs.core.nth.call(null,vec__15546,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_.call(null))){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__15546,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-protocol","set-protocol",1849530943),new cljs.core.Keyword(null,"protocol","protocol",652470118),window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__15546,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__15546,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
return adzerk.boot_reload.client.handle.call(null,msg,opts);
});})(conn,vec__15546,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__15546,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__15546,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__15546,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__15546,opts))
);

return clojure.browser.net.connect.call(null,conn,adzerk.boot_reload.client.resolve_url.call(null,url,new cljs.core.Keyword(null,"ws-host","ws-host",587956291).cljs$core$IFn$_invoke$arity$1(opts)));
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq15543){
var G__15544 = cljs.core.first.call(null,seq15543);
var seq15543__$1 = cljs.core.next.call(null,seq15543);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__15544,seq15543__$1);
});


//# sourceMappingURL=client.js.map