// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$.call(null,(2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p))),cljs.core.str(","),cljs.core.str(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__15555 = (n | (0));
switch (G__15555) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.call(null," ",cljs.core.repeat.call(null,n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.ISVGConvert = function(){};

thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2 == null)))){
return _.thi$ng$geom$svg$core$ISVGConvert$as_svg$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return m__8103__auto__.call(null,_,opts);
} else {
var m__8103__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_,opts);
} else {
throw cljs.core.missing_protocol.call(null,"ISVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__6751__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__6751__auto__)){
var att = temp__6751__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.call(null,attribs,id,cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__6751__auto__ = cljs.core.get.call(null,attribs,id);
if(cljs.core.truth_(temp__6751__auto__)){
var mat = temp__6751__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__15560 = mat;
var a = cljs.core.nth.call(null,vec__15560,(0),null);
var c = cljs.core.nth.call(null,vec__15560,(1),null);
var e = cljs.core.nth.call(null,vec__15560,(2),null);
var b = cljs.core.nth.call(null,vec__15560,(3),null);
var d = cljs.core.nth.call(null,vec__15560,(4),null);
var f = cljs.core.nth.call(null,vec__15560,(5),null);
return cljs.core.assoc.call(null,attribs,id,cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$.call(null,attribs);
var ks = cljs.core.keys.call(null,attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__15563 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__15564 = cljs.core.next.call(null,ks);
acc = G__15563;
ks = G__15564;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq.call(null,attribs)){
return cljs.core.into.call(null,thi.ng.geom.svg.core.matrix_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.color_attrib.call(null,thi.ng.geom.svg.core.filter_attribs.call(null,attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15567 = arguments.length;
var i__8606__auto___15568 = (0);
while(true){
if((i__8606__auto___15568 < len__8605__auto___15567)){
args__8612__auto__.push((arguments[i__8606__auto___15568]));

var G__15569 = (i__8606__auto___15568 + (1));
i__8606__auto___15568 = G__15569;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq15565){
var G__15566 = cljs.core.first.call(null,seq15565);
var seq15565__$1 = cljs.core.next.call(null,seq15565);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__15566,seq15565__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15571 = arguments.length;
var i__8606__auto___15572 = (0);
while(true){
if((i__8606__auto___15572 < len__8605__auto___15571)){
args__8612__auto__.push((arguments[i__8606__auto___15572]));

var G__15573 = (i__8606__auto___15572 + (1));
i__8606__auto___15572 = G__15573;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq15570){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15570));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__15574){
var vec__15578 = p__15574;
var pos = cljs.core.nth.call(null,vec__15578,(0),null);
var col = cljs.core.nth.call(null,vec__15578,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15584 = arguments.length;
var i__8606__auto___15585 = (0);
while(true){
if((i__8606__auto___15585 < len__8605__auto___15584)){
args__8612__auto__.push((arguments[i__8606__auto___15585]));

var G__15586 = (i__8606__auto___15585 + (1));
i__8606__auto___15585 = G__15586;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq15581){
var G__15582 = cljs.core.first.call(null,seq15581);
var seq15581__$1 = cljs.core.next.call(null,seq15581);
var G__15583 = cljs.core.first.call(null,seq15581__$1);
var seq15581__$2 = cljs.core.next.call(null,seq15581__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__15582,G__15583,seq15581__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15590 = arguments.length;
var i__8606__auto___15591 = (0);
while(true){
if((i__8606__auto___15591 < len__8605__auto___15590)){
args__8612__auto__.push((arguments[i__8606__auto___15591]));

var G__15592 = (i__8606__auto___15591 + (1));
i__8606__auto___15591 = G__15592;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.call(null,attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.call(null,thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq15587){
var G__15588 = cljs.core.first.call(null,seq15587);
var seq15587__$1 = cljs.core.next.call(null,seq15587);
var G__15589 = cljs.core.first.call(null,seq15587__$1);
var seq15587__$2 = cljs.core.next.call(null,seq15587__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__15588,G__15589,seq15587__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15595 = arguments.length;
var i__8606__auto___15596 = (0);
while(true){
if((i__8606__auto___15596 < len__8605__auto___15595)){
args__8612__auto__.push((arguments[i__8606__auto___15596]));

var G__15597 = (i__8606__auto___15596 + (1));
i__8606__auto___15596 = G__15597;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq15593){
var G__15594 = cljs.core.first.call(null,seq15593);
var seq15593__$1 = cljs.core.next.call(null,seq15593);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__15594,seq15593__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args15598 = [];
var len__8605__auto___15601 = arguments.length;
var i__8606__auto___15602 = (0);
while(true){
if((i__8606__auto___15602 < len__8605__auto___15601)){
args15598.push((arguments[i__8606__auto___15602]));

var G__15603 = (i__8606__auto___15602 + (1));
i__8606__auto___15602 = G__15603;
continue;
} else {
}
break;
}

var G__15600 = args15598.length;
switch (G__15600) {
case 1:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15598.length)].join('')));

}
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1 = (function (segments){
return thi.ng.geom.svg.core.path.call(null,segments,null);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2 = (function (segments,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.call(null,thi.ng.strf.core.format,cljs.core.mapcat.call(null,cljs.core.comp.call(null,thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),segments),cljs.core.mapcat.call(null,cljs.core.rest,segments))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args15605 = [];
var len__8605__auto___15608 = arguments.length;
var i__8606__auto___15609 = (0);
while(true){
if((i__8606__auto___15609 < len__8605__auto___15608)){
args15605.push((arguments[i__8606__auto___15609]));

var G__15610 = (i__8606__auto___15609 + (1));
i__8606__auto___15609 = G__15610;
continue;
} else {
}
break;
}

var G__15607 = args15605.length;
switch (G__15607) {
case 2:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15605.length)].join('')));

}
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2 = (function (p,txt){
return thi.ng.geom.svg.core.text.call(null,p,txt,null);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3 = (function (p,txt,attribs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1)))], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args15612 = [];
var len__8605__auto___15615 = arguments.length;
var i__8606__auto___15616 = (0);
while(true){
if((i__8606__auto___15616 < len__8605__auto___15615)){
args15612.push((arguments[i__8606__auto___15616]));

var G__15617 = (i__8606__auto___15616 + (1));
i__8606__auto___15616 = G__15617;
continue;
} else {
}
break;
}

var G__15614 = args15612.length;
switch (G__15614) {
case 2:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15612.length)].join('')));

}
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2 = (function (p,radius){
return thi.ng.geom.svg.core.circle.call(null,p,radius,null);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3 = (function (p,radius,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.vector.vec2.call(null,radius);
var p = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.first.call(null,radius__$1),theta1)));
var q = thi.ng.math.core._PLUS_.call(null,thi.ng.geom.vector.vec2.call(null,center),thi.ng.geom.core.as_cartesian.call(null,thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,radius__$1,(1)),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args15619 = [];
var len__8605__auto___15622 = arguments.length;
var i__8606__auto___15623 = (0);
while(true){
if((i__8606__auto___15623 < len__8605__auto___15622)){
args15619.push((arguments[i__8606__auto___15623]));

var G__15624 = (i__8606__auto___15623 + (1));
i__8606__auto___15623 = G__15624;
continue;
} else {
}
break;
}

var G__15621 = args15619.length;
switch (G__15621) {
case 6:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15619.length)].join('')));

}
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
return thi.ng.geom.svg.core.arc.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,null);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,attribs){
return thi.ng.geom.svg.core.path.call(null,thi.ng.geom.svg.core.arc_segment.call(null,center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = 7;

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args15626 = [];
var len__8605__auto___15629 = arguments.length;
var i__8606__auto___15630 = (0);
while(true){
if((i__8606__auto___15630 < len__8605__auto___15629)){
args15626.push((arguments[i__8606__auto___15630]));

var G__15631 = (i__8606__auto___15630 + (1));
i__8606__auto___15630 = G__15631;
continue;
} else {
}
break;
}

var G__15628 = args15626.length;
switch (G__15628) {
case 3:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15626.length)].join('')));

}
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3 = (function (p,w,h){
return thi.ng.geom.svg.core.rect.call(null,p,w,h,null);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (p,w,h,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,p)),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,p,(1))),new cljs.core.Keyword(null,"width","width",-384071477),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,w),new cljs.core.Keyword(null,"height","height",1025178622),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,h)], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args15633 = [];
var len__8605__auto___15636 = arguments.length;
var i__8606__auto___15637 = (0);
while(true){
if((i__8606__auto___15637 < len__8605__auto___15636)){
args15633.push((arguments[i__8606__auto___15637]));

var G__15638 = (i__8606__auto___15637 + (1));
i__8606__auto___15637 = G__15638;
continue;
} else {
}
break;
}

var G__15635 = args15633.length;
switch (G__15635) {
case 2:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15633.length)].join('')));

}
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.svg.core.line.call(null,a,b,null);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3 = (function (a,b,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,a)),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,a,(1))),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first.call(null,b)),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.call(null,b,(1)))], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args15640 = [];
var len__8605__auto___15643 = arguments.length;
var i__8606__auto___15644 = (0);
while(true){
if((i__8606__auto___15644 < len__8605__auto___15643)){
args15640.push((arguments[i__8606__auto___15644]));

var G__15645 = (i__8606__auto___15644 + (1));
i__8606__auto___15644 = G__15645;
continue;
} else {
}
break;
}

