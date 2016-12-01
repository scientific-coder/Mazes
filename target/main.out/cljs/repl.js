// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14562){
var map__14587 = p__14562;
var map__14587__$1 = ((((!((map__14587 == null)))?((((map__14587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14587):map__14587);
var m = map__14587__$1;
var n = cljs.core.get.call(null,map__14587__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14589_14611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14590_14612 = null;
var count__14591_14613 = (0);
var i__14592_14614 = (0);
while(true){
if((i__14592_14614 < count__14591_14613)){
var f_14615 = cljs.core._nth.call(null,chunk__14590_14612,i__14592_14614);
cljs.core.println.call(null,"  ",f_14615);

var G__14616 = seq__14589_14611;
var G__14617 = chunk__14590_14612;
var G__14618 = count__14591_14613;
var G__14619 = (i__14592_14614 + (1));
seq__14589_14611 = G__14616;
chunk__14590_14612 = G__14617;
count__14591_14613 = G__14618;
i__14592_14614 = G__14619;
continue;
} else {
var temp__6753__auto___14620 = cljs.core.seq.call(null,seq__14589_14611);
if(temp__6753__auto___14620){
var seq__14589_14621__$1 = temp__6753__auto___14620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14589_14621__$1)){
var c__8295__auto___14622 = cljs.core.chunk_first.call(null,seq__14589_14621__$1);
var G__14623 = cljs.core.chunk_rest.call(null,seq__14589_14621__$1);
var G__14624 = c__8295__auto___14622;
var G__14625 = cljs.core.count.call(null,c__8295__auto___14622);
var G__14626 = (0);
seq__14589_14611 = G__14623;
chunk__14590_14612 = G__14624;
count__14591_14613 = G__14625;
i__14592_14614 = G__14626;
continue;
} else {
var f_14627 = cljs.core.first.call(null,seq__14589_14621__$1);
cljs.core.println.call(null,"  ",f_14627);

var G__14628 = cljs.core.next.call(null,seq__14589_14621__$1);
var G__14629 = null;
var G__14630 = (0);
var G__14631 = (0);
seq__14589_14611 = G__14628;
chunk__14590_14612 = G__14629;
count__14591_14613 = G__14630;
i__14592_14614 = G__14631;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14632 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7389__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14632);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14632)))?cljs.core.second.call(null,arglists_14632):arglists_14632));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14593_14633 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14594_14634 = null;
var count__14595_14635 = (0);
var i__14596_14636 = (0);
while(true){
if((i__14596_14636 < count__14595_14635)){
var vec__14597_14637 = cljs.core._nth.call(null,chunk__14594_14634,i__14596_14636);
var name_14638 = cljs.core.nth.call(null,vec__14597_14637,(0),null);
var map__14600_14639 = cljs.core.nth.call(null,vec__14597_14637,(1),null);
var map__14600_14640__$1 = ((((!((map__14600_14639 == null)))?((((map__14600_14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14600_14639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14600_14639):map__14600_14639);
var doc_14641 = cljs.core.get.call(null,map__14600_14640__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14642 = cljs.core.get.call(null,map__14600_14640__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14638);

cljs.core.println.call(null," ",arglists_14642);

if(cljs.core.truth_(doc_14641)){
cljs.core.println.call(null," ",doc_14641);
} else {
}

var G__14643 = seq__14593_14633;
var G__14644 = chunk__14594_14634;
var G__14645 = count__14595_14635;
var G__14646 = (i__14596_14636 + (1));
seq__14593_14633 = G__14643;
chunk__14594_14634 = G__14644;
count__14595_14635 = G__14645;
i__14596_14636 = G__14646;
continue;
} else {
var temp__6753__auto___14647 = cljs.core.seq.call(null,seq__14593_14633);
if(temp__6753__auto___14647){
var seq__14593_14648__$1 = temp__6753__auto___14647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14593_14648__$1)){
var c__8295__auto___14649 = cljs.core.chunk_first.call(null,seq__14593_14648__$1);
var G__14650 = cljs.core.chunk_rest.call(null,seq__14593_14648__$1);
var G__14651 = c__8295__auto___14649;
var G__14652 = cljs.core.count.call(null,c__8295__auto___14649);
var G__14653 = (0);
seq__14593_14633 = G__14650;
chunk__14594_14634 = G__14651;
count__14595_14635 = G__14652;
i__14596_14636 = G__14653;
continue;
} else {
var vec__14602_14654 = cljs.core.first.call(null,seq__14593_14648__$1);
var name_14655 = cljs.core.nth.call(null,vec__14602_14654,(0),null);
var map__14605_14656 = cljs.core.nth.call(null,vec__14602_14654,(1),null);
var map__14605_14657__$1 = ((((!((map__14605_14656 == null)))?((((map__14605_14656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14605_14656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14605_14656):map__14605_14656);
var doc_14658 = cljs.core.get.call(null,map__14605_14657__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14659 = cljs.core.get.call(null,map__14605_14657__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14655);

cljs.core.println.call(null," ",arglists_14659);

if(cljs.core.truth_(doc_14658)){
cljs.core.println.call(null," ",doc_14658);
} else {
}

var G__14660 = cljs.core.next.call(null,seq__14593_14648__$1);
var G__14661 = null;
var G__14662 = (0);
var G__14663 = (0);
seq__14593_14633 = G__14660;
chunk__14594_14634 = G__14661;
count__14595_14635 = G__14662;
i__14596_14636 = G__14663;
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
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__14607 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14608 = null;
var count__14609 = (0);
var i__14610 = (0);
while(true){
if((i__14610 < count__14609)){
var role = cljs.core._nth.call(null,chunk__14608,i__14610);
var temp__6753__auto___14664__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14664__$1)){
var spec_14665 = temp__6753__auto___14664__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14665));
} else {
}

var G__14666 = seq__14607;
var G__14667 = chunk__14608;
var G__14668 = count__14609;
var G__14669 = (i__14610 + (1));
seq__14607 = G__14666;
chunk__14608 = G__14667;
count__14609 = G__14668;
i__14610 = G__14669;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__14607);
if(temp__6753__auto____$1){
var seq__14607__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14607__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__14607__$1);
var G__14670 = cljs.core.chunk_rest.call(null,seq__14607__$1);
var G__14671 = c__8295__auto__;
var G__14672 = cljs.core.count.call(null,c__8295__auto__);
var G__14673 = (0);
seq__14607 = G__14670;
chunk__14608 = G__14671;
count__14609 = G__14672;
i__14610 = G__14673;
continue;
} else {
var role = cljs.core.first.call(null,seq__14607__$1);
var temp__6753__auto___14674__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14674__$2)){
var spec_14675 = temp__6753__auto___14674__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14675));
} else {
}

var G__14676 = cljs.core.next.call(null,seq__14607__$1);
var G__14677 = null;
var G__14678 = (0);
var G__14679 = (0);
seq__14607 = G__14676;
chunk__14608 = G__14677;
count__14609 = G__14678;
i__14610 = G__14679;
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

//# sourceMappingURL=repl.js.map