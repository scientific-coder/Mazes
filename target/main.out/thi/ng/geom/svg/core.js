// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.svg.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('thi.ng.geom.utils');
goog.require('thi.ng.color.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.math.core');
goog.require('thi.ng.strf.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke_DASH_linecap,"round",cljs.core.cst$kw$stroke_DASH_linejoin,"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = (thi.ng.strf.core.float$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.float$.cljs$core$IFn$_invoke$arity$1((2)) : thi.ng.strf.core.float$.call(null,(2)));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str((function (){var G__21076 = cljs.core.first(p);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21076) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21076));
})()),cljs.core.str(","),cljs.core.str((function (){var G__21077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21077) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21077));
})())].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str(((x * (100)) | (0))),cljs.core.str("%")].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__21079 = (n | (0));
switch (G__21079) {
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
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$L,cljs.core.cst$kw$M,cljs.core.cst$kw$A,cljs.core.cst$kw$m,cljs.core.cst$kw$Z,cljs.core.cst$kw$C,cljs.core.cst$kw$l,cljs.core.cst$kw$z,cljs.core.cst$kw$c,cljs.core.cst$kw$a],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

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
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.svg.core.as_svg["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("ISVGConvert.as-svg",_);
}
}
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,id);
if(cljs.core.truth_(temp__6751__auto__)){
var att = temp__6751__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,(function (){var G__21082 = thi.ng.color.core.as_css(att);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21082) : cljs.core.deref.call(null,G__21082));
})());
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attribs,id);
if(cljs.core.truth_(temp__6751__auto__)){
var mat = temp__6751__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__21086 = mat;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(3),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21086,(5),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$(attribs);
var ks = cljs.core.keys(attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__21089 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("__",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(cljs.core.first(ks)),(0),(2))))?cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(ks)):acc);
var G__21090 = cljs.core.next(ks);
acc = G__21089;
ks = G__21090;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq(attribs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.matrix_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.filter_attribs(attribs),cljs.core.cst$kw$stroke),cljs.core.cst$kw$fill),cljs.core.cst$kw$transform),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21093 = arguments.length;
var i__8606__auto___21094 = (0);
while(true){
if((i__8606__auto___21094 < len__8605__auto___21093)){
args__8612__auto__.push((arguments[i__8606__auto___21094]));

var G__21095 = (i__8606__auto___21094 + (1));
i__8606__auto___21094 = G__21095;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
});

thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq21091){
var G__21092 = cljs.core.first(seq21091);
var seq21091__$1 = cljs.core.next(seq21091);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__21092,seq21091__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21097 = arguments.length;
var i__8606__auto___21098 = (0);
while(true){
if((i__8606__auto___21098 < len__8605__auto___21097)){
args__8612__auto__.push((arguments[i__8606__auto___21098]));

var G__21099 = (i__8606__auto___21098 + (1));
i__8606__auto___21098 = G__21099;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,defs], null);
});

thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq21096){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21096));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__21100){
var vec__21105 = p__21100;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21105,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21105,(1),null);
var col__$1 = ((typeof col === 'string')?col:(function (){var G__21108 = thi.ng.color.core.as_css(col);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21108) : cljs.core.deref.call(null,G__21108));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stop,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.cljs$core$IFn$_invoke$arity$1(pos) : thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos)),cljs.core.cst$kw$stop_DASH_color,col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21112 = arguments.length;
var i__8606__auto___21113 = (0);
while(true){
if((i__8606__auto___21113 < len__8605__auto___21112)){
args__8612__auto__.push((arguments[i__8606__auto___21113]));

var G__21114 = (i__8606__auto___21113 + (1));
i__8606__auto___21113 = G__21114;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linearGradient,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,cljs.core.cst$kw$id,id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq21109){
var G__21110 = cljs.core.first(seq21109);
var seq21109__$1 = cljs.core.next(seq21109);
var G__21111 = cljs.core.first(seq21109__$1);
var seq21109__$2 = cljs.core.next(seq21109__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__21110,G__21111,seq21109__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21118 = arguments.length;
var i__8606__auto___21119 = (0);
while(true){
if((i__8606__auto___21119 < len__8605__auto___21118)){
args__8612__auto__.push((arguments[i__8606__auto___21119]));

var G__21120 = (i__8606__auto___21119 + (1));
i__8606__auto___21119 = G__21120;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$radialGradient,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,cljs.core.cst$kw$id,id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
});

thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2);

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq21115){
var G__21116 = cljs.core.first(seq21115);
var seq21115__$1 = cljs.core.next(seq21115);
var G__21117 = cljs.core.first(seq21115__$1);
var seq21115__$2 = cljs.core.next(seq21115__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__21116,G__21117,seq21115__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21123 = arguments.length;
var i__8606__auto___21124 = (0);
while(true){
if((i__8606__auto___21124 < len__8605__auto___21123)){
args__8612__auto__.push((arguments[i__8606__auto___21124]));

var G__21125 = (i__8606__auto___21124 + (1));
i__8606__auto___21124 = G__21125;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,thi.ng.geom.svg.core.svg_attribs(attribs,null)], null),body);
});

thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1);

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq21121){
var G__21122 = cljs.core.first(seq21121);
var seq21121__$1 = cljs.core.next(seq21121);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__21122,seq21121__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args21126 = [];
var len__8605__auto___21129 = arguments.length;
var i__8606__auto___21130 = (0);
while(true){
if((i__8606__auto___21130 < len__8605__auto___21129)){
args21126.push((arguments[i__8606__auto___21130]));

var G__21131 = (i__8606__auto___21130 + (1));
i__8606__auto___21130 = G__21131;
continue;
} else {
}
break;
}

var G__21128 = args21126.length;
switch (G__21128) {
case 1:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21126.length)].join('')));

}
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1 = (function (segments){
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2(segments,null);
});

thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2 = (function (segments,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$d,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),cljs.core.array_seq([segments], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.array_seq([segments], 0)))], null))], null);
});

thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args21133 = [];
var len__8605__auto___21138 = arguments.length;
var i__8606__auto___21139 = (0);
while(true){
if((i__8606__auto___21139 < len__8605__auto___21138)){
args21133.push((arguments[i__8606__auto___21139]));

var G__21140 = (i__8606__auto___21139 + (1));
i__8606__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var G__21135 = args21133.length;
switch (G__21135) {
case 2:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21133.length)].join('')));

}
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2 = (function (p,txt){
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3(p,txt,null);
});

thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3 = (function (p,txt,attribs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(function (){var G__21136 = cljs.core.first(p);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21136) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21136));
})(),cljs.core.cst$kw$y,(function (){var G__21137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21137) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21137));
})()], null)),txt], null);
});

thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args21142 = [];
var len__8605__auto___21147 = arguments.length;
var i__8606__auto___21148 = (0);
while(true){
if((i__8606__auto___21148 < len__8605__auto___21147)){
args21142.push((arguments[i__8606__auto___21148]));

var G__21149 = (i__8606__auto___21148 + (1));
i__8606__auto___21148 = G__21149;
continue;
} else {
}
break;
}

var G__21144 = args21142.length;
switch (G__21144) {
case 2:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21142.length)].join('')));

}
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2 = (function (p,radius){
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3(p,radius,null);
});

thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3 = (function (p,radius,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(function (){var G__21145 = cljs.core.first(p);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21145) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21145));
})(),cljs.core.cst$kw$cy,(function (){var G__21146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21146) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21146));
})(),cljs.core.cst$kw$r,radius], null))], null);
});

thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(radius);
var p = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.as_cartesian(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.first(radius__$1),theta1)));
var q = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.as_cartesian(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(radius__$1,(1)),theta2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$M,p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$A,radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args21151 = [];
var len__8605__auto___21154 = arguments.length;
var i__8606__auto___21155 = (0);
while(true){
if((i__8606__auto___21155 < len__8605__auto___21154)){
args21151.push((arguments[i__8606__auto___21155]));

var G__21156 = (i__8606__auto___21155 + (1));
i__8606__auto___21155 = G__21156;
continue;
} else {
}
break;
}

var G__21153 = args21151.length;
switch (G__21153) {
case 6:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21151.length)].join('')));

}
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,null);
});

thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7 = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,attribs){
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),attribs);
});

thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = 7;

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args21158 = [];
var len__8605__auto___21163 = arguments.length;
var i__8606__auto___21164 = (0);
while(true){
if((i__8606__auto___21164 < len__8605__auto___21163)){
args21158.push((arguments[i__8606__auto___21164]));

var G__21165 = (i__8606__auto___21164 + (1));
i__8606__auto___21164 = G__21165;
continue;
} else {
}
break;
}

var G__21160 = args21158.length;
switch (G__21160) {
case 3:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21158.length)].join('')));

}
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3 = (function (p,w,h){
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4(p,w,h,null);
});

thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (p,w,h,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(function (){var G__21161 = cljs.core.first(p);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21161) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21161));
})(),cljs.core.cst$kw$y,(function (){var G__21162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21162) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21162));
})(),cljs.core.cst$kw$width,(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(w) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,w)),cljs.core.cst$kw$height,(thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(h) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,h))], null))], null);
});

thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args21167 = [];
var len__8605__auto___21174 = arguments.length;
var i__8606__auto___21175 = (0);
while(true){
if((i__8606__auto___21175 < len__8605__auto___21174)){
args21167.push((arguments[i__8606__auto___21175]));

var G__21176 = (i__8606__auto___21175 + (1));
i__8606__auto___21175 = G__21176;
continue;
} else {
}
break;
}

var G__21169 = args21167.length;
switch (G__21169) {
case 2:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21167.length)].join('')));

}
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3(a,b,null);
});

thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3 = (function (a,b,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x1,(function (){var G__21170 = cljs.core.first(a);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21170) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21170));
})(),cljs.core.cst$kw$y1,(function (){var G__21171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21171) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21171));
})(),cljs.core.cst$kw$x2,(function (){var G__21172 = cljs.core.first(b);
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21172) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21172));
})(),cljs.core.cst$kw$y2,(function (){var G__21173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(1));
return (thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.svg.core._STAR_ff_STAR_.cljs$core$IFn$_invoke$arity$1(G__21173) : thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,G__21173));
})()], null))], null);
});

thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = 3;

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args21178 = [];
var len__8605__auto___21181 = arguments.length;
var i__8606__auto___21182 = (0);
while(true){
if((i__8606__auto___21182 < len__8605__auto___21181)){
args21178.push((arguments[i__8606__auto___21182]));

var G__21183 = (i__8606__auto___21182 + (1));
i__8606__auto___21182 = G__21183;
continue;
} else {
}
break;
}

var G__21180 = args21178.length;
switch (G__21180) {
case 4:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21178.length)].join('')));

}
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4 = (function (p,q,start,end){
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5(p,q,start,end,null);
});

thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5 = (function (p,q,start,end,attribs){
var x__8318__auto__ = thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3(p,q,attribs);
return cljs.core._conj((function (){var x__8318__auto____$1 = (cljs.core.truth_(start)?(start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(q,p,(0),attribs) : start.call(null,q,p,(0),attribs)):null);
return cljs.core._conj((function (){var x__8318__auto____$2 = (cljs.core.truth_(end)?(end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(p,q,(0),attribs) : end.call(null,p,q,(0),attribs)):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8318__auto____$2);
})(),x__8318__auto____$1);
})(),x__8318__auto__);
});

thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args21185 = [];
var len__8605__auto___21188 = arguments.length;
var i__8606__auto___21189 = (0);
while(true){
if((i__8606__auto___21189 < len__8605__auto___21188)){
args21185.push((arguments[i__8606__auto___21189]));

var G__21190 = (i__8606__auto___21189 + (1));
i__8606__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var G__21187 = args21185.length;
switch (G__21187) {
case 1:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21185.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2(points,null);
});

thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polyline,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$points,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
});

thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args21192 = [];
var len__8605__auto___21221 = arguments.length;
var i__8606__auto___21222 = (0);
while(true){
if((i__8606__auto___21222 < len__8605__auto___21221)){
args21192.push((arguments[i__8606__auto___21222]));

var G__21223 = (i__8606__auto___21222 + (1));
i__8606__auto___21222 = G__21223;
continue;
} else {
}
break;
}

var G__21194 = args21192.length;
switch (G__21194) {
case 4:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21192.length)].join('')));

}
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4 = (function (points,start,seg,end){
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5(points,start,seg,end,null);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5 = (function (points,start,seg,end,attribs){
var n = (cljs.core.count(points) - (1));
var x__8318__auto__ = thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2(points,attribs);
return cljs.core._conj((function (){var x__8318__auto____$1 = (cljs.core.truth_(start)?(function (){var G__21199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(1));
var G__21200 = cljs.core.first(points);
var G__21201 = (0);
var G__21202 = attribs;
return (start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(G__21199,G__21200,G__21201,G__21202) : start.call(null,G__21199,G__21200,G__21201,G__21202));
})():null);
return cljs.core._conj((function (){var x__8318__auto____$2 = (cljs.core.truth_(seg)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (x__8318__auto____$1,x__8318__auto__,n){
return (function (i,p__21207){
var vec__21208 = p__21207;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21208,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21208,(1),null);
return (seg.cljs$core$IFn$_invoke$arity$4 ? seg.cljs$core$IFn$_invoke$arity$4(p,q,i,attribs) : seg.call(null,p,q,i,attribs));
});})(x__8318__auto____$1,x__8318__auto__,n))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points)):null);
return cljs.core._conj((function (){var x__8318__auto____$3 = (cljs.core.truth_(end)?(function (){var G__21216 = (function (){var G__21220 = (n - (1));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__21220) : points.call(null,G__21220));
})();
var G__21217 = cljs.core.peek(points);
var G__21218 = n;
var G__21219 = attribs;
return (end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(G__21216,G__21217,G__21218,G__21219) : end.call(null,G__21216,G__21217,G__21218,G__21219));
})():null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8318__auto____$3);
})(),x__8318__auto____$2);
})(),x__8318__auto____$1);
})(),x__8318__auto__);
});

thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = 5;

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args21225 = [];
var len__8605__auto___21228 = arguments.length;
var i__8606__auto___21229 = (0);
while(true){
if((i__8606__auto___21229 < len__8605__auto___21228)){
args21225.push((arguments[i__8606__auto___21229]));

var G__21230 = (i__8606__auto___21229 + (1));
i__8606__auto___21229 = G__21230;
continue;
} else {
}
break;
}

var G__21227 = args21225.length;
switch (G__21227) {
case 1:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21225.length)].join('')));

}
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2(points,null);
});

thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2 = (function (points,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$polygon,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$points,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
});

thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args21232 = [];
var len__8605__auto___21235 = arguments.length;
var i__8606__auto___21236 = (0);
while(true){
if((i__8606__auto___21236 < len__8605__auto___21235)){
args21232.push((arguments[i__8606__auto___21236]));

var G__21237 = (i__8606__auto___21236 + (1));
i__8606__auto___21236 = G__21237;
continue;
} else {
}
break;
}

var G__21234 = args21232.length;
switch (G__21234) {
case 1:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21232.length)].join('')));

}
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1 = (function (id){
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2(id,null);
});

thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2 = (function (id,attribs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use,thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",[cljs.core.str("#"),cljs.core.str(id)].join('')], null))], null);
});

thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = 2;

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args21239 = [];
var len__8605__auto___21246 = arguments.length;
var i__8606__auto___21247 = (0);
while(true){
if((i__8606__auto___21247 < len__8605__auto___21246)){
args21239.push((arguments[i__8606__auto___21247]));

var G__21248 = (i__8606__auto___21247 + (1));
i__8606__auto___21247 = G__21248;
continue;
} else {
}
break;
}

var G__21241 = args21239.length;
switch (G__21241) {
case 3:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21239.length)].join('')));

}
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3 = (function (len,theta,solid_QMARK_){
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4(len,theta,solid_QMARK_,null);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4 = (function (len,theta,solid_QMARK_,opts){
return (function() { 
var G__21250__delegate = function (p,q,idx,p__21242){
var vec__21243 = p__21242;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(0),null);
var q__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var d = thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q__$1,p),len);
var x__8318__auto__ = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q__$1,thi.ng.geom.core.rotate(d,(- theta))),q__$1,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q__$1,thi.ng.geom.core.rotate(d,theta))], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attribs,opts], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8318__auto__);
};
var G__21250 = function (p,q,idx,var_args){
var p__21242 = null;
if (arguments.length > 3) {
var G__21251__i = 0, G__21251__a = new Array(arguments.length -  3);
while (G__21251__i < G__21251__a.length) {G__21251__a[G__21251__i] = arguments[G__21251__i + 3]; ++G__21251__i;}
  p__21242 = new cljs.core.IndexedSeq(G__21251__a,0);
} 
return G__21250__delegate.call(this,p,q,idx,p__21242);};
G__21250.cljs$lang$maxFixedArity = 3;
G__21250.cljs$lang$applyTo = (function (arglist__21252){
var p = cljs.core.first(arglist__21252);
arglist__21252 = cljs.core.next(arglist__21252);
var q = cljs.core.first(arglist__21252);
arglist__21252 = cljs.core.next(arglist__21252);
var idx = cljs.core.first(arglist__21252);
var p__21242 = cljs.core.rest(arglist__21252);
return G__21250__delegate(p,q,idx,p__21242);
});
G__21250.cljs$core$IFn$_invoke$arity$variadic = G__21250__delegate;
return G__21250;
})()
;
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args21254 = [];
var len__8605__auto___21264 = arguments.length;
var i__8606__auto___21265 = (0);
while(true){
if((i__8606__auto___21265 < len__8605__auto___21264)){
args21254.push((arguments[i__8606__auto___21265]));

var G__21266 = (i__8606__auto___21265 + (1));
i__8606__auto___21265 = G__21266;
continue;
} else {
}
break;
}

