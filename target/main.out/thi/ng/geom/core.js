// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.geom.core');
goog.require('cljs.core');
thi.ng.geom.core.native_simd_QMARK_ = !(((self["SIMD"]) == null));
goog.exportSymbol('thi.ng.geom.core.native_simd_QMARK_', thi.ng.geom.core.native_simd_QMARK_);
thi.ng.geom.core._STAR_resolution_STAR_ = (20);

/**
 * @interface
 */
thi.ng.geom.core.IDistance = function(){};

thi.ng.geom.core.dist = (function thi$ng$geom$core$dist(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDistance$dist$arity$2 == null)))){
return _.thi$ng$geom$core$IDistance$dist$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.dist[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.dist["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDistance.dist",_);
}
}
}
});

thi.ng.geom.core.dist_squared = (function thi$ng$geom$core$dist_squared(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDistance$dist_squared$arity$2 == null)))){
return _.thi$ng$geom$core$IDistance$dist_squared$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.dist_squared[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.dist_squared["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDistance.dist-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IHeading = function(){};

thi.ng.geom.core.heading = (function thi$ng$geom$core$heading(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.heading[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.heading["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading",_);
}
}
}
});

thi.ng.geom.core.heading_xy = (function thi$ng$geom$core$heading_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_xy$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_xy$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.heading_xy[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.heading_xy["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-xy",_);
}
}
}
});

thi.ng.geom.core.heading_xz = (function thi$ng$geom$core$heading_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_xz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_xz$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.heading_xz[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.heading_xz["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-xz",_);
}
}
}
});

thi.ng.geom.core.heading_yz = (function thi$ng$geom$core$heading_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$heading_yz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$heading_yz$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.heading_yz[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.heading_yz["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.heading-yz",_);
}
}
}
});

thi.ng.geom.core.angle_between = (function thi$ng$geom$core$angle_between(_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$angle_between$arity$2 == null)))){
return _.thi$ng$geom$core$IHeading$angle_between$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.angle_between[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.angle_between["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IHeading.angle-between",_);
}
}
}
});

thi.ng.geom.core.slope_xy = (function thi$ng$geom$core$slope_xy(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_xy$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_xy$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slope_xy[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slope_xy["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-xy",_);
}
}
}
});

thi.ng.geom.core.slope_xz = (function thi$ng$geom$core$slope_xz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_xz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_xz$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slope_xz[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slope_xz["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-xz",_);
}
}
}
});

thi.ng.geom.core.slope_yz = (function thi$ng$geom$core$slope_yz(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IHeading$slope_yz$arity$1 == null)))){
return _.thi$ng$geom$core$IHeading$slope_yz$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slope_yz[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slope_yz["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHeading.slope-yz",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormal = function(){};

thi.ng.geom.core.normal = (function thi$ng$geom$core$normal(var_args){
var args13901 = [];
var len__8605__auto___13904 = arguments.length;
var i__8606__auto___13905 = (0);
while(true){
if((i__8606__auto___13905 < len__8605__auto___13904)){
args13901.push((arguments[i__8606__auto___13905]));

var G__13906 = (i__8606__auto___13905 + (1));
i__8606__auto___13905 = G__13906;
continue;
} else {
}
break;
}

var G__13903 = args13901.length;
switch (G__13903) {
case 1:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13901.length)].join('')));

}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormal$normal$arity$1 == null)))){
return _.thi$ng$geom$core$INormal$normal$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormal$normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormal$normal$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.normal["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("INormal.normal",_);
}
}
}
});

thi.ng.geom.core.normal.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IPolar = function(){};

thi.ng.geom.core.as_polar = (function thi$ng$geom$core$as_polar(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolar$as_polar$arity$1 == null)))){
return _.thi$ng$geom$core$IPolar$as_polar$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_polar[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_polar["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolar.as-polar",_);
}
}
}
});

thi.ng.geom.core.as_cartesian = (function thi$ng$geom$core$as_cartesian(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolar$as_cartesian$arity$1 == null)))){
return _.thi$ng$geom$core$IPolar$as_cartesian$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_cartesian[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_cartesian["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolar.as-cartesian",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IReflect = function(){};

thi.ng.geom.core.reflect = (function thi$ng$geom$core$reflect(_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IReflect$reflect$arity$2 == null)))){
return _.thi$ng$geom$core$IReflect$reflect$arity$2(_,r);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.reflect[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__8103__auto__.call(null,_,r));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.reflect["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,r) : m__8103__auto____$1.call(null,_,r));
} else {
throw cljs.core.missing_protocol("IReflect.reflect",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorReduce = function(){};

thi.ng.geom.core.reduce_vector = (function thi$ng$geom$core$reduce_vector(var_args){
var args13908 = [];
var len__8605__auto___13911 = arguments.length;
var i__8606__auto___13912 = (0);
while(true){
if((i__8606__auto___13912 < len__8605__auto___13911)){
args13908.push((arguments[i__8606__auto___13912]));

var G__13913 = (i__8606__auto___13912 + (1));
i__8606__auto___13912 = G__13913;
continue;
} else {
}
break;
}

var G__13910 = args13908.length;
switch (G__13910) {
case 3:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13908.length)].join('')));

}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3 = (function (_,f,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 == null)))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3(_,f,xs);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__8103__auto__.call(null,_,f,xs));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__8103__auto____$1.call(null,_,f,xs));
} else {
throw cljs.core.missing_protocol("IVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4 = (function (_,f,f2,xs){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 == null)))){
return _.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4(_,f,f2,xs);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__8103__auto__.call(null,_,f,f2,xs));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.reduce_vector["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__8103__auto____$1.call(null,_,f,f2,xs));
} else {
throw cljs.core.missing_protocol("IVectorReduce.reduce-vector",_);
}
}
}
});

