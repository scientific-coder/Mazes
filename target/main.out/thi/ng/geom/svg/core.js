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
var G__14929 = (n | (0));
switch (G__14929) {
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
var vec__14934 = mat;
var a = cljs.core.nth.call(null,vec__14934,(0),null);
var c = cljs.core.nth.call(null,vec__14934,(1),null);
var e = cljs.core.nth.call(null,vec__14934,(2),null);
var b = cljs.core.nth.call(null,vec__14934,(3),null);
var d = cljs.core.nth.call(null,vec__14934,(4),null);
var f = cljs.core.nth.call(null,vec__14934,(5),null);
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
var G__14937 = ((cljs.core._EQ_.call(null,"__",cljs.core.subs.call(null,cljs.core.name.call(null,cljs.core.first.call(null,ks)),(0),(2))))?cljs.core.dissoc_BANG_.call(null,acc,cljs.core.first.call(null,ks)):acc);
var G__14938 = cljs.core.next.call(null,ks);
acc = G__14937;
ks = G__14938;
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
var len__8605__auto___14941 = arguments.length;
var i__8606__auto___14942 = (0);
while(true){
if((i__8606__auto___14942 < len__8605__auto___14941)){
args__8612__auto__.push((arguments[i__8606__auto___14942]));

var G__14943 = (i__8606__auto___14942 + (1));
i__8606__auto___14942 = G__14943;
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

thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq14939){
var G__14940 = cljs.core.first.call(null,seq14939);
var seq14939__$1 = cljs.core.next.call(null,seq14939);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(G__14940,seq14939__$1);
});

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14945 = arguments.length;
var i__8606__auto___14946 = (0);
while(true){
if((i__8606__auto___14946 < len__8605__auto___14945)){
args__8612__auto__.push((arguments[i__8606__auto___14946]));

var G__14947 = (i__8606__auto___14946 + (1));
i__8606__auto___14946 = G__14947;
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

thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq14944){
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14944));
});

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__14948){
var vec__14952 = p__14948;
var pos = cljs.core.nth.call(null,vec__14952,(0),null);
var col = cljs.core.nth.call(null,vec__14952,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref.call(null,thi.ng.color.core.as_css.call(null,col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14958 = arguments.length;
var i__8606__auto___14959 = (0);
while(true){
if((i__8606__auto___14959 < len__8605__auto___14958)){
args__8612__auto__.push((arguments[i__8606__auto___14959]));

var G__14960 = (i__8606__auto___14959 + (1));
i__8606__auto___14959 = G__14960;
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

thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq14955){
var G__14956 = cljs.core.first.call(null,seq14955);
var seq14955__$1 = cljs.core.next.call(null,seq14955);
var G__14957 = cljs.core.first.call(null,seq14955__$1);
var seq14955__$2 = cljs.core.next.call(null,seq14955__$1);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__14956,G__14957,seq14955__$2);
});

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14964 = arguments.length;
var i__8606__auto___14965 = (0);
while(true){
if((i__8606__auto___14965 < len__8605__auto___14964)){
args__8612__auto__.push((arguments[i__8606__auto___14965]));

var G__14966 = (i__8606__auto___14965 + (1));
i__8606__auto___14965 = G__14966;
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

thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq14961){
var G__14962 = cljs.core.first.call(null,seq14961);
var seq14961__$1 = cljs.core.next.call(null,seq14961);
var G__14963 = cljs.core.first.call(null,seq14961__$1);
var seq14961__$2 = cljs.core.next.call(null,seq14961__$1);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__14962,G__14963,seq14961__$2);
});

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14969 = arguments.length;
var i__8606__auto___14970 = (0);
while(true){
if((i__8606__auto___14970 < len__8605__auto___14969)){
args__8612__auto__.push((arguments[i__8606__auto___14970]));

var G__14971 = (i__8606__auto___14970 + (1));
i__8606__auto___14970 = G__14971;
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

thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq14967){
var G__14968 = cljs.core.first.call(null,seq14967);
var seq14967__$1 = cljs.core.next.call(null,seq14967);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(G__14968,seq14967__$1);
});

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args14972 = [];
var len__8605__auto___14975 = arguments.length;
var i__8606__auto___14976 = (0);
while(true){
if((i__8606__auto___14976 < len__8605__auto___14975)){
args14972.push((arguments[i__8606__auto___14976]));

var G__14977 = (i__8606__auto___14976 + (1));
i__8606__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var G__14974 = args14972.length;
switch (G__14974) {
case 1:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14972.length)].join('')));

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
var args14979 = [];
var len__8605__auto___14982 = arguments.length;
var i__8606__auto___14983 = (0);
while(true){
if((i__8606__auto___14983 < len__8605__auto___14982)){
args14979.push((arguments[i__8606__auto___14983]));

var G__14984 = (i__8606__auto___14983 + (1));
i__8606__auto___14983 = G__14984;
continue;
} else {
}
break;
}

var G__14981 = args14979.length;
switch (G__14981) {
case 2:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14979.length)].join('')));

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
var args14986 = [];
var len__8605__auto___14989 = arguments.length;
var i__8606__auto___14990 = (0);
while(true){
if((i__8606__auto___14990 < len__8605__auto___14989)){
args14986.push((arguments[i__8606__auto___14990]));

var G__14991 = (i__8606__auto___14990 + (1));
i__8606__auto___14990 = G__14991;
continue;
} else {
}
break;
}

