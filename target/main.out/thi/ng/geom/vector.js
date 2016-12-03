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
var G__10046_10395 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10047_10396 = v.buf;
(self__.buf[(0)] = ((G__10046_10395[(0)]) - (G__10047_10396[(0)])));

(self__.buf[(1)] = ((G__10046_10395[(1)]) - (G__10047_10396[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10046_10395[(0)]) - v));

(self__.buf[(1)] = ((G__10046_10395[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10046_10395[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10046_10395[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10055_10397 = typeof v1 === 'number';
var G__10056_10398 = typeof v2 === 'number';
if(((G__10055_10397)?G__10056_10398:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__10057_10399 = ((!(G__10055_10397))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10058_10400 = ((!(G__10056_10398))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10049_10401 = (cljs.core.truth_(G__10057_10399)?v1.buf:null);
var G__10050_10402 = (cljs.core.truth_(G__10058_10400)?v2.buf:null);
var G__10051_10403 = (cljs.core.truth_(G__10057_10399)?(G__10049_10401[(0)]):((G__10055_10397)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10052_10404 = (cljs.core.truth_(G__10057_10399)?(G__10049_10401[(1)]):((G__10055_10397)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10053_10405 = (cljs.core.truth_(G__10058_10400)?(G__10050_10402[(0)]):((G__10056_10398)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10054_10406 = (cljs.core.truth_(G__10058_10400)?(G__10050_10402[(1)]):((G__10056_10398)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__10051_10403) - G__10053_10405));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__10052_10404) - G__10054_10406));
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
var G__10059_10407 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10060_10408 = v.buf;
(self__.buf[(0)] = ((G__10059_10407[(0)]) * (G__10060_10408[(0)])));

(self__.buf[(1)] = ((G__10059_10407[(1)]) * (G__10060_10408[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10059_10407[(0)]) * v));

(self__.buf[(1)] = ((G__10059_10407[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10059_10407[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10059_10407[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10068_10409 = typeof v1 === 'number';
var G__10069_10410 = typeof v2 === 'number';
if(((G__10068_10409)?G__10069_10410:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__10070_10411 = ((!(G__10068_10409))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10071_10412 = ((!(G__10069_10410))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10062_10413 = (cljs.core.truth_(G__10070_10411)?v1.buf:null);
var G__10063_10414 = (cljs.core.truth_(G__10071_10412)?v2.buf:null);
var G__10064_10415 = (cljs.core.truth_(G__10070_10411)?(G__10062_10413[(0)]):((G__10068_10409)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10065_10416 = (cljs.core.truth_(G__10070_10411)?(G__10062_10413[(1)]):((G__10068_10409)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10066_10417 = (cljs.core.truth_(G__10071_10412)?(G__10063_10414[(0)]):((G__10069_10410)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10067_10418 = (cljs.core.truth_(G__10071_10412)?(G__10063_10414[(1)]):((G__10069_10410)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__10064_10415) * G__10066_10417));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__10065_10416) * G__10067_10418));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10081_10419 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10082_10420 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10083_10421 = ((!(G__10081_10419))?typeof a === 'number':null);
var G__10084_10422 = ((!(G__10082_10420))?typeof b === 'number':null);
var G__10072_10423 = self__.buf;
var G__10073_10424 = ((G__10081_10419)?a.buf:null);
var G__10074_10425 = ((G__10082_10420)?b.buf:null);
var G__10075_10426 = (G__10072_10423[(0)]);
var G__10076_10427 = (G__10072_10423[(1)]);
var G__10077_10428 = ((G__10081_10419)?(G__10073_10424[(0)]):(cljs.core.truth_(G__10083_10421)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10078_10429 = ((G__10081_10419)?(G__10073_10424[(1)]):(cljs.core.truth_(G__10083_10421)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10079_10430 = ((G__10082_10420)?(G__10074_10425[(0)]):(cljs.core.truth_(G__10084_10422)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10080_10431 = ((G__10082_10420)?(G__10074_10425[(1)]):(cljs.core.truth_(G__10084_10422)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__10075_10426 - G__10077_10428) * G__10079_10430));

(self__.buf[(1)] = ((G__10076_10427 - G__10078_10429) * G__10080_10431));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10094_10432 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10095_10433 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10096_10434 = ((!(G__10094_10432))?typeof a === 'number':null);
var G__10097_10435 = ((!(G__10095_10433))?typeof b === 'number':null);
var G__10085_10436 = self__.buf;
var G__10086_10437 = ((G__10094_10432)?a.buf:null);
var G__10087_10438 = ((G__10095_10433)?b.buf:null);
var G__10088_10439 = (G__10085_10436[(0)]);
var G__10089_10440 = (G__10085_10436[(1)]);
var G__10090_10441 = ((G__10094_10432)?(G__10086_10437[(0)]):(cljs.core.truth_(G__10096_10434)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10091_10442 = ((G__10094_10432)?(G__10086_10437[(1)]):(cljs.core.truth_(G__10096_10434)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10092_10443 = ((G__10095_10433)?(G__10087_10438[(0)]):(cljs.core.truth_(G__10097_10435)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10093_10444 = ((G__10095_10433)?(G__10087_10438[(1)]):(cljs.core.truth_(G__10097_10435)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__10088_10439 * G__10090_10441) - G__10092_10443));

(self__.buf[(1)] = ((G__10089_10440 * G__10091_10442) - G__10093_10444));

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
var G__10107_10445 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10108_10446 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10109_10447 = ((!(G__10107_10445))?typeof a === 'number':null);
var G__10110_10448 = ((!(G__10108_10446))?typeof b === 'number':null);
var G__10098_10449 = self__.buf;
var G__10099_10450 = ((G__10107_10445)?a.buf:null);
var G__10100_10451 = ((G__10108_10446)?b.buf:null);
var G__10101_10452 = (G__10098_10449[(0)]);
var G__10102_10453 = (G__10098_10449[(1)]);
var G__10103_10454 = ((G__10107_10445)?(G__10099_10450[(0)]):(cljs.core.truth_(G__10109_10447)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10104_10455 = ((G__10107_10445)?(G__10099_10450[(1)]):(cljs.core.truth_(G__10109_10447)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10105_10456 = ((G__10108_10446)?(G__10100_10451[(0)]):(cljs.core.truth_(G__10110_10448)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10106_10457 = ((G__10108_10446)?(G__10100_10451[(1)]):(cljs.core.truth_(G__10110_10448)?b:cljs.core.nth.call(null,b,(1),0.0)));
(self__.buf[(0)] = ((G__10101_10452 * G__10103_10454) + G__10105_10456));

(self__.buf[(1)] = ((G__10102_10453 * G__10104_10455) + G__10106_10457));

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
var G__10111_10458 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10112_10459 = v.buf;
(self__.buf[(0)] = ((G__10111_10458[(0)]) / (G__10112_10459[(0)])));

(self__.buf[(1)] = ((G__10111_10458[(1)]) / (G__10112_10459[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10111_10458[(0)]) / v));

(self__.buf[(1)] = ((G__10111_10458[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10111_10458[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10111_10458[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10120_10460 = typeof v1 === 'number';
var G__10121_10461 = typeof v2 === 'number';
if(((G__10120_10460)?G__10121_10461:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__10122_10462 = ((!(G__10120_10460))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10123_10463 = ((!(G__10121_10461))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10114_10464 = (cljs.core.truth_(G__10122_10462)?v1.buf:null);
var G__10115_10465 = (cljs.core.truth_(G__10123_10463)?v2.buf:null);
var G__10116_10466 = (cljs.core.truth_(G__10122_10462)?(G__10114_10464[(0)]):((G__10120_10460)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10117_10467 = (cljs.core.truth_(G__10122_10462)?(G__10114_10464[(1)]):((G__10120_10460)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10118_10468 = (cljs.core.truth_(G__10123_10463)?(G__10115_10465[(0)]):((G__10121_10461)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10119_10469 = (cljs.core.truth_(G__10123_10463)?(G__10115_10465[(1)]):((G__10121_10461)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__10116_10466) / G__10118_10468));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__10117_10467) / G__10119_10469));
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
var G__10124_10470 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10125_10471 = v.buf;
(self__.buf[(0)] = ((G__10124_10470[(0)]) + (G__10125_10471[(0)])));

(self__.buf[(1)] = ((G__10124_10470[(1)]) + (G__10125_10471[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10124_10470[(0)]) + v));

(self__.buf[(1)] = ((G__10124_10470[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10124_10470[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10124_10470[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10133_10472 = typeof v1 === 'number';
var G__10134_10473 = typeof v2 === 'number';
if(((G__10133_10472)?G__10134_10473:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__10135_10474 = ((!(G__10133_10472))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10136_10475 = ((!(G__10134_10473))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10127_10476 = (cljs.core.truth_(G__10135_10474)?v1.buf:null);
var G__10128_10477 = (cljs.core.truth_(G__10136_10475)?v2.buf:null);
var G__10129_10478 = (cljs.core.truth_(G__10135_10474)?(G__10127_10476[(0)]):((G__10133_10472)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10130_10479 = (cljs.core.truth_(G__10135_10474)?(G__10127_10476[(1)]):((G__10133_10472)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10131_10480 = (cljs.core.truth_(G__10136_10475)?(G__10128_10477[(0)]):((G__10134_10473)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10132_10481 = (cljs.core.truth_(G__10136_10475)?(G__10128_10477[(1)]):((G__10134_10473)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__10129_10478) + G__10131_10480));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__10130_10479) + G__10132_10481));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10146_10482 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10147_10483 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10148_10484 = ((!(G__10146_10482))?typeof a === 'number':null);
var G__10149_10485 = ((!(G__10147_10483))?typeof b === 'number':null);
var G__10137_10486 = self__.buf;
var G__10138_10487 = ((G__10146_10482)?a.buf:null);
var G__10139_10488 = ((G__10147_10483)?b.buf:null);
var G__10140_10489 = (G__10137_10486[(0)]);
var G__10141_10490 = (G__10137_10486[(1)]);
var G__10142_10491 = ((G__10146_10482)?(G__10138_10487[(0)]):(cljs.core.truth_(G__10148_10484)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10143_10492 = ((G__10146_10482)?(G__10138_10487[(1)]):(cljs.core.truth_(G__10148_10484)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10144_10493 = ((G__10147_10483)?(G__10139_10488[(0)]):(cljs.core.truth_(G__10149_10485)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10145_10494 = ((G__10147_10483)?(G__10139_10488[(1)]):(cljs.core.truth_(G__10149_10485)?b:cljs.core.nth.call(null,b,(1),1.0)));
(self__.buf[(0)] = ((G__10140_10489 + G__10142_10491) * G__10144_10493));

(self__.buf[(1)] = ((G__10141_10490 + G__10143_10492) * G__10145_10494));

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
var G__10150 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10151 = v.buf;
return (((G__10150[(0)]) * (G__10151[(1)])) - ((G__10150[(1)]) * (G__10151[(0)])));
} else {
return (((G__10150[(0)]) * cljs.core.nth.call(null,v,(1),0.0)) - ((G__10150[(1)]) * cljs.core.nth.call(null,v,(0),0.0)));
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
var G__10165 = self__.buf;
var G__10167 = (G__10165[(0)]);
var G__10168 = (G__10165[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10166 = v.buf;
var G__10169 = (G__10166[(0)]);
var G__10170 = (G__10166[(1)]);
var d = (((G__10167 * G__10169) + (G__10168 * G__10170)) * 2.0);
(b[(0)] = ((G__10169 * d) - G__10167));

(b[(1)] = ((G__10170 * d) - G__10168));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__10169 = cljs.core.nth.call(null,v,(0),0.0);
var G__10170 = cljs.core.nth.call(null,v,(1),0.0);
var d = (((G__10167 * G__10169) + (G__10168 * G__10170)) * 2.0);
(b[(0)] = ((G__10169 * d) - G__10167));

(b[(1)] = ((G__10170 * d) - G__10168));

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
var G__10171 = self__.buf;
var G__10173 = (G__10171[(0)]);
var G__10174 = (G__10171[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10172 = v.buf;
var G__10175 = (G__10172[(0)]);
var G__10176 = (G__10172[(1)]);
var dx = (G__10173 - G__10175);
var dy = (G__10174 - G__10176);
return ((dx * dx) + (dy * dy));
} else {
var G__10175 = cljs.core.nth.call(null,v,(0),0.0);
var G__10176 = cljs.core.nth.call(null,v,(1),0.0);
var dx = (G__10173 - G__10175);
var dy = (G__10174 - G__10176);
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
var G__10177 = self__.buf;
var G__10178 = (G__10177[(0)]);
var G__10179 = (G__10177[(1)]);
(b[(0)] = ((G__10178 * c) - (G__10179 * s)));

(b[(1)] = ((G__10178 * s) + (G__10179 * c)));

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
var dest__9910__auto__ = (new Float32Array((2)));
var G__10180_10495 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10181_10496 = v.buf;
(dest__9910__auto__[(0)] = ((G__10180_10495[(0)]) * (G__10181_10496[(0)])));

(dest__9910__auto__[(1)] = ((G__10180_10495[(1)]) * (G__10181_10496[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10180_10495[(0)]) * v));

(dest__9910__auto__[(1)] = ((G__10180_10495[(1)]) * v));
} else {
(dest__9910__auto__[(0)] = ((G__10180_10495[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10180_10495[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
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
var G__10182 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10183 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10182[(0)]),(G__10183[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10182[(1)]),(G__10183[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10182[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10182[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps);
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
var G__10184 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10185 = v.buf;
return (((G__10184[(0)]) * (G__10185[(0)])) + ((G__10184[(1)]) * (G__10185[(1)])));
} else {
return (((G__10184[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__10184[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
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
var dest__9910__auto__ = (new Float32Array((2)));
var G__10186_10497 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10187_10498 = v.buf;
(dest__9910__auto__[(0)] = ((G__10186_10497[(0)]) + (G__10187_10498[(0)])));

(dest__9910__auto__[(1)] = ((G__10186_10497[(1)]) + (G__10187_10498[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10186_10497[(0)]) + v));

(dest__9910__auto__[(1)] = ((G__10186_10497[(1)]) + v));
} else {
(dest__9910__auto__[(0)] = ((G__10186_10497[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10186_10497[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
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
var G__10188_10499 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10189_10500 = v.buf;
(b[(0)] = (((G__10188_10499[(0)]) + (G__10189_10500[(0)])) * 0.5));

(b[(1)] = (((G__10188_10499[(1)]) + (G__10189_10500[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10188_10499[(0)]) + v) * 0.5));

(b[(1)] = (((G__10188_10499[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10188_10499[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10188_10499[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10199_10501 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10200_10502 = (t instanceof thi.ng.geom.vector.Vec2);
var G__10201_10503 = ((!(G__10199_10501))?typeof v === 'number':null);
var G__10202_10504 = ((!(G__10200_10502))?typeof t === 'number':null);
var G__10190_10505 = self__.buf;
var G__10191_10506 = ((G__10199_10501)?v.buf:null);
var G__10192_10507 = ((G__10200_10502)?t.buf:null);
var G__10193_10508 = (G__10190_10505[(0)]);
var G__10194_10509 = (G__10190_10505[(1)]);
var G__10195_10510 = ((G__10199_10501)?(G__10191_10506[(0)]):(cljs.core.truth_(G__10201_10503)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10196_10511 = ((G__10199_10501)?(G__10191_10506[(1)]):(cljs.core.truth_(G__10201_10503)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10197_10512 = ((G__10200_10502)?(G__10192_10507[(0)]):(cljs.core.truth_(G__10202_10504)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10198_10513 = ((G__10200_10502)?(G__10192_10507[(1)]):(cljs.core.truth_(G__10202_10504)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = (((G__10195_10510 - G__10193_10508) * G__10197_10512) + G__10193_10508));

(b[(1)] = (((G__10196_10511 - G__10194_10509) * G__10198_10513) + G__10194_10509));

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
var G__10212_10514 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10213_10515 = (c instanceof thi.ng.geom.vector.Vec2);
var G__10214_10516 = ((!(G__10212_10514))?typeof b === 'number':null);
var G__10215_10517 = ((!(G__10213_10515))?typeof c === 'number':null);
var G__10203_10518 = self__.buf;
var G__10204_10519 = ((G__10212_10514)?b.buf:null);
var G__10205_10520 = ((G__10213_10515)?c.buf:null);
var G__10206_10521 = (G__10203_10518[(0)]);
var G__10207_10522 = (G__10203_10518[(1)]);
var G__10208_10523 = ((G__10212_10514)?(G__10204_10519[(0)]):(cljs.core.truth_(G__10214_10516)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10209_10524 = ((G__10212_10514)?(G__10204_10519[(1)]):(cljs.core.truth_(G__10214_10516)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10210_10525 = ((G__10213_10515)?(G__10205_10520[(0)]):(cljs.core.truth_(G__10215_10517)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10211_10526 = ((G__10213_10515)?(G__10205_10520[(1)]):(cljs.core.truth_(G__10215_10517)?c:cljs.core.nth.call(null,c,(1),0.0)));
var x1_10527 = (((G__10208_10523 - G__10206_10521) * u) + G__10206_10521);
var y1_10528 = (((G__10209_10524 - G__10207_10522) * u) + G__10207_10522);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10210_10525) * u) + G__10210_10525) - x1_10527) * v) + x1_10527));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10211_10526) * u) + G__10211_10526) - y1_10528) * v) + y1_10528));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10225_10529 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10226_10530 = (t instanceof thi.ng.geom.vector.Vec2);
var G__10227_10531 = ((!(G__10225_10529))?typeof v === 'number':null);
var G__10228_10532 = ((!(G__10226_10530))?typeof t === 'number':null);
var G__10216_10533 = self__.buf;
var G__10217_10534 = ((G__10225_10529)?v.buf:null);
var G__10218_10535 = ((G__10226_10530)?t.buf:null);
var G__10219_10536 = (G__10216_10533[(0)]);
var G__10220_10537 = (G__10216_10533[(1)]);
var G__10221_10538 = ((G__10225_10529)?(G__10217_10534[(0)]):(cljs.core.truth_(G__10227_10531)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10222_10539 = ((G__10225_10529)?(G__10217_10534[(1)]):(cljs.core.truth_(G__10227_10531)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10223_10540 = ((G__10226_10530)?(G__10218_10535[(0)]):(cljs.core.truth_(G__10228_10532)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10224_10541 = ((G__10226_10530)?(G__10218_10535[(1)]):(cljs.core.truth_(G__10228_10532)?t:cljs.core.nth.call(null,t,(1),0.0)));
(b[(0)] = f.call(null,G__10219_10536,G__10221_10538,G__10223_10540));

(b[(1)] = f.call(null,G__10220_10537,G__10222_10539,G__10224_10541));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10229_10542 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__10230_10543 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__10230_10543[(0)]),(G__10229_10542[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__10230_10543[(1)]),(G__10229_10542[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10229_10542[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10229_10542[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__10229_10542[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__10229_10542[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__10240_10544 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__10241_10545 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__10242_10546 = ((!(G__10240_10544))?typeof e1 === 'number':null);
var G__10243_10547 = ((!(G__10241_10545))?typeof e2 === 'number':null);
var G__10231_10548 = self__.buf;
var G__10232_10549 = ((G__10240_10544)?e1.buf:null);
var G__10233_10550 = ((G__10241_10545)?e2.buf:null);
var G__10234_10551 = (G__10231_10548[(0)]);
var G__10235_10552 = (G__10231_10548[(1)]);
var G__10236_10553 = ((G__10240_10544)?(G__10232_10549[(0)]):(cljs.core.truth_(G__10242_10546)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__10237_10554 = ((G__10240_10544)?(G__10232_10549[(1)]):(cljs.core.truth_(G__10242_10546)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__10238_10555 = ((G__10241_10545)?(G__10233_10550[(0)]):(cljs.core.truth_(G__10243_10547)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__10239_10556 = ((G__10241_10545)?(G__10233_10550[(1)]):(cljs.core.truth_(G__10243_10547)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10236_10553,G__10238_10555,G__10234_10551));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10236_10553,G__10239_10556,G__10235_10552));

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
var dest__9910__auto__ = (new Float32Array((2)));
var G__10244_10557 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10245_10558 = v.buf;
(dest__9910__auto__[(0)] = (function (){var a__9307__auto__ = (G__10244_10557[(0)]);
var b__9308__auto__ = (G__10245_10558[(0)]);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9307__auto__ = (G__10244_10557[(1)]);
var b__9308__auto__ = (G__10245_10558[(1)]);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = (function (){var a__9307__auto__ = (G__10244_10557[(0)]);
var b__9308__auto__ = v;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9307__auto__ = (G__10244_10557[(1)]);
var b__9308__auto__ = v;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
} else {
(dest__9910__auto__[(0)] = (function (){var a__9307__auto__ = (G__10244_10557[(0)]);
var b__9308__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9307__auto__ = (G__10244_10557[(1)]);
var b__9308__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10255_10559 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10256_10560 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__10257_10561 = ((!(G__10255_10559))?typeof v === 'number':null);
var G__10258_10562 = ((!(G__10256_10560))?typeof v2 === 'number':null);
var G__10246_10563 = self__.buf;
var G__10247_10564 = ((G__10255_10559)?v.buf:null);
var G__10248_10565 = ((G__10256_10560)?v2.buf:null);
var G__10249_10566 = (G__10246_10563[(0)]);
var G__10250_10567 = (G__10246_10563[(1)]);
var G__10251_10568 = ((G__10255_10559)?(G__10247_10564[(0)]):(cljs.core.truth_(G__10257_10561)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10252_10569 = ((G__10255_10559)?(G__10247_10564[(1)]):(cljs.core.truth_(G__10257_10561)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10253_10570 = ((G__10256_10560)?(G__10248_10565[(0)]):(cljs.core.truth_(G__10258_10562)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10254_10571 = ((G__10256_10560)?(G__10248_10565[(1)]):(cljs.core.truth_(G__10258_10562)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9921__auto__[(0)] = (function (){var a__9307__auto__ = (function (){var a__9307__auto__ = G__10249_10566;
var b__9308__auto__ = G__10251_10568;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})();
var b__9308__auto__ = G__10253_10570;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__9921__auto__[(1)] = (function (){var a__9307__auto__ = (function (){var a__9307__auto__ = G__10250_10567;
var b__9308__auto__ = G__10252_10569;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})();
var b__9308__auto__ = G__10254_10571;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9910__auto__ = (new Float32Array((2)));
var G__10259_10572 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10260_10573 = v.buf;
(dest__9910__auto__[(0)] = (function (){var a__9314__auto__ = (G__10259_10572[(0)]);
var b__9315__auto__ = (G__10260_10573[(0)]);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9314__auto__ = (G__10259_10572[(1)]);
var b__9315__auto__ = (G__10260_10573[(1)]);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = (function (){var a__9314__auto__ = (G__10259_10572[(0)]);
var b__9315__auto__ = v;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9314__auto__ = (G__10259_10572[(1)]);
var b__9315__auto__ = v;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
} else {
(dest__9910__auto__[(0)] = (function (){var a__9314__auto__ = (G__10259_10572[(0)]);
var b__9315__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__9910__auto__[(1)] = (function (){var a__9314__auto__ = (G__10259_10572[(1)]);
var b__9315__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10270_10574 = (v instanceof thi.ng.geom.vector.Vec2);
var G__10271_10575 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__10272_10576 = ((!(G__10270_10574))?typeof v === 'number':null);
var G__10273_10577 = ((!(G__10271_10575))?typeof v2 === 'number':null);
var G__10261_10578 = self__.buf;
var G__10262_10579 = ((G__10270_10574)?v.buf:null);
var G__10263_10580 = ((G__10271_10575)?v2.buf:null);
var G__10264_10581 = (G__10261_10578[(0)]);
var G__10265_10582 = (G__10261_10578[(1)]);
var G__10266_10583 = ((G__10270_10574)?(G__10262_10579[(0)]):(cljs.core.truth_(G__10272_10576)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10267_10584 = ((G__10270_10574)?(G__10262_10579[(1)]):(cljs.core.truth_(G__10272_10576)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10268_10585 = ((G__10271_10575)?(G__10263_10580[(0)]):(cljs.core.truth_(G__10273_10577)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10269_10586 = ((G__10271_10575)?(G__10263_10580[(1)]):(cljs.core.truth_(G__10273_10577)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(dest__9921__auto__[(0)] = (function (){var a__9314__auto__ = (function (){var a__9314__auto__ = G__10264_10581;
var b__9315__auto__ = G__10266_10583;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})();
var b__9315__auto__ = G__10268_10585;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__9921__auto__[(1)] = (function (){var a__9314__auto__ = (function (){var a__9314__auto__ = G__10265_10582;
var b__9315__auto__ = G__10267_10584;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})();
var b__9315__auto__ = G__10269_10586;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
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
var G__10587 = null;
var G__10587__2 = (function (self__,k){
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
var G__10587__3 = (function (self__,k,nf){
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
G__10587 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10587__2.call(this,self__,k);
case 3:
return G__10587__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10587.cljs$core$IFn$_invoke$arity$2 = G__10587__2;
G__10587.cljs$core$IFn$_invoke$arity$3 = G__10587__3;
return G__10587;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args10045){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10045)));
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
var G__10274 = self__.buf;
var G__10275 = (G__10274[(0)]);
var G__10276 = (G__10274[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__10275 * Math.cos(G__10276)));

(b[(1)] = (G__10275 * Math.sin(G__10276)));

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
var G__10277 = self__.buf;
var G__10278 = (G__10277[(0)]);
var G__10279 = (G__10277[(1)]);
var l = Math.sqrt(((G__10278 * G__10278) + (G__10279 * G__10279)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__10278 / l));

(b[(1)] = (G__10279 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__10280 = self__.buf;
var G__10281 = (G__10280[(0)]);
var G__10282 = (G__10280[(1)]);
var l = Math.sqrt(((G__10281 * G__10281) + (G__10282 * G__10282)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__10281 * l__$1));

(b[(1)] = (G__10282 * l__$1));

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
var G__10283 = self__.buf;
var G__10284 = (G__10283[(0)]);
var G__10285 = (G__10283[(1)]);
return Math.sqrt(((G__10284 * G__10284) + (G__10285 * G__10285)));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__10286 = self__.buf;
var G__10287 = (G__10286[(0)]);
var G__10288 = (G__10286[(1)]);
return ((G__10287 * G__10287) + (G__10288 * G__10288));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10298_10588 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10299_10589 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10300_10590 = ((!(G__10298_10588))?typeof a === 'number':null);
var G__10301_10591 = ((!(G__10299_10589))?typeof b === 'number':null);
var G__10289_10592 = self__.buf;
var G__10290_10593 = ((G__10298_10588)?a.buf:null);
var G__10291_10594 = ((G__10299_10589)?b.buf:null);
var G__10292_10595 = (G__10289_10592[(0)]);
var G__10293_10596 = (G__10289_10592[(1)]);
var G__10294_10597 = ((G__10298_10588)?(G__10290_10593[(0)]):(cljs.core.truth_(G__10300_10590)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10295_10598 = ((G__10298_10588)?(G__10290_10593[(1)]):(cljs.core.truth_(G__10300_10590)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10296_10599 = ((G__10299_10589)?(G__10291_10594[(0)]):(cljs.core.truth_(G__10301_10591)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10297_10600 = ((G__10299_10589)?(G__10291_10594[(1)]):(cljs.core.truth_(G__10301_10591)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9921__auto__[(0)] = ((G__10292_10595 * G__10294_10597) - G__10296_10599));

(dest__9921__auto__[(1)] = ((G__10293_10596 * G__10295_10598) - G__10297_10600));

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9910__auto__ = (new Float32Array((2)));
var G__10302_10601 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10303_10602 = v.buf;
(dest__9910__auto__[(0)] = ((G__10302_10601[(0)]) * (G__10303_10602[(0)])));

(dest__9910__auto__[(1)] = ((G__10302_10601[(1)]) * (G__10303_10602[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10302_10601[(0)]) * v));

(dest__9910__auto__[(1)] = ((G__10302_10601[(1)]) * v));
} else {
(dest__9910__auto__[(0)] = ((G__10302_10601[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10302_10601[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10304 = self__.buf;
var G__10307 = (new Float32Array((2)));
var G__10308 = (G__10304[(0)]);
var G__10309 = (G__10304[(1)]);
var G__10314 = typeof v1 === 'number';
var G__10315 = typeof v2 === 'number';
if(((G__10314)?G__10315:false)){
(G__10307[(0)] = (G__10308 * v1));

(G__10307[(1)] = (G__10309 * v2));
} else {
var G__10316_10603 = ((!(G__10314))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10317_10604 = ((!(G__10315))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10305_10605 = (cljs.core.truth_(G__10316_10603)?v1.buf:null);
var G__10306_10606 = (cljs.core.truth_(G__10317_10604)?v2.buf:null);
var G__10310_10607 = (cljs.core.truth_(G__10316_10603)?(G__10305_10605[(0)]):((G__10314)?v1:cljs.core.nth.call(null,v1,(0),1.0)));
var G__10311_10608 = (cljs.core.truth_(G__10316_10603)?(G__10305_10605[(1)]):((G__10314)?v1:cljs.core.nth.call(null,v1,(1),1.0)));
var G__10312_10609 = (cljs.core.truth_(G__10317_10604)?(G__10306_10606[(0)]):((G__10315)?v2:cljs.core.nth.call(null,v2,(0),1.0)));
var G__10313_10610 = (cljs.core.truth_(G__10317_10604)?(G__10306_10606[(1)]):((G__10315)?v2:cljs.core.nth.call(null,v2,(1),1.0)));
(G__10307[(0)] = ((G__10308 * G__10310_10607) * G__10312_10609));

(G__10307[(1)] = ((G__10309 * G__10311_10608) * G__10313_10610));
}

return (new thi.ng.geom.vector.Vec2(G__10307,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9880__auto__ = (new Float32Array((2)));
var G__10318_10611 = self__.buf;
(dest__9880__auto__[(0)] = (- (G__10318_10611[(0)])));

(dest__9880__auto__[(1)] = (- (G__10318_10611[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9880__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9910__auto__ = (new Float32Array((2)));
var G__10319_10612 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10320_10613 = v.buf;
(dest__9910__auto__[(0)] = ((G__10319_10612[(0)]) - (G__10320_10613[(0)])));

(dest__9910__auto__[(1)] = ((G__10319_10612[(1)]) - (G__10320_10613[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10319_10612[(0)]) - v));

(dest__9910__auto__[(1)] = ((G__10319_10612[(1)]) - v));
} else {
(dest__9910__auto__[(0)] = ((G__10319_10612[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10319_10612[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10321 = self__.buf;
var G__10324 = (new Float32Array((2)));
var G__10325 = (G__10321[(0)]);
var G__10326 = (G__10321[(1)]);
var G__10331 = typeof v1 === 'number';
var G__10332 = typeof v2 === 'number';
if(((G__10331)?G__10332:false)){
(G__10324[(0)] = (G__10325 - v1));

(G__10324[(1)] = (G__10326 - v2));
} else {
var G__10333_10614 = ((!(G__10331))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10334_10615 = ((!(G__10332))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10322_10616 = (cljs.core.truth_(G__10333_10614)?v1.buf:null);
var G__10323_10617 = (cljs.core.truth_(G__10334_10615)?v2.buf:null);
var G__10327_10618 = (cljs.core.truth_(G__10333_10614)?(G__10322_10616[(0)]):((G__10331)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10328_10619 = (cljs.core.truth_(G__10333_10614)?(G__10322_10616[(1)]):((G__10331)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10329_10620 = (cljs.core.truth_(G__10334_10615)?(G__10323_10617[(0)]):((G__10332)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10330_10621 = (cljs.core.truth_(G__10334_10615)?(G__10323_10617[(1)]):((G__10332)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10324[(0)] = ((G__10325 - G__10327_10618) - G__10329_10620));

(G__10324[(1)] = ((G__10326 - G__10328_10619) - G__10330_10621));
}

return (new thi.ng.geom.vector.Vec2(G__10324,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10344_10622 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10345_10623 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10346_10624 = ((!(G__10344_10622))?typeof a === 'number':null);
var G__10347_10625 = ((!(G__10345_10623))?typeof b === 'number':null);
var G__10335_10626 = self__.buf;
var G__10336_10627 = ((G__10344_10622)?a.buf:null);
var G__10337_10628 = ((G__10345_10623)?b.buf:null);
var G__10338_10629 = (G__10335_10626[(0)]);
var G__10339_10630 = (G__10335_10626[(1)]);
var G__10340_10631 = ((G__10344_10622)?(G__10336_10627[(0)]):(cljs.core.truth_(G__10346_10624)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10341_10632 = ((G__10344_10622)?(G__10336_10627[(1)]):(cljs.core.truth_(G__10346_10624)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10342_10633 = ((G__10345_10623)?(G__10337_10628[(0)]):(cljs.core.truth_(G__10347_10625)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10343_10634 = ((G__10345_10623)?(G__10337_10628[(1)]):(cljs.core.truth_(G__10347_10625)?b:cljs.core.nth.call(null,b,(1),0.0)));
(dest__9921__auto__[(0)] = ((G__10338_10629 * G__10340_10631) + G__10342_10633));

(dest__9921__auto__[(1)] = ((G__10339_10630 * G__10341_10632) + G__10343_10634));

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10357_10635 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10358_10636 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10359_10637 = ((!(G__10357_10635))?typeof a === 'number':null);
var G__10360_10638 = ((!(G__10358_10636))?typeof b === 'number':null);
var G__10348_10639 = self__.buf;
var G__10349_10640 = ((G__10357_10635)?a.buf:null);
var G__10350_10641 = ((G__10358_10636)?b.buf:null);
var G__10351_10642 = (G__10348_10639[(0)]);
var G__10352_10643 = (G__10348_10639[(1)]);
var G__10353_10644 = ((G__10357_10635)?(G__10349_10640[(0)]):(cljs.core.truth_(G__10359_10637)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10354_10645 = ((G__10357_10635)?(G__10349_10640[(1)]):(cljs.core.truth_(G__10359_10637)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10355_10646 = ((G__10358_10636)?(G__10350_10641[(0)]):(cljs.core.truth_(G__10360_10638)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10356_10647 = ((G__10358_10636)?(G__10350_10641[(1)]):(cljs.core.truth_(G__10360_10638)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9921__auto__[(0)] = ((G__10351_10642 + G__10353_10644) * G__10355_10646));

(dest__9921__auto__[(1)] = ((G__10352_10643 + G__10354_10645) * G__10356_10647));

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9880__auto__ = (new Float32Array((2)));
var G__10361_10648 = self__.buf;
(dest__9880__auto__[(0)] = ((1) / (G__10361_10648[(0)])));

(dest__9880__auto__[(1)] = ((1) / (G__10361_10648[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9880__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9910__auto__ = (new Float32Array((2)));
var G__10362_10649 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10363_10650 = v.buf;
(dest__9910__auto__[(0)] = ((G__10362_10649[(0)]) / (G__10363_10650[(0)])));

(dest__9910__auto__[(1)] = ((G__10362_10649[(1)]) / (G__10363_10650[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10362_10649[(0)]) / v));

(dest__9910__auto__[(1)] = ((G__10362_10649[(1)]) / v));
} else {
(dest__9910__auto__[(0)] = ((G__10362_10649[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10362_10649[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10364 = self__.buf;
var G__10367 = (new Float32Array((2)));
var G__10368 = (G__10364[(0)]);
var G__10369 = (G__10364[(1)]);
var G__10374 = typeof v1 === 'number';
var G__10375 = typeof v2 === 'number';
if(((G__10374)?G__10375:false)){
(G__10367[(0)] = (G__10368 / v1));

(G__10367[(1)] = (G__10369 / v2));
} else {
var G__10376_10651 = ((!(G__10374))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10377_10652 = ((!(G__10375))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10365_10653 = (cljs.core.truth_(G__10376_10651)?v1.buf:null);
var G__10366_10654 = (cljs.core.truth_(G__10377_10652)?v2.buf:null);
var G__10370_10655 = (cljs.core.truth_(G__10376_10651)?(G__10365_10653[(0)]):((G__10374)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10371_10656 = (cljs.core.truth_(G__10376_10651)?(G__10365_10653[(1)]):((G__10374)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10372_10657 = (cljs.core.truth_(G__10377_10652)?(G__10366_10654[(0)]):((G__10375)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10373_10658 = (cljs.core.truth_(G__10377_10652)?(G__10366_10654[(1)]):((G__10375)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10367[(0)] = ((G__10368 / G__10370_10655) / G__10372_10657));

(G__10367[(1)] = ((G__10369 / G__10371_10656) / G__10373_10658));
}

return (new thi.ng.geom.vector.Vec2(G__10367,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__9910__auto__ = (new Float32Array((2)));
var G__10378_10659 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__10379_10660 = v.buf;
(dest__9910__auto__[(0)] = ((G__10378_10659[(0)]) + (G__10379_10660[(0)])));

(dest__9910__auto__[(1)] = ((G__10378_10659[(1)]) + (G__10379_10660[(1)])));
} else {
if(typeof v === 'number'){
(dest__9910__auto__[(0)] = ((G__10378_10659[(0)]) + v));

(dest__9910__auto__[(1)] = ((G__10378_10659[(1)]) + v));
} else {
(dest__9910__auto__[(0)] = ((G__10378_10659[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__9910__auto__[(1)] = ((G__10378_10659[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__9910__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10380 = self__.buf;
var G__10383 = (new Float32Array((2)));
var G__10384 = (G__10380[(0)]);
var G__10385 = (G__10380[(1)]);
var G__10390 = typeof v1 === 'number';
var G__10391 = typeof v2 === 'number';
if(((G__10390)?G__10391:false)){
(G__10383[(0)] = (G__10384 + v1));

(G__10383[(1)] = (G__10385 + v2));
} else {
var G__10392_10661 = ((!(G__10390))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__10393_10662 = ((!(G__10391))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__10381_10663 = (cljs.core.truth_(G__10392_10661)?v1.buf:null);
var G__10382_10664 = (cljs.core.truth_(G__10393_10662)?v2.buf:null);
var G__10386_10665 = (cljs.core.truth_(G__10392_10661)?(G__10381_10663[(0)]):((G__10390)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10387_10666 = (cljs.core.truth_(G__10392_10661)?(G__10381_10663[(1)]):((G__10390)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10388_10667 = (cljs.core.truth_(G__10393_10662)?(G__10382_10664[(0)]):((G__10391)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10389_10668 = (cljs.core.truth_(G__10393_10662)?(G__10382_10664[(1)]):((G__10391)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
(G__10383[(0)] = ((G__10384 + G__10386_10665) + G__10388_10667));

(G__10383[(1)] = ((G__10385 + G__10387_10666) + G__10389_10668));
}

return (new thi.ng.geom.vector.Vec2(G__10383,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9880__auto__ = (new Float32Array((2)));
var G__10394_10669 = self__.buf;
(dest__9880__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__10394_10669[(0)])));

(dest__9880__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__10394_10669[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__9880__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__9921__auto__ = (new Float32Array((2)));
var G__10161_10670 = (a instanceof thi.ng.geom.vector.Vec2);
var G__10162_10671 = (b instanceof thi.ng.geom.vector.Vec2);
var G__10163_10672 = ((!(G__10161_10670))?typeof a === 'number':null);
var G__10164_10673 = ((!(G__10162_10671))?typeof b === 'number':null);
var G__10152_10674 = self__.buf;
var G__10153_10675 = ((G__10161_10670)?a.buf:null);
var G__10154_10676 = ((G__10162_10671)?b.buf:null);
var G__10155_10677 = (G__10152_10674[(0)]);
var G__10156_10678 = (G__10152_10674[(1)]);
var G__10157_10679 = ((G__10161_10670)?(G__10153_10675[(0)]):(cljs.core.truth_(G__10163_10672)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10158_10680 = ((G__10161_10670)?(G__10153_10675[(1)]):(cljs.core.truth_(G__10163_10672)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10159_10681 = ((G__10162_10671)?(G__10154_10676[(0)]):(cljs.core.truth_(G__10164_10673)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10160_10682 = ((G__10162_10671)?(G__10154_10676[(1)]):(cljs.core.truth_(G__10164_10673)?b:cljs.core.nth.call(null,b,(1),1.0)));
(dest__9921__auto__[(0)] = ((G__10155_10677 - G__10157_10679) * G__10159_10681));

(dest__9921__auto__[(1)] = ((G__10156_10678 - G__10158_10680) * G__10160_10682));

return (new thi.ng.geom.vector.Vec2(dest__9921__auto__,null,self__._meta));
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
var G__10684_11135 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10685_11136 = v.buf;
(self__.buf[(0)] = ((G__10684_11135[(0)]) - (G__10685_11136[(0)])));

(self__.buf[(1)] = ((G__10684_11135[(1)]) - (G__10685_11136[(1)])));

(self__.buf[(2)] = ((G__10684_11135[(2)]) - (G__10685_11136[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10684_11135[(0)]) - v));

(self__.buf[(1)] = ((G__10684_11135[(1)]) - v));

(self__.buf[(2)] = ((G__10684_11135[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10684_11135[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10684_11135[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10684_11135[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10698_11137 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10699_11138 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10700_11139 = ((!(G__10698_11137))?typeof v1 === 'number':null);
var G__10701_11140 = ((!(G__10699_11138))?typeof v2 === 'number':null);
var G__10686_11141 = self__.buf;
var G__10687_11142 = ((G__10698_11137)?v1.buf:null);
var G__10688_11143 = ((G__10699_11138)?v2.buf:null);
var G__10689_11144 = (G__10686_11141[(0)]);
var G__10690_11145 = (G__10686_11141[(1)]);
var G__10691_11146 = (G__10686_11141[(2)]);
var G__10692_11147 = ((G__10698_11137)?(G__10687_11142[(0)]):(cljs.core.truth_(G__10700_11139)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10693_11148 = ((G__10698_11137)?(G__10687_11142[(1)]):(cljs.core.truth_(G__10700_11139)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10694_11149 = ((G__10698_11137)?(G__10687_11142[(2)]):(cljs.core.truth_(G__10700_11139)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10695_11150 = ((G__10699_11138)?(G__10688_11143[(0)]):(cljs.core.truth_(G__10701_11140)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10696_11151 = ((G__10699_11138)?(G__10688_11143[(1)]):(cljs.core.truth_(G__10701_11140)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10697_11152 = ((G__10699_11138)?(G__10688_11143[(2)]):(cljs.core.truth_(G__10701_11140)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10689_11144 - G__10692_11147) - G__10695_11150));

(self__.buf[(1)] = ((G__10690_11145 - G__10693_11148) - G__10696_11151));

(self__.buf[(2)] = ((G__10691_11146 - G__10694_11149) - G__10697_11152));

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
var G__10702_11153 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10703_11154 = v.buf;
(self__.buf[(0)] = ((G__10702_11153[(0)]) * (G__10703_11154[(0)])));

(self__.buf[(1)] = ((G__10702_11153[(1)]) * (G__10703_11154[(1)])));

(self__.buf[(2)] = ((G__10702_11153[(2)]) * (G__10703_11154[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10702_11153[(0)]) * v));

(self__.buf[(1)] = ((G__10702_11153[(1)]) * v));

(self__.buf[(2)] = ((G__10702_11153[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10702_11153[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10702_11153[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10702_11153[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10716_11155 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10717_11156 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10718_11157 = ((!(G__10716_11155))?typeof v1 === 'number':null);
var G__10719_11158 = ((!(G__10717_11156))?typeof v2 === 'number':null);
var G__10704_11159 = self__.buf;
var G__10705_11160 = ((G__10716_11155)?v1.buf:null);
var G__10706_11161 = ((G__10717_11156)?v2.buf:null);
var G__10707_11162 = (G__10704_11159[(0)]);
var G__10708_11163 = (G__10704_11159[(1)]);
var G__10709_11164 = (G__10704_11159[(2)]);
var G__10710_11165 = ((G__10716_11155)?(G__10705_11160[(0)]):(cljs.core.truth_(G__10718_11157)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10711_11166 = ((G__10716_11155)?(G__10705_11160[(1)]):(cljs.core.truth_(G__10718_11157)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10712_11167 = ((G__10716_11155)?(G__10705_11160[(2)]):(cljs.core.truth_(G__10718_11157)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10713_11168 = ((G__10717_11156)?(G__10706_11161[(0)]):(cljs.core.truth_(G__10719_11158)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10714_11169 = ((G__10717_11156)?(G__10706_11161[(1)]):(cljs.core.truth_(G__10719_11158)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10715_11170 = ((G__10717_11156)?(G__10706_11161[(2)]):(cljs.core.truth_(G__10719_11158)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10707_11162 * G__10710_11165) * G__10713_11168));

(self__.buf[(1)] = ((G__10708_11163 * G__10711_11166) * G__10714_11169));

(self__.buf[(2)] = ((G__10709_11164 * G__10712_11167) * G__10715_11170));

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
var G__10732_11171 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10733_11172 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10734_11173 = ((!(G__10732_11171))?typeof a === 'number':null);
var G__10735_11174 = ((!(G__10733_11172))?typeof b === 'number':null);
var G__10720_11175 = self__.buf;
var G__10721_11176 = ((G__10732_11171)?a.buf:null);
var G__10722_11177 = ((G__10733_11172)?b.buf:null);
var G__10723_11178 = (G__10720_11175[(0)]);
var G__10724_11179 = (G__10720_11175[(1)]);
var G__10725_11180 = (G__10720_11175[(2)]);
var G__10726_11181 = ((G__10732_11171)?(G__10721_11176[(0)]):(cljs.core.truth_(G__10734_11173)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10727_11182 = ((G__10732_11171)?(G__10721_11176[(1)]):(cljs.core.truth_(G__10734_11173)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10728_11183 = ((G__10732_11171)?(G__10721_11176[(2)]):(cljs.core.truth_(G__10734_11173)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10729_11184 = ((G__10733_11172)?(G__10722_11177[(0)]):(cljs.core.truth_(G__10735_11174)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10730_11185 = ((G__10733_11172)?(G__10722_11177[(1)]):(cljs.core.truth_(G__10735_11174)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10731_11186 = ((G__10733_11172)?(G__10722_11177[(2)]):(cljs.core.truth_(G__10735_11174)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10723_11178 - G__10726_11181) * G__10729_11184));

(self__.buf[(1)] = ((G__10724_11179 - G__10727_11182) * G__10730_11185));

(self__.buf[(2)] = ((G__10725_11180 - G__10728_11183) * G__10731_11186));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__10748_11187 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10749_11188 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10750_11189 = ((!(G__10748_11187))?typeof a === 'number':null);
var G__10751_11190 = ((!(G__10749_11188))?typeof b === 'number':null);
var G__10736_11191 = self__.buf;
var G__10737_11192 = ((G__10748_11187)?a.buf:null);
var G__10738_11193 = ((G__10749_11188)?b.buf:null);
var G__10739_11194 = (G__10736_11191[(0)]);
var G__10740_11195 = (G__10736_11191[(1)]);
var G__10741_11196 = (G__10736_11191[(2)]);
var G__10742_11197 = ((G__10748_11187)?(G__10737_11192[(0)]):(cljs.core.truth_(G__10750_11189)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10743_11198 = ((G__10748_11187)?(G__10737_11192[(1)]):(cljs.core.truth_(G__10750_11189)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10744_11199 = ((G__10748_11187)?(G__10737_11192[(2)]):(cljs.core.truth_(G__10750_11189)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10745_11200 = ((G__10749_11188)?(G__10738_11193[(0)]):(cljs.core.truth_(G__10751_11190)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10746_11201 = ((G__10749_11188)?(G__10738_11193[(1)]):(cljs.core.truth_(G__10751_11190)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10747_11202 = ((G__10749_11188)?(G__10738_11193[(2)]):(cljs.core.truth_(G__10751_11190)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10739_11194 * G__10742_11197) - G__10745_11200));

(self__.buf[(1)] = ((G__10740_11195 * G__10743_11198) - G__10746_11201));

(self__.buf[(2)] = ((G__10741_11196 * G__10744_11199) - G__10747_11202));

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
var G__10764_11203 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10765_11204 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10766_11205 = ((!(G__10764_11203))?typeof a === 'number':null);
var G__10767_11206 = ((!(G__10765_11204))?typeof b === 'number':null);
var G__10752_11207 = self__.buf;
var G__10753_11208 = ((G__10764_11203)?a.buf:null);
var G__10754_11209 = ((G__10765_11204)?b.buf:null);
var G__10755_11210 = (G__10752_11207[(0)]);
var G__10756_11211 = (G__10752_11207[(1)]);
var G__10757_11212 = (G__10752_11207[(2)]);
var G__10758_11213 = ((G__10764_11203)?(G__10753_11208[(0)]):(cljs.core.truth_(G__10766_11205)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__10759_11214 = ((G__10764_11203)?(G__10753_11208[(1)]):(cljs.core.truth_(G__10766_11205)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__10760_11215 = ((G__10764_11203)?(G__10753_11208[(2)]):(cljs.core.truth_(G__10766_11205)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__10761_11216 = ((G__10765_11204)?(G__10754_11209[(0)]):(cljs.core.truth_(G__10767_11206)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10762_11217 = ((G__10765_11204)?(G__10754_11209[(1)]):(cljs.core.truth_(G__10767_11206)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10763_11218 = ((G__10765_11204)?(G__10754_11209[(2)]):(cljs.core.truth_(G__10767_11206)?b:cljs.core.nth.call(null,b,(2),0.0)));
(self__.buf[(0)] = ((G__10755_11210 * G__10758_11213) + G__10761_11216));

(self__.buf[(1)] = ((G__10756_11211 * G__10759_11214) + G__10762_11217));

(self__.buf[(2)] = ((G__10757_11212 * G__10760_11215) + G__10763_11218));

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
var G__10768_11219 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10769_11220 = v.buf;
(self__.buf[(0)] = ((G__10768_11219[(0)]) / (G__10769_11220[(0)])));

(self__.buf[(1)] = ((G__10768_11219[(1)]) / (G__10769_11220[(1)])));

(self__.buf[(2)] = ((G__10768_11219[(2)]) / (G__10769_11220[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10768_11219[(0)]) / v));

(self__.buf[(1)] = ((G__10768_11219[(1)]) / v));

(self__.buf[(2)] = ((G__10768_11219[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10768_11219[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10768_11219[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10768_11219[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10782_11221 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10783_11222 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10784_11223 = ((!(G__10782_11221))?typeof v1 === 'number':null);
var G__10785_11224 = ((!(G__10783_11222))?typeof v2 === 'number':null);
var G__10770_11225 = self__.buf;
var G__10771_11226 = ((G__10782_11221)?v1.buf:null);
var G__10772_11227 = ((G__10783_11222)?v2.buf:null);
var G__10773_11228 = (G__10770_11225[(0)]);
var G__10774_11229 = (G__10770_11225[(1)]);
var G__10775_11230 = (G__10770_11225[(2)]);
var G__10776_11231 = ((G__10782_11221)?(G__10771_11226[(0)]):(cljs.core.truth_(G__10784_11223)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10777_11232 = ((G__10782_11221)?(G__10771_11226[(1)]):(cljs.core.truth_(G__10784_11223)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10778_11233 = ((G__10782_11221)?(G__10771_11226[(2)]):(cljs.core.truth_(G__10784_11223)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10779_11234 = ((G__10783_11222)?(G__10772_11227[(0)]):(cljs.core.truth_(G__10785_11224)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10780_11235 = ((G__10783_11222)?(G__10772_11227[(1)]):(cljs.core.truth_(G__10785_11224)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10781_11236 = ((G__10783_11222)?(G__10772_11227[(2)]):(cljs.core.truth_(G__10785_11224)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10773_11228 / G__10776_11231) / G__10779_11234));

(self__.buf[(1)] = ((G__10774_11229 / G__10777_11232) / G__10780_11235));

(self__.buf[(2)] = ((G__10775_11230 / G__10778_11233) / G__10781_11236));

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
var G__10786_11237 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10787_11238 = v.buf;
(self__.buf[(0)] = ((G__10786_11237[(0)]) + (G__10787_11238[(0)])));

(self__.buf[(1)] = ((G__10786_11237[(1)]) + (G__10787_11238[(1)])));

(self__.buf[(2)] = ((G__10786_11237[(2)]) + (G__10787_11238[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__10786_11237[(0)]) + v));

(self__.buf[(1)] = ((G__10786_11237[(1)]) + v));

(self__.buf[(2)] = ((G__10786_11237[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__10786_11237[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(self__.buf[(1)] = ((G__10786_11237[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(self__.buf[(2)] = ((G__10786_11237[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__10800_11239 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__10801_11240 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10802_11241 = ((!(G__10800_11239))?typeof v1 === 'number':null);
var G__10803_11242 = ((!(G__10801_11240))?typeof v2 === 'number':null);
var G__10788_11243 = self__.buf;
var G__10789_11244 = ((G__10800_11239)?v1.buf:null);
var G__10790_11245 = ((G__10801_11240)?v2.buf:null);
var G__10791_11246 = (G__10788_11243[(0)]);
var G__10792_11247 = (G__10788_11243[(1)]);
var G__10793_11248 = (G__10788_11243[(2)]);
var G__10794_11249 = ((G__10800_11239)?(G__10789_11244[(0)]):(cljs.core.truth_(G__10802_11241)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__10795_11250 = ((G__10800_11239)?(G__10789_11244[(1)]):(cljs.core.truth_(G__10802_11241)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__10796_11251 = ((G__10800_11239)?(G__10789_11244[(2)]):(cljs.core.truth_(G__10802_11241)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__10797_11252 = ((G__10801_11240)?(G__10790_11245[(0)]):(cljs.core.truth_(G__10803_11242)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10798_11253 = ((G__10801_11240)?(G__10790_11245[(1)]):(cljs.core.truth_(G__10803_11242)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10799_11254 = ((G__10801_11240)?(G__10790_11245[(2)]):(cljs.core.truth_(G__10803_11242)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(self__.buf[(0)] = ((G__10791_11246 + G__10794_11249) + G__10797_11252));

(self__.buf[(1)] = ((G__10792_11247 + G__10795_11250) + G__10798_11253));

(self__.buf[(2)] = ((G__10793_11248 + G__10796_11251) + G__10799_11254));

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
var G__10816_11255 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10817_11256 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10818_11257 = ((!(G__10816_11255))?typeof a === 'number':null);
var G__10819_11258 = ((!(G__10817_11256))?typeof b === 'number':null);
var G__10804_11259 = self__.buf;
var G__10805_11260 = ((G__10816_11255)?a.buf:null);
var G__10806_11261 = ((G__10817_11256)?b.buf:null);
var G__10807_11262 = (G__10804_11259[(0)]);
var G__10808_11263 = (G__10804_11259[(1)]);
var G__10809_11264 = (G__10804_11259[(2)]);
var G__10810_11265 = ((G__10816_11255)?(G__10805_11260[(0)]):(cljs.core.truth_(G__10818_11257)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10811_11266 = ((G__10816_11255)?(G__10805_11260[(1)]):(cljs.core.truth_(G__10818_11257)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10812_11267 = ((G__10816_11255)?(G__10805_11260[(2)]):(cljs.core.truth_(G__10818_11257)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10813_11268 = ((G__10817_11256)?(G__10806_11261[(0)]):(cljs.core.truth_(G__10819_11258)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10814_11269 = ((G__10817_11256)?(G__10806_11261[(1)]):(cljs.core.truth_(G__10819_11258)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10815_11270 = ((G__10817_11256)?(G__10806_11261[(2)]):(cljs.core.truth_(G__10819_11258)?b:cljs.core.nth.call(null,b,(2),1.0)));
(self__.buf[(0)] = ((G__10807_11262 + G__10810_11265) * G__10813_11268));

(self__.buf[(1)] = ((G__10808_11263 + G__10811_11266) * G__10814_11269));

(self__.buf[(2)] = ((G__10809_11264 + G__10812_11267) * G__10815_11270));

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
var G__10820_11271 = self__.buf;
var G__10822_11272 = (G__10820_11271[(0)]);
var G__10823_11273 = (G__10820_11271[(1)]);
var G__10824_11274 = (G__10820_11271[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10821_11275 = v.buf;
var G__10825_11276 = (G__10821_11275[(0)]);
var G__10826_11277 = (G__10821_11275[(1)]);
var G__10827_11278 = (G__10821_11275[(2)]);
(b[(0)] = ((G__10823_11273 * G__10827_11278) - (G__10826_11277 * G__10824_11274)));

(b[(1)] = ((G__10824_11274 * G__10825_11276) - (G__10827_11278 * G__10822_11272)));

(b[(2)] = ((G__10822_11272 * G__10826_11277) - (G__10825_11276 * G__10823_11273)));
} else {
var G__10825_11279 = cljs.core.nth.call(null,v,(0),0.0);
var G__10826_11280 = cljs.core.nth.call(null,v,(1),0.0);
var G__10827_11281 = cljs.core.nth.call(null,v,(2),0.0);
(b[(0)] = ((G__10823_11273 * G__10827_11281) - (G__10826_11280 * G__10824_11274)));

(b[(1)] = ((G__10824_11274 * G__10825_11279) - (G__10827_11281 * G__10822_11272)));

(b[(2)] = ((G__10822_11272 * G__10826_11280) - (G__10825_11279 * G__10823_11273)));
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
var G__10844 = self__.buf;
var G__10846 = (G__10844[(0)]);
var G__10847 = (G__10844[(1)]);
var G__10848 = (G__10844[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10845 = v.buf;
var G__10849 = (G__10845[(0)]);
var G__10850 = (G__10845[(1)]);
var G__10851 = (G__10845[(2)]);
var d = ((((G__10846 * G__10849) + (G__10847 * G__10850)) + (G__10848 * G__10851)) * 2.0);
(b[(0)] = ((G__10849 * d) - G__10846));

(b[(1)] = ((G__10850 * d) - G__10847));

(b[(2)] = ((G__10851 * d) - G__10848));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__10849 = cljs.core.nth.call(null,v,(0),0.0);
var G__10850 = cljs.core.nth.call(null,v,(1),0.0);
var G__10851 = cljs.core.nth.call(null,v,(2),0.0);
var d = ((((G__10846 * G__10849) + (G__10847 * G__10850)) + (G__10848 * G__10851)) * 2.0);
(b[(0)] = ((G__10849 * d) - G__10846));

(b[(1)] = ((G__10850 * d) - G__10847));

(b[(2)] = ((G__10851 * d) - G__10848));

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
var G__10852 = self__.buf;
var G__10854 = (G__10852[(0)]);
var G__10855 = (G__10852[(1)]);
var G__10856 = (G__10852[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10853 = v.buf;
var G__10857 = (G__10853[(0)]);
var G__10858 = (G__10853[(1)]);
var G__10859 = (G__10853[(2)]);
var dx = (G__10854 - G__10857);
var dy = (G__10855 - G__10858);
var dz = (G__10856 - G__10859);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__10857 = cljs.core.nth.call(null,v,(0),0.0);
var G__10858 = cljs.core.nth.call(null,v,(1),0.0);
var G__10859 = cljs.core.nth.call(null,v,(2),0.0);
var dx = (G__10854 - G__10857);
var dy = (G__10855 - G__10858);
var dz = (G__10856 - G__10859);
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
var dest__10015__auto__ = (new Float32Array((3)));
var G__10860_11282 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10861_11283 = v.buf;
(dest__10015__auto__[(0)] = ((G__10860_11282[(0)]) * (G__10861_11283[(0)])));

(dest__10015__auto__[(1)] = ((G__10860_11282[(1)]) * (G__10861_11283[(1)])));

(dest__10015__auto__[(2)] = ((G__10860_11282[(2)]) * (G__10861_11283[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__10860_11282[(0)]) * v));

(dest__10015__auto__[(1)] = ((G__10860_11282[(1)]) * v));

(dest__10015__auto__[(2)] = ((G__10860_11282[(2)]) * v));
} else {
(dest__10015__auto__[(0)] = ((G__10860_11282[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__10860_11282[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__10860_11282[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
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
var G__10862 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10863 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10862[(0)]),(G__10863[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10862[(1)]),(G__10863[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10862[(2)]),(G__10863[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10862[(0)]),cljs.core.nth.call(null,v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,(G__10862[(1)]),cljs.core.nth.call(null,v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.call(null,(G__10862[(2)]),cljs.core.nth.call(null,v,(2),0.0),eps);
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
var G__10864 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10865 = v.buf;
return ((((G__10864[(0)]) * (G__10865[(0)])) + ((G__10864[(1)]) * (G__10865[(1)]))) + ((G__10864[(2)]) * (G__10865[(2)])));
} else {
return ((((G__10864[(0)]) * cljs.core.nth.call(null,v,(0),0.0)) + ((G__10864[(1)]) * cljs.core.nth.call(null,v,(1),0.0))) + ((G__10864[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
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
var dest__10015__auto__ = (new Float32Array((3)));
var G__10866_11284 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10867_11285 = v.buf;
(dest__10015__auto__[(0)] = ((G__10866_11284[(0)]) + (G__10867_11285[(0)])));

(dest__10015__auto__[(1)] = ((G__10866_11284[(1)]) + (G__10867_11285[(1)])));

(dest__10015__auto__[(2)] = ((G__10866_11284[(2)]) + (G__10867_11285[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__10866_11284[(0)]) + v));

(dest__10015__auto__[(1)] = ((G__10866_11284[(1)]) + v));

(dest__10015__auto__[(2)] = ((G__10866_11284[(2)]) + v));
} else {
(dest__10015__auto__[(0)] = ((G__10866_11284[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__10866_11284[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__10866_11284[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
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
var G__10868_11286 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10869_11287 = v.buf;
(b[(0)] = (((G__10868_11286[(0)]) + (G__10869_11287[(0)])) * 0.5));

(b[(1)] = (((G__10868_11286[(1)]) + (G__10869_11287[(1)])) * 0.5));

(b[(2)] = (((G__10868_11286[(2)]) + (G__10869_11287[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__10868_11286[(0)]) + v) * 0.5));

(b[(1)] = (((G__10868_11286[(1)]) + v) * 0.5));

(b[(2)] = (((G__10868_11286[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__10868_11286[(0)]) + cljs.core.nth.call(null,v,(0),0.0)) * 0.5));

(b[(1)] = (((G__10868_11286[(1)]) + cljs.core.nth.call(null,v,(1),0.0)) * 0.5));

(b[(2)] = (((G__10868_11286[(2)]) + cljs.core.nth.call(null,v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10882_11288 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10883_11289 = (t instanceof thi.ng.geom.vector.Vec3);
var G__10884_11290 = ((!(G__10882_11288))?typeof v === 'number':null);
var G__10885_11291 = ((!(G__10883_11289))?typeof t === 'number':null);
var G__10870_11292 = self__.buf;
var G__10871_11293 = ((G__10882_11288)?v.buf:null);
var G__10872_11294 = ((G__10883_11289)?t.buf:null);
var G__10873_11295 = (G__10870_11292[(0)]);
var G__10874_11296 = (G__10870_11292[(1)]);
var G__10875_11297 = (G__10870_11292[(2)]);
var G__10876_11298 = ((G__10882_11288)?(G__10871_11293[(0)]):(cljs.core.truth_(G__10884_11290)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10877_11299 = ((G__10882_11288)?(G__10871_11293[(1)]):(cljs.core.truth_(G__10884_11290)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10878_11300 = ((G__10882_11288)?(G__10871_11293[(2)]):(cljs.core.truth_(G__10884_11290)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10879_11301 = ((G__10883_11289)?(G__10872_11294[(0)]):(cljs.core.truth_(G__10885_11291)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10880_11302 = ((G__10883_11289)?(G__10872_11294[(1)]):(cljs.core.truth_(G__10885_11291)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__10881_11303 = ((G__10883_11289)?(G__10872_11294[(2)]):(cljs.core.truth_(G__10885_11291)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = (((G__10876_11298 - G__10873_11295) * G__10879_11301) + G__10873_11295));

(b[(1)] = (((G__10877_11299 - G__10874_11296) * G__10880_11302) + G__10874_11296));

(b[(2)] = (((G__10878_11300 - G__10875_11297) * G__10881_11303) + G__10875_11297));

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
var G__10898_11304 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10899_11305 = (c instanceof thi.ng.geom.vector.Vec3);
var G__10900_11306 = ((!(G__10898_11304))?typeof b === 'number':null);
var G__10901_11307 = ((!(G__10899_11305))?typeof c === 'number':null);
var G__10886_11308 = self__.buf;
var G__10887_11309 = ((G__10898_11304)?b.buf:null);
var G__10888_11310 = ((G__10899_11305)?c.buf:null);
var G__10889_11311 = (G__10886_11308[(0)]);
var G__10890_11312 = (G__10886_11308[(1)]);
var G__10891_11313 = (G__10886_11308[(2)]);
var G__10892_11314 = ((G__10898_11304)?(G__10887_11309[(0)]):(cljs.core.truth_(G__10900_11306)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__10893_11315 = ((G__10898_11304)?(G__10887_11309[(1)]):(cljs.core.truth_(G__10900_11306)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__10894_11316 = ((G__10898_11304)?(G__10887_11309[(2)]):(cljs.core.truth_(G__10900_11306)?b:cljs.core.nth.call(null,b,(2),0.0)));
var G__10895_11317 = ((G__10899_11305)?(G__10888_11310[(0)]):(cljs.core.truth_(G__10901_11307)?c:cljs.core.nth.call(null,c,(0),0.0)));
var G__10896_11318 = ((G__10899_11305)?(G__10888_11310[(1)]):(cljs.core.truth_(G__10901_11307)?c:cljs.core.nth.call(null,c,(1),0.0)));
var G__10897_11319 = ((G__10899_11305)?(G__10888_11310[(2)]):(cljs.core.truth_(G__10901_11307)?c:cljs.core.nth.call(null,c,(2),0.0)));
var x1_11320 = (((G__10892_11314 - G__10889_11311) * u) + G__10889_11311);
var y1_11321 = (((G__10893_11315 - G__10890_11312) * u) + G__10890_11312);
var z1_11322 = (((G__10894_11316 - G__10891_11313) * u) + G__10891_11313);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__10895_11317) * u) + G__10895_11317) - x1_11320) * v) + x1_11320));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__10896_11318) * u) + G__10896_11318) - y1_11321) * v) + y1_11321));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__10897_11319) * u) + G__10897_11319) - z1_11322) * v) + z1_11322));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10914_11323 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10915_11324 = (t instanceof thi.ng.geom.vector.Vec3);
var G__10916_11325 = ((!(G__10914_11323))?typeof v === 'number':null);
var G__10917_11326 = ((!(G__10915_11324))?typeof t === 'number':null);
var G__10902_11327 = self__.buf;
var G__10903_11328 = ((G__10914_11323)?v.buf:null);
var G__10904_11329 = ((G__10915_11324)?t.buf:null);
var G__10905_11330 = (G__10902_11327[(0)]);
var G__10906_11331 = (G__10902_11327[(1)]);
var G__10907_11332 = (G__10902_11327[(2)]);
var G__10908_11333 = ((G__10914_11323)?(G__10903_11328[(0)]):(cljs.core.truth_(G__10916_11325)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10909_11334 = ((G__10914_11323)?(G__10903_11328[(1)]):(cljs.core.truth_(G__10916_11325)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10910_11335 = ((G__10914_11323)?(G__10903_11328[(2)]):(cljs.core.truth_(G__10916_11325)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10911_11336 = ((G__10915_11324)?(G__10904_11329[(0)]):(cljs.core.truth_(G__10917_11326)?t:cljs.core.nth.call(null,t,(0),0.0)));
var G__10912_11337 = ((G__10915_11324)?(G__10904_11329[(1)]):(cljs.core.truth_(G__10917_11326)?t:cljs.core.nth.call(null,t,(1),0.0)));
var G__10913_11338 = ((G__10915_11324)?(G__10904_11329[(2)]):(cljs.core.truth_(G__10917_11326)?t:cljs.core.nth.call(null,t,(2),0.0)));
(b[(0)] = f.call(null,G__10905_11330,G__10908_11333,G__10911_11336));

(b[(1)] = f.call(null,G__10906_11331,G__10909_11334,G__10912_11337));

(b[(2)] = f.call(null,G__10907_11332,G__10910_11335,G__10913_11338));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10918_11339 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__10919_11340 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,(G__10919_11340[(0)]),(G__10918_11339[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,(G__10919_11340[(1)]),(G__10918_11339[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,(G__10919_11340[(2)]),(G__10918_11339[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10918_11339[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10918_11339[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,e,(G__10918_11339[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(0),0.0),(G__10918_11339[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(1),0.0),(G__10918_11339[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_.call(null,cljs.core.nth.call(null,e,(2),0.0),(G__10918_11339[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__10932_11341 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__10933_11342 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__10934_11343 = ((!(G__10932_11341))?typeof e1 === 'number':null);
var G__10935_11344 = ((!(G__10933_11342))?typeof e2 === 'number':null);
var G__10920_11345 = self__.buf;
var G__10921_11346 = ((G__10932_11341)?e1.buf:null);
var G__10922_11347 = ((G__10933_11342)?e2.buf:null);
var G__10923_11348 = (G__10920_11345[(0)]);
var G__10924_11349 = (G__10920_11345[(1)]);
var G__10925_11350 = (G__10920_11345[(2)]);
var G__10926_11351 = ((G__10932_11341)?(G__10921_11346[(0)]):(cljs.core.truth_(G__10934_11343)?e1:cljs.core.nth.call(null,e1,(0),0.0)));
var G__10927_11352 = ((G__10932_11341)?(G__10921_11346[(1)]):(cljs.core.truth_(G__10934_11343)?e1:cljs.core.nth.call(null,e1,(1),0.0)));
var G__10928_11353 = ((G__10932_11341)?(G__10921_11346[(2)]):(cljs.core.truth_(G__10934_11343)?e1:cljs.core.nth.call(null,e1,(2),0.0)));
var G__10929_11354 = ((G__10933_11342)?(G__10922_11347[(0)]):(cljs.core.truth_(G__10935_11344)?e2:cljs.core.nth.call(null,e2,(0),0.0)));
var G__10930_11355 = ((G__10933_11342)?(G__10922_11347[(1)]):(cljs.core.truth_(G__10935_11344)?e2:cljs.core.nth.call(null,e2,(1),0.0)));
var G__10931_11356 = ((G__10933_11342)?(G__10922_11347[(2)]):(cljs.core.truth_(G__10935_11344)?e2:cljs.core.nth.call(null,e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10926_11351,G__10929_11354,G__10923_11348));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10927_11352,G__10930_11355,G__10924_11349));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_.call(null,G__10928_11353,G__10931_11356,G__10925_11350));

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
var dest__10015__auto__ = (new Float32Array((3)));
var G__10936_11357 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10937_11358 = v.buf;
(dest__10015__auto__[(0)] = (function (){var a__9307__auto__ = (G__10936_11357[(0)]);
var b__9308__auto__ = (G__10937_11358[(0)]);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9307__auto__ = (G__10936_11357[(1)]);
var b__9308__auto__ = (G__10937_11358[(1)]);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9307__auto__ = (G__10936_11357[(2)]);
var b__9308__auto__ = (G__10937_11358[(2)]);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = (function (){var a__9307__auto__ = (G__10936_11357[(0)]);
var b__9308__auto__ = v;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9307__auto__ = (G__10936_11357[(1)]);
var b__9308__auto__ = v;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9307__auto__ = (G__10936_11357[(2)]);
var b__9308__auto__ = v;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
} else {
(dest__10015__auto__[(0)] = (function (){var a__9307__auto__ = (G__10936_11357[(0)]);
var b__9308__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9307__auto__ = (G__10936_11357[(1)]);
var b__9308__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9307__auto__ = (G__10936_11357[(2)]);
var b__9308__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__10950_11359 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10951_11360 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10952_11361 = ((!(G__10950_11359))?typeof v === 'number':null);
var G__10953_11362 = ((!(G__10951_11360))?typeof v2 === 'number':null);
var G__10938_11363 = self__.buf;
var G__10939_11364 = ((G__10950_11359)?v.buf:null);
var G__10940_11365 = ((G__10951_11360)?v2.buf:null);
var G__10941_11366 = (G__10938_11363[(0)]);
var G__10942_11367 = (G__10938_11363[(1)]);
var G__10943_11368 = (G__10938_11363[(2)]);
var G__10944_11369 = ((G__10950_11359)?(G__10939_11364[(0)]):(cljs.core.truth_(G__10952_11361)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10945_11370 = ((G__10950_11359)?(G__10939_11364[(1)]):(cljs.core.truth_(G__10952_11361)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10946_11371 = ((G__10950_11359)?(G__10939_11364[(2)]):(cljs.core.truth_(G__10952_11361)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10947_11372 = ((G__10951_11360)?(G__10940_11365[(0)]):(cljs.core.truth_(G__10953_11362)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10948_11373 = ((G__10951_11360)?(G__10940_11365[(1)]):(cljs.core.truth_(G__10953_11362)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10949_11374 = ((G__10951_11360)?(G__10940_11365[(2)]):(cljs.core.truth_(G__10953_11362)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = (function (){var a__9307__auto__ = (function (){var a__9307__auto__ = G__10941_11366;
var b__9308__auto__ = G__10944_11369;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})();
var b__9308__auto__ = G__10947_11372;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10026__auto__[(1)] = (function (){var a__9307__auto__ = (function (){var a__9307__auto__ = G__10942_11367;
var b__9308__auto__ = G__10945_11370;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})();
var b__9308__auto__ = G__10948_11373;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

(dest__10026__auto__[(2)] = (function (){var a__9307__auto__ = (function (){var a__9307__auto__ = G__10943_11368;
var b__9308__auto__ = G__10946_11371;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})();
var b__9308__auto__ = G__10949_11374;
if((a__9307__auto__ <= b__9308__auto__)){
return a__9307__auto__;
} else {
return b__9308__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__10015__auto__ = (new Float32Array((3)));
var G__10954_11375 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10955_11376 = v.buf;
(dest__10015__auto__[(0)] = (function (){var a__9314__auto__ = (G__10954_11375[(0)]);
var b__9315__auto__ = (G__10955_11376[(0)]);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9314__auto__ = (G__10954_11375[(1)]);
var b__9315__auto__ = (G__10955_11376[(1)]);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9314__auto__ = (G__10954_11375[(2)]);
var b__9315__auto__ = (G__10955_11376[(2)]);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = (function (){var a__9314__auto__ = (G__10954_11375[(0)]);
var b__9315__auto__ = v;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9314__auto__ = (G__10954_11375[(1)]);
var b__9315__auto__ = v;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9314__auto__ = (G__10954_11375[(2)]);
var b__9315__auto__ = v;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
} else {
(dest__10015__auto__[(0)] = (function (){var a__9314__auto__ = (G__10954_11375[(0)]);
var b__9315__auto__ = cljs.core.nth.call(null,v,(0),0.0);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(1)] = (function (){var a__9314__auto__ = (G__10954_11375[(1)]);
var b__9315__auto__ = cljs.core.nth.call(null,v,(1),0.0);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10015__auto__[(2)] = (function (){var a__9314__auto__ = (G__10954_11375[(2)]);
var b__9315__auto__ = cljs.core.nth.call(null,v,(2),0.0);
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__10968_11377 = (v instanceof thi.ng.geom.vector.Vec3);
var G__10969_11378 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__10970_11379 = ((!(G__10968_11377))?typeof v === 'number':null);
var G__10971_11380 = ((!(G__10969_11378))?typeof v2 === 'number':null);
var G__10956_11381 = self__.buf;
var G__10957_11382 = ((G__10968_11377)?v.buf:null);
var G__10958_11383 = ((G__10969_11378)?v2.buf:null);
var G__10959_11384 = (G__10956_11381[(0)]);
var G__10960_11385 = (G__10956_11381[(1)]);
var G__10961_11386 = (G__10956_11381[(2)]);
var G__10962_11387 = ((G__10968_11377)?(G__10957_11382[(0)]):(cljs.core.truth_(G__10970_11379)?v:cljs.core.nth.call(null,v,(0),0.0)));
var G__10963_11388 = ((G__10968_11377)?(G__10957_11382[(1)]):(cljs.core.truth_(G__10970_11379)?v:cljs.core.nth.call(null,v,(1),0.0)));
var G__10964_11389 = ((G__10968_11377)?(G__10957_11382[(2)]):(cljs.core.truth_(G__10970_11379)?v:cljs.core.nth.call(null,v,(2),0.0)));
var G__10965_11390 = ((G__10969_11378)?(G__10958_11383[(0)]):(cljs.core.truth_(G__10971_11380)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__10966_11391 = ((G__10969_11378)?(G__10958_11383[(1)]):(cljs.core.truth_(G__10971_11380)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__10967_11392 = ((G__10969_11378)?(G__10958_11383[(2)]):(cljs.core.truth_(G__10971_11380)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = (function (){var a__9314__auto__ = (function (){var a__9314__auto__ = G__10959_11384;
var b__9315__auto__ = G__10962_11387;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})();
var b__9315__auto__ = G__10965_11390;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10026__auto__[(1)] = (function (){var a__9314__auto__ = (function (){var a__9314__auto__ = G__10960_11385;
var b__9315__auto__ = G__10963_11388;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})();
var b__9315__auto__ = G__10966_11391;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

(dest__10026__auto__[(2)] = (function (){var a__9314__auto__ = (function (){var a__9314__auto__ = G__10961_11386;
var b__9315__auto__ = G__10964_11389;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})();
var b__9315__auto__ = G__10967_11392;
if((a__9314__auto__ >= b__9315__auto__)){
return a__9314__auto__;
} else {
return b__9315__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10972 = self__.buf;
var G__10973 = (G__10972[(0)]);
var G__10974 = (G__10972[(1)]);
var G__10975 = (G__10972[(2)]);
(b[(0)] = G__10973);

(b[(1)] = ((G__10974 * c) - (G__10975 * s)));

(b[(2)] = ((G__10974 * s) + (G__10975 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10976 = self__.buf;
var G__10977 = (G__10976[(0)]);
var G__10978 = (G__10976[(1)]);
var G__10979 = (G__10976[(2)]);
(b[(0)] = ((G__10977 * c) + (G__10979 * s)));

(b[(1)] = G__10978);

(b[(2)] = ((G__10979 * c) - (G__10977 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__10980 = self__.buf;
var G__10981 = (G__10980[(0)]);
var G__10982 = (G__10980[(1)]);
var G__10983 = (G__10980[(2)]);
(b[(0)] = ((G__10981 * c) - (G__10982 * s)));

(b[(1)] = ((G__10981 * s) + (G__10982 * c)));

(b[(2)] = G__10983);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__10984 = self__.buf;
var G__10986 = (G__10984[(0)]);
var G__10987 = (G__10984[(1)]);
var G__10988 = (G__10984[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__10985 = v.buf;
var G__10989 = (G__10985[(0)]);
var G__10990 = (G__10985[(1)]);
var G__10991 = (G__10985[(2)]);
var ux_SINGLEQUOTE_ = (G__10989 * G__10986);
var uy_SINGLEQUOTE_ = (G__10989 * G__10987);
var uz_SINGLEQUOTE_ = (G__10989 * G__10988);
var vx_SINGLEQUOTE_ = (G__10990 * G__10986);
var vy_SINGLEQUOTE_ = (G__10990 * G__10987);
var vz_SINGLEQUOTE_ = (G__10990 * G__10988);
var wx_SINGLEQUOTE_ = (G__10991 * G__10986);
var wy_SINGLEQUOTE_ = (G__10991 * G__10987);
var wz_SINGLEQUOTE_ = (G__10991 * G__10988);
var vx2 = (G__10989 * G__10989);
var vy2 = (G__10990 * G__10990);
var vz2 = (G__10991 * G__10991);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10989) + ((((vy2 + vz2) * G__10986) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10989)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10990) + ((((vx2 + vz2) * G__10987) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10990)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10991) + ((((vx2 + vy2) * G__10988) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10991)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__10989 = cljs.core.nth.call(null,v,(0),0.0);
var G__10990 = cljs.core.nth.call(null,v,(1),0.0);
var G__10991 = cljs.core.nth.call(null,v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__10989 * G__10986);
var uy_SINGLEQUOTE_ = (G__10989 * G__10987);
var uz_SINGLEQUOTE_ = (G__10989 * G__10988);
var vx_SINGLEQUOTE_ = (G__10990 * G__10986);
var vy_SINGLEQUOTE_ = (G__10990 * G__10987);
var vz_SINGLEQUOTE_ = (G__10990 * G__10988);
var wx_SINGLEQUOTE_ = (G__10991 * G__10986);
var wy_SINGLEQUOTE_ = (G__10991 * G__10987);
var wz_SINGLEQUOTE_ = (G__10991 * G__10988);
var vx2 = (G__10989 * G__10989);
var vy2 = (G__10990 * G__10990);
var vz2 = (G__10991 * G__10991);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__10989) + ((((vy2 + vz2) * G__10986) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10989)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__10990) + ((((vx2 + vz2) * G__10987) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__10990)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__10991) + ((((vx2 + vy2) * G__10988) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__10991)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
var G__11393 = null;
var G__11393__2 = (function (self__,k){
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
var G__11393__3 = (function (self__,k,nf){
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
G__11393 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__11393__2.call(this,self__,k);
case 3:
return G__11393__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11393.cljs$core$IFn$_invoke$arity$2 = G__11393__2;
G__11393.cljs$core$IFn$_invoke$arity$3 = G__11393__3;
return G__11393;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args10683){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10683)));
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
var G__10992 = self__.buf;
var G__10993 = (G__10992[(0)]);
var G__10994 = (G__10992[(1)]);
var G__10995 = (G__10992[(2)]);
var l = Math.sqrt((((G__10993 * G__10993) + (G__10994 * G__10994)) + (G__10995 * G__10995)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__10993 / l));

(b[(1)] = (G__10994 / l));

(b[(2)] = (G__10995 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__10996 = self__.buf;
var G__10997 = (G__10996[(0)]);
var G__10998 = (G__10996[(1)]);
var G__10999 = (G__10996[(2)]);
var l = Math.sqrt((((G__10997 * G__10997) + (G__10998 * G__10998)) + (G__10999 * G__10999)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__10997 * l__$1));

(b[(1)] = (G__10998 * l__$1));

(b[(2)] = (G__10999 * l__$1));

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
var G__11000 = self__.buf;
var G__11001 = (G__11000[(0)]);
var G__11002 = (G__11000[(1)]);
var G__11003 = (G__11000[(2)]);
return Math.sqrt((((G__11001 * G__11001) + (G__11002 * G__11002)) + (G__11003 * G__11003)));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__11004 = self__.buf;
var G__11005 = (G__11004[(0)]);
var G__11006 = (G__11004[(1)]);
var G__11007 = (G__11004[(2)]);
return (((G__11005 * G__11005) + (G__11006 * G__11006)) + (G__11007 * G__11007));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11020_11394 = (a instanceof thi.ng.geom.vector.Vec3);
var G__11021_11395 = (b instanceof thi.ng.geom.vector.Vec3);
var G__11022_11396 = ((!(G__11020_11394))?typeof a === 'number':null);
var G__11023_11397 = ((!(G__11021_11395))?typeof b === 'number':null);
var G__11008_11398 = self__.buf;
var G__11009_11399 = ((G__11020_11394)?a.buf:null);
var G__11010_11400 = ((G__11021_11395)?b.buf:null);
var G__11011_11401 = (G__11008_11398[(0)]);
var G__11012_11402 = (G__11008_11398[(1)]);
var G__11013_11403 = (G__11008_11398[(2)]);
var G__11014_11404 = ((G__11020_11394)?(G__11009_11399[(0)]):(cljs.core.truth_(G__11022_11396)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__11015_11405 = ((G__11020_11394)?(G__11009_11399[(1)]):(cljs.core.truth_(G__11022_11396)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__11016_11406 = ((G__11020_11394)?(G__11009_11399[(2)]):(cljs.core.truth_(G__11022_11396)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__11017_11407 = ((G__11021_11395)?(G__11010_11400[(0)]):(cljs.core.truth_(G__11023_11397)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__11018_11408 = ((G__11021_11395)?(G__11010_11400[(1)]):(cljs.core.truth_(G__11023_11397)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__11019_11409 = ((G__11021_11395)?(G__11010_11400[(2)]):(cljs.core.truth_(G__11023_11397)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11011_11401 * G__11014_11404) - G__11017_11407));

(dest__10026__auto__[(1)] = ((G__11012_11402 * G__11015_11405) - G__11018_11408));

(dest__10026__auto__[(2)] = ((G__11013_11403 * G__11016_11406) - G__11019_11409));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__10015__auto__ = (new Float32Array((3)));
var G__11024_11410 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__11025_11411 = v.buf;
(dest__10015__auto__[(0)] = ((G__11024_11410[(0)]) * (G__11025_11411[(0)])));

(dest__10015__auto__[(1)] = ((G__11024_11410[(1)]) * (G__11025_11411[(1)])));

(dest__10015__auto__[(2)] = ((G__11024_11410[(2)]) * (G__11025_11411[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__11024_11410[(0)]) * v));

(dest__10015__auto__[(1)] = ((G__11024_11410[(1)]) * v));

(dest__10015__auto__[(2)] = ((G__11024_11410[(2)]) * v));
} else {
(dest__10015__auto__[(0)] = ((G__11024_11410[(0)]) * cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__11024_11410[(1)]) * cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__11024_11410[(2)]) * cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11038_11412 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__11039_11413 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__11040_11414 = ((!(G__11038_11412))?typeof v1 === 'number':null);
var G__11041_11415 = ((!(G__11039_11413))?typeof v2 === 'number':null);
var G__11026_11416 = self__.buf;
var G__11027_11417 = ((G__11038_11412)?v1.buf:null);
var G__11028_11418 = ((G__11039_11413)?v2.buf:null);
var G__11029_11419 = (G__11026_11416[(0)]);
var G__11030_11420 = (G__11026_11416[(1)]);
var G__11031_11421 = (G__11026_11416[(2)]);
var G__11032_11422 = ((G__11038_11412)?(G__11027_11417[(0)]):(cljs.core.truth_(G__11040_11414)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__11033_11423 = ((G__11038_11412)?(G__11027_11417[(1)]):(cljs.core.truth_(G__11040_11414)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__11034_11424 = ((G__11038_11412)?(G__11027_11417[(2)]):(cljs.core.truth_(G__11040_11414)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__11035_11425 = ((G__11039_11413)?(G__11028_11418[(0)]):(cljs.core.truth_(G__11041_11415)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11036_11426 = ((G__11039_11413)?(G__11028_11418[(1)]):(cljs.core.truth_(G__11041_11415)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11037_11427 = ((G__11039_11413)?(G__11028_11418[(2)]):(cljs.core.truth_(G__11041_11415)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11029_11419 * G__11032_11422) * G__11035_11425));

(dest__10026__auto__[(1)] = ((G__11030_11420 * G__11033_11423) * G__11036_11426));

(dest__10026__auto__[(2)] = ((G__11031_11421 * G__11034_11424) * G__11037_11427));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__11042 = self__.buf;
var dest__10004__auto__ = (new Float32Array((3)));
(dest__10004__auto__[(0)] = ((G__11042[(0)]) * x));

(dest__10004__auto__[(1)] = ((G__11042[(1)]) * y));

(dest__10004__auto__[(2)] = ((G__11042[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__10004__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9998__auto__ = (new Float32Array((3)));
var G__11043_11428 = self__.buf;
(dest__9998__auto__[(0)] = (- (G__11043_11428[(0)])));

(dest__9998__auto__[(1)] = (- (G__11043_11428[(1)])));

(dest__9998__auto__[(2)] = (- (G__11043_11428[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9998__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__10015__auto__ = (new Float32Array((3)));
var G__11044_11429 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__11045_11430 = v.buf;
(dest__10015__auto__[(0)] = ((G__11044_11429[(0)]) - (G__11045_11430[(0)])));

(dest__10015__auto__[(1)] = ((G__11044_11429[(1)]) - (G__11045_11430[(1)])));

(dest__10015__auto__[(2)] = ((G__11044_11429[(2)]) - (G__11045_11430[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__11044_11429[(0)]) - v));

(dest__10015__auto__[(1)] = ((G__11044_11429[(1)]) - v));

(dest__10015__auto__[(2)] = ((G__11044_11429[(2)]) - v));
} else {
(dest__10015__auto__[(0)] = ((G__11044_11429[(0)]) - cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__11044_11429[(1)]) - cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__11044_11429[(2)]) - cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11058_11431 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__11059_11432 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__11060_11433 = ((!(G__11058_11431))?typeof v1 === 'number':null);
var G__11061_11434 = ((!(G__11059_11432))?typeof v2 === 'number':null);
var G__11046_11435 = self__.buf;
var G__11047_11436 = ((G__11058_11431)?v1.buf:null);
var G__11048_11437 = ((G__11059_11432)?v2.buf:null);
var G__11049_11438 = (G__11046_11435[(0)]);
var G__11050_11439 = (G__11046_11435[(1)]);
var G__11051_11440 = (G__11046_11435[(2)]);
var G__11052_11441 = ((G__11058_11431)?(G__11047_11436[(0)]):(cljs.core.truth_(G__11060_11433)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__11053_11442 = ((G__11058_11431)?(G__11047_11436[(1)]):(cljs.core.truth_(G__11060_11433)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__11054_11443 = ((G__11058_11431)?(G__11047_11436[(2)]):(cljs.core.truth_(G__11060_11433)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__11055_11444 = ((G__11059_11432)?(G__11048_11437[(0)]):(cljs.core.truth_(G__11061_11434)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11056_11445 = ((G__11059_11432)?(G__11048_11437[(1)]):(cljs.core.truth_(G__11061_11434)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11057_11446 = ((G__11059_11432)?(G__11048_11437[(2)]):(cljs.core.truth_(G__11061_11434)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11049_11438 - G__11052_11441) - G__11055_11444));

(dest__10026__auto__[(1)] = ((G__11050_11439 - G__11053_11442) - G__11056_11445));

(dest__10026__auto__[(2)] = ((G__11051_11440 - G__11054_11443) - G__11057_11446));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__11062 = self__.buf;
var dest__10004__auto__ = (new Float32Array((3)));
(dest__10004__auto__[(0)] = ((G__11062[(0)]) - x));

(dest__10004__auto__[(1)] = ((G__11062[(1)]) - y));

(dest__10004__auto__[(2)] = ((G__11062[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__10004__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11075_11447 = (a instanceof thi.ng.geom.vector.Vec3);
var G__11076_11448 = (b instanceof thi.ng.geom.vector.Vec3);
var G__11077_11449 = ((!(G__11075_11447))?typeof a === 'number':null);
var G__11078_11450 = ((!(G__11076_11448))?typeof b === 'number':null);
var G__11063_11451 = self__.buf;
var G__11064_11452 = ((G__11075_11447)?a.buf:null);
var G__11065_11453 = ((G__11076_11448)?b.buf:null);
var G__11066_11454 = (G__11063_11451[(0)]);
var G__11067_11455 = (G__11063_11451[(1)]);
var G__11068_11456 = (G__11063_11451[(2)]);
var G__11069_11457 = ((G__11075_11447)?(G__11064_11452[(0)]):(cljs.core.truth_(G__11077_11449)?a:cljs.core.nth.call(null,a,(0),1.0)));
var G__11070_11458 = ((G__11075_11447)?(G__11064_11452[(1)]):(cljs.core.truth_(G__11077_11449)?a:cljs.core.nth.call(null,a,(1),1.0)));
var G__11071_11459 = ((G__11075_11447)?(G__11064_11452[(2)]):(cljs.core.truth_(G__11077_11449)?a:cljs.core.nth.call(null,a,(2),1.0)));
var G__11072_11460 = ((G__11076_11448)?(G__11065_11453[(0)]):(cljs.core.truth_(G__11078_11450)?b:cljs.core.nth.call(null,b,(0),0.0)));
var G__11073_11461 = ((G__11076_11448)?(G__11065_11453[(1)]):(cljs.core.truth_(G__11078_11450)?b:cljs.core.nth.call(null,b,(1),0.0)));
var G__11074_11462 = ((G__11076_11448)?(G__11065_11453[(2)]):(cljs.core.truth_(G__11078_11450)?b:cljs.core.nth.call(null,b,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11066_11454 * G__11069_11457) + G__11072_11460));

(dest__10026__auto__[(1)] = ((G__11067_11455 * G__11070_11458) + G__11073_11461));

(dest__10026__auto__[(2)] = ((G__11068_11456 * G__11071_11459) + G__11074_11462));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11091_11463 = (a instanceof thi.ng.geom.vector.Vec3);
var G__11092_11464 = (b instanceof thi.ng.geom.vector.Vec3);
var G__11093_11465 = ((!(G__11091_11463))?typeof a === 'number':null);
var G__11094_11466 = ((!(G__11092_11464))?typeof b === 'number':null);
var G__11079_11467 = self__.buf;
var G__11080_11468 = ((G__11091_11463)?a.buf:null);
var G__11081_11469 = ((G__11092_11464)?b.buf:null);
var G__11082_11470 = (G__11079_11467[(0)]);
var G__11083_11471 = (G__11079_11467[(1)]);
var G__11084_11472 = (G__11079_11467[(2)]);
var G__11085_11473 = ((G__11091_11463)?(G__11080_11468[(0)]):(cljs.core.truth_(G__11093_11465)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__11086_11474 = ((G__11091_11463)?(G__11080_11468[(1)]):(cljs.core.truth_(G__11093_11465)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__11087_11475 = ((G__11091_11463)?(G__11080_11468[(2)]):(cljs.core.truth_(G__11093_11465)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__11088_11476 = ((G__11092_11464)?(G__11081_11469[(0)]):(cljs.core.truth_(G__11094_11466)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__11089_11477 = ((G__11092_11464)?(G__11081_11469[(1)]):(cljs.core.truth_(G__11094_11466)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__11090_11478 = ((G__11092_11464)?(G__11081_11469[(2)]):(cljs.core.truth_(G__11094_11466)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__10026__auto__[(0)] = ((G__11082_11470 + G__11085_11473) * G__11088_11476));

(dest__10026__auto__[(1)] = ((G__11083_11471 + G__11086_11474) * G__11089_11477));

(dest__10026__auto__[(2)] = ((G__11084_11472 + G__11087_11475) * G__11090_11478));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9998__auto__ = (new Float32Array((3)));
var G__11095_11479 = self__.buf;
(dest__9998__auto__[(0)] = ((1) / (G__11095_11479[(0)])));

(dest__9998__auto__[(1)] = ((1) / (G__11095_11479[(1)])));

(dest__9998__auto__[(2)] = ((1) / (G__11095_11479[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9998__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__10015__auto__ = (new Float32Array((3)));
var G__11096_11480 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__11097_11481 = v.buf;
(dest__10015__auto__[(0)] = ((G__11096_11480[(0)]) / (G__11097_11481[(0)])));

(dest__10015__auto__[(1)] = ((G__11096_11480[(1)]) / (G__11097_11481[(1)])));

(dest__10015__auto__[(2)] = ((G__11096_11480[(2)]) / (G__11097_11481[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__11096_11480[(0)]) / v));

(dest__10015__auto__[(1)] = ((G__11096_11480[(1)]) / v));

(dest__10015__auto__[(2)] = ((G__11096_11480[(2)]) / v));
} else {
(dest__10015__auto__[(0)] = ((G__11096_11480[(0)]) / cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__11096_11480[(1)]) / cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__11096_11480[(2)]) / cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11110_11482 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__11111_11483 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__11112_11484 = ((!(G__11110_11482))?typeof v1 === 'number':null);
var G__11113_11485 = ((!(G__11111_11483))?typeof v2 === 'number':null);
var G__11098_11486 = self__.buf;
var G__11099_11487 = ((G__11110_11482)?v1.buf:null);
var G__11100_11488 = ((G__11111_11483)?v2.buf:null);
var G__11101_11489 = (G__11098_11486[(0)]);
var G__11102_11490 = (G__11098_11486[(1)]);
var G__11103_11491 = (G__11098_11486[(2)]);
var G__11104_11492 = ((G__11110_11482)?(G__11099_11487[(0)]):(cljs.core.truth_(G__11112_11484)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__11105_11493 = ((G__11110_11482)?(G__11099_11487[(1)]):(cljs.core.truth_(G__11112_11484)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__11106_11494 = ((G__11110_11482)?(G__11099_11487[(2)]):(cljs.core.truth_(G__11112_11484)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__11107_11495 = ((G__11111_11483)?(G__11100_11488[(0)]):(cljs.core.truth_(G__11113_11485)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11108_11496 = ((G__11111_11483)?(G__11100_11488[(1)]):(cljs.core.truth_(G__11113_11485)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11109_11497 = ((G__11111_11483)?(G__11100_11488[(2)]):(cljs.core.truth_(G__11113_11485)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11101_11489 / G__11104_11492) / G__11107_11495));

(dest__10026__auto__[(1)] = ((G__11102_11490 / G__11105_11493) / G__11108_11496));

(dest__10026__auto__[(2)] = ((G__11103_11491 / G__11106_11494) / G__11109_11497));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__11114 = self__.buf;
var dest__10004__auto__ = (new Float32Array((3)));
(dest__10004__auto__[(0)] = ((G__11114[(0)]) / x));

(dest__10004__auto__[(1)] = ((G__11114[(1)]) / y));

(dest__10004__auto__[(2)] = ((G__11114[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__10004__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__10015__auto__ = (new Float32Array((3)));
var G__11115_11498 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__11116_11499 = v.buf;
(dest__10015__auto__[(0)] = ((G__11115_11498[(0)]) + (G__11116_11499[(0)])));

(dest__10015__auto__[(1)] = ((G__11115_11498[(1)]) + (G__11116_11499[(1)])));

(dest__10015__auto__[(2)] = ((G__11115_11498[(2)]) + (G__11116_11499[(2)])));
} else {
if(typeof v === 'number'){
(dest__10015__auto__[(0)] = ((G__11115_11498[(0)]) + v));

(dest__10015__auto__[(1)] = ((G__11115_11498[(1)]) + v));

(dest__10015__auto__[(2)] = ((G__11115_11498[(2)]) + v));
} else {
(dest__10015__auto__[(0)] = ((G__11115_11498[(0)]) + cljs.core.nth.call(null,v,(0),0.0)));

(dest__10015__auto__[(1)] = ((G__11115_11498[(1)]) + cljs.core.nth.call(null,v,(1),0.0)));

(dest__10015__auto__[(2)] = ((G__11115_11498[(2)]) + cljs.core.nth.call(null,v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__10015__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__11129_11500 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__11130_11501 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__11131_11502 = ((!(G__11129_11500))?typeof v1 === 'number':null);
var G__11132_11503 = ((!(G__11130_11501))?typeof v2 === 'number':null);
var G__11117_11504 = self__.buf;
var G__11118_11505 = ((G__11129_11500)?v1.buf:null);
var G__11119_11506 = ((G__11130_11501)?v2.buf:null);
var G__11120_11507 = (G__11117_11504[(0)]);
var G__11121_11508 = (G__11117_11504[(1)]);
var G__11122_11509 = (G__11117_11504[(2)]);
var G__11123_11510 = ((G__11129_11500)?(G__11118_11505[(0)]):(cljs.core.truth_(G__11131_11502)?v1:cljs.core.nth.call(null,v1,(0),0.0)));
var G__11124_11511 = ((G__11129_11500)?(G__11118_11505[(1)]):(cljs.core.truth_(G__11131_11502)?v1:cljs.core.nth.call(null,v1,(1),0.0)));
var G__11125_11512 = ((G__11129_11500)?(G__11118_11505[(2)]):(cljs.core.truth_(G__11131_11502)?v1:cljs.core.nth.call(null,v1,(2),0.0)));
var G__11126_11513 = ((G__11130_11501)?(G__11119_11506[(0)]):(cljs.core.truth_(G__11132_11503)?v2:cljs.core.nth.call(null,v2,(0),0.0)));
var G__11127_11514 = ((G__11130_11501)?(G__11119_11506[(1)]):(cljs.core.truth_(G__11132_11503)?v2:cljs.core.nth.call(null,v2,(1),0.0)));
var G__11128_11515 = ((G__11130_11501)?(G__11119_11506[(2)]):(cljs.core.truth_(G__11132_11503)?v2:cljs.core.nth.call(null,v2,(2),0.0)));
(dest__10026__auto__[(0)] = ((G__11120_11507 + G__11123_11510) + G__11126_11513));

(dest__10026__auto__[(1)] = ((G__11121_11508 + G__11124_11511) + G__11127_11514));

(dest__10026__auto__[(2)] = ((G__11122_11509 + G__11125_11512) + G__11128_11515));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__11133 = self__.buf;
var dest__10004__auto__ = (new Float32Array((3)));
(dest__10004__auto__[(0)] = ((G__11133[(0)]) + x));

(dest__10004__auto__[(1)] = ((G__11133[(1)]) + y));

(dest__10004__auto__[(2)] = ((G__11133[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__10004__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__9998__auto__ = (new Float32Array((3)));
var G__11134_11516 = self__.buf;
(dest__9998__auto__[(0)] = thi.ng.math.core.abs_STAR_.call(null,(G__11134_11516[(0)])));

(dest__9998__auto__[(1)] = thi.ng.math.core.abs_STAR_.call(null,(G__11134_11516[(1)])));

(dest__9998__auto__[(2)] = thi.ng.math.core.abs_STAR_.call(null,(G__11134_11516[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__9998__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__10026__auto__ = (new Float32Array((3)));
var G__10840_11517 = (a instanceof thi.ng.geom.vector.Vec3);
var G__10841_11518 = (b instanceof thi.ng.geom.vector.Vec3);
var G__10842_11519 = ((!(G__10840_11517))?typeof a === 'number':null);
var G__10843_11520 = ((!(G__10841_11518))?typeof b === 'number':null);
var G__10828_11521 = self__.buf;
var G__10829_11522 = ((G__10840_11517)?a.buf:null);
var G__10830_11523 = ((G__10841_11518)?b.buf:null);
var G__10831_11524 = (G__10828_11521[(0)]);
var G__10832_11525 = (G__10828_11521[(1)]);
var G__10833_11526 = (G__10828_11521[(2)]);
var G__10834_11527 = ((G__10840_11517)?(G__10829_11522[(0)]):(cljs.core.truth_(G__10842_11519)?a:cljs.core.nth.call(null,a,(0),0.0)));
var G__10835_11528 = ((G__10840_11517)?(G__10829_11522[(1)]):(cljs.core.truth_(G__10842_11519)?a:cljs.core.nth.call(null,a,(1),0.0)));
var G__10836_11529 = ((G__10840_11517)?(G__10829_11522[(2)]):(cljs.core.truth_(G__10842_11519)?a:cljs.core.nth.call(null,a,(2),0.0)));
var G__10837_11530 = ((G__10841_11518)?(G__10830_11523[(0)]):(cljs.core.truth_(G__10843_11520)?b:cljs.core.nth.call(null,b,(0),1.0)));
var G__10838_11531 = ((G__10841_11518)?(G__10830_11523[(1)]):(cljs.core.truth_(G__10843_11520)?b:cljs.core.nth.call(null,b,(1),1.0)));
var G__10839_11532 = ((G__10841_11518)?(G__10830_11523[(2)]):(cljs.core.truth_(G__10843_11520)?b:cljs.core.nth.call(null,b,(2),1.0)));
(dest__10026__auto__[(0)] = ((G__10831_11524 - G__10834_11527) * G__10837_11530));

(dest__10026__auto__[(1)] = ((G__10832_11525 - G__10835_11528) * G__10838_11531));

(dest__10026__auto__[(2)] = ((G__10833_11526 - G__10836_11529) * G__10839_11532));

return (new thi.ng.geom.vector.Vec3(dest__10026__auto__,null,self__._meta));
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

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__11535){
var G__11533 = (((G__11535 instanceof thi.ng.geom.vector.Vec2))?G__11535.buf:G__11535.buf);
return (G__11533[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__11538){
var G__11536 = (((G__11538 instanceof thi.ng.geom.vector.Vec2))?G__11538.buf:G__11538.buf);
var G__11537 = (new Float32Array(2));
(G__11537[(0)] = (G__11536[(0)]));

(G__11537[(1)] = (G__11536[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11537,null,cljs.core.meta.call(null,G__11538)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__11541){
var G__11539 = (((G__11541 instanceof thi.ng.geom.vector.Vec2))?G__11541.buf:G__11541.buf);
var G__11540 = (new Float32Array(3));
(G__11540[(0)] = (G__11539[(0)]));

(G__11540[(1)] = (G__11539[(0)]));

(G__11540[(2)] = (G__11539[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11540,null,cljs.core.meta.call(null,G__11541)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__11544){
var G__11542 = (((G__11544 instanceof thi.ng.geom.vector.Vec2))?G__11544.buf:G__11544.buf);
var G__11543 = (new Float32Array(3));
(G__11543[(0)] = (G__11542[(0)]));

(G__11543[(1)] = (G__11542[(0)]));

(G__11543[(2)] = (G__11542[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11543,null,cljs.core.meta.call(null,G__11544)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__11547){
var G__11545 = (((G__11547 instanceof thi.ng.geom.vector.Vec2))?G__11547.buf:G__11547.buf);
var G__11546 = (new Float32Array(3));
(G__11546[(0)] = (G__11545[(0)]));

(G__11546[(1)] = (G__11545[(0)]));

(G__11546[(2)] = (G__11545[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11546,null,cljs.core.meta.call(null,G__11547)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__11550){
var G__11548 = (((G__11550 instanceof thi.ng.geom.vector.Vec2))?G__11550.buf:G__11550.buf);
var G__11549 = (new Float32Array(2));
(G__11549[(0)] = (G__11548[(0)]));

(G__11549[(1)] = (G__11548[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11549,null,cljs.core.meta.call(null,G__11550)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__11553){
var G__11551 = (((G__11553 instanceof thi.ng.geom.vector.Vec2))?G__11553.buf:G__11553.buf);
var G__11552 = (new Float32Array(3));
(G__11552[(0)] = (G__11551[(0)]));

(G__11552[(1)] = (G__11551[(1)]));

(G__11552[(2)] = (G__11551[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11552,null,cljs.core.meta.call(null,G__11553)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__11556){
var G__11554 = (((G__11556 instanceof thi.ng.geom.vector.Vec2))?G__11556.buf:G__11556.buf);
var G__11555 = (new Float32Array(3));
(G__11555[(0)] = (G__11554[(0)]));

(G__11555[(1)] = (G__11554[(1)]));

(G__11555[(2)] = (G__11554[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11555,null,cljs.core.meta.call(null,G__11556)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__11559){
var G__11557 = (((G__11559 instanceof thi.ng.geom.vector.Vec2))?G__11559.buf:G__11559.buf);
var G__11558 = (new Float32Array(3));
(G__11558[(0)] = (G__11557[(0)]));

(G__11558[(1)] = (G__11557[(1)]));

(G__11558[(2)] = (G__11557[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11558,null,cljs.core.meta.call(null,G__11559)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__11562){
var G__11560 = (((G__11562 instanceof thi.ng.geom.vector.Vec2))?G__11562.buf:G__11562.buf);
var G__11561 = (new Float32Array(2));
(G__11561[(0)] = (G__11560[(0)]));

(G__11561[(1)] = (G__11560[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11561,null,cljs.core.meta.call(null,G__11562)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__11565){
var G__11563 = (((G__11565 instanceof thi.ng.geom.vector.Vec2))?G__11565.buf:G__11565.buf);
var G__11564 = (new Float32Array(3));
(G__11564[(0)] = (G__11563[(0)]));

(G__11564[(1)] = (G__11563[(2)]));

(G__11564[(2)] = (G__11563[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11564,null,cljs.core.meta.call(null,G__11565)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__11568){
var G__11566 = (((G__11568 instanceof thi.ng.geom.vector.Vec2))?G__11568.buf:G__11568.buf);
var G__11567 = (new Float32Array(3));
(G__11567[(0)] = (G__11566[(0)]));

(G__11567[(1)] = (G__11566[(2)]));

(G__11567[(2)] = (G__11566[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11567,null,cljs.core.meta.call(null,G__11568)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__11571){
var G__11569 = (((G__11571 instanceof thi.ng.geom.vector.Vec2))?G__11571.buf:G__11571.buf);
var G__11570 = (new Float32Array(3));
(G__11570[(0)] = (G__11569[(0)]));

(G__11570[(1)] = (G__11569[(2)]));

(G__11570[(2)] = (G__11569[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11570,null,cljs.core.meta.call(null,G__11571)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__11574){
var G__11572 = (((G__11574 instanceof thi.ng.geom.vector.Vec2))?G__11574.buf:G__11574.buf);
return (G__11572[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__11577){
var G__11575 = (((G__11577 instanceof thi.ng.geom.vector.Vec2))?G__11577.buf:G__11577.buf);
var G__11576 = (new Float32Array(2));
(G__11576[(0)] = (G__11575[(1)]));

(G__11576[(1)] = (G__11575[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11576,null,cljs.core.meta.call(null,G__11577)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__11580){
var G__11578 = (((G__11580 instanceof thi.ng.geom.vector.Vec2))?G__11580.buf:G__11580.buf);
var G__11579 = (new Float32Array(3));
(G__11579[(0)] = (G__11578[(1)]));

(G__11579[(1)] = (G__11578[(0)]));

(G__11579[(2)] = (G__11578[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11579,null,cljs.core.meta.call(null,G__11580)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__11583){
var G__11581 = (((G__11583 instanceof thi.ng.geom.vector.Vec2))?G__11583.buf:G__11583.buf);
var G__11582 = (new Float32Array(3));
(G__11582[(0)] = (G__11581[(1)]));

(G__11582[(1)] = (G__11581[(0)]));

(G__11582[(2)] = (G__11581[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11582,null,cljs.core.meta.call(null,G__11583)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__11586){
var G__11584 = (((G__11586 instanceof thi.ng.geom.vector.Vec2))?G__11586.buf:G__11586.buf);
var G__11585 = (new Float32Array(3));
(G__11585[(0)] = (G__11584[(1)]));

(G__11585[(1)] = (G__11584[(0)]));

(G__11585[(2)] = (G__11584[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11585,null,cljs.core.meta.call(null,G__11586)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__11589){
var G__11587 = (((G__11589 instanceof thi.ng.geom.vector.Vec2))?G__11589.buf:G__11589.buf);
var G__11588 = (new Float32Array(2));
(G__11588[(0)] = (G__11587[(1)]));

(G__11588[(1)] = (G__11587[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11588,null,cljs.core.meta.call(null,G__11589)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__11592){
var G__11590 = (((G__11592 instanceof thi.ng.geom.vector.Vec2))?G__11592.buf:G__11592.buf);
var G__11591 = (new Float32Array(3));
(G__11591[(0)] = (G__11590[(1)]));

(G__11591[(1)] = (G__11590[(1)]));

(G__11591[(2)] = (G__11590[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11591,null,cljs.core.meta.call(null,G__11592)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__11595){
var G__11593 = (((G__11595 instanceof thi.ng.geom.vector.Vec2))?G__11595.buf:G__11595.buf);
var G__11594 = (new Float32Array(3));
(G__11594[(0)] = (G__11593[(1)]));

(G__11594[(1)] = (G__11593[(1)]));

(G__11594[(2)] = (G__11593[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11594,null,cljs.core.meta.call(null,G__11595)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__11598){
var G__11596 = (((G__11598 instanceof thi.ng.geom.vector.Vec2))?G__11598.buf:G__11598.buf);
var G__11597 = (new Float32Array(3));
(G__11597[(0)] = (G__11596[(1)]));

(G__11597[(1)] = (G__11596[(1)]));

(G__11597[(2)] = (G__11596[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11597,null,cljs.core.meta.call(null,G__11598)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__11601){
var G__11599 = (((G__11601 instanceof thi.ng.geom.vector.Vec2))?G__11601.buf:G__11601.buf);
var G__11600 = (new Float32Array(2));
(G__11600[(0)] = (G__11599[(1)]));

(G__11600[(1)] = (G__11599[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11600,null,cljs.core.meta.call(null,G__11601)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__11604){
var G__11602 = (((G__11604 instanceof thi.ng.geom.vector.Vec2))?G__11604.buf:G__11604.buf);
var G__11603 = (new Float32Array(3));
(G__11603[(0)] = (G__11602[(1)]));

(G__11603[(1)] = (G__11602[(2)]));

(G__11603[(2)] = (G__11602[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11603,null,cljs.core.meta.call(null,G__11604)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__11607){
var G__11605 = (((G__11607 instanceof thi.ng.geom.vector.Vec2))?G__11607.buf:G__11607.buf);
var G__11606 = (new Float32Array(3));
(G__11606[(0)] = (G__11605[(1)]));

(G__11606[(1)] = (G__11605[(2)]));

(G__11606[(2)] = (G__11605[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11606,null,cljs.core.meta.call(null,G__11607)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__11610){
var G__11608 = (((G__11610 instanceof thi.ng.geom.vector.Vec2))?G__11610.buf:G__11610.buf);
var G__11609 = (new Float32Array(3));
(G__11609[(0)] = (G__11608[(1)]));

(G__11609[(1)] = (G__11608[(2)]));

(G__11609[(2)] = (G__11608[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11609,null,cljs.core.meta.call(null,G__11610)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__11613){
var G__11611 = (((G__11613 instanceof thi.ng.geom.vector.Vec2))?G__11613.buf:G__11613.buf);
return (G__11611[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__11616){
var G__11614 = (((G__11616 instanceof thi.ng.geom.vector.Vec2))?G__11616.buf:G__11616.buf);
var G__11615 = (new Float32Array(2));
(G__11615[(0)] = (G__11614[(2)]));

(G__11615[(1)] = (G__11614[(0)]));

return (new thi.ng.geom.vector.Vec2(G__11615,null,cljs.core.meta.call(null,G__11616)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__11619){
var G__11617 = (((G__11619 instanceof thi.ng.geom.vector.Vec2))?G__11619.buf:G__11619.buf);
var G__11618 = (new Float32Array(3));
(G__11618[(0)] = (G__11617[(2)]));

(G__11618[(1)] = (G__11617[(0)]));

(G__11618[(2)] = (G__11617[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11618,null,cljs.core.meta.call(null,G__11619)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__11622){
var G__11620 = (((G__11622 instanceof thi.ng.geom.vector.Vec2))?G__11622.buf:G__11622.buf);
var G__11621 = (new Float32Array(3));
(G__11621[(0)] = (G__11620[(2)]));

(G__11621[(1)] = (G__11620[(0)]));

(G__11621[(2)] = (G__11620[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11621,null,cljs.core.meta.call(null,G__11622)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__11625){
var G__11623 = (((G__11625 instanceof thi.ng.geom.vector.Vec2))?G__11625.buf:G__11625.buf);
var G__11624 = (new Float32Array(3));
(G__11624[(0)] = (G__11623[(2)]));

(G__11624[(1)] = (G__11623[(0)]));

(G__11624[(2)] = (G__11623[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11624,null,cljs.core.meta.call(null,G__11625)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__11628){
var G__11626 = (((G__11628 instanceof thi.ng.geom.vector.Vec2))?G__11628.buf:G__11628.buf);
var G__11627 = (new Float32Array(2));
(G__11627[(0)] = (G__11626[(2)]));

(G__11627[(1)] = (G__11626[(1)]));

return (new thi.ng.geom.vector.Vec2(G__11627,null,cljs.core.meta.call(null,G__11628)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__11631){
var G__11629 = (((G__11631 instanceof thi.ng.geom.vector.Vec2))?G__11631.buf:G__11631.buf);
var G__11630 = (new Float32Array(3));
(G__11630[(0)] = (G__11629[(2)]));

(G__11630[(1)] = (G__11629[(1)]));

(G__11630[(2)] = (G__11629[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11630,null,cljs.core.meta.call(null,G__11631)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__11634){
var G__11632 = (((G__11634 instanceof thi.ng.geom.vector.Vec2))?G__11634.buf:G__11634.buf);
var G__11633 = (new Float32Array(3));
(G__11633[(0)] = (G__11632[(2)]));

(G__11633[(1)] = (G__11632[(1)]));

(G__11633[(2)] = (G__11632[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11633,null,cljs.core.meta.call(null,G__11634)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__11637){
var G__11635 = (((G__11637 instanceof thi.ng.geom.vector.Vec2))?G__11637.buf:G__11637.buf);
var G__11636 = (new Float32Array(3));
(G__11636[(0)] = (G__11635[(2)]));

(G__11636[(1)] = (G__11635[(1)]));

(G__11636[(2)] = (G__11635[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11636,null,cljs.core.meta.call(null,G__11637)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__11640){
var G__11638 = (((G__11640 instanceof thi.ng.geom.vector.Vec2))?G__11640.buf:G__11640.buf);
var G__11639 = (new Float32Array(2));
(G__11639[(0)] = (G__11638[(2)]));

(G__11639[(1)] = (G__11638[(2)]));

return (new thi.ng.geom.vector.Vec2(G__11639,null,cljs.core.meta.call(null,G__11640)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__11643){
var G__11641 = (((G__11643 instanceof thi.ng.geom.vector.Vec2))?G__11643.buf:G__11643.buf);
var G__11642 = (new Float32Array(3));
(G__11642[(0)] = (G__11641[(2)]));

(G__11642[(1)] = (G__11641[(2)]));

(G__11642[(2)] = (G__11641[(0)]));

return (new thi.ng.geom.vector.Vec3(G__11642,null,cljs.core.meta.call(null,G__11643)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__11646){
var G__11644 = (((G__11646 instanceof thi.ng.geom.vector.Vec2))?G__11646.buf:G__11646.buf);
var G__11645 = (new Float32Array(3));
(G__11645[(0)] = (G__11644[(2)]));

(G__11645[(1)] = (G__11644[(2)]));

(G__11645[(2)] = (G__11644[(1)]));

return (new thi.ng.geom.vector.Vec3(G__11645,null,cljs.core.meta.call(null,G__11646)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__11649){
var G__11647 = (((G__11649 instanceof thi.ng.geom.vector.Vec2))?G__11649.buf:G__11649.buf);
var G__11648 = (new Float32Array(3));
(G__11648[(0)] = (G__11647[(2)]));

(G__11648[(1)] = (G__11647[(2)]));

(G__11648[(2)] = (G__11647[(2)]));

return (new thi.ng.geom.vector.Vec3(G__11648,null,cljs.core.meta.call(null,G__11649)));
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

var G__11650 = (i + (1));
var G__11651 = cljs.core.next.call(null,n__$1);
i = G__11650;
n__$1 = G__11651;
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
var G__11652 = null;
var G__11652__1 = (function (a){
return a;
});
var G__11652__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

return a;
});
G__11652 = function(a,b){
switch(arguments.length){
case 1:
return G__11652__1.call(this,a);
case 2:
return G__11652__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11652.cljs$core$IFn$_invoke$arity$1 = G__11652__1;
G__11652.cljs$core$IFn$_invoke$arity$2 = G__11652__2;
return G__11652;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.call(null,cljs.core.map.call(null,(function (x){
return x.buf;
})),(function() {
var G__11653 = null;
var G__11653__1 = (function (a){
return a;
});
var G__11653__2 = (function (a,b){
(a[(0)] = op.call(null,(a[(0)]),(b[(0)])));

(a[(1)] = op.call(null,(a[(1)]),(b[(1)])));

(a[(2)] = op.call(null,(a[(2)]),(b[(2)])));

return a;
});
G__11653 = function(a,b){
switch(arguments.length){
case 1:
return G__11653__1.call(this,a);
case 2:
return G__11653__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11653.cljs$core$IFn$_invoke$arity$1 = G__11653__1;
G__11653.cljs$core$IFn$_invoke$arity$2 = G__11653__2;
return G__11653;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args11654 = [];
var len__8605__auto___11657 = arguments.length;
var i__8606__auto___11658 = (0);
while(true){
if((i__8606__auto___11658 < len__8605__auto___11657)){
args11654.push((arguments[i__8606__auto___11658]));

var G__11659 = (i__8606__auto___11658 + (1));
i__8606__auto___11658 = G__11659;
continue;
} else {
}
break;
}

var G__11656 = args11654.length;
switch (G__11656) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11654.length)].join('')));

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
var args11661 = [];
var len__8605__auto___11664 = arguments.length;
var i__8606__auto___11665 = (0);
while(true){
if((i__8606__auto___11665 < len__8605__auto___11664)){
args11661.push((arguments[i__8606__auto___11665]));

var G__11666 = (i__8606__auto___11665 + (1));
i__8606__auto___11665 = G__11666;
continue;
} else {
}
break;
}

var G__11663 = args11661.length;
switch (G__11663) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11661.length)].join('')));

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
var args11668 = [];
var len__8605__auto___11671 = arguments.length;
var i__8606__auto___11672 = (0);
while(true){
if((i__8606__auto___11672 < len__8605__auto___11671)){
args11668.push((arguments[i__8606__auto___11672]));

var G__11673 = (i__8606__auto___11672 + (1));
i__8606__auto___11672 = G__11673;
continue;
} else {
}
break;
}

var G__11670 = args11668.length;
switch (G__11670) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11668.length)].join('')));

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
var args11675 = [];
var len__8605__auto___11678 = arguments.length;
var i__8606__auto___11679 = (0);
while(true){
if((i__8606__auto___11679 < len__8605__auto___11678)){
args11675.push((arguments[i__8606__auto___11679]));

var G__11680 = (i__8606__auto___11679 + (1));
i__8606__auto___11679 = G__11680;
continue;
} else {
}
break;
}

var G__11677 = args11675.length;
switch (G__11677) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11675.length)].join('')));

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
var args11682 = [];
var len__8605__auto___11685 = arguments.length;
var i__8606__auto___11686 = (0);
while(true){
if((i__8606__auto___11686 < len__8605__auto___11685)){
args11682.push((arguments[i__8606__auto___11686]));

var G__11687 = (i__8606__auto___11686 + (1));
i__8606__auto___11686 = G__11687;
continue;
} else {
}
break;
}

var G__11684 = args11682.length;
switch (G__11684) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11682.length)].join('')));

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
var args11689 = [];
var len__8605__auto___11692 = arguments.length;
var i__8606__auto___11693 = (0);
while(true){
if((i__8606__auto___11693 < len__8605__auto___11692)){
args11689.push((arguments[i__8606__auto___11693]));

var G__11694 = (i__8606__auto___11693 + (1));
i__8606__auto___11693 = G__11694;
continue;
} else {
}
break;
}

var G__11691 = args11689.length;
switch (G__11691) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11689.length)].join('')));

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