thi.ng.geom.core.reduce_vector.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
thi.ng.geom.core.IRotate = function(){};

thi.ng.geom.core.rotate = (function thi$ng$geom$core$rotate(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate$rotate$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate$rotate$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.rotate[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.rotate["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate.rotate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IRotate3D = function(){};

thi.ng.geom.core.rotate_x = (function thi$ng$geom$core$rotate_x(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_x$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.rotate_x[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.rotate_x["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-x",_);
}
}
}
});

thi.ng.geom.core.rotate_y = (function thi$ng$geom$core$rotate_y(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_y$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.rotate_y[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.rotate_y["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-y",_);
}
}
}
});

thi.ng.geom.core.rotate_z = (function thi$ng$geom$core$rotate_z(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_z$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.rotate_z[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.rotate_z["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-z",_);
}
}
}
});

thi.ng.geom.core.rotate_around_axis = (function thi$ng$geom$core$rotate_around_axis(_,a,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 == null)))){
return _.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3(_,a,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.rotate_around_axis[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__8103__auto__.call(null,_,a,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.rotate_around_axis["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__8103__auto____$1.call(null,_,a,t));
} else {
throw cljs.core.missing_protocol("IRotate3D.rotate-around-axis",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IScale = function(){};

thi.ng.geom.core.scale = (function thi$ng$geom$core$scale(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IScale$scale$arity$2 == null)))){
return _.thi$ng$geom$core$IScale$scale$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.scale["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IScale.scale",_);
}
}
}
});

thi.ng.geom.core.scale_size = (function thi$ng$geom$core$scale_size(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IScale$scale_size$arity$2 == null)))){
return _.thi$ng$geom$core$IScale$scale_size$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.scale_size[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.scale_size["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IScale.scale-size",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IShear = function(){};

thi.ng.geom.core.shear = (function thi$ng$geom$core$shear(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IShear$shear$arity$2 == null)))){
return _.thi$ng$geom$core$IShear$shear$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.shear["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IShear.shear",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITransform = function(){};

thi.ng.geom.core.transform = (function thi$ng$geom$core$transform(_,tx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITransform$transform$arity$2 == null)))){
return _.thi$ng$geom$core$ITransform$transform$arity$2(_,tx);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.transform[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,tx) : m__8103__auto__.call(null,_,tx));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.transform["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,tx) : m__8103__auto____$1.call(null,_,tx));
} else {
throw cljs.core.missing_protocol("ITransform.transform",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITranslate = function(){};

thi.ng.geom.core.translate = (function thi$ng$geom$core$translate(_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITranslate$translate$arity$2 == null)))){
return _.thi$ng$geom$core$ITranslate$translate$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.translate["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("ITranslate.translate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IVectorTransform = function(){};

thi.ng.geom.core.transform_vector = (function thi$ng$geom$core$transform_vector(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2 == null)))){
return _.thi$ng$geom$core$IVectorTransform$transform_vector$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.transform_vector[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.transform_vector["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IVectorTransform.transform-vector",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMatrixConvert = function(){};

thi.ng.geom.core.as_matrix = (function thi$ng$geom$core$as_matrix(var_args){
var args13915 = [];
var len__8605__auto___13918 = arguments.length;
var i__8606__auto___13919 = (0);
while(true){
if((i__8606__auto___13919 < len__8605__auto___13918)){
args13915.push((arguments[i__8606__auto___13919]));

var G__13920 = (i__8606__auto___13919 + (1));
i__8606__auto___13919 = G__13920;
continue;
} else {
}
break;
}

var G__13917 = args13915.length;
switch (G__13917) {
case 1:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13915.length)].join('')));

}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1 == null)))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2 == null)))){
return _.thi$ng$geom$core$IMatrixConvert$as_matrix$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_matrix["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IMatrixConvert.as-matrix",_);
}
}
}
});

thi.ng.geom.core.as_matrix.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IGraph = function(){};

thi.ng.geom.core.connected_components = (function thi$ng$geom$core$connected_components(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$connected_components$arity$1 == null)))){
return _.thi$ng$geom$core$IGraph$connected_components$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.connected_components[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.connected_components["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraph.connected-components",_);
}
}
}
});

thi.ng.geom.core.cyclic_QMARK_ = (function thi$ng$geom$core$cyclic_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1 == null)))){
return _.thi$ng$geom$core$IGraph$cyclic_QMARK_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.cyclic_QMARK_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.cyclic_QMARK_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraph.cyclic?",_);
}
}
}
});

thi.ng.geom.core.vertex_valence = (function thi$ng$geom$core$vertex_valence(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$vertex_valence$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$vertex_valence$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertex_valence[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertex_valence["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.vertex-valence",_);
}
}
}
});

thi.ng.geom.core.vertex_neighbors = (function thi$ng$geom$core$vertex_neighbors(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$vertex_neighbors$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertex_neighbors[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertex_neighbors["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.vertex-neighbors",_);
}
}
}
});

thi.ng.geom.core.remove_vertex = (function thi$ng$geom$core$remove_vertex(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$remove_vertex$arity$2 == null)))){
return _.thi$ng$geom$core$IGraph$remove_vertex$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.remove_vertex[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.remove_vertex["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IGraph.remove-vertex",_);
}
}
}
});

thi.ng.geom.core.replace_vertex = (function thi$ng$geom$core$replace_vertex(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$replace_vertex$arity$3 == null)))){
return _.thi$ng$geom$core$IGraph$replace_vertex$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.replace_vertex[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.replace_vertex["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IGraph.replace-vertex",_);
}
}
}
});

