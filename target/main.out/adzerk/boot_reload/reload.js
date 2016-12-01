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
return (function (p1__8807_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8807_SHARP_),path);
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
var seq__8812 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8813 = null;
var count__8814 = (0);
var i__8815 = (0);
while(true){
if((i__8815 < count__8814)){
var s = cljs.core._nth.call(null,chunk__8813,i__8815);
var temp__6753__auto___8816 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8816)){
var sheet_8817 = temp__6753__auto___8816;
var temp__6753__auto___8818__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8817.href,changed);
if(cljs.core.truth_(temp__6753__auto___8818__$1)){
var href_uri_8819 = temp__6753__auto___8818__$1;
sheet_8817.ownerNode.href = href_uri_8819.makeUnique().toString();
} else {
}
} else {
}

var G__8820 = seq__8812;
var G__8821 = chunk__8813;
var G__8822 = count__8814;
var G__8823 = (i__8815 + (1));
seq__8812 = G__8820;
chunk__8813 = G__8821;
count__8814 = G__8822;
i__8815 = G__8823;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8812);
if(temp__6753__auto__){
var seq__8812__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8812__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__8812__$1);
var G__8824 = cljs.core.chunk_rest.call(null,seq__8812__$1);
var G__8825 = c__8295__auto__;
var G__8826 = cljs.core.count.call(null,c__8295__auto__);
var G__8827 = (0);
seq__8812 = G__8824;
chunk__8813 = G__8825;
count__8814 = G__8826;
i__8815 = G__8827;
continue;
} else {
var s = cljs.core.first.call(null,seq__8812__$1);
var temp__6753__auto___8828__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___8828__$1)){
var sheet_8829 = temp__6753__auto___8828__$1;
var temp__6753__auto___8830__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_8829.href,changed);
if(cljs.core.truth_(temp__6753__auto___8830__$2)){
var href_uri_8831 = temp__6753__auto___8830__$2;
sheet_8829.ownerNode.href = href_uri_8831.makeUnique().toString();
} else {
}
} else {
}

var G__8832 = cljs.core.next.call(null,seq__8812__$1);
var G__8833 = null;
var G__8834 = (0);
var G__8835 = (0);
seq__8812 = G__8832;
chunk__8813 = G__8833;
count__8814 = G__8834;
i__8815 = G__8835;
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
var seq__8840 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8841 = null;
var count__8842 = (0);
var i__8843 = (0);
while(true){
if((i__8843 < count__8842)){
var s = cljs.core._nth.call(null,chunk__8841,i__8843);
var temp__6753__auto___8844 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8844)){
var image_8845 = temp__6753__auto___8844;
var temp__6753__auto___8846__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_8845.src,changed);
if(cljs.core.truth_(temp__6753__auto___8846__$1)){
var href_uri_8847 = temp__6753__auto___8846__$1;
image_8845.src = href_uri_8847.makeUnique().toString();
} else {
}
} else {
}

var G__8848 = seq__8840;
var G__8849 = chunk__8841;
var G__8850 = count__8842;
var G__8851 = (i__8843 + (1));
seq__8840 = G__8848;
chunk__8841 = G__8849;
count__8842 = G__8850;
i__8843 = G__8851;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__8840);
if(temp__6753__auto__){
var seq__8840__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8840__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__8840__$1);
var G__8852 = cljs.core.chunk_rest.call(null,seq__8840__$1);
var G__8853 = c__8295__auto__;
var G__8854 = cljs.core.count.call(null,c__8295__auto__);
var G__8855 = (0);
seq__8840 = G__8852;
chunk__8841 = G__8853;
count__8842 = G__8854;
i__8843 = G__8855;
continue;
} else {
var s = cljs.core.first.call(null,seq__8840__$1);
var temp__6753__auto___8856__$1 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___8856__$1)){
var image_8857 = temp__6753__auto___8856__$1;
var temp__6753__auto___8858__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_8857.src,changed);
if(cljs.core.truth_(temp__6753__auto___8858__$2)){
var href_uri_8859 = temp__6753__auto___8858__$2;
image_8857.src = href_uri_8859.makeUnique().toString();
} else {
}
} else {
}

