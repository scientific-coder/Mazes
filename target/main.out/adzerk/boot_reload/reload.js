// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - cljs.core.count(pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri().resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri(href_or_uri);
var temp__6753__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path){
return (function (p1__13798_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(adzerk.boot_reload.reload.normalize_href_or_uri(p1__13798_SHARP_),path);
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
var seq__13803 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sheets.length));
var chunk__13804 = null;
var count__13805 = (0);
var i__13806 = (0);
while(true){
if((i__13806 < count__13805)){
var s = chunk__13804.cljs$core$IIndexed$_nth$arity$2(null,i__13806);
var temp__6753__auto___13807 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___13807)){
var sheet_13808 = temp__6753__auto___13807;
var temp__6753__auto___13809__$1 = adzerk.boot_reload.reload.changed_uri(sheet_13808.href,changed);
if(cljs.core.truth_(temp__6753__auto___13809__$1)){
var href_uri_13810 = temp__6753__auto___13809__$1;
sheet_13808.ownerNode.href = href_uri_13810.makeUnique().toString();
} else {
}
} else {
}

var G__13811 = seq__13803;
var G__13812 = chunk__13804;
var G__13813 = count__13805;
var G__13814 = (i__13806 + (1));
seq__13803 = G__13811;
chunk__13804 = G__13812;
count__13805 = G__13813;
i__13806 = G__13814;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__13803);
if(temp__6753__auto__){
var seq__13803__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13803__$1)){
var c__8295__auto__ = cljs.core.chunk_first(seq__13803__$1);
var G__13815 = cljs.core.chunk_rest(seq__13803__$1);
var G__13816 = c__8295__auto__;
var G__13817 = cljs.core.count(c__8295__auto__);
var G__13818 = (0);
seq__13803 = G__13815;
chunk__13804 = G__13816;
count__13805 = G__13817;
i__13806 = G__13818;
continue;
} else {
var s = cljs.core.first(seq__13803__$1);
var temp__6753__auto___13819__$1 = (sheets[s]);
if(cljs.core.truth_(temp__6753__auto___13819__$1)){
var sheet_13820 = temp__6753__auto___13819__$1;
var temp__6753__auto___13821__$2 = adzerk.boot_reload.reload.changed_uri(sheet_13820.href,changed);
if(cljs.core.truth_(temp__6753__auto___13821__$2)){
var href_uri_13822 = temp__6753__auto___13821__$2;
sheet_13820.ownerNode.href = href_uri_13822.makeUnique().toString();
} else {
}
} else {
}

var G__13823 = cljs.core.next(seq__13803__$1);
var G__13824 = null;
var G__13825 = (0);
var G__13826 = (0);
seq__13803 = G__13823;
chunk__13804 = G__13824;
count__13805 = G__13825;
i__13806 = G__13826;
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
var seq__13831 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),images.length));
var chunk__13832 = null;
var count__13833 = (0);
var i__13834 = (0);
while(true){
if((i__13834 < count__13833)){
var s = chunk__13832.cljs$core$IIndexed$_nth$arity$2(null,i__13834);
var temp__6753__auto___13835 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___13835)){
var image_13836 = temp__6753__auto___13835;
var temp__6753__auto___13837__$1 = adzerk.boot_reload.reload.changed_uri(image_13836.src,changed);
if(cljs.core.truth_(temp__6753__auto___13837__$1)){
var href_uri_13838 = temp__6753__auto___13837__$1;
image_13836.src = href_uri_13838.makeUnique().toString();
} else {
}
} else {
}