thi.ng.geom.core.merge_vertices = (function thi$ng$geom$core$merge_vertices(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraph$merge_vertices$arity$3 == null)))){
return _.thi$ng$geom$core$IGraph$merge_vertices$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.merge_vertices[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.merge_vertices["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IGraph.merge-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IDirectedGraph = function(){};

thi.ng.geom.core.in_vertices = (function thi$ng$geom$core$in_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IDirectedGraph$in_vertices$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.in_vertices[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.in_vertices["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IDirectedGraph.in-vertices",_);
}
}
}
});

thi.ng.geom.core.out_vertices = (function thi$ng$geom$core$out_vertices(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IDirectedGraph$out_vertices$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.out_vertices[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.out_vertices["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IDirectedGraph.out-vertices",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGraphConvert = function(){};

thi.ng.geom.core.as_graph = (function thi$ng$geom$core$as_graph(var_args){
var args13922 = [];
var len__8605__auto___13925 = arguments.length;
var i__8606__auto___13926 = (0);
while(true){
if((i__8606__auto___13926 < len__8605__auto___13925)){
args13922.push((arguments[i__8606__auto___13926]));

var G__13927 = (i__8606__auto___13926 + (1));
i__8606__auto___13926 = G__13927;
continue;
} else {
}
break;
}

var G__13924 = args13922.length;
switch (G__13924) {
case 1:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13922.length)].join('')));

}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$1 == null)))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGraphConvert$as_graph$arity$2 == null)))){
return _.thi$ng$geom$core$IGraphConvert$as_graph$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_graph["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IGraphConvert.as-graph",_);
}
}
}
});

thi.ng.geom.core.as_graph.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IVertexAccess = function(){};

thi.ng.geom.core.vertices = (function thi$ng$geom$core$vertices(var_args){
var args13929 = [];
var len__8605__auto___13932 = arguments.length;
var i__8606__auto___13933 = (0);
while(true){
if((i__8606__auto___13933 < len__8605__auto___13932)){
args13929.push((arguments[i__8606__auto___13933]));

var G__13934 = (i__8606__auto___13933 + (1));
i__8606__auto___13933 = G__13934;
continue;
} else {
}
break;
}

var G__13931 = args13929.length;
switch (G__13931) {
case 1:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13929.length)].join('')));

}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$1 == null)))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVertexAccess$vertices$arity$2 == null)))){
return _.thi$ng$geom$core$IVertexAccess$vertices$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertices["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IVertexAccess.vertices",_);
}
}
}
});

thi.ng.geom.core.vertices.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IEdgeAccess = function(){};

thi.ng.geom.core.edges = (function thi$ng$geom$core$edges(var_args){
var args13936 = [];
var len__8605__auto___13939 = arguments.length;
var i__8606__auto___13940 = (0);
while(true){
if((i__8606__auto___13940 < len__8605__auto___13939)){
args13936.push((arguments[i__8606__auto___13940]));

var G__13941 = (i__8606__auto___13940 + (1));
i__8606__auto___13940 = G__13941;
continue;
} else {
}
break;
}

var G__13938 = args13936.length;
switch (G__13938) {
case 1:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13936.length)].join('')));

}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$1 == null)))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IEdgeAccess$edges$arity$2 == null)))){
return _.thi$ng$geom$core$IEdgeAccess$edges$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.edges["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IEdgeAccess.edges",_);
}
}
}
});

thi.ng.geom.core.edges.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IFaceAccess = function(){};

/**
 * Adds a new face to a mesh. The face arg is a 2-element vector
 *  of [vertices attributes], where attributes is a map of arbitrary
 *  vertex attributes. E.g. (g/add-face m [verts {:uv [[0 0] [1 0] [1 1]]}])
 */
thi.ng.geom.core.add_face = (function thi$ng$geom$core$add_face(_,face){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$add_face$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$add_face$arity$2(_,face);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.add_face[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,face) : m__8103__auto__.call(null,_,face));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.add_face["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,face) : m__8103__auto____$1.call(null,_,face));
} else {
throw cljs.core.missing_protocol("IFaceAccess.add-face",_);
}
}
}
});

/**
 * Returns a mesh's face collection. If called without opts arg,
 *  returns faces directly as used internally by the mesh. If opts is
 *  truthy, returns each face as vector with a vector of face vertices
 *  as its first element. If the mesh supports vertex attributes,
 *  they're returned as the 2nd element in each face vector.
 */
thi.ng.geom.core.faces = (function thi$ng$geom$core$faces(var_args){
var args13943 = [];
var len__8605__auto___13946 = arguments.length;
var i__8606__auto___13947 = (0);
while(true){
if((i__8606__auto___13947 < len__8605__auto___13946)){
args13943.push((arguments[i__8606__auto___13947]));

var G__13948 = (i__8606__auto___13947 + (1));
i__8606__auto___13947 = G__13948;
continue;
} else {
}
break;
}

var G__13945 = args13943.length;
switch (G__13945) {
case 1:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13943.length)].join('')));

}
});

thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$faces$arity$1 == null)))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.faces["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IFaceAccess.faces",_);
}
}
}
});

thi.ng.geom.core.faces.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$faces$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$faces$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.faces["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IFaceAccess.faces",_);
}
}
}
});

thi.ng.geom.core.faces.cljs$lang$maxFixedArity = 2;


/**
 * Takes a vector of vertices defining a face in the mesh and
 *  returns updated mesh without that face.
 */
thi.ng.geom.core.remove_face = (function thi$ng$geom$core$remove_face(_,fverts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$remove_face$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$remove_face$arity$2(_,fverts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.remove_face[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,fverts) : m__8103__auto__.call(null,_,fverts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.remove_face["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,fverts) : m__8103__auto____$1.call(null,_,fverts));
} else {
throw cljs.core.missing_protocol("IFaceAccess.remove-face",_);
}
}
}
});

/**
 * Returns seq of faces the given vertex is part of.
 */
