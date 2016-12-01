// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.vector');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.xerror.core');









/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {thi.ng.geom.core.INormal}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9906_10255 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__9907_10256 = v.buf;
(self__.buf[(0)] = ((G__9906_10255[(0)]) - (G__9907_10256[(0)])));

(self__.buf[(1)] = ((G__9906_10255[(1)]) - (G__9907_10256[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9906_10255[(0)]) - v));

(self__.buf[(1)] = ((G__9906_10255[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9906_10255[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9906_10255[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9915_10257 = typeof v1 === 'number';
var G__9916_10258 = typeof v2 === 'number';
if(((G__9915_10257)?G__9916_10258:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__9917_10259 = ((!(G__9915_10257))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__9918_10260 = ((!(G__9916_10258))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__9909_10261 = (cljs.core.truth_(G__9917_10259)?v1.buf:null);
var G__9910_10262 = (cljs.core.truth_(G__9918_10260)?v2.buf:null);
var G__9911_10263 = (cljs.core.truth_(G__9917_10259)?(G__9909_10261[(0)]):((G__9915_10257)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9912_10264 = (cljs.core.truth_(G__9917_10259)?(G__9909_10261[(1)]):((G__9915_10257)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9913_10265 = (cljs.core.truth_(G__9918_10260)?(G__9910_10262[(0)]):((G__9916_10258)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9914_10266 = (cljs.core.truth_(G__9918_10260)?(G__9910_10262[(1)]):((G__9916_10258)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__9911_10263) - G__9913_10265));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__9912_10264) - G__9914_10266));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9919_10267 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__9920_10268 = v.buf;
(self__.buf[(0)] = ((G__9919_10267[(0)]) * (G__9920_10268[(0)])));

(self__.buf[(1)] = ((G__9919_10267[(1)]) * (G__9920_10268[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9919_10267[(0)]) * v));

(self__.buf[(1)] = ((G__9919_10267[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9919_10267[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9919_10267[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9928_10269 = typeof v1 === 'number';
var G__9929_10270 = typeof v2 === 'number';
if(((G__9928_10269)?G__9929_10270:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__9930_10271 = ((!(G__9928_10269))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__9931_10272 = ((!(G__9929_10270))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__9922_10273 = (cljs.core.truth_(G__9930_10271)?v1.buf:null);
var G__9923_10274 = (cljs.core.truth_(G__9931_10272)?v2.buf:null);
var G__9924_10275 = (cljs.core.truth_(G__9930_10271)?(G__9922_10273[(0)]):((G__9928_10269)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9925_10276 = (cljs.core.truth_(G__9930_10271)?(G__9922_10273[(1)]):((G__9928_10269)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9926_10277 = (cljs.core.truth_(G__9931_10272)?(G__9923_10274[(0)]):((G__9929_10270)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9927_10278 = (cljs.core.truth_(G__9931_10272)?(G__9923_10274[(1)]):((G__9929_10270)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__9924_10275) * G__9926_10277));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__9925_10276) * G__9927_10278));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9941_10279 = (a instanceof thi.ng.geom.vector.Vec2);
var G__9942_10280 = (b instanceof thi.ng.geom.vector.Vec2);
var G__9943_10281 = ((!(G__9941_10279))?typeof a === 'number':null);
var G__9944_10282 = ((!(G__9942_10280))?typeof b === 'number':null);
var G__9932_10283 = self__.buf;
var G__9933_10284 = ((G__9941_10279)?a.buf:null);
var G__9934_10285 = ((G__9942_10280)?b.buf:null);
var G__9935_10286 = (G__9932_10283[(0)]);
var G__9936_10287 = (G__9932_10283[(1)]);
var G__9937_10288 = ((G__9941_10279)?(G__9933_10284[(0)]):(cljs.core.truth_(G__9943_10281)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__9938_10289 = ((G__9941_10279)?(G__9933_10284[(1)]):(cljs.core.truth_(G__9943_10281)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__9939_10290 = ((G__9942_10280)?(G__9934_10285[(0)]):(cljs.core.truth_(G__9944_10282)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__9940_10291 = ((G__9942_10280)?(G__9934_10285[(1)]):(cljs.core.truth_(G__9944_10282)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__9935_10286 - G__9937_10288) * G__9939_10290));

(self__.buf[(1)] = ((G__9936_10287 - G__9938_10289) * G__9940_10291));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9954_10292 = (a instanceof thi.ng.geom.vector.Vec2);
var G__9955_10293 = (b instanceof thi.ng.geom.vector.Vec2);
var G__9956_10294 = ((!(G__9954_10292))?typeof a === 'number':null);
var G__9957_10295 = ((!(G__9955_10293))?typeof b === 'number':null);
var G__9945_10296 = self__.buf;
var G__9946_10297 = ((G__9954_10292)?a.buf:null);
var G__9947_10298 = ((G__9955_10293)?b.buf:null);
var G__9948_10299 = (G__9945_10296[(0)]);
var G__9949_10300 = (G__9945_10296[(1)]);
var G__9950_10301 = ((G__9954_10292)?(G__9946_10297[(0)]):(cljs.core.truth_(G__9956_10294)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9951_10302 = ((G__9954_10292)?(G__9946_10297[(1)]):(cljs.core.truth_(G__9956_10294)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9952_10303 = ((G__9955_10293)?(G__9947_10298[(0)]):(cljs.core.truth_(G__9957_10295)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9953_10304 = ((G__9955_10293)?(G__9947_10298[(1)]):(cljs.core.truth_(G__9957_10295)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9948_10299 * G__9950_10301) - G__9952_10303));

(self__.buf[(1)] = ((G__9949_10300 * G__9951_10302) - G__9953_10304));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__9967_10305 = (a instanceof thi.ng.geom.vector.Vec2);
var G__9968_10306 = (b instanceof thi.ng.geom.vector.Vec2);
var G__9969_10307 = ((!(G__9967_10305))?typeof a === 'number':null);
var G__9970_10308 = ((!(G__9968_10306))?typeof b === 'number':null);
var G__9958_10309 = self__.buf;
var G__9959_10310 = ((G__9967_10305)?a.buf:null);
var G__9960_10311 = ((G__9968_10306)?b.buf:null);
var G__9961_10312 = (G__9958_10309[(0)]);
var G__9962_10313 = (G__9958_10309[(1)]);
var G__9963_10314 = ((G__9967_10305)?(G__9959_10310[(0)]):(cljs.core.truth_(G__9969_10307)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__9964_10315 = ((G__9967_10305)?(G__9959_10310[(1)]):(cljs.core.truth_(G__9969_10307)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__9965_10316 = ((G__9968_10306)?(G__9960_10311[(0)]):(cljs.core.truth_(G__9970_10308)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__9966_10317 = ((G__9968_10306)?(G__9960_10311[(1)]):(cljs.core.truth_(G__9970_10308)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__9961_10312 * G__9963_10314) + G__9965_10316));

(self__.buf[(1)] = ((G__9962_10313 * G__9964_10315) + G__9966_10317));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9971_10318 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__9972_10319 = v.buf;
(self__.buf[(0)] = ((G__9971_10318[(0)]) / (G__9972_10319[(0)])));

(self__.buf[(1)] = ((G__9971_10318[(1)]) / (G__9972_10319[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9971_10318[(0)]) / v));

(self__.buf[(1)] = ((G__9971_10318[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9971_10318[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9971_10318[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9980_10320 = typeof v1 === 'number';
var G__9981_10321 = typeof v2 === 'number';
if(((G__9980_10320)?G__9981_10321:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__9982_10322 = ((!(G__9980_10320))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__9983_10323 = ((!(G__9981_10321))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__9974_10324 = (cljs.core.truth_(G__9982_10322)?v1.buf:null);
var G__9975_10325 = (cljs.core.truth_(G__9983_10323)?v2.buf:null);
var G__9976_10326 = (cljs.core.truth_(G__9982_10322)?(G__9974_10324[(0)]):((G__9980_10320)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9977_10327 = (cljs.core.truth_(G__9982_10322)?(G__9974_10324[(1)]):((G__9980_10320)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9978_10328 = (cljs.core.truth_(G__9983_10323)?(G__9975_10325[(0)]):((G__9981_10321)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9979_10329 = (cljs.core.truth_(G__9983_10323)?(G__9975_10325[(1)]):((G__9981_10321)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__9976_10326) / G__9978_10328));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__9977_10327) / G__9979_10329));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__9984_10330 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__9985_10331 = v.buf;
(self__.buf[(0)] = ((G__9984_10330[(0)]) + (G__9985_10331[(0)])));

(self__.buf[(1)] = ((G__9984_10330[(1)]) + (G__9985_10331[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__9984_10330[(0)]) + v));

(self__.buf[(1)] = ((G__9984_10330[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__9984_10330[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__9984_10330[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__9993_10332 = typeof v1 === 'number';
var G__9994_10333 = typeof v2 === 'number';
if(((G__9993_10332)?G__9994_10333:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__9995_10334 = ((!(G__9993_10332))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__9996_10335 = ((!(G__9994_10333))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__9987_10336 = (cljs.core.truth_(G__9995_10334)?v1.buf:null);
var G__9988_10337 = (cljs.core.truth_(G__9996_10335)?v2.buf:null);
var G__9989_10338 = (cljs.core.truth_(G__9995_10334)?(G__9987_10336[(0)]):((G__9993_10332)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__9990_10339 = (cljs.core.truth_(G__9995_10334)?(G__9987_10336[(1)]):((G__9993_10332)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__9991_10340 = (cljs.core.truth_(G__9996_10335)?(G__9988_10337[(0)]):((G__9994_10333)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__9992_10341 = (cljs.core.truth_(G__9996_10335)?(G__9988_10337[(1)]):((G__9994_10333)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__9989_10338) + G__9991_10340));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__9990_10339) + G__9992_10341));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10006_10342 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10007_10343 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10008_10344 = ((!(G__10006_10342))?typeof a === 'number':null);
var G__10009_10345 = ((!(G__10007_10343))?typeof b === 'number':null);
var G__9997_10346 = self__.buf;
var G__9998_10347 = ((G__10006_10342)?a.buf:null);
var G__9999_10348 = ((G__10007_10343)?b.buf:null);
var G__10000_10349 = (G__9997_10346[(0)]);
var G__10001_10350 = (G__9997_10346[(1)]);
var G__10002_10351 = ((G__10006_10342)?(G__9998_10347[(0)]):(cljs.core.truth_(G__10008_10344)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10003_10352 = ((G__10006_10342)?(G__9998_10347[(1)]):(cljs.core.truth_(G__10008_10344)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10004_10353 = ((G__10007_10343)?(G__9999_10348[(0)]):(cljs.core.truth_(G__10009_10345)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10005_10354 = ((G__10007_10343)?(G__9999_10348[(1)]):(cljs.core.truth_(G__10009_10345)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__10000_10349 + G__10002_10351) * G__10004_10353));

(self__.buf[(1)] = ((G__10001_10350 + G__10003_10352) * G__10005_10354));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10010 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10011 = v.buf;
return (((G__10010[(0)]) * (G__10011[(1)])) - ((G__10010[(1)]) * (G__10011[(0)])));
} else {
return (((G__10010[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__10010[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10025 = self__.buf;
var G__10027 = (G__10025[(0)]);
var G__10028 = (G__10025[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10026 = v.buf;
var G__10029 = (G__10026[(0)]);
var G__10030 = (G__10026[(1)]);
var d = (((G__10027 * G__10029) + (G__10028 * G__10030)) * 2.0);
(b[(0)] = ((G__10029 * d) - G__10027));

(b[(1)] = ((G__10030 * d) - G__10028));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__10029 = cljs.core.nth.call(null,v,(0),0.0);
var G__10030 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__10027 * G__10029) + (G__10028 * G__10030)) * 2.0);
(b[(0)] = ((G__10029 * d) - G__10027));

(b[(1)] = ((G__10030 * d) - G__10028));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10031 = self__.buf;
var G__10033 = (G__10031[(0)]);
var G__10034 = (G__10031[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10032 = v.buf;
var G__10035 = (G__10032[(0)]);
var G__10036 = (G__10032[(1)]);
var dx = (G__10033 - G__10035);
var dy = (G__10034 - G__10036);
return ((dx * dx) + (dy * dy));
} else {
var G__10035 = cljs.core.nth.call(null,v,(0),0.0);
var G__10036 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__10033 - G__10035);
var dy = (G__10034 - G__10036);
return ((dx * dx) + (dy * dy));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__10037 = self__.buf;
var G__10038 = (G__10037[(0)]);
var G__10039 = (G__10037[(1)]);
(b[(0)] = ((G__10038 * c) - (G__10039 * s)));

(b[(1)] = ((G__10038 * s) + (G__10039 * c)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)).call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10040_10355 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10041_10356 = v.buf;
(dest__9770__auto__[(0)] = ((G__10040_10355[(0)]) * (G__10041_10356[(0)])));

(dest__9770__auto__[(1)] = ((G__10040_10355[(1)]) * (G__10041_10356[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10040_10355[(0)]) * v));

(dest__9770__auto__[(1)] = ((G__10040_10355[(1)]) * v));
} else {
(dest__9770__auto__[(0)] = ((G__10040_10355[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10040_10355[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7389__auto__ = self__._hash;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((2) === cljs.core.count.call(null,v))){
var G__10042 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10043 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10042[(0)]),(G__10043[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10042[(1)]),(G__10043[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10042[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10042[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((2) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1))));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

return (new thi.ng.geom.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10044 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10045 = v.buf;
return (((G__10044[(0)]) * (G__10045[(0)])) + ((G__10044[(1)]) * (G__10045[(1)])));
} else {
return (((G__10044[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__10044[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$INormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
return acc;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10046_10357 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10047_10358 = v.buf;
(dest__9770__auto__[(0)] = ((G__10046_10357[(0)]) + (G__10047_10358[(0)])));

(dest__9770__auto__[(1)] = ((G__10046_10357[(1)]) + (G__10047_10358[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10046_10357[(0)]) + v));

(dest__9770__auto__[(1)] = ((G__10046_10357[(1)]) + v));
} else {
(dest__9770__auto__[(0)] = ((G__10046_10357[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10046_10357[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading.call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading.call(null,a) - thi.ng.geom.core.heading.call(null,___$1));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10048_10359 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10049_10360 = v.buf;
(b[(0)] = (((G__10048_10359[(0)]) + (G__10049_10360[(0)])) * 0.5));

(b[(1)] = (((G__10048_10359[(1)]) + (G__10049_10360[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10048_10359[(0)]) + v) * 0.5));

(b[(1)] = (((G__10048_10359[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10048_10359[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10048_10359[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10059_10361 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10060_10362 = (t instanceof thi.ng.geom.vector.Vec2);
var G__10061_10363 = ((!(G__10059_10361))?typeof v === 'number':null);
var G__10062_10364 = ((!(G__10060_10362))?typeof t === 'number':null);
var G__10050_10365 = self__.buf;
var G__10051_10366 = ((G__10059_10361)?v.buf:null);
var G__10052_10367 = ((G__10060_10362)?t.buf:null);
var G__10053_10368 = (G__10050_10365[(0)]);
var G__10054_10369 = (G__10050_10365[(1)]);
var G__10055_10370 = ((G__10059_10361)?(G__10051_10366[(0)]):(cljs.core.truth_(G__10061_10363)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10056_10371 = ((G__10059_10361)?(G__10051_10366[(1)]):(cljs.core.truth_(G__10061_10363)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10057_10372 = ((G__10060_10362)?(G__10052_10367[(0)]):(cljs.core.truth_(G__10062_10364)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10058_10373 = ((G__10060_10362)?(G__10052_10367[(1)]):(cljs.core.truth_(G__10062_10364)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__10055_10370 - G__10053_10368) * G__10057_10372) + G__10053_10368));

(b[(1)] = (((G__10056_10371 - G__10054_10369) * G__10058_10373) + G__10054_10369));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var G__10072_10374 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10073_10375 = (c instanceof thi.ng.geom.vector.Vec2);
var G__10074_10376 = ((!(G__10072_10374))?typeof b === 'number':null);
var G__10075_10377 = ((!(G__10073_10375))?typeof c === 'number':null);
var G__10063_10378 = self__.buf;
var G__10064_10379 = ((G__10072_10374)?b.buf:null);
var G__10065_10380 = ((G__10073_10375)?c.buf:null);
var G__10066_10381 = (G__10063_10378[(0)]);
var G__10067_10382 = (G__10063_10378[(1)]);
var G__10068_10383 = ((G__10072_10374)?(G__10064_10379[(0)]):(cljs.core.truth_(G__10074_10376)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10069_10384 = ((G__10072_10374)?(G__10064_10379[(1)]):(cljs.core.truth_(G__10074_10376)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10070_10385 = ((G__10073_10375)?(G__10065_10380[(0)]):(cljs.core.truth_(G__10075_10377)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10071_10386 = ((G__10073_10375)?(G__10065_10380[(1)]):(cljs.core.truth_(G__10075_10377)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_10387 = (((G__10068_10383 - G__10066_10381) * u) + G__10066_10381);
var y1_10388 = (((G__10069_10384 - G__10067_10382) * u) + G__10067_10382);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10070_10385) * u) + G__10070_10385) - x1_10387) * v) + x1_10387));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10071_10386) * u) + G__10071_10386) - y1_10388) * v) + y1_10388));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10085_10389 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10086_10390 = (t instanceof thi.ng.geom.vector.Vec2);
var G__10087_10391 = ((!(G__10085_10389))?typeof v === 'number':null);
var G__10088_10392 = ((!(G__10086_10390))?typeof t === 'number':null);
var G__10076_10393 = self__.buf;
var G__10077_10394 = ((G__10085_10389)?v.buf:null);
var G__10078_10395 = ((G__10086_10390)?t.buf:null);
var G__10079_10396 = (G__10076_10393[(0)]);
var G__10080_10397 = (G__10076_10393[(1)]);
var G__10081_10398 = ((G__10085_10389)?(G__10077_10394[(0)]):(cljs.core.truth_(G__10087_10391)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10082_10399 = ((G__10085_10389)?(G__10077_10394[(1)]):(cljs.core.truth_(G__10087_10391)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10083_10400 = ((G__10086_10390)?(G__10078_10395[(0)]):(cljs.core.truth_(G__10088_10392)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10084_10401 = ((G__10086_10390)?(G__10078_10395[(1)]):(cljs.core.truth_(G__10088_10392)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__10079_10396,G__10081_10398,G__10083_10400));

(b[(1)] = f.call(null,G__10080_10397,G__10082_10399,G__10084_10401));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10089_10402 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__10090_10403 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__10090_10403[(0)]),(G__10089_10402[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__10090_10403[(1)]),(G__10089_10402[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10089_10402[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10089_10402[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__10089_10402[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__10089_10402[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10100_10404 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__10101_10405 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__10102_10406 = ((!(G__10100_10404))?typeof e1 === 'number':null);
var G__10103_10407 = ((!(G__10101_10405))?typeof e2 === 'number':null);
var G__10091_10408 = self__.buf;
var G__10092_10409 = ((G__10100_10404)?e1.buf:null);
var G__10093_10410 = ((G__10101_10405)?e2.buf:null);
var G__10094_10411 = (G__10091_10408[(0)]);
var G__10095_10412 = (G__10091_10408[(1)]);
var G__10096_10413 = ((G__10100_10404)?(G__10092_10409[(0)]):(cljs.core.truth_(G__10102_10406)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__10097_10414 = ((G__10100_10404)?(G__10092_10409[(1)]):(cljs.core.truth_(G__10102_10406)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__10098_10415 = ((G__10101_10405)?(G__10093_10410[(0)]):(cljs.core.truth_(G__10103_10407)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__10099_10416 = ((G__10101_10405)?(G__10093_10410[(1)]):(cljs.core.truth_(G__10103_10407)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10096_10413,G__10098_10415,G__10094_10411));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10096_10413,G__10099_10416,G__10095_10412));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle2_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k === (0))) || ((k === (1)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10104_10417 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10105_10418 = v.buf;
(dest__9770__auto__[(0)] = (function (){var a__9167__auto__ = (G__10104_10417[(0)]);
var b__9168__auto__ = (G__10105_10418[(0)]);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9167__auto__ = (G__10104_10417[(1)]);
var b__9168__auto__ = (G__10105_10418[(1)]);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = (function (){var a__9167__auto__ = (G__10104_10417[(0)]);
var b__9168__auto__ = v;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9167__auto__ = (G__10104_10417[(1)]);
var b__9168__auto__ = v;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
} else {
(dest__9770__auto__[(0)] = (function (){var a__9167__auto__ = (G__10104_10417[(0)]);
var b__9168__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9167__auto__ = (G__10104_10417[(1)]);
var b__9168__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10115_10419 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10116_10420 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__10117_10421 = ((!(G__10115_10419))?typeof v === 'number':null);
var G__10118_10422 = ((!(G__10116_10420))?typeof v2 === 'number':null);
var G__10106_10423 = self__.buf;
var G__10107_10424 = ((G__10115_10419)?v.buf:null);
var G__10108_10425 = ((G__10116_10420)?v2.buf:null);
var G__10109_10426 = (G__10106_10423[(0)]);
var G__10110_10427 = (G__10106_10423[(1)]);
var G__10111_10428 = ((G__10115_10419)?(G__10107_10424[(0)]):(cljs.core.truth_(G__10117_10421)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10112_10429 = ((G__10115_10419)?(G__10107_10424[(1)]):(cljs.core.truth_(G__10117_10421)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10113_10430 = ((G__10116_10420)?(G__10108_10425[(0)]):(cljs.core.truth_(G__10118_10422)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10114_10431 = ((G__10116_10420)?(G__10108_10425[(1)]):(cljs.core.truth_(G__10118_10422)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9781__auto__[(0)] = (function (){var a__9167__auto__ = (function (){var a__9167__auto__ = G__10109_10426;
var b__9168__auto__ = G__10111_10428;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})();
var b__9168__auto__ = G__10113_10430;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9781__auto__[(1)] = (function (){var a__9167__auto__ = (function (){var a__9167__auto__ = G__10110_10427;
var b__9168__auto__ = G__10112_10429;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})();
var b__9168__auto__ = G__10114_10431;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10119_10432 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10120_10433 = v.buf;
(dest__9770__auto__[(0)] = (function (){var a__9174__auto__ = (G__10119_10432[(0)]);
var b__9175__auto__ = (G__10120_10433[(0)]);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9174__auto__ = (G__10119_10432[(1)]);
var b__9175__auto__ = (G__10120_10433[(1)]);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = (function (){var a__9174__auto__ = (G__10119_10432[(0)]);
var b__9175__auto__ = v;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9174__auto__ = (G__10119_10432[(1)]);
var b__9175__auto__ = v;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
} else {
(dest__9770__auto__[(0)] = (function (){var a__9174__auto__ = (G__10119_10432[(0)]);
var b__9175__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9770__auto__[(1)] = (function (){var a__9174__auto__ = (G__10119_10432[(1)]);
var b__9175__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10130_10434 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10131_10435 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__10132_10436 = ((!(G__10130_10434))?typeof v === 'number':null);
var G__10133_10437 = ((!(G__10131_10435))?typeof v2 === 'number':null);
var G__10121_10438 = self__.buf;
var G__10122_10439 = ((G__10130_10434)?v.buf:null);
var G__10123_10440 = ((G__10131_10435)?v2.buf:null);
var G__10124_10441 = (G__10121_10438[(0)]);
var G__10125_10442 = (G__10121_10438[(1)]);
var G__10126_10443 = ((G__10130_10434)?(G__10122_10439[(0)]):(cljs.core.truth_(G__10132_10436)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10127_10444 = ((G__10130_10434)?(G__10122_10439[(1)]):(cljs.core.truth_(G__10132_10436)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10128_10445 = ((G__10131_10435)?(G__10123_10440[(0)]):(cljs.core.truth_(G__10133_10437)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10129_10446 = ((G__10131_10435)?(G__10123_10440[(1)]):(cljs.core.truth_(G__10133_10437)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9781__auto__[(0)] = (function (){var a__9174__auto__ = (function (){var a__9174__auto__ = G__10124_10441;
var b__9175__auto__ = G__10126_10443;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})();
var b__9175__auto__ = G__10128_10445;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9781__auto__[(1)] = (function (){var a__9174__auto__ = (function (){var a__9174__auto__ = G__10125_10442;
var b__9175__auto__ = G__10127_10444;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})();
var b__9175__auto__ = G__10129_10446;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,thi.ng.geom.vector.vec3.call(null,(self__.buf[(0)]),(self__.buf[(1)]),x),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.call = (function() {
var G__10447 = null;
var G__10447__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__10447__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__10447 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10447__2.call(this,self__,k);
case 3:
return G__10447__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10447.cljs$core$IFn$_invoke$arity$2 = G__10447__2;
G__10447.cljs$core$IFn$_invoke$arity$3 = G__10447__3;
return G__10447;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args9905){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9905)));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle2_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = thi.ng.math.core.mag.call(null,___$1));

(b[(1)] = thi.ng.geom.core.heading.call(null,___$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10134 = self__.buf;
var G__10135 = (G__10134[(0)]);
var G__10136 = (G__10134[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__10135 * Math.cos(G__10136)));

(b[(1)] = (G__10135 * Math.sin(G__10136)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((2) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10137 = self__.buf;
var G__10138 = (G__10137[(0)]);
var G__10139 = (G__10137[(1)]);
var l = Math.sqrt(((G__10138 * G__10138) + (G__10139 * G__10139)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__10138 / l));

(b[(1)] = (G__10139 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__10140 = self__.buf;
var G__10141 = (G__10140[(0)]);
var G__10142 = (G__10140[(1)]);
var l = Math.sqrt(((G__10141 * G__10141) + (G__10142 * G__10142)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__10141 * l__$1));

(b[(1)] = (G__10142 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10143 = self__.buf;
var G__10144 = (G__10143[(0)]);
var G__10145 = (G__10143[(1)]);
return Math.sqrt(((G__10144 * G__10144) + (G__10145 * G__10145)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10146 = self__.buf;
var G__10147 = (G__10146[(0)]);
var G__10148 = (G__10146[(1)]);
return ((G__10147 * G__10147) + (G__10148 * G__10148));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10158_10448 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10159_10449 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10160_10450 = ((!(G__10158_10448))?typeof a === 'number':null);
var G__10161_10451 = ((!(G__10159_10449))?typeof b === 'number':null);
var G__10149_10452 = self__.buf;
var G__10150_10453 = ((G__10158_10448)?a.buf:null);
var G__10151_10454 = ((G__10159_10449)?b.buf:null);
var G__10152_10455 = (G__10149_10452[(0)]);
var G__10153_10456 = (G__10149_10452[(1)]);
var G__10154_10457 = ((G__10158_10448)?(G__10150_10453[(0)]):(cljs.core.truth_(G__10160_10450)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10155_10458 = ((G__10158_10448)?(G__10150_10453[(1)]):(cljs.core.truth_(G__10160_10450)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10156_10459 = ((G__10159_10449)?(G__10151_10454[(0)]):(cljs.core.truth_(G__10161_10451)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10157_10460 = ((G__10159_10449)?(G__10151_10454[(1)]):(cljs.core.truth_(G__10161_10451)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9781__auto__[(0)] = ((G__10152_10455 * G__10154_10457) - G__10156_10459));

(dest__9781__auto__[(1)] = ((G__10153_10456 * G__10155_10458) - G__10157_10460));

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10162_10461 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10163_10462 = v.buf;
(dest__9770__auto__[(0)] = ((G__10162_10461[(0)]) * (G__10163_10462[(0)])));

(dest__9770__auto__[(1)] = ((G__10162_10461[(1)]) * (G__10163_10462[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10162_10461[(0)]) * v));

(dest__9770__auto__[(1)] = ((G__10162_10461[(1)]) * v));
} else {
(dest__9770__auto__[(0)] = ((G__10162_10461[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10162_10461[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10164 = self__.buf;
var G__10167 = (new Float32Array((2)));
var G__10168 = (G__10164[(0)]);
var G__10169 = (G__10164[(1)]);
var G__10174 = typeof v1 === 'number';
var G__10175 = typeof v2 === 'number';
if(((G__10174)?G__10175:false)){
(G__10167[(0)] = (G__10168 * v1));

(G__10167[(1)] = (G__10169 * v2));
} else {
var G__10176_10463 = ((!(G__10174))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10177_10464 = ((!(G__10175))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10165_10465 = (cljs.core.truth_(G__10176_10463)?v1.buf:null);
var G__10166_10466 = (cljs.core.truth_(G__10177_10464)?v2.buf:null);
var G__10170_10467 = (cljs.core.truth_(G__10176_10463)?(G__10165_10465[(0)]):((G__10174)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__10171_10468 = (cljs.core.truth_(G__10176_10463)?(G__10165_10465[(1)]):((G__10174)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__10172_10469 = (cljs.core.truth_(G__10177_10464)?(G__10166_10466[(0)]):((G__10175)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__10173_10470 = (cljs.core.truth_(G__10177_10464)?(G__10166_10466[(1)]):((G__10175)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__10167[(0)] = ((G__10168 * G__10170_10467) * G__10172_10469));

(G__10167[(1)] = ((G__10169 * G__10171_10468) * G__10173_10470));
}

return (new thi.ng.geom.vector.Vec2(G__10167,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9740__auto__ = (new Float32Array((2)));
var G__10178_10471 = self__.buf;
(dest__9740__auto__[(0)] = (- (G__10178_10471[(0)])));

(dest__9740__auto__[(1)] = (- (G__10178_10471[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9740__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10179_10472 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10180_10473 = v.buf;
(dest__9770__auto__[(0)] = ((G__10179_10472[(0)]) - (G__10180_10473[(0)])));

(dest__9770__auto__[(1)] = ((G__10179_10472[(1)]) - (G__10180_10473[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10179_10472[(0)]) - v));

(dest__9770__auto__[(1)] = ((G__10179_10472[(1)]) - v));
} else {
(dest__9770__auto__[(0)] = ((G__10179_10472[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10179_10472[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10181 = self__.buf;
var G__10184 = (new Float32Array((2)));
var G__10185 = (G__10181[(0)]);
var G__10186 = (G__10181[(1)]);
var G__10191 = typeof v1 === 'number';
var G__10192 = typeof v2 === 'number';
if(((G__10191)?G__10192:false)){
(G__10184[(0)] = (G__10185 - v1));

(G__10184[(1)] = (G__10186 - v2));
} else {
var G__10193_10474 = ((!(G__10191))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10194_10475 = ((!(G__10192))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10182_10476 = (cljs.core.truth_(G__10193_10474)?v1.buf:null);
var G__10183_10477 = (cljs.core.truth_(G__10194_10475)?v2.buf:null);
var G__10187_10478 = (cljs.core.truth_(G__10193_10474)?(G__10182_10476[(0)]):((G__10191)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10188_10479 = (cljs.core.truth_(G__10193_10474)?(G__10182_10476[(1)]):((G__10191)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10189_10480 = (cljs.core.truth_(G__10194_10475)?(G__10183_10477[(0)]):((G__10192)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10190_10481 = (cljs.core.truth_(G__10194_10475)?(G__10183_10477[(1)]):((G__10192)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10184[(0)] = ((G__10185 - G__10187_10478) - G__10189_10480));

(G__10184[(1)] = ((G__10186 - G__10188_10479) - G__10190_10481));
}

return (new thi.ng.geom.vector.Vec2(G__10184,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10204_10482 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10205_10483 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10206_10484 = ((!(G__10204_10482))?typeof a === 'number':null);
var G__10207_10485 = ((!(G__10205_10483))?typeof b === 'number':null);
var G__10195_10486 = self__.buf;
var G__10196_10487 = ((G__10204_10482)?a.buf:null);
var G__10197_10488 = ((G__10205_10483)?b.buf:null);
var G__10198_10489 = (G__10195_10486[(0)]);
var G__10199_10490 = (G__10195_10486[(1)]);
var G__10200_10491 = ((G__10204_10482)?(G__10196_10487[(0)]):(cljs.core.truth_(G__10206_10484)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10201_10492 = ((G__10204_10482)?(G__10196_10487[(1)]):(cljs.core.truth_(G__10206_10484)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10202_10493 = ((G__10205_10483)?(G__10197_10488[(0)]):(cljs.core.truth_(G__10207_10485)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10203_10494 = ((G__10205_10483)?(G__10197_10488[(1)]):(cljs.core.truth_(G__10207_10485)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9781__auto__[(0)] = ((G__10198_10489 * G__10200_10491) + G__10202_10493));

(dest__9781__auto__[(1)] = ((G__10199_10490 * G__10201_10492) + G__10203_10494));

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10217_10495 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10218_10496 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10219_10497 = ((!(G__10217_10495))?typeof a === 'number':null);
var G__10220_10498 = ((!(G__10218_10496))?typeof b === 'number':null);
var G__10208_10499 = self__.buf;
var G__10209_10500 = ((G__10217_10495)?a.buf:null);
var G__10210_10501 = ((G__10218_10496)?b.buf:null);
var G__10211_10502 = (G__10208_10499[(0)]);
var G__10212_10503 = (G__10208_10499[(1)]);
var G__10213_10504 = ((G__10217_10495)?(G__10209_10500[(0)]):(cljs.core.truth_(G__10219_10497)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10214_10505 = ((G__10217_10495)?(G__10209_10500[(1)]):(cljs.core.truth_(G__10219_10497)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10215_10506 = ((G__10218_10496)?(G__10210_10501[(0)]):(cljs.core.truth_(G__10220_10498)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10216_10507 = ((G__10218_10496)?(G__10210_10501[(1)]):(cljs.core.truth_(G__10220_10498)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9781__auto__[(0)] = ((G__10211_10502 + G__10213_10504) * G__10215_10506));

(dest__9781__auto__[(1)] = ((G__10212_10503 + G__10214_10505) * G__10216_10507));

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9740__auto__ = (new Float32Array((2)));
var G__10221_10508 = self__.buf;
(dest__9740__auto__[(0)] = ((1) / (G__10221_10508[(0)])));

(dest__9740__auto__[(1)] = ((1) / (G__10221_10508[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9740__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10222_10509 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10223_10510 = v.buf;
(dest__9770__auto__[(0)] = ((G__10222_10509[(0)]) / (G__10223_10510[(0)])));

(dest__9770__auto__[(1)] = ((G__10222_10509[(1)]) / (G__10223_10510[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10222_10509[(0)]) / v));

(dest__9770__auto__[(1)] = ((G__10222_10509[(1)]) / v));
} else {
(dest__9770__auto__[(0)] = ((G__10222_10509[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10222_10509[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10224 = self__.buf;
var G__10227 = (new Float32Array((2)));
var G__10228 = (G__10224[(0)]);
var G__10229 = (G__10224[(1)]);
var G__10234 = typeof v1 === 'number';
var G__10235 = typeof v2 === 'number';
if(((G__10234)?G__10235:false)){
(G__10227[(0)] = (G__10228 / v1));

(G__10227[(1)] = (G__10229 / v2));
} else {
var G__10236_10511 = ((!(G__10234))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10237_10512 = ((!(G__10235))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10225_10513 = (cljs.core.truth_(G__10236_10511)?v1.buf:null);
var G__10226_10514 = (cljs.core.truth_(G__10237_10512)?v2.buf:null);
var G__10230_10515 = (cljs.core.truth_(G__10236_10511)?(G__10225_10513[(0)]):((G__10234)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10231_10516 = (cljs.core.truth_(G__10236_10511)?(G__10225_10513[(1)]):((G__10234)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10232_10517 = (cljs.core.truth_(G__10237_10512)?(G__10226_10514[(0)]):((G__10235)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10233_10518 = (cljs.core.truth_(G__10237_10512)?(G__10226_10514[(1)]):((G__10235)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10227[(0)] = ((G__10228 / G__10230_10515) / G__10232_10517));

(G__10227[(1)] = ((G__10229 / G__10231_10516) / G__10233_10518));
}

return (new thi.ng.geom.vector.Vec2(G__10227,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9770__auto__ = (new Float32Array((2)));
var G__10238_10519 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10239_10520 = v.buf;
(dest__9770__auto__[(0)] = ((G__10238_10519[(0)]) + (G__10239_10520[(0)])));

(dest__9770__auto__[(1)] = ((G__10238_10519[(1)]) + (G__10239_10520[(1)])));
} else {
if(typeof v === 'number'){
(dest__9770__auto__[(0)] = ((G__10238_10519[(0)]) + v));

(dest__9770__auto__[(1)] = ((G__10238_10519[(1)]) + v));
} else {
(dest__9770__auto__[(0)] = ((G__10238_10519[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9770__auto__[(1)] = ((G__10238_10519[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9770__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10240 = self__.buf;
var G__10243 = (new Float32Array((2)));
var G__10244 = (G__10240[(0)]);
var G__10245 = (G__10240[(1)]);
var G__10250 = typeof v1 === 'number';
var G__10251 = typeof v2 === 'number';
if(((G__10250)?G__10251:false)){
(G__10243[(0)] = (G__10244 + v1));

(G__10243[(1)] = (G__10245 + v2));
} else {
var G__10252_10521 = ((!(G__10250))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10253_10522 = ((!(G__10251))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10241_10523 = (cljs.core.truth_(G__10252_10521)?v1.buf:null);
var G__10242_10524 = (cljs.core.truth_(G__10253_10522)?v2.buf:null);
var G__10246_10525 = (cljs.core.truth_(G__10252_10521)?(G__10241_10523[(0)]):((G__10250)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10247_10526 = (cljs.core.truth_(G__10252_10521)?(G__10241_10523[(1)]):((G__10250)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10248_10527 = (cljs.core.truth_(G__10253_10522)?(G__10242_10524[(0)]):((G__10251)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10249_10528 = (cljs.core.truth_(G__10253_10522)?(G__10242_10524[(1)]):((G__10251)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10243[(0)] = ((G__10244 + G__10246_10525) + G__10248_10527));

(G__10243[(1)] = ((G__10245 + G__10247_10526) + G__10249_10528));
}

return (new thi.ng.geom.vector.Vec2(G__10243,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9740__auto__ = (new Float32Array((2)));
var G__10254_10529 = self__.buf;
(dest__9740__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__10254_10529[(0)])));

(dest__9740__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__10254_10529[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9740__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9781__auto__ = (new Float32Array((2)));
var G__10021_10530 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10022_10531 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10023_10532 = ((!(G__10021_10530))?typeof a === 'number':null);
var G__10024_10533 = ((!(G__10022_10531))?typeof b === 'number':null);
var G__10012_10534 = self__.buf;
var G__10013_10535 = ((G__10021_10530)?a.buf:null);
var G__10014_10536 = ((G__10022_10531)?b.buf:null);
var G__10015_10537 = (G__10012_10534[(0)]);
var G__10016_10538 = (G__10012_10534[(1)]);
var G__10017_10539 = ((G__10021_10530)?(G__10013_10535[(0)]):(cljs.core.truth_(G__10023_10532)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10018_10540 = ((G__10021_10530)?(G__10013_10535[(1)]):(cljs.core.truth_(G__10023_10532)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10019_10541 = ((G__10022_10531)?(G__10014_10536[(0)]):(cljs.core.truth_(G__10024_10533)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10020_10542 = ((G__10022_10531)?(G__10014_10536[(1)]):(cljs.core.truth_(G__10024_10533)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9781__auto__[(0)] = ((G__10015_10537 - G__10017_10539) * G__10019_10541));

(dest__9781__auto__[(1)] = ((G__10016_10538 - G__10018_10540) * G__10020_10542));

return (new thi.ng.geom.vector.Vec2(dest__9781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write.call(null,writer__8042__auto__,"thi.ng.geom.vector/Vec2");
});

thi.ng.geom.vector.__GT_Vec2 = (function thi$ng$geom$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.ITranslate}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IVector}
 * @implements {thi.ng.math.core.IDotProduct}
 * @implements {cljs.core.IReversible}
 * @implements {thi.ng.math.core.IMutableMathOps}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.math.core.ICrossProduct}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.math.core.IDeltaEquals}
 * @implements {thi.ng.geom.core.IPolar}
 * @implements {thi.ng.geom.core.IRotate3D}
 * @implements {thi.ng.geom.vector.Object}
 * @implements {thi.ng.geom.core.IClear}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.math.core.ILimit}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.INext}
 * @implements {thi.ng.math.core.IMathOps}
 * @implements {thi.ng.geom.core.ITransform}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.math.core.IMinMax}
 * @implements {thi.ng.geom.core.IRotate}
 * @implements {thi.ng.math.core.INormalize}
 * @implements {thi.ng.math.core.IMagnitude}
 * @implements {thi.ng.geom.core.IScale}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {thi.ng.geom.core.IReflect}
 * @implements {thi.ng.geom.core.IHeading}
 * @implements {thi.ng.geom.core.IDistance}
 * @implements {cljs.core.IComparable}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.IVectorReduce}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2314101723;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10544_10995 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10545_10996 = v.buf;
(self__.buf[(0)] = ((G__10544_10995[(0)]) - (G__10545_10996[(0)])));

(self__.buf[(1)] = ((G__10544_10995[(1)]) - (G__10545_10996[(1)])));

(self__.buf[(2)] = ((G__10544_10995[(2)]) - (G__10545_10996[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10544_10995[(0)]) - v));

(self__.buf[(1)] = ((G__10544_10995[(1)]) - v));

(self__.buf[(2)] = ((G__10544_10995[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10544_10995[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10544_10995[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10544_10995[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10558_10997 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10559_10998 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10560_10999 = ((!(G__10558_10997))?typeof v1 === 'number':null);
var G__10561_11000 = ((!(G__10559_10998))?typeof v2 === 'number':null);
var G__10546_11001 = self__.buf;
var G__10547_11002 = ((G__10558_10997)?v1.buf:null);
var G__10548_11003 = ((G__10559_10998)?v2.buf:null);
var G__10549_11004 = (G__10546_11001[(0)]);
var G__10550_11005 = (G__10546_11001[(1)]);
var G__10551_11006 = (G__10546_11001[(2)]);
var G__10552_11007 = ((G__10558_10997)?(G__10547_11002[(0)]):(cljs.core.truth_(G__10560_10999)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10553_11008 = ((G__10558_10997)?(G__10547_11002[(1)]):(cljs.core.truth_(G__10560_10999)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10554_11009 = ((G__10558_10997)?(G__10547_11002[(2)]):(cljs.core.truth_(G__10560_10999)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10555_11010 = ((G__10559_10998)?(G__10548_11003[(0)]):(cljs.core.truth_(G__10561_11000)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10556_11011 = ((G__10559_10998)?(G__10548_11003[(1)]):(cljs.core.truth_(G__10561_11000)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10557_11012 = ((G__10559_10998)?(G__10548_11003[(2)]):(cljs.core.truth_(G__10561_11000)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10549_11004 - G__10552_11007) - G__10555_11010));

(self__.buf[(1)] = ((G__10550_11005 - G__10553_11008) - G__10556_11011));

(self__.buf[(2)] = ((G__10551_11006 - G__10554_11009) - G__10557_11012));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10562_11013 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10563_11014 = v.buf;
(self__.buf[(0)] = ((G__10562_11013[(0)]) * (G__10563_11014[(0)])));

(self__.buf[(1)] = ((G__10562_11013[(1)]) * (G__10563_11014[(1)])));

(self__.buf[(2)] = ((G__10562_11013[(2)]) * (G__10563_11014[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10562_11013[(0)]) * v));

(self__.buf[(1)] = ((G__10562_11013[(1)]) * v));

(self__.buf[(2)] = ((G__10562_11013[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10562_11013[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10562_11013[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10562_11013[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10576_11015 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10577_11016 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10578_11017 = ((!(G__10576_11015))?typeof v1 === 'number':null);
var G__10579_11018 = ((!(G__10577_11016))?typeof v2 === 'number':null);
var G__10564_11019 = self__.buf;
var G__10565_11020 = ((G__10576_11015)?v1.buf:null);
var G__10566_11021 = ((G__10577_11016)?v2.buf:null);
var G__10567_11022 = (G__10564_11019[(0)]);
var G__10568_11023 = (G__10564_11019[(1)]);
var G__10569_11024 = (G__10564_11019[(2)]);
var G__10570_11025 = ((G__10576_11015)?(G__10565_11020[(0)]):(cljs.core.truth_(G__10578_11017)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10571_11026 = ((G__10576_11015)?(G__10565_11020[(1)]):(cljs.core.truth_(G__10578_11017)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10572_11027 = ((G__10576_11015)?(G__10565_11020[(2)]):(cljs.core.truth_(G__10578_11017)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10573_11028 = ((G__10577_11016)?(G__10566_11021[(0)]):(cljs.core.truth_(G__10579_11018)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10574_11029 = ((G__10577_11016)?(G__10566_11021[(1)]):(cljs.core.truth_(G__10579_11018)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10575_11030 = ((G__10577_11016)?(G__10566_11021[(2)]):(cljs.core.truth_(G__10579_11018)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10567_11022 * G__10570_11025) * G__10573_11028));

(self__.buf[(1)] = ((G__10568_11023 * G__10571_11026) * G__10574_11029));

(self__.buf[(2)] = ((G__10569_11024 * G__10572_11027) * G__10575_11030));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10592_11031 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10593_11032 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10594_11033 = ((!(G__10592_11031))?typeof a === 'number':null);
var G__10595_11034 = ((!(G__10593_11032))?typeof b === 'number':null);
var G__10580_11035 = self__.buf;
var G__10581_11036 = ((G__10592_11031)?a.buf:null);
var G__10582_11037 = ((G__10593_11032)?b.buf:null);
var G__10583_11038 = (G__10580_11035[(0)]);
var G__10584_11039 = (G__10580_11035[(1)]);
var G__10585_11040 = (G__10580_11035[(2)]);
var G__10586_11041 = ((G__10592_11031)?(G__10581_11036[(0)]):(cljs.core.truth_(G__10594_11033)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10587_11042 = ((G__10592_11031)?(G__10581_11036[(1)]):(cljs.core.truth_(G__10594_11033)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10588_11043 = ((G__10592_11031)?(G__10581_11036[(2)]):(cljs.core.truth_(G__10594_11033)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10589_11044 = ((G__10593_11032)?(G__10582_11037[(0)]):(cljs.core.truth_(G__10595_11034)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10590_11045 = ((G__10593_11032)?(G__10582_11037[(1)]):(cljs.core.truth_(G__10595_11034)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10591_11046 = ((G__10593_11032)?(G__10582_11037[(2)]):(cljs.core.truth_(G__10595_11034)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10583_11038 - G__10586_11041) * G__10589_11044));

(self__.buf[(1)] = ((G__10584_11039 - G__10587_11042) * G__10590_11045));

(self__.buf[(2)] = ((G__10585_11040 - G__10588_11043) * G__10591_11046));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10608_11047 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10609_11048 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10610_11049 = ((!(G__10608_11047))?typeof a === 'number':null);
var G__10611_11050 = ((!(G__10609_11048))?typeof b === 'number':null);
var G__10596_11051 = self__.buf;
var G__10597_11052 = ((G__10608_11047)?a.buf:null);
var G__10598_11053 = ((G__10609_11048)?b.buf:null);
var G__10599_11054 = (G__10596_11051[(0)]);
var G__10600_11055 = (G__10596_11051[(1)]);
var G__10601_11056 = (G__10596_11051[(2)]);
var G__10602_11057 = ((G__10608_11047)?(G__10597_11052[(0)]):(cljs.core.truth_(G__10610_11049)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10603_11058 = ((G__10608_11047)?(G__10597_11052[(1)]):(cljs.core.truth_(G__10610_11049)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10604_11059 = ((G__10608_11047)?(G__10597_11052[(2)]):(cljs.core.truth_(G__10610_11049)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10605_11060 = ((G__10609_11048)?(G__10598_11053[(0)]):(cljs.core.truth_(G__10611_11050)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10606_11061 = ((G__10609_11048)?(G__10598_11053[(1)]):(cljs.core.truth_(G__10611_11050)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10607_11062 = ((G__10609_11048)?(G__10598_11053[(2)]):(cljs.core.truth_(G__10611_11050)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10599_11054 * G__10602_11057) - G__10605_11060));

(self__.buf[(1)] = ((G__10600_11055 * G__10603_11058) - G__10606_11061));

(self__.buf[(2)] = ((G__10601_11056 * G__10604_11059) - G__10607_11062));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(0)])));

(self__.buf[(1)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(1)])));

(self__.buf[(2)] = thi.ng.math.core.abs_STAR_.call(null,(self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10624_11063 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10625_11064 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10626_11065 = ((!(G__10624_11063))?typeof a === 'number':null);
var G__10627_11066 = ((!(G__10625_11064))?typeof b === 'number':null);
var G__10612_11067 = self__.buf;
var G__10613_11068 = ((G__10624_11063)?a.buf:null);
var G__10614_11069 = ((G__10625_11064)?b.buf:null);
var G__10615_11070 = (G__10612_11067[(0)]);
var G__10616_11071 = (G__10612_11067[(1)]);
var G__10617_11072 = (G__10612_11067[(2)]);
var G__10618_11073 = ((G__10624_11063)?(G__10613_11068[(0)]):(cljs.core.truth_(G__10626_11065)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10619_11074 = ((G__10624_11063)?(G__10613_11068[(1)]):(cljs.core.truth_(G__10626_11065)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10620_11075 = ((G__10624_11063)?(G__10613_11068[(2)]):(cljs.core.truth_(G__10626_11065)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10621_11076 = ((G__10625_11064)?(G__10614_11069[(0)]):(cljs.core.truth_(G__10627_11066)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10622_11077 = ((G__10625_11064)?(G__10614_11069[(1)]):(cljs.core.truth_(G__10627_11066)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10623_11078 = ((G__10625_11064)?(G__10614_11069[(2)]):(cljs.core.truth_(G__10627_11066)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10615_11070 * G__10618_11073) + G__10621_11076));

(self__.buf[(1)] = ((G__10616_11071 * G__10619_11074) + G__10622_11077));

(self__.buf[(2)] = ((G__10617_11072 * G__10620_11075) + G__10623_11078));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10628_11079 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10629_11080 = v.buf;
(self__.buf[(0)] = ((G__10628_11079[(0)]) / (G__10629_11080[(0)])));

(self__.buf[(1)] = ((G__10628_11079[(1)]) / (G__10629_11080[(1)])));

(self__.buf[(2)] = ((G__10628_11079[(2)]) / (G__10629_11080[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10628_11079[(0)]) / v));

(self__.buf[(1)] = ((G__10628_11079[(1)]) / v));

(self__.buf[(2)] = ((G__10628_11079[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10628_11079[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10628_11079[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10628_11079[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10642_11081 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10643_11082 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10644_11083 = ((!(G__10642_11081))?typeof v1 === 'number':null);
var G__10645_11084 = ((!(G__10643_11082))?typeof v2 === 'number':null);
var G__10630_11085 = self__.buf;
var G__10631_11086 = ((G__10642_11081)?v1.buf:null);
var G__10632_11087 = ((G__10643_11082)?v2.buf:null);
var G__10633_11088 = (G__10630_11085[(0)]);
var G__10634_11089 = (G__10630_11085[(1)]);
var G__10635_11090 = (G__10630_11085[(2)]);
var G__10636_11091 = ((G__10642_11081)?(G__10631_11086[(0)]):(cljs.core.truth_(G__10644_11083)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10637_11092 = ((G__10642_11081)?(G__10631_11086[(1)]):(cljs.core.truth_(G__10644_11083)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10638_11093 = ((G__10642_11081)?(G__10631_11086[(2)]):(cljs.core.truth_(G__10644_11083)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10639_11094 = ((G__10643_11082)?(G__10632_11087[(0)]):(cljs.core.truth_(G__10645_11084)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10640_11095 = ((G__10643_11082)?(G__10632_11087[(1)]):(cljs.core.truth_(G__10645_11084)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10641_11096 = ((G__10643_11082)?(G__10632_11087[(2)]):(cljs.core.truth_(G__10645_11084)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10633_11088 / G__10636_11091) / G__10639_11094));

(self__.buf[(1)] = ((G__10634_11089 / G__10637_11092) / G__10640_11095));

(self__.buf[(2)] = ((G__10635_11090 / G__10638_11093) / G__10641_11096));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10646_11097 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10647_11098 = v.buf;
(self__.buf[(0)] = ((G__10646_11097[(0)]) + (G__10647_11098[(0)])));

(self__.buf[(1)] = ((G__10646_11097[(1)]) + (G__10647_11098[(1)])));

(self__.buf[(2)] = ((G__10646_11097[(2)]) + (G__10647_11098[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10646_11097[(0)]) + v));

(self__.buf[(1)] = ((G__10646_11097[(1)]) + v));

(self__.buf[(2)] = ((G__10646_11097[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10646_11097[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10646_11097[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10646_11097[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10660_11099 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10661_11100 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10662_11101 = ((!(G__10660_11099))?typeof v1 === 'number':null);
var G__10663_11102 = ((!(G__10661_11100))?typeof v2 === 'number':null);
var G__10648_11103 = self__.buf;
var G__10649_11104 = ((G__10660_11099)?v1.buf:null);
var G__10650_11105 = ((G__10661_11100)?v2.buf:null);
var G__10651_11106 = (G__10648_11103[(0)]);
var G__10652_11107 = (G__10648_11103[(1)]);
var G__10653_11108 = (G__10648_11103[(2)]);
var G__10654_11109 = ((G__10660_11099)?(G__10649_11104[(0)]):(cljs.core.truth_(G__10662_11101)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10655_11110 = ((G__10660_11099)?(G__10649_11104[(1)]):(cljs.core.truth_(G__10662_11101)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10656_11111 = ((G__10660_11099)?(G__10649_11104[(2)]):(cljs.core.truth_(G__10662_11101)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10657_11112 = ((G__10661_11100)?(G__10650_11105[(0)]):(cljs.core.truth_(G__10663_11102)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10658_11113 = ((G__10661_11100)?(G__10650_11105[(1)]):(cljs.core.truth_(G__10663_11102)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10659_11114 = ((G__10661_11100)?(G__10650_11105[(2)]):(cljs.core.truth_(G__10663_11102)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10651_11106 + G__10654_11109) + G__10657_11112));

(self__.buf[(1)] = ((G__10652_11107 + G__10655_11110) + G__10658_11113));

(self__.buf[(2)] = ((G__10653_11108 + G__10656_11111) + G__10659_11114));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10676_11115 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10677_11116 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10678_11117 = ((!(G__10676_11115))?typeof a === 'number':null);
var G__10679_11118 = ((!(G__10677_11116))?typeof b === 'number':null);
var G__10664_11119 = self__.buf;
var G__10665_11120 = ((G__10676_11115)?a.buf:null);
var G__10666_11121 = ((G__10677_11116)?b.buf:null);
var G__10667_11122 = (G__10664_11119[(0)]);
var G__10668_11123 = (G__10664_11119[(1)]);
var G__10669_11124 = (G__10664_11119[(2)]);
var G__10670_11125 = ((G__10676_11115)?(G__10665_11120[(0)]):(cljs.core.truth_(G__10678_11117)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10671_11126 = ((G__10676_11115)?(G__10665_11120[(1)]):(cljs.core.truth_(G__10678_11117)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10672_11127 = ((G__10676_11115)?(G__10665_11120[(2)]):(cljs.core.truth_(G__10678_11117)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10673_11128 = ((G__10677_11116)?(G__10666_11121[(0)]):(cljs.core.truth_(G__10679_11118)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10674_11129 = ((G__10677_11116)?(G__10666_11121[(1)]):(cljs.core.truth_(G__10679_11118)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10675_11130 = ((G__10677_11116)?(G__10666_11121[(2)]):(cljs.core.truth_(G__10679_11118)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10667_11122 + G__10670_11125) * G__10673_11128));

(self__.buf[(1)] = ((G__10668_11123 + G__10671_11126) * G__10674_11129));

(self__.buf[(2)] = ((G__10669_11124 + G__10672_11127) * G__10675_11130));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
});

thi.ng.geom.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str("["),cljs.core.str((self__.buf[(0)])),cljs.core.str(" "),cljs.core.str((self__.buf[(1)])),cljs.core.str(" "),cljs.core.str((self__.buf[(2)])),cljs.core.str("]")].join('');
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,___$1);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10680_11131 = self__.buf;
var G__10682_11132 = (G__10680_11131[(0)]);
var G__10683_11133 = (G__10680_11131[(1)]);
var G__10684_11134 = (G__10680_11131[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10681_11135 = v.buf;
var G__10685_11136 = (G__10681_11135[(0)]);
var G__10686_11137 = (G__10681_11135[(1)]);
var G__10687_11138 = (G__10681_11135[(2)]);
(b[(0)] = ((G__10683_11133 * G__10687_11138) - (G__10686_11137 * G__10684_11134)));

(b[(1)] = ((G__10684_11134 * G__10685_11136) - (G__10687_11138 * G__10682_11132)));

(b[(2)] = ((G__10682_11132 * G__10686_11137) - (G__10685_11136 * G__10683_11133)));
} else {
var G__10685_11139 = cljs.core.nth.call(null,v,(0),0.0);
var G__10686_11140 = cljs.core.nth.call(null,v,(1),0.0);
var G__10687_11141 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__10683_11133 * G__10687_11141) - (G__10686_11140 * G__10684_11134)));

(b[(1)] = ((G__10684_11134 * G__10685_11139) - (G__10687_11141 * G__10682_11132)));

(b[(2)] = ((G__10682_11132 * G__10686_11140) - (G__10685_11139 * G__10683_11133)));
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,n);
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10704 = self__.buf;
var G__10706 = (G__10704[(0)]);
var G__10707 = (G__10704[(1)]);
var G__10708 = (G__10704[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10705 = v.buf;
var G__10709 = (G__10705[(0)]);
var G__10710 = (G__10705[(1)]);
var G__10711 = (G__10705[(2)]);
var d = ((((G__10706 * G__10709) + (G__10707 * G__10710)) + (G__10708 * G__10711)) * 2.0);
(b[(0)] = ((G__10709 * d) - G__10706));

(b[(1)] = ((G__10710 * d) - G__10707));

(b[(2)] = ((G__10711 * d) - G__10708));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__10709 = cljs.core.nth.call(null,v,(0),0.0);
var G__10710 = cljs.core.nth.call(null,v,(1),0.0);
var G__10711 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__10706 * G__10709) + (G__10707 * G__10710)) + (G__10708 * G__10711)) * 2.0);
(b[(0)] = ((G__10709 * d) - G__10706));

(b[(1)] = ((G__10710 * d) - G__10707));

(b[(2)] = ((G__10711 * d) - G__10708));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(thi.ng.geom.core.dist_squared.call(null,___$1,v));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10712 = self__.buf;
var G__10714 = (G__10712[(0)]);
var G__10715 = (G__10712[(1)]);
var G__10716 = (G__10712[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10713 = v.buf;
var G__10717 = (G__10713[(0)]);
var G__10718 = (G__10713[(1)]);
var G__10719 = (G__10713[(2)]);
var dx = (G__10714 - G__10717);
var dy = (G__10715 - G__10718);
var dz = (G__10716 - G__10719);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__10717 = cljs.core.nth.call(null,v,(0),0.0);
var G__10718 = cljs.core.nth.call(null,v,(1),0.0);
var G__10719 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__10714 - G__10717);
var dy = (G__10715 - G__10718);
var dz = (G__10716 - G__10719);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)).call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared.call(null,___$1) > (len * len))){
return thi.ng.math.core.normalize.call(null,___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10720_11142 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10721_11143 = v.buf;
(dest__9875__auto__[(0)] = ((G__10720_11142[(0)]) * (G__10721_11143[(0)])));

(dest__9875__auto__[(1)] = ((G__10720_11142[(1)]) * (G__10721_11143[(1)])));

(dest__9875__auto__[(2)] = ((G__10720_11142[(2)]) * (G__10721_11143[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10720_11142[(0)]) * v));

(dest__9875__auto__[(1)] = ((G__10720_11142[(1)]) * v));

(dest__9875__auto__[(2)] = ((G__10720_11142[(2)]) * v));
} else {
(dest__9875__auto__[(0)] = ((G__10720_11142[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10720_11142[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10720_11142[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7389__auto__ = self__._hash;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash.call(null,((cljs.core.imul.call(null,((cljs.core.imul.call(null,(((31) + cljs.core.hash.call(null,(self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash.call(null,(self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_.call(null,v)){
if(((3) === cljs.core.count.call(null,v))){
var G__10722 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10723 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10722[(0)]),(G__10723[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10722[(1)]),(G__10723[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10722[(2)]),(G__10723[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10722[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10722[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10722[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return (((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)])));
} else {
return (cljs.core.sequential_QMARK_.call(null,o)) && (((3) === cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(0)]),cljs.core.first.call(null,o))) && (cljs.core._EQ_.call(null,(self__.buf[(1)]),cljs.core.nth.call(null,o,(1)))) && (cljs.core._EQ_.call(null,(self__.buf[(2)]),cljs.core.nth.call(null,o,(2))));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs),null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs);

(buf_SINGLEQUOTE_[(0)] = f2.call(null,(buf_SINGLEQUOTE_[(0)]),(0)));

(buf_SINGLEQUOTE_[(1)] = f2.call(null,(buf_SINGLEQUOTE_[(1)]),(1)));

(buf_SINGLEQUOTE_[(2)] = f2.call(null,(buf_SINGLEQUOTE_[(2)]),(2)));

return (new thi.ng.geom.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__10724 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10725 = v.buf;
return ((((G__10724[(0)]) * (G__10725[(0)])) + ((G__10724[(1)]) * (G__10725[(1)]))) + ((G__10724[(2)]) * (G__10725[(2)])));
} else {
return ((((G__10724[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__10724[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__10724[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,(self__.buf[(0)]),(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = f.call(null,start,(self__.buf[(0)]));
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
var acc__$1 = f.call(null,acc,(self__.buf[(1)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$1)){
return cljs.core.deref.call(null,acc__$1);
} else {
var acc__$2 = f.call(null,acc__$1,(self__.buf[(2)]));
if(cljs.core.reduced_QMARK_.call(null,acc__$2)){
return cljs.core.deref.call(null,acc__$2);
} else {
return acc__$2;
}
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10726_11144 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10727_11145 = v.buf;
(dest__9875__auto__[(0)] = ((G__10726_11144[(0)]) + (G__10727_11145[(0)])));

(dest__9875__auto__[(1)] = ((G__10726_11144[(1)]) + (G__10727_11145[(1)])));

(dest__9875__auto__[(2)] = ((G__10726_11144[(2)]) + (G__10727_11145[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10726_11144[(0)]) + v));

(dest__9875__auto__[(1)] = ((G__10726_11144[(1)]) + v));

(dest__9875__auto__[(2)] = ((G__10726_11144[(2)]) + v));
} else {
(dest__9875__auto__[(0)] = ((G__10726_11144[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10726_11144[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10726_11144[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,(self__.buf[(1)]),cljs.core.cons.call(null,(self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy.call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:thi.ng.geom.vector.vec3.call(null,v));
return Math.acos(thi.ng.math.core.dot.call(null,thi.ng.math.core.normalize.call(null,___$1),thi.ng.math.core.normalize.call(null,v__$1)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10728_11146 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10729_11147 = v.buf;
(b[(0)] = (((G__10728_11146[(0)]) + (G__10729_11147[(0)])) * 0.5));

(b[(1)] = (((G__10728_11146[(1)]) + (G__10729_11147[(1)])) * 0.5));

(b[(2)] = (((G__10728_11146[(2)]) + (G__10729_11147[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10728_11146[(0)]) + v) * 0.5));

(b[(1)] = (((G__10728_11146[(1)]) + v) * 0.5));

(b[(2)] = (((G__10728_11146[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10728_11146[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10728_11146[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__10728_11146[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10742_11148 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10743_11149 = (t instanceof thi.ng.geom.vector.Vec3);
var G__10744_11150 = ((!(G__10742_11148))?typeof v === 'number':null);
var G__10745_11151 = ((!(G__10743_11149))?typeof t === 'number':null);
var G__10730_11152 = self__.buf;
var G__10731_11153 = ((G__10742_11148)?v.buf:null);
var G__10732_11154 = ((G__10743_11149)?t.buf:null);
var G__10733_11155 = (G__10730_11152[(0)]);
var G__10734_11156 = (G__10730_11152[(1)]);
var G__10735_11157 = (G__10730_11152[(2)]);
var G__10736_11158 = ((G__10742_11148)?(G__10731_11153[(0)]):(cljs.core.truth_(G__10744_11150)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10737_11159 = ((G__10742_11148)?(G__10731_11153[(1)]):(cljs.core.truth_(G__10744_11150)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10738_11160 = ((G__10742_11148)?(G__10731_11153[(2)]):(cljs.core.truth_(G__10744_11150)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10739_11161 = ((G__10743_11149)?(G__10732_11154[(0)]):(cljs.core.truth_(G__10745_11151)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10740_11162 = ((G__10743_11149)?(G__10732_11154[(1)]):(cljs.core.truth_(G__10745_11151)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__10741_11163 = ((G__10743_11149)?(G__10732_11154[(2)]):(cljs.core.truth_(G__10745_11151)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__10736_11158 - G__10733_11155) * G__10739_11161) + G__10733_11155));

(b[(1)] = (((G__10737_11159 - G__10734_11156) * G__10740_11162) + G__10734_11156));

(b[(2)] = (((G__10738_11160 - G__10735_11157) * G__10741_11163) + G__10735_11157));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.call(null,d,(2),0.0)));
var G__10758_11164 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10759_11165 = (c instanceof thi.ng.geom.vector.Vec3);
var G__10760_11166 = ((!(G__10758_11164))?typeof b === 'number':null);
var G__10761_11167 = ((!(G__10759_11165))?typeof c === 'number':null);
var G__10746_11168 = self__.buf;
var G__10747_11169 = ((G__10758_11164)?b.buf:null);
var G__10748_11170 = ((G__10759_11165)?c.buf:null);
var G__10749_11171 = (G__10746_11168[(0)]);
var G__10750_11172 = (G__10746_11168[(1)]);
var G__10751_11173 = (G__10746_11168[(2)]);
var G__10752_11174 = ((G__10758_11164)?(G__10747_11169[(0)]):(cljs.core.truth_(G__10760_11166)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10753_11175 = ((G__10758_11164)?(G__10747_11169[(1)]):(cljs.core.truth_(G__10760_11166)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10754_11176 = ((G__10758_11164)?(G__10747_11169[(2)]):(cljs.core.truth_(G__10760_11166)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__10755_11177 = ((G__10759_11165)?(G__10748_11170[(0)]):(cljs.core.truth_(G__10761_11167)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10756_11178 = ((G__10759_11165)?(G__10748_11170[(1)]):(cljs.core.truth_(G__10761_11167)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__10757_11179 = ((G__10759_11165)?(G__10748_11170[(2)]):(cljs.core.truth_(G__10761_11167)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_11180 = (((G__10752_11174 - G__10749_11171) * u) + G__10749_11171);
var y1_11181 = (((G__10753_11175 - G__10750_11172) * u) + G__10750_11172);
var z1_11182 = (((G__10754_11176 - G__10751_11173) * u) + G__10751_11173);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10755_11177) * u) + G__10755_11177) - x1_11180) * v) + x1_11180));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10756_11178) * u) + G__10756_11178) - y1_11181) * v) + y1_11181));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__10757_11179) * u) + G__10757_11179) - z1_11182) * v) + z1_11182));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10774_11183 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10775_11184 = (t instanceof thi.ng.geom.vector.Vec3);
var G__10776_11185 = ((!(G__10774_11183))?typeof v === 'number':null);
var G__10777_11186 = ((!(G__10775_11184))?typeof t === 'number':null);
var G__10762_11187 = self__.buf;
var G__10763_11188 = ((G__10774_11183)?v.buf:null);
var G__10764_11189 = ((G__10775_11184)?t.buf:null);
var G__10765_11190 = (G__10762_11187[(0)]);
var G__10766_11191 = (G__10762_11187[(1)]);
var G__10767_11192 = (G__10762_11187[(2)]);
var G__10768_11193 = ((G__10774_11183)?(G__10763_11188[(0)]):(cljs.core.truth_(G__10776_11185)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10769_11194 = ((G__10774_11183)?(G__10763_11188[(1)]):(cljs.core.truth_(G__10776_11185)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10770_11195 = ((G__10774_11183)?(G__10763_11188[(2)]):(cljs.core.truth_(G__10776_11185)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10771_11196 = ((G__10775_11184)?(G__10764_11189[(0)]):(cljs.core.truth_(G__10777_11186)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10772_11197 = ((G__10775_11184)?(G__10764_11189[(1)]):(cljs.core.truth_(G__10777_11186)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__10773_11198 = ((G__10775_11184)?(G__10764_11189[(2)]):(cljs.core.truth_(G__10777_11186)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__10765_11190,G__10768_11193,G__10771_11196));

(b[(1)] = f.call(null,G__10766_11191,G__10769_11194,G__10772_11197));

(b[(2)] = f.call(null,G__10767_11192,G__10770_11195,G__10773_11198));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10778_11199 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__10779_11200 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__10779_11200[(0)]),(G__10778_11199[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__10779_11200[(1)]),(G__10778_11199[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__10779_11200[(2)]),(G__10778_11199[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10778_11199[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10778_11199[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10778_11199[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__10778_11199[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__10778_11199[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__10778_11199[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10792_11201 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__10793_11202 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__10794_11203 = ((!(G__10792_11201))?typeof e1 === 'number':null);
var G__10795_11204 = ((!(G__10793_11202))?typeof e2 === 'number':null);
var G__10780_11205 = self__.buf;
var G__10781_11206 = ((G__10792_11201)?e1.buf:null);
var G__10782_11207 = ((G__10793_11202)?e2.buf:null);
var G__10783_11208 = (G__10780_11205[(0)]);
var G__10784_11209 = (G__10780_11205[(1)]);
var G__10785_11210 = (G__10780_11205[(2)]);
var G__10786_11211 = ((G__10792_11201)?(G__10781_11206[(0)]):(cljs.core.truth_(G__10794_11203)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__10787_11212 = ((G__10792_11201)?(G__10781_11206[(1)]):(cljs.core.truth_(G__10794_11203)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__10788_11213 = ((G__10792_11201)?(G__10781_11206[(2)]):(cljs.core.truth_(G__10794_11203)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__10789_11214 = ((G__10793_11202)?(G__10782_11207[(0)]):(cljs.core.truth_(G__10795_11204)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__10790_11215 = ((G__10793_11202)?(G__10782_11207[(1)]):(cljs.core.truth_(G__10795_11204)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__10791_11216 = ((G__10793_11202)?(G__10782_11207[(2)]):(cljs.core.truth_(G__10795_11204)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10786_11211,G__10789_11214,G__10783_11208));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10787_11212,G__10790_11215,G__10784_11209));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10788_11213,G__10791_11216,G__10785_11210));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_(thi.ng.geom.vector.swizzle3_fns.call(null,k))){
return true;
} else {
return false;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if(((k >= (0))) && ((k <= (2)))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.call(null,___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.call(null,___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3(thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,self__.buf,(new Float32Array(self__.buf)),new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null),k,v),null,self__._meta));
}
} else {
return null;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10796_11217 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10797_11218 = v.buf;
(dest__9875__auto__[(0)] = (function (){var a__9167__auto__ = (G__10796_11217[(0)]);
var b__9168__auto__ = (G__10797_11218[(0)]);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9167__auto__ = (G__10796_11217[(1)]);
var b__9168__auto__ = (G__10797_11218[(1)]);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9167__auto__ = (G__10796_11217[(2)]);
var b__9168__auto__ = (G__10797_11218[(2)]);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = (function (){var a__9167__auto__ = (G__10796_11217[(0)]);
var b__9168__auto__ = v;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9167__auto__ = (G__10796_11217[(1)]);
var b__9168__auto__ = v;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9167__auto__ = (G__10796_11217[(2)]);
var b__9168__auto__ = v;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
} else {
(dest__9875__auto__[(0)] = (function (){var a__9167__auto__ = (G__10796_11217[(0)]);
var b__9168__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9167__auto__ = (G__10796_11217[(1)]);
var b__9168__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9167__auto__ = (G__10796_11217[(2)]);
var b__9168__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10810_11219 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10811_11220 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10812_11221 = ((!(G__10810_11219))?typeof v === 'number':null);
var G__10813_11222 = ((!(G__10811_11220))?typeof v2 === 'number':null);
var G__10798_11223 = self__.buf;
var G__10799_11224 = ((G__10810_11219)?v.buf:null);
var G__10800_11225 = ((G__10811_11220)?v2.buf:null);
var G__10801_11226 = (G__10798_11223[(0)]);
var G__10802_11227 = (G__10798_11223[(1)]);
var G__10803_11228 = (G__10798_11223[(2)]);
var G__10804_11229 = ((G__10810_11219)?(G__10799_11224[(0)]):(cljs.core.truth_(G__10812_11221)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10805_11230 = ((G__10810_11219)?(G__10799_11224[(1)]):(cljs.core.truth_(G__10812_11221)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10806_11231 = ((G__10810_11219)?(G__10799_11224[(2)]):(cljs.core.truth_(G__10812_11221)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10807_11232 = ((G__10811_11220)?(G__10800_11225[(0)]):(cljs.core.truth_(G__10813_11222)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10808_11233 = ((G__10811_11220)?(G__10800_11225[(1)]):(cljs.core.truth_(G__10813_11222)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10809_11234 = ((G__10811_11220)?(G__10800_11225[(2)]):(cljs.core.truth_(G__10813_11222)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = (function (){var a__9167__auto__ = (function (){var a__9167__auto__ = G__10801_11226;
var b__9168__auto__ = G__10804_11229;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})();
var b__9168__auto__ = G__10807_11232;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9886__auto__[(1)] = (function (){var a__9167__auto__ = (function (){var a__9167__auto__ = G__10802_11227;
var b__9168__auto__ = G__10805_11230;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})();
var b__9168__auto__ = G__10808_11233;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

(dest__9886__auto__[(2)] = (function (){var a__9167__auto__ = (function (){var a__9167__auto__ = G__10803_11228;
var b__9168__auto__ = G__10806_11231;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})();
var b__9168__auto__ = G__10809_11234;
if((a__9167__auto__ <= b__9168__auto__)){
return a__9167__auto__;
} else {
return b__9168__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10814_11235 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10815_11236 = v.buf;
(dest__9875__auto__[(0)] = (function (){var a__9174__auto__ = (G__10814_11235[(0)]);
var b__9175__auto__ = (G__10815_11236[(0)]);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9174__auto__ = (G__10814_11235[(1)]);
var b__9175__auto__ = (G__10815_11236[(1)]);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9174__auto__ = (G__10814_11235[(2)]);
var b__9175__auto__ = (G__10815_11236[(2)]);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = (function (){var a__9174__auto__ = (G__10814_11235[(0)]);
var b__9175__auto__ = v;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9174__auto__ = (G__10814_11235[(1)]);
var b__9175__auto__ = v;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9174__auto__ = (G__10814_11235[(2)]);
var b__9175__auto__ = v;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
} else {
(dest__9875__auto__[(0)] = (function (){var a__9174__auto__ = (G__10814_11235[(0)]);
var b__9175__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(1)] = (function (){var a__9174__auto__ = (G__10814_11235[(1)]);
var b__9175__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9875__auto__[(2)] = (function (){var a__9174__auto__ = (G__10814_11235[(2)]);
var b__9175__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10828_11237 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10829_11238 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10830_11239 = ((!(G__10828_11237))?typeof v === 'number':null);
var G__10831_11240 = ((!(G__10829_11238))?typeof v2 === 'number':null);
var G__10816_11241 = self__.buf;
var G__10817_11242 = ((G__10828_11237)?v.buf:null);
var G__10818_11243 = ((G__10829_11238)?v2.buf:null);
var G__10819_11244 = (G__10816_11241[(0)]);
var G__10820_11245 = (G__10816_11241[(1)]);
var G__10821_11246 = (G__10816_11241[(2)]);
var G__10822_11247 = ((G__10828_11237)?(G__10817_11242[(0)]):(cljs.core.truth_(G__10830_11239)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10823_11248 = ((G__10828_11237)?(G__10817_11242[(1)]):(cljs.core.truth_(G__10830_11239)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10824_11249 = ((G__10828_11237)?(G__10817_11242[(2)]):(cljs.core.truth_(G__10830_11239)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10825_11250 = ((G__10829_11238)?(G__10818_11243[(0)]):(cljs.core.truth_(G__10831_11240)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10826_11251 = ((G__10829_11238)?(G__10818_11243[(1)]):(cljs.core.truth_(G__10831_11240)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10827_11252 = ((G__10829_11238)?(G__10818_11243[(2)]):(cljs.core.truth_(G__10831_11240)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = (function (){var a__9174__auto__ = (function (){var a__9174__auto__ = G__10819_11244;
var b__9175__auto__ = G__10822_11247;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})();
var b__9175__auto__ = G__10825_11250;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9886__auto__[(1)] = (function (){var a__9174__auto__ = (function (){var a__9174__auto__ = G__10820_11245;
var b__9175__auto__ = G__10823_11248;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})();
var b__9175__auto__ = G__10826_11251;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

(dest__9886__auto__[(2)] = (function (){var a__9174__auto__ = (function (){var a__9174__auto__ = G__10821_11246;
var b__9175__auto__ = G__10824_11249;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})();
var b__9175__auto__ = G__10827_11252;
if((a__9174__auto__ >= b__9175__auto__)){
return a__9174__auto__;
} else {
return b__9175__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10832 = self__.buf;
var G__10833 = (G__10832[(0)]);
var G__10834 = (G__10832[(1)]);
var G__10835 = (G__10832[(2)]);
(b[(0)] = G__10833);

(b[(1)] = ((G__10834 * c) - (G__10835 * s)));

(b[(2)] = ((G__10834 * s) + (G__10835 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10836 = self__.buf;
var G__10837 = (G__10836[(0)]);
var G__10838 = (G__10836[(1)]);
var G__10839 = (G__10836[(2)]);
(b[(0)] = ((G__10837 * c) + (G__10839 * s)));

(b[(1)] = G__10838);

(b[(2)] = ((G__10839 * c) - (G__10837 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10840 = self__.buf;
var G__10841 = (G__10840[(0)]);
var G__10842 = (G__10840[(1)]);
var G__10843 = (G__10840[(2)]);
(b[(0)] = ((G__10841 * c) - (G__10842 * s)));

(b[(1)] = ((G__10841 * s) + (G__10842 * c)));

(b[(2)] = G__10843);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__10844 = self__.buf;
var G__10846 = (G__10844[(0)]);
var G__10847 = (G__10844[(1)]);
var G__10848 = (G__10844[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10845 = v.buf;
var G__10849 = (G__10845[(0)]);
var G__10850 = (G__10845[(1)]);
var G__10851 = (G__10845[(2)]);
var ux_SINGLEQUOTE_ = (G__10849 * G__10846);
var uy_SINGLEQUOTE_ = (G__10849 * G__10847);
var uz_SINGLEQUOTE_ = (G__10849 * G__10848);
var vx_SINGLEQUOTE_ = (G__10850 * G__10846);
var vy_SINGLEQUOTE_ = (G__10850 * G__10847);
var vz_SINGLEQUOTE_ = (G__10850 * G__10848);
var wx_SINGLEQUOTE_ = (G__10851 * G__10846);
var wy_SINGLEQUOTE_ = (G__10851 * G__10847);
var wz_SINGLEQUOTE_ = (G__10851 * G__10848);
var vx2 = (G__10849 * G__10849);
var vy2 = (G__10850 * G__10850);
var vz2 = (G__10851 * G__10851);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10849) + ((((vy2 + vz2) * G__10846) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10849)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10850) + ((((vx2 + vz2) * G__10847) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10850)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10851) + ((((vx2 + vy2) * G__10848) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10851)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__10849 = cljs.core.nth.call(null,v,(0),0.0);
var G__10850 = cljs.core.nth.call(null,v,(1),0.0);
var G__10851 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__10849 * G__10846);
var uy_SINGLEQUOTE_ = (G__10849 * G__10847);
var uz_SINGLEQUOTE_ = (G__10849 * G__10848);
var vx_SINGLEQUOTE_ = (G__10850 * G__10846);
var vy_SINGLEQUOTE_ = (G__10850 * G__10847);
var vz_SINGLEQUOTE_ = (G__10850 * G__10848);
var wx_SINGLEQUOTE_ = (G__10851 * G__10846);
var wy_SINGLEQUOTE_ = (G__10851 * G__10847);
var wz_SINGLEQUOTE_ = (G__10851 * G__10848);
var vx2 = (G__10849 * G__10849);
var vy2 = (G__10850 * G__10850);
var vz2 = (G__10851 * G__10851);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10849) + ((((vy2 + vz2) * G__10846) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10849)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10850) + ((((vx2 + vz2) * G__10847) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10850)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10851) + ((((vx2 + vy2) * G__10848) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10851)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.vector.Vec3.prototype.call = (function() {
var G__11253 = null;
var G__11253__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
var G__11253__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});
G__11253 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__11253__2.call(this,self__,k);
case 3:
return G__11253__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11253.cljs$core$IFn$_invoke$arity$2 = G__11253__2;
G__11253.cljs$core$IFn$_invoke$arity$3 = G__11253__3;
return G__11253;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args10543){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10543)));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = thi.ng.geom.vector.swizzle3_fns.call(null,k);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return f.call(null,_);
} else {
return nf;
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return nf;
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = thi.ng.math.core.mag.call(null,___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare.call(null,(self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare.call(null,(self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare.call(null,(self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count.call(null,o);
if(((3) === c)){
return (- cljs.core.compare.call(null,o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10852 = self__.buf;
var G__10853 = (G__10852[(0)]);
var G__10854 = (G__10852[(1)]);
var G__10855 = (G__10852[(2)]);
var l = Math.sqrt((((G__10853 * G__10853) + (G__10854 * G__10854)) + (G__10855 * G__10855)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__10853 / l));

(b[(1)] = (G__10854 / l));

(b[(2)] = (G__10855 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__10856 = self__.buf;
var G__10857 = (G__10856[(0)]);
var G__10858 = (G__10856[(1)]);
var G__10859 = (G__10856[(2)]);
var l = Math.sqrt((((G__10857 * G__10857) + (G__10858 * G__10858)) + (G__10859 * G__10859)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__10857 * l__$1));

(b[(1)] = (G__10858 * l__$1));

(b[(2)] = (G__10859 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.call(null,1.0,thi.ng.math.core.mag_squared.call(null,___$1));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10860 = self__.buf;
var G__10861 = (G__10860[(0)]);
var G__10862 = (G__10860[(1)]);
var G__10863 = (G__10860[(2)]);
return Math.sqrt((((G__10861 * G__10861) + (G__10862 * G__10862)) + (G__10863 * G__10863)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10864 = self__.buf;
var G__10865 = (G__10864[(0)]);
var G__10866 = (G__10864[(1)]);
var G__10867 = (G__10864[(2)]);
return (((G__10865 * G__10865) + (G__10866 * G__10866)) + (G__10867 * G__10867));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10880_11254 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10881_11255 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10882_11256 = ((!(G__10880_11254))?typeof a === 'number':null);
var G__10883_11257 = ((!(G__10881_11255))?typeof b === 'number':null);
var G__10868_11258 = self__.buf;
var G__10869_11259 = ((G__10880_11254)?a.buf:null);
var G__10870_11260 = ((G__10881_11255)?b.buf:null);
var G__10871_11261 = (G__10868_11258[(0)]);
var G__10872_11262 = (G__10868_11258[(1)]);
var G__10873_11263 = (G__10868_11258[(2)]);
var G__10874_11264 = ((G__10880_11254)?(G__10869_11259[(0)]):(cljs.core.truth_(G__10882_11256)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10875_11265 = ((G__10880_11254)?(G__10869_11259[(1)]):(cljs.core.truth_(G__10882_11256)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10876_11266 = ((G__10880_11254)?(G__10869_11259[(2)]):(cljs.core.truth_(G__10882_11256)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10877_11267 = ((G__10881_11255)?(G__10870_11260[(0)]):(cljs.core.truth_(G__10883_11257)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10878_11268 = ((G__10881_11255)?(G__10870_11260[(1)]):(cljs.core.truth_(G__10883_11257)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10879_11269 = ((G__10881_11255)?(G__10870_11260[(2)]):(cljs.core.truth_(G__10883_11257)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10871_11261 * G__10874_11264) - G__10877_11267));

(dest__9886__auto__[(1)] = ((G__10872_11262 * G__10875_11265) - G__10878_11268));

(dest__9886__auto__[(2)] = ((G__10873_11263 * G__10876_11266) - G__10879_11269));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10884_11270 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10885_11271 = v.buf;
(dest__9875__auto__[(0)] = ((G__10884_11270[(0)]) * (G__10885_11271[(0)])));

(dest__9875__auto__[(1)] = ((G__10884_11270[(1)]) * (G__10885_11271[(1)])));

(dest__9875__auto__[(2)] = ((G__10884_11270[(2)]) * (G__10885_11271[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10884_11270[(0)]) * v));

(dest__9875__auto__[(1)] = ((G__10884_11270[(1)]) * v));

(dest__9875__auto__[(2)] = ((G__10884_11270[(2)]) * v));
} else {
(dest__9875__auto__[(0)] = ((G__10884_11270[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10884_11270[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10884_11270[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10898_11272 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10899_11273 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10900_11274 = ((!(G__10898_11272))?typeof v1 === 'number':null);
var G__10901_11275 = ((!(G__10899_11273))?typeof v2 === 'number':null);
var G__10886_11276 = self__.buf;
var G__10887_11277 = ((G__10898_11272)?v1.buf:null);
var G__10888_11278 = ((G__10899_11273)?v2.buf:null);
var G__10889_11279 = (G__10886_11276[(0)]);
var G__10890_11280 = (G__10886_11276[(1)]);
var G__10891_11281 = (G__10886_11276[(2)]);
var G__10892_11282 = ((G__10898_11272)?(G__10887_11277[(0)]):(cljs.core.truth_(G__10900_11274)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10893_11283 = ((G__10898_11272)?(G__10887_11277[(1)]):(cljs.core.truth_(G__10900_11274)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10894_11284 = ((G__10898_11272)?(G__10887_11277[(2)]):(cljs.core.truth_(G__10900_11274)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10895_11285 = ((G__10899_11273)?(G__10888_11278[(0)]):(cljs.core.truth_(G__10901_11275)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10896_11286 = ((G__10899_11273)?(G__10888_11278[(1)]):(cljs.core.truth_(G__10901_11275)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10897_11287 = ((G__10899_11273)?(G__10888_11278[(2)]):(cljs.core.truth_(G__10901_11275)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10889_11279 * G__10892_11282) * G__10895_11285));

(dest__9886__auto__[(1)] = ((G__10890_11280 * G__10893_11283) * G__10896_11286));

(dest__9886__auto__[(2)] = ((G__10891_11281 * G__10894_11284) * G__10897_11287));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10902 = self__.buf;
var dest__9864__auto__ = (new Float32Array((3)));
(dest__9864__auto__[(0)] = ((G__10902[(0)]) * x));

(dest__9864__auto__[(1)] = ((G__10902[(1)]) * y));

(dest__9864__auto__[(2)] = ((G__10902[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__9864__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9858__auto__ = (new Float32Array((3)));
var G__10903_11288 = self__.buf;
(dest__9858__auto__[(0)] = (- (G__10903_11288[(0)])));

(dest__9858__auto__[(1)] = (- (G__10903_11288[(1)])));

(dest__9858__auto__[(2)] = (- (G__10903_11288[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9858__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10904_11289 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10905_11290 = v.buf;
(dest__9875__auto__[(0)] = ((G__10904_11289[(0)]) - (G__10905_11290[(0)])));

(dest__9875__auto__[(1)] = ((G__10904_11289[(1)]) - (G__10905_11290[(1)])));

(dest__9875__auto__[(2)] = ((G__10904_11289[(2)]) - (G__10905_11290[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10904_11289[(0)]) - v));

(dest__9875__auto__[(1)] = ((G__10904_11289[(1)]) - v));

(dest__9875__auto__[(2)] = ((G__10904_11289[(2)]) - v));
} else {
(dest__9875__auto__[(0)] = ((G__10904_11289[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10904_11289[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10904_11289[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10918_11291 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10919_11292 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10920_11293 = ((!(G__10918_11291))?typeof v1 === 'number':null);
var G__10921_11294 = ((!(G__10919_11292))?typeof v2 === 'number':null);
var G__10906_11295 = self__.buf;
var G__10907_11296 = ((G__10918_11291)?v1.buf:null);
var G__10908_11297 = ((G__10919_11292)?v2.buf:null);
var G__10909_11298 = (G__10906_11295[(0)]);
var G__10910_11299 = (G__10906_11295[(1)]);
var G__10911_11300 = (G__10906_11295[(2)]);
var G__10912_11301 = ((G__10918_11291)?(G__10907_11296[(0)]):(cljs.core.truth_(G__10920_11293)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10913_11302 = ((G__10918_11291)?(G__10907_11296[(1)]):(cljs.core.truth_(G__10920_11293)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10914_11303 = ((G__10918_11291)?(G__10907_11296[(2)]):(cljs.core.truth_(G__10920_11293)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10915_11304 = ((G__10919_11292)?(G__10908_11297[(0)]):(cljs.core.truth_(G__10921_11294)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10916_11305 = ((G__10919_11292)?(G__10908_11297[(1)]):(cljs.core.truth_(G__10921_11294)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10917_11306 = ((G__10919_11292)?(G__10908_11297[(2)]):(cljs.core.truth_(G__10921_11294)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10909_11298 - G__10912_11301) - G__10915_11304));

(dest__9886__auto__[(1)] = ((G__10910_11299 - G__10913_11302) - G__10916_11305));

(dest__9886__auto__[(2)] = ((G__10911_11300 - G__10914_11303) - G__10917_11306));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10922 = self__.buf;
var dest__9864__auto__ = (new Float32Array((3)));
(dest__9864__auto__[(0)] = ((G__10922[(0)]) - x));

(dest__9864__auto__[(1)] = ((G__10922[(1)]) - y));

(dest__9864__auto__[(2)] = ((G__10922[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__9864__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10935_11307 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10936_11308 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10937_11309 = ((!(G__10935_11307))?typeof a === 'number':null);
var G__10938_11310 = ((!(G__10936_11308))?typeof b === 'number':null);
var G__10923_11311 = self__.buf;
var G__10924_11312 = ((G__10935_11307)?a.buf:null);
var G__10925_11313 = ((G__10936_11308)?b.buf:null);
var G__10926_11314 = (G__10923_11311[(0)]);
var G__10927_11315 = (G__10923_11311[(1)]);
var G__10928_11316 = (G__10923_11311[(2)]);
var G__10929_11317 = ((G__10935_11307)?(G__10924_11312[(0)]):(cljs.core.truth_(G__10937_11309)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10930_11318 = ((G__10935_11307)?(G__10924_11312[(1)]):(cljs.core.truth_(G__10937_11309)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10931_11319 = ((G__10935_11307)?(G__10924_11312[(2)]):(cljs.core.truth_(G__10937_11309)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10932_11320 = ((G__10936_11308)?(G__10925_11313[(0)]):(cljs.core.truth_(G__10938_11310)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10933_11321 = ((G__10936_11308)?(G__10925_11313[(1)]):(cljs.core.truth_(G__10938_11310)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10934_11322 = ((G__10936_11308)?(G__10925_11313[(2)]):(cljs.core.truth_(G__10938_11310)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10926_11314 * G__10929_11317) + G__10932_11320));

(dest__9886__auto__[(1)] = ((G__10927_11315 * G__10930_11318) + G__10933_11321));

(dest__9886__auto__[(2)] = ((G__10928_11316 * G__10931_11319) + G__10934_11322));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10951_11323 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10952_11324 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10953_11325 = ((!(G__10951_11323))?typeof a === 'number':null);
var G__10954_11326 = ((!(G__10952_11324))?typeof b === 'number':null);
var G__10939_11327 = self__.buf;
var G__10940_11328 = ((G__10951_11323)?a.buf:null);
var G__10941_11329 = ((G__10952_11324)?b.buf:null);
var G__10942_11330 = (G__10939_11327[(0)]);
var G__10943_11331 = (G__10939_11327[(1)]);
var G__10944_11332 = (G__10939_11327[(2)]);
var G__10945_11333 = ((G__10951_11323)?(G__10940_11328[(0)]):(cljs.core.truth_(G__10953_11325)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10946_11334 = ((G__10951_11323)?(G__10940_11328[(1)]):(cljs.core.truth_(G__10953_11325)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10947_11335 = ((G__10951_11323)?(G__10940_11328[(2)]):(cljs.core.truth_(G__10953_11325)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10948_11336 = ((G__10952_11324)?(G__10941_11329[(0)]):(cljs.core.truth_(G__10954_11326)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10949_11337 = ((G__10952_11324)?(G__10941_11329[(1)]):(cljs.core.truth_(G__10954_11326)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10950_11338 = ((G__10952_11324)?(G__10941_11329[(2)]):(cljs.core.truth_(G__10954_11326)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9886__auto__[(0)] = ((G__10942_11330 + G__10945_11333) * G__10948_11336));

(dest__9886__auto__[(1)] = ((G__10943_11331 + G__10946_11334) * G__10949_11337));

(dest__9886__auto__[(2)] = ((G__10944_11332 + G__10947_11335) * G__10950_11338));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9858__auto__ = (new Float32Array((3)));
var G__10955_11339 = self__.buf;
(dest__9858__auto__[(0)] = ((1) / (G__10955_11339[(0)])));

(dest__9858__auto__[(1)] = ((1) / (G__10955_11339[(1)])));

(dest__9858__auto__[(2)] = ((1) / (G__10955_11339[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9858__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10956_11340 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10957_11341 = v.buf;
(dest__9875__auto__[(0)] = ((G__10956_11340[(0)]) / (G__10957_11341[(0)])));

(dest__9875__auto__[(1)] = ((G__10956_11340[(1)]) / (G__10957_11341[(1)])));

(dest__9875__auto__[(2)] = ((G__10956_11340[(2)]) / (G__10957_11341[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10956_11340[(0)]) / v));

(dest__9875__auto__[(1)] = ((G__10956_11340[(1)]) / v));

(dest__9875__auto__[(2)] = ((G__10956_11340[(2)]) / v));
} else {
(dest__9875__auto__[(0)] = ((G__10956_11340[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10956_11340[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10956_11340[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10970_11342 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10971_11343 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10972_11344 = ((!(G__10970_11342))?typeof v1 === 'number':null);
var G__10973_11345 = ((!(G__10971_11343))?typeof v2 === 'number':null);
var G__10958_11346 = self__.buf;
var G__10959_11347 = ((G__10970_11342)?v1.buf:null);
var G__10960_11348 = ((G__10971_11343)?v2.buf:null);
var G__10961_11349 = (G__10958_11346[(0)]);
var G__10962_11350 = (G__10958_11346[(1)]);
var G__10963_11351 = (G__10958_11346[(2)]);
var G__10964_11352 = ((G__10970_11342)?(G__10959_11347[(0)]):(cljs.core.truth_(G__10972_11344)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10965_11353 = ((G__10970_11342)?(G__10959_11347[(1)]):(cljs.core.truth_(G__10972_11344)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10966_11354 = ((G__10970_11342)?(G__10959_11347[(2)]):(cljs.core.truth_(G__10972_11344)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10967_11355 = ((G__10971_11343)?(G__10960_11348[(0)]):(cljs.core.truth_(G__10973_11345)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10968_11356 = ((G__10971_11343)?(G__10960_11348[(1)]):(cljs.core.truth_(G__10973_11345)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10969_11357 = ((G__10971_11343)?(G__10960_11348[(2)]):(cljs.core.truth_(G__10973_11345)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10961_11349 / G__10964_11352) / G__10967_11355));

(dest__9886__auto__[(1)] = ((G__10962_11350 / G__10965_11353) / G__10968_11356));

(dest__9886__auto__[(2)] = ((G__10963_11351 / G__10966_11354) / G__10969_11357));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10974 = self__.buf;
var dest__9864__auto__ = (new Float32Array((3)));
(dest__9864__auto__[(0)] = ((G__10974[(0)]) / x));

(dest__9864__auto__[(1)] = ((G__10974[(1)]) / y));

(dest__9864__auto__[(2)] = ((G__10974[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__9864__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9875__auto__ = (new Float32Array((3)));
var G__10975_11358 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10976_11359 = v.buf;
(dest__9875__auto__[(0)] = ((G__10975_11358[(0)]) + (G__10976_11359[(0)])));

(dest__9875__auto__[(1)] = ((G__10975_11358[(1)]) + (G__10976_11359[(1)])));

(dest__9875__auto__[(2)] = ((G__10975_11358[(2)]) + (G__10976_11359[(2)])));
} else {
if(typeof v === 'number'){
(dest__9875__auto__[(0)] = ((G__10975_11358[(0)]) + v));

(dest__9875__auto__[(1)] = ((G__10975_11358[(1)]) + v));

(dest__9875__auto__[(2)] = ((G__10975_11358[(2)]) + v));
} else {
(dest__9875__auto__[(0)] = ((G__10975_11358[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9875__auto__[(1)] = ((G__10975_11358[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__9875__auto__[(2)] = ((G__10975_11358[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__9875__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10989_11360 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10990_11361 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10991_11362 = ((!(G__10989_11360))?typeof v1 === 'number':null);
var G__10992_11363 = ((!(G__10990_11361))?typeof v2 === 'number':null);
var G__10977_11364 = self__.buf;
var G__10978_11365 = ((G__10989_11360)?v1.buf:null);
var G__10979_11366 = ((G__10990_11361)?v2.buf:null);
var G__10980_11367 = (G__10977_11364[(0)]);
var G__10981_11368 = (G__10977_11364[(1)]);
var G__10982_11369 = (G__10977_11364[(2)]);
var G__10983_11370 = ((G__10989_11360)?(G__10978_11365[(0)]):(cljs.core.truth_(G__10991_11362)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10984_11371 = ((G__10989_11360)?(G__10978_11365[(1)]):(cljs.core.truth_(G__10991_11362)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10985_11372 = ((G__10989_11360)?(G__10978_11365[(2)]):(cljs.core.truth_(G__10991_11362)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10986_11373 = ((G__10990_11361)?(G__10979_11366[(0)]):(cljs.core.truth_(G__10992_11363)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10987_11374 = ((G__10990_11361)?(G__10979_11366[(1)]):(cljs.core.truth_(G__10992_11363)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10988_11375 = ((G__10990_11361)?(G__10979_11366[(2)]):(cljs.core.truth_(G__10992_11363)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__9886__auto__[(0)] = ((G__10980_11367 + G__10983_11370) + G__10986_11373));

(dest__9886__auto__[(1)] = ((G__10981_11368 + G__10984_11371) + G__10987_11374));

(dest__9886__auto__[(2)] = ((G__10982_11369 + G__10985_11372) + G__10988_11375));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__10993 = self__.buf;
var dest__9864__auto__ = (new Float32Array((3)));
(dest__9864__auto__[(0)] = ((G__10993[(0)]) + x));

(dest__9864__auto__[(1)] = ((G__10993[(1)]) + y));

(dest__9864__auto__[(2)] = ((G__10993[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__9864__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9858__auto__ = (new Float32Array((3)));
var G__10994_11376 = self__.buf;
(dest__9858__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__10994_11376[(0)])));

(dest__9858__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__10994_11376[(1)])));

(dest__9858__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__10994_11376[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9858__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9886__auto__ = (new Float32Array((3)));
var G__10700_11377 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10701_11378 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10702_11379 = ((!(G__10700_11377))?typeof a === 'number':null);
var G__10703_11380 = ((!(G__10701_11378))?typeof b === 'number':null);
var G__10688_11381 = self__.buf;
var G__10689_11382 = ((G__10700_11377)?a.buf:null);
var G__10690_11383 = ((G__10701_11378)?b.buf:null);
var G__10691_11384 = (G__10688_11381[(0)]);
var G__10692_11385 = (G__10688_11381[(1)]);
var G__10693_11386 = (G__10688_11381[(2)]);
var G__10694_11387 = ((G__10700_11377)?(G__10689_11382[(0)]):(cljs.core.truth_(G__10702_11379)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10695_11388 = ((G__10700_11377)?(G__10689_11382[(1)]):(cljs.core.truth_(G__10702_11379)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10696_11389 = ((G__10700_11377)?(G__10689_11382[(2)]):(cljs.core.truth_(G__10702_11379)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10697_11390 = ((G__10701_11378)?(G__10690_11383[(0)]):(cljs.core.truth_(G__10703_11380)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10698_11391 = ((G__10701_11378)?(G__10690_11383[(1)]):(cljs.core.truth_(G__10703_11380)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10699_11392 = ((G__10701_11378)?(G__10690_11383[(2)]):(cljs.core.truth_(G__10703_11380)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__9886__auto__[(0)] = ((G__10691_11384 - G__10694_11387) * G__10697_11390));

(dest__9886__auto__[(1)] = ((G__10692_11385 - G__10695_11388) * G__10698_11391));

(dest__9886__auto__[(2)] = ((G__10693_11386 - G__10696_11389) * G__10699_11392));

return (new thi.ng.geom.vector.Vec3(dest__9886__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write.call(null,writer__8042__auto__,"thi.ng.geom.vector/Vec3");
});

thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__11395){
var G__11393 = (((G__11395 instanceof thi.ng.geom.vector.Vec2))?G__11395.buf:G__11395.buf);
return (G__11393[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__11398){
var G__11396 = (((G__11398 instanceof thi.ng.geom.vector.Vec2))?G__11398.buf:G__11398.buf);
var G__11397 = (new Float32Array(2));
(G__11397[(0)] = (G__11396[(0)]));

(G__11397[(1)] = (G__11396[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11397,null,cljs.core.meta.call(null,G__11398)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__11401){
var G__11399 = (((G__11401 instanceof thi.ng.geom.vector.Vec2))?G__11401.buf:G__11401.buf);
var G__11400 = (new Float32Array(3));
(G__11400[(0)] = (G__11399[(0)]));

(G__11400[(1)] = (G__11399[(0)]));

(G__11400[(2)] = (G__11399[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11400,null,cljs.core.meta.call(null,G__11401)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__11404){
var G__11402 = (((G__11404 instanceof thi.ng.geom.vector.Vec2))?G__11404.buf:G__11404.buf);
var G__11403 = (new Float32Array(3));
(G__11403[(0)] = (G__11402[(0)]));

(G__11403[(1)] = (G__11402[(0)]));

(G__11403[(2)] = (G__11402[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11403,null,cljs.core.meta.call(null,G__11404)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__11407){
var G__11405 = (((G__11407 instanceof thi.ng.geom.vector.Vec2))?G__11407.buf:G__11407.buf);
var G__11406 = (new Float32Array(3));
(G__11406[(0)] = (G__11405[(0)]));

(G__11406[(1)] = (G__11405[(0)]));

(G__11406[(2)] = (G__11405[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11406,null,cljs.core.meta.call(null,G__11407)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__11410){
var G__11408 = (((G__11410 instanceof thi.ng.geom.vector.Vec2))?G__11410.buf:G__11410.buf);
var G__11409 = (new Float32Array(2));
(G__11409[(0)] = (G__11408[(0)]));

(G__11409[(1)] = (G__11408[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11409,null,cljs.core.meta.call(null,G__11410)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__11413){
var G__11411 = (((G__11413 instanceof thi.ng.geom.vector.Vec2))?G__11413.buf:G__11413.buf);
var G__11412 = (new Float32Array(3));
(G__11412[(0)] = (G__11411[(0)]));

(G__11412[(1)] = (G__11411[(1)]));

(G__11412[(2)] = (G__11411[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11412,null,cljs.core.meta.call(null,G__11413)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__11416){
var G__11414 = (((G__11416 instanceof thi.ng.geom.vector.Vec2))?G__11416.buf:G__11416.buf);
var G__11415 = (new Float32Array(3));
(G__11415[(0)] = (G__11414[(0)]));

(G__11415[(1)] = (G__11414[(1)]));

(G__11415[(2)] = (G__11414[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11415,null,cljs.core.meta.call(null,G__11416)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__11419){
var G__11417 = (((G__11419 instanceof thi.ng.geom.vector.Vec2))?G__11419.buf:G__11419.buf);
var G__11418 = (new Float32Array(3));
(G__11418[(0)] = (G__11417[(0)]));

(G__11418[(1)] = (G__11417[(1)]));

(G__11418[(2)] = (G__11417[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11418,null,cljs.core.meta.call(null,G__11419)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__11422){
var G__11420 = (((G__11422 instanceof thi.ng.geom.vector.Vec2))?G__11422.buf:G__11422.buf);
var G__11421 = (new Float32Array(2));
(G__11421[(0)] = (G__11420[(0)]));

(G__11421[(1)] = (G__11420[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11421,null,cljs.core.meta.call(null,G__11422)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__11425){
var G__11423 = (((G__11425 instanceof thi.ng.geom.vector.Vec2))?G__11425.buf:G__11425.buf);
var G__11424 = (new Float32Array(3));
(G__11424[(0)] = (G__11423[(0)]));

(G__11424[(1)] = (G__11423[(2)]));

(G__11424[(2)] = (G__11423[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11424,null,cljs.core.meta.call(null,G__11425)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__11428){
var G__11426 = (((G__11428 instanceof thi.ng.geom.vector.Vec2))?G__11428.buf:G__11428.buf);
var G__11427 = (new Float32Array(3));
(G__11427[(0)] = (G__11426[(0)]));

(G__11427[(1)] = (G__11426[(2)]));

(G__11427[(2)] = (G__11426[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11427,null,cljs.core.meta.call(null,G__11428)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__11431){
var G__11429 = (((G__11431 instanceof thi.ng.geom.vector.Vec2))?G__11431.buf:G__11431.buf);
var G__11430 = (new Float32Array(3));
(G__11430[(0)] = (G__11429[(0)]));

(G__11430[(1)] = (G__11429[(2)]));

(G__11430[(2)] = (G__11429[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11430,null,cljs.core.meta.call(null,G__11431)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__11434){
var G__11432 = (((G__11434 instanceof thi.ng.geom.vector.Vec2))?G__11434.buf:G__11434.buf);
return (G__11432[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__11437){
var G__11435 = (((G__11437 instanceof thi.ng.geom.vector.Vec2))?G__11437.buf:G__11437.buf);
var G__11436 = (new Float32Array(2));
(G__11436[(0)] = (G__11435[(1)]));

(G__11436[(1)] = (G__11435[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11436,null,cljs.core.meta.call(null,G__11437)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__11440){
var G__11438 = (((G__11440 instanceof thi.ng.geom.vector.Vec2))?G__11440.buf:G__11440.buf);
var G__11439 = (new Float32Array(3));
(G__11439[(0)] = (G__11438[(1)]));

(G__11439[(1)] = (G__11438[(0)]));

(G__11439[(2)] = (G__11438[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11439,null,cljs.core.meta.call(null,G__11440)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__11443){
var G__11441 = (((G__11443 instanceof thi.ng.geom.vector.Vec2))?G__11443.buf:G__11443.buf);
var G__11442 = (new Float32Array(3));
(G__11442[(0)] = (G__11441[(1)]));

(G__11442[(1)] = (G__11441[(0)]));

(G__11442[(2)] = (G__11441[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11442,null,cljs.core.meta.call(null,G__11443)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__11446){
var G__11444 = (((G__11446 instanceof thi.ng.geom.vector.Vec2))?G__11446.buf:G__11446.buf);
var G__11445 = (new Float32Array(3));
(G__11445[(0)] = (G__11444[(1)]));

(G__11445[(1)] = (G__11444[(0)]));

(G__11445[(2)] = (G__11444[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11445,null,cljs.core.meta.call(null,G__11446)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__11449){
var G__11447 = (((G__11449 instanceof thi.ng.geom.vector.Vec2))?G__11449.buf:G__11449.buf);
var G__11448 = (new Float32Array(2));
(G__11448[(0)] = (G__11447[(1)]));

(G__11448[(1)] = (G__11447[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11448,null,cljs.core.meta.call(null,G__11449)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__11452){
var G__11450 = (((G__11452 instanceof thi.ng.geom.vector.Vec2))?G__11452.buf:G__11452.buf);
var G__11451 = (new Float32Array(3));
(G__11451[(0)] = (G__11450[(1)]));

(G__11451[(1)] = (G__11450[(1)]));

(G__11451[(2)] = (G__11450[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11451,null,cljs.core.meta.call(null,G__11452)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__11455){
var G__11453 = (((G__11455 instanceof thi.ng.geom.vector.Vec2))?G__11455.buf:G__11455.buf);
var G__11454 = (new Float32Array(3));
(G__11454[(0)] = (G__11453[(1)]));

(G__11454[(1)] = (G__11453[(1)]));

(G__11454[(2)] = (G__11453[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11454,null,cljs.core.meta.call(null,G__11455)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__11458){
var G__11456 = (((G__11458 instanceof thi.ng.geom.vector.Vec2))?G__11458.buf:G__11458.buf);
var G__11457 = (new Float32Array(3));
(G__11457[(0)] = (G__11456[(1)]));

(G__11457[(1)] = (G__11456[(1)]));

(G__11457[(2)] = (G__11456[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11457,null,cljs.core.meta.call(null,G__11458)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__11461){
var G__11459 = (((G__11461 instanceof thi.ng.geom.vector.Vec2))?G__11461.buf:G__11461.buf);
var G__11460 = (new Float32Array(2));
(G__11460[(0)] = (G__11459[(1)]));

(G__11460[(1)] = (G__11459[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11460,null,cljs.core.meta.call(null,G__11461)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__11464){
var G__11462 = (((G__11464 instanceof thi.ng.geom.vector.Vec2))?G__11464.buf:G__11464.buf);
var G__11463 = (new Float32Array(3));
(G__11463[(0)] = (G__11462[(1)]));

(G__11463[(1)] = (G__11462[(2)]));

(G__11463[(2)] = (G__11462[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11463,null,cljs.core.meta.call(null,G__11464)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__11467){
var G__11465 = (((G__11467 instanceof thi.ng.geom.vector.Vec2))?G__11467.buf:G__11467.buf);
var G__11466 = (new Float32Array(3));
(G__11466[(0)] = (G__11465[(1)]));

(G__11466[(1)] = (G__11465[(2)]));

(G__11466[(2)] = (G__11465[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11466,null,cljs.core.meta.call(null,G__11467)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__11470){
var G__11468 = (((G__11470 instanceof thi.ng.geom.vector.Vec2))?G__11470.buf:G__11470.buf);
var G__11469 = (new Float32Array(3));
(G__11469[(0)] = (G__11468[(1)]));

(G__11469[(1)] = (G__11468[(2)]));

(G__11469[(2)] = (G__11468[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11469,null,cljs.core.meta.call(null,G__11470)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__11473){
var G__11471 = (((G__11473 instanceof thi.ng.geom.vector.Vec2))?G__11473.buf:G__11473.buf);
return (G__11471[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__11476){
var G__11474 = (((G__11476 instanceof thi.ng.geom.vector.Vec2))?G__11476.buf:G__11476.buf);
var G__11475 = (new Float32Array(2));
(G__11475[(0)] = (G__11474[(2)]));

(G__11475[(1)] = (G__11474[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11475,null,cljs.core.meta.call(null,G__11476)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__11479){
var G__11477 = (((G__11479 instanceof thi.ng.geom.vector.Vec2))?G__11479.buf:G__11479.buf);
var G__11478 = (new Float32Array(3));
(G__11478[(0)] = (G__11477[(2)]));

(G__11478[(1)] = (G__11477[(0)]));

(G__11478[(2)] = (G__11477[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11478,null,cljs.core.meta.call(null,G__11479)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__11482){
var G__11480 = (((G__11482 instanceof thi.ng.geom.vector.Vec2))?G__11482.buf:G__11482.buf);
var G__11481 = (new Float32Array(3));
(G__11481[(0)] = (G__11480[(2)]));

(G__11481[(1)] = (G__11480[(0)]));

(G__11481[(2)] = (G__11480[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11481,null,cljs.core.meta.call(null,G__11482)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__11485){
var G__11483 = (((G__11485 instanceof thi.ng.geom.vector.Vec2))?G__11485.buf:G__11485.buf);
var G__11484 = (new Float32Array(3));
(G__11484[(0)] = (G__11483[(2)]));

(G__11484[(1)] = (G__11483[(0)]));

(G__11484[(2)] = (G__11483[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11484,null,cljs.core.meta.call(null,G__11485)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__11488){
var G__11486 = (((G__11488 instanceof thi.ng.geom.vector.Vec2))?G__11488.buf:G__11488.buf);
var G__11487 = (new Float32Array(2));
(G__11487[(0)] = (G__11486[(2)]));

(G__11487[(1)] = (G__11486[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11487,null,cljs.core.meta.call(null,G__11488)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__11491){
var G__11489 = (((G__11491 instanceof thi.ng.geom.vector.Vec2))?G__11491.buf:G__11491.buf);
var G__11490 = (new Float32Array(3));
(G__11490[(0)] = (G__11489[(2)]));

(G__11490[(1)] = (G__11489[(1)]));

(G__11490[(2)] = (G__11489[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11490,null,cljs.core.meta.call(null,G__11491)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__11494){
var G__11492 = (((G__11494 instanceof thi.ng.geom.vector.Vec2))?G__11494.buf:G__11494.buf);
var G__11493 = (new Float32Array(3));
(G__11493[(0)] = (G__11492[(2)]));

(G__11493[(1)] = (G__11492[(1)]));

(G__11493[(2)] = (G__11492[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11493,null,cljs.core.meta.call(null,G__11494)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__11497){
var G__11495 = (((G__11497 instanceof thi.ng.geom.vector.Vec2))?G__11497.buf:G__11497.buf);
var G__11496 = (new Float32Array(3));
(G__11496[(0)] = (G__11495[(2)]));

(G__11496[(1)] = (G__11495[(1)]));

(G__11496[(2)] = (G__11495[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11496,null,cljs.core.meta.call(null,G__11497)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__11500){
var G__11498 = (((G__11500 instanceof thi.ng.geom.vector.Vec2))?G__11500.buf:G__11500.buf);
var G__11499 = (new Float32Array(2));
(G__11499[(0)] = (G__11498[(2)]));

(G__11499[(1)] = (G__11498[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11499,null,cljs.core.meta.call(null,G__11500)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__11503){
var G__11501 = (((G__11503 instanceof thi.ng.geom.vector.Vec2))?G__11503.buf:G__11503.buf);
var G__11502 = (new Float32Array(3));
(G__11502[(0)] = (G__11501[(2)]));

(G__11502[(1)] = (G__11501[(2)]));

(G__11502[(2)] = (G__11501[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11502,null,cljs.core.meta.call(null,G__11503)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__11506){
var G__11504 = (((G__11506 instanceof thi.ng.geom.vector.Vec2))?G__11506.buf:G__11506.buf);
var G__11505 = (new Float32Array(3));
(G__11505[(0)] = (G__11504[(2)]));

(G__11505[(1)] = (G__11504[(2)]));

(G__11505[(2)] = (G__11504[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11505,null,cljs.core.meta.call(null,G__11506)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__11509){
var G__11507 = (((G__11509 instanceof thi.ng.geom.vector.Vec2))?G__11509.buf:G__11509.buf);
var G__11508 = (new Float32Array(3));
(G__11508[(0)] = (G__11507[(2)]));

(G__11508[(1)] = (G__11507[(2)]));

(G__11508[(2)] = (G__11507[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11508,null,cljs.core.meta.call(null,G__11509)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name.call(null,k);
var c = cljs.core.count.call(null,n);
var temp__6751__auto__ = (function (){var and__7377__auto__ = ((1) === c);
if(and__7377__auto__){
return keymap.call(null,cljs.core.first.call(null,n));
} else {
return and__7377__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var idx = temp__6751__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__6751__auto____$1 = keymap.call(null,cljs.core.first.call(null,n__$1));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
(dest[(idx | (0))] = v.call(null,i));

var G__11510 = (i + (1));
var G__11511 = cljs.core.next.call(null,n__$1);
i = G__11510;
n__$1 = G__11511;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_.call(null,k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__11512 = null;
var G__11512__1 = (function (a){
return a;
});
var G__11512__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__11512 = function(a,b){
switch(arguments.length){
case 1:
return G__11512__1.call(this,a);
case 2:
return G__11512__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11512.cljs$core$IFn$_invoke$arity$1 = G__11512__1;
G__11512.cljs$core$IFn$_invoke$arity$2 = G__11512__2;
return G__11512;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__11513 = null;
var G__11513__1 = (function (a){
return a;
});
var G__11513__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__11513 = function(a,b){
switch(arguments.length){
case 1:
return G__11513__1.call(this,a);
case 2:
return G__11513__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11513.cljs$core$IFn$_invoke$arity$1 = G__11513__1;
G__11513.cljs$core$IFn$_invoke$arity$2 = G__11513__2;
return G__11513;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args11514 = [];
var len__8605__auto___11517 = arguments.length;
var i__8606__auto___11518 = (0);
while(true){
if((i__8606__auto___11518 < len__8605__auto___11517)){
args11514.push((arguments[i__8606__auto___11518]));

var G__11519 = (i__8606__auto___11518 + (1));
i__8606__auto___11518 = G__11519;
continue;
} else {
}
break;
}

var G__11516 = args11514.length;
switch (G__11516) {
case 0:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11514.length)].join('')));

}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V2;
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2.call(null,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),(0)),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,null));
});

thi.ng.geom.vector.vec2.cljs$lang$maxFixedArity = 2;

thi.ng.geom.vector.vec3 = (function thi$ng$geom$vector$vec3(var_args){
var args11521 = [];
var len__8605__auto___11524 = arguments.length;
var i__8606__auto___11525 = (0);
while(true){
if((i__8606__auto___11525 < len__8605__auto___11524)){
args11521.push((arguments[i__8606__auto___11525]));

var G__11526 = (i__8606__auto___11525 + (1));
i__8606__auto___11525 = G__11526;
continue;
} else {
}
break;
}

var G__11523 = args11521.length;
switch (G__11523) {
case 0:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11521.length)].join('')));

}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.vector.V3;
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,v,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0));
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.call(null,v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,null));
});

thi.ng.geom.vector.vec3.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec2_with_meta = (function thi$ng$geom$vector$vec2_with_meta(var_args){
var args11528 = [];
var len__8605__auto___11531 = arguments.length;
var i__8606__auto___11532 = (0);
while(true){
if((i__8606__auto___11532 < len__8605__auto___11531)){
args11528.push((arguments[i__8606__auto___11532]));

var G__11533 = (i__8606__auto___11532 + (1));
i__8606__auto___11532 = G__11533;
continue;
} else {
}
break;
}

var G__11530 = args11528.length;
switch (G__11530) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11528.length)].join('')));

}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.call(null,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec2_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec2",v);

}
}
}
}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.vector.Vec2(b,null,meta));
});

thi.ng.geom.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3;

thi.ng.geom.vector.vec3_with_meta = (function thi$ng$geom$vector$vec3_with_meta(var_args){
var args11535 = [];
var len__8605__auto___11538 = arguments.length;
var i__8606__auto___11539 = (0);
while(true){
if((i__8606__auto___11539 < len__8605__auto___11538)){
args11535.push((arguments[i__8606__auto___11539]));

var G__11540 = (i__8606__auto___11539 + (1));
i__8606__auto___11539 = G__11540;
continue;
} else {
}
break;
}

var G__11537 = args11535.length;
switch (G__11537) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11535.length)].join('')));

}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta.call(null,v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.call(null,v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.nth.call(null,v,(0),0.0),cljs.core.nth.call(null,v,(1),0.0),cljs.core.nth.call(null,v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_.call(null,v)){
return thi.ng.geom.vector.vec3_with_meta.call(null,cljs.core.get.call(null,v,new cljs.core.Keyword(null,"x","x",2099068185),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"y","y",-1757859776),0.0),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"z","z",-789527183),0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_.call(null,"Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.vector.Vec3(b,null,meta));
});

thi.ng.geom.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4;

thi.ng.geom.vector.vec2_QMARK_ = (function thi$ng$geom$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec2);
});
thi.ng.geom.vector.vec3_QMARK_ = (function thi$ng$geom$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.vector.Vec3);
});
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.call(null,(1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.call(null,(0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.call(null,(1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.call(null,(0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.call(null,(0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var args11542 = [];
var len__8605__auto___11545 = arguments.length;
var i__8606__auto___11546 = (0);
while(true){
if((i__8606__auto___11546 < len__8605__auto___11545)){
args11542.push((arguments[i__8606__auto___11546]));

var G__11547 = (i__8606__auto___11546 + (1));
i__8606__auto___11546 = G__11547;
continue;
} else {
}
break;
}

var G__11544 = args11542.length;
switch (G__11544) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11542.length)].join('')));

}
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var args11549 = [];
var len__8605__auto___11552 = arguments.length;
var i__8606__auto___11553 = (0);
while(true){
if((i__8606__auto___11553 < len__8605__auto___11552)){
args11549.push((arguments[i__8606__auto___11553]));

var G__11554 = (i__8606__auto___11553 + (1));
i__8606__auto___11553 = G__11554;
continue;
} else {
}
break;
}

var G__11551 = args11549.length;
switch (G__11551) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11549.length)].join('')));

}
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)));
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.call(null,thi.ng.geom.vector.vec3.call(null,thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null),thi.ng.math.core.randnorm.call(null)),n);
});

thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=vector.js.map