var G__14988 = args14986.length;
switch (G__14988) {
case 2:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14986.length)].join('')));

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
var args14993 = [];
var len__8605__auto___14996 = arguments.length;
var i__8606__auto___14997 = (0);
while(true){
if((i__8606__auto___14997 < len__8605__auto___14996)){
args14993.push((arguments[i__8606__auto___14997]));

var G__14998 = (i__8606__auto___14997 + (1));
i__8606__auto___14997 = G__14998;
continue;
} else {
}
break;
}

var G__14995 = args14993.length;
switch (G__14995) {
case 6:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14993.length)].join('')));

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
var args15000 = [];
var len__8605__auto___15003 = arguments.length;
var i__8606__auto___15004 = (0);
while(true){
if((i__8606__auto___15004 < len__8605__auto___15003)){
args15000.push((arguments[i__8606__auto___15004]));

var G__15005 = (i__8606__auto___15004 + (1));
i__8606__auto___15004 = G__15005;
continue;
} else {
}
break;
}

var G__15002 = args15000.length;
switch (G__15002) {
case 3:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15000.length)].join('')));

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
var args15007 = [];
var len__8605__auto___15010 = arguments.length;
var i__8606__auto___15011 = (0);
while(true){
if((i__8606__auto___15011 < len__8605__auto___15010)){
args15007.push((arguments[i__8606__auto___15011]));

var G__15012 = (i__8606__auto___15011 + (1));
i__8606__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var G__15009 = args15007.length;
switch (G__15009) {
case 2:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15007.length)].join('')));

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
var args15014 = [];
var len__8605__auto___15017 = arguments.length;
var i__8606__auto___15018 = (0);
while(true){
if((i__8606__auto___15018 < len__8605__auto___15017)){
args15014.push((arguments[i__8606__auto___15018]));

var G__15019 = (i__8606__auto___15018 + (1));
i__8606__auto___15018 = G__15019;
continue;
} else {
}
break;
}

var G__15016 = args15014.length;
switch (G__15016) {
case 4:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15014.length)].join('')));

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
var args15021 = [];
var len__8605__auto___15024 = arguments.length;
var i__8606__auto___15025 = (0);
while(true){
if((i__8606__auto___15025 < len__8605__auto___15024)){
args15021.push((arguments[i__8606__auto___15025]));

var G__15026 = (i__8606__auto___15025 + (1));
i__8606__auto___15025 = G__15026;
continue;
} else {
}
break;
}

var G__15023 = args15021.length;
switch (G__15023) {
case 1:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15021.length)].join('')));

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
var args15028 = [];
var len__8605__auto___15039 = arguments.length;
var i__8606__auto___15040 = (0);
while(true){
if((i__8606__auto___15040 < len__8605__auto___15039)){
args15028.push((arguments[i__8606__auto___15040]));

var G__15041 = (i__8606__auto___15040 + (1));
i__8606__auto___15040 = G__15041;
continue;
} else {
}
break;
}