thi.ng.geom.core.vertex_faces = (function thi$ng$geom$core$vertex_faces(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2 == null)))){
return _.thi$ng$geom$core$IFaceAccess$vertex_faces$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertex_faces[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertex_faces["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IFaceAccess.vertex-faces",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.INormalAccess = function(){};

thi.ng.geom.core.compute_face_normals = (function thi$ng$geom$core$compute_face_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1 == null)))){
return _.thi$ng$geom$core$INormalAccess$compute_face_normals$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.compute_face_normals[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.compute_face_normals["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalAccess.compute-face-normals",_);
}
}
}
});

thi.ng.geom.core.compute_vertex_normals = (function thi$ng$geom$core$compute_vertex_normals(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1 == null)))){
return _.thi$ng$geom$core$INormalAccess$compute_vertex_normals$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.compute_vertex_normals[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.compute_vertex_normals["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalAccess.compute-vertex-normals",_);
}
}
}
});

thi.ng.geom.core.face_normals = (function thi$ng$geom$core$face_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$face_normals$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$face_normals$arity$2(_,force_QMARK_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.face_normals[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__8103__auto__.call(null,_,force_QMARK_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.face_normals["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__8103__auto____$1.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("INormalAccess.face-normals",_);
}
}
}
});

thi.ng.geom.core.face_normal = (function thi$ng$geom$core$face_normal(_,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$face_normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$face_normal$arity$2(_,f);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.face_normal[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__8103__auto__.call(null,_,f));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.face_normal["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,f) : m__8103__auto____$1.call(null,_,f));
} else {
throw cljs.core.missing_protocol("INormalAccess.face-normal",_);
}
}
}
});

thi.ng.geom.core.vertex_normals = (function thi$ng$geom$core$vertex_normals(_,force_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$vertex_normals$arity$2(_,force_QMARK_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertex_normals[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__8103__auto__.call(null,_,force_QMARK_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertex_normals["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__8103__auto____$1.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("INormalAccess.vertex-normals",_);
}
}
}
});

thi.ng.geom.core.vertex_normal = (function thi$ng$geom$core$vertex_normal(_,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2 == null)))){
return _.thi$ng$geom$core$INormalAccess$vertex_normal$arity$2(_,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.vertex_normal[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto__.call(null,_,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.vertex_normal["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,v) : m__8103__auto____$1.call(null,_,v));
} else {
throw cljs.core.missing_protocol("INormalAccess.vertex-normal",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAttributeAccess = function(){};

thi.ng.geom.core.attribs = (function thi$ng$geom$core$attribs(var_args){
var args13950 = [];
var len__8605__auto___13953 = arguments.length;
var i__8606__auto___13954 = (0);
while(true){
if((i__8606__auto___13954 < len__8605__auto___13953)){
args13950.push((arguments[i__8606__auto___13954]));

var G__13955 = (i__8606__auto___13954 + (1));
i__8606__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var G__13952 = args13950.length;
switch (G__13952) {
case 2:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13950.length)].join('')));

}
});

thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$2 = (function (_,ctx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$2 == null)))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$2(_,ctx);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__8103__auto__.call(null,_,ctx));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.attribs["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__8103__auto____$1.call(null,_,ctx));
} else {
throw cljs.core.missing_protocol("IAttributeAccess.attribs",_);
}
}
}
});

thi.ng.geom.core.attribs.cljs$core$IFn$_invoke$arity$3 = (function (_,ctx,attr){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAttributeAccess$attribs$arity$3 == null)))){
return _.thi$ng$geom$core$IAttributeAccess$attribs$arity$3(_,ctx,attr);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.attribs[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,ctx,attr) : m__8103__auto__.call(null,_,ctx,attr));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.attribs["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,ctx,attr) : m__8103__auto____$1.call(null,_,ctx,attr));
} else {
throw cljs.core.missing_protocol("IAttributeAccess.attribs",_);
}
}
}
});

thi.ng.geom.core.attribs.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.geom.core.IRawAccess = function(){};

thi.ng.geom.core.raw = (function thi$ng$geom$core$raw(_,ctx){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IRawAccess$raw$arity$2 == null)))){
return _.thi$ng$geom$core$IRawAccess$raw$arity$2(_,ctx);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.raw[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__8103__auto__.call(null,_,ctx));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.raw["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,ctx) : m__8103__auto____$1.call(null,_,ctx));
} else {
throw cljs.core.missing_protocol("IRawAccess.raw",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IAlign = function(){};

/**
 * Returns updated entity aligned with `x` in the specified manner
 */
thi.ng.geom.core.align_with = (function thi$ng$geom$core$align_with(_,x,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IAlign$align_with$arity$3 == null)))){
return _.thi$ng$geom$core$IAlign$align_with$arity$3(_,x,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.align_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__8103__auto__.call(null,_,x,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.align_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__8103__auto____$1.call(null,_,x,opts));
} else {
throw cljs.core.missing_protocol("IAlign.align-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IArea = function(){};

/**
 * Returns an entity's total surface area
 */
thi.ng.geom.core.area = (function thi$ng$geom$core$area(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IArea$area$arity$1 == null)))){
return _.thi$ng$geom$core$IArea$area$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.area[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.area["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IArea.area",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundary = function(){};

thi.ng.geom.core.contains_entity_QMARK_ = (function thi$ng$geom$core$contains_entity_QMARK_(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$IBoundary$contains_entity_QMARK_$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.contains_entity_QMARK_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.contains_entity_QMARK_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IBoundary.contains-entity?",_);
}
}
}
});

thi.ng.geom.core.contains_point_QMARK_ = (function thi$ng$geom$core$contains_point_QMARK_(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2 == null)))){
return _.thi$ng$geom$core$IBoundary$contains_point_QMARK_$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.contains_point_QMARK_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.contains_point_QMARK_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IBoundary.contains-point?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingCircle = function(){};

thi.ng.geom.core.bounding_circle = (function thi$ng$geom$core$bounding_circle(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1 == null)))){
return _.thi$ng$geom$core$IBoundingCircle$bounding_circle$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.bounding_circle[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.bounding_circle["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBoundingCircle.bounding-circle",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBoundingSphere = function(){};

thi.ng.geom.core.bounding_sphere = (function thi$ng$geom$core$bounding_sphere(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1 == null)))){
return _.thi$ng$geom$core$IBoundingSphere$bounding_sphere$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.bounding_sphere[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.bounding_sphere["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBoundingSphere.bounding-sphere",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IBounds = function(){};

/**
 * Returns bounding rect for 2d entities or box for 3d
 */
thi.ng.geom.core.bounds = (function thi$ng$geom$core$bounds(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$bounds$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$bounds$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.bounds[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.bounds["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.bounds",_);
}
}
}
});

/**
 * Returns entity's extent along Z (zero for 2d)
 */
thi.ng.geom.core.depth = (function thi$ng$geom$core$depth(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$depth$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$depth$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.depth[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.depth["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.depth",_);
}
}
}
});

