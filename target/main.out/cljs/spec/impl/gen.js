// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write.call(null,writer__8042__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12674 = arguments.length;
var i__8606__auto___12675 = (0);
while(true){
if((i__8606__auto___12675 < len__8605__auto___12674)){
args__8612__auto__.push((arguments[i__8606__auto___12675]));

var G__12676 = (i__8606__auto___12675 + (1));
i__8606__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12673){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12673));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12678 = arguments.length;
var i__8606__auto___12679 = (0);
while(true){
if((i__8606__auto___12679 < len__8605__auto___12678)){
args__8612__auto__.push((arguments[i__8606__auto___12679]));

var G__12680 = (i__8606__auto___12679 + (1));
i__8606__auto___12679 = G__12680;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12677){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12677));
});

var g_QMARK__12681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12682 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12681){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12681))
,null));
var mkg_12683 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12681,g_12682){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12681,g_12682))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12681,g_12682,mkg_12683){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12681).call(null,x);
});})(g_QMARK__12681,g_12682,mkg_12683))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12681,g_12682,mkg_12683){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12683).call(null,gfn);
});})(g_QMARK__12681,g_12682,mkg_12683))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12681,g_12682,mkg_12683){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12682).call(null,generator);
});})(g_QMARK__12681,g_12682,mkg_12683))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12645__auto___12702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12645__auto___12702){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12703 = arguments.length;
var i__8606__auto___12704 = (0);
while(true){
if((i__8606__auto___12704 < len__8605__auto___12703)){
args__8612__auto__.push((arguments[i__8606__auto___12704]));

var G__12705 = (i__8606__auto___12704 + (1));
i__8606__auto___12704 = G__12705;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12702))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12702),args);
});})(g__12645__auto___12702))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12645__auto___12702){
return (function (seq12684){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12684));
});})(g__12645__auto___12702))
;


var g__12645__auto___12706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12645__auto___12706){
return (function cljs$spec$impl$gen$list(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12707 = arguments.length;
var i__8606__auto___12708 = (0);
while(true){
if((i__8606__auto___12708 < len__8605__auto___12707)){
args__8612__auto__.push((arguments[i__8606__auto___12708]));

var G__12709 = (i__8606__auto___12708 + (1));
i__8606__auto___12708 = G__12709;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12706))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12706),args);
});})(g__12645__auto___12706))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12645__auto___12706){
return (function (seq12685){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12685));
});})(g__12645__auto___12706))
;


var g__12645__auto___12710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12645__auto___12710){
return (function cljs$spec$impl$gen$map(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12711 = arguments.length;
var i__8606__auto___12712 = (0);
while(true){
if((i__8606__auto___12712 < len__8605__auto___12711)){
args__8612__auto__.push((arguments[i__8606__auto___12712]));

var G__12713 = (i__8606__auto___12712 + (1));
i__8606__auto___12712 = G__12713;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12710))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12710),args);
});})(g__12645__auto___12710))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12645__auto___12710){
return (function (seq12686){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12686));
});})(g__12645__auto___12710))
;


var g__12645__auto___12714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12645__auto___12714){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12715 = arguments.length;
var i__8606__auto___12716 = (0);
while(true){
if((i__8606__auto___12716 < len__8605__auto___12715)){
args__8612__auto__.push((arguments[i__8606__auto___12716]));

var G__12717 = (i__8606__auto___12716 + (1));
i__8606__auto___12716 = G__12717;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12714))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12714),args);
});})(g__12645__auto___12714))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12645__auto___12714){
return (function (seq12687){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12687));
});})(g__12645__auto___12714))
;


var g__12645__auto___12718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12645__auto___12718){
return (function cljs$spec$impl$gen$set(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12719 = arguments.length;
var i__8606__auto___12720 = (0);
while(true){
if((i__8606__auto___12720 < len__8605__auto___12719)){
args__8612__auto__.push((arguments[i__8606__auto___12720]));

var G__12721 = (i__8606__auto___12720 + (1));
i__8606__auto___12720 = G__12721;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12718))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12718),args);
});})(g__12645__auto___12718))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12645__auto___12718){
return (function (seq12688){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12688));
});})(g__12645__auto___12718))
;


