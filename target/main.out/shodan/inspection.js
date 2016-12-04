// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('shodan.inspection');
goog.require('cljs.core');
goog.require('shodan.console');
goog.require('clojure.string');
shodan.inspection.find_type = (function shodan$inspection$find_type(obj){
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$seq;
} else {
return cljs.core.cst$kw$default;

}
}
}
});
shodan.inspection.group_name = (function shodan$inspection$group_name(prefix,brace){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,brace], null)));
});
if(typeof shodan.inspection.inspect !== 'undefined'){
} else {
/**
 * Inspects a ClojureScript data structure by displaying it in the
 *   browser's console. Collections are shown using log groups to
 *   represent their structure.
 */
shodan.inspection.inspect = (function (){var method_table__8415__auto__ = (function (){var G__21480 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21480) : cljs.core.atom.call(null,G__21480));
})();
var prefer_table__8416__auto__ = (function (){var G__21481 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21481) : cljs.core.atom.call(null,G__21481));
})();
var method_cache__8417__auto__ = (function (){var G__21482 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21482) : cljs.core.atom.call(null,G__21482));
})();
var cached_hierarchy__8418__auto__ = (function (){var G__21483 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21483) : cljs.core.atom.call(null,G__21483));
})();
var hierarchy__8419__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("shodan.inspection","inspect"),((function (method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__){
return (function() { 
var G__21484__delegate = function (x,args){
return shodan.inspection.find_type(x);
};
var G__21484 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__21485__i = 0, G__21485__a = new Array(arguments.length -  1);
while (G__21485__i < G__21485__a.length) {G__21485__a[G__21485__i] = arguments[G__21485__i + 1]; ++G__21485__i;}
  args = new cljs.core.IndexedSeq(G__21485__a,0);
} 
return G__21484__delegate.call(this,x,args);};
G__21484.cljs$lang$maxFixedArity = 1;
G__21484.cljs$lang$applyTo = (function (arglist__21486){
var x = cljs.core.first(arglist__21486);
var args = cljs.core.rest(arglist__21486);
return G__21484__delegate(x,args);
});
G__21484.cljs$core$IFn$_invoke$arity$variadic = G__21484__delegate;
return G__21484;
})()
;})(method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__))
,cljs.core.cst$kw$default,hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (a_map,prefix){
console.group(shodan.inspection.group_name(prefix,"{"));

var result__21365__auto__ = (function (){
var seq__21487_21501 = cljs.core.seq(a_map);
var chunk__21488_21502 = null;
var count__21489_21503 = (0);
var i__21490_21504 = (0);
while(true){
if((i__21490_21504 < count__21489_21503)){
var vec__21491_21505 = chunk__21488_21502.cljs$core$IIndexed$_nth$arity$2(null,i__21490_21504);
var k_21506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21491_21505,(0),null);
var v_21507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21491_21505,(1),null);
var G__21494_21508 = v_21507;
var G__21495_21509 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_21506], 0));
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2(G__21494_21508,G__21495_21509) : shodan.inspection.inspect.call(null,G__21494_21508,G__21495_21509));

var G__21510 = seq__21487_21501;
var G__21511 = chunk__21488_21502;
var G__21512 = count__21489_21503;
var G__21513 = (i__21490_21504 + (1));
seq__21487_21501 = G__21510;
chunk__21488_21502 = G__21511;
count__21489_21503 = G__21512;
i__21490_21504 = G__21513;
continue;
} else {
var temp__6753__auto___21514 = cljs.core.seq(seq__21487_21501);
if(temp__6753__auto___21514){
var seq__21487_21515__$1 = temp__6753__auto___21514;
if(cljs.core.chunked_seq_QMARK_(seq__21487_21515__$1)){
var c__8295__auto___21516 = cljs.core.chunk_first(seq__21487_21515__$1);
var G__21517 = cljs.core.chunk_rest(seq__21487_21515__$1);
var G__21518 = c__8295__auto___21516;
var G__21519 = cljs.core.count(c__8295__auto___21516);
var G__21520 = (0);
seq__21487_21501 = G__21517;
chunk__21488_21502 = G__21518;
count__21489_21503 = G__21519;
i__21490_21504 = G__21520;
continue;
} else {
var vec__21496_21521 = cljs.core.first(seq__21487_21515__$1);
var k_21522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21496_21521,(0),null);
var v_21523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21496_21521,(1),null);
var G__21499_21524 = v_21523;
var G__21500_21525 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_21522], 0));
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$2(G__21499_21524,G__21500_21525) : shodan.inspection.inspect.call(null,G__21499_21524,G__21500_21525));

var G__21526 = cljs.core.next(seq__21487_21515__$1);
var G__21527 = null;
var G__21528 = (0);
var G__21529 = (0);
seq__21487_21501 = G__21526;
chunk__21488_21502 = G__21527;
count__21489_21503 = G__21528;
i__21490_21504 = G__21529;
continue;
}
} else {
}
}
break;
}

return console.log("}");
})()
;
console.groupEnd();