/**
 * Returns entity's extent along Y axis
 */
thi.ng.geom.core.height = (function thi$ng$geom$core$height(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$height$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$height$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.height[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.height["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.height",_);
}
}
}
});

/**
 * Returns entity's extent along X axis
 */
thi.ng.geom.core.width = (function thi$ng$geom$core$width(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IBounds$width$arity$1 == null)))){
return _.thi$ng$geom$core$IBounds$width$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.width[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.width["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IBounds.width",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICenter = function(){};

/**
 * Returns updated entity centered around world origin or given point
 */
thi.ng.geom.core.center = (function thi$ng$geom$core$center(var_args){
var args13957 = [];
var len__8605__auto___13960 = arguments.length;
var i__8606__auto___13961 = (0);
while(true){
if((i__8606__auto___13961 < len__8605__auto___13960)){
args13957.push((arguments[i__8606__auto___13961]));

var G__13962 = (i__8606__auto___13961 + (1));
i__8606__auto___13961 = G__13962;
continue;
} else {
}
break;
}

var G__13959 = args13957.length;
switch (G__13959) {
case 1:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13957.length)].join('')));

}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$center$arity$1 == null)))){
return _.thi$ng$geom$core$ICenter$center$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ICenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2 = (function (_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$center$arity$2 == null)))){
return _.thi$ng$geom$core$ICenter$center$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.center["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("ICenter.center",_);
}
}
}
});

thi.ng.geom.core.center.cljs$lang$maxFixedArity = 2;


/**
 * Returns centroid of entity
 */
thi.ng.geom.core.centroid = (function thi$ng$geom$core$centroid(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICenter$centroid$arity$1 == null)))){
return _.thi$ng$geom$core$ICenter$centroid$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.centroid[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.centroid["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ICenter.centroid",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ICircumference = function(){};

/**
 * Returns an entity's circumference
 */
thi.ng.geom.core.circumference = (function thi$ng$geom$core$circumference(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ICircumference$circumference$arity$1 == null)))){
return _.thi$ng$geom$core$ICircumference$circumference$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.circumference[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.circumference["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ICircumference.circumference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClassify = function(){};

thi.ng.geom.core.classify_point = (function thi$ng$geom$core$classify_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClassify$classify_point$arity$2 == null)))){
return _.thi$ng$geom$core$IClassify$classify_point$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.classify_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.classify_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IClassify.classify-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClear = function(){};

thi.ng.geom.core.clear_STAR_ = (function thi$ng$geom$core$clear_STAR_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClear$clear_STAR_$arity$1 == null)))){
return _.thi$ng$geom$core$IClear$clear_STAR_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.clear_STAR_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.clear_STAR_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IClear.clear*",_);
}
}
}
});

thi.ng.geom.core.clear_BANG_ = (function thi$ng$geom$core$clear_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClear$clear_BANG_$arity$1 == null)))){
return _.thi$ng$geom$core$IClear$clear_BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.clear_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.clear_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IClear.clear!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IClip = function(){};

thi.ng.geom.core.clip_with = (function thi$ng$geom$core$clip_with(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IClip$clip_with$arity$2 == null)))){
return _.thi$ng$geom$core$IClip$clip_with$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.clip_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.clip_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IClip.clip-with",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IConvexHull = function(){};

thi.ng.geom.core.convex_hull = (function thi$ng$geom$core$convex_hull(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IConvexHull$convex_hull$arity$1 == null)))){
return _.thi$ng$geom$core$IConvexHull$convex_hull$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.convex_hull[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.convex_hull["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IConvexHull.convex-hull",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IExtrude = function(){};

thi.ng.geom.core.extrude = (function thi$ng$geom$core$extrude(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IExtrude$extrude$arity$2 == null)))){
return _.thi$ng$geom$core$IExtrude$extrude$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.extrude[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.extrude["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IExtrude.extrude",_);
}
}
}
});

