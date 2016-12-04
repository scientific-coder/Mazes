// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
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
return thi.ng.geom.core.transform_vector(m,___$1);
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
var G__14947_15325 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__14948_15326 = v.buf;
(self__.buf[(0)] = ((G__14947_15325[(0)]) - (G__14948_15326[(0)])));

(self__.buf[(1)] = ((G__14947_15325[(1)]) - (G__14948_15326[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14947_15325[(0)]) - v));

(self__.buf[(1)] = ((G__14947_15325[(1)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14947_15325[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__14947_15325[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14956_15327 = typeof v1 === 'number';
var G__14957_15328 = typeof v2 === 'number';
if(((G__14956_15327)?G__14957_15328:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__14958_15329 = ((!(G__14956_15327))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__14959_15330 = ((!(G__14957_15328))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__14950_15331 = (cljs.core.truth_(G__14958_15329)?v1.buf:null);
var G__14951_15332 = (cljs.core.truth_(G__14959_15330)?v2.buf:null);
var G__14952_15333 = (cljs.core.truth_(G__14958_15329)?(G__14950_15331[(0)]):((G__14956_15327)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__14953_15334 = (cljs.core.truth_(G__14958_15329)?(G__14950_15331[(1)]):((G__14956_15327)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__14954_15335 = (cljs.core.truth_(G__14959_15330)?(G__14951_15332[(0)]):((G__14957_15328)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__14955_15336 = (cljs.core.truth_(G__14959_15330)?(G__14951_15332[(1)]):((G__14957_15328)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__14952_15333) - G__14954_15335));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__14953_15334) - G__14955_15336));
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
var G__14960_15337 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__14961_15338 = v.buf;
(self__.buf[(0)] = ((G__14960_15337[(0)]) * (G__14961_15338[(0)])));

(self__.buf[(1)] = ((G__14960_15337[(1)]) * (G__14961_15338[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__14960_15337[(0)]) * v));

(self__.buf[(1)] = ((G__14960_15337[(1)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__14960_15337[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__14960_15337[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__14969_15339 = typeof v1 === 'number';
var G__14970_15340 = typeof v2 === 'number';
if(((G__14969_15339)?G__14970_15340:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__14971_15341 = ((!(G__14969_15339))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__14972_15342 = ((!(G__14970_15340))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__14963_15343 = (cljs.core.truth_(G__14971_15341)?v1.buf:null);
var G__14964_15344 = (cljs.core.truth_(G__14972_15342)?v2.buf:null);
var G__14965_15345 = (cljs.core.truth_(G__14971_15341)?(G__14963_15343[(0)]):((G__14969_15339)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__14966_15346 = (cljs.core.truth_(G__14971_15341)?(G__14963_15343[(1)]):((G__14969_15339)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__14967_15347 = (cljs.core.truth_(G__14972_15342)?(G__14964_15344[(0)]):((G__14970_15340)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__14968_15348 = (cljs.core.truth_(G__14972_15342)?(G__14964_15344[(1)]):((G__14970_15340)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__14965_15345) * G__14967_15347));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__14966_15346) * G__14968_15348));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14982_15349 = (a instanceof thi.ng.geom.vector.Vec2);
var G__14983_15350 = (b instanceof thi.ng.geom.vector.Vec2);
var G__14984_15351 = ((!(G__14982_15349))?typeof a === 'number':null);
var G__14985_15352 = ((!(G__14983_15350))?typeof b === 'number':null);
var G__14973_15353 = self__.buf;
var G__14974_15354 = ((G__14982_15349)?a.buf:null);
var G__14975_15355 = ((G__14983_15350)?b.buf:null);
var G__14976_15356 = (G__14973_15353[(0)]);
var G__14977_15357 = (G__14973_15353[(1)]);
var G__14978_15358 = ((G__14982_15349)?(G__14974_15354[(0)]):(cljs.core.truth_(G__14984_15351)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__14979_15359 = ((G__14982_15349)?(G__14974_15354[(1)]):(cljs.core.truth_(G__14984_15351)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__14980_15360 = ((G__14983_15350)?(G__14975_15355[(0)]):(cljs.core.truth_(G__14985_15352)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__14981_15361 = ((G__14983_15350)?(G__14975_15355[(1)]):(cljs.core.truth_(G__14985_15352)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__14976_15356 - G__14978_15358) * G__14980_15360));

(self__.buf[(1)] = ((G__14977_15357 - G__14979_15359) * G__14981_15361));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__14995_15362 = (a instanceof thi.ng.geom.vector.Vec2);
var G__14996_15363 = (b instanceof thi.ng.geom.vector.Vec2);
var G__14997_15364 = ((!(G__14995_15362))?typeof a === 'number':null);
var G__14998_15365 = ((!(G__14996_15363))?typeof b === 'number':null);
var G__14986_15366 = self__.buf;
var G__14987_15367 = ((G__14995_15362)?a.buf:null);
var G__14988_15368 = ((G__14996_15363)?b.buf:null);
var G__14989_15369 = (G__14986_15366[(0)]);
var G__14990_15370 = (G__14986_15366[(1)]);
var G__14991_15371 = ((G__14995_15362)?(G__14987_15367[(0)]):(cljs.core.truth_(G__14997_15364)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__14992_15372 = ((G__14995_15362)?(G__14987_15367[(1)]):(cljs.core.truth_(G__14997_15364)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__14993_15373 = ((G__14996_15363)?(G__14988_15368[(0)]):(cljs.core.truth_(G__14998_15365)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__14994_15374 = ((G__14996_15363)?(G__14988_15368[(1)]):(cljs.core.truth_(G__14998_15365)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__14989_15369 * G__14991_15371) - G__14993_15373));

(self__.buf[(1)] = ((G__14990_15370 * G__14992_15372) - G__14994_15374));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__14999 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14999) : thi.ng.math.core.abs_STAR_.call(null,G__14999));
})());

(self__.buf[(1)] = (function (){var G__15000 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15000) : thi.ng.math.core.abs_STAR_.call(null,G__15000));
})());

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15010_15375 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15011_15376 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15012_15377 = ((!(G__15010_15375))?typeof a === 'number':null);
var G__15013_15378 = ((!(G__15011_15376))?typeof b === 'number':null);
var G__15001_15379 = self__.buf;
var G__15002_15380 = ((G__15010_15375)?a.buf:null);
var G__15003_15381 = ((G__15011_15376)?b.buf:null);
var G__15004_15382 = (G__15001_15379[(0)]);
var G__15005_15383 = (G__15001_15379[(1)]);
var G__15006_15384 = ((G__15010_15375)?(G__15002_15380[(0)]):(cljs.core.truth_(G__15012_15377)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15007_15385 = ((G__15010_15375)?(G__15002_15380[(1)]):(cljs.core.truth_(G__15012_15377)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15008_15386 = ((G__15011_15376)?(G__15003_15381[(0)]):(cljs.core.truth_(G__15013_15378)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15009_15387 = ((G__15011_15376)?(G__15003_15381[(1)]):(cljs.core.truth_(G__15013_15378)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__15004_15382 * G__15006_15384) + G__15008_15386));

(self__.buf[(1)] = ((G__15005_15383 * G__15007_15385) + G__15009_15387));

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
var G__15014_15388 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15015_15389 = v.buf;
(self__.buf[(0)] = ((G__15014_15388[(0)]) / (G__15015_15389[(0)])));

(self__.buf[(1)] = ((G__15014_15388[(1)]) / (G__15015_15389[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15014_15388[(0)]) / v));

(self__.buf[(1)] = ((G__15014_15388[(1)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15014_15388[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15014_15388[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15023_15390 = typeof v1 === 'number';
var G__15024_15391 = typeof v2 === 'number';
if(((G__15023_15390)?G__15024_15391:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__15025_15392 = ((!(G__15023_15390))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15026_15393 = ((!(G__15024_15391))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15017_15394 = (cljs.core.truth_(G__15025_15392)?v1.buf:null);
var G__15018_15395 = (cljs.core.truth_(G__15026_15393)?v2.buf:null);
var G__15019_15396 = (cljs.core.truth_(G__15025_15392)?(G__15017_15394[(0)]):((G__15023_15390)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15020_15397 = (cljs.core.truth_(G__15025_15392)?(G__15017_15394[(1)]):((G__15023_15390)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15021_15398 = (cljs.core.truth_(G__15026_15393)?(G__15018_15395[(0)]):((G__15024_15391)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15022_15399 = (cljs.core.truth_(G__15026_15393)?(G__15018_15395[(1)]):((G__15024_15391)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__15019_15396) / G__15021_15398));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__15020_15397) / G__15022_15399));
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
var G__15027_15400 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15028_15401 = v.buf;
(self__.buf[(0)] = ((G__15027_15400[(0)]) + (G__15028_15401[(0)])));

(self__.buf[(1)] = ((G__15027_15400[(1)]) + (G__15028_15401[(1)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15027_15400[(0)]) + v));

(self__.buf[(1)] = ((G__15027_15400[(1)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15027_15400[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15027_15400[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15036_15402 = typeof v1 === 'number';
var G__15037_15403 = typeof v2 === 'number';
if(((G__15036_15402)?G__15037_15403:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__15038_15404 = ((!(G__15036_15402))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15039_15405 = ((!(G__15037_15403))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15030_15406 = (cljs.core.truth_(G__15038_15404)?v1.buf:null);
var G__15031_15407 = (cljs.core.truth_(G__15039_15405)?v2.buf:null);
var G__15032_15408 = (cljs.core.truth_(G__15038_15404)?(G__15030_15406[(0)]):((G__15036_15402)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15033_15409 = (cljs.core.truth_(G__15038_15404)?(G__15030_15406[(1)]):((G__15036_15402)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15034_15410 = (cljs.core.truth_(G__15039_15405)?(G__15031_15407[(0)]):((G__15037_15403)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15035_15411 = (cljs.core.truth_(G__15039_15405)?(G__15031_15407[(1)]):((G__15037_15403)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__15032_15408) + G__15034_15410));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__15033_15409) + G__15035_15411));
}

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15049_15412 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15050_15413 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15051_15414 = ((!(G__15049_15412))?typeof a === 'number':null);
var G__15052_15415 = ((!(G__15050_15413))?typeof b === 'number':null);
var G__15040_15416 = self__.buf;
var G__15041_15417 = ((G__15049_15412)?a.buf:null);
var G__15042_15418 = ((G__15050_15413)?b.buf:null);
var G__15043_15419 = (G__15040_15416[(0)]);
var G__15044_15420 = (G__15040_15416[(1)]);
var G__15045_15421 = ((G__15049_15412)?(G__15041_15417[(0)]):(cljs.core.truth_(G__15051_15414)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15046_15422 = ((G__15049_15412)?(G__15041_15417[(1)]):(cljs.core.truth_(G__15051_15414)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15047_15423 = ((G__15050_15413)?(G__15042_15418[(0)]):(cljs.core.truth_(G__15052_15415)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15048_15424 = ((G__15050_15413)?(G__15042_15418[(1)]):(cljs.core.truth_(G__15052_15415)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__15043_15419 + G__15045_15421) * G__15047_15423));

(self__.buf[(1)] = ((G__15044_15420 + G__15046_15422) * G__15048_15424));

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
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
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
var G__15053 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15054 = v.buf;
return (((G__15053[(0)]) * (G__15054[(1)])) - ((G__15053[(1)]) * (G__15054[(0)])));
} else {
return (((G__15053[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__15053[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
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
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec2 ["," ","]",opts,cljs.core.seq(___$1));
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
var G__15068 = self__.buf;
var G__15070 = (G__15068[(0)]);
var G__15071 = (G__15068[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15069 = v.buf;
var G__15072 = (G__15069[(0)]);
var G__15073 = (G__15069[(1)]);
var d = (((G__15070 * G__15072) + (G__15071 * G__15073)) * 2.0);
(b[(0)] = ((G__15072 * d) - G__15070));

(b[(1)] = ((G__15073 * d) - G__15071));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
var G__15072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__15070 * G__15072) + (G__15071 * G__15073)) * 2.0);
(b[(0)] = ((G__15072 * d) - G__15070));

(b[(1)] = ((G__15073 * d) - G__15071));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
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
var G__15074 = thi.ng.geom.core.dist_squared(___$1,v);
return Math.sqrt(G__15074);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15075 = self__.buf;
var G__15077 = (G__15075[(0)]);
var G__15078 = (G__15075[(1)]);
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15076 = v.buf;
var G__15079 = (G__15076[(0)]);
var G__15080 = (G__15076[(1)]);
var dx = (G__15077 - G__15079);
var dy = (G__15078 - G__15080);
return ((dx * dx) + (dy * dy));
} else {
var G__15079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__15077 - G__15079);
var dy = (G__15078 - G__15080);
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
var G__15081 = self__.buf;
var G__15082 = (G__15081[(0)]);
var G__15083 = (G__15081[(1)]);
(b[(0)] = ((G__15082 * c) - (G__15083 * s)));

(b[(1)] = ((G__15082 * s) + (G__15083 * c)));

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
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function (){var G__15084 = cljs.core.cst$kw$yx;
return (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(G__15084) : thi.ng.geom.vector.swizzle2_fns.call(null,G__15084));
})().call(null,___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared(___$1) > (len * len))){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15085_15425 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15086_15426 = v.buf;
(dest__14811__auto__[(0)] = ((G__15085_15425[(0)]) * (G__15086_15426[(0)])));

(dest__14811__auto__[(1)] = ((G__15085_15425[(1)]) * (G__15086_15426[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15085_15425[(0)]) * v));

(dest__14811__auto__[(1)] = ((G__15085_15425[(1)]) * v));
} else {
(dest__14811__auto__[(0)] = ((G__15085_15425[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15085_15425[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7389__auto__ = self__._hash;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__15087 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15088 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15087[(0)]),(G__15088[(0)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15087[(1)]),(G__15088[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15087[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15087[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
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
return (cljs.core.sequential_QMARK_(o)) && (((2) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1))));
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec2((thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__15089 = (buf_SINGLEQUOTE_[(0)]);
var G__15090 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__15089,G__15090) : f2.call(null,G__15089,G__15090));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__15091 = (buf_SINGLEQUOTE_[(1)]);
var G__15092 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__15091,G__15092) : f2.call(null,G__15091,G__15092));
})());

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
var G__15093 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15094 = v.buf;
return (((G__15093[(0)]) * (G__15094[(0)])) + ((G__15093[(1)]) * (G__15094[(1)])));
} else {
return (((G__15093[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__15093[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
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
var acc = (function (){var G__15095 = (self__.buf[(0)]);
var G__15096 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15095,G__15096) : f.call(null,G__15095,G__15096));
})();
if(cljs.core.reduced_QMARK_(acc)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc) : cljs.core.deref.call(null,acc));
} else {
return acc;
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__15097 = start;
var G__15098 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15097,G__15098) : f.call(null,G__15097,G__15098));
})();
if(cljs.core.reduced_QMARK_(acc)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc) : cljs.core.deref.call(null,acc));
} else {
var acc__$1 = (function (){var G__15099 = acc;
var G__15100 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15099,G__15100) : f.call(null,G__15099,G__15100));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc__$1) : cljs.core.deref.call(null,acc__$1));
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$ITranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15101_15427 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15102_15428 = v.buf;
(dest__14811__auto__[(0)] = ((G__15101_15427[(0)]) + (G__15102_15428[(0)])));

(dest__14811__auto__[(1)] = ((G__15101_15427[(1)]) + (G__15102_15428[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15101_15427[(0)]) + v));

(dest__14811__auto__[(1)] = ((G__15101_15427[(1)]) + v));
} else {
(dest__14811__auto__[(0)] = ((G__15101_15427[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15101_15427[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__15103 = (self__.buf[(1)]);
var G__15104 = (self__.buf[(0)]);
return Math.atan2(G__15103,G__15104);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading(___$1);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - thi.ng.geom.core.heading(___$1));
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
var G__15105_15429 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15106_15430 = v.buf;
(b[(0)] = (((G__15105_15429[(0)]) + (G__15106_15430[(0)])) * 0.5));

(b[(1)] = (((G__15105_15429[(1)]) + (G__15106_15430[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__15105_15429[(0)]) + v) * 0.5));

(b[(1)] = (((G__15105_15429[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__15105_15429[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__15105_15429[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15116_15431 = (v instanceof thi.ng.geom.vector.Vec2);
var G__15117_15432 = (t instanceof thi.ng.geom.vector.Vec2);
var G__15118_15433 = ((!(G__15116_15431))?typeof v === 'number':null);
var G__15119_15434 = ((!(G__15117_15432))?typeof t === 'number':null);
var G__15107_15435 = self__.buf;
var G__15108_15436 = ((G__15116_15431)?v.buf:null);
var G__15109_15437 = ((G__15117_15432)?t.buf:null);
var G__15110_15438 = (G__15107_15435[(0)]);
var G__15111_15439 = (G__15107_15435[(1)]);
var G__15112_15440 = ((G__15116_15431)?(G__15108_15436[(0)]):(cljs.core.truth_(G__15118_15433)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15113_15441 = ((G__15116_15431)?(G__15108_15436[(1)]):(cljs.core.truth_(G__15118_15433)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15114_15442 = ((G__15117_15432)?(G__15109_15437[(0)]):(cljs.core.truth_(G__15119_15434)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__15115_15443 = ((G__15117_15432)?(G__15109_15437[(1)]):(cljs.core.truth_(G__15119_15434)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (((G__15112_15440 - G__15110_15438) * G__15114_15442) + G__15110_15438));

(b[(1)] = (((G__15113_15441 - G__15111_15439) * G__15115_15443) + G__15111_15439));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__15129_15444 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15130_15445 = (c instanceof thi.ng.geom.vector.Vec2);
var G__15131_15446 = ((!(G__15129_15444))?typeof b === 'number':null);
var G__15132_15447 = ((!(G__15130_15445))?typeof c === 'number':null);
var G__15120_15448 = self__.buf;
var G__15121_15449 = ((G__15129_15444)?b.buf:null);
var G__15122_15450 = ((G__15130_15445)?c.buf:null);
var G__15123_15451 = (G__15120_15448[(0)]);
var G__15124_15452 = (G__15120_15448[(1)]);
var G__15125_15453 = ((G__15129_15444)?(G__15121_15449[(0)]):(cljs.core.truth_(G__15131_15446)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15126_15454 = ((G__15129_15444)?(G__15121_15449[(1)]):(cljs.core.truth_(G__15131_15446)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__15127_15455 = ((G__15130_15445)?(G__15122_15450[(0)]):(cljs.core.truth_(G__15132_15447)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__15128_15456 = ((G__15130_15445)?(G__15122_15450[(1)]):(cljs.core.truth_(G__15132_15447)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_15457 = (((G__15125_15453 - G__15123_15451) * u) + G__15123_15451);
var y1_15458 = (((G__15126_15454 - G__15124_15452) * u) + G__15124_15452);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__15127_15455) * u) + G__15127_15455) - x1_15457) * v) + x1_15457));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__15128_15456) * u) + G__15128_15456) - y1_15458) * v) + y1_15458));

return (new thi.ng.geom.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15142_15459 = (v instanceof thi.ng.geom.vector.Vec2);
var G__15143_15460 = (t instanceof thi.ng.geom.vector.Vec2);
var G__15144_15461 = ((!(G__15142_15459))?typeof v === 'number':null);
var G__15145_15462 = ((!(G__15143_15460))?typeof t === 'number':null);
var G__15133_15463 = self__.buf;
var G__15134_15464 = ((G__15142_15459)?v.buf:null);
var G__15135_15465 = ((G__15143_15460)?t.buf:null);
var G__15136_15466 = (G__15133_15463[(0)]);
var G__15137_15467 = (G__15133_15463[(1)]);
var G__15138_15468 = ((G__15142_15459)?(G__15134_15464[(0)]):(cljs.core.truth_(G__15144_15461)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15139_15469 = ((G__15142_15459)?(G__15134_15464[(1)]):(cljs.core.truth_(G__15144_15461)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15140_15470 = ((G__15143_15460)?(G__15135_15465[(0)]):(cljs.core.truth_(G__15145_15462)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__15141_15471 = ((G__15143_15460)?(G__15135_15465[(1)]):(cljs.core.truth_(G__15145_15462)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15136_15466,G__15138_15468,G__15140_15470) : f.call(null,G__15136_15466,G__15138_15468,G__15140_15470)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15137_15467,G__15139_15469,G__15141_15471) : f.call(null,G__15137_15467,G__15139_15469,G__15141_15471)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15146_15472 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec2)){
var G__15147_15473 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__15147_15473[(0)]),(G__15146_15472[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__15147_15473[(1)]),(G__15146_15472[(1)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__15146_15472[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__15146_15472[(1)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__15146_15472[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__15146_15472[(1)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__15157_15474 = (e1 instanceof thi.ng.geom.vector.Vec2);
var G__15158_15475 = (e2 instanceof thi.ng.geom.vector.Vec2);
var G__15159_15476 = ((!(G__15157_15474))?typeof e1 === 'number':null);
var G__15160_15477 = ((!(G__15158_15475))?typeof e2 === 'number':null);
var G__15148_15478 = self__.buf;
var G__15149_15479 = ((G__15157_15474)?e1.buf:null);
var G__15150_15480 = ((G__15158_15475)?e2.buf:null);
var G__15151_15481 = (G__15148_15478[(0)]);
var G__15152_15482 = (G__15148_15478[(1)]);
var G__15153_15483 = ((G__15157_15474)?(G__15149_15479[(0)]):(cljs.core.truth_(G__15159_15476)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__15154_15484 = ((G__15157_15474)?(G__15149_15479[(1)]):(cljs.core.truth_(G__15159_15476)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__15155_15485 = ((G__15158_15475)?(G__15150_15480[(0)]):(cljs.core.truth_(G__15160_15477)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__15156_15486 = ((G__15158_15475)?(G__15150_15480[(1)]):(cljs.core.truth_(G__15160_15477)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__15153_15483,G__15155_15485,G__15151_15481));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__15153_15483,G__15156_15486,G__15152_15482));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k < (2)));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k)))){
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$z,k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec2((function (){var G__15161 = self__.buf;
var G__15162 = (new Float32Array(self__.buf));
var G__15163 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__15164 = k;
var G__15165 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__15161,G__15162,G__15163,G__15164,G__15165) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__15161,G__15162,G__15163,G__15164,G__15165));
})(),null,self__._meta));
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
var dest__14811__auto__ = (new Float32Array((2)));
var G__15166_15487 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15167_15488 = v.buf;
(dest__14811__auto__[(0)] = (function (){var a__14160__auto__ = (G__15166_15487[(0)]);
var b__14161__auto__ = (G__15167_15488[(0)]);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14160__auto__ = (G__15166_15487[(1)]);
var b__14161__auto__ = (G__15167_15488[(1)]);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = (function (){var a__14160__auto__ = (G__15166_15487[(0)]);
var b__14161__auto__ = v;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14160__auto__ = (G__15166_15487[(1)]);
var b__14161__auto__ = v;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
} else {
(dest__14811__auto__[(0)] = (function (){var a__14160__auto__ = (G__15166_15487[(0)]);
var b__14161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14160__auto__ = (G__15166_15487[(1)]);
var b__14161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15177_15489 = (v instanceof thi.ng.geom.vector.Vec2);
var G__15178_15490 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__15179_15491 = ((!(G__15177_15489))?typeof v === 'number':null);
var G__15180_15492 = ((!(G__15178_15490))?typeof v2 === 'number':null);
var G__15168_15493 = self__.buf;
var G__15169_15494 = ((G__15177_15489)?v.buf:null);
var G__15170_15495 = ((G__15178_15490)?v2.buf:null);
var G__15171_15496 = (G__15168_15493[(0)]);
var G__15172_15497 = (G__15168_15493[(1)]);
var G__15173_15498 = ((G__15177_15489)?(G__15169_15494[(0)]):(cljs.core.truth_(G__15179_15491)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15174_15499 = ((G__15177_15489)?(G__15169_15494[(1)]):(cljs.core.truth_(G__15179_15491)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15175_15500 = ((G__15178_15490)?(G__15170_15495[(0)]):(cljs.core.truth_(G__15180_15492)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15176_15501 = ((G__15178_15490)?(G__15170_15495[(1)]):(cljs.core.truth_(G__15180_15492)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__14822__auto__[(0)] = (function (){var a__14160__auto__ = (function (){var a__14160__auto__ = G__15171_15496;
var b__14161__auto__ = G__15173_15498;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})();
var b__14161__auto__ = G__15175_15500;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14822__auto__[(1)] = (function (){var a__14160__auto__ = (function (){var a__14160__auto__ = G__15172_15497;
var b__14161__auto__ = G__15174_15499;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})();
var b__14161__auto__ = G__15176_15501;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15181_15502 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15182_15503 = v.buf;
(dest__14811__auto__[(0)] = (function (){var a__14167__auto__ = (G__15181_15502[(0)]);
var b__14168__auto__ = (G__15182_15503[(0)]);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14167__auto__ = (G__15181_15502[(1)]);
var b__14168__auto__ = (G__15182_15503[(1)]);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = (function (){var a__14167__auto__ = (G__15181_15502[(0)]);
var b__14168__auto__ = v;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14167__auto__ = (G__15181_15502[(1)]);
var b__14168__auto__ = v;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
} else {
(dest__14811__auto__[(0)] = (function (){var a__14167__auto__ = (G__15181_15502[(0)]);
var b__14168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14811__auto__[(1)] = (function (){var a__14167__auto__ = (G__15181_15502[(1)]);
var b__14168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15192_15504 = (v instanceof thi.ng.geom.vector.Vec2);
var G__15193_15505 = (v2 instanceof thi.ng.geom.vector.Vec2);
var G__15194_15506 = ((!(G__15192_15504))?typeof v === 'number':null);
var G__15195_15507 = ((!(G__15193_15505))?typeof v2 === 'number':null);
var G__15183_15508 = self__.buf;
var G__15184_15509 = ((G__15192_15504)?v.buf:null);
var G__15185_15510 = ((G__15193_15505)?v2.buf:null);
var G__15186_15511 = (G__15183_15508[(0)]);
var G__15187_15512 = (G__15183_15508[(1)]);
var G__15188_15513 = ((G__15192_15504)?(G__15184_15509[(0)]):(cljs.core.truth_(G__15194_15506)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15189_15514 = ((G__15192_15504)?(G__15184_15509[(1)]):(cljs.core.truth_(G__15194_15506)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15190_15515 = ((G__15193_15505)?(G__15185_15510[(0)]):(cljs.core.truth_(G__15195_15507)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15191_15516 = ((G__15193_15505)?(G__15185_15510[(1)]):(cljs.core.truth_(G__15195_15507)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__14822__auto__[(0)] = (function (){var a__14167__auto__ = (function (){var a__14167__auto__ = G__15186_15511;
var b__14168__auto__ = G__15188_15513;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})();
var b__14168__auto__ = G__15190_15515;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14822__auto__[(1)] = (function (){var a__14167__auto__ = (function (){var a__14167__auto__ = G__15187_15512;
var b__14168__auto__ = G__15189_15514;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})();
var b__14168__auto__ = G__15191_15516;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
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
return cljs.core.with_meta((function (){var G__15196 = (self__.buf[(0)]);
var G__15197 = (self__.buf[(1)]);
var G__15198 = x;
return (thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__15196,G__15197,G__15198) : thi.ng.geom.vector.vec3.call(null,G__15196,G__15197,G__15198));
})(),self__._meta);
});

thi.ng.geom.vector.Vec2.prototype.call = (function() {
var G__15517 = null;
var G__15517__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
var G__15517__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
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
G__15517 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__15517__2.call(this,self__,k);
case 3:
return G__15517__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15517.cljs$core$IFn$_invoke$arity$2 = G__15517__2;
G__15517.cljs$core$IFn$_invoke$arity$3 = G__15517__3;
return G__15517;
})()
;

thi.ng.geom.vector.Vec2.prototype.apply = (function (self__,args14946){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14946)));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k < (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
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
(b[(0)] = thi.ng.math.core.mag(___$1));

(b[(1)] = thi.ng.geom.core.heading(___$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$geom$core$IPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15199 = self__.buf;
var G__15200 = (G__15199[(0)]);
var G__15201 = (G__15199[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__15200 * Math.cos(G__15201)));

(b[(1)] = (G__15200 * Math.sin(G__15201)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15202 = self__.buf;
var G__15203 = (G__15202[(0)]);
var G__15204 = (G__15202[(1)]);
var l = (function (){var G__15205 = ((G__15203 * G__15203) + (G__15204 * G__15204));
return Math.sqrt(G__15205);
})();
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__15203 / l));

(b[(1)] = (G__15204 / l));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15206 = self__.buf;
var G__15207 = (G__15206[(0)]);
var G__15208 = (G__15206[(1)]);
var l = (function (){var G__15209 = ((G__15207 * G__15207) + (G__15208 * G__15208));
return Math.sqrt(G__15209);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__15207 * l__$1));

(b[(1)] = (G__15208 * l__$1));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.math.core.mag_squared(___$1));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15210 = self__.buf;
var G__15211 = (G__15210[(0)]);
var G__15212 = (G__15210[(1)]);
var G__15213 = ((G__15211 * G__15211) + (G__15212 * G__15212));
return Math.sqrt(G__15213);
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15214 = self__.buf;
var G__15215 = (G__15214[(0)]);
var G__15216 = (G__15214[(1)]);
return ((G__15215 * G__15215) + (G__15216 * G__15216));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15226_15518 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15227_15519 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15228_15520 = ((!(G__15226_15518))?typeof a === 'number':null);
var G__15229_15521 = ((!(G__15227_15519))?typeof b === 'number':null);
var G__15217_15522 = self__.buf;
var G__15218_15523 = ((G__15226_15518)?a.buf:null);
var G__15219_15524 = ((G__15227_15519)?b.buf:null);
var G__15220_15525 = (G__15217_15522[(0)]);
var G__15221_15526 = (G__15217_15522[(1)]);
var G__15222_15527 = ((G__15226_15518)?(G__15218_15523[(0)]):(cljs.core.truth_(G__15228_15520)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15223_15528 = ((G__15226_15518)?(G__15218_15523[(1)]):(cljs.core.truth_(G__15228_15520)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15224_15529 = ((G__15227_15519)?(G__15219_15524[(0)]):(cljs.core.truth_(G__15229_15521)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15225_15530 = ((G__15227_15519)?(G__15219_15524[(1)]):(cljs.core.truth_(G__15229_15521)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__14822__auto__[(0)] = ((G__15220_15525 * G__15222_15527) - G__15224_15529));

(dest__14822__auto__[(1)] = ((G__15221_15526 * G__15223_15528) - G__15225_15530));

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15230_15531 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15231_15532 = v.buf;
(dest__14811__auto__[(0)] = ((G__15230_15531[(0)]) * (G__15231_15532[(0)])));

(dest__14811__auto__[(1)] = ((G__15230_15531[(1)]) * (G__15231_15532[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15230_15531[(0)]) * v));

(dest__14811__auto__[(1)] = ((G__15230_15531[(1)]) * v));
} else {
(dest__14811__auto__[(0)] = ((G__15230_15531[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15230_15531[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15232 = self__.buf;
var G__15235 = (new Float32Array((2)));
var G__15236 = (G__15232[(0)]);
var G__15237 = (G__15232[(1)]);
var G__15242 = typeof v1 === 'number';
var G__15243 = typeof v2 === 'number';
if(((G__15242)?G__15243:false)){
(G__15235[(0)] = (G__15236 * v1));

(G__15235[(1)] = (G__15237 * v2));
} else {
var G__15244_15533 = ((!(G__15242))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15245_15534 = ((!(G__15243))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15233_15535 = (cljs.core.truth_(G__15244_15533)?v1.buf:null);
var G__15234_15536 = (cljs.core.truth_(G__15245_15534)?v2.buf:null);
var G__15238_15537 = (cljs.core.truth_(G__15244_15533)?(G__15233_15535[(0)]):((G__15242)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__15239_15538 = (cljs.core.truth_(G__15244_15533)?(G__15233_15535[(1)]):((G__15242)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__15240_15539 = (cljs.core.truth_(G__15245_15534)?(G__15234_15536[(0)]):((G__15243)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__15241_15540 = (cljs.core.truth_(G__15245_15534)?(G__15234_15536[(1)]):((G__15243)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__15235[(0)] = ((G__15236 * G__15238_15537) * G__15240_15539));

(G__15235[(1)] = ((G__15237 * G__15239_15538) * G__15241_15540));
}

return (new thi.ng.geom.vector.Vec2(G__15235,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14781__auto__ = (new Float32Array((2)));
var G__15246_15541 = self__.buf;
(dest__14781__auto__[(0)] = (- (G__15246_15541[(0)])));

(dest__14781__auto__[(1)] = (- (G__15246_15541[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__14781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15247_15542 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15248_15543 = v.buf;
(dest__14811__auto__[(0)] = ((G__15247_15542[(0)]) - (G__15248_15543[(0)])));

(dest__14811__auto__[(1)] = ((G__15247_15542[(1)]) - (G__15248_15543[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15247_15542[(0)]) - v));

(dest__14811__auto__[(1)] = ((G__15247_15542[(1)]) - v));
} else {
(dest__14811__auto__[(0)] = ((G__15247_15542[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15247_15542[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15249 = self__.buf;
var G__15252 = (new Float32Array((2)));
var G__15253 = (G__15249[(0)]);
var G__15254 = (G__15249[(1)]);
var G__15259 = typeof v1 === 'number';
var G__15260 = typeof v2 === 'number';
if(((G__15259)?G__15260:false)){
(G__15252[(0)] = (G__15253 - v1));

(G__15252[(1)] = (G__15254 - v2));
} else {
var G__15261_15544 = ((!(G__15259))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15262_15545 = ((!(G__15260))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15250_15546 = (cljs.core.truth_(G__15261_15544)?v1.buf:null);
var G__15251_15547 = (cljs.core.truth_(G__15262_15545)?v2.buf:null);
var G__15255_15548 = (cljs.core.truth_(G__15261_15544)?(G__15250_15546[(0)]):((G__15259)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15256_15549 = (cljs.core.truth_(G__15261_15544)?(G__15250_15546[(1)]):((G__15259)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15257_15550 = (cljs.core.truth_(G__15262_15545)?(G__15251_15547[(0)]):((G__15260)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15258_15551 = (cljs.core.truth_(G__15262_15545)?(G__15251_15547[(1)]):((G__15260)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__15252[(0)] = ((G__15253 - G__15255_15548) - G__15257_15550));

(G__15252[(1)] = ((G__15254 - G__15256_15549) - G__15258_15551));
}

return (new thi.ng.geom.vector.Vec2(G__15252,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15272_15552 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15273_15553 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15274_15554 = ((!(G__15272_15552))?typeof a === 'number':null);
var G__15275_15555 = ((!(G__15273_15553))?typeof b === 'number':null);
var G__15263_15556 = self__.buf;
var G__15264_15557 = ((G__15272_15552)?a.buf:null);
var G__15265_15558 = ((G__15273_15553)?b.buf:null);
var G__15266_15559 = (G__15263_15556[(0)]);
var G__15267_15560 = (G__15263_15556[(1)]);
var G__15268_15561 = ((G__15272_15552)?(G__15264_15557[(0)]):(cljs.core.truth_(G__15274_15554)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15269_15562 = ((G__15272_15552)?(G__15264_15557[(1)]):(cljs.core.truth_(G__15274_15554)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15270_15563 = ((G__15273_15553)?(G__15265_15558[(0)]):(cljs.core.truth_(G__15275_15555)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15271_15564 = ((G__15273_15553)?(G__15265_15558[(1)]):(cljs.core.truth_(G__15275_15555)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__14822__auto__[(0)] = ((G__15266_15559 * G__15268_15561) + G__15270_15563));

(dest__14822__auto__[(1)] = ((G__15267_15560 * G__15269_15562) + G__15271_15564));

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15285_15565 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15286_15566 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15287_15567 = ((!(G__15285_15565))?typeof a === 'number':null);
var G__15288_15568 = ((!(G__15286_15566))?typeof b === 'number':null);
var G__15276_15569 = self__.buf;
var G__15277_15570 = ((G__15285_15565)?a.buf:null);
var G__15278_15571 = ((G__15286_15566)?b.buf:null);
var G__15279_15572 = (G__15276_15569[(0)]);
var G__15280_15573 = (G__15276_15569[(1)]);
var G__15281_15574 = ((G__15285_15565)?(G__15277_15570[(0)]):(cljs.core.truth_(G__15287_15567)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15282_15575 = ((G__15285_15565)?(G__15277_15570[(1)]):(cljs.core.truth_(G__15287_15567)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15283_15576 = ((G__15286_15566)?(G__15278_15571[(0)]):(cljs.core.truth_(G__15288_15568)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15284_15577 = ((G__15286_15566)?(G__15278_15571[(1)]):(cljs.core.truth_(G__15288_15568)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__14822__auto__[(0)] = ((G__15279_15572 + G__15281_15574) * G__15283_15576));

(dest__14822__auto__[(1)] = ((G__15280_15573 + G__15282_15575) * G__15284_15577));

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14781__auto__ = (new Float32Array((2)));
var G__15289_15578 = self__.buf;
(dest__14781__auto__[(0)] = ((1) / (G__15289_15578[(0)])));

(dest__14781__auto__[(1)] = ((1) / (G__15289_15578[(1)])));

return (new thi.ng.geom.vector.Vec2(dest__14781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15290_15579 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15291_15580 = v.buf;
(dest__14811__auto__[(0)] = ((G__15290_15579[(0)]) / (G__15291_15580[(0)])));

(dest__14811__auto__[(1)] = ((G__15290_15579[(1)]) / (G__15291_15580[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15290_15579[(0)]) / v));

(dest__14811__auto__[(1)] = ((G__15290_15579[(1)]) / v));
} else {
(dest__14811__auto__[(0)] = ((G__15290_15579[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15290_15579[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15292 = self__.buf;
var G__15295 = (new Float32Array((2)));
var G__15296 = (G__15292[(0)]);
var G__15297 = (G__15292[(1)]);
var G__15302 = typeof v1 === 'number';
var G__15303 = typeof v2 === 'number';
if(((G__15302)?G__15303:false)){
(G__15295[(0)] = (G__15296 / v1));

(G__15295[(1)] = (G__15297 / v2));
} else {
var G__15304_15581 = ((!(G__15302))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15305_15582 = ((!(G__15303))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15293_15583 = (cljs.core.truth_(G__15304_15581)?v1.buf:null);
var G__15294_15584 = (cljs.core.truth_(G__15305_15582)?v2.buf:null);
var G__15298_15585 = (cljs.core.truth_(G__15304_15581)?(G__15293_15583[(0)]):((G__15302)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15299_15586 = (cljs.core.truth_(G__15304_15581)?(G__15293_15583[(1)]):((G__15302)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15300_15587 = (cljs.core.truth_(G__15305_15582)?(G__15294_15584[(0)]):((G__15303)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15301_15588 = (cljs.core.truth_(G__15305_15582)?(G__15294_15584[(1)]):((G__15303)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__15295[(0)] = ((G__15296 / G__15298_15585) / G__15300_15587));

(G__15295[(1)] = ((G__15297 / G__15299_15586) / G__15301_15588));
}

return (new thi.ng.geom.vector.Vec2(G__15295,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14811__auto__ = (new Float32Array((2)));
var G__15306_15589 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec2)){
var G__15307_15590 = v.buf;
(dest__14811__auto__[(0)] = ((G__15306_15589[(0)]) + (G__15307_15590[(0)])));

(dest__14811__auto__[(1)] = ((G__15306_15589[(1)]) + (G__15307_15590[(1)])));
} else {
if(typeof v === 'number'){
(dest__14811__auto__[(0)] = ((G__15306_15589[(0)]) + v));

(dest__14811__auto__[(1)] = ((G__15306_15589[(1)]) + v));
} else {
(dest__14811__auto__[(0)] = ((G__15306_15589[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14811__auto__[(1)] = ((G__15306_15589[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.vector.Vec2(dest__14811__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15308 = self__.buf;
var G__15311 = (new Float32Array((2)));
var G__15312 = (G__15308[(0)]);
var G__15313 = (G__15308[(1)]);
var G__15318 = typeof v1 === 'number';
var G__15319 = typeof v2 === 'number';
if(((G__15318)?G__15319:false)){
(G__15311[(0)] = (G__15312 + v1));

(G__15311[(1)] = (G__15313 + v2));
} else {
var G__15320_15591 = ((!(G__15318))?(v1 instanceof thi.ng.geom.vector.Vec2):null);
var G__15321_15592 = ((!(G__15319))?(v2 instanceof thi.ng.geom.vector.Vec2):null);
var G__15309_15593 = (cljs.core.truth_(G__15320_15591)?v1.buf:null);
var G__15310_15594 = (cljs.core.truth_(G__15321_15592)?v2.buf:null);
var G__15314_15595 = (cljs.core.truth_(G__15320_15591)?(G__15309_15593[(0)]):((G__15318)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15315_15596 = (cljs.core.truth_(G__15320_15591)?(G__15309_15593[(1)]):((G__15318)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15316_15597 = (cljs.core.truth_(G__15321_15592)?(G__15310_15594[(0)]):((G__15319)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15317_15598 = (cljs.core.truth_(G__15321_15592)?(G__15310_15594[(1)]):((G__15319)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__15311[(0)] = ((G__15312 + G__15314_15595) + G__15316_15597));

(G__15311[(1)] = ((G__15313 + G__15315_15596) + G__15317_15598));
}

return (new thi.ng.geom.vector.Vec2(G__15311,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14781__auto__ = (new Float32Array((2)));
var G__15322_15599 = self__.buf;
(dest__14781__auto__[(0)] = (function (){var G__15323 = (G__15322_15599[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15323) : thi.ng.math.core.abs_STAR_.call(null,G__15323));
})());

(dest__14781__auto__[(1)] = (function (){var G__15324 = (G__15322_15599[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15324) : thi.ng.math.core.abs_STAR_.call(null,G__15324));
})());

return (new thi.ng.geom.vector.Vec2(dest__14781__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14822__auto__ = (new Float32Array((2)));
var G__15064_15600 = (a instanceof thi.ng.geom.vector.Vec2);
var G__15065_15601 = (b instanceof thi.ng.geom.vector.Vec2);
var G__15066_15602 = ((!(G__15064_15600))?typeof a === 'number':null);
var G__15067_15603 = ((!(G__15065_15601))?typeof b === 'number':null);
var G__15055_15604 = self__.buf;
var G__15056_15605 = ((G__15064_15600)?a.buf:null);
var G__15057_15606 = ((G__15065_15601)?b.buf:null);
var G__15058_15607 = (G__15055_15604[(0)]);
var G__15059_15608 = (G__15055_15604[(1)]);
var G__15060_15609 = ((G__15064_15600)?(G__15056_15605[(0)]):(cljs.core.truth_(G__15066_15602)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15061_15610 = ((G__15064_15600)?(G__15056_15605[(1)]):(cljs.core.truth_(G__15066_15602)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15062_15611 = ((G__15065_15601)?(G__15057_15606[(0)]):(cljs.core.truth_(G__15067_15603)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15063_15612 = ((G__15065_15601)?(G__15057_15606[(1)]):(cljs.core.truth_(G__15067_15603)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__14822__auto__[(0)] = ((G__15058_15607 - G__15060_15609) * G__15062_15611));

(dest__14822__auto__[(1)] = ((G__15059_15608 - G__15061_15610) * G__15063_15612));

return (new thi.ng.geom.vector.Vec2(dest__14822__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$buf,cljs.core.with_meta(cljs.core.cst$sym$_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$_meta], null);
});

thi.ng.geom.vector.Vec2.cljs$lang$type = true;

thi.ng.geom.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec2";

thi.ng.geom.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write(writer__8042__auto__,"thi.ng.geom.vector/Vec2");
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
return thi.ng.geom.core.transform_vector(m,___$1);
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
var G__15614_16107 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15615_16108 = v.buf;
(self__.buf[(0)] = ((G__15614_16107[(0)]) - (G__15615_16108[(0)])));

(self__.buf[(1)] = ((G__15614_16107[(1)]) - (G__15615_16108[(1)])));

(self__.buf[(2)] = ((G__15614_16107[(2)]) - (G__15615_16108[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15614_16107[(0)]) - v));

(self__.buf[(1)] = ((G__15614_16107[(1)]) - v));

(self__.buf[(2)] = ((G__15614_16107[(2)]) - v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15614_16107[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15614_16107[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__15614_16107[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15628_16109 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__15629_16110 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15630_16111 = ((!(G__15628_16109))?typeof v1 === 'number':null);
var G__15631_16112 = ((!(G__15629_16110))?typeof v2 === 'number':null);
var G__15616_16113 = self__.buf;
var G__15617_16114 = ((G__15628_16109)?v1.buf:null);
var G__15618_16115 = ((G__15629_16110)?v2.buf:null);
var G__15619_16116 = (G__15616_16113[(0)]);
var G__15620_16117 = (G__15616_16113[(1)]);
var G__15621_16118 = (G__15616_16113[(2)]);
var G__15622_16119 = ((G__15628_16109)?(G__15617_16114[(0)]):(cljs.core.truth_(G__15630_16111)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15623_16120 = ((G__15628_16109)?(G__15617_16114[(1)]):(cljs.core.truth_(G__15630_16111)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15624_16121 = ((G__15628_16109)?(G__15617_16114[(2)]):(cljs.core.truth_(G__15630_16111)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__15625_16122 = ((G__15629_16110)?(G__15618_16115[(0)]):(cljs.core.truth_(G__15631_16112)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15626_16123 = ((G__15629_16110)?(G__15618_16115[(1)]):(cljs.core.truth_(G__15631_16112)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15627_16124 = ((G__15629_16110)?(G__15618_16115[(2)]):(cljs.core.truth_(G__15631_16112)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__15619_16116 - G__15622_16119) - G__15625_16122));

(self__.buf[(1)] = ((G__15620_16117 - G__15623_16120) - G__15626_16123));

(self__.buf[(2)] = ((G__15621_16118 - G__15624_16121) - G__15627_16124));

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
var G__15632_16125 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15633_16126 = v.buf;
(self__.buf[(0)] = ((G__15632_16125[(0)]) * (G__15633_16126[(0)])));

(self__.buf[(1)] = ((G__15632_16125[(1)]) * (G__15633_16126[(1)])));

(self__.buf[(2)] = ((G__15632_16125[(2)]) * (G__15633_16126[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15632_16125[(0)]) * v));

(self__.buf[(1)] = ((G__15632_16125[(1)]) * v));

(self__.buf[(2)] = ((G__15632_16125[(2)]) * v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15632_16125[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15632_16125[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__15632_16125[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15646_16127 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__15647_16128 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15648_16129 = ((!(G__15646_16127))?typeof v1 === 'number':null);
var G__15649_16130 = ((!(G__15647_16128))?typeof v2 === 'number':null);
var G__15634_16131 = self__.buf;
var G__15635_16132 = ((G__15646_16127)?v1.buf:null);
var G__15636_16133 = ((G__15647_16128)?v2.buf:null);
var G__15637_16134 = (G__15634_16131[(0)]);
var G__15638_16135 = (G__15634_16131[(1)]);
var G__15639_16136 = (G__15634_16131[(2)]);
var G__15640_16137 = ((G__15646_16127)?(G__15635_16132[(0)]):(cljs.core.truth_(G__15648_16129)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15641_16138 = ((G__15646_16127)?(G__15635_16132[(1)]):(cljs.core.truth_(G__15648_16129)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15642_16139 = ((G__15646_16127)?(G__15635_16132[(2)]):(cljs.core.truth_(G__15648_16129)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__15643_16140 = ((G__15647_16128)?(G__15636_16133[(0)]):(cljs.core.truth_(G__15649_16130)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15644_16141 = ((G__15647_16128)?(G__15636_16133[(1)]):(cljs.core.truth_(G__15649_16130)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15645_16142 = ((G__15647_16128)?(G__15636_16133[(2)]):(cljs.core.truth_(G__15649_16130)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__15637_16134 * G__15640_16137) * G__15643_16140));

(self__.buf[(1)] = ((G__15638_16135 * G__15641_16138) * G__15644_16141));

(self__.buf[(2)] = ((G__15639_16136 * G__15642_16139) * G__15645_16142));

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
var G__15662_16143 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15663_16144 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15664_16145 = ((!(G__15662_16143))?typeof a === 'number':null);
var G__15665_16146 = ((!(G__15663_16144))?typeof b === 'number':null);
var G__15650_16147 = self__.buf;
var G__15651_16148 = ((G__15662_16143)?a.buf:null);
var G__15652_16149 = ((G__15663_16144)?b.buf:null);
var G__15653_16150 = (G__15650_16147[(0)]);
var G__15654_16151 = (G__15650_16147[(1)]);
var G__15655_16152 = (G__15650_16147[(2)]);
var G__15656_16153 = ((G__15662_16143)?(G__15651_16148[(0)]):(cljs.core.truth_(G__15664_16145)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15657_16154 = ((G__15662_16143)?(G__15651_16148[(1)]):(cljs.core.truth_(G__15664_16145)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15658_16155 = ((G__15662_16143)?(G__15651_16148[(2)]):(cljs.core.truth_(G__15664_16145)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__15659_16156 = ((G__15663_16144)?(G__15652_16149[(0)]):(cljs.core.truth_(G__15665_16146)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15660_16157 = ((G__15663_16144)?(G__15652_16149[(1)]):(cljs.core.truth_(G__15665_16146)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__15661_16158 = ((G__15663_16144)?(G__15652_16149[(2)]):(cljs.core.truth_(G__15665_16146)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__15653_16150 - G__15656_16153) * G__15659_16156));

(self__.buf[(1)] = ((G__15654_16151 - G__15657_16154) * G__15660_16157));

(self__.buf[(2)] = ((G__15655_16152 - G__15658_16155) * G__15661_16158));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15678_16159 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15679_16160 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15680_16161 = ((!(G__15678_16159))?typeof a === 'number':null);
var G__15681_16162 = ((!(G__15679_16160))?typeof b === 'number':null);
var G__15666_16163 = self__.buf;
var G__15667_16164 = ((G__15678_16159)?a.buf:null);
var G__15668_16165 = ((G__15679_16160)?b.buf:null);
var G__15669_16166 = (G__15666_16163[(0)]);
var G__15670_16167 = (G__15666_16163[(1)]);
var G__15671_16168 = (G__15666_16163[(2)]);
var G__15672_16169 = ((G__15678_16159)?(G__15667_16164[(0)]):(cljs.core.truth_(G__15680_16161)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15673_16170 = ((G__15678_16159)?(G__15667_16164[(1)]):(cljs.core.truth_(G__15680_16161)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15674_16171 = ((G__15678_16159)?(G__15667_16164[(2)]):(cljs.core.truth_(G__15680_16161)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__15675_16172 = ((G__15679_16160)?(G__15668_16165[(0)]):(cljs.core.truth_(G__15681_16162)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15676_16173 = ((G__15679_16160)?(G__15668_16165[(1)]):(cljs.core.truth_(G__15681_16162)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__15677_16174 = ((G__15679_16160)?(G__15668_16165[(2)]):(cljs.core.truth_(G__15681_16162)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__15669_16166 * G__15672_16169) - G__15675_16172));

(self__.buf[(1)] = ((G__15670_16167 * G__15673_16170) - G__15676_16173));

(self__.buf[(2)] = ((G__15671_16168 * G__15674_16171) - G__15677_16174));

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__15682 = (self__.buf[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15682) : thi.ng.math.core.abs_STAR_.call(null,G__15682));
})());

(self__.buf[(1)] = (function (){var G__15683 = (self__.buf[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15683) : thi.ng.math.core.abs_STAR_.call(null,G__15683));
})());

(self__.buf[(2)] = (function (){var G__15684 = (self__.buf[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__15684) : thi.ng.math.core.abs_STAR_.call(null,G__15684));
})());

self__._hash = null;

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__15697_16175 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15698_16176 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15699_16177 = ((!(G__15697_16175))?typeof a === 'number':null);
var G__15700_16178 = ((!(G__15698_16176))?typeof b === 'number':null);
var G__15685_16179 = self__.buf;
var G__15686_16180 = ((G__15697_16175)?a.buf:null);
var G__15687_16181 = ((G__15698_16176)?b.buf:null);
var G__15688_16182 = (G__15685_16179[(0)]);
var G__15689_16183 = (G__15685_16179[(1)]);
var G__15690_16184 = (G__15685_16179[(2)]);
var G__15691_16185 = ((G__15697_16175)?(G__15686_16180[(0)]):(cljs.core.truth_(G__15699_16177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15692_16186 = ((G__15697_16175)?(G__15686_16180[(1)]):(cljs.core.truth_(G__15699_16177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15693_16187 = ((G__15697_16175)?(G__15686_16180[(2)]):(cljs.core.truth_(G__15699_16177)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__15694_16188 = ((G__15698_16176)?(G__15687_16181[(0)]):(cljs.core.truth_(G__15700_16178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15695_16189 = ((G__15698_16176)?(G__15687_16181[(1)]):(cljs.core.truth_(G__15700_16178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__15696_16190 = ((G__15698_16176)?(G__15687_16181[(2)]):(cljs.core.truth_(G__15700_16178)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__15688_16182 * G__15691_16185) + G__15694_16188));

(self__.buf[(1)] = ((G__15689_16183 * G__15692_16186) + G__15695_16189));

(self__.buf[(2)] = ((G__15690_16184 * G__15693_16187) + G__15696_16190));

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
var G__15701_16191 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15702_16192 = v.buf;
(self__.buf[(0)] = ((G__15701_16191[(0)]) / (G__15702_16192[(0)])));

(self__.buf[(1)] = ((G__15701_16191[(1)]) / (G__15702_16192[(1)])));

(self__.buf[(2)] = ((G__15701_16191[(2)]) / (G__15702_16192[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15701_16191[(0)]) / v));

(self__.buf[(1)] = ((G__15701_16191[(1)]) / v));

(self__.buf[(2)] = ((G__15701_16191[(2)]) / v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15701_16191[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15701_16191[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__15701_16191[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15715_16193 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__15716_16194 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15717_16195 = ((!(G__15715_16193))?typeof v1 === 'number':null);
var G__15718_16196 = ((!(G__15716_16194))?typeof v2 === 'number':null);
var G__15703_16197 = self__.buf;
var G__15704_16198 = ((G__15715_16193)?v1.buf:null);
var G__15705_16199 = ((G__15716_16194)?v2.buf:null);
var G__15706_16200 = (G__15703_16197[(0)]);
var G__15707_16201 = (G__15703_16197[(1)]);
var G__15708_16202 = (G__15703_16197[(2)]);
var G__15709_16203 = ((G__15715_16193)?(G__15704_16198[(0)]):(cljs.core.truth_(G__15717_16195)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15710_16204 = ((G__15715_16193)?(G__15704_16198[(1)]):(cljs.core.truth_(G__15717_16195)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15711_16205 = ((G__15715_16193)?(G__15704_16198[(2)]):(cljs.core.truth_(G__15717_16195)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__15712_16206 = ((G__15716_16194)?(G__15705_16199[(0)]):(cljs.core.truth_(G__15718_16196)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15713_16207 = ((G__15716_16194)?(G__15705_16199[(1)]):(cljs.core.truth_(G__15718_16196)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15714_16208 = ((G__15716_16194)?(G__15705_16199[(2)]):(cljs.core.truth_(G__15718_16196)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__15706_16200 / G__15709_16203) / G__15712_16206));

(self__.buf[(1)] = ((G__15707_16201 / G__15710_16204) / G__15713_16207));

(self__.buf[(2)] = ((G__15708_16202 / G__15711_16205) / G__15714_16208));

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
var G__15719_16209 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15720_16210 = v.buf;
(self__.buf[(0)] = ((G__15719_16209[(0)]) + (G__15720_16210[(0)])));

(self__.buf[(1)] = ((G__15719_16209[(1)]) + (G__15720_16210[(1)])));

(self__.buf[(2)] = ((G__15719_16209[(2)]) + (G__15720_16210[(2)])));

self__._hash = null;
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__15719_16209[(0)]) + v));

(self__.buf[(1)] = ((G__15719_16209[(1)]) + v));

(self__.buf[(2)] = ((G__15719_16209[(2)]) + v));

self__._hash = null;
} else {
(self__.buf[(0)] = ((G__15719_16209[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__15719_16209[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__15719_16209[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

self__._hash = null;
}
}

return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__15733_16211 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__15734_16212 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15735_16213 = ((!(G__15733_16211))?typeof v1 === 'number':null);
var G__15736_16214 = ((!(G__15734_16212))?typeof v2 === 'number':null);
var G__15721_16215 = self__.buf;
var G__15722_16216 = ((G__15733_16211)?v1.buf:null);
var G__15723_16217 = ((G__15734_16212)?v2.buf:null);
var G__15724_16218 = (G__15721_16215[(0)]);
var G__15725_16219 = (G__15721_16215[(1)]);
var G__15726_16220 = (G__15721_16215[(2)]);
var G__15727_16221 = ((G__15733_16211)?(G__15722_16216[(0)]):(cljs.core.truth_(G__15735_16213)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__15728_16222 = ((G__15733_16211)?(G__15722_16216[(1)]):(cljs.core.truth_(G__15735_16213)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__15729_16223 = ((G__15733_16211)?(G__15722_16216[(2)]):(cljs.core.truth_(G__15735_16213)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__15730_16224 = ((G__15734_16212)?(G__15723_16217[(0)]):(cljs.core.truth_(G__15736_16214)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15731_16225 = ((G__15734_16212)?(G__15723_16217[(1)]):(cljs.core.truth_(G__15736_16214)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15732_16226 = ((G__15734_16212)?(G__15723_16217[(2)]):(cljs.core.truth_(G__15736_16214)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__15724_16218 + G__15727_16221) + G__15730_16224));

(self__.buf[(1)] = ((G__15725_16219 + G__15728_16222) + G__15731_16225));

(self__.buf[(2)] = ((G__15726_16220 + G__15729_16223) + G__15732_16226));

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
var G__15749_16227 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15750_16228 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15751_16229 = ((!(G__15749_16227))?typeof a === 'number':null);
var G__15752_16230 = ((!(G__15750_16228))?typeof b === 'number':null);
var G__15737_16231 = self__.buf;
var G__15738_16232 = ((G__15749_16227)?a.buf:null);
var G__15739_16233 = ((G__15750_16228)?b.buf:null);
var G__15740_16234 = (G__15737_16231[(0)]);
var G__15741_16235 = (G__15737_16231[(1)]);
var G__15742_16236 = (G__15737_16231[(2)]);
var G__15743_16237 = ((G__15749_16227)?(G__15738_16232[(0)]):(cljs.core.truth_(G__15751_16229)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15744_16238 = ((G__15749_16227)?(G__15738_16232[(1)]):(cljs.core.truth_(G__15751_16229)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15745_16239 = ((G__15749_16227)?(G__15738_16232[(2)]):(cljs.core.truth_(G__15751_16229)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__15746_16240 = ((G__15750_16228)?(G__15739_16233[(0)]):(cljs.core.truth_(G__15752_16230)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15747_16241 = ((G__15750_16228)?(G__15739_16233[(1)]):(cljs.core.truth_(G__15752_16230)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__15748_16242 = ((G__15750_16228)?(G__15739_16233[(2)]):(cljs.core.truth_(G__15752_16230)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__15740_16234 + G__15743_16237) * G__15746_16240));

(self__.buf[(1)] = ((G__15741_16235 + G__15744_16238) * G__15747_16241));

(self__.buf[(2)] = ((G__15742_16236 + G__15745_16239) * G__15748_16242));

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
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ICrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15753_16243 = self__.buf;
var G__15755_16244 = (G__15753_16243[(0)]);
var G__15756_16245 = (G__15753_16243[(1)]);
var G__15757_16246 = (G__15753_16243[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15754_16247 = v.buf;
var G__15758_16248 = (G__15754_16247[(0)]);
var G__15759_16249 = (G__15754_16247[(1)]);
var G__15760_16250 = (G__15754_16247[(2)]);
(b[(0)] = ((G__15756_16245 * G__15760_16250) - (G__15759_16249 * G__15757_16246)));

(b[(1)] = ((G__15757_16246 * G__15758_16248) - (G__15760_16250 * G__15755_16244)));

(b[(2)] = ((G__15755_16244 * G__15759_16249) - (G__15758_16248 * G__15756_16245)));
} else {
var G__15758_16251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15759_16252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__15760_16253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__15756_16245 * G__15760_16253) - (G__15759_16252 * G__15757_16246)));

(b[(1)] = ((G__15757_16246 * G__15758_16251) - (G__15760_16253 * G__15755_16244)));

(b[(2)] = ((G__15755_16244 * G__15759_16252) - (G__15758_16251 * G__15756_16245)));
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
return thi.ng.xerror.core.key_error_BANG_(n);
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
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#vec3 ["," ","]",opts,cljs.core.seq(___$1));
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
var G__15777 = self__.buf;
var G__15779 = (G__15777[(0)]);
var G__15780 = (G__15777[(1)]);
var G__15781 = (G__15777[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15778 = v.buf;
var G__15782 = (G__15778[(0)]);
var G__15783 = (G__15778[(1)]);
var G__15784 = (G__15778[(2)]);
var d = ((((G__15779 * G__15782) + (G__15780 * G__15783)) + (G__15781 * G__15784)) * 2.0);
(b[(0)] = ((G__15782 * d) - G__15779));

(b[(1)] = ((G__15783 * d) - G__15780));

(b[(2)] = ((G__15784 * d) - G__15781));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__15782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__15784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__15779 * G__15782) + (G__15780 * G__15783)) + (G__15781 * G__15784)) * 2.0);
(b[(0)] = ((G__15782 * d) - G__15779));

(b[(1)] = ((G__15783 * d) - G__15780));

(b[(2)] = ((G__15784 * d) - G__15781));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
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
var G__15785 = thi.ng.geom.core.dist_squared(___$1,v);
return Math.sqrt(G__15785);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__15786 = self__.buf;
var G__15788 = (G__15786[(0)]);
var G__15789 = (G__15786[(1)]);
var G__15790 = (G__15786[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15787 = v.buf;
var G__15791 = (G__15787[(0)]);
var G__15792 = (G__15787[(1)]);
var G__15793 = (G__15787[(2)]);
var dx = (G__15788 - G__15791);
var dy = (G__15789 - G__15792);
var dz = (G__15790 - G__15793);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__15791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__15788 - G__15791);
var dy = (G__15789 - G__15792);
var dz = (G__15790 - G__15793);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.rotate_z(___$1,theta);
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
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1(___$1);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (function (){var G__15794 = cljs.core.cst$kw$zyx;
return (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(G__15794) : thi.ng.geom.vector.swizzle3_fns.call(null,G__15794));
})().call(null,___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$ILimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((thi.ng.math.core.mag_squared(___$1) > (len * len))){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(___$1,len);
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__15795_16254 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15796_16255 = v.buf;
(dest__14916__auto__[(0)] = ((G__15795_16254[(0)]) * (G__15796_16255[(0)])));

(dest__14916__auto__[(1)] = ((G__15795_16254[(1)]) * (G__15796_16255[(1)])));

(dest__14916__auto__[(2)] = ((G__15795_16254[(2)]) * (G__15796_16255[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__15795_16254[(0)]) * v));

(dest__14916__auto__[(1)] = ((G__15795_16254[(1)]) * v));

(dest__14916__auto__[(2)] = ((G__15795_16254[(2)]) * v));
} else {
(dest__14916__auto__[(0)] = ((G__15795_16254[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__15795_16254[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__15795_16254[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__7389__auto__ = self__._hash;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return ___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(___$1,v,thi.ng.math.core._STAR_eps_STAR_);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((3) === cljs.core.count(v))){
var G__15797 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15798 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(0)]),(G__15798[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(1)]),(G__15798[(1)]),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(2)]),(G__15798[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((G__15797[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
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
return (cljs.core.sequential_QMARK_(o)) && (((3) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2))));
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.vector.Vec3((thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__15799 = (buf_SINGLEQUOTE_[(0)]);
var G__15800 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__15799,G__15800) : f2.call(null,G__15799,G__15800));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__15801 = (buf_SINGLEQUOTE_[(1)]);
var G__15802 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__15801,G__15802) : f2.call(null,G__15801,G__15802));
})());

(buf_SINGLEQUOTE_[(2)] = (function (){var G__15803 = (buf_SINGLEQUOTE_[(2)]);
var G__15804 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__15803,G__15804) : f2.call(null,G__15803,G__15804));
})());

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
var G__15805 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15806 = v.buf;
return ((((G__15805[(0)]) * (G__15806[(0)])) + ((G__15805[(1)]) * (G__15806[(1)]))) + ((G__15805[(2)]) * (G__15806[(2)])));
} else {
return ((((G__15805[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__15805[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__15805[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__15807 = (self__.buf[(0)]);
var G__15808 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15807,G__15808) : f.call(null,G__15807,G__15808));
})();
if(cljs.core.reduced_QMARK_(acc)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc) : cljs.core.deref.call(null,acc));
} else {
var acc__$1 = (function (){var G__15809 = acc;
var G__15810 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15809,G__15810) : f.call(null,G__15809,G__15810));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc__$1) : cljs.core.deref.call(null,acc__$1));
} else {
return acc__$1;
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__15811 = start;
var G__15812 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15811,G__15812) : f.call(null,G__15811,G__15812));
})();
if(cljs.core.reduced_QMARK_(acc)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc) : cljs.core.deref.call(null,acc));
} else {
var acc__$1 = (function (){var G__15813 = acc;
var G__15814 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15813,G__15814) : f.call(null,G__15813,G__15814));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc__$1) : cljs.core.deref.call(null,acc__$1));
} else {
var acc__$2 = (function (){var G__15815 = acc__$1;
var G__15816 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15815,G__15816) : f.call(null,G__15815,G__15816));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc__$2) : cljs.core.deref.call(null,acc__$2));
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
var dest__14916__auto__ = (new Float32Array((3)));
var G__15817_16256 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15818_16257 = v.buf;
(dest__14916__auto__[(0)] = ((G__15817_16256[(0)]) + (G__15818_16257[(0)])));

(dest__14916__auto__[(1)] = ((G__15817_16256[(1)]) + (G__15818_16257[(1)])));

(dest__14916__auto__[(2)] = ((G__15817_16256[(2)]) + (G__15818_16257[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__15817_16256[(0)]) + v));

(dest__14916__auto__[(1)] = ((G__15817_16256[(1)]) + v));

(dest__14916__auto__[(2)] = ((G__15817_16256[(2)]) + v));
} else {
(dest__14916__auto__[(0)] = ((G__15817_16256[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__15817_16256[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__15817_16256[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.heading_xy(___$1);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__15819 = (self__.buf[(1)]);
var G__15820 = (self__.buf[(0)]);
return Math.atan2(G__15819,G__15820);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__15821 = (self__.buf[(2)]);
var G__15822 = (self__.buf[(0)]);
return Math.atan2(G__15821,G__15822);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = (function (){var G__15823 = (self__.buf[(2)]);
var G__15824 = (self__.buf[(1)]);
return Math.atan2(G__15823,G__15824);
})();
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.vector.Vec3))?v:(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(v) : thi.ng.geom.vector.vec3.call(null,v)));
var G__15825 = thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(v__$1));
return Math.acos(G__15825);
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
var G__15826_16258 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15827_16259 = v.buf;
(b[(0)] = (((G__15826_16258[(0)]) + (G__15827_16259[(0)])) * 0.5));

(b[(1)] = (((G__15826_16258[(1)]) + (G__15827_16259[(1)])) * 0.5));

(b[(2)] = (((G__15826_16258[(2)]) + (G__15827_16259[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__15826_16258[(0)]) + v) * 0.5));

(b[(1)] = (((G__15826_16258[(1)]) + v) * 0.5));

(b[(2)] = (((G__15826_16258[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__15826_16258[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__15826_16258[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__15826_16258[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,v,t){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15840_16260 = (v instanceof thi.ng.geom.vector.Vec3);
var G__15841_16261 = (t instanceof thi.ng.geom.vector.Vec3);
var G__15842_16262 = ((!(G__15840_16260))?typeof v === 'number':null);
var G__15843_16263 = ((!(G__15841_16261))?typeof t === 'number':null);
var G__15828_16264 = self__.buf;
var G__15829_16265 = ((G__15840_16260)?v.buf:null);
var G__15830_16266 = ((G__15841_16261)?t.buf:null);
var G__15831_16267 = (G__15828_16264[(0)]);
var G__15832_16268 = (G__15828_16264[(1)]);
var G__15833_16269 = (G__15828_16264[(2)]);
var G__15834_16270 = ((G__15840_16260)?(G__15829_16265[(0)]):(cljs.core.truth_(G__15842_16262)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15835_16271 = ((G__15840_16260)?(G__15829_16265[(1)]):(cljs.core.truth_(G__15842_16262)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15836_16272 = ((G__15840_16260)?(G__15829_16265[(2)]):(cljs.core.truth_(G__15842_16262)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__15837_16273 = ((G__15841_16261)?(G__15830_16266[(0)]):(cljs.core.truth_(G__15843_16263)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__15838_16274 = ((G__15841_16261)?(G__15830_16266[(1)]):(cljs.core.truth_(G__15843_16263)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__15839_16275 = ((G__15841_16261)?(G__15830_16266[(2)]):(cljs.core.truth_(G__15843_16263)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (((G__15834_16270 - G__15831_16267) * G__15837_16273) + G__15831_16267));

(b[(1)] = (((G__15835_16271 - G__15832_16268) * G__15838_16274) + G__15832_16268));

(b[(2)] = (((G__15836_16272 - G__15833_16269) * G__15839_16275) + G__15833_16269));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__15856_16276 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15857_16277 = (c instanceof thi.ng.geom.vector.Vec3);
var G__15858_16278 = ((!(G__15856_16276))?typeof b === 'number':null);
var G__15859_16279 = ((!(G__15857_16277))?typeof c === 'number':null);
var G__15844_16280 = self__.buf;
var G__15845_16281 = ((G__15856_16276)?b.buf:null);
var G__15846_16282 = ((G__15857_16277)?c.buf:null);
var G__15847_16283 = (G__15844_16280[(0)]);
var G__15848_16284 = (G__15844_16280[(1)]);
var G__15849_16285 = (G__15844_16280[(2)]);
var G__15850_16286 = ((G__15856_16276)?(G__15845_16281[(0)]):(cljs.core.truth_(G__15858_16278)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15851_16287 = ((G__15856_16276)?(G__15845_16281[(1)]):(cljs.core.truth_(G__15858_16278)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__15852_16288 = ((G__15856_16276)?(G__15845_16281[(2)]):(cljs.core.truth_(G__15858_16278)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__15853_16289 = ((G__15857_16277)?(G__15846_16282[(0)]):(cljs.core.truth_(G__15859_16279)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__15854_16290 = ((G__15857_16277)?(G__15846_16282[(1)]):(cljs.core.truth_(G__15859_16279)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__15855_16291 = ((G__15857_16277)?(G__15846_16282[(2)]):(cljs.core.truth_(G__15859_16279)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_16292 = (((G__15850_16286 - G__15847_16283) * u) + G__15847_16283);
var y1_16293 = (((G__15851_16287 - G__15848_16284) * u) + G__15848_16284);
var z1_16294 = (((G__15852_16288 - G__15849_16285) * u) + G__15849_16285);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__15853_16289) * u) + G__15853_16289) - x1_16292) * v) + x1_16292));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__15854_16290) * u) + G__15854_16290) - y1_16293) * v) + y1_16293));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__15855_16291) * u) + G__15855_16291) - z1_16294) * v) + z1_16294));

return (new thi.ng.geom.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$mix_with$arity$4 = (function (_,v,t,f){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15872_16295 = (v instanceof thi.ng.geom.vector.Vec3);
var G__15873_16296 = (t instanceof thi.ng.geom.vector.Vec3);
var G__15874_16297 = ((!(G__15872_16295))?typeof v === 'number':null);
var G__15875_16298 = ((!(G__15873_16296))?typeof t === 'number':null);
var G__15860_16299 = self__.buf;
var G__15861_16300 = ((G__15872_16295)?v.buf:null);
var G__15862_16301 = ((G__15873_16296)?t.buf:null);
var G__15863_16302 = (G__15860_16299[(0)]);
var G__15864_16303 = (G__15860_16299[(1)]);
var G__15865_16304 = (G__15860_16299[(2)]);
var G__15866_16305 = ((G__15872_16295)?(G__15861_16300[(0)]):(cljs.core.truth_(G__15874_16297)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15867_16306 = ((G__15872_16295)?(G__15861_16300[(1)]):(cljs.core.truth_(G__15874_16297)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15868_16307 = ((G__15872_16295)?(G__15861_16300[(2)]):(cljs.core.truth_(G__15874_16297)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__15869_16308 = ((G__15873_16296)?(G__15862_16301[(0)]):(cljs.core.truth_(G__15875_16298)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(0),0.0)));
var G__15870_16309 = ((G__15873_16296)?(G__15862_16301[(1)]):(cljs.core.truth_(G__15875_16298)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(1),0.0)));
var G__15871_16310 = ((G__15873_16296)?(G__15862_16301[(2)]):(cljs.core.truth_(G__15875_16298)?t:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,(2),0.0)));
(b[(0)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15863_16302,G__15866_16305,G__15869_16308) : f.call(null,G__15863_16302,G__15866_16305,G__15869_16308)));

(b[(1)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15864_16303,G__15867_16306,G__15870_16309) : f.call(null,G__15864_16303,G__15867_16306,G__15870_16309)));

(b[(2)] = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15865_16304,G__15868_16307,G__15871_16310) : f.call(null,G__15865_16304,G__15868_16307,G__15871_16310)));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$step$arity$2 = (function (_,e){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15876_16311 = self__.buf;
if((e instanceof thi.ng.geom.vector.Vec3)){
var G__15877_16312 = e.buf;
(b[(0)] = thi.ng.math.core.step_STAR_((G__15877_16312[(0)]),(G__15876_16311[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_((G__15877_16312[(1)]),(G__15876_16311[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_((G__15877_16312[(2)]),(G__15876_16311[(2)])));
} else {
if(typeof e === 'number'){
(b[(0)] = thi.ng.math.core.step_STAR_(e,(G__15876_16311[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(e,(G__15876_16311[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(e,(G__15876_16311[(2)])));
} else {
(b[(0)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(0),0.0),(G__15876_16311[(0)])));

(b[(1)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(1),0.0),(G__15876_16311[(1)])));

(b[(2)] = thi.ng.math.core.step_STAR_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e,(2),0.0),(G__15876_16311[(2)])));
}
}

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IInterpolate$smoothstep$arity$3 = (function (_,e1,e2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__15890_16313 = (e1 instanceof thi.ng.geom.vector.Vec3);
var G__15891_16314 = (e2 instanceof thi.ng.geom.vector.Vec3);
var G__15892_16315 = ((!(G__15890_16313))?typeof e1 === 'number':null);
var G__15893_16316 = ((!(G__15891_16314))?typeof e2 === 'number':null);
var G__15878_16317 = self__.buf;
var G__15879_16318 = ((G__15890_16313)?e1.buf:null);
var G__15880_16319 = ((G__15891_16314)?e2.buf:null);
var G__15881_16320 = (G__15878_16317[(0)]);
var G__15882_16321 = (G__15878_16317[(1)]);
var G__15883_16322 = (G__15878_16317[(2)]);
var G__15884_16323 = ((G__15890_16313)?(G__15879_16318[(0)]):(cljs.core.truth_(G__15892_16315)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(0),0.0)));
var G__15885_16324 = ((G__15890_16313)?(G__15879_16318[(1)]):(cljs.core.truth_(G__15892_16315)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(1),0.0)));
var G__15886_16325 = ((G__15890_16313)?(G__15879_16318[(2)]):(cljs.core.truth_(G__15892_16315)?e1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e1,(2),0.0)));
var G__15887_16326 = ((G__15891_16314)?(G__15880_16319[(0)]):(cljs.core.truth_(G__15893_16316)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(0),0.0)));
var G__15888_16327 = ((G__15891_16314)?(G__15880_16319[(1)]):(cljs.core.truth_(G__15893_16316)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(1),0.0)));
var G__15889_16328 = ((G__15891_16314)?(G__15880_16319[(2)]):(cljs.core.truth_(G__15893_16316)?e2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(e2,(2),0.0)));
(b[(0)] = thi.ng.math.core.smoothstep_STAR_(G__15884_16323,G__15887_16326,G__15881_16320));

(b[(1)] = thi.ng.math.core.smoothstep_STAR_(G__15885_16324,G__15888_16327,G__15882_16321));

(b[(2)] = thi.ng.math.core.smoothstep_STAR_(G__15886_16325,G__15889_16328,G__15883_16322));

return (new thi.ng.geom.vector.Vec2(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return ((k >= (0))) && ((k <= (2)));
} else {
if(cljs.core.truth_((thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k)))){
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.vector.Vec3((function (){var G__15894 = self__.buf;
var G__15895 = (new Float32Array(self__.buf));
var G__15896 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__15897 = k;
var G__15898 = v;
return (thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__15894,G__15895,G__15896,G__15897,G__15898) : thi.ng.geom.vector.swizzle_assoc_STAR_.call(null,G__15894,G__15895,G__15896,G__15897,G__15898));
})(),null,self__._meta));
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
var dest__14916__auto__ = (new Float32Array((3)));
var G__15899_16329 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15900_16330 = v.buf;
(dest__14916__auto__[(0)] = (function (){var a__14160__auto__ = (G__15899_16329[(0)]);
var b__14161__auto__ = (G__15900_16330[(0)]);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14160__auto__ = (G__15899_16329[(1)]);
var b__14161__auto__ = (G__15900_16330[(1)]);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14160__auto__ = (G__15899_16329[(2)]);
var b__14161__auto__ = (G__15900_16330[(2)]);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = (function (){var a__14160__auto__ = (G__15899_16329[(0)]);
var b__14161__auto__ = v;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14160__auto__ = (G__15899_16329[(1)]);
var b__14161__auto__ = v;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14160__auto__ = (G__15899_16329[(2)]);
var b__14161__auto__ = v;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
} else {
(dest__14916__auto__[(0)] = (function (){var a__14160__auto__ = (G__15899_16329[(0)]);
var b__14161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14160__auto__ = (G__15899_16329[(1)]);
var b__14161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14160__auto__ = (G__15899_16329[(2)]);
var b__14161__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__15913_16331 = (v instanceof thi.ng.geom.vector.Vec3);
var G__15914_16332 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15915_16333 = ((!(G__15913_16331))?typeof v === 'number':null);
var G__15916_16334 = ((!(G__15914_16332))?typeof v2 === 'number':null);
var G__15901_16335 = self__.buf;
var G__15902_16336 = ((G__15913_16331)?v.buf:null);
var G__15903_16337 = ((G__15914_16332)?v2.buf:null);
var G__15904_16338 = (G__15901_16335[(0)]);
var G__15905_16339 = (G__15901_16335[(1)]);
var G__15906_16340 = (G__15901_16335[(2)]);
var G__15907_16341 = ((G__15913_16331)?(G__15902_16336[(0)]):(cljs.core.truth_(G__15915_16333)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15908_16342 = ((G__15913_16331)?(G__15902_16336[(1)]):(cljs.core.truth_(G__15915_16333)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15909_16343 = ((G__15913_16331)?(G__15902_16336[(2)]):(cljs.core.truth_(G__15915_16333)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__15910_16344 = ((G__15914_16332)?(G__15903_16337[(0)]):(cljs.core.truth_(G__15916_16334)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15911_16345 = ((G__15914_16332)?(G__15903_16337[(1)]):(cljs.core.truth_(G__15916_16334)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15912_16346 = ((G__15914_16332)?(G__15903_16337[(2)]):(cljs.core.truth_(G__15916_16334)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = (function (){var a__14160__auto__ = (function (){var a__14160__auto__ = G__15904_16338;
var b__14161__auto__ = G__15907_16341;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})();
var b__14161__auto__ = G__15910_16344;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14927__auto__[(1)] = (function (){var a__14160__auto__ = (function (){var a__14160__auto__ = G__15905_16339;
var b__14161__auto__ = G__15908_16342;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})();
var b__14161__auto__ = G__15911_16345;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

(dest__14927__auto__[(2)] = (function (){var a__14160__auto__ = (function (){var a__14160__auto__ = G__15906_16340;
var b__14161__auto__ = G__15909_16343;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})();
var b__14161__auto__ = G__15912_16346;
if((a__14160__auto__ <= b__14161__auto__)){
return a__14160__auto__;
} else {
return b__14161__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__15917_16347 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15918_16348 = v.buf;
(dest__14916__auto__[(0)] = (function (){var a__14167__auto__ = (G__15917_16347[(0)]);
var b__14168__auto__ = (G__15918_16348[(0)]);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14167__auto__ = (G__15917_16347[(1)]);
var b__14168__auto__ = (G__15918_16348[(1)]);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14167__auto__ = (G__15917_16347[(2)]);
var b__14168__auto__ = (G__15918_16348[(2)]);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = (function (){var a__14167__auto__ = (G__15917_16347[(0)]);
var b__14168__auto__ = v;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14167__auto__ = (G__15917_16347[(1)]);
var b__14168__auto__ = v;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14167__auto__ = (G__15917_16347[(2)]);
var b__14168__auto__ = v;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
} else {
(dest__14916__auto__[(0)] = (function (){var a__14167__auto__ = (G__15917_16347[(0)]);
var b__14168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(1)] = (function (){var a__14167__auto__ = (G__15917_16347[(1)]);
var b__14168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14916__auto__[(2)] = (function (){var a__14167__auto__ = (G__15917_16347[(2)]);
var b__14168__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__15931_16349 = (v instanceof thi.ng.geom.vector.Vec3);
var G__15932_16350 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__15933_16351 = ((!(G__15931_16349))?typeof v === 'number':null);
var G__15934_16352 = ((!(G__15932_16350))?typeof v2 === 'number':null);
var G__15919_16353 = self__.buf;
var G__15920_16354 = ((G__15931_16349)?v.buf:null);
var G__15921_16355 = ((G__15932_16350)?v2.buf:null);
var G__15922_16356 = (G__15919_16353[(0)]);
var G__15923_16357 = (G__15919_16353[(1)]);
var G__15924_16358 = (G__15919_16353[(2)]);
var G__15925_16359 = ((G__15931_16349)?(G__15920_16354[(0)]):(cljs.core.truth_(G__15933_16351)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__15926_16360 = ((G__15931_16349)?(G__15920_16354[(1)]):(cljs.core.truth_(G__15933_16351)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__15927_16361 = ((G__15931_16349)?(G__15920_16354[(2)]):(cljs.core.truth_(G__15933_16351)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__15928_16362 = ((G__15932_16350)?(G__15921_16355[(0)]):(cljs.core.truth_(G__15934_16352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__15929_16363 = ((G__15932_16350)?(G__15921_16355[(1)]):(cljs.core.truth_(G__15934_16352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__15930_16364 = ((G__15932_16350)?(G__15921_16355[(2)]):(cljs.core.truth_(G__15934_16352)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = (function (){var a__14167__auto__ = (function (){var a__14167__auto__ = G__15922_16356;
var b__14168__auto__ = G__15925_16359;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})();
var b__14168__auto__ = G__15928_16362;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14927__auto__[(1)] = (function (){var a__14167__auto__ = (function (){var a__14167__auto__ = G__15923_16357;
var b__14168__auto__ = G__15926_16360;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})();
var b__14168__auto__ = G__15929_16363;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

(dest__14927__auto__[(2)] = (function (){var a__14167__auto__ = (function (){var a__14167__auto__ = G__15924_16358;
var b__14168__auto__ = G__15927_16361;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})();
var b__14168__auto__ = G__15930_16364;
if((a__14167__auto__ >= b__14168__auto__)){
return a__14167__auto__;
} else {
return b__14168__auto__;
}
})());

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15935 = self__.buf;
var G__15936 = (G__15935[(0)]);
var G__15937 = (G__15935[(1)]);
var G__15938 = (G__15935[(2)]);
(b[(0)] = G__15936);

(b[(1)] = ((G__15937 * c) - (G__15938 * s)));

(b[(2)] = ((G__15937 * s) + (G__15938 * c)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15939 = self__.buf;
var G__15940 = (G__15939[(0)]);
var G__15941 = (G__15939[(1)]);
var G__15942 = (G__15939[(2)]);
(b[(0)] = ((G__15940 * c) + (G__15942 * s)));

(b[(1)] = G__15941);

(b[(2)] = ((G__15942 * c) - (G__15940 * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__15943 = self__.buf;
var G__15944 = (G__15943[(0)]);
var G__15945 = (G__15943[(1)]);
var G__15946 = (G__15943[(2)]);
(b[(0)] = ((G__15944 * c) - (G__15945 * s)));

(b[(1)] = ((G__15944 * s) + (G__15945 * c)));

(b[(2)] = G__15946);

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$geom$core$IRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__15947 = self__.buf;
var G__15949 = (G__15947[(0)]);
var G__15950 = (G__15947[(1)]);
var G__15951 = (G__15947[(2)]);
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15948 = v.buf;
var G__15952 = (G__15948[(0)]);
var G__15953 = (G__15948[(1)]);
var G__15954 = (G__15948[(2)]);
var ux_SINGLEQUOTE_ = (G__15952 * G__15949);
var uy_SINGLEQUOTE_ = (G__15952 * G__15950);
var uz_SINGLEQUOTE_ = (G__15952 * G__15951);
var vx_SINGLEQUOTE_ = (G__15953 * G__15949);
var vy_SINGLEQUOTE_ = (G__15953 * G__15950);
var vz_SINGLEQUOTE_ = (G__15953 * G__15951);
var wx_SINGLEQUOTE_ = (G__15954 * G__15949);
var wy_SINGLEQUOTE_ = (G__15954 * G__15950);
var wz_SINGLEQUOTE_ = (G__15954 * G__15951);
var vx2 = (G__15952 * G__15952);
var vy2 = (G__15953 * G__15953);
var vz2 = (G__15954 * G__15954);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15952) + ((((vy2 + vz2) * G__15949) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15952)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15953) + ((((vx2 + vz2) * G__15950) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15953)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15954) + ((((vx2 + vy2) * G__15951) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15954)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
var G__15952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__15953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__15954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__15952 * G__15949);
var uy_SINGLEQUOTE_ = (G__15952 * G__15950);
var uz_SINGLEQUOTE_ = (G__15952 * G__15951);
var vx_SINGLEQUOTE_ = (G__15953 * G__15949);
var vy_SINGLEQUOTE_ = (G__15953 * G__15950);
var vz_SINGLEQUOTE_ = (G__15953 * G__15951);
var wx_SINGLEQUOTE_ = (G__15954 * G__15949);
var wy_SINGLEQUOTE_ = (G__15954 * G__15950);
var wz_SINGLEQUOTE_ = (G__15954 * G__15951);
var vx2 = (G__15952 * G__15952);
var vy2 = (G__15953 * G__15953);
var vz2 = (G__15954 * G__15954);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__15952) + ((((vy2 + vz2) * G__15949) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15952)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__15953) + ((((vx2 + vz2) * G__15950) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__15953)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__15954) + ((((vx2 + vy2) * G__15951) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__15954)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

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
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
});

thi.ng.geom.vector.Vec3.prototype.call = (function() {
var G__16365 = null;
var G__16365__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
var G__16365__3 = (function (self__,k,nf){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
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
G__16365 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__16365__2.call(this,self__,k);
case 3:
return G__16365__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16365.cljs$core$IFn$_invoke$arity$2 = G__16365__2;
G__16365.cljs$core$IFn$_invoke$arity$3 = G__16365__3;
return G__16365;
})()
;

thi.ng.geom.vector.Vec3.prototype.apply = (function (self__,args15613){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15613)));
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if(((k >= (0))) && ((k <= (2)))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});

thi.ng.geom.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__6751__auto__ = (thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
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
var r = thi.ng.math.core.mag(___$1);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = (function (){var G__15955 = ((self__.buf[(2)]) / r);
return Math.asin(G__15955);
})());

(b[(2)] = (function (){var G__15956 = (self__.buf[(1)]);
var G__15957 = (self__.buf[(0)]);
return Math.atan2(G__15956,G__15957);
})());

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
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15958 = self__.buf;
var G__15959 = (G__15958[(0)]);
var G__15960 = (G__15958[(1)]);
var G__15961 = (G__15958[(2)]);
var l = (function (){var G__15962 = (((G__15959 * G__15959) + (G__15960 * G__15960)) + (G__15961 * G__15961));
return Math.sqrt(G__15962);
})();
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__15959 / l));

(b[(1)] = (G__15960 / l));

(b[(2)] = (G__15961 / l));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__15963 = self__.buf;
var G__15964 = (G__15963[(0)]);
var G__15965 = (G__15963[(1)]);
var G__15966 = (G__15963[(2)]);
var l = (function (){var G__15967 = (((G__15964 * G__15964) + (G__15965 * G__15965)) + (G__15966 * G__15966));
return Math.sqrt(G__15967);
})();
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__15964 * l__$1));

(b[(1)] = (G__15965 * l__$1));

(b[(2)] = (G__15966 * l__$1));

return (new thi.ng.geom.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(1.0,thi.ng.math.core.mag_squared(___$1));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15968 = self__.buf;
var G__15969 = (G__15968[(0)]);
var G__15970 = (G__15968[(1)]);
var G__15971 = (G__15968[(2)]);
var G__15972 = (((G__15969 * G__15969) + (G__15970 * G__15970)) + (G__15971 * G__15971));
return Math.sqrt(G__15972);
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__15973 = self__.buf;
var G__15974 = (G__15973[(0)]);
var G__15975 = (G__15973[(1)]);
var G__15976 = (G__15973[(2)]);
return (((G__15974 * G__15974) + (G__15975 * G__15975)) + (G__15976 * G__15976));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__15989_16366 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15990_16367 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15991_16368 = ((!(G__15989_16366))?typeof a === 'number':null);
var G__15992_16369 = ((!(G__15990_16367))?typeof b === 'number':null);
var G__15977_16370 = self__.buf;
var G__15978_16371 = ((G__15989_16366)?a.buf:null);
var G__15979_16372 = ((G__15990_16367)?b.buf:null);
var G__15980_16373 = (G__15977_16370[(0)]);
var G__15981_16374 = (G__15977_16370[(1)]);
var G__15982_16375 = (G__15977_16370[(2)]);
var G__15983_16376 = ((G__15989_16366)?(G__15978_16371[(0)]):(cljs.core.truth_(G__15991_16368)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__15984_16377 = ((G__15989_16366)?(G__15978_16371[(1)]):(cljs.core.truth_(G__15991_16368)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__15985_16378 = ((G__15989_16366)?(G__15978_16371[(2)]):(cljs.core.truth_(G__15991_16368)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__15986_16379 = ((G__15990_16367)?(G__15979_16372[(0)]):(cljs.core.truth_(G__15992_16369)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__15987_16380 = ((G__15990_16367)?(G__15979_16372[(1)]):(cljs.core.truth_(G__15992_16369)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__15988_16381 = ((G__15990_16367)?(G__15979_16372[(2)]):(cljs.core.truth_(G__15992_16369)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__15980_16373 * G__15983_16376) - G__15986_16379));

(dest__14927__auto__[(1)] = ((G__15981_16374 * G__15984_16377) - G__15987_16380));

(dest__14927__auto__[(2)] = ((G__15982_16375 * G__15985_16378) - G__15988_16381));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__15993_16382 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__15994_16383 = v.buf;
(dest__14916__auto__[(0)] = ((G__15993_16382[(0)]) * (G__15994_16383[(0)])));

(dest__14916__auto__[(1)] = ((G__15993_16382[(1)]) * (G__15994_16383[(1)])));

(dest__14916__auto__[(2)] = ((G__15993_16382[(2)]) * (G__15994_16383[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__15993_16382[(0)]) * v));

(dest__14916__auto__[(1)] = ((G__15993_16382[(1)]) * v));

(dest__14916__auto__[(2)] = ((G__15993_16382[(2)]) * v));
} else {
(dest__14916__auto__[(0)] = ((G__15993_16382[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__15993_16382[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__15993_16382[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16007_16384 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__16008_16385 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__16009_16386 = ((!(G__16007_16384))?typeof v1 === 'number':null);
var G__16010_16387 = ((!(G__16008_16385))?typeof v2 === 'number':null);
var G__15995_16388 = self__.buf;
var G__15996_16389 = ((G__16007_16384)?v1.buf:null);
var G__15997_16390 = ((G__16008_16385)?v2.buf:null);
var G__15998_16391 = (G__15995_16388[(0)]);
var G__15999_16392 = (G__15995_16388[(1)]);
var G__16000_16393 = (G__15995_16388[(2)]);
var G__16001_16394 = ((G__16007_16384)?(G__15996_16389[(0)]):(cljs.core.truth_(G__16009_16386)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__16002_16395 = ((G__16007_16384)?(G__15996_16389[(1)]):(cljs.core.truth_(G__16009_16386)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__16003_16396 = ((G__16007_16384)?(G__15996_16389[(2)]):(cljs.core.truth_(G__16009_16386)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__16004_16397 = ((G__16008_16385)?(G__15997_16390[(0)]):(cljs.core.truth_(G__16010_16387)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__16005_16398 = ((G__16008_16385)?(G__15997_16390[(1)]):(cljs.core.truth_(G__16010_16387)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__16006_16399 = ((G__16008_16385)?(G__15997_16390[(2)]):(cljs.core.truth_(G__16010_16387)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__15998_16391 * G__16001_16394) * G__16004_16397));

(dest__14927__auto__[(1)] = ((G__15999_16392 * G__16002_16395) * G__16005_16398));

(dest__14927__auto__[(2)] = ((G__16000_16393 * G__16003_16396) * G__16006_16399));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16011 = self__.buf;
var dest__14905__auto__ = (new Float32Array((3)));
(dest__14905__auto__[(0)] = ((G__16011[(0)]) * x));

(dest__14905__auto__[(1)] = ((G__16011[(1)]) * y));

(dest__14905__auto__[(2)] = ((G__16011[(2)]) * z));

return (new thi.ng.geom.vector.Vec3(dest__14905__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14899__auto__ = (new Float32Array((3)));
var G__16012_16400 = self__.buf;
(dest__14899__auto__[(0)] = (- (G__16012_16400[(0)])));

(dest__14899__auto__[(1)] = (- (G__16012_16400[(1)])));

(dest__14899__auto__[(2)] = (- (G__16012_16400[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__14899__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__16013_16401 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__16014_16402 = v.buf;
(dest__14916__auto__[(0)] = ((G__16013_16401[(0)]) - (G__16014_16402[(0)])));

(dest__14916__auto__[(1)] = ((G__16013_16401[(1)]) - (G__16014_16402[(1)])));

(dest__14916__auto__[(2)] = ((G__16013_16401[(2)]) - (G__16014_16402[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__16013_16401[(0)]) - v));

(dest__14916__auto__[(1)] = ((G__16013_16401[(1)]) - v));

(dest__14916__auto__[(2)] = ((G__16013_16401[(2)]) - v));
} else {
(dest__14916__auto__[(0)] = ((G__16013_16401[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__16013_16401[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__16013_16401[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16027_16403 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__16028_16404 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__16029_16405 = ((!(G__16027_16403))?typeof v1 === 'number':null);
var G__16030_16406 = ((!(G__16028_16404))?typeof v2 === 'number':null);
var G__16015_16407 = self__.buf;
var G__16016_16408 = ((G__16027_16403)?v1.buf:null);
var G__16017_16409 = ((G__16028_16404)?v2.buf:null);
var G__16018_16410 = (G__16015_16407[(0)]);
var G__16019_16411 = (G__16015_16407[(1)]);
var G__16020_16412 = (G__16015_16407[(2)]);
var G__16021_16413 = ((G__16027_16403)?(G__16016_16408[(0)]):(cljs.core.truth_(G__16029_16405)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__16022_16414 = ((G__16027_16403)?(G__16016_16408[(1)]):(cljs.core.truth_(G__16029_16405)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__16023_16415 = ((G__16027_16403)?(G__16016_16408[(2)]):(cljs.core.truth_(G__16029_16405)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__16024_16416 = ((G__16028_16404)?(G__16017_16409[(0)]):(cljs.core.truth_(G__16030_16406)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__16025_16417 = ((G__16028_16404)?(G__16017_16409[(1)]):(cljs.core.truth_(G__16030_16406)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__16026_16418 = ((G__16028_16404)?(G__16017_16409[(2)]):(cljs.core.truth_(G__16030_16406)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__16018_16410 - G__16021_16413) - G__16024_16416));

(dest__14927__auto__[(1)] = ((G__16019_16411 - G__16022_16414) - G__16025_16417));

(dest__14927__auto__[(2)] = ((G__16020_16412 - G__16023_16415) - G__16026_16418));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16031 = self__.buf;
var dest__14905__auto__ = (new Float32Array((3)));
(dest__14905__auto__[(0)] = ((G__16031[(0)]) - x));

(dest__14905__auto__[(1)] = ((G__16031[(1)]) - y));

(dest__14905__auto__[(2)] = ((G__16031[(2)]) - z));

return (new thi.ng.geom.vector.Vec3(dest__14905__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16044_16419 = (a instanceof thi.ng.geom.vector.Vec3);
var G__16045_16420 = (b instanceof thi.ng.geom.vector.Vec3);
var G__16046_16421 = ((!(G__16044_16419))?typeof a === 'number':null);
var G__16047_16422 = ((!(G__16045_16420))?typeof b === 'number':null);
var G__16032_16423 = self__.buf;
var G__16033_16424 = ((G__16044_16419)?a.buf:null);
var G__16034_16425 = ((G__16045_16420)?b.buf:null);
var G__16035_16426 = (G__16032_16423[(0)]);
var G__16036_16427 = (G__16032_16423[(1)]);
var G__16037_16428 = (G__16032_16423[(2)]);
var G__16038_16429 = ((G__16044_16419)?(G__16033_16424[(0)]):(cljs.core.truth_(G__16046_16421)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__16039_16430 = ((G__16044_16419)?(G__16033_16424[(1)]):(cljs.core.truth_(G__16046_16421)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__16040_16431 = ((G__16044_16419)?(G__16033_16424[(2)]):(cljs.core.truth_(G__16046_16421)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__16041_16432 = ((G__16045_16420)?(G__16034_16425[(0)]):(cljs.core.truth_(G__16047_16422)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__16042_16433 = ((G__16045_16420)?(G__16034_16425[(1)]):(cljs.core.truth_(G__16047_16422)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__16043_16434 = ((G__16045_16420)?(G__16034_16425[(2)]):(cljs.core.truth_(G__16047_16422)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__16035_16426 * G__16038_16429) + G__16041_16432));

(dest__14927__auto__[(1)] = ((G__16036_16427 * G__16039_16430) + G__16042_16433));

(dest__14927__auto__[(2)] = ((G__16037_16428 * G__16040_16431) + G__16043_16434));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16060_16435 = (a instanceof thi.ng.geom.vector.Vec3);
var G__16061_16436 = (b instanceof thi.ng.geom.vector.Vec3);
var G__16062_16437 = ((!(G__16060_16435))?typeof a === 'number':null);
var G__16063_16438 = ((!(G__16061_16436))?typeof b === 'number':null);
var G__16048_16439 = self__.buf;
var G__16049_16440 = ((G__16060_16435)?a.buf:null);
var G__16050_16441 = ((G__16061_16436)?b.buf:null);
var G__16051_16442 = (G__16048_16439[(0)]);
var G__16052_16443 = (G__16048_16439[(1)]);
var G__16053_16444 = (G__16048_16439[(2)]);
var G__16054_16445 = ((G__16060_16435)?(G__16049_16440[(0)]):(cljs.core.truth_(G__16062_16437)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__16055_16446 = ((G__16060_16435)?(G__16049_16440[(1)]):(cljs.core.truth_(G__16062_16437)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__16056_16447 = ((G__16060_16435)?(G__16049_16440[(2)]):(cljs.core.truth_(G__16062_16437)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__16057_16448 = ((G__16061_16436)?(G__16050_16441[(0)]):(cljs.core.truth_(G__16063_16438)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__16058_16449 = ((G__16061_16436)?(G__16050_16441[(1)]):(cljs.core.truth_(G__16063_16438)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__16059_16450 = ((G__16061_16436)?(G__16050_16441[(2)]):(cljs.core.truth_(G__16063_16438)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__14927__auto__[(0)] = ((G__16051_16442 + G__16054_16445) * G__16057_16448));

(dest__14927__auto__[(1)] = ((G__16052_16443 + G__16055_16446) * G__16058_16449));

(dest__14927__auto__[(2)] = ((G__16053_16444 + G__16056_16447) * G__16059_16450));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14899__auto__ = (new Float32Array((3)));
var G__16064_16451 = self__.buf;
(dest__14899__auto__[(0)] = ((1) / (G__16064_16451[(0)])));

(dest__14899__auto__[(1)] = ((1) / (G__16064_16451[(1)])));

(dest__14899__auto__[(2)] = ((1) / (G__16064_16451[(2)])));

return (new thi.ng.geom.vector.Vec3(dest__14899__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__16065_16452 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__16066_16453 = v.buf;
(dest__14916__auto__[(0)] = ((G__16065_16452[(0)]) / (G__16066_16453[(0)])));

(dest__14916__auto__[(1)] = ((G__16065_16452[(1)]) / (G__16066_16453[(1)])));

(dest__14916__auto__[(2)] = ((G__16065_16452[(2)]) / (G__16066_16453[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__16065_16452[(0)]) / v));

(dest__14916__auto__[(1)] = ((G__16065_16452[(1)]) / v));

(dest__14916__auto__[(2)] = ((G__16065_16452[(2)]) / v));
} else {
(dest__14916__auto__[(0)] = ((G__16065_16452[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__16065_16452[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__16065_16452[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16079_16454 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__16080_16455 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__16081_16456 = ((!(G__16079_16454))?typeof v1 === 'number':null);
var G__16082_16457 = ((!(G__16080_16455))?typeof v2 === 'number':null);
var G__16067_16458 = self__.buf;
var G__16068_16459 = ((G__16079_16454)?v1.buf:null);
var G__16069_16460 = ((G__16080_16455)?v2.buf:null);
var G__16070_16461 = (G__16067_16458[(0)]);
var G__16071_16462 = (G__16067_16458[(1)]);
var G__16072_16463 = (G__16067_16458[(2)]);
var G__16073_16464 = ((G__16079_16454)?(G__16068_16459[(0)]):(cljs.core.truth_(G__16081_16456)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__16074_16465 = ((G__16079_16454)?(G__16068_16459[(1)]):(cljs.core.truth_(G__16081_16456)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__16075_16466 = ((G__16079_16454)?(G__16068_16459[(2)]):(cljs.core.truth_(G__16081_16456)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__16076_16467 = ((G__16080_16455)?(G__16069_16460[(0)]):(cljs.core.truth_(G__16082_16457)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__16077_16468 = ((G__16080_16455)?(G__16069_16460[(1)]):(cljs.core.truth_(G__16082_16457)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__16078_16469 = ((G__16080_16455)?(G__16069_16460[(2)]):(cljs.core.truth_(G__16082_16457)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__16070_16461 / G__16073_16464) / G__16076_16467));

(dest__14927__auto__[(1)] = ((G__16071_16462 / G__16074_16465) / G__16077_16468));

(dest__14927__auto__[(2)] = ((G__16072_16463 / G__16075_16466) / G__16078_16469));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16083 = self__.buf;
var dest__14905__auto__ = (new Float32Array((3)));
(dest__14905__auto__[(0)] = ((G__16083[(0)]) / x));

(dest__14905__auto__[(1)] = ((G__16083[(1)]) / y));

(dest__14905__auto__[(2)] = ((G__16083[(2)]) / z));

return (new thi.ng.geom.vector.Vec3(dest__14905__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__14916__auto__ = (new Float32Array((3)));
var G__16084_16470 = self__.buf;
if((v instanceof thi.ng.geom.vector.Vec3)){
var G__16085_16471 = v.buf;
(dest__14916__auto__[(0)] = ((G__16084_16470[(0)]) + (G__16085_16471[(0)])));

(dest__14916__auto__[(1)] = ((G__16084_16470[(1)]) + (G__16085_16471[(1)])));

(dest__14916__auto__[(2)] = ((G__16084_16470[(2)]) + (G__16085_16471[(2)])));
} else {
if(typeof v === 'number'){
(dest__14916__auto__[(0)] = ((G__16084_16470[(0)]) + v));

(dest__14916__auto__[(1)] = ((G__16084_16470[(1)]) + v));

(dest__14916__auto__[(2)] = ((G__16084_16470[(2)]) + v));
} else {
(dest__14916__auto__[(0)] = ((G__16084_16470[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__14916__auto__[(1)] = ((G__16084_16470[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__14916__auto__[(2)] = ((G__16084_16470[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.vector.Vec3(dest__14916__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__16098_16472 = (v1 instanceof thi.ng.geom.vector.Vec3);
var G__16099_16473 = (v2 instanceof thi.ng.geom.vector.Vec3);
var G__16100_16474 = ((!(G__16098_16472))?typeof v1 === 'number':null);
var G__16101_16475 = ((!(G__16099_16473))?typeof v2 === 'number':null);
var G__16086_16476 = self__.buf;
var G__16087_16477 = ((G__16098_16472)?v1.buf:null);
var G__16088_16478 = ((G__16099_16473)?v2.buf:null);
var G__16089_16479 = (G__16086_16476[(0)]);
var G__16090_16480 = (G__16086_16476[(1)]);
var G__16091_16481 = (G__16086_16476[(2)]);
var G__16092_16482 = ((G__16098_16472)?(G__16087_16477[(0)]):(cljs.core.truth_(G__16100_16474)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__16093_16483 = ((G__16098_16472)?(G__16087_16477[(1)]):(cljs.core.truth_(G__16100_16474)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__16094_16484 = ((G__16098_16472)?(G__16087_16477[(2)]):(cljs.core.truth_(G__16100_16474)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__16095_16485 = ((G__16099_16473)?(G__16088_16478[(0)]):(cljs.core.truth_(G__16101_16475)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__16096_16486 = ((G__16099_16473)?(G__16088_16478[(1)]):(cljs.core.truth_(G__16101_16475)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__16097_16487 = ((G__16099_16473)?(G__16088_16478[(2)]):(cljs.core.truth_(G__16101_16475)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__14927__auto__[(0)] = ((G__16089_16479 + G__16092_16482) + G__16095_16485));

(dest__14927__auto__[(1)] = ((G__16090_16480 + G__16093_16483) + G__16096_16486));

(dest__14927__auto__[(2)] = ((G__16091_16481 + G__16094_16484) + G__16097_16487));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__16102 = self__.buf;
var dest__14905__auto__ = (new Float32Array((3)));
(dest__14905__auto__[(0)] = ((G__16102[(0)]) + x));

(dest__14905__auto__[(1)] = ((G__16102[(1)]) + y));

(dest__14905__auto__[(2)] = ((G__16102[(2)]) + z));

return (new thi.ng.geom.vector.Vec3(dest__14905__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__14899__auto__ = (new Float32Array((3)));
var G__16103_16488 = self__.buf;
(dest__14899__auto__[(0)] = (function (){var G__16104 = (G__16103_16488[(0)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16104) : thi.ng.math.core.abs_STAR_.call(null,G__16104));
})());

(dest__14899__auto__[(1)] = (function (){var G__16105 = (G__16103_16488[(1)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16105) : thi.ng.math.core.abs_STAR_.call(null,G__16105));
})());

(dest__14899__auto__[(2)] = (function (){var G__16106 = (G__16103_16488[(2)]);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__16106) : thi.ng.math.core.abs_STAR_.call(null,G__16106));
})());

return (new thi.ng.geom.vector.Vec3(dest__14899__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.prototype.thi$ng$math$core$IMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__14927__auto__ = (new Float32Array((3)));
var G__15773_16489 = (a instanceof thi.ng.geom.vector.Vec3);
var G__15774_16490 = (b instanceof thi.ng.geom.vector.Vec3);
var G__15775_16491 = ((!(G__15773_16489))?typeof a === 'number':null);
var G__15776_16492 = ((!(G__15774_16490))?typeof b === 'number':null);
var G__15761_16493 = self__.buf;
var G__15762_16494 = ((G__15773_16489)?a.buf:null);
var G__15763_16495 = ((G__15774_16490)?b.buf:null);
var G__15764_16496 = (G__15761_16493[(0)]);
var G__15765_16497 = (G__15761_16493[(1)]);
var G__15766_16498 = (G__15761_16493[(2)]);
var G__15767_16499 = ((G__15773_16489)?(G__15762_16494[(0)]):(cljs.core.truth_(G__15775_16491)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__15768_16500 = ((G__15773_16489)?(G__15762_16494[(1)]):(cljs.core.truth_(G__15775_16491)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__15769_16501 = ((G__15773_16489)?(G__15762_16494[(2)]):(cljs.core.truth_(G__15775_16491)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__15770_16502 = ((G__15774_16490)?(G__15763_16495[(0)]):(cljs.core.truth_(G__15776_16492)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__15771_16503 = ((G__15774_16490)?(G__15763_16495[(1)]):(cljs.core.truth_(G__15776_16492)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__15772_16504 = ((G__15774_16490)?(G__15763_16495[(2)]):(cljs.core.truth_(G__15776_16492)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__14927__auto__[(0)] = ((G__15764_16496 - G__15767_16499) * G__15770_16502));

(dest__14927__auto__[(1)] = ((G__15765_16497 - G__15768_16500) * G__15771_16503));

(dest__14927__auto__[(2)] = ((G__15766_16498 - G__15769_16501) * G__15772_16504));

return (new thi.ng.geom.vector.Vec3(dest__14927__auto__,null,self__._meta));
});

thi.ng.geom.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$buf,cljs.core.with_meta(cljs.core.cst$sym$_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$_meta], null);
});

thi.ng.geom.vector.Vec3.cljs$lang$type = true;

thi.ng.geom.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.vector/Vec3";

thi.ng.geom.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write(writer__8042__auto__,"thi.ng.geom.vector/Vec3");
});

thi.ng.geom.vector.__GT_Vec3 = (function thi$ng$geom$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.vector.x = (function thi$ng$geom$vector$x(G__16507){
var G__16505 = (((G__16507 instanceof thi.ng.geom.vector.Vec2))?G__16507.buf:G__16507.buf);
return (G__16505[(0)]);
});
thi.ng.geom.vector.xx = (function thi$ng$geom$vector$xx(G__16510){
var G__16508 = (((G__16510 instanceof thi.ng.geom.vector.Vec2))?G__16510.buf:G__16510.buf);
var G__16509 = (new Float32Array(2));
(G__16509[(0)] = (G__16508[(0)]));

(G__16509[(1)] = (G__16508[(0)]));

return (new thi.ng.geom.vector.Vec2(G__16509,null,cljs.core.meta(G__16510)));
});
thi.ng.geom.vector.xxx = (function thi$ng$geom$vector$xxx(G__16513){
var G__16511 = (((G__16513 instanceof thi.ng.geom.vector.Vec2))?G__16513.buf:G__16513.buf);
var G__16512 = (new Float32Array(3));
(G__16512[(0)] = (G__16511[(0)]));

(G__16512[(1)] = (G__16511[(0)]));

(G__16512[(2)] = (G__16511[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16512,null,cljs.core.meta(G__16513)));
});
thi.ng.geom.vector.xxy = (function thi$ng$geom$vector$xxy(G__16516){
var G__16514 = (((G__16516 instanceof thi.ng.geom.vector.Vec2))?G__16516.buf:G__16516.buf);
var G__16515 = (new Float32Array(3));
(G__16515[(0)] = (G__16514[(0)]));

(G__16515[(1)] = (G__16514[(0)]));

(G__16515[(2)] = (G__16514[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16515,null,cljs.core.meta(G__16516)));
});
thi.ng.geom.vector.xxz = (function thi$ng$geom$vector$xxz(G__16519){
var G__16517 = (((G__16519 instanceof thi.ng.geom.vector.Vec2))?G__16519.buf:G__16519.buf);
var G__16518 = (new Float32Array(3));
(G__16518[(0)] = (G__16517[(0)]));

(G__16518[(1)] = (G__16517[(0)]));

(G__16518[(2)] = (G__16517[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16518,null,cljs.core.meta(G__16519)));
});
thi.ng.geom.vector.xy = (function thi$ng$geom$vector$xy(G__16522){
var G__16520 = (((G__16522 instanceof thi.ng.geom.vector.Vec2))?G__16522.buf:G__16522.buf);
var G__16521 = (new Float32Array(2));
(G__16521[(0)] = (G__16520[(0)]));

(G__16521[(1)] = (G__16520[(1)]));

return (new thi.ng.geom.vector.Vec2(G__16521,null,cljs.core.meta(G__16522)));
});
thi.ng.geom.vector.xyx = (function thi$ng$geom$vector$xyx(G__16525){
var G__16523 = (((G__16525 instanceof thi.ng.geom.vector.Vec2))?G__16525.buf:G__16525.buf);
var G__16524 = (new Float32Array(3));
(G__16524[(0)] = (G__16523[(0)]));

(G__16524[(1)] = (G__16523[(1)]));

(G__16524[(2)] = (G__16523[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16524,null,cljs.core.meta(G__16525)));
});
thi.ng.geom.vector.xyy = (function thi$ng$geom$vector$xyy(G__16528){
var G__16526 = (((G__16528 instanceof thi.ng.geom.vector.Vec2))?G__16528.buf:G__16528.buf);
var G__16527 = (new Float32Array(3));
(G__16527[(0)] = (G__16526[(0)]));

(G__16527[(1)] = (G__16526[(1)]));

(G__16527[(2)] = (G__16526[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16527,null,cljs.core.meta(G__16528)));
});
thi.ng.geom.vector.xyz = (function thi$ng$geom$vector$xyz(G__16531){
var G__16529 = (((G__16531 instanceof thi.ng.geom.vector.Vec2))?G__16531.buf:G__16531.buf);
var G__16530 = (new Float32Array(3));
(G__16530[(0)] = (G__16529[(0)]));

(G__16530[(1)] = (G__16529[(1)]));

(G__16530[(2)] = (G__16529[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16530,null,cljs.core.meta(G__16531)));
});
thi.ng.geom.vector.xz = (function thi$ng$geom$vector$xz(G__16534){
var G__16532 = (((G__16534 instanceof thi.ng.geom.vector.Vec2))?G__16534.buf:G__16534.buf);
var G__16533 = (new Float32Array(2));
(G__16533[(0)] = (G__16532[(0)]));

(G__16533[(1)] = (G__16532[(2)]));

return (new thi.ng.geom.vector.Vec2(G__16533,null,cljs.core.meta(G__16534)));
});
thi.ng.geom.vector.xzx = (function thi$ng$geom$vector$xzx(G__16537){
var G__16535 = (((G__16537 instanceof thi.ng.geom.vector.Vec2))?G__16537.buf:G__16537.buf);
var G__16536 = (new Float32Array(3));
(G__16536[(0)] = (G__16535[(0)]));

(G__16536[(1)] = (G__16535[(2)]));

(G__16536[(2)] = (G__16535[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16536,null,cljs.core.meta(G__16537)));
});
thi.ng.geom.vector.xzy = (function thi$ng$geom$vector$xzy(G__16540){
var G__16538 = (((G__16540 instanceof thi.ng.geom.vector.Vec2))?G__16540.buf:G__16540.buf);
var G__16539 = (new Float32Array(3));
(G__16539[(0)] = (G__16538[(0)]));

(G__16539[(1)] = (G__16538[(2)]));

(G__16539[(2)] = (G__16538[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16539,null,cljs.core.meta(G__16540)));
});
thi.ng.geom.vector.xzz = (function thi$ng$geom$vector$xzz(G__16543){
var G__16541 = (((G__16543 instanceof thi.ng.geom.vector.Vec2))?G__16543.buf:G__16543.buf);
var G__16542 = (new Float32Array(3));
(G__16542[(0)] = (G__16541[(0)]));

(G__16542[(1)] = (G__16541[(2)]));

(G__16542[(2)] = (G__16541[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16542,null,cljs.core.meta(G__16543)));
});
thi.ng.geom.vector.y = (function thi$ng$geom$vector$y(G__16546){
var G__16544 = (((G__16546 instanceof thi.ng.geom.vector.Vec2))?G__16546.buf:G__16546.buf);
return (G__16544[(1)]);
});
thi.ng.geom.vector.yx = (function thi$ng$geom$vector$yx(G__16549){
var G__16547 = (((G__16549 instanceof thi.ng.geom.vector.Vec2))?G__16549.buf:G__16549.buf);
var G__16548 = (new Float32Array(2));
(G__16548[(0)] = (G__16547[(1)]));

(G__16548[(1)] = (G__16547[(0)]));

return (new thi.ng.geom.vector.Vec2(G__16548,null,cljs.core.meta(G__16549)));
});
thi.ng.geom.vector.yxx = (function thi$ng$geom$vector$yxx(G__16552){
var G__16550 = (((G__16552 instanceof thi.ng.geom.vector.Vec2))?G__16552.buf:G__16552.buf);
var G__16551 = (new Float32Array(3));
(G__16551[(0)] = (G__16550[(1)]));

(G__16551[(1)] = (G__16550[(0)]));

(G__16551[(2)] = (G__16550[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16551,null,cljs.core.meta(G__16552)));
});
thi.ng.geom.vector.yxy = (function thi$ng$geom$vector$yxy(G__16555){
var G__16553 = (((G__16555 instanceof thi.ng.geom.vector.Vec2))?G__16555.buf:G__16555.buf);
var G__16554 = (new Float32Array(3));
(G__16554[(0)] = (G__16553[(1)]));

(G__16554[(1)] = (G__16553[(0)]));

(G__16554[(2)] = (G__16553[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16554,null,cljs.core.meta(G__16555)));
});
thi.ng.geom.vector.yxz = (function thi$ng$geom$vector$yxz(G__16558){
var G__16556 = (((G__16558 instanceof thi.ng.geom.vector.Vec2))?G__16558.buf:G__16558.buf);
var G__16557 = (new Float32Array(3));
(G__16557[(0)] = (G__16556[(1)]));

(G__16557[(1)] = (G__16556[(0)]));

(G__16557[(2)] = (G__16556[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16557,null,cljs.core.meta(G__16558)));
});
thi.ng.geom.vector.yy = (function thi$ng$geom$vector$yy(G__16561){
var G__16559 = (((G__16561 instanceof thi.ng.geom.vector.Vec2))?G__16561.buf:G__16561.buf);
var G__16560 = (new Float32Array(2));
(G__16560[(0)] = (G__16559[(1)]));

(G__16560[(1)] = (G__16559[(1)]));

return (new thi.ng.geom.vector.Vec2(G__16560,null,cljs.core.meta(G__16561)));
});
thi.ng.geom.vector.yyx = (function thi$ng$geom$vector$yyx(G__16564){
var G__16562 = (((G__16564 instanceof thi.ng.geom.vector.Vec2))?G__16564.buf:G__16564.buf);
var G__16563 = (new Float32Array(3));
(G__16563[(0)] = (G__16562[(1)]));

(G__16563[(1)] = (G__16562[(1)]));

(G__16563[(2)] = (G__16562[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16563,null,cljs.core.meta(G__16564)));
});
thi.ng.geom.vector.yyy = (function thi$ng$geom$vector$yyy(G__16567){
var G__16565 = (((G__16567 instanceof thi.ng.geom.vector.Vec2))?G__16567.buf:G__16567.buf);
var G__16566 = (new Float32Array(3));
(G__16566[(0)] = (G__16565[(1)]));

(G__16566[(1)] = (G__16565[(1)]));

(G__16566[(2)] = (G__16565[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16566,null,cljs.core.meta(G__16567)));
});
thi.ng.geom.vector.yyz = (function thi$ng$geom$vector$yyz(G__16570){
var G__16568 = (((G__16570 instanceof thi.ng.geom.vector.Vec2))?G__16570.buf:G__16570.buf);
var G__16569 = (new Float32Array(3));
(G__16569[(0)] = (G__16568[(1)]));

(G__16569[(1)] = (G__16568[(1)]));

(G__16569[(2)] = (G__16568[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16569,null,cljs.core.meta(G__16570)));
});
thi.ng.geom.vector.yz = (function thi$ng$geom$vector$yz(G__16573){
var G__16571 = (((G__16573 instanceof thi.ng.geom.vector.Vec2))?G__16573.buf:G__16573.buf);
var G__16572 = (new Float32Array(2));
(G__16572[(0)] = (G__16571[(1)]));

(G__16572[(1)] = (G__16571[(2)]));

return (new thi.ng.geom.vector.Vec2(G__16572,null,cljs.core.meta(G__16573)));
});
thi.ng.geom.vector.yzx = (function thi$ng$geom$vector$yzx(G__16576){
var G__16574 = (((G__16576 instanceof thi.ng.geom.vector.Vec2))?G__16576.buf:G__16576.buf);
var G__16575 = (new Float32Array(3));
(G__16575[(0)] = (G__16574[(1)]));

(G__16575[(1)] = (G__16574[(2)]));

(G__16575[(2)] = (G__16574[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16575,null,cljs.core.meta(G__16576)));
});
thi.ng.geom.vector.yzy = (function thi$ng$geom$vector$yzy(G__16579){
var G__16577 = (((G__16579 instanceof thi.ng.geom.vector.Vec2))?G__16579.buf:G__16579.buf);
var G__16578 = (new Float32Array(3));
(G__16578[(0)] = (G__16577[(1)]));

(G__16578[(1)] = (G__16577[(2)]));

(G__16578[(2)] = (G__16577[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16578,null,cljs.core.meta(G__16579)));
});
thi.ng.geom.vector.yzz = (function thi$ng$geom$vector$yzz(G__16582){
var G__16580 = (((G__16582 instanceof thi.ng.geom.vector.Vec2))?G__16582.buf:G__16582.buf);
var G__16581 = (new Float32Array(3));
(G__16581[(0)] = (G__16580[(1)]));

(G__16581[(1)] = (G__16580[(2)]));

(G__16581[(2)] = (G__16580[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16581,null,cljs.core.meta(G__16582)));
});
thi.ng.geom.vector.z = (function thi$ng$geom$vector$z(G__16585){
var G__16583 = (((G__16585 instanceof thi.ng.geom.vector.Vec2))?G__16585.buf:G__16585.buf);
return (G__16583[(2)]);
});
thi.ng.geom.vector.zx = (function thi$ng$geom$vector$zx(G__16588){
var G__16586 = (((G__16588 instanceof thi.ng.geom.vector.Vec2))?G__16588.buf:G__16588.buf);
var G__16587 = (new Float32Array(2));
(G__16587[(0)] = (G__16586[(2)]));

(G__16587[(1)] = (G__16586[(0)]));

return (new thi.ng.geom.vector.Vec2(G__16587,null,cljs.core.meta(G__16588)));
});
thi.ng.geom.vector.zxx = (function thi$ng$geom$vector$zxx(G__16591){
var G__16589 = (((G__16591 instanceof thi.ng.geom.vector.Vec2))?G__16591.buf:G__16591.buf);
var G__16590 = (new Float32Array(3));
(G__16590[(0)] = (G__16589[(2)]));

(G__16590[(1)] = (G__16589[(0)]));

(G__16590[(2)] = (G__16589[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16590,null,cljs.core.meta(G__16591)));
});
thi.ng.geom.vector.zxy = (function thi$ng$geom$vector$zxy(G__16594){
var G__16592 = (((G__16594 instanceof thi.ng.geom.vector.Vec2))?G__16594.buf:G__16594.buf);
var G__16593 = (new Float32Array(3));
(G__16593[(0)] = (G__16592[(2)]));

(G__16593[(1)] = (G__16592[(0)]));

(G__16593[(2)] = (G__16592[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16593,null,cljs.core.meta(G__16594)));
});
thi.ng.geom.vector.zxz = (function thi$ng$geom$vector$zxz(G__16597){
var G__16595 = (((G__16597 instanceof thi.ng.geom.vector.Vec2))?G__16597.buf:G__16597.buf);
var G__16596 = (new Float32Array(3));
(G__16596[(0)] = (G__16595[(2)]));

(G__16596[(1)] = (G__16595[(0)]));

(G__16596[(2)] = (G__16595[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16596,null,cljs.core.meta(G__16597)));
});
thi.ng.geom.vector.zy = (function thi$ng$geom$vector$zy(G__16600){
var G__16598 = (((G__16600 instanceof thi.ng.geom.vector.Vec2))?G__16600.buf:G__16600.buf);
var G__16599 = (new Float32Array(2));
(G__16599[(0)] = (G__16598[(2)]));

(G__16599[(1)] = (G__16598[(1)]));

return (new thi.ng.geom.vector.Vec2(G__16599,null,cljs.core.meta(G__16600)));
});
thi.ng.geom.vector.zyx = (function thi$ng$geom$vector$zyx(G__16603){
var G__16601 = (((G__16603 instanceof thi.ng.geom.vector.Vec2))?G__16603.buf:G__16603.buf);
var G__16602 = (new Float32Array(3));
(G__16602[(0)] = (G__16601[(2)]));

(G__16602[(1)] = (G__16601[(1)]));

(G__16602[(2)] = (G__16601[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16602,null,cljs.core.meta(G__16603)));
});
thi.ng.geom.vector.zyy = (function thi$ng$geom$vector$zyy(G__16606){
var G__16604 = (((G__16606 instanceof thi.ng.geom.vector.Vec2))?G__16606.buf:G__16606.buf);
var G__16605 = (new Float32Array(3));
(G__16605[(0)] = (G__16604[(2)]));

(G__16605[(1)] = (G__16604[(1)]));

(G__16605[(2)] = (G__16604[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16605,null,cljs.core.meta(G__16606)));
});
thi.ng.geom.vector.zyz = (function thi$ng$geom$vector$zyz(G__16609){
var G__16607 = (((G__16609 instanceof thi.ng.geom.vector.Vec2))?G__16609.buf:G__16609.buf);
var G__16608 = (new Float32Array(3));
(G__16608[(0)] = (G__16607[(2)]));

(G__16608[(1)] = (G__16607[(1)]));

(G__16608[(2)] = (G__16607[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16608,null,cljs.core.meta(G__16609)));
});
thi.ng.geom.vector.zz = (function thi$ng$geom$vector$zz(G__16612){
var G__16610 = (((G__16612 instanceof thi.ng.geom.vector.Vec2))?G__16612.buf:G__16612.buf);
var G__16611 = (new Float32Array(2));
(G__16611[(0)] = (G__16610[(2)]));

(G__16611[(1)] = (G__16610[(2)]));

return (new thi.ng.geom.vector.Vec2(G__16611,null,cljs.core.meta(G__16612)));
});
thi.ng.geom.vector.zzx = (function thi$ng$geom$vector$zzx(G__16615){
var G__16613 = (((G__16615 instanceof thi.ng.geom.vector.Vec2))?G__16615.buf:G__16615.buf);
var G__16614 = (new Float32Array(3));
(G__16614[(0)] = (G__16613[(2)]));

(G__16614[(1)] = (G__16613[(2)]));

(G__16614[(2)] = (G__16613[(0)]));

return (new thi.ng.geom.vector.Vec3(G__16614,null,cljs.core.meta(G__16615)));
});
thi.ng.geom.vector.zzy = (function thi$ng$geom$vector$zzy(G__16618){
var G__16616 = (((G__16618 instanceof thi.ng.geom.vector.Vec2))?G__16618.buf:G__16618.buf);
var G__16617 = (new Float32Array(3));
(G__16617[(0)] = (G__16616[(2)]));

(G__16617[(1)] = (G__16616[(2)]));

(G__16617[(2)] = (G__16616[(1)]));

return (new thi.ng.geom.vector.Vec3(G__16617,null,cljs.core.meta(G__16618)));
});
thi.ng.geom.vector.zzz = (function thi$ng$geom$vector$zzz(G__16621){
var G__16619 = (((G__16621 instanceof thi.ng.geom.vector.Vec2))?G__16621.buf:G__16621.buf);
var G__16620 = (new Float32Array(3));
(G__16620[(0)] = (G__16619[(2)]));

(G__16620[(1)] = (G__16619[(2)]));

(G__16620[(2)] = (G__16619[(2)]));

return (new thi.ng.geom.vector.Vec3(G__16620,null,cljs.core.meta(G__16621)));
});
thi.ng.geom.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,thi.ng.geom.vector.x,cljs.core.cst$kw$xx,thi.ng.geom.vector.xx,cljs.core.cst$kw$xy,thi.ng.geom.vector.xy,cljs.core.cst$kw$y,thi.ng.geom.vector.y,cljs.core.cst$kw$yx,thi.ng.geom.vector.yx,cljs.core.cst$kw$yy,thi.ng.geom.vector.yy], null);
thi.ng.geom.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$y,cljs.core.cst$kw$xzx,cljs.core.cst$kw$xyz,cljs.core.cst$kw$zzy,cljs.core.cst$kw$yx,cljs.core.cst$kw$xy,cljs.core.cst$kw$yyz,cljs.core.cst$kw$zxy,cljs.core.cst$kw$xzy,cljs.core.cst$kw$zxz,cljs.core.cst$kw$zx,cljs.core.cst$kw$xx,cljs.core.cst$kw$xxx,cljs.core.cst$kw$zy,cljs.core.cst$kw$zzx,cljs.core.cst$kw$zyx,cljs.core.cst$kw$yzx,cljs.core.cst$kw$z,cljs.core.cst$kw$yyx,cljs.core.cst$kw$xz,cljs.core.cst$kw$zyz,cljs.core.cst$kw$yy,cljs.core.cst$kw$xxz,cljs.core.cst$kw$yzy,cljs.core.cst$kw$yz,cljs.core.cst$kw$yxx,cljs.core.cst$kw$xyy,cljs.core.cst$kw$xxy,cljs.core.cst$kw$zz,cljs.core.cst$kw$zzz,cljs.core.cst$kw$x,cljs.core.cst$kw$xzz,cljs.core.cst$kw$yxz,cljs.core.cst$kw$zxx,cljs.core.cst$kw$yzz,cljs.core.cst$kw$xyx,cljs.core.cst$kw$yxy,cljs.core.cst$kw$yyy,cljs.core.cst$kw$zyy],[thi.ng.geom.vector.y,thi.ng.geom.vector.xzx,thi.ng.geom.vector.xyz,thi.ng.geom.vector.zzy,thi.ng.geom.vector.yx,thi.ng.geom.vector.xy,thi.ng.geom.vector.yyz,thi.ng.geom.vector.zxy,thi.ng.geom.vector.xzy,thi.ng.geom.vector.zxz,thi.ng.geom.vector.zx,thi.ng.geom.vector.xx,thi.ng.geom.vector.xxx,thi.ng.geom.vector.zy,thi.ng.geom.vector.zzx,thi.ng.geom.vector.zyx,thi.ng.geom.vector.yzx,thi.ng.geom.vector.z,thi.ng.geom.vector.yyx,thi.ng.geom.vector.xz,thi.ng.geom.vector.zyz,thi.ng.geom.vector.yy,thi.ng.geom.vector.xxz,thi.ng.geom.vector.yzy,thi.ng.geom.vector.yz,thi.ng.geom.vector.yxx,thi.ng.geom.vector.xyy,thi.ng.geom.vector.xxy,thi.ng.geom.vector.zz,thi.ng.geom.vector.zzz,thi.ng.geom.vector.x,thi.ng.geom.vector.xzz,thi.ng.geom.vector.yxz,thi.ng.geom.vector.zxx,thi.ng.geom.vector.yzz,thi.ng.geom.vector.xyx,thi.ng.geom.vector.yxy,thi.ng.geom.vector.yyy,thi.ng.geom.vector.zyy]);
thi.ng.geom.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = cljs.core.count(n);
var temp__6751__auto__ = (function (){var and__7377__auto__ = ((1) === c);
if(and__7377__auto__){
var G__16626 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__16626) : keymap.call(null,G__16626));
} else {
return and__7377__auto__;
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var idx = temp__6751__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if(((c <= cljs.core.count(keymap))) && (((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__6751__auto____$1 = (function (){var G__16627 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__16627) : keymap.call(null,G__16627));
})();
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
(dest[(idx | (0))] = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));

var G__16628 = (i + (1));
var G__16629 = cljs.core.next(n__$1);
i = G__16628;
n__$1 = G__16629;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
thi.ng.geom.vector.vec2_reduce_STAR_ = (function thi$ng$geom$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__16638 = null;
var G__16638__1 = (function (a){
return a;
});
var G__16638__2 = (function (a,b){
(a[(0)] = (function (){var G__16634 = (a[(0)]);
var G__16635 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__16634,G__16635) : op.call(null,G__16634,G__16635));
})());

(a[(1)] = (function (){var G__16636 = (a[(1)]);
var G__16637 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__16636,G__16637) : op.call(null,G__16636,G__16637));
})());

return a;
});
G__16638 = function(a,b){
switch(arguments.length){
case 1:
return G__16638__1.call(this,a);
case 2:
return G__16638__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16638.cljs$core$IFn$_invoke$arity$1 = G__16638__1;
G__16638.cljs$core$IFn$_invoke$arity$2 = G__16638__2;
return G__16638;
})()
,acc,xs);
});
thi.ng.geom.vector.vec3_reduce_STAR_ = (function thi$ng$geom$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__16651 = null;
var G__16651__1 = (function (a){
return a;
});
var G__16651__2 = (function (a,b){
(a[(0)] = (function (){var G__16645 = (a[(0)]);
var G__16646 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__16645,G__16646) : op.call(null,G__16645,G__16646));
})());

(a[(1)] = (function (){var G__16647 = (a[(1)]);
var G__16648 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__16647,G__16648) : op.call(null,G__16647,G__16648));
})());

(a[(2)] = (function (){var G__16649 = (a[(2)]);
var G__16650 = (b[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__16649,G__16650) : op.call(null,G__16649,G__16650));
})());

return a;
});
G__16651 = function(a,b){
switch(arguments.length){
case 1:
return G__16651__1.call(this,a);
case 2:
return G__16651__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16651.cljs$core$IFn$_invoke$arity$1 = G__16651__1;
G__16651.cljs$core$IFn$_invoke$arity$2 = G__16651__2;
return G__16651;
})()
,acc,xs);
});
thi.ng.geom.vector.V2 = (new thi.ng.geom.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.vector.V3 = (new thi.ng.geom.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.vector.vec2 = (function thi$ng$geom$vector$vec2(var_args){
var args16652 = [];
var len__8605__auto___16655 = arguments.length;
var i__8606__auto___16656 = (0);
while(true){
if((i__8606__auto___16656 < len__8605__auto___16655)){
args16652.push((arguments[i__8606__auto___16656]));

var G__16657 = (i__8606__auto___16656 + (1));
i__8606__auto___16656 = G__16657;
continue;
} else {
}
break;
}

var G__16654 = args16652.length;
switch (G__16654) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16652.length)].join('')));

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
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$x,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$y,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

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
var args16659 = [];
var len__8605__auto___16662 = arguments.length;
var i__8606__auto___16663 = (0);
while(true){
if((i__8606__auto___16663 < len__8605__auto___16662)){
args16659.push((arguments[i__8606__auto___16663]));

var G__16664 = (i__8606__auto___16663 + (1));
i__8606__auto___16663 = G__16664;
continue;
} else {
}
break;
}

var G__16661 = args16659.length;
switch (G__16661) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16659.length)].join('')));

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
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$x,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$y,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$z,0.0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
});

thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$x,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$y,0.0),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

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
var args16666 = [];
var len__8605__auto___16669 = arguments.length;
var i__8606__auto___16670 = (0);
while(true){
if((i__8606__auto___16670 < len__8605__auto___16669)){
args16666.push((arguments[i__8606__auto___16670]));

var G__16671 = (i__8606__auto___16670 + (1));
i__8606__auto___16670 = G__16671;
continue;
} else {
}
break;
}

var G__16668 = args16666.length;
switch (G__16668) {
case 2:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16666.length)].join('')));

}
});

thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$x,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$y,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

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
var args16673 = [];
var len__8605__auto___16676 = arguments.length;
var i__8606__auto___16677 = (0);
while(true){
if((i__8606__auto___16677 < len__8605__auto___16676)){
args16673.push((arguments[i__8606__auto___16677]));

var G__16678 = (i__8606__auto___16677 + (1));
i__8606__auto___16677 = G__16678;
continue;
} else {
}
break;
}

var G__16675 = args16673.length;
switch (G__16675) {
case 2:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16673.length)].join('')));

}
});

thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$x,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$y,0.0),cljs.core.get.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$z,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

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
thi.ng.geom.vector.V2X = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.vector.V2Y = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.vector.V3X = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.vector.V3Y = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.vector.V3Z = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.vector.V2INF_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V2INF_PLUS_ = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.V3INF_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.vector.V3INF_PLUS_ = thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.vector.randvec2 = (function thi$ng$geom$vector$randvec2(var_args){
var args16680 = [];
var len__8605__auto___16683 = arguments.length;
var i__8606__auto___16684 = (0);
while(true){
if((i__8606__auto___16684 < len__8605__auto___16683)){
args16680.push((arguments[i__8606__auto___16684]));

var G__16685 = (i__8606__auto___16684 + (1));
i__8606__auto___16684 = G__16685;
continue;
} else {
}
break;
}

var G__16682 = args16680.length;
switch (G__16682) {
case 0:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16680.length)].join('')));

}
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()));
});

thi.ng.geom.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()),n);
});

thi.ng.geom.vector.randvec2.cljs$lang$maxFixedArity = 1;

thi.ng.geom.vector.randvec3 = (function thi$ng$geom$vector$randvec3(var_args){
var args16687 = [];
var len__8605__auto___16690 = arguments.length;
var i__8606__auto___16691 = (0);
while(true){
if((i__8606__auto___16691 < len__8605__auto___16690)){
args16687.push((arguments[i__8606__auto___16691]));

var G__16692 = (i__8606__auto___16691 + (1));
i__8606__auto___16691 = G__16692;
continue;
} else {
}
break;
}

var G__16689 = args16687.length;
switch (G__16689) {
case 0:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16687.length)].join('')));

}
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()));
});

thi.ng.geom.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()),n);
});

thi.ng.geom.vector.randvec3.cljs$lang$maxFixedArity = 1;