var G__21256 = args21254.length;
switch (G__21256) {
case 0:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21254.length)].join('')));

}
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1(null);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1 = (function (p__21257){
var map__21258 = p__21257;
var map__21258__$1 = ((((!((map__21258 == null)))?((((map__21258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21258):map__21258);
var opts = map__21258__$1;
var __rotate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21258__$1,cljs.core.cst$kw$__rotate_QMARK_);
var __offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21258__$1,cljs.core.cst$kw$__offset);
var opts__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$__rotate_QMARK_,cljs.core.array_seq([cljs.core.cst$kw$__offset], 0)),cljs.core.cst$kw$text_DASH_anchor,((function (map__21258,map__21258__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__21253_SHARP_){
var or__7389__auto__ = p1__21253_SHARP_;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "middle";
}
});})(map__21258,map__21258__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,map__21258,map__21258__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__21268__delegate = function (p,q,idx,p__21260){
var vec__21261 = p__21260;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21261,(0),null);
var temp__6751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$__label,idx], null));
if(cljs.core.truth_(temp__6751__auto__)){
var label = temp__6751__auto__;
var p__$1 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var m = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$transform,[cljs.core.str("rotate("),cljs.core.str(thi.ng.math.core.degrees(thi.ng.geom.core.heading(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p__$1,q))))),cljs.core.str(" "),cljs.core.str(cljs.core.first(m)),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1))),cljs.core.str(")")].join('')):opts__$1);
var x__8318__auto__ = thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3(m,label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attribs,cljs.core.cst$kw$__label),opts__$2], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__8318__auto__);
} else {
return null;
}
};
var G__21268 = function (p,q,idx,var_args){
var p__21260 = null;
if (arguments.length > 3) {
var G__21269__i = 0, G__21269__a = new Array(arguments.length -  3);
while (G__21269__i < G__21269__a.length) {G__21269__a[G__21269__i] = arguments[G__21269__i + 3]; ++G__21269__i;}
  p__21260 = new cljs.core.IndexedSeq(G__21269__a,0);
} 
return G__21268__delegate.call(this,p,q,idx,p__21260);};
G__21268.cljs$lang$maxFixedArity = 3;
G__21268.cljs$lang$applyTo = (function (arglist__21270){
var p = cljs.core.first(arglist__21270);
arglist__21270 = cljs.core.next(arglist__21270);
var q = cljs.core.first(arglist__21270);
arglist__21270 = cljs.core.next(arglist__21270);
var idx = cljs.core.first(arglist__21270);
var p__21260 = cljs.core.rest(arglist__21270);
return G__21268__delegate(p,q,idx,p__21260);
});
G__21268.cljs$core$IFn$_invoke$arity$variadic = G__21268__delegate;
return G__21268;
})()
;
;})(opts__$1,map__21258,map__21258__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = 1;

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21276 = arguments.length;
var i__8606__auto___21277 = (0);
while(true){
if((i__8606__auto___21277 < len__8605__auto___21276)){
args__8612__auto__.push((arguments[i__8606__auto___21277]));

var G__21278 = (i__8606__auto___21277 + (1));
i__8606__auto___21277 = G__21278;
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
var G__21279__delegate = function (p,q,idx,p__21272){
var vec__21273 = p__21272;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21273,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__21273,attribs){
return (function (acc,f){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(p,q,idx,attribs) : f.call(null,p,q,idx,attribs)));
});})(vec__21273,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__21279 = function (p,q,idx,var_args){
var p__21272 = null;
if (arguments.length > 3) {
var G__21280__i = 0, G__21280__a = new Array(arguments.length -  3);
while (G__21280__i < G__21280__a.length) {G__21280__a[G__21280__i] = arguments[G__21280__i + 3]; ++G__21280__i;}
  p__21272 = new cljs.core.IndexedSeq(G__21280__a,0);
} 
return G__21279__delegate.call(this,p,q,idx,p__21272);};
G__21279.cljs$lang$maxFixedArity = 3;
G__21279.cljs$lang$applyTo = (function (arglist__21281){
var p = cljs.core.first(arglist__21281);
arglist__21281 = cljs.core.next(arglist__21281);
var q = cljs.core.first(arglist__21281);
arglist__21281 = cljs.core.next(arglist__21281);
var idx = cljs.core.first(arglist__21281);
var p__21272 = cljs.core.rest(arglist__21281);
return G__21279__delegate(p,q,idx,p__21272);
});
G__21279.cljs$core$IFn$_invoke$arity$variadic = G__21279__delegate;
return G__21279;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq21271){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21271));
});