thi.ng.geom.core.extrude_shell = (function thi$ng$geom$core$extrude_shell(_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IExtrude$extrude_shell$arity$2 == null)))){
return _.thi$ng$geom$core$IExtrude$extrude_shell$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.extrude_shell[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.extrude_shell["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IExtrude.extrude-shell",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IFlip = function(){};

thi.ng.geom.core.flip = (function thi$ng$geom$core$flip(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IFlip$flip$arity$1 == null)))){
return _.thi$ng$geom$core$IFlip$flip$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.flip[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.flip["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IFlip.flip",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IGeomContainer = function(){};

thi.ng.geom.core.into = (function thi$ng$geom$core$into(_,m){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IGeomContainer$into$arity$2 == null)))){
return _.thi$ng$geom$core$IGeomContainer$into$arity$2(_,m);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.into[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__8103__auto__.call(null,_,m));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.into["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,m) : m__8103__auto____$1.call(null,_,m));
} else {
throw cljs.core.missing_protocol("IGeomContainer.into",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IInset = function(){};

thi.ng.geom.core.inset = (function thi$ng$geom$core$inset(_,inset){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IInset$inset$arity$2 == null)))){
return _.thi$ng$geom$core$IInset$inset$arity$2(_,inset);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.inset[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,inset) : m__8103__auto__.call(null,_,inset));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.inset["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,inset) : m__8103__auto____$1.call(null,_,inset));
} else {
throw cljs.core.missing_protocol("IInset.inset",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IIntersect = function(){};

thi.ng.geom.core.intersect_line = (function thi$ng$geom$core$intersect_line(var_args){
var args13964 = [];
var len__8605__auto___13970 = arguments.length;
var i__8606__auto___13971 = (0);
while(true){
if((i__8606__auto___13971 < len__8605__auto___13970)){
args13964.push((arguments[i__8606__auto___13971]));

var G__13972 = (i__8606__auto___13971 + (1));
i__8606__auto___13971 = G__13972;
continue;
} else {
}
break;
}

var G__13966 = args13964.length;
switch (G__13966) {
case 2:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13964.length)].join('')));

}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2 = (function (_,l){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$2(_,l);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,l) : m__8103__auto__.call(null,_,l));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,l) : m__8103__auto____$1.call(null,_,l));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3 = (function (_,p,q){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_line$arity$3 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_line$arity$3(_,p,q);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__8103__auto__.call(null,_,p,q));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.intersect_line["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__8103__auto____$1.call(null,_,p,q));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-line",_);
}
}
}
});

thi.ng.geom.core.intersect_line.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.intersect_ray = (function thi$ng$geom$core$intersect_ray(var_args){
var args13967 = [];
var len__8605__auto___13974 = arguments.length;
var i__8606__auto___13975 = (0);
while(true){
if((i__8606__auto___13975 < len__8605__auto___13974)){
args13967.push((arguments[i__8606__auto___13975]));

var G__13976 = (i__8606__auto___13975 + (1));
i__8606__auto___13975 = G__13976;
continue;
} else {
}
break;
}

var G__13969 = args13967.length;
switch (G__13969) {
case 2:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13967.length)].join('')));

}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2 = (function (_,r){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$2(_,r);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__8103__auto__.call(null,_,r));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,r) : m__8103__auto____$1.call(null,_,r));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3 = (function (_,p,dir){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_ray$arity$3 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_ray$arity$3(_,p,dir);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__8103__auto__.call(null,_,p,dir));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.intersect_ray["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__8103__auto____$1.call(null,_,p,dir));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-ray",_);
}
}
}
});

thi.ng.geom.core.intersect_ray.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.intersect_shape = (function thi$ng$geom$core$intersect_shape(_,s){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IIntersect$intersect_shape$arity$2 == null)))){
return _.thi$ng$geom$core$IIntersect$intersect_shape$arity$2(_,s);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.intersect_shape[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto__.call(null,_,s));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.intersect_shape["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,s) : m__8103__auto____$1.call(null,_,s));
} else {
throw cljs.core.missing_protocol("IIntersect.intersect-shape",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMeshConvert = function(){};

/**
 * Transforms the current enitity into a mesh instance
 */
thi.ng.geom.core.as_mesh = (function thi$ng$geom$core$as_mesh(var_args){
var args13978 = [];
var len__8605__auto___13981 = arguments.length;
var i__8606__auto___13982 = (0);
while(true){
if((i__8606__auto___13982 < len__8605__auto___13981)){
args13978.push((arguments[i__8606__auto___13982]));

var G__13983 = (i__8606__auto___13982 + (1));
i__8606__auto___13982 = G__13983;
continue;
} else {
}
break;
}

var G__13980 = args13978.length;
switch (G__13980) {
case 1:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13978.length)].join('')));

}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1 == null)))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2 == null)))){
return _.thi$ng$geom$core$IMeshConvert$as_mesh$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_mesh["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("IMeshConvert.as-mesh",_);
}
}
}
});

thi.ng.geom.core.as_mesh.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IPointMap = function(){};

thi.ng.geom.core.map_point = (function thi$ng$geom$core$map_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPointMap$map_point$arity$2 == null)))){
return _.thi$ng$geom$core$IPointMap$map_point$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.map_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.map_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IPointMap.map-point",_);
}
}
}
});

thi.ng.geom.core.unmap_point = (function thi$ng$geom$core$unmap_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPointMap$unmap_point$arity$2 == null)))){
return _.thi$ng$geom$core$IPointMap$unmap_point$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.unmap_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.unmap_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IPointMap.unmap-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IPolygonConvert = function(){};

/**
 * Transforms current entity into a Polygon2 instance
 */
thi.ng.geom.core.as_polygon = (function thi$ng$geom$core$as_polygon(var_args){
var args13985 = [];
var len__8605__auto___13988 = arguments.length;
var i__8606__auto___13989 = (0);
while(true){
if((i__8606__auto___13989 < len__8605__auto___13988)){
args13985.push((arguments[i__8606__auto___13989]));

var G__13990 = (i__8606__auto___13989 + (1));
i__8606__auto___13989 = G__13990;
continue;
} else {
}
break;
}

var G__13987 = args13985.length;
switch (G__13987) {
case 1:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13985.length)].join('')));

}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1 == null)))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2 = (function (_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2 == null)))){
return _.thi$ng$geom$core$IPolygonConvert$as_polygon$arity$2(_,res);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__8103__auto__.call(null,_,res));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.as_polygon["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,res) : m__8103__auto____$1.call(null,_,res));
} else {
throw cljs.core.missing_protocol("IPolygonConvert.as-polygon",_);
}
}
}
});

