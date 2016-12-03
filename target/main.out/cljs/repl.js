// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15066){
var map__15091 = p__15066;
var map__15091__$1 = ((((!((map__15091 == null)))?((((map__15091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15091):map__15091);
var m = map__15091__$1;
var n = cljs.core.get.call(null,map__15091__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15091__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__15093_15115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15094_15116 = null;
var count__15095_15117 = (0);
var i__15096_15118 = (0);
while(true){
if((i__15096_15118 < count__15095_15117)){
var f_15119 = cljs.core._nth.call(null,chunk__15094_15116,i__15096_15118);
cljs.core.println.call(null,"  ",f_15119);

var G__15120 = seq__15093_15115;
var G__15121 = chunk__15094_15116;
var G__15122 = count__15095_15117;
var G__15123 = (i__15096_15118 + (1));
seq__15093_15115 = G__15120;
chunk__15094_15116 = G__15121;
count__15095_15117 = G__15122;
i__15096_15118 = G__15123;
continue;
} else {
var temp__6753__auto___15124 = cljs.core.seq.call(null,seq__15093_15115);
if(temp__6753__auto___15124){
var seq__15093_15125__$1 = temp__6753__auto___15124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15093_15125__$1)){
var c__8295__auto___15126 = cljs.core.chunk_first.call(null,seq__15093_15125__$1);
var G__15127 = cljs.core.chunk_rest.call(null,seq__15093_15125__$1);
var G__15128 = c__8295__auto___15126;
var G__15129 = cljs.core.count.call(null,c__8295__auto___15126);
var G__15130 = (0);
seq__15093_15115 = G__15127;
chunk__15094_15116 = G__15128;
count__15095_15117 = G__15129;
i__15096_15118 = G__15130;
continue;
} else {
var f_15131 = cljs.core.first.call(null,seq__15093_15125__$1);
cljs.core.println.call(null,"  ",f_15131);

var G__15132 = cljs.core.next.call(null,seq__15093_15125__$1);
var G__15133 = null;
var G__15134 = (0);
var G__15135 = (0);
seq__15093_15115 = G__15132;
chunk__15094_15116 = G__15133;
count__15095_15117 = G__15134;
i__15096_15118 = G__15135;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15136 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7389__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15136);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15136)))?cljs.core.second.call(null,arglists_15136):arglists_15136));
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
var seq__15097_15137 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15098_15138 = null;
var count__15099_15139 = (0);
var i__15100_15140 = (0);
while(true){
if((i__15100_15140 < count__15099_15139)){
var vec__15101_15141 = cljs.core._nth.call(null,chunk__15098_15138,i__15100_15140);
var name_15142 = cljs.core.nth.call(null,vec__15101_15141,(0),null);
var map__15104_15143 = cljs.core.nth.call(null,vec__15101_15141,(1),null);
var map__15104_15144__$1 = ((((!((map__15104_15143 == null)))?((((map__15104_15143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15104_15143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15104_15143):map__15104_15143);
var doc_15145 = cljs.core.get.call(null,map__15104_15144__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15146 = cljs.core.get.call(null,map__15104_15144__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15142);

cljs.core.println.call(null," ",arglists_15146);

if(cljs.core.truth_(doc_15145)){
cljs.core.println.call(null," ",doc_15145);
} else {
}

var G__15147 = seq__15097_15137;
var G__15148 = chunk__15098_15138;
var G__15149 = count__15099_15139;
var G__15150 = (i__15100_15140 + (1));
seq__15097_15137 = G__15147;
chunk__15098_15138 = G__15148;
count__15099_15139 = G__15149;
i__15100_15140 = G__15150;
continue;
} else {
var temp__6753__auto___15151 = cljs.core.seq.call(null,seq__15097_15137);
if(temp__6753__auto___15151){
var seq__15097_15152__$1 = temp__6753__auto___15151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15097_15152__$1)){
var c__8295__auto___15153 = cljs.core.chunk_first.call(null,seq__15097_15152__$1);
var G__15154 = cljs.core.chunk_rest.call(null,seq__15097_15152__$1);
var G__15155 = c__8295__auto___15153;
var G__15156 = cljs.core.count.call(null,c__8295__auto___15153);
var G__15157 = (0);
seq__15097_15137 = G__15154;
chunk__15098_15138 = G__15155;
count__15099_15139 = G__15156;
i__15100_15140 = G__15157;
continue;
} else {
var vec__15106_15158 = cljs.core.first.call(null,seq__15097_15152__$1);
var name_15159 = cljs.core.nth.call(null,vec__15106_15158,(0),null);
var map__15109_15160 = cljs.core.nth.call(null,vec__15106_15158,(1),null);
var map__15109_15161__$1 = ((((!((map__15109_15160 == null)))?((((map__15109_15160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15109_15160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15109_15160):map__15109_15160);
var doc_15162 = cljs.core.get.call(null,map__15109_15161__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15163 = cljs.core.get.call(null,map__15109_15161__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15159);

cljs.core.println.call(null," ",arglists_15163);

if(cljs.core.truth_(doc_15162)){
cljs.core.println.call(null," ",doc_15162);
} else {
}

var G__15164 = cljs.core.next.call(null,seq__15097_15152__$1);
var G__15165 = null;
var G__15166 = (0);
var G__15167 = (0);
seq__15097_15137 = G__15164;
chunk__15098_15138 = G__15165;
count__15099_15139 = G__15166;
i__15100_15140 = G__15167;
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

var seq__15111 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15112 = null;
var count__15113 = (0);
var i__15114 = (0);
while(true){
if((i__15114 < count__15113)){
var role = cljs.core._nth.call(null,chunk__15112,i__15114);
var temp__6753__auto___15168__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___15168__$1)){
var spec_15169 = temp__6753__auto___15168__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_15169));
} else {
}

var G__15170 = seq__15111;
var G__15171 = chunk__15112;
var G__15172 = count__15113;
var G__15173 = (i__15114 + (1));
seq__15111 = G__15170;
chunk__15112 = G__15171;
count__15113 = G__15172;
i__15114 = G__15173;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__15111);
if(temp__6753__auto____$1){
var seq__15111__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15111__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__15111__$1);
var G__15174 = cljs.core.chunk_rest.call(null,seq__15111__$1);
var G__15175 = c__8295__auto__;
var G__15176 = cljs.core.count.call(null,c__8295__auto__);
var G__15177 = (0);
seq__15111 = G__15174;
chunk__15112 = G__15175;
count__15113 = G__15176;
i__15114 = G__15177;
continue;
} else {
var role = cljs.core.first.call(null,seq__15111__$1);
var temp__6753__auto___15178__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___15178__$2)){
var spec_15179 = temp__6753__auto___15178__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_15179));
} else {
}

var G__15180 = cljs.core.next.call(null,seq__15111__$1);
var G__15181 = null;
var G__15182 = (0);
var G__15183 = (0);
seq__15111 = G__15180;
chunk__15112 = G__15181;
count__15113 = G__15182;
i__15114 = G__15183;
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