var g__12645__auto___12722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12645__auto___12722){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12723 = arguments.length;
var i__8606__auto___12724 = (0);
while(true){
if((i__8606__auto___12724 < len__8605__auto___12723)){
args__8612__auto__.push((arguments[i__8606__auto___12724]));

var G__12725 = (i__8606__auto___12724 + (1));
i__8606__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12722))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12722),args);
});})(g__12645__auto___12722))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12645__auto___12722){
return (function (seq12689){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12689));
});})(g__12645__auto___12722))
;


var g__12645__auto___12726 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12645__auto___12726){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12727 = arguments.length;
var i__8606__auto___12728 = (0);
while(true){
if((i__8606__auto___12728 < len__8605__auto___12727)){
args__8612__auto__.push((arguments[i__8606__auto___12728]));

var G__12729 = (i__8606__auto___12728 + (1));
i__8606__auto___12728 = G__12729;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12726))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12726),args);
});})(g__12645__auto___12726))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12645__auto___12726){
return (function (seq12690){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12690));
});})(g__12645__auto___12726))
;


var g__12645__auto___12730 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12645__auto___12730){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12731 = arguments.length;
var i__8606__auto___12732 = (0);
while(true){
if((i__8606__auto___12732 < len__8605__auto___12731)){
args__8612__auto__.push((arguments[i__8606__auto___12732]));

var G__12733 = (i__8606__auto___12732 + (1));
i__8606__auto___12732 = G__12733;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12730))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12730),args);
});})(g__12645__auto___12730))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12645__auto___12730){
return (function (seq12691){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12691));
});})(g__12645__auto___12730))
;


var g__12645__auto___12734 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12645__auto___12734){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12735 = arguments.length;
var i__8606__auto___12736 = (0);
while(true){
if((i__8606__auto___12736 < len__8605__auto___12735)){
args__8612__auto__.push((arguments[i__8606__auto___12736]));

var G__12737 = (i__8606__auto___12736 + (1));
i__8606__auto___12736 = G__12737;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12734))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12734),args);
});})(g__12645__auto___12734))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12645__auto___12734){
return (function (seq12692){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12692));
});})(g__12645__auto___12734))
;


var g__12645__auto___12738 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12645__auto___12738){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12739 = arguments.length;
var i__8606__auto___12740 = (0);
while(true){
if((i__8606__auto___12740 < len__8605__auto___12739)){
args__8612__auto__.push((arguments[i__8606__auto___12740]));

var G__12741 = (i__8606__auto___12740 + (1));
i__8606__auto___12740 = G__12741;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12738))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12738),args);
});})(g__12645__auto___12738))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12645__auto___12738){
return (function (seq12693){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12693));
});})(g__12645__auto___12738))
;


var g__12645__auto___12742 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12645__auto___12742){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12743 = arguments.length;
var i__8606__auto___12744 = (0);
while(true){
if((i__8606__auto___12744 < len__8605__auto___12743)){
args__8612__auto__.push((arguments[i__8606__auto___12744]));

var G__12745 = (i__8606__auto___12744 + (1));
i__8606__auto___12744 = G__12745;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12742))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12742),args);
});})(g__12645__auto___12742))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12645__auto___12742){
return (function (seq12694){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12694));
});})(g__12645__auto___12742))
;


var g__12645__auto___12746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12645__auto___12746){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12747 = arguments.length;
var i__8606__auto___12748 = (0);
while(true){
if((i__8606__auto___12748 < len__8605__auto___12747)){
args__8612__auto__.push((arguments[i__8606__auto___12748]));

var G__12749 = (i__8606__auto___12748 + (1));
i__8606__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12746))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12746),args);
});})(g__12645__auto___12746))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12645__auto___12746){
return (function (seq12695){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12695));
});})(g__12645__auto___12746))
;


