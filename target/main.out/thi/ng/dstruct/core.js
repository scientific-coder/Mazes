// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.dstruct.core');
goog.require('cljs.core');
thi.ng.dstruct.core.index = (function thi$ng$dstruct$core$index(i,t){
var temp__6751__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_BANG_ = (function thi$ng$dstruct$core$index_BANG_(i,t){
var temp__6751__auto__ = cljs.core.get.call(null,i,t);
if(cljs.core.truth_(temp__6751__auto__)){
var tt = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,i,t),t], null);
}
});
thi.ng.dstruct.core.index_kv = (function thi$ng$dstruct$core$index_kv(m,k,v){
var temp__6751__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var e = temp__6751__auto__;
return cljs.core.assoc.call(null,m,cljs.core.key.call(null,e),cljs.core.conj.call(null,cljs.core.val.call(null,e),v));
} else {
return cljs.core.assoc.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.index_kv_BANG_ = (function thi$ng$dstruct$core$index_kv_BANG_(m,k,v){
var temp__6751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__6751__auto__)){
var vv = temp__6751__auto__;
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,vv,v));
} else {
return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.dstruct.core.value_set = (function thi$ng$dstruct$core$value_set(var_args){
var args9383 = [];
var len__8605__auto___9386 = arguments.length;
var i__8606__auto___9387 = (0);
while(true){
if((i__8606__auto___9387 < len__8605__auto___9386)){
args9383.push((arguments[i__8606__auto___9387]));

var G__9388 = (i__8606__auto___9387 + (1));
i__8606__auto___9387 = G__9388;
continue;
} else {
}
break;
}

var G__9385 = args9383.length;
switch (G__9385) {
case 2:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9383.length)].join('')));

}
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$2 = (function (idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,idx,v));
});

thi.ng.dstruct.core.value_set.cljs$core$IFn$_invoke$arity$3 = (function (f,idx,v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),cljs.core.get.call(null,idx,v));
});

thi.ng.dstruct.core.value_set.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.dstruct.core.vec_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.dstruct.core.set_conj2_STAR_ = (function thi$ng$dstruct$core$set_conj2_STAR_(p1__9390_SHARP_,p2__9391_SHARP_){
if((p1__9390_SHARP_ == null)){
return p2__9391_SHARP_;
} else {
if(cljs.core.set_QMARK_.call(null,p1__9390_SHARP_)){
return cljs.core.conj.call(null,p1__9390_SHARP_,p2__9391_SHARP_);
} else {
return cljs.core.PersistentHashSet.fromArray([p2__9391_SHARP_,p1__9390_SHARP_], true);
}
}
});
thi.ng.dstruct.core.vec_conj2_STAR_ = (function thi$ng$dstruct$core$vec_conj2_STAR_(p1__9392_SHARP_,p2__9393_SHARP_){
if((p1__9392_SHARP_ == null)){
return p2__9393_SHARP_;
} else {
if(cljs.core.vector_QMARK_.call(null,p1__9392_SHARP_)){
return cljs.core.conj.call(null,p1__9392_SHARP_,p2__9393_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9392_SHARP_,p2__9393_SHARP_], null);
}
}
});
thi.ng.dstruct.core.collect_set = (function thi$ng$dstruct$core$collect_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),coll);
});
thi.ng.dstruct.core.collect_indexed = (function thi$ng$dstruct$core$collect_indexed(f,f2,coll){
var keys = thi.ng.dstruct.core.collect_set.call(null,f,coll);
return cljs.core.zipmap.call(null,keys,((cljs.core._EQ_.call(null,f2,cljs.core.identity))?keys:cljs.core.map.call(null,f2,keys)));
});
/**
 * Merge fn to be used with `merge-with`. Recursively merges map
 *   values which are maps or seqs (for the latter `into` is used, only
 *   if RHS is seq or set as well). If the RHS value has the metadata key
 *   `:replace` set, it is used as new value without merging.
 */