return result__21365__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (a_vec,prefix){
console.group(shodan.inspection.group_name(prefix,"["));

var result__21365__auto__ = (function (){
var seq__21530_21534 = cljs.core.seq(a_vec);
var chunk__21531_21535 = null;
var count__21532_21536 = (0);
var i__21533_21537 = (0);
while(true){
if((i__21533_21537 < count__21532_21536)){
var obj_21538 = chunk__21531_21535.cljs$core$IIndexed$_nth$arity$2(null,i__21533_21537);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_21538) : shodan.inspection.inspect.call(null,obj_21538));

var G__21539 = seq__21530_21534;
var G__21540 = chunk__21531_21535;
var G__21541 = count__21532_21536;
var G__21542 = (i__21533_21537 + (1));
seq__21530_21534 = G__21539;
chunk__21531_21535 = G__21540;
count__21532_21536 = G__21541;
i__21533_21537 = G__21542;
continue;
} else {
var temp__6753__auto___21543 = cljs.core.seq(seq__21530_21534);
if(temp__6753__auto___21543){
var seq__21530_21544__$1 = temp__6753__auto___21543;
if(cljs.core.chunked_seq_QMARK_(seq__21530_21544__$1)){
var c__8295__auto___21545 = cljs.core.chunk_first(seq__21530_21544__$1);
var G__21546 = cljs.core.chunk_rest(seq__21530_21544__$1);
var G__21547 = c__8295__auto___21545;
var G__21548 = cljs.core.count(c__8295__auto___21545);
var G__21549 = (0);
seq__21530_21534 = G__21546;
chunk__21531_21535 = G__21547;
count__21532_21536 = G__21548;
i__21533_21537 = G__21549;
continue;
} else {
var obj_21550 = cljs.core.first(seq__21530_21544__$1);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_21550) : shodan.inspection.inspect.call(null,obj_21550));

var G__21551 = cljs.core.next(seq__21530_21544__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21530_21534 = G__21551;
chunk__21531_21535 = G__21552;
count__21532_21536 = G__21553;
i__21533_21537 = G__21554;
continue;
}
} else {
}
}
break;
}

return console.log("]");
})()
;
console.groupEnd();

return result__21365__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$seq,(function (a_vec,prefix){
console.group(shodan.inspection.group_name(prefix,"("));

var result__21365__auto__ = (function (){
var seq__21555_21559 = cljs.core.seq(a_vec);
var chunk__21556_21560 = null;
var count__21557_21561 = (0);
var i__21558_21562 = (0);
while(true){
if((i__21558_21562 < count__21557_21561)){
var obj_21563 = chunk__21556_21560.cljs$core$IIndexed$_nth$arity$2(null,i__21558_21562);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_21563) : shodan.inspection.inspect.call(null,obj_21563));

var G__21564 = seq__21555_21559;
var G__21565 = chunk__21556_21560;
var G__21566 = count__21557_21561;
var G__21567 = (i__21558_21562 + (1));
seq__21555_21559 = G__21564;
chunk__21556_21560 = G__21565;
count__21557_21561 = G__21566;
i__21558_21562 = G__21567;
continue;
} else {
var temp__6753__auto___21568 = cljs.core.seq(seq__21555_21559);
if(temp__6753__auto___21568){
var seq__21555_21569__$1 = temp__6753__auto___21568;
if(cljs.core.chunked_seq_QMARK_(seq__21555_21569__$1)){
var c__8295__auto___21570 = cljs.core.chunk_first(seq__21555_21569__$1);
var G__21571 = cljs.core.chunk_rest(seq__21555_21569__$1);
var G__21572 = c__8295__auto___21570;
var G__21573 = cljs.core.count(c__8295__auto___21570);
var G__21574 = (0);
seq__21555_21559 = G__21571;
chunk__21556_21560 = G__21572;
count__21557_21561 = G__21573;
i__21558_21562 = G__21574;
continue;
} else {
var obj_21575 = cljs.core.first(seq__21555_21569__$1);
(shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1 ? shodan.inspection.inspect.cljs$core$IFn$_invoke$arity$1(obj_21575) : shodan.inspection.inspect.call(null,obj_21575));

var G__21576 = cljs.core.next(seq__21555_21569__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__21555_21559 = G__21576;
chunk__21556_21560 = G__21577;
count__21557_21561 = G__21578;
i__21558_21562 = G__21579;
continue;
}
} else {
}
}
break;
}

return console.log(")");
})()
;
console.groupEnd();

return result__21365__auto__;
}));
shodan.inspection.inspect.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() {
var G__21580 = null;
var G__21580__1 = (function (obj){
return console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
var G__21580__2 = (function (obj,prefix){
return console.log((function (){var or__7389__auto__ = prefix;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "";
}
})(),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
G__21580 = function(obj,prefix){
switch(arguments.length){
case 1:
return G__21580__1.call(this,obj);
case 2:
return G__21580__2.call(this,obj,prefix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21580.cljs$core$IFn$_invoke$arity$1 = G__21580__1;
G__21580.cljs$core$IFn$_invoke$arity$2 = G__21580__2;
return G__21580;
})()
);
