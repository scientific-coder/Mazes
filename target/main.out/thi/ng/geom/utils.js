// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.dstruct.core');
goog.require('thi.ng.math.core');
thi.ng.geom.utils.closest_point_coeff = (function thi$ng$geom$utils$closest_point_coeff(p,a,b){
var d = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a);
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,a),d) / thi.ng.math.core.mag_squared(d));
});
thi.ng.geom.utils.closest_point_on_line = (function thi$ng$geom$utils$closest_point_on_line(p,a,b){
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,thi.ng.geom.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.utils.closest_point_on_segment = (function thi$ng$geom$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t);
}
}
});
thi.ng.geom.utils.closest_point_on_segments = (function thi$ng$geom$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16984_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.closest_point_on_segment,p,p1__16984_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.utils.closest_line_between = (function thi$ng$geom$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b2,a2);
if(cljs.core.not(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.vector.V3,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b1,a1);
if(cljs.core.not(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.vector.V3,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(a1,a2);
var d1343 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p13,p43);
var d4321 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p43,p21);
var d1321 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p13,p21);
var d4343 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p43,p43);
var d2121 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$parallel], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$intersect,cljs.core.cst$kw$a,thi.ng.math.core.madd(p21,ua,a1),cljs.core.cst$kw$b,thi.ng.math.core.madd(p43,ub,a2),cljs.core.cst$kw$ua,ua,cljs.core.cst$kw$ub,ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.utils.dist_STAR_ = (function thi$ng$geom$utils$dist_STAR_(rf){
return (function (c,points){
var G__16987 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16985_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__16985_SHARP_);
})),rf,(0),points);
return Math.sqrt(G__16987);
});
});
thi.ng.geom.utils.min_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.utils.max_dist = thi.ng.geom.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.utils.arc_length_index = (function thi$ng$geom$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16988_SHARP_){
return thi.ng.geom.core.dist(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16988_SHARP_,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16988_SHARP_,(1)));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),points));
});
thi.ng.geom.utils.arc_length = (function thi$ng$geom$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.utils.centroid = (function thi$ng$geom$utils$centroid(coll){
var G__16990 = cljs.core.count(coll);
switch (G__16990) {
case (0):
return null;

break;
case (1):
return cljs.core.first(coll);

break;
case (2):
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(cljs.core.first(coll),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(1)));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = ((function (s,G__16990){
return (function (x,_){
return (x * s);
});})(s,G__16990))
;
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4(cljs.core.first(coll),cljs.core._PLUS_,f,cljs.core.rest(coll));

}
});
thi.ng.geom.utils.center = (function thi$ng$geom$utils$center(var_args){
var args16993 = [];
var len__8605__auto___16996 = arguments.length;
var i__8606__auto___16997 = (0);
while(true){
if((i__8606__auto___16997 < len__8605__auto___16996)){
args16993.push((arguments[i__8606__auto___16997]));

var G__16998 = (i__8606__auto___16997 + (1));
i__8606__auto___16997 = G__16998;
continue;
} else {
}
break;
}

var G__16995 = args16993.length;
switch (G__16995) {
case 2:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16993.length)].join('')));

}
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),c_SINGLEQUOTE_,coll);
});

thi.ng.geom.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (d){
return (function (p1__16992_SHARP_){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(p1__16992_SHARP_,d);
});})(d))
,coll);
});

thi.ng.geom.utils.center.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.scale_size = (function thi$ng$geom$utils$scale_size(var_args){
var args17001 = [];
var len__8605__auto___17004 = arguments.length;
var i__8606__auto___17005 = (0);
while(true){
if((i__8606__auto___17005 < len__8605__auto___17004)){
args17001.push((arguments[i__8606__auto___17005]));

var G__17006 = (i__8606__auto___17005 + (1));
i__8606__auto___17005 = G__17006;
continue;
} else {
}
break;
}

var G__17003 = args17001.length;
switch (G__17003) {
case 2:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17001.length)].join('')));

}
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.centroid(coll),s,coll);
});

thi.ng.geom.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17000_SHARP_){
return thi.ng.math.core.madd(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1__17000_SHARP_,c),s,c);
}),coll);
});

