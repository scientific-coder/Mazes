// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7389__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__20912 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20912) : cljs.core.atom.call(null,G__20912));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_20915 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_20915){
return (function (){
var _STAR_always_update_STAR_20916 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20916;
}});})(_STAR_always_update_STAR_20915))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20915;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args20917 = [];
var len__8605__auto___20920 = arguments.length;
var i__8606__auto___20921 = (0);
while(true){
if((i__8606__auto___20921 < len__8605__auto___20920)){
args20917.push((arguments[i__8606__auto___20921]));

var G__20922 = (i__8606__auto___20921 + (1));
i__8606__auto___20921 = G__20922;
continue;
} else {
}
break;
}

var G__20919 = args20917.length;
switch (G__20919) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20917.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__20928_20932 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__20929_20933 = null;
var count__20930_20934 = (0);
var i__20931_20935 = (0);
while(true){
if((i__20931_20935 < count__20930_20934)){
var v_20936 = chunk__20929_20933.cljs$core$IIndexed$_nth$arity$2(null,i__20931_20935);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_20936);

var G__20937 = seq__20928_20932;
var G__20938 = chunk__20929_20933;
var G__20939 = count__20930_20934;
var G__20940 = (i__20931_20935 + (1));
seq__20928_20932 = G__20937;
chunk__20929_20933 = G__20938;
count__20930_20934 = G__20939;
i__20931_20935 = G__20940;
continue;
} else {
var temp__6753__auto___20941 = cljs.core.seq(seq__20928_20932);
if(temp__6753__auto___20941){
var seq__20928_20942__$1 = temp__6753__auto___20941;
if(cljs.core.chunked_seq_QMARK_(seq__20928_20942__$1)){
var c__8295__auto___20943 = cljs.core.chunk_first(seq__20928_20942__$1);
var G__20944 = cljs.core.chunk_rest(seq__20928_20942__$1);
var G__20945 = c__8295__auto___20943;
var G__20946 = cljs.core.count(c__8295__auto___20943);
var G__20947 = (0);
seq__20928_20932 = G__20944;
chunk__20929_20933 = G__20945;
count__20930_20934 = G__20946;
i__20931_20935 = G__20947;
continue;
} else {
var v_20948 = cljs.core.first(seq__20928_20942__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_20948);

var G__20949 = cljs.core.next(seq__20928_20942__$1);
var G__20950 = null;
var G__20951 = (0);
var G__20952 = (0);
seq__20928_20932 = G__20949;
chunk__20929_20933 = G__20950;
count__20930_20934 = G__20951;
i__20931_20935 = G__20952;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