thi.ng.geom.core.as_polygon.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IProximity = function(){};

thi.ng.geom.core.closest_point = (function thi$ng$geom$core$closest_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IProximity$closest_point$arity$2 == null)))){
return _.thi$ng$geom$core$IProximity$closest_point$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.closest_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.closest_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("IProximity.closest-point",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISample = function(){};

thi.ng.geom.core.point_at = (function thi$ng$geom$core$point_at(var_args){
var args13992 = [];
var len__8605__auto___13995 = arguments.length;
var i__8606__auto___13996 = (0);
while(true){
if((i__8606__auto___13996 < len__8605__auto___13995)){
args13992.push((arguments[i__8606__auto___13996]));

var G__13997 = (i__8606__auto___13996 + (1));
i__8606__auto___13996 = G__13997;
continue;
} else {
}
break;
}

var G__13994 = args13992.length;
switch (G__13994) {
case 2:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13992.length)].join('')));

}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$point_at$arity$2 == null)))){
return _.thi$ng$geom$core$ISample$point_at$arity$2(_,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto__.call(null,_,t));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,t) : m__8103__auto____$1.call(null,_,t));
} else {
throw cljs.core.missing_protocol("ISample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3 = (function (_,u,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$point_at$arity$3 == null)))){
return _.thi$ng$geom$core$ISample$point_at$arity$3(_,u,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__8103__auto__.call(null,_,u,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.point_at["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__8103__auto____$1.call(null,_,u,v));
} else {
throw cljs.core.missing_protocol("ISample.point-at",_);
}
}
}
});

thi.ng.geom.core.point_at.cljs$lang$maxFixedArity = 3;


thi.ng.geom.core.random_point = (function thi$ng$geom$core$random_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$random_point$arity$1 == null)))){
return _.thi$ng$geom$core$ISample$random_point$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.random_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.random_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ISample.random-point",_);
}
}
}
});

thi.ng.geom.core.random_point_inside = (function thi$ng$geom$core$random_point_inside(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$random_point_inside$arity$1 == null)))){
return _.thi$ng$geom$core$ISample$random_point_inside$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.random_point_inside[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.random_point_inside["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ISample.random-point-inside",_);
}
}
}
});

thi.ng.geom.core.sample_uniform = (function thi$ng$geom$core$sample_uniform(_,dist,include_last_QMARK_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$sample_uniform$arity$3 == null)))){
return _.thi$ng$geom$core$ISample$sample_uniform$arity$3(_,dist,include_last_QMARK_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.sample_uniform[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__8103__auto__.call(null,_,dist,include_last_QMARK_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.sample_uniform["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__8103__auto____$1.call(null,_,dist,include_last_QMARK_));
} else {
throw cljs.core.missing_protocol("ISample.sample-uniform",_);
}
}
}
});

thi.ng.geom.core.sample_with_resolution = (function thi$ng$geom$core$sample_with_resolution(_,res){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISample$sample_with_resolution$arity$2 == null)))){
return _.thi$ng$geom$core$ISample$sample_with_resolution$arity$2(_,res);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.sample_with_resolution[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__8103__auto__.call(null,_,res));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.sample_with_resolution["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,res) : m__8103__auto____$1.call(null,_,res));
} else {
throw cljs.core.missing_protocol("ISample.sample-with-resolution",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISlice = function(){};

thi.ng.geom.core.slice_with = (function thi$ng$geom$core$slice_with(var_args){
var args13999 = [];
var len__8605__auto___14002 = arguments.length;
var i__8606__auto___14003 = (0);
while(true){
if((i__8606__auto___14003 < len__8605__auto___14002)){
args13999.push((arguments[i__8606__auto___14003]));

var G__14004 = (i__8606__auto___14003 + (1));
i__8606__auto___14003 = G__14004;
continue;
} else {
}
break;
}

var G__14001 = args13999.length;
switch (G__14001) {
case 2:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13999.length)].join('')));

}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2 = (function (_,e){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$2 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$2(_,e);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__8103__auto__.call(null,_,e));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,e) : m__8103__auto____$1.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3 = (function (_,e,classifier){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$3 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$3(_,e,classifier);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__8103__auto__.call(null,_,e,classifier));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__8103__auto____$1.call(null,_,e,classifier));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4 = (function (_,e,classifier,parts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISlice$slice_with$arity$4 == null)))){
return _.thi$ng$geom$core$ISlice$slice_with$arity$4(_,e,classifier,parts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__8103__auto__.call(null,_,e,classifier,parts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.slice_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__8103__auto____$1.call(null,_,e,classifier,parts));
} else {
throw cljs.core.missing_protocol("ISlice.slice-with",_);
}
}
}
});

thi.ng.geom.core.slice_with.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
thi.ng.geom.core.ISubdivide = function(){};

thi.ng.geom.core.subdivide = (function thi$ng$geom$core$subdivide(var_args){
var args14006 = [];
var len__8605__auto___14009 = arguments.length;
var i__8606__auto___14010 = (0);
while(true){
if((i__8606__auto___14010 < len__8605__auto___14009)){
args14006.push((arguments[i__8606__auto___14010]));

var G__14011 = (i__8606__auto___14010 + (1));
i__8606__auto___14010 = G__14011;
continue;
} else {
}
break;
}

var G__14008 = args14006.length;
switch (G__14008) {
case 1:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14006.length)].join('')));

}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$1 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide$arity$2 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.subdivide["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide",_);
}
}
}
});