thi.ng.geom.utils.scale_size.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.bounds_STAR_ = (function thi$ng$geom$utils$bounds_STAR_(zero,coll){
var c = cljs.core.count(coll);
if((c > (1))){
var vec__17011 = coll;
var seq__17012 = cljs.core.seq(vec__17011);
var first__17013 = cljs.core.first(seq__17012);
var seq__17012__$1 = cljs.core.next(seq__17012);
var x = first__17013;
var xs = seq__17012__$1;
var p = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(q,p)], null);
} else {
if((c === (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(coll),zero], null);
} else {
return null;

}
}
});
thi.ng.geom.utils.bounding_rect_raw = (function thi$ng$geom$utils$bounding_rect_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V2,points);
});
thi.ng.geom.utils.bounding_box_raw = (function thi$ng$geom$utils$bounding_box_raw(points){
return thi.ng.geom.utils.bounds_STAR_(thi.ng.geom.vector.V3,points);
});
thi.ng.geom.utils.radial_bounds = (function thi$ng$geom$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(c) : ctor.call(null,c)),((cljs.core.coll_QMARK_(r_or_points))?(thi.ng.geom.utils.max_dist.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.utils.max_dist.cljs$core$IFn$_invoke$arity$2(c,r_or_points) : thi.ng.geom.utils.max_dist.call(null,c,r_or_points)):r_or_points)], null);
});
thi.ng.geom.utils.axis_bounds = (function thi$ng$geom$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17014_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17014_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.utils.axis_range = (function thi$ng$geom$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.utils.delta_contains = (function thi$ng$geom$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__17015_SHARP_){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(p,p1__17015_SHARP_,eps);
}),points);
});
thi.ng.geom.utils.from_barycentric = (function thi$ng$geom$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core._STAR_,points,weights));
});
/**
 * Takes a seq of points and normalized index (0.0 .. 1.0), returns
 *   interpolated point at position t.
 */
thi.ng.geom.utils.point_at_index = (function thi$ng$geom$utils$point_at_index(points,t){
var n = (cljs.core.count(points) - (1));
var t_SINGLEQUOTE_ = (t * n);
var ti = (t_SINGLEQUOTE_ | (0));
if((ti < n)){
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,ti),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(ti + (1))),(t_SINGLEQUOTE_ - ti));
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(((ti < (0)))?(0):n));
}
});
thi.ng.geom.utils.point_at_STAR_ = (function thi$ng$geom$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)))){
var G__17016 = (i__$1 + (1));
i__$1 = G__17016;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i1) : idx.call(null,i1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)) - pi))),i__$1], null);
});
thi.ng.geom.utils.point_at = (function thi$ng$geom$utils$point_at(var_args){
var args17017 = [];
var len__8605__auto___17020 = arguments.length;
var i__8606__auto___17021 = (0);
while(true){
if((i__8606__auto___17021 < len__8605__auto___17020)){
args17017.push((arguments[i__8606__auto___17021]));

var G__17022 = (i__8606__auto___17021 + (1));
i__8606__auto___17021 = G__17022;
continue;
} else {
}
break;
}

var G__17019 = args17017.length;
switch (G__17019) {
case 2:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17017.length)].join('')));

}
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
});

thi.ng.geom.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__7389__auto__ = idx;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return thi.ng.geom.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
});

thi.ng.geom.utils.point_at.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.sample_uniform_STAR_ = (function thi$ng$geom$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__17027 = thi.ng.geom.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027,(1),null);
var G__17030 = (t + delta);
var G__17031 = (i__$1 | (0));
var G__17032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__17030;
i = G__17031;
acc = G__17032;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.utils.sample_uniform = (function thi$ng$geom$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.utils.sample_segment_with_res = (function thi$ng$geom$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__8246__auto__ = (function thi$ng$geom$utils$sample_segment_with_res_$_iter__17039(s__17040){
return (new cljs.core.LazySeq(null,(function (){
var s__17040__$1 = s__17040;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__17040__$1);
if(temp__6753__auto__){
var s__17040__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17040__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__17040__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__17042 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__17041 = (0);
while(true){
if((i__17041 < size__8245__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__17041);
cljs.core.chunk_append(b__17042,thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t));

var G__17045 = (i__17041 + (1));
i__17041 = G__17045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17042),thi$ng$geom$utils$sample_segment_with_res_$_iter__17039(cljs.core.chunk_rest(s__17040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17042),null);
}
} else {
var t = cljs.core.first(s__17040__$2);
return cljs.core.cons(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(a,b,t),thi$ng$geom$utils$sample_segment_with_res_$_iter__17039(cljs.core.rest(s__17040__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8246__auto__(thi.ng.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.utils.map_bilinear = (function thi$ng$geom$utils$map_bilinear(p__17046,p__17047){
var vec__17054 = p__17046;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17054,(3),null);
var vec__17057 = p__17047;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17057,(1),null);
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.utils.map_trilinear = (function thi$ng$geom$utils$map_trilinear(p__17060,p__17061){
var vec__17068 = p__17060;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(7),null);
var vec__17071 = p__17061;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17071,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17071,(2),null);
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(a,d,e,h,u,v),thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6(b,c,f,g,u,v),w);
});
thi.ng.geom.utils.tessellate_with_point = (function thi$ng$geom$utils$tessellate_with_point(var_args){
var args17075 = [];
var len__8605__auto___17078 = arguments.length;
var i__8606__auto___17079 = (0);
while(true){
if((i__8606__auto___17079 < len__8605__auto___17078)){
args17075.push((arguments[i__8606__auto___17079]));

var G__17080 = (i__8606__auto___17079 + (1));
i__8606__auto___17079 = G__17080;
continue;
} else {
}
break;
}

var G__17077 = args17075.length;
switch (G__17077) {
case 1:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17075.length)].join('')));

}
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
});

thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17074_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,cljs.core.first(p1__17074_SHARP_),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17074_SHARP_,(1))],null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
});