thi.ng.dstruct.core.deep_merge = (function thi$ng$dstruct$core$deep_merge(l,r){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.meta.call(null,r),new cljs.core.Keyword(null,"replace","replace",-786587770)))){
return r;
} else {
if((cljs.core.sequential_QMARK_.call(null,l)) || (cljs.core.set_QMARK_.call(null,l))){
if((cljs.core.sequential_QMARK_.call(null,r)) || (cljs.core.set_QMARK_.call(null,r))){
return cljs.core.into.call(null,l,r);
} else {
return r;
}
} else {
if(cljs.core.map_QMARK_.call(null,l)){
return cljs.core.merge_with.call(null,thi.ng.dstruct.core.deep_merge,l,r);
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
var args9394 = [];
var len__8605__auto___9400 = arguments.length;
var i__8606__auto___9401 = (0);
while(true){
if((i__8606__auto___9401 < len__8605__auto___9400)){
args9394.push((arguments[i__8606__auto___9401]));

var G__9402 = (i__8606__auto___9401 + (1));
i__8606__auto___9401 = G__9402;
continue;
} else {
}
break;
}

var G__9399 = args9394.length;
switch (G__9399) {
case 2:
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8628__auto__ = (new cljs.core.IndexedSeq(args9394.slice((2)),(0),null));
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8628__auto__);

}
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.merge_with.call(null,thi.ng.dstruct.core.deep_merge,a,b);
});

thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,maps){
return cljs.core.apply.call(null,cljs.core.merge_with,thi.ng.dstruct.core.deep_merge,a,b,maps);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$applyTo = (function (seq9395){
var G__9396 = cljs.core.first.call(null,seq9395);
var seq9395__$1 = cljs.core.next.call(null,seq9395);
var G__9397 = cljs.core.first.call(null,seq9395__$1);
var seq9395__$2 = cljs.core.next.call(null,seq9395__$1);
return thi.ng.dstruct.core.merge_deep.cljs$core$IFn$_invoke$arity$variadic(G__9396,G__9397,seq9395__$2);
});

thi.ng.dstruct.core.merge_deep.cljs$lang$maxFixedArity = (2);

thi.ng.dstruct.core.interval_set = (function thi$ng$dstruct$core$interval_set(var_args){
var args__8612__auto__ = [];
var len__8605__auto___9405 = arguments.length;
var i__8606__auto___9406 = (0);
while(true){
if((i__8606__auto___9406 < len__8605__auto___9405)){
args__8612__auto__.push((arguments[i__8606__auto___9406]));

var G__9407 = (i__8606__auto___9406 + (1));
i__8606__auto___9406 = G__9407;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.mapcat.call(null,(function (v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.range.call(null,cljs.core.first.call(null,v),(cljs.core.nth.call(null,v,(1)) + (1)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
})),ivals);
});

thi.ng.dstruct.core.interval_set.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.interval_set.cljs$lang$applyTo = (function (seq9404){
return thi.ng.dstruct.core.interval_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9404));
});

thi.ng.dstruct.core.check_intervals = (function thi$ng$dstruct$core$check_intervals(var_args){
var args__8612__auto__ = [];
var len__8605__auto___9417 = arguments.length;
var i__8606__auto___9418 = (0);
while(true){
if((i__8606__auto___9418 < len__8605__auto___9417)){
args__8612__auto__.push((arguments[i__8606__auto___9418]));

var G__9419 = (i__8606__auto___9418 + (1));
i__8606__auto___9418 = G__9419;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic = (function (ivals){
var vec__9410 = cljs.core.reduce.call(null,(function (p__9413,v){
var vec__9414 = p__9413;
var i = cljs.core.nth.call(null,vec__9414,(0),null);
var c = cljs.core.nth.call(null,vec__9414,(1),null);
if(cljs.core.sequential_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,v),c], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.call(null,c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);
var ivals__$1 = cljs.core.nth.call(null,vec__9410,(0),null);
var const$ = cljs.core.nth.call(null,vec__9410,(1),null);
return ((function (vec__9410,ivals__$1,const$){
return (function (x){
if(cljs.core.truth_(const$.call(null,x))){
return x;
} else {
return cljs.core.some.call(null,((function (vec__9410,ivals__$1,const$){
return (function (p1__9408_SHARP_){
if((cljs.core.first.call(null,p1__9408_SHARP_) <= x)){
return (x <= cljs.core.nth.call(null,p1__9408_SHARP_,(1)));
} else {
return null;
}
});})(vec__9410,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__9410,ivals__$1,const$))
});

thi.ng.dstruct.core.check_intervals.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.check_intervals.cljs$lang$applyTo = (function (seq9409){
return thi.ng.dstruct.core.check_intervals.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9409));
});

/**
 * All the ways to take one item from each sequence
 *   (taken from clojure.contrib.combinatorics)
 */
thi.ng.dstruct.core.cartesian_product = (function thi$ng$dstruct$core$cartesian_product(var_args){
var args__8612__auto__ = [];
var len__8605__auto___9421 = arguments.length;
var i__8606__auto___9422 = (0);
while(true){
if((i__8606__auto___9422 < len__8605__auto___9421)){
args__8612__auto__.push((arguments[i__8606__auto___9422]));

var G__9423 = (i__8606__auto___9422 + (1));
i__8606__auto___9422 = G__9423;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function thi$ng$dstruct$core$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if((i < (0))){
return null;
} else {
var temp__6751__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__6751__auto__){
var rst = temp__6751__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__9424 = (i - (1));
var G__9425 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__9424;
v_seqs__$2 = G__9425;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return thi$ng$dstruct$core$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

thi.ng.dstruct.core.cartesian_product.cljs$lang$maxFixedArity = (0);

thi.ng.dstruct.core.cartesian_product.cljs$lang$applyTo = (function (seq9420){
return thi.ng.dstruct.core.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9420));
});

thi.ng.dstruct.core.bisect = (function thi$ng$dstruct$core$bisect(var_args){
var args9426 = [];
var len__8605__auto___9436 = arguments.length;
var i__8606__auto___9437 = (0);
while(true){
if((i__8606__auto___9437 < len__8605__auto___9436)){
args9426.push((arguments[i__8606__auto___9437]));

var G__9438 = (i__8606__auto___9437 + (1));
i__8606__auto___9437 = G__9438;
continue;
} else {
}
break;
}

var G__9428 = args9426.length;
switch (G__9428) {
case 2:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9426.length)].join('')));

}
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var vec__9429 = cljs.core.reduce.call(null,(function (p__9432,v){
var vec__9433 = p__9432;
var m = cljs.core.nth.call(null,vec__9433,(0),null);
var n = cljs.core.nth.call(null,vec__9433,(1),null);
if(cljs.core.truth_(f.call(null,v))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,m,v),n], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.call(null,n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),coll);
var m = cljs.core.nth.call(null,vec__9429,(0),null);
var n = cljs.core.nth.call(null,vec__9429,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,m),cljs.core.persistent_BANG_.call(null,n)], null);
});

thi.ng.dstruct.core.bisect.cljs$core$IFn$_invoke$arity$3 = (function (f,f2,coll){
return cljs.core.mapv.call(null,f2,thi.ng.dstruct.core.bisect.call(null,f,coll));
});

thi.ng.dstruct.core.bisect.cljs$lang$maxFixedArity = 3;

thi.ng.dstruct.core.neighbors = (function thi$ng$dstruct$core$neighbors(x,coll){
var n = (cljs.core.count.call(null,coll) - (1));
var i = n;
while(true){
if((i >= (0))){
if(cljs.core._EQ_.call(null,x,cljs.core.nth.call(null,coll,i))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,coll,(((i > (0)))?(i - (1)):n)),cljs.core.nth.call(null,coll,(((i < n))?(i + (1)):(0)))], null);
} else {
var G__9440 = (i - (1));
i = G__9440;
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
var args9441 = [];
var len__8605__auto___9444 = arguments.length;
var i__8606__auto___9445 = (0);
while(true){
if((i__8606__auto___9445 < len__8605__auto___9444)){
args9441.push((arguments[i__8606__auto___9445]));

var G__9446 = (i__8606__auto___9445 + (1));
i__8606__auto___9445 = G__9446;
continue;
} else {
}
break;
}

var G__9443 = args9441.length;
switch (G__9443) {
case 2:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9441.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,cljs.core.rest.call(null,coll)));
} else {
return null;
}
}),null,null));
});

thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,cljs.core.vec.call(null,s),thi.ng.dstruct.core.successive_nth.call(null,n,step,cljs.core.drop.call(null,step,coll)));
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
var args9448 = [];
var len__8605__auto___9451 = arguments.length;
var i__8606__auto___9452 = (0);
while(true){
if((i__8606__auto___9452 < len__8605__auto___9451)){
args9448.push((arguments[i__8606__auto___9452]));

var G__9453 = (i__8606__auto___9452 + (1));
i__8606__auto___9452 = G__9453;
continue;
} else {
}
break;
}

var G__9450 = args9448.length;
switch (G__9450) {
case 2:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9448.length)].join('')));

}
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(0),coll);
});