thi.ng.geom.core.subdivide.cljs$lang$maxFixedArity = 2;


thi.ng.geom.core.subdivide_edge = (function thi$ng$geom$core$subdivide_edge(_,a,b,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide_edge$arity$4(_,a,b,splits);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.subdivide_edge[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__8103__auto__.call(null,_,a,b,splits));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.subdivide_edge["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__8103__auto____$1.call(null,_,a,b,splits));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide-edge",_);
}
}
}
});

thi.ng.geom.core.subdivide_face = (function thi$ng$geom$core$subdivide_face(_,f,p,displace,splits){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5 == null)))){
return _.thi$ng$geom$core$ISubdivide$subdivide_face$arity$5(_,f,p,displace,splits);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.subdivide_face[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__8103__auto__.call(null,_,f,p,displace,splits));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.subdivide_face["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__8103__auto____$1.call(null,_,f,p,displace,splits));
} else {
throw cljs.core.missing_protocol("ISubdivide.subdivide-face",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ITessellate = function(){};

thi.ng.geom.core.tessellate = (function thi$ng$geom$core$tessellate(var_args){
var args14013 = [];
var len__8605__auto___14016 = arguments.length;
var i__8606__auto___14017 = (0);
while(true){
if((i__8606__auto___14017 < len__8605__auto___14016)){
args14013.push((arguments[i__8606__auto___14017]));

var G__14018 = (i__8606__auto___14017 + (1));
i__8606__auto___14017 = G__14018;
continue;
} else {
}
break;
}

var G__14015 = args14013.length;
switch (G__14015) {
case 1:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14013.length)].join('')));

}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITessellate$tessellate$arity$1 == null)))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ITessellate$tessellate$arity$2 == null)))){
return _.thi$ng$geom$core$ITessellate$tessellate$arity$2(_,opts);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto__.call(null,_,opts));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.tessellate["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,opts) : m__8103__auto____$1.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("ITessellate.tessellate",_);
}
}
}
});

thi.ng.geom.core.tessellate.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.geom.core.IVolume = function(){};

/**
 * Returns an entity's inner volume.
 */
thi.ng.geom.core.volume = (function thi$ng$geom$core$volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVolume$volume$arity$1 == null)))){
return _.thi$ng$geom$core$IVolume$volume$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.volume[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.volume["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IVolume.volume",_);
}
}
}
});

thi.ng.geom.core.signed_volume = (function thi$ng$geom$core$signed_volume(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IVolume$signed_volume$arity$1 == null)))){
return _.thi$ng$geom$core$IVolume$signed_volume$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.signed_volume[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.signed_volume["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IVolume.signed-volume",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.ISpatialTree = function(){};

thi.ng.geom.core.add_point = (function thi$ng$geom$core$add_point(_,p,d){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$add_point$arity$3 == null)))){
return _.thi$ng$geom$core$ISpatialTree$add_point$arity$3(_,p,d);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.add_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__8103__auto__.call(null,_,p,d));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.add_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__8103__auto____$1.call(null,_,p,d));
} else {
throw cljs.core.missing_protocol("ISpatialTree.add-point",_);
}
}
}
});

thi.ng.geom.core.delete_point = (function thi$ng$geom$core$delete_point(_,p){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$delete_point$arity$2 == null)))){
return _.thi$ng$geom$core$ISpatialTree$delete_point$arity$2(_,p);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.delete_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto__.call(null,_,p));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.delete_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,p) : m__8103__auto____$1.call(null,_,p));
} else {
throw cljs.core.missing_protocol("ISpatialTree.delete-point",_);
}
}
}
});

thi.ng.geom.core.get_point = (function thi$ng$geom$core$get_point(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$get_point$arity$1 == null)))){
return _.thi$ng$geom$core$ISpatialTree$get_point$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.get_point[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.get_point["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ISpatialTree.get-point",_);
}
}
}
});

thi.ng.geom.core.get_point_data = (function thi$ng$geom$core$get_point_data(_){
if((!((_ == null))) && (!((_.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1 == null)))){
return _.thi$ng$geom$core$ISpatialTree$get_point_data$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.get_point_data[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.get_point_data["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ISpatialTree.get-point-data",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.geom.core.IMutableProps = function(){};

thi.ng.geom.core.get_prop = (function thi$ng$geom$core$get_prop(_,k){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$get_prop$arity$2 == null)))){
return _.thi$ng$geom$core$IMutableProps$get_prop$arity$2(_,k);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.get_prop[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,k) : m__8103__auto__.call(null,_,k));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.get_prop["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,k) : m__8103__auto____$1.call(null,_,k));
} else {
throw cljs.core.missing_protocol("IMutableProps.get-prop",_);
}
}
}
});

thi.ng.geom.core.set_prop_BANG_ = (function thi$ng$geom$core$set_prop_BANG_(_,k,v){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$IMutableProps$set_prop_BANG_$arity$3(_,k,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.set_prop_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__8103__auto__.call(null,_,k,v));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.set_prop_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__8103__auto____$1.call(null,_,k,v));
} else {
throw cljs.core.missing_protocol("IMutableProps.set-prop!",_);
}
}
}
});

thi.ng.geom.core.update_prop_BANG_ = (function thi$ng$geom$core$update_prop_BANG_(_,k,f){
if((!((_ == null))) && (!((_.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3 == null)))){
return _.thi$ng$geom$core$IMutableProps$update_prop_BANG_$arity$3(_,k,f);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.geom.core.update_prop_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,k,f) : m__8103__auto__.call(null,_,k,f));
} else {
var m__8103__auto____$1 = (thi.ng.geom.core.update_prop_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,k,f) : m__8103__auto____$1.call(null,_,k,f));
} else {
throw cljs.core.missing_protocol("IMutableProps.update-prop!",_);
}
}
}
});