thi.ng.geom.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.tessellate_with_first = (function thi$ng$geom$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var v0 = cljs.core.first(points);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v0){
return (function (p__17086){
var vec__17087 = p__17086;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17087,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17087,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(v0))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.rest(points)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$utils$tessellate_tri_with_midpoints(p__17090){
var vec__17094 = p__17090;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(2),null);
var ab = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(a,b);
var bc = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(b,c);
var ca = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.utils.tessellate_3 = (function thi$ng$geom$utils$tessellate_3(points){
var pred__17103 = cljs.core._EQ__EQ_;
var expr__17104 = cljs.core.count(points);
if(cljs.core.truth_((pred__17103.cljs$core$IFn$_invoke$arity$2 ? pred__17103.cljs$core$IFn$_invoke$arity$2((3),expr__17104) : pred__17103.call(null,(3),expr__17104)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((pred__17103.cljs$core$IFn$_invoke$arity$2 ? pred__17103.cljs$core$IFn$_invoke$arity$2((4),expr__17104) : pred__17103.call(null,(4),expr__17104)))){
var vec__17106 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17106,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.utils.tessellate_max4 = (function thi$ng$geom$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.utils.tessellate_face = (function thi$ng$geom$utils$tessellate_face(tess_fn){
return (function (p__17113){
var vec__17114 = p__17113;
var verts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114,(0),null);
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114,(1),null);
var verts__$1 = (tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(verts) : tess_fn.call(null,verts));
var attribs__$1 = cljs.core.reduce_kv(((function (verts__$1,vec__17114,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(tess_fn.cljs$core$IFn$_invoke$arity$1 ? tess_fn.cljs$core$IFn$_invoke$arity$1(v) : tess_fn.call(null,v)));
});})(verts__$1,vec__17114,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (verts__$1,attribs__$1,vec__17114,verts,attribs){
return (function (i,verts__$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verts__$2,cljs.core.reduce_kv(((function (verts__$1,attribs__$1,vec__17114,verts,attribs){
return (function (acc,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i));
});})(verts__$1,attribs__$1,vec__17114,verts,attribs))
,cljs.core.PersistentArrayMap.EMPTY,attribs__$1)], null);
});})(verts__$1,attribs__$1,vec__17114,verts,attribs))
,verts__$1);
});
});
thi.ng.geom.utils.ortho_normal = (function thi$ng$geom$utils$ortho_normal(var_args){
var args17117 = [];
var len__8605__auto___17124 = arguments.length;
var i__8606__auto___17125 = (0);
while(true){
if((i__8606__auto___17125 < len__8605__auto___17124)){
args17117.push((arguments[i__8606__auto___17125]));

var G__17126 = (i__8606__auto___17125 + (1));
i__8606__auto___17125 = G__17126;
continue;
} else {
}
break;
}

var G__17119 = args17117.length;
switch (G__17119) {
case 1:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17117.length)].join('')));

}
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__17120){
var vec__17121 = p__17120;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(2),null);
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(a,b));
});

thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});

thi.ng.geom.utils.ortho_normal.cljs$lang$maxFixedArity = 3;

