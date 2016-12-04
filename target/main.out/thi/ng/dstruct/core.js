// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.dstruct.core');
goog.require('cljs.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__6751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var e = temp__6751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.key(e),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.val(e),v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__6751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var vv = temp__6751__auto__;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vv,v));
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var args14406 = [];
var len__8605__auto___14409 = arguments.length;
var i__8606__auto___14410 = (0);
while(true){
if((i__8606__auto___14410 < len__8605__auto___14409)){
args14406.push((arguments[i__8606__auto___14410]));

var G__14411 = (i__8606__auto___14410 + (1));
i__8606__auto___14410 = G__14411;
continue;
} else {
}
break;
}

var G__14408 = args14406.length;
switch (G__14408) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14406.length)].join('')));

}
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idx,v));
});

thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__14413_SHARP_,p2__14414_SHARP_){
if((p1__14413_SHARP_ == null)){
return p2__14414_SHARP_;
} else {
if(cljs.core.set_QMARK_(p1__14413_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14413_SHARP_,p2__14414_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p1__14413_SHARP_,p2__14414_SHARP_], true);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__14415_SHARP_,p2__14416_SHARP_){
if((p1__14415_SHARP_ == null)){
return p2__14416_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__14415_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14415_SHARP_,p2__14416_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14415_SHARP_,p2__14416_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),coll);
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set(f,coll);
return cljs.core.zipmap(keys,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f2,cljs.core.identity))?keys:cljs.core.map.cljs$core$IFn$_invoke$arity$2(f2,keys)));
});
/**
 * Merge fn to be used with `merge-with`. Recursively merges map
 *   values which are maps or seqs (for the latter `into` is used, only
 *   if RHS is seq or set as well). If the RHS value has the metadata key
 *   `:replace` set, it is used as new value without merging.
 */
thi.ng.dstruct.core.deep_merge = (function thi$ng$dstruct$core$deep_merge(l,r){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(r),cljs.core.cst$kw$replace))){
return r;
} else {
if((cljs.core.sequential_QMARK_(l)) || (cljs.core.set_QMARK_(l))){
if((cljs.core.sequential_QMARK_(r)) || (cljs.core.set_QMARK_(r))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(l,r);
} else {
return r;
}
} else {
if(cljs.core.map_QMARK_(l)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(thi.ng.dstruct.core.deep_merge,cljs.core.array_seq([l,r], 0));
} else {
return r;

}
}
}
});
/**
 * Calls `merge-with` using `deep-merge` as merge fn.
 */
thi.ng.dstruct.core.merge_deep = (function thi$ng$dstruct$core$merge_deep(var_args){
var args14417 = [];
var len__8605__auto___14423 = arguments.length;
var i__8606__auto___14424 = (0);
while(true){
if((i__8606__auto___14424 < len__8605__auto___14423)){
args14417.push((arguments[i__8606__auto___14424]));

var G__14425 = (i__8606__auto___14424 + (1));
i__8606__auto___14424 = G__14425;
continue;
} else {
}
break;
}

var G__14422 = args14417.length;
switch (G__14422) {
case 2:
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8628__auto__ = (new cljs.core.IndexedSeq(args14417.slice((2)),(0),null));
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8628__auto__);

}
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(thi.ng.dstruct.core.deep_merge,cljs.core.array_seq([a,b], 0));
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.merge_with,thi.ng.dstruct.core.deep_merge,a,b,maps);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$applyTo = (function (seq14418){
var G__14419 = cljs.core.first(seq14418);
var seq14418__$1 = cljs.core.next(seq14418);
var G__14420 = cljs.core.first(seq14418__$1);
var seq14418__$2 = cljs.core.next(seq14418__$1);
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic(G__14419,G__14420,seq14418__$2);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$maxFixedArity = (2);

thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14428 = arguments.length;
var i__8606__auto___14429 = (0);
while(true){
if((i__8606__auto___14429 < len__8605__auto___14428)){
args__8612__auto__.push((arguments[i__8606__auto___14429]));

var G__14430 = (i__8606__auto___14429 + (1));
i__8606__auto___14429 = G__14430;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.sorted_set(),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (v){
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.first(v),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
})),ivals);
});

thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq14427){
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14427));
});

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14440 = arguments.length;
var i__8606__auto___14441 = (0);
while(true){
if((i__8606__auto___14441 < len__8605__auto___14440)){
args__8612__auto__.push((arguments[i__8606__auto___14441]));

var G__14442 = (i__8606__auto___14441 + (1));
i__8606__auto___14441 = G__14442;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__14433 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14436,v){
var vec__14437 = p__14436;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14433,(0),null);
var const$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14433,(1),null);
return ((function (vec__14433,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_((const$.cljs$core$IFn$_invoke$arity$1 ? const$.cljs$core$IFn$_invoke$arity$1(x) : const$.call(null,x)))){
return x;
} else {
return cljs.core.some(((function (vec__14433,ivals__$1,const$){
return (function (p1__14431_SHARP_){
if((cljs.core.first(p1__14431_SHARP_) <= x)){
return (x <= cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__14431_SHARP_,(1)));
} else {
return null;
}
});})(vec__14433,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__14433,ivals__$1,const$))
});

thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq14432){
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14432));
});

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14445 = arguments.length;
var i__8606__auto___14446 = (0);
while(true){
if((i__8606__auto___14446 < len__8605__auto___14445)){
args__8612__auto__.push((arguments[i__8606__auto___14446]));

var G__14447 = (i__8606__auto___14446 + (1));
i__8606__auto___14446 = G__14447;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$dstruct$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__6751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__6751__auto__){
var rst = temp__6751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__14448 = (i - (1));
var G__14449 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__14448;
v_seqs__$2 = G__14449;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$dstruct$core$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq14443){
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14443));
});

thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var args14450 = [];
var len__8605__auto___14460 = arguments.length;
var i__8606__auto___14461 = (0);
while(true){
if((i__8606__auto___14461 < len__8605__auto___14460)){
args14450.push((arguments[i__8606__auto___14461]));

var G__14462 = (i__8606__auto___14461 + (1));
i__8606__auto___14461 = G__14462;
continue;
} else {
}
break;
}

var G__14452 = args14450.length;
switch (G__14452) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14450.length)].join('')));

}
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__14453 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14456,v){
var vec__14457 = p__14456;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14457,(1),null);
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(m),cljs.core.persistent_BANG_(n)], null);
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f2,thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2(f,coll));
});

thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count(coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(((i > (0)))?(i - (1)):n)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__14464 = (i - (1));
i = G__14464;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazyseq of `n`-element vectors, each one containing
 *   a successive elements of the original collection.
 * 
 *    (successive-nth 3 [1 2 3 4])
 *    => ([1 2 3] [2 3 4] [3 4 5])
 */
thi.ng.dstruct.core.successive_nth = (function thi$ng$dstruct$core$successive_nth(var_args){
var args14465 = [];
var len__8605__auto___14468 = arguments.length;
var i__8606__auto___14469 = (0);
while(true){
if((i__8606__auto___14469 < len__8605__auto___14468)){
args14465.push((arguments[i__8606__auto___14469]));

var G__14470 = (i__8606__auto___14469 + (1));
i__8606__auto___14469 = G__14470;
continue;
} else {
}
break;
}

var G__14467 = args14465.length;
switch (G__14467) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14465.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2(n,cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(cljs.core.vec(s),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3(n,step,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(step,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$lang$maxFixedArity = 3;

/**
 * Returns a lazyseq of nested 2-element vectors, each one containing
 *   a vector of `n` successive elements of the original collection and
 *   an sequence index.
 * 
 *    (successive-nth-indexed 2 [10 20 30 40])
 *    => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
 */
thi.ng.dstruct.core.successive_nth_indexed = (function thi$ng$dstruct$core$successive_nth_indexed(var_args){
var args14472 = [];
var len__8605__auto___14475 = arguments.length;
var i__8606__auto___14476 = (0);
while(true){
if((i__8606__auto___14476 < len__8605__auto___14475)){
args14472.push((arguments[i__8606__auto___14476]));

var G__14477 = (i__8606__auto___14476 + (1));
i__8606__auto___14476 = G__14477;
continue;
} else {
}
break;
}

var G__14474 = args14472.length;
switch (G__14474) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14472.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(0),coll);
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(s))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3(n,(idx + (1)),cljs.core.rest(coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$lang$maxFixedArity = 3;

/**
 * Applies `f` with `args` to all given `keys` in `type`.
 */
thi.ng.dstruct.core.apply_to_keys = (function thi$ng$dstruct$core$apply_to_keys(var_args){
var args__8612__auto__ = [];
var len__8605__auto___14483 = arguments.length;
var i__8606__auto___14484 = (0);
while(true){
if((i__8606__auto___14484 < len__8605__auto___14483)){
args__8612__auto__.push((arguments[i__8606__auto___14484]));

var G__14485 = (i__8606__auto___14484 + (1));
i__8606__auto___14484 = G__14485;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((3) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8613__auto__);
});

thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(type,k),args));
}),type,keys);
});

thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq14479){
var G__14480 = cljs.core.first(seq14479);
var seq14479__$1 = cljs.core.next(seq14479);
var G__14481 = cljs.core.first(seq14479__$1);
var seq14479__$2 = cljs.core.next(seq14479__$1);
var G__14482 = cljs.core.first(seq14479__$2);
var seq14479__$3 = cljs.core.next(seq14479__$2);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__14480,G__14481,G__14482,seq14479__$3);
});

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var args14486 = [];
var len__8605__auto___14493 = arguments.length;
var i__8606__auto___14494 = (0);
while(true){
if((i__8606__auto___14494 < len__8605__auto___14493)){
args14486.push((arguments[i__8606__auto___14494]));

var G__14495 = (i__8606__auto___14494 + (1));
i__8606__auto___14494 = G__14495;
continue;
} else {
}
break;
}

var G__14488 = args14486.length;
switch (G__14488) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14486.length)].join('')));

}
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4(f1,f2,null,coll);
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count(coll) > (1))){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14489){
var vec__14490 = p__14489;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(1),null);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(a,b) : f2.call(null,a,b));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f1,acc,pairs);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f1,pairs);
}
} else {
return null;
}
});

thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4;

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.sequential_QMARK_(head))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(head,s):cljs.core.cons(head,s)),((cljs.core.sequential_QMARK_(tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(xs,n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(xs,(0),n));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,xs),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(coll__$1))){
return i;
} else {
var G__14497 = (i + (1));
var G__14498 = cljs.core.next(coll__$1);
i = G__14497;
coll__$1 = G__14498;
continue;
}
} else {
return (-1);
}
break;
}
});
/**
 * Returns a new collection of all items after `item` in original `coll`.
 *   If `coll` is a vector, the new collection is created with `subvec`.
 *   Returns original coll if item isn't found.
 */
thi.ng.dstruct.core.all_after = (function thi$ng$dstruct$core$all_after(item,coll){
var idx = (thi.ng.dstruct.core.index_of(coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,idx);
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.cons(x,(function (){var G__14502 = pred;
var G__14503 = f;
var G__14504 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return (thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3 ? thi.ng.dstruct.core.iterate_while.cljs$core$IFn$_invoke$arity$3(G__14502,G__14503,G__14504) : thi.ng.dstruct.core.iterate_while.call(null,G__14502,G__14503,G__14504));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Iteratively applies f to x, n times, then returns result.
 */
thi.ng.dstruct.core.iterate_n = (function thi$ng$dstruct$core$iterate_n(n,f,x){
var x__$1 = x;
var i = (0);
while(true){
if((i < n)){
var G__14505 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x__$1) : f.call(null,x__$1));
var G__14506 = (i + (1));
x__$1 = G__14505;
i = G__14506;
continue;
} else {
return x__$1;
}
break;
}
});
thi.ng.dstruct.core.walk = (function thi$ng$dstruct$core$walk(inner,outer,form){
if(cljs.core.seq_QMARK_(form)){
var G__14509 = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__14509) : outer.call(null,G__14509));
} else {
if(cljs.core.vector_QMARK_(form)){
var G__14510 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inner,form);
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(G__14510) : outer.call(null,G__14510));
} else {
return (outer.cljs$core$IFn$_invoke$arity$1 ? outer.cljs$core$IFn$_invoke$arity$1(form) : outer.call(null,form));

}
}
});
thi.ng.dstruct.core.postwalk = (function thi$ng$dstruct$core$postwalk(f,form){
return thi.ng.dstruct.core.walk((function (p1__14511_SHARP_){
return (thi.ng.dstruct.core.postwalk.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.core.postwalk.cljs$core$IFn$_invoke$arity$2(f,p1__14511_SHARP_) : thi.ng.dstruct.core.postwalk.call(null,f,p1__14511_SHARP_));
}),f,form);
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(node) : f.call(null,node)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,node);
} else {
if(cljs.core.coll_QMARK_(node)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(walk,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),root));
});
thi.ng.dstruct.core.unwrap_str = (function thi$ng$dstruct$core$unwrap_str(s,n){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,n,(cljs.core.count(s) - n));
});
thi.ng.dstruct.core.wrap_str = (function thi$ng$dstruct$core$wrap_str(s,pre,post){
return [cljs.core.str(pre),cljs.core.str(s),cljs.core.str(post)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.key(e))].join(''),cljs.core.val(e)], null);
})),m);
});
/**
 * Takes a keyword or string of flags and string/seq of items, returns
 *   map with items as keys and boolean values indicating if an item has
 *   been found in the string representation of the kw. If `kw` is nil,
 *   returns nil.
 * 
 *    (demunge-flags :cad "abcd")
 *    #_=> {:a true :b false :c true :d true}
 */
thi.ng.dstruct.core.demunge_flags = (function thi$ng$dstruct$core$demunge_flags(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x__$1),((0) <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else {
return null;
}
});
/**
 * Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
 * 
 *    (demunge-flags-seq :cad "abcd") => [true false true true]
 */
thi.ng.dstruct.core.demunge_flags_seq = (function thi$ng$dstruct$core$demunge_flags_seq(kw,xs){
if(cljs.core.truth_(kw)){
var flags = cljs.core.name(kw);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (flags){
return (function (p1__14512_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__14512_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});
