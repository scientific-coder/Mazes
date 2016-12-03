// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
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
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_15405 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_15405){
return (function (){
var _STAR_always_update_STAR_15406 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_15406;
}});})(_STAR_always_update_STAR_15405))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_15405;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var args15407 = [];
var len__8605__auto___15410 = arguments.length;
var i__8606__auto___15411 = (0);
while(true){
if((i__8606__auto___15411 < len__8605__auto___15410)){
args15407.push((arguments[i__8606__auto___15411]));

var G__15412 = (i__8606__auto___15411 + (1));
i__8606__auto___15411 = G__15412;
continue;
} else {
}
break;
}

var G__15409 = args15407.length;
switch (G__15409) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15407.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
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
reagent.ratom.flush_BANG_.call(null);

var seq__15418_15422 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__15419_15423 = null;
var count__15420_15424 = (0);
var i__15421_15425 = (0);
while(true){
if((i__15421_15425 < count__15420_15424)){
var v_15426 = cljs.core._nth.call(null,chunk__15419_15423,i__15421_15425);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_15426);

var G__15427 = seq__15418_15422;
var G__15428 = chunk__15419_15423;
var G__15429 = count__15420_15424;
var G__15430 = (i__15421_15425 + (1));
seq__15418_15422 = G__15427;
chunk__15419_15423 = G__15428;
count__15420_15424 = G__15429;
i__15421_15425 = G__15430;
continue;
} else {
var temp__6753__auto___15431 = cljs.core.seq.call(null,seq__15418_15422);
if(temp__6753__auto___15431){
var seq__15418_15432__$1 = temp__6753__auto___15431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15418_15432__$1)){
var c__8295__auto___15433 = cljs.core.chunk_first.call(null,seq__15418_15432__$1);
var G__15434 = cljs.core.chunk_rest.call(null,seq__15418_15432__$1);
var G__15435 = c__8295__auto___15433;
var G__15436 = cljs.core.count.call(null,c__8295__auto___15433);
var G__15437 = (0);
seq__15418_15422 = G__15434;
chunk__15419_15423 = G__15435;
count__15420_15424 = G__15436;
i__15421_15425 = G__15437;
continue;
} else {
var v_15438 = cljs.core.first.call(null,seq__15418_15432__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_15438);

var G__15439 = cljs.core.next.call(null,seq__15418_15432__$1);
var G__15440 = null;
var G__15441 = (0);
var G__15442 = (0);
seq__15418_15422 = G__15439;
chunk__15419_15423 = G__15440;
count__15420_15424 = G__15441;
i__15421_15425 = G__15442;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map