thi.ng.geom.utils.norm_sign2 = (function thi$ng$geom$utils$norm_sign2(p__17128,p__17129,p__17130){
var vec__17140 = p__17128;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17140,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17140,(1),null);
var vec__17143 = p__17129;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17143,(1),null);
var vec__17146 = p__17130;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17146,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17146,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.utils.norm_sign3 = (function thi$ng$geom$utils$norm_sign3(a,b,c){
return thi.ng.math.core.mag(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)));
});
thi.ng.geom.utils.tri_area2 = (function thi$ng$geom$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign2(a,b,c));
});
thi.ng.geom.utils.tri_area3 = (function thi$ng$geom$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.utils.norm_sign3(a,b,c));
});
thi.ng.geom.utils.clockwise2_QMARK_ = (function thi$ng$geom$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.utils.clockwise3_QMARK_ = (function thi$ng$geom$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.cross(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a)),n) > (0));
});
thi.ng.geom.utils.triangle_barycentric_coords = (function thi$ng$geom$utils$triangle_barycentric_coords(var_args){
var args17149 = [];
var len__8605__auto___17156 = arguments.length;
var i__8606__auto___17157 = (0);
while(true){
if((i__8606__auto___17157 < len__8605__auto___17156)){
args17149.push((arguments[i__8606__auto___17157]));

var G__17158 = (i__8606__auto___17157 + (1));
i__8606__auto___17157 = G__17158;
continue;
} else {
}
break;
}

var G__17151 = args17149.length;
switch (G__17151) {
case 2:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17149.length)].join('')));

}
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__17152,p){
var vec__17153 = p__17152;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(2),null);
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a),thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a));
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,a);
var uu = thi.ng.math.core.mag_squared(u);
var vv = thi.ng.math.core.mag_squared(v);
var uv = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(u,v);
var wu = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(w,u);
var wv = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});

thi.ng.geom.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6;

thi.ng.geom.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(cljs.core.truth_(thi.ng.geom.utils.clockwise2_QMARK_(a,b,c))){
return ((thi.ng.geom.utils.norm_sign2(a,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,b,p) >= 0.0));
} else {
return ((thi.ng.geom.utils.norm_sign2(b,c,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.utils.norm_sign2(c,a,p) >= 0.0));
}
});
thi.ng.geom.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(b,a);
var v = thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(c,a);
var n = thi.ng.geom.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,p) - thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,cl))){
var vec__17163 = thi.ng.geom.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17163,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17163,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17163,(2),null);
var and__7377__auto__ = (u__$1 >= 0.0);
if(and__7377__auto__){
var and__7377__auto____$1 = (w >= 0.0);
if(and__7377__auto____$1){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
} else {
return null;
}
});
thi.ng.geom.utils.tessellating_transducer = (function thi$ng$geom$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.utils.area_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__17166_SHARP_){
var G__17167 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.tri_area3,p1__17166_SHARP_);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__17167) : thi.ng.math.core.abs_STAR_.call(null,G__17167));
}));
thi.ng.geom.utils.volume_xf = thi.ng.geom.utils.tessellating_transducer((function (p1__17168_SHARP_){
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__17168_SHARP_.call(null,(0))),thi.ng.math.core.cross((p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__17168_SHARP_.call(null,(1))),(p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17168_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__17168_SHARP_.call(null,(2)))));
}));
thi.ng.geom.utils.total_area_3d = (function thi$ng$geom$utils$total_area_3d(var_args){
var args17169 = [];
var len__8605__auto___17172 = arguments.length;
var i__8606__auto___17173 = (0);
while(true){
if((i__8606__auto___17173 < len__8605__auto___17172)){
args17169.push((arguments[i__8606__auto___17173]));

var G__17174 = (i__8606__auto___17173 + (1));
i__8606__auto___17173 = G__17174;
continue;
} else {
}
break;
}

var G__17171 = args17169.length;
switch (G__17171) {
case 1:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17169.length)].join('')));

}
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.area_xf,cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.area_xf),cljs.core._PLUS_,faces);
});

thi.ng.geom.utils.total_area_3d.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.total_volume = (function thi$ng$geom$utils$total_volume(var_args){
var args17176 = [];
var len__8605__auto___17179 = arguments.length;
var i__8606__auto___17180 = (0);
while(true){
if((i__8606__auto___17180 < len__8605__auto___17179)){
args17176.push((arguments[i__8606__auto___17180]));

var G__17181 = (i__8606__auto___17180 + (1));
i__8606__auto___17180 = G__17181;
continue;
} else {
}
break;
}

var G__17178 = args17176.length;
switch (G__17178) {
case 1:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17176.length)].join('')));

}
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$core$IFn$_invoke$arity$2 = (function (xf,faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xf,thi.ng.geom.utils.volume_xf),cljs.core._PLUS_,faces) / 6.0);
});

