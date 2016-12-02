// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
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
adzerk.boot_reload.client.handle = (function (){var method_table__8415__auto__ = (function (){var G__21056 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21056) : cljs.core.atom.call(null,G__21056));
})();
var prefer_table__8416__auto__ = (function (){var G__21057 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21057) : cljs.core.atom.call(null,G__21057));
})();
var method_cache__8417__auto__ = (function (){var G__21058 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21058) : cljs.core.atom.call(null,G__21058));
})();
var cached_hierarchy__8418__auto__ = (function (){var G__21059 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21059) : cljs.core.atom.call(null,G__21059));
})();
var hierarchy__8419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("adzerk.boot-reload.client","handle"),((function (method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__){
return (function (msg,opts){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(msg);
});})(method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__))
,cljs.core.cst$kw$default,hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reload,(function (p__21060,opts){
var map__21061 = p__21060;
var map__21061__$1 = ((((!((map__21061 == null)))?((((map__21061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21061):map__21061);
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21061__$1,cljs.core.cst$kw$files);
return adzerk.boot_reload.reload.reload(files,opts);
}));
adzerk.boot_reload.client.handle.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$visual,(function (state,opts){
if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_())){
return adzerk.boot_reload.display.display(state,opts);
} else {
return null;
}
}));
adzerk.boot_reload.client.connect = (function adzerk$boot_reload$client$connect(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21069 = arguments.length;
var i__8606__auto___21070 = (0);
while(true){
if((i__8606__auto___21070 < len__8605__auto___21069)){
args__8612__auto__.push((arguments[i__8606__auto___21070]));

var G__21071 = (i__8606__auto___21070 + (1));
i__8606__auto___21070 = G__21071;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21065){
var vec__21066 = p__21065;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21066,(0),null);
if(cljs.core.truth_(adzerk.boot_reload.connection.alive_QMARK_())){
return null;
} else {
var conn = adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
adzerk.boot_reload.client.patch_goog_base_BANG_();

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,conn) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,conn));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$opened,((function (conn,vec__21066,opts){
return (function (evt){
adzerk.boot_reload.connection.send_message_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$set_DASH_protocol,cljs.core.cst$kw$protocol,window.location.protocol], null));

return console.info("Reload websocket connected.");
});})(conn,vec__21066,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$message,((function (conn,vec__21066,opts){
return (function (evt){
var msg = cljs.reader.read_string(evt.message);
return (adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2 ? adzerk.boot_reload.client.handle.cljs$core$IFn$_invoke$arity$2(msg,opts) : adzerk.boot_reload.client.handle.call(null,msg,opts));
});})(conn,vec__21066,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$closed,((function (conn,vec__21066,opts){
return (function (evt){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.connection.ws_conn,null) : cljs.core.reset_BANG_.call(null,adzerk.boot_reload.connection.ws_conn,null));

return console.info("Reload websocket connection closed.");
});})(conn,vec__21066,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,((function (conn,vec__21066,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__21066,opts))
);

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(conn,adzerk.boot_reload.client.resolve_url(url,cljs.core.cst$kw$ws_DASH_host.cljs$core$IFn$_invoke$arity$1(opts)));
}
});

adzerk.boot_reload.client.connect.cljs$lang$maxFixedArity = (1);

adzerk.boot_reload.client.connect.cljs$lang$applyTo = (function (seq21063){
var G__21064 = cljs.core.first(seq21063);
var seq21063__$1 = cljs.core.next(seq21063);
return adzerk.boot_reload.client.connect.cljs$core$IFn$_invoke$arity$variadic(G__21064,seq21063__$1);
});