var G__15030 = args15028.length;
switch (G__15030) {
case 4:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15028.length)].join('')));

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
return (function (i,p__15035){
var vec__15036 = p__15035;
var p = cljs.core.nth.call(null,vec__15036,(0),null);
var q = cljs.core.nth.call(null,vec__15036,(1),null);
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
var args15043 = [];
var len__8605__auto___15046 = arguments.length;
var i__8606__auto___15047 = (0);
while(true){
if((i__8606__auto___15047 < len__8605__auto___15046)){
args15043.push((arguments[i__8606__auto___15047]));

var G__15048 = (i__8606__auto___15047 + (1));
i__8606__auto___15047 = G__15048;
continue;
} else {
}
break;
}

var G__15045 = args15043.length;
switch (G__15045) {
case 1:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15043.length)].join('')));

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
var args15050 = [];
var len__8605__auto___15053 = arguments.length;
var i__8606__auto___15054 = (0);
while(true){
if((i__8606__auto___15054 < len__8605__auto___15053)){
args15050.push((arguments[i__8606__auto___15054]));

var G__15055 = (i__8606__auto___15054 + (1));
i__8606__auto___15054 = G__15055;
continue;
} else {
}
break;
}

var G__15052 = args15050.length;
switch (G__15052) {
case 1:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15050.length)].join('')));

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
var args15057 = [];
var len__8605__auto___15064 = arguments.length;
var i__8606__auto___15065 = (0);
while(true){
if((i__8606__auto___15065 < len__8605__auto___15064)){
args15057.push((arguments[i__8606__auto___15065]));

var G__15066 = (i__8606__auto___15065 + (1));
i__8606__auto___15065 = G__15066;
continue;
} else {
}
break;
}

var G__15059 = args15057.length;
switch (G__15059) {
case 3:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15057.length)].join('')));

}
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$3 = (function (len,theta,solid_QMARK_){
return thi.ng.geom.svg.core.arrow_head.call(null,len,theta,solid_QMARK_,null);
});

thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$4 = (function (len,theta,solid_QMARK_,opts){
return (function() { 
var G__15068__delegate = function (p,q,idx,p__15060){
var vec__15061 = p__15060;
var attribs = cljs.core.nth.call(null,vec__15061,(0),null);
var q__$1 = thi.ng.geom.vector.vec2.call(null,q);
var d = thi.ng.math.core.normalize.call(null,thi.ng.math.core._.call(null,q__$1,p),len);
var x__8318__auto__ = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,(- theta))),q__$1,thi.ng.math.core._.call(null,q__$1,thi.ng.geom.core.rotate.call(null,d,theta))], null),cljs.core.merge.call(null,attribs,opts));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8318__auto__);
};
var G__15068 = function (p,q,idx,var_args){
var p__15060 = null;
if (arguments.length > 3) {
var G__15069__i = 0, G__15069__a = new Array(arguments.length -  3);
while (G__15069__i < G__15069__a.length) {G__15069__a[G__15069__i] = arguments[G__15069__i + 3]; ++G__15069__i;}
  p__15060 = new cljs.core.IndexedSeq(G__15069__a,0);
} 
return G__15068__delegate.call(this,p,q,idx,p__15060);};
G__15068.cljs$lang$maxFixedArity = 3;
G__15068.cljs$lang$applyTo = (function (arglist__15070){
var p = cljs.core.first(arglist__15070);
arglist__15070 = cljs.core.next(arglist__15070);
var q = cljs.core.first(arglist__15070);
arglist__15070 = cljs.core.next(arglist__15070);
var idx = cljs.core.first(arglist__15070);
var p__15060 = cljs.core.rest(arglist__15070);
return G__15068__delegate(p,q,idx,p__15060);
});
G__15068.cljs$core$IFn$_invoke$arity$variadic = G__15068__delegate;
return G__15068;
})()
;
});

thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = 4;

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args15072 = [];
var len__8605__auto___15082 = arguments.length;
var i__8606__auto___15083 = (0);
while(true){
if((i__8606__auto___15083 < len__8605__auto___15082)){
args15072.push((arguments[i__8606__auto___15083]));

var G__15084 = (i__8606__auto___15083 + (1));
i__8606__auto___15083 = G__15084;
continue;
} else {
}
break;
}

var G__15074 = args15072.length;
switch (G__15074) {
case 0:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15072.length)].join('')));

}
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.svg.core.line_label.call(null,null);
});

thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$1 = (function (p__15075){
var map__15076 = p__15075;
var map__15076__$1 = ((((!((map__15076 == null)))?((((map__15076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15076):map__15076);
var opts = map__15076__$1;
var __rotate_QMARK_ = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.call(null,map__15076__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),new cljs.core.Keyword(null,"__offset","__offset",-9560190)),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),((function (map__15076,map__15076__$1,opts,__rotate_QMARK_,__offset){
return (function (p1__15071_SHARP_){
var or__7389__auto__ = p1__15071_SHARP_;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "middle";
}
});})(map__15076,map__15076__$1,opts,__rotate_QMARK_,__offset))
);
return ((function (opts__$1,map__15076,map__15076__$1,opts,__rotate_QMARK_,__offset){
return (function() { 
var G__15086__delegate = function (p,q,idx,p__15078){
var vec__15079 = p__15078;
var attribs = cljs.core.nth.call(null,vec__15079,(0),null);
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
var G__15086 = function (p,q,idx,var_args){
var p__15078 = null;
if (arguments.length > 3) {
var G__15087__i = 0, G__15087__a = new Array(arguments.length -  3);
while (G__15087__i < G__15087__a.length) {G__15087__a[G__15087__i] = arguments[G__15087__i + 3]; ++G__15087__i;}
  p__15078 = new cljs.core.IndexedSeq(G__15087__a,0);
} 
return G__15086__delegate.call(this,p,q,idx,p__15078);};
G__15086.cljs$lang$maxFixedArity = 3;
G__15086.cljs$lang$applyTo = (function (arglist__15088){
var p = cljs.core.first(arglist__15088);
arglist__15088 = cljs.core.next(arglist__15088);
var q = cljs.core.first(arglist__15088);
arglist__15088 = cljs.core.next(arglist__15088);
var idx = cljs.core.first(arglist__15088);
var p__15078 = cljs.core.rest(arglist__15088);
return G__15086__delegate(p,q,idx,p__15078);
});
G__15086.cljs$core$IFn$_invoke$arity$variadic = G__15086__delegate;
return G__15086;
})()
;
;})(opts__$1,map__15076,map__15076__$1,opts,__rotate_QMARK_,__offset))
});

thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = 1;

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__8612__auto__ = [];
var len__8605__auto___15094 = arguments.length;
var i__8606__auto___15095 = (0);
while(true){
if((i__8606__auto___15095 < len__8605__auto___15094)){
args__8612__auto__.push((arguments[i__8606__auto___15095]));

var G__15096 = (i__8606__auto___15095 + (1));
i__8606__auto___15095 = G__15096;
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
var G__15097__delegate = function (p,q,idx,p__15090){
var vec__15091 = p__15090;
var attribs = cljs.core.nth.call(null,vec__15091,(0),null);
return cljs.core.reduce.call(null,((function (vec__15091,attribs){
return (function (acc,f){
return cljs.core.concat.call(null,acc,f.call(null,p,q,idx,attribs));
});})(vec__15091,attribs))
,cljs.core.List.EMPTY,fns);
};
var G__15097 = function (p,q,idx,var_args){
var p__15090 = null;
if (arguments.length > 3) {
var G__15098__i = 0, G__15098__a = new Array(arguments.length -  3);
while (G__15098__i < G__15098__a.length) {G__15098__a[G__15098__i] = arguments[G__15098__i + 3]; ++G__15098__i;}
  p__15090 = new cljs.core.IndexedSeq(G__15098__a,0);
} 
return G__15097__delegate.call(this,p,q,idx,p__15090);};
G__15097.cljs$lang$maxFixedArity = 3;
G__15097.cljs$lang$applyTo = (function (arglist__15099){
var p = cljs.core.first(arglist__15099);
arglist__15099 = cljs.core.next(arglist__15099);
var q = cljs.core.first(arglist__15099);
arglist__15099 = cljs.core.next(arglist__15099);
var idx = cljs.core.first(arglist__15099);
var p__15090 = cljs.core.rest(arglist__15099);
return G__15097__delegate(p,q,idx,p__15090);
});
G__15097.cljs$core$IFn$_invoke$arity$variadic = G__15097__delegate;
return G__15097;
})()
;
});

thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0);

thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq15089){
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15089));
});


//# sourceMappingURL=core.js.map