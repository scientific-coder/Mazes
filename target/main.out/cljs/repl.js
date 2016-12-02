// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20546){
var map__20571 = p__20546;
var map__20571__$1 = ((((!((map__20571 == null)))?((((map__20571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20571):map__20571);
var m = map__20571__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20571__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__6753__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__20573_20595 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__20574_20596 = null;
var count__20575_20597 = (0);
var i__20576_20598 = (0);
while(true){
if((i__20576_20598 < count__20575_20597)){
var f_20599 = chunk__20574_20596.cljs$core$IIndexed$_nth$arity$2(null,i__20576_20598);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_20599], 0));

var G__20600 = seq__20573_20595;
var G__20601 = chunk__20574_20596;
var G__20602 = count__20575_20597;
var G__20603 = (i__20576_20598 + (1));
seq__20573_20595 = G__20600;
chunk__20574_20596 = G__20601;
count__20575_20597 = G__20602;
i__20576_20598 = G__20603;
continue;
} else {
var temp__6753__auto___20604 = cljs.core.seq(seq__20573_20595);
if(temp__6753__auto___20604){
var seq__20573_20605__$1 = temp__6753__auto___20604;
if(cljs.core.chunked_seq_QMARK_(seq__20573_20605__$1)){
var c__8295__auto___20606 = cljs.core.chunk_first(seq__20573_20605__$1);
var G__20607 = cljs.core.chunk_rest(seq__20573_20605__$1);
var G__20608 = c__8295__auto___20606;
var G__20609 = cljs.core.count(c__8295__auto___20606);
var G__20610 = (0);
seq__20573_20595 = G__20607;
chunk__20574_20596 = G__20608;
count__20575_20597 = G__20609;
i__20576_20598 = G__20610;
continue;
} else {
var f_20611 = cljs.core.first(seq__20573_20605__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_20611], 0));

var G__20612 = cljs.core.next(seq__20573_20605__$1);
var G__20613 = null;
var G__20614 = (0);
var G__20615 = (0);
seq__20573_20595 = G__20612;
chunk__20574_20596 = G__20613;
count__20575_20597 = G__20614;
i__20576_20598 = G__20615;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20616 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7389__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_20616], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_20616)))?cljs.core.second(arglists_20616):arglists_20616)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__20577_20617 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__20578_20618 = null;
var count__20579_20619 = (0);
var i__20580_20620 = (0);
while(true){
if((i__20580_20620 < count__20579_20619)){
var vec__20581_20621 = chunk__20578_20618.cljs$core$IIndexed$_nth$arity$2(null,i__20580_20620);
var name_20622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581_20621,(0),null);
var map__20584_20623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20581_20621,(1),null);
var map__20584_20624__$1 = ((((!((map__20584_20623 == null)))?((((map__20584_20623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20584_20623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20584_20623):map__20584_20623);
var doc_20625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584_20624__$1,cljs.core.cst$kw$doc);
var arglists_20626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20584_20624__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_20622], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_20626], 0));

if(cljs.core.truth_(doc_20625)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_20625], 0));
} else {
}

var G__20627 = seq__20577_20617;
var G__20628 = chunk__20578_20618;
var G__20629 = count__20579_20619;
var G__20630 = (i__20580_20620 + (1));
seq__20577_20617 = G__20627;
chunk__20578_20618 = G__20628;
count__20579_20619 = G__20629;
i__20580_20620 = G__20630;
continue;
} else {
var temp__6753__auto___20631 = cljs.core.seq(seq__20577_20617);
if(temp__6753__auto___20631){
var seq__20577_20632__$1 = temp__6753__auto___20631;
if(cljs.core.chunked_seq_QMARK_(seq__20577_20632__$1)){
var c__8295__auto___20633 = cljs.core.chunk_first(seq__20577_20632__$1);
var G__20634 = cljs.core.chunk_rest(seq__20577_20632__$1);
var G__20635 = c__8295__auto___20633;
var G__20636 = cljs.core.count(c__8295__auto___20633);
var G__20637 = (0);
seq__20577_20617 = G__20634;
chunk__20578_20618 = G__20635;
count__20579_20619 = G__20636;
i__20580_20620 = G__20637;
continue;
} else {
var vec__20586_20638 = cljs.core.first(seq__20577_20632__$1);
var name_20639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586_20638,(0),null);
var map__20589_20640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586_20638,(1),null);
var map__20589_20641__$1 = ((((!((map__20589_20640 == null)))?((((map__20589_20640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20589_20640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20589_20640):map__20589_20640);
var doc_20642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589_20641__$1,cljs.core.cst$kw$doc);
var arglists_20643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20589_20641__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_20639], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_20643], 0));

if(cljs.core.truth_(doc_20642)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_20642], 0));
} else {
}

var G__20644 = cljs.core.next(seq__20577_20632__$1);
var G__20645 = null;
var G__20646 = (0);
var G__20647 = (0);
seq__20577_20617 = G__20644;
chunk__20578_20618 = G__20645;
count__20579_20619 = G__20646;
i__20580_20620 = G__20647;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__20591 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__20592 = null;
var count__20593 = (0);
var i__20594 = (0);
while(true){
if((i__20594 < count__20593)){
var role = chunk__20592.cljs$core$IIndexed$_nth$arity$2(null,i__20594);
var temp__6753__auto___20648__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6753__auto___20648__$1)){
var spec_20649 = temp__6753__auto___20648__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_20649)], 0));
} else {
}

var G__20650 = seq__20591;
var G__20651 = chunk__20592;
var G__20652 = count__20593;
var G__20653 = (i__20594 + (1));
seq__20591 = G__20650;
chunk__20592 = G__20651;
count__20593 = G__20652;
i__20594 = G__20653;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq(seq__20591);
if(temp__6753__auto____$1){
var seq__20591__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20591__$1)){
var c__8295__auto__ = cljs.core.chunk_first(seq__20591__$1);
var G__20654 = cljs.core.chunk_rest(seq__20591__$1);
var G__20655 = c__8295__auto__;
var G__20656 = cljs.core.count(c__8295__auto__);
var G__20657 = (0);
seq__20591 = G__20654;
chunk__20592 = G__20655;
count__20593 = G__20656;
i__20594 = G__20657;
continue;
} else {
var role = cljs.core.first(seq__20591__$1);
var temp__6753__auto___20658__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6753__auto___20658__$2)){
var spec_20659 = temp__6753__auto___20658__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_20659)], 0));
} else {
}

var G__20660 = cljs.core.next(seq__20591__$1);
var G__20661 = null;
var G__20662 = (0);
var G__20663 = (0);
seq__20591 = G__20660;
chunk__20592 = G__20661;
count__20593 = G__20662;
i__20594 = G__20663;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