thi.ng.geom.utils.total_volume.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_rect = (function thi$ng$geom$utils$bounding_rect(points){
var vec__17186 = thi.ng.geom.utils.bounding_rect_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17186,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_box = (function thi$ng$geom$utils$bounding_box(points){
var vec__17192 = thi.ng.geom.utils.bounding_box_raw(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17192,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17192,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size));
} else {
return null;
}
});
thi.ng.geom.utils.bounding_circle = (function thi$ng$geom$utils$bounding_circle(var_args){
var args17195 = [];
var len__8605__auto___17201 = arguments.length;
var i__8606__auto___17202 = (0);
while(true){
if((i__8606__auto___17202 < len__8605__auto___17201)){
args17195.push((arguments[i__8606__auto___17202]));

var G__17203 = (i__8606__auto___17202 + (1));
i__8606__auto___17202 = G__17203;
continue;
} else {
}
break;
}

var G__17197 = args17195.length;
switch (G__17197) {
case 1:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17195.length)].join('')));

}
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
});

thi.ng.geom.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__17198 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17198,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r));
});

thi.ng.geom.utils.bounding_circle.cljs$lang$maxFixedArity = 2;

thi.ng.geom.utils.bounding_sphere = (function thi$ng$geom$utils$bounding_sphere(var_args){
var args17205 = [];
var len__8605__auto___17211 = arguments.length;
var i__8606__auto___17212 = (0);
while(true){
if((i__8606__auto___17212 < len__8605__auto___17211)){
args17205.push((arguments[i__8606__auto___17212]));

var G__17213 = (i__8606__auto___17212 + (1));
i__8606__auto___17212 = G__17213;
continue;
} else {
}
break;
}

var G__17207 = args17205.length;
switch (G__17207) {
case 1:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17205.length)].join('')));

}
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.utils.centroid(points),points);
});

thi.ng.geom.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__17208 = thi.ng.geom.utils.radial_bounds(thi.ng.geom.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r));
});

thi.ng.geom.utils.bounding_sphere.cljs$lang$maxFixedArity = 2;

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.utils.coll_bounds = (function thi$ng$geom$utils$coll_bounds(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.union,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.utils.fit_all_into_bounds = (function thi$ng$geom$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.utils.coll_bounds(coll);
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,cljs.core.cst$kw$size),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$size)));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(b,s),thi.ng.geom.core.centroid(bounds));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b,s,b_SINGLEQUOTE_){
return (function (p1__17215_SHARP_){
return thi.ng.geom.core.scale_size(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2(p1__17215_SHARP_,thi.ng.geom.core.unmap_point(b_SINGLEQUOTE_,thi.ng.geom.core.map_point(b,thi.ng.geom.core.centroid(p1__17215_SHARP_)))),s);
});})(b,s,b_SINGLEQUOTE_))
,coll);
});
/**
 * Takes a target mesh, its add-face fn and a source mesh or face
 *   sequence. Adds faces to target mesh and returns it.
 */
thi.ng.geom.utils.into_mesh = (function thi$ng$geom$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_face,mesh,((((!((mesh_or_faces == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === mesh_or_faces.thi$ng$geom$core$IFaceAccess$)))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh_or_faces,true):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of raw faces (i.e. each face as
 *   2-elem vector of [verts attribs]. Returns new mesh.
 */
thi.ng.geom.utils.map_mesh = (function thi$ng$geom$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into(thi.ng.geom.core.clear_STAR_(mesh),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.array_seq([thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh,true)], 0)));
});
/**
 * Takes a mesh, its add-face fn and a vertex transformation fn.
 *   Transforms all mesh vertices and returns new mesh.
 */
thi.ng.geom.utils.transform_mesh = (function thi$ng$geom$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = ((((!((tx == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === tx.thi$ng$geom$core$IVectorTransform$)))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.IVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector(tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tx__$1){
return (function (acc,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,v,(tx__$1.cljs$core$IFn$_invoke$arity$1 ? tx__$1.cljs$core$IFn$_invoke$arity$1(v) : tx__$1.call(null,v)));
});})(tx__$1))
,cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1(mesh)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tx__$1,verts_SINGLEQUOTE_){
return (function (mesh__$1,p__17226){
var vec__17227 = p__17226;
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17227,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17227,(1),null);
var G__17230 = mesh__$1;
var G__17231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(verts_SINGLEQUOTE_,fv),fa], null);
return (add_face.cljs$core$IFn$_invoke$arity$2 ? add_face.cljs$core$IFn$_invoke$arity$2(G__17230,G__17231) : add_face.call(null,G__17230,G__17231));
});})(tx__$1,verts_SINGLEQUOTE_))
,thi.ng.geom.core.clear_STAR_(mesh),thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2(mesh,true));
});