var g__12645__auto___12750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12645__auto___12750){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12751 = arguments.length;
var i__8606__auto___12752 = (0);
while(true){
if((i__8606__auto___12752 < len__8605__auto___12751)){
args__8612__auto__.push((arguments[i__8606__auto___12752]));

var G__12753 = (i__8606__auto___12752 + (1));
i__8606__auto___12752 = G__12753;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12750))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12750){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12750),args);
});})(g__12645__auto___12750))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12645__auto___12750){
return (function (seq12696){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12696));
});})(g__12645__auto___12750))
;


var g__12645__auto___12754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12645__auto___12754){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12755 = arguments.length;
var i__8606__auto___12756 = (0);
while(true){
if((i__8606__auto___12756 < len__8605__auto___12755)){
args__8612__auto__.push((arguments[i__8606__auto___12756]));

var G__12757 = (i__8606__auto___12756 + (1));
i__8606__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12754))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12754),args);
});})(g__12645__auto___12754))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12645__auto___12754){
return (function (seq12697){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12697));
});})(g__12645__auto___12754))
;


var g__12645__auto___12758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12645__auto___12758){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12759 = arguments.length;
var i__8606__auto___12760 = (0);
while(true){
if((i__8606__auto___12760 < len__8605__auto___12759)){
args__8612__auto__.push((arguments[i__8606__auto___12760]));

var G__12761 = (i__8606__auto___12760 + (1));
i__8606__auto___12760 = G__12761;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12758))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12758),args);
});})(g__12645__auto___12758))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12645__auto___12758){
return (function (seq12698){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12698));
});})(g__12645__auto___12758))
;


var g__12645__auto___12762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12645__auto___12762){
return (function cljs$spec$impl$gen$return(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12763 = arguments.length;
var i__8606__auto___12764 = (0);
while(true){
if((i__8606__auto___12764 < len__8605__auto___12763)){
args__8612__auto__.push((arguments[i__8606__auto___12764]));

var G__12765 = (i__8606__auto___12764 + (1));
i__8606__auto___12764 = G__12765;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12762))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12762),args);
});})(g__12645__auto___12762))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12645__auto___12762){
return (function (seq12699){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12699));
});})(g__12645__auto___12762))
;


var g__12645__auto___12766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12645__auto___12766){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12767 = arguments.length;
var i__8606__auto___12768 = (0);
while(true){
if((i__8606__auto___12768 < len__8605__auto___12767)){
args__8612__auto__.push((arguments[i__8606__auto___12768]));

var G__12769 = (i__8606__auto___12768 + (1));
i__8606__auto___12768 = G__12769;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12766))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12766),args);
});})(g__12645__auto___12766))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12645__auto___12766){
return (function (seq12700){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12700));
});})(g__12645__auto___12766))
;


var g__12645__auto___12770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12645__auto___12770){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12771 = arguments.length;
var i__8606__auto___12772 = (0);
while(true){
if((i__8606__auto___12772 < len__8605__auto___12771)){
args__8612__auto__.push((arguments[i__8606__auto___12772]));

var G__12773 = (i__8606__auto___12772 + (1));
i__8606__auto___12772 = G__12773;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12645__auto___12770))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12645__auto___12770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12645__auto___12770),args);
});})(g__12645__auto___12770))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12645__auto___12770){
return (function (seq12701){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12701));
});})(g__12645__auto___12770))
;

var g__12658__auto___12795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12658__auto___12795){
return (function cljs$spec$impl$gen$any(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12796 = arguments.length;
var i__8606__auto___12797 = (0);
while(true){
if((i__8606__auto___12797 < len__8605__auto___12796)){
args__8612__auto__.push((arguments[i__8606__auto___12797]));

var G__12798 = (i__8606__auto___12797 + (1));
i__8606__auto___12797 = G__12798;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12795))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12795){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12795);
});})(g__12658__auto___12795))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12658__auto___12795){
return (function (seq12774){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12774));
});})(g__12658__auto___12795))
;