thi.ng.dstruct.core.successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = (function (n,idx,coll){
return (new cljs.core.LazySeq(null,(function (){
var s = cljs.core.take.call(null,n,coll);
if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,s),idx], null),thi.ng.dstruct.core.successive_nth_indexed.call(null,n,(idx + (1)),cljs.core.rest.call(null,coll)));
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
var len__8605__auto___9459 = arguments.length;
var i__8606__auto___9460 = (0);
while(true){
if((i__8606__auto___9460 < len__8605__auto___9459)){
args__8612__auto__.push((arguments[i__8606__auto___9460]));

var G__9461 = (i__8606__auto___9460 + (1));
i__8606__auto___9460 = G__9461;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((3) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((3)),(0),null)):null);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8613__auto__);
});

thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = (function (type,keys,f,args){
return cljs.core.reduce.call(null,(function (acc,k){
return cljs.core.assoc.call(null,acc,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,type,k),args));
}),type,keys);
});

thi.ng.dstruct.core.apply_to_keys.cljs$lang$maxFixedArity = (3);

thi.ng.dstruct.core.apply_to_keys.cljs$lang$applyTo = (function (seq9455){
var G__9456 = cljs.core.first.call(null,seq9455);
var seq9455__$1 = cljs.core.next.call(null,seq9455);
var G__9457 = cljs.core.first.call(null,seq9455__$1);
var seq9455__$2 = cljs.core.next.call(null,seq9455__$1);
var G__9458 = cljs.core.first.call(null,seq9455__$2);
var seq9455__$3 = cljs.core.next.call(null,seq9455__$2);
return thi.ng.dstruct.core.apply_to_keys.cljs$core$IFn$_invoke$arity$variadic(G__9456,G__9457,G__9458,seq9455__$3);
});

thi.ng.dstruct.core.reduce_pairs = (function thi$ng$dstruct$core$reduce_pairs(var_args){
var args9462 = [];
var len__8605__auto___9469 = arguments.length;
var i__8606__auto___9470 = (0);
while(true){
if((i__8606__auto___9470 < len__8605__auto___9469)){
args9462.push((arguments[i__8606__auto___9470]));

var G__9471 = (i__8606__auto___9470 + (1));
i__8606__auto___9470 = G__9471;
continue;
} else {
}
break;
}

var G__9464 = args9462.length;
switch (G__9464) {
case 3:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9462.length)].join('')));

}
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3 = (function (f1,f2,coll){
return thi.ng.dstruct.core.reduce_pairs.call(null,f1,f2,null,coll);
});

thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$4 = (function (f1,f2,acc,coll){
if((cljs.core.count.call(null,coll) > (1))){
var pairs = cljs.core.map.call(null,(function (p__9465){
var vec__9466 = p__9465;
var a = cljs.core.nth.call(null,vec__9466,(0),null);
var b = cljs.core.nth.call(null,vec__9466,(1),null);
return f2.call(null,a,b);
}),cljs.core.partition.call(null,(2),(1),coll));
if(cljs.core.truth_(acc)){
return cljs.core.reduce.call(null,f1,acc,pairs);
} else {
return cljs.core.reduce.call(null,f1,pairs);
}
} else {
return null;
}
});

thi.ng.dstruct.core.reduce_pairs.cljs$lang$maxFixedArity = 4;