var G__15642 = args15640.length;
switch (G__15642) {
case 4:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15640.length)].join('')));

}
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4 = (function (p,q,start,end){
return thi.ng.geom.svg.core.line_decorated.call(null,p,q,start,end,null);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5 = (function (p,q,start,end,attribs){
var x__8318__auto__ = thi.ng.geom.svg.core.line.call(null,p,q,attribs);
return cljs.core._conj.call(null,(function (){var x__8318__auto____$1 = (cljs.core.truth_(start)?start.call(null,q,p,(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__8318__auto____$2 = (cljs.core.truth_(end)?end.call(null,p,q,(0),attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8318__auto____$2);
})(),x__8318__auto____$1);
})(),x__8318__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args15647 = [];
var len__8605__auto___15650 = arguments.length;
var i__8606__auto___15651 = (0);
while(true){
if((i__8606__auto___15651 < len__8605__auto___15650)){
args15647.push((arguments[i__8606__auto___15651]));

var G__15652 = (i__8606__auto___15651 + (1));
i__8606__auto___15651 = G__15652;
continue;
} else {
}
break;
}

var G__15649 = args15647.length;
switch (G__15649) {
case 1:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15647.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.line_strip.call(null,points,null);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args15654 = [];
var len__8605__auto___15665 = arguments.length;
var i__8606__auto___15666 = (0);
while(true){
if((i__8606__auto___15666 < len__8605__auto___15665)){
args15654.push((arguments[i__8606__auto___15666]));

var G__15667 = (i__8606__auto___15666 + (1));
i__8606__auto___15666 = G__15667;
continue;
} else {
}
break;
}

var G__15656 = args15654.length;
switch (G__15656) {
case 4:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15654.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4 = (function (points,start,seg,end){
return thi.ng.geom.svg.core.line_strip_decorated.call(null,points,start,seg,end,null);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5 = (function (points,start,seg,end,attribs){
var n = (cljs.core.count.call(null,points) - (1));
var x__8318__auto__ = thi.ng.geom.svg.core.line_strip.call(null,points,attribs);
return cljs.core._conj.call(null,(function (){var x__8318__auto____$1 = (cljs.core.truth_(start)?start.call(null,cljs.core.nth.call(null,points,(1)),cljs.core.first.call(null,points),(0),attribs):null);
return cljs.core._conj.call(null,(function (){var x__8318__auto____$2 = (cljs.core.truth_(seg)?cljs.core.map_indexed.call(null,((function (x__8318__auto____$1,x__8318__auto__,n){
return (function (i,p__15661){
var vec__15662 = p__15661;
var p = cljs.core.nth.call(null,vec__15662,(0),null);
var q = cljs.core.nth.call(null,vec__15662,(1),null);
return seg.call(null,p,q,i,attribs);
});})(x__8318__auto____$1,x__8318__auto__,n))
,cljs.core.partition.call(null,(2),(1),points)):null);
return cljs.core._conj.call(null,(function (){var x__8318__auto____$3 = (cljs.core.truth_(end)?end.call(null,points.call(null,(n - (1))),cljs.core.peek.call(null,points),n,attribs):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8318__auto____$3);
})(),x__8318__auto____$2);
})(),x__8318__auto____$1);
})(),x__8318__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args15669 = [];
var len__8605__auto___15672 = arguments.length;
var i__8606__auto___15673 = (0);
while(true){
if((i__8606__auto___15673 < len__8605__auto___15672)){
args15669.push((arguments[i__8606__auto___15673]));

var G__15674 = (i__8606__auto___15673 + (1));
i__8606__auto___15673 = G__15674;
continue;
} else {
}
break;
}

var G__15671 = args15669.length;
switch (G__15671) {
case 1:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15669.length)].join('')));

}
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.polygon.call(null,points,null);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format.call(null,cljs.core.count.call(null,points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args15676 = [];
var len__8605__auto___15679 = arguments.length;
var i__8606__auto___15680 = (0);
while(true){
if((i__8606__auto___15680 < len__8605__auto___15679)){
args15676.push((arguments[i__8606__auto___15680]));

var G__15681 = (i__8606__auto___15680 + (1));
i__8606__auto___15680 = G__15681;
continue;
} else {
}
break;
}

var G__15678 = args15676.length;
switch (G__15678) {
case 1:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15676.length)].join('')));

}
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1 = (function (id){
return thi.ng.geom.svg.core.instance.call(null,id,null);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2 = (function (id,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs.call(null,attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args15683 = [];
var len__8605__auto___15690 = arguments.length;
var i__8606__auto___15691 = (0);
while(true){
if((i__8606__auto___15691 < len__8605__auto___15690)){
args15683.push((arguments[i__8606__auto___15691]));

var G__15692 = (i__8606__auto___15691 + (1));
i__8606__auto___15691 = G__15692;
continue;
} else {
}
break;
}

var G__15685 = args15683.length;
switch (G__15685) {
case 3:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15683.length)].join('')));

}
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3 = (function (len,theta,solid_QMARK_){
return thi.ng.geom.svg.core.arrow_head.call(null,len,theta,solid_QMARK_,null);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4 = (function (len,theta,solid_QMARK_,opts){
return (function() { 
var G__15694__delegate = function (p,q,idx,p__15686){
var vec__15687 = p__15686;
var attribs = cljs.core.nth.call(null,vec__15687,(0),null);
var q__$1 = thi.ng.geom.vector.vec2.call(null,q);
var d = thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,q__$1,p),len);
var x__8318__auto__ = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8318__auto__);
};
var G__15694 = function (p,q,idx,var_args){
var p__15686 = null;
if (arguments.length > 3) {
var G__15695__i = 0, G__15695__a = new Array(arguments.length -  3);
while (G__15695__i < G__15695__a.length) {G__15695__a[G__15695__i] = arguments[G__15695__i + 3]; ++G__15695__i;}
  p__15686 = new cljs.core.IndexedSeq(G__15695__a,0);
} 
return G__15694__delegate.call(this,p,q,idx,p__15686);};
G__15694.cljs$lang$maxFixedArity = 3;
G__15694.cljs$lang$applyTo = (function (arglist__15696){
var p = cljs.core.first(arglist__15696);
arglist__15696 = cljs.core.next(arglist__15696);
var q = cljs.core.first(arglist__15696);
arglist__15696 = cljs.core.next(arglist__15696);
var idx = cljs.core.first(arglist__15696);
var p__15686 = cljs.core.rest(arglist__15696);
return G__15694__delegate(p,q,idx,p__15686);
});
G__15694.cljs$core$IFn$_invoke$arity$variadic = G__15694__delegate;
return G__15694;
})()
;
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args15698 = [];
var len__8605__auto___15708 = arguments.length;
var i__8606__auto___15709 = (0);
while(true){
if((i__8606__auto___15709 < len__8605__auto___15708)){
args15698.push((arguments[i__8606__auto___15709]));

var G__15710 = (i__8606__auto___15709 + (1));
i__8606__auto___15709 = G__15710;
continue;
} else {
}
break;
}

var G__15700 = args15698.length;
switch (G__15700) {
case 0:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15698.length)].join('')));

}
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.svg.core.line_label.call(null,null);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1 = (function (p__15701){
var map__15702 = p__15701;
var map__15702__$1 = ((((!((map__15702 == null)))?((((map__15702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15702):map__15702);
var opts = map__15702__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),((function (map__15702,map__15702__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__15697_SHARP_){
var or__7389__auto__ = p1__15697_SHARP_;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "middle";
}
});})(map__15702,map__15702__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,map__15702,map__15702__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__15712__delegate = function (p,q,idx,p__15704){
var vec__15705 = p__15704;
var attribs = cljs.core.nth.call(null,vec__15705,(0),null);
var temp__6751__auto__ = cljs.core.get_in.call(null,attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__6751__auto__)){
var label = temp__6751__auto__;
var p__$1 = thi.ng.geom.vector.vec2.call(null,p);
var m = thi.ng.math.core._PLUS_.call(null,thi.ng.math.core.mix.call(null,p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees.call(null,thi.ng.geom.core.heading.call(null,thi.ng.geom.core.normal.call(null,thi.ng.math.core._.call(null,p__$1,q))))),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,m)),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,m,(1))),cljs.core.str(")")].join('')):opts__$1);
var x__8318__auto__ = thi.ng.geom.svg.core.text.call(null,m,label,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8318__auto__);
} else {
return null;
}
};
var G__15712 = function (p,q,idx,var_args){
var p__15704 = null;
if (arguments.length > 3) {
var G__15713__i = 0, G__15713__a = new Array(arguments.length -  3);
while (G__15713__i < G__15713__a.length) {G__15713__a[G__15713__i] = arguments[G__15713__i + 3]; ++G__15713__i;}
  p__15704 = new cljs.core.IndexedSeq(G__15713__a,0);
} 
return G__15712__delegate.call(this,p,q,idx,p__15704);};
G__15712.cljs$lang$maxFixedArity = 3;
G__15712.cljs$lang$applyTo = (function (arglist__15714){
var p = cljs.core.first(arglist__15714);
arglist__15714 = cljs.core.next(arglist__15714);
var q = cljs.core.first(arglist__15714);
arglist__15714 = cljs.core.next(arglist__15714);
var idx = cljs.core.first(arglist__15714);
var p__15704 = cljs.core.rest(arglist__15714);
return G__15712__delegate(p,q,idx,p__15704);
});
G__15712.cljs$core$IFn$_invoke$arity$variadic = G__15712__delegate;
return G__15712;
})()
;
;})(opts__$1,map__15702,map__15702__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = 1;

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15720 = arguments.length;
var i__8606__auto___15721 = (0);
while(true){
if((i__8606__auto___15721 < len__8605__auto___15720)){
args__8612__auto__.push((arguments[i__8606__auto___15721]));

var G__15722 = (i__8606__auto___15721 + (1));
i__8606__auto___15721 = G__15722;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__15723__delegate = function (p,q,idx,p__15716){
var vec__15717 = p__15716;
var attribs = cljs.core.nth.call(null,vec__15717,(0),null);
return cljs.core.reduce.call(null,((function (vec__15717,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__15717,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__15723 = function (p,q,idx,var_args){
var p__15716 = null;
if (arguments.length > 3) {
var G__15724__i = 0, G__15724__a = new Array(arguments.length -  3);
while (G__15724__i < G__15724__a.length) {G__15724__a[G__15724__i] = arguments[G__15724__i + 3]; ++G__15724__i;}
  p__15716 = new cljs.core.IndexedSeq(G__15724__a,0);
} 
return G__15723__delegate.call(this,p,q,idx,p__15716);};
G__15723.cljs$lang$maxFixedArity = 3;
G__15723.cljs$lang$applyTo = (function (arglist__15725){
var p = cljs.core.first(arglist__15725);
arglist__15725 = cljs.core.next(arglist__15725);
var q = cljs.core.first(arglist__15725);
arglist__15725 = cljs.core.next(arglist__15725);
var idx = cljs.core.first(arglist__15725);
var p__15716 = cljs.core.rest(arglist__15725);
return G__15723__delegate(p,q,idx,p__15716);
});
G__15723.cljs$core$IFn$_invoke$arity$variadic = G__15723__delegate;
return G__15723;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq15715){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15715));
});


//# sourceMappingURL=core.js.map