var G__8860 = cljs.core.next.call(null,seq__8840__$1);
var G__8861 = null;
var G__8862 = (0);
var G__8863 = (0);
seq__8840 = G__8860;
chunk__8841 = G__8861;
count__8842 = G__8862;
i__8843 = G__8863;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8866){
var map__8869 = p__8866;
var map__8869__$1 = ((((!((map__8869 == null)))?((((map__8869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8869):map__8869);
var on_jsload = cljs.core.get.call(null,map__8869__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8869,map__8869__$1,on_jsload){
return (function (p1__8864_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8864_SHARP_,".js");
});})(map__8869,map__8869__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8869,map__8869__$1,on_jsload){
return (function (p1__8865_SHARP_){
return goog.Uri.parse(p1__8865_SHARP_).makeUnique();
});})(js_files,map__8869,map__8869__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8869,map__8869__$1,on_jsload){
return (function() { 
var G__8871__delegate = function (_){
return on_jsload.call(null);
};
var G__8871 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8872__i = 0, G__8872__a = new Array(arguments.length -  0);
while (G__8872__i < G__8872__a.length) {G__8872__a[G__8872__i] = arguments[G__8872__i + 0]; ++G__8872__i;}
  _ = new cljs.core.IndexedSeq(G__8872__a,0);
} 
return G__8871__delegate.call(this,_);};
G__8871.cljs$lang$maxFixedArity = 0;
G__8871.cljs$lang$applyTo = (function (arglist__8873){
var _ = cljs.core.seq(arglist__8873);
return G__8871__delegate(_);
});
G__8871.cljs$core$IFn$_invoke$arity$variadic = G__8871__delegate;
return G__8871;
})()
;})(js_files,map__8869,map__8869__$1,on_jsload))
,((function (js_files,map__8869,map__8869__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8869,map__8869__$1,on_jsload))
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

var seq__8878_8882 = cljs.core.seq.call(null,things_to_log);
var chunk__8879_8883 = null;
var count__8880_8884 = (0);
var i__8881_8885 = (0);
while(true){
if((i__8881_8885 < count__8880_8884)){
var t_8886 = cljs.core._nth.call(null,chunk__8879_8883,i__8881_8885);
console.log(t_8886);

var G__8887 = seq__8878_8882;
var G__8888 = chunk__8879_8883;
var G__8889 = count__8880_8884;
var G__8890 = (i__8881_8885 + (1));
seq__8878_8882 = G__8887;
chunk__8879_8883 = G__8888;
count__8880_8884 = G__8889;
i__8881_8885 = G__8890;
continue;
} else {
var temp__6753__auto___8891 = cljs.core.seq.call(null,seq__8878_8882);
if(temp__6753__auto___8891){
var seq__8878_8892__$1 = temp__6753__auto___8891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8878_8892__$1)){
var c__8295__auto___8893 = cljs.core.chunk_first.call(null,seq__8878_8892__$1);
var G__8894 = cljs.core.chunk_rest.call(null,seq__8878_8892__$1);
var G__8895 = c__8295__auto___8893;
var G__8896 = cljs.core.count.call(null,c__8295__auto___8893);
var G__8897 = (0);
seq__8878_8882 = G__8894;
chunk__8879_8883 = G__8895;
count__8880_8884 = G__8896;
i__8881_8885 = G__8897;
continue;
} else {
var t_8898 = cljs.core.first.call(null,seq__8878_8892__$1);
console.log(t_8898);

var G__8899 = cljs.core.next.call(null,seq__8878_8892__$1);
var G__8900 = null;
var G__8901 = (0);
var G__8902 = (0);
seq__8878_8882 = G__8899;
chunk__8879_8883 = G__8900;
count__8880_8884 = G__8901;
i__8881_8885 = G__8902;
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
var changed_STAR_ = cljs.core.map.call(null,(function (p1__8903_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__8903_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__8905 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__8905);

adzerk.boot_reload.reload.reload_css.call(null,G__8905);

adzerk.boot_reload.reload.reload_img.call(null,G__8905);

return G__8905;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map