var g__12658__auto___12799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12658__auto___12799){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12800 = arguments.length;
var i__8606__auto___12801 = (0);
while(true){
if((i__8606__auto___12801 < len__8605__auto___12800)){
args__8612__auto__.push((arguments[i__8606__auto___12801]));

var G__12802 = (i__8606__auto___12801 + (1));
i__8606__auto___12801 = G__12802;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12799))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12799){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12799);
});})(g__12658__auto___12799))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12658__auto___12799){
return (function (seq12775){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12775));
});})(g__12658__auto___12799))
;


var g__12658__auto___12803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12658__auto___12803){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12804 = arguments.length;
var i__8606__auto___12805 = (0);
while(true){
if((i__8606__auto___12805 < len__8605__auto___12804)){
args__8612__auto__.push((arguments[i__8606__auto___12805]));

var G__12806 = (i__8606__auto___12805 + (1));
i__8606__auto___12805 = G__12806;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12803))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12803){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12803);
});})(g__12658__auto___12803))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12658__auto___12803){
return (function (seq12776){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12776));
});})(g__12658__auto___12803))
;


var g__12658__auto___12807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12658__auto___12807){
return (function cljs$spec$impl$gen$char(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12808 = arguments.length;
var i__8606__auto___12809 = (0);
while(true){
if((i__8606__auto___12809 < len__8605__auto___12808)){
args__8612__auto__.push((arguments[i__8606__auto___12809]));

var G__12810 = (i__8606__auto___12809 + (1));
i__8606__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12807))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12807){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12807);
});})(g__12658__auto___12807))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12658__auto___12807){
return (function (seq12777){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12777));
});})(g__12658__auto___12807))
;


var g__12658__auto___12811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12658__auto___12811){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12812 = arguments.length;
var i__8606__auto___12813 = (0);
while(true){
if((i__8606__auto___12813 < len__8605__auto___12812)){
args__8612__auto__.push((arguments[i__8606__auto___12813]));

var G__12814 = (i__8606__auto___12813 + (1));
i__8606__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12811))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12811){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12811);
});})(g__12658__auto___12811))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12658__auto___12811){
return (function (seq12778){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12778));
});})(g__12658__auto___12811))
;


var g__12658__auto___12815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12658__auto___12815){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12816 = arguments.length;
var i__8606__auto___12817 = (0);
while(true){
if((i__8606__auto___12817 < len__8605__auto___12816)){
args__8612__auto__.push((arguments[i__8606__auto___12817]));

var G__12818 = (i__8606__auto___12817 + (1));
i__8606__auto___12817 = G__12818;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12815))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12815){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12815);
});})(g__12658__auto___12815))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12658__auto___12815){
return (function (seq12779){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12779));
});})(g__12658__auto___12815))
;


var g__12658__auto___12819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12658__auto___12819){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12820 = arguments.length;
var i__8606__auto___12821 = (0);
while(true){
if((i__8606__auto___12821 < len__8605__auto___12820)){
args__8612__auto__.push((arguments[i__8606__auto___12821]));

var G__12822 = (i__8606__auto___12821 + (1));
i__8606__auto___12821 = G__12822;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12819))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12819){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12819);
});})(g__12658__auto___12819))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12658__auto___12819){
return (function (seq12780){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12780));
});})(g__12658__auto___12819))
;


var g__12658__auto___12823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12658__auto___12823){
return (function cljs$spec$impl$gen$double(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12824 = arguments.length;
var i__8606__auto___12825 = (0);
while(true){
if((i__8606__auto___12825 < len__8605__auto___12824)){
args__8612__auto__.push((arguments[i__8606__auto___12825]));

var G__12826 = (i__8606__auto___12825 + (1));
i__8606__auto___12825 = G__12826;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12823))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12823){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12823);
});})(g__12658__auto___12823))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12658__auto___12823){
return (function (seq12781){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12781));
});})(g__12658__auto___12823))
;