var G__13839 = seq__13831;
var G__13840 = chunk__13832;
var G__13841 = count__13833;
var G__13842 = (i__13834 + (1));
seq__13831 = G__13839;
chunk__13832 = G__13840;
count__13833 = G__13841;
i__13834 = G__13842;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq(seq__13831);
if(temp__6753__auto__){
var seq__13831__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13831__$1)){
var c__8295__auto__ = cljs.core.chunk_first(seq__13831__$1);
var G__13843 = cljs.core.chunk_rest(seq__13831__$1);
var G__13844 = c__8295__auto__;
var G__13845 = cljs.core.count(c__8295__auto__);
var G__13846 = (0);
seq__13831 = G__13843;
chunk__13832 = G__13844;
count__13833 = G__13845;
i__13834 = G__13846;
continue;
} else {
var s = cljs.core.first(seq__13831__$1);
var temp__6753__auto___13847__$1 = (images[s]);
if(cljs.core.truth_(temp__6753__auto___13847__$1)){
var image_13848 = temp__6753__auto___13847__$1;
var temp__6753__auto___13849__$2 = adzerk.boot_reload.reload.changed_uri(image_13848.src,changed);
if(cljs.core.truth_(temp__6753__auto___13849__$2)){
var href_uri_13850 = temp__6753__auto___13849__$2;
image_13848.src = href_uri_13850.makeUnique().toString();
} else {
}
} else {
}

var G__13851 = cljs.core.next(seq__13831__$1);
var G__13852 = null;
var G__13853 = (0);
var G__13854 = (0);
seq__13831 = G__13851;
chunk__13832 = G__13852;
count__13833 = G__13853;
i__13834 = G__13854;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13857){
var map__13861 = p__13857;
var map__13861__$1 = ((((!((map__13861 == null)))?((((map__13861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13861):map__13861);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13861__$1,cljs.core.cst$kw$on_DASH_jsload,cljs.core.identity);
var js_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13861,map__13861__$1,on_jsload){
return (function (p1__13855_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(p1__13855_SHARP_,".js");
});})(map__13861,map__13861__$1,on_jsload))
,changed);
if(cljs.core.seq(js_files)){
(function (){var G__13863 = cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (js_files,map__13861,map__13861__$1,on_jsload){
return (function (p1__13856_SHARP_){
return goog.Uri.parse(p1__13856_SHARP_).makeUnique();
});})(js_files,map__13861,map__13861__$1,on_jsload))
,js_files));
return goog.net.jsloader.loadMany(G__13863);
})().addCallbacks(((function (js_files,map__13861,map__13861__$1,on_jsload){
return (function() { 
var G__13864__delegate = function (_){
return (on_jsload.cljs$core$IFn$_invoke$arity$0 ? on_jsload.cljs$core$IFn$_invoke$arity$0() : on_jsload.call(null));
};
var G__13864 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13865__i = 0, G__13865__a = new Array(arguments.length -  0);
while (G__13865__i < G__13865__a.length) {G__13865__a[G__13865__i] = arguments[G__13865__i + 0]; ++G__13865__i;}
  _ = new cljs.core.IndexedSeq(G__13865__a,0);
} 
return G__13864__delegate.call(this,_);};
G__13864.cljs$lang$maxFixedArity = 0;
G__13864.cljs$lang$applyTo = (function (arglist__13866){
var _ = cljs.core.seq(arglist__13866);
return G__13864__delegate(_);
});
G__13864.cljs$core$IFn$_invoke$arity$variadic = G__13864__delegate;
return G__13864;
})()
;})(js_files,map__13861,map__13861__$1,on_jsload))
,((function (js_files,map__13861,map__13861__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13861,map__13861__$1,on_jsload))
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
var page_path = adzerk.boot_reload.reload.page_uri().getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_(page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri(html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_();
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__13871_13875 = cljs.core.seq(things_to_log);
var chunk__13872_13876 = null;
var count__13873_13877 = (0);
var i__13874_13878 = (0);
while(true){
if((i__13874_13878 < count__13873_13877)){
var t_13879 = chunk__13872_13876.cljs$core$IIndexed$_nth$arity$2(null,i__13874_13878);
console.log(t_13879);

var G__13880 = seq__13871_13875;
var G__13881 = chunk__13872_13876;
var G__13882 = count__13873_13877;
var G__13883 = (i__13874_13878 + (1));
seq__13871_13875 = G__13880;
chunk__13872_13876 = G__13881;
count__13873_13877 = G__13882;
i__13874_13878 = G__13883;
continue;
} else {
var temp__6753__auto___13884 = cljs.core.seq(seq__13871_13875);
if(temp__6753__auto___13884){
var seq__13871_13885__$1 = temp__6753__auto___13884;
if(cljs.core.chunked_seq_QMARK_(seq__13871_13885__$1)){
var c__8295__auto___13886 = cljs.core.chunk_first(seq__13871_13885__$1);
var G__13887 = cljs.core.chunk_rest(seq__13871_13885__$1);
var G__13888 = c__8295__auto___13886;
var G__13889 = cljs.core.count(c__8295__auto___13886);
var G__13890 = (0);
seq__13871_13875 = G__13887;
chunk__13872_13876 = G__13888;
count__13873_13877 = G__13889;
i__13874_13878 = G__13890;
continue;
} else {
var t_13891 = cljs.core.first(seq__13871_13885__$1);
console.log(t_13891);

var G__13892 = cljs.core.next(seq__13871_13885__$1);
var G__13893 = null;
var G__13894 = (0);
var G__13895 = (0);
seq__13871_13875 = G__13892;
chunk__13872_13876 = G__13893;
count__13873_13877 = G__13894;
i__13874_13878 = G__13895;
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
var changed_STAR_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13896_SHARP_){
return [cljs.core.str(cljs.core.cst$kw$asset_DASH_host.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__13896_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log("Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js(changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_())){
var G__13898 = changed_STAR_;
adzerk.boot_reload.reload.reload_html(G__13898);

adzerk.boot_reload.reload.reload_css(G__13898);

adzerk.boot_reload.reload.reload_img(G__13898);

return G__13898;
} else {
return null;
}
});