thi.ng.dstruct.core.wrap_seq = (function thi$ng$dstruct$core$wrap_seq(s,head,tail){
return cljs.core.concat.call(null,((cljs.core.sequential_QMARK_.call(null,head))?cljs.core.concat.call(null,head,s):cljs.core.cons.call(null,head,s)),((cljs.core.sequential_QMARK_.call(null,tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.dstruct.core.append_first = (function thi$ng$dstruct$core$append_first(xs){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs)], null));
});
thi.ng.dstruct.core.rotate_left = (function thi$ng$dstruct$core$rotate_left(n,xs){
if(cljs.core.vector_QMARK_.call(null,xs)){
return cljs.core.into.call(null,cljs.core.subvec.call(null,xs,n),cljs.core.subvec.call(null,xs,(0),n));
} else {
return cljs.core.concat.call(null,cljs.core.drop.call(null,n,xs),cljs.core.take.call(null,n,xs));
}
});
thi.ng.dstruct.core.index_of = (function thi$ng$dstruct$core$index_of(coll,item){
var i = (0);
var coll__$1 = coll;
while(true){
if(cljs.core.truth_(coll__$1)){
if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,coll__$1))){
return i;
} else {
var G__9473 = (i + (1));
var G__9474 = cljs.core.next.call(null,coll__$1);
i = G__9473;
coll__$1 = G__9474;
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
var idx = (thi.ng.dstruct.core.index_of.call(null,coll,item) + (1));
if((idx > (0))){
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.subvec.call(null,coll,idx);
} else {
return cljs.core.drop.call(null,idx,coll);
}
} else {
return coll;
}
});
thi.ng.dstruct.core.iterate_while = (function thi$ng$dstruct$core$iterate_while(pred,f,x){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.cons.call(null,x,thi.ng.dstruct.core.iterate_while.call(null,pred,f,f.call(null,x)));
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
var G__9475 = f.call(null,x__$1);
var G__9476 = (i + (1));
x__$1 = G__9475;
i = G__9476;
continue;
} else {
return x__$1;
}
break;
}
});
thi.ng.dstruct.core.walk = (function thi$ng$dstruct$core$walk(inner,outer,form){
if(cljs.core.seq_QMARK_.call(null,form)){
return outer.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,inner,form)));
} else {
if(cljs.core.vector_QMARK_.call(null,form)){
return outer.call(null,cljs.core.mapv.call(null,inner,form));
} else {
return outer.call(null,form);

}
}
});
thi.ng.dstruct.core.postwalk = (function thi$ng$dstruct$core$postwalk(f,form){
return thi.ng.dstruct.core.walk.call(null,(function (p1__9477_SHARP_){
return thi.ng.dstruct.core.postwalk.call(null,f,p1__9477_SHARP_);
}),f,form);
});
/**
 * Applies `f` to root coll and every of its (nested) elements. Returns
 *   a vector of items for which `f` returned a truthy value.
 */
thi.ng.dstruct.core.filter_tree = (function thi$ng$dstruct$core$filter_tree(f,root){
var walk = (function thi$ng$dstruct$core$filter_tree_$_walk(acc,node){
if(cljs.core.truth_(f.call(null,node))){
return cljs.core.conj_BANG_.call(null,acc,node);
} else {
if(cljs.core.coll_QMARK_.call(null,node)){
return cljs.core.reduce.call(null,thi$ng$dstruct$core$filter_tree_$_walk,acc,node);
} else {
return acc;

}
}
});
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,walk,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),root));
});
thi.ng.dstruct.core.unwrap_str = (function thi$ng$dstruct$core$unwrap_str(s,n){
return cljs.core.subs.call(null,s,n,(cljs.core.count.call(null,s) - n));
});
thi.ng.dstruct.core.wrap_str = (function thi$ng$dstruct$core$wrap_str(s,pre,post){
return [cljs.core.str(pre),cljs.core.str(s),cljs.core.str(post)].join('');
});
thi.ng.dstruct.core.stringify_keys = (function thi$ng$dstruct$core$stringify_keys(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.key.call(null,e))].join(''),cljs.core.val.call(null,e)], null);
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
var flags = cljs.core.name.call(null,kw);
return cljs.core.reduce.call(null,((function (flags){
return (function (acc,x){
var x__$1 = [cljs.core.str(x)].join('');
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,x__$1),((0) <= flags.indexOf(x__$1)));
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
var flags = cljs.core.name.call(null,kw);
return cljs.core.map.call(null,((function (flags){
return (function (p1__9478_SHARP_){
return ((0) <= flags.indexOf([cljs.core.str(p1__9478_SHARP_)].join('')));
});})(flags))
,xs);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map