var g__12658__auto___12827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12658__auto___12827){
return (function cljs$spec$impl$gen$int(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12828 = arguments.length;
var i__8606__auto___12829 = (0);
while(true){
if((i__8606__auto___12829 < len__8605__auto___12828)){
args__8612__auto__.push((arguments[i__8606__auto___12829]));

var G__12830 = (i__8606__auto___12829 + (1));
i__8606__auto___12829 = G__12830;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12827))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12827){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12827);
});})(g__12658__auto___12827))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12658__auto___12827){
return (function (seq12782){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12782));
});})(g__12658__auto___12827))
;


var g__12658__auto___12831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12658__auto___12831){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12832 = arguments.length;
var i__8606__auto___12833 = (0);
while(true){
if((i__8606__auto___12833 < len__8605__auto___12832)){
args__8612__auto__.push((arguments[i__8606__auto___12833]));

var G__12834 = (i__8606__auto___12833 + (1));
i__8606__auto___12833 = G__12834;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12831))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12831){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12831);
});})(g__12658__auto___12831))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12658__auto___12831){
return (function (seq12783){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12783));
});})(g__12658__auto___12831))
;


var g__12658__auto___12835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12658__auto___12835){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12836 = arguments.length;
var i__8606__auto___12837 = (0);
while(true){
if((i__8606__auto___12837 < len__8605__auto___12836)){
args__8612__auto__.push((arguments[i__8606__auto___12837]));

var G__12838 = (i__8606__auto___12837 + (1));
i__8606__auto___12837 = G__12838;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12835))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12835){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12835);
});})(g__12658__auto___12835))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12658__auto___12835){
return (function (seq12784){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12784));
});})(g__12658__auto___12835))
;


var g__12658__auto___12839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12658__auto___12839){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12840 = arguments.length;
var i__8606__auto___12841 = (0);
while(true){
if((i__8606__auto___12841 < len__8605__auto___12840)){
args__8612__auto__.push((arguments[i__8606__auto___12841]));

var G__12842 = (i__8606__auto___12841 + (1));
i__8606__auto___12841 = G__12842;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12839))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12839){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12839);
});})(g__12658__auto___12839))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12658__auto___12839){
return (function (seq12785){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12785));
});})(g__12658__auto___12839))
;


var g__12658__auto___12843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12658__auto___12843){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12844 = arguments.length;
var i__8606__auto___12845 = (0);
while(true){
if((i__8606__auto___12845 < len__8605__auto___12844)){
args__8612__auto__.push((arguments[i__8606__auto___12845]));

var G__12846 = (i__8606__auto___12845 + (1));
i__8606__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12843))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12843){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12843);
});})(g__12658__auto___12843))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12658__auto___12843){
return (function (seq12786){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12786));
});})(g__12658__auto___12843))
;


var g__12658__auto___12847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12658__auto___12847){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12848 = arguments.length;
var i__8606__auto___12849 = (0);
while(true){
if((i__8606__auto___12849 < len__8605__auto___12848)){
args__8612__auto__.push((arguments[i__8606__auto___12849]));

var G__12850 = (i__8606__auto___12849 + (1));
i__8606__auto___12849 = G__12850;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12847))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12847){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12847);
});})(g__12658__auto___12847))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12658__auto___12847){
return (function (seq12787){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12787));
});})(g__12658__auto___12847))
;


var g__12658__auto___12851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12658__auto___12851){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12852 = arguments.length;
var i__8606__auto___12853 = (0);
while(true){
if((i__8606__auto___12853 < len__8605__auto___12852)){
args__8612__auto__.push((arguments[i__8606__auto___12853]));

var G__12854 = (i__8606__auto___12853 + (1));
i__8606__auto___12853 = G__12854;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12851))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12851){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12851);
});})(g__12658__auto___12851))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12658__auto___12851){
return (function (seq12788){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12788));
});})(g__12658__auto___12851))
;


