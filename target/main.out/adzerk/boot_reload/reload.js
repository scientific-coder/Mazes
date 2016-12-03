// Compiled by ClojureScript 1.9.293 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8947_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8947_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__6753__auto__)){
var changed__$1 = temp__6753__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8952 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8953 = null;
var count__8954 = (0);
var i__8955 = (0);
while(true){
if((i__8955 < count__8954)){
var s = cljs.core._nth.call(null,chunk__8953,i__8955);
var temp__6753__auto___8956 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8956)){
var sheet_8957 = temp__6753__auto___8956;
var temp__6753__auto___8958__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8957.href,changed);
if(cljs.core.truth_(temp__6753__auto___8958__$1)){
var href_uri_8959 = temp__6753__auto___8958__$1;
sheet_8957.ownerNode.href = href_uri_8959.makeUnique().toString();
} else {
}
} else {
}

var G__8960 = seq__8952;
var G__8961 = chunk__8953;
var G__8962 = count__8954;
var G__8963 = (i__8955 + (1));
seq__8952 = G__8960;
chunk__8953 = G__8961;
count__8954 = G__8962;
i__8955 = G__8963;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8952);
if(temp__6753__auto__){
var seq__8952__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8952__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__8952__$1);
var G__8964 = cljs.core.chunk_rest.call(null,seq__8952__$1);
var G__8965 = c__8295__auto__;
var G__8966 = cljs.core.count.call(null,c__8295__auto__);
var G__8967 = (0);
seq__8952 = G__8964;
chunk__8953 = G__8965;
count__8954 = G__8966;
i__8955 = G__8967;
continue;
} else {
var s = cljs.core.first.call(null,seq__8952__$1);
var temp__6753__auto___8968__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8968__$1)){
var sheet_8969 = temp__6753__auto___8968__$1;
var temp__6753__auto___8970__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8969.href,changed);
if(cljs.core.truth_(temp__6753__auto___8970__$2)){
var href_uri_8971 = temp__6753__auto___8970__$2;
sheet_8969.ownerNode.href = href_uri_8971.makeUnique().toString();
} else {
}
} else {
}

var G__8972 = cljs.core.next.call(null,seq__8952__$1);
var G__8973 = null;
var G__8974 = (0);
var G__8975 = (0);
seq__8952 = G__8972;
chunk__8953 = G__8973;
count__8954 = G__8974;
i__8955 = G__8975;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8980 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8981 = null;
var count__8982 = (0);
var i__8983 = (0);
while(true){
if((i__8983 < count__8982)){
var s = cljs.core._nth.call(null,chunk__8981,i__8983);
var temp__6753__auto___8984 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8984)){
var image_8985 = temp__6753__auto___8984;
var temp__6753__auto___8986__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8985.src,changed);
if(cljs.core.truth_(temp__6753__auto___8986__$1)){
var href_uri_8987 = temp__6753__auto___8986__$1;
image_8985.src = href_uri_8987.makeUnique().toString();
} else {
}
} else {
}

var G__8988 = seq__8980;
var G__8989 = chunk__8981;
var G__8990 = count__8982;
var G__8991 = (i__8983 + (1));
seq__8980 = G__8988;
chunk__8981 = G__8989;
count__8982 = G__8990;
i__8983 = G__8991;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8980);
if(temp__6753__auto__){
var seq__8980__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8980__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__8980__$1);
var G__8992 = cljs.core.chunk_rest.call(null,seq__8980__$1);
var G__8993 = c__8295__auto__;
var G__8994 = cljs.core.count.call(null,c__8295__auto__);
var G__8995 = (0);
seq__8980 = G__8992;
chunk__8981 = G__8993;
count__8982 = G__8994;
i__8983 = G__8995;
continue;
} else {
var s = cljs.core.first.call(null,seq__8980__$1);
var temp__6753__auto___8996__$1 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8996__$1)){
var image_8997 = temp__6753__auto___8996__$1;
var temp__6753__auto___8998__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8997.src,changed);
if(cljs.core.truth_(temp__6753__auto___8998__$2)){
var href_uri_8999 = temp__6753__auto___8998__$2;
image_8997.src = href_uri_8999.makeUnique().toString();
} else {
}
} else {
}

