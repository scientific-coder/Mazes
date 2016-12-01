// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.connection');
goog.require('cljs.core');
goog.require('clojure.browser.net');
adzerk.boot_reload.connection.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.connection.alive_QMARK_ = (function adzerk$boot_reload$connection$alive_QMARK_(){
return !((cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn) == null));
});
adzerk.boot_reload.connection.send_message_BANG_ = (function adzerk$boot_reload$connection$send_message_BANG_(message){
var temp__6753__auto__ = cljs.core.deref.call(null,adzerk.boot_reload.connection.ws_conn);
if(cljs.core.truth_(temp__6753__auto__)){
var conn = temp__6753__auto__;
return clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,message));
} else {
return null;
}
});

//# sourceMappingURL=connection.js.map