var g__12658__auto___12855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12658__auto___12855){
return (function cljs$spec$impl$gen$string(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12856 = arguments.length;
var i__8606__auto___12857 = (0);
while(true){
if((i__8606__auto___12857 < len__8605__auto___12856)){
args__8612__auto__.push((arguments[i__8606__auto___12857]));

var G__12858 = (i__8606__auto___12857 + (1));
i__8606__auto___12857 = G__12858;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12855))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12855){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12855);
});})(g__12658__auto___12855))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12658__auto___12855){
return (function (seq12789){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12789));
});})(g__12658__auto___12855))
;


var g__12658__auto___12859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12658__auto___12859){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12860 = arguments.length;
var i__8606__auto___12861 = (0);
while(true){
if((i__8606__auto___12861 < len__8605__auto___12860)){
args__8612__auto__.push((arguments[i__8606__auto___12861]));

var G__12862 = (i__8606__auto___12861 + (1));
i__8606__auto___12861 = G__12862;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12859))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12859){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12859);
});})(g__12658__auto___12859))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12658__auto___12859){
return (function (seq12790){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12790));
});})(g__12658__auto___12859))
;


var g__12658__auto___12863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12658__auto___12863){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12864 = arguments.length;
var i__8606__auto___12865 = (0);
while(true){
if((i__8606__auto___12865 < len__8605__auto___12864)){
args__8612__auto__.push((arguments[i__8606__auto___12865]));

var G__12866 = (i__8606__auto___12865 + (1));
i__8606__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12863))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12863){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12863);
});})(g__12658__auto___12863))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12658__auto___12863){
return (function (seq12791){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12791));
});})(g__12658__auto___12863))
;


var g__12658__auto___12867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12658__auto___12867){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12868 = arguments.length;
var i__8606__auto___12869 = (0);
while(true){
if((i__8606__auto___12869 < len__8605__auto___12868)){
args__8612__auto__.push((arguments[i__8606__auto___12869]));

var G__12870 = (i__8606__auto___12869 + (1));
i__8606__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12867))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12867){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12867);
});})(g__12658__auto___12867))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12658__auto___12867){
return (function (seq12792){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12792));
});})(g__12658__auto___12867))
;


var g__12658__auto___12871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12658__auto___12871){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12872 = arguments.length;
var i__8606__auto___12873 = (0);
while(true){
if((i__8606__auto___12873 < len__8605__auto___12872)){
args__8612__auto__.push((arguments[i__8606__auto___12873]));

var G__12874 = (i__8606__auto___12873 + (1));
i__8606__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12871))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12871){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12871);
});})(g__12658__auto___12871))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12658__auto___12871){
return (function (seq12793){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12793));
});})(g__12658__auto___12871))
;


var g__12658__auto___12875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12658__auto___12875){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12876 = arguments.length;
var i__8606__auto___12877 = (0);
while(true){
if((i__8606__auto___12877 < len__8605__auto___12876)){
args__8612__auto__.push((arguments[i__8606__auto___12877]));

var G__12878 = (i__8606__auto___12877 + (1));
i__8606__auto___12877 = G__12878;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__12658__auto___12875))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12658__auto___12875){
return (function (args){
return cljs.core.deref.call(null,g__12658__auto___12875);
});})(g__12658__auto___12875))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12658__auto___12875){
return (function (seq12794){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12794));
});})(g__12658__auto___12875))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8612__auto__ = [];
var len__8605__auto___12881 = arguments.length;
var i__8606__auto___12882 = (0);
while(true){
if((i__8606__auto___12882 < len__8605__auto___12881)){
args__8612__auto__.push((arguments[i__8606__auto___12882]));

var G__12883 = (i__8606__auto___12882 + (1));
i__8606__auto___12882 = G__12883;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12879_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12879_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12880){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12880));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12884_SHARP_){
return (new Date(p1__12884_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map