var G__9000 = cljs.core.next.call(null,seq__8980__$1);
var G__9001 = null;
var G__9002 = (0);
var G__9003 = (0);
seq__8980 = G__9000;
chunk__8981 = G__9001;
count__8982 = G__9002;
i__8983 = G__9003;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9006){
var map__9009 = p__9006;
var map__9009__$1 = ((((!((map__9009 == null)))?((((map__9009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9009):map__9009);
var on_jsload = cljs.core.get.call(null,map__9009__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9009,map__9009__$1,on_jsload){
return (function (p1__9004_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9004_SHARP_,".js");
});})(map__9009,map__9009__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9009,map__9009__$1,on_jsload){
return (function (p1__9005_SHARP_){
return goog.Uri.parse(p1__9005_SHARP_).makeUnique();
});})(js_files,map__9009,map__9009__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9009,map__9009__$1,on_jsload){
return (function() { 
var G__9011__delegate = function (_){
return on_jsload.call(null);
};
var G__9011 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9012__i = 0, G__9012__a = new Array(arguments.length -  0);
while (G__9012__i < G__9012__a.length) {G__9012__a[G__9012__i] = arguments[G__9012__i + 0]; ++G__9012__i;}
  _ = new cljs.core.IndexedSeq(G__9012__a,0);
} 
return G__9011__delegate.call(this,_);};
G__9011.cljs$lang$maxFixedArity = 0;
G__9011.cljs$lang$applyTo = (function (arglist__9013){
var _ = cljs.core.seq(arglist__9013);
return G__9011__delegate(_);
});
G__9011.cljs$core$IFn$_invoke$arity$variadic = G__9011__delegate;
return G__9011;
})()
;})(js_files,map__9009,map__9009__$1,on_jsload))
,((function (js_files,map__9009,map__9009__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9009,map__9009__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9018_9022 = cljs.core.seq.call(null,things_to_log);
var chunk__9019_9023 = null;
var count__9020_9024 = (0);
var i__9021_9025 = (0);
while(true){
if((i__9021_9025 < count__9020_9024)){
var t_9026 = cljs.core._nth.call(null,chunk__9019_9023,i__9021_9025);
console.log(t_9026);

var G__9027 = seq__9018_9022;
var G__9028 = chunk__9019_9023;
var G__9029 = count__9020_9024;
var G__9030 = (i__9021_9025 + (1));
seq__9018_9022 = G__9027;
chunk__9019_9023 = G__9028;
count__9020_9024 = G__9029;
i__9021_9025 = G__9030;
continue;
} else {
var temp__6753__auto___9031 = cljs.core.seq.call(null,seq__9018_9022);
if(temp__6753__auto___9031){
var seq__9018_9032__$1 = temp__6753__auto___9031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9018_9032__$1)){
var c__8295__auto___9033 = cljs.core.chunk_first.call(null,seq__9018_9032__$1);
var G__9034 = cljs.core.chunk_rest.call(null,seq__9018_9032__$1);
var G__9035 = c__8295__auto___9033;
var G__9036 = cljs.core.count.call(null,c__8295__auto___9033);
var G__9037 = (0);
seq__9018_9022 = G__9034;
chunk__9019_9023 = G__9035;
count__9020_9024 = G__9036;
i__9021_9025 = G__9037;
continue;
} else {
var t_9038 = cljs.core.first.call(null,seq__9018_9032__$1);
console.log(t_9038);

var G__9039 = cljs.core.next.call(null,seq__9018_9032__$1);
var G__9040 = null;
var G__9041 = (0);
var G__9042 = (0);
seq__9018_9022 = G__9039;
chunk__9019_9023 = G__9040;
count__9020_9024 = G__9041;
i__9021_9025 = G__9042;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9043_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9043_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9045 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9045);

adzerk.boot_reload.reload.reload_css.call(null,G__9045);

adzerk.boot_reload.reload.reload_img.call(null,G__9045);

return G__9045;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map