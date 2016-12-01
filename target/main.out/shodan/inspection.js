// Compiled by ClojureScript 1.9.293 {}
goog.provide('shodan.inspection');
goog.require('cljs.core');
goog.require('shodan.console');
goog.require('clojure.string');
shodan.inspection.find_type = (function shodan$inspection$find_type(obj){
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
});
shodan.inspection.group_name = (function shodan$inspection$group_name(prefix,brace){
return clojure.string.join.call(null," ",cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,brace], null)));
});
if(typeof shodan.inspection.inspect !== 'undefined'){
} else {
/**
 * Inspects a ClojureScript data structure by displaying it in the
 *   browser's console. Collections are shown using log groups to
 *   represent their structure.
 */
shodan.inspection.inspect = (function (){var method_table__8415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8419__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"shodan.inspection","inspect"),((function (method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__){
return (function() { 
var G__15294__delegate = function (x,args){
return shodan.inspection.find_type.call(null,x);
};
var G__15294 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__15295__i = 0, G__15295__a = new Array(arguments.length -  1);
while (G__15295__i < G__15295__a.length) {G__15295__a[G__15295__i] = arguments[G__15295__i + 1]; ++G__15295__i;}
  args = new cljs.core.IndexedSeq(G__15295__a,0);
} 
return G__15294__delegate.call(this,x,args);};
G__15294.cljs$lang$maxFixedArity = 1;
G__15294.cljs$lang$applyTo = (function (arglist__15296){
var x = cljs.core.first(arglist__15296);
var args = cljs.core.rest(arglist__15296);
return G__15294__delegate(x,args);
});
G__15294.cljs$core$IFn$_invoke$arity$variadic = G__15294__delegate;
return G__15294;
})()
;})(method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"map","map",1371690461),(function (a_map,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"{"));

var result__15183__auto__ = (function (){
var seq__15297_15307 = cljs.core.seq.call(null,a_map);
var chunk__15298_15308 = null;
var count__15299_15309 = (0);
var i__15300_15310 = (0);
while(true){
if((i__15300_15310 < count__15299_15309)){
var vec__15301_15311 = cljs.core._nth.call(null,chunk__15298_15308,i__15300_15310);
var k_15312 = cljs.core.nth.call(null,vec__15301_15311,(0),null);
var v_15313 = cljs.core.nth.call(null,vec__15301_15311,(1),null);
shodan.inspection.inspect.call(null,v_15313,cljs.core.pr_str.call(null,k_15312));

var G__15314 = seq__15297_15307;
var G__15315 = chunk__15298_15308;
var G__15316 = count__15299_15309;
var G__15317 = (i__15300_15310 + (1));
seq__15297_15307 = G__15314;
chunk__15298_15308 = G__15315;
count__15299_15309 = G__15316;
i__15300_15310 = G__15317;
continue;
} else {
var temp__6753__auto___15318 = cljs.core.seq.call(null,seq__15297_15307);
if(temp__6753__auto___15318){
var seq__15297_15319__$1 = temp__6753__auto___15318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15297_15319__$1)){
var c__8295__auto___15320 = cljs.core.chunk_first.call(null,seq__15297_15319__$1);
var G__15321 = cljs.core.chunk_rest.call(null,seq__15297_15319__$1);
var G__15322 = c__8295__auto___15320;
var G__15323 = cljs.core.count.call(null,c__8295__auto___15320);
var G__15324 = (0);
seq__15297_15307 = G__15321;
chunk__15298_15308 = G__15322;
count__15299_15309 = G__15323;
i__15300_15310 = G__15324;
continue;
} else {
var vec__15304_15325 = cljs.core.first.call(null,seq__15297_15319__$1);
var k_15326 = cljs.core.nth.call(null,vec__15304_15325,(0),null);
var v_15327 = cljs.core.nth.call(null,vec__15304_15325,(1),null);
shodan.inspection.inspect.call(null,v_15327,cljs.core.pr_str.call(null,k_15326));

var G__15328 = cljs.core.next.call(null,seq__15297_15319__$1);
var G__15329 = null;
var G__15330 = (0);
var G__15331 = (0);
seq__15297_15307 = G__15328;
chunk__15298_15308 = G__15329;
count__15299_15309 = G__15330;
i__15300_15310 = G__15331;
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

return result__15183__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (a_vec,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"["));

var result__15183__auto__ = (function (){
var seq__15332_15336 = cljs.core.seq.call(null,a_vec);
var chunk__15333_15337 = null;
var count__15334_15338 = (0);
var i__15335_15339 = (0);
while(true){
if((i__15335_15339 < count__15334_15338)){
var obj_15340 = cljs.core._nth.call(null,chunk__15333_15337,i__15335_15339);
shodan.inspection.inspect.call(null,obj_15340);

var G__15341 = seq__15332_15336;
var G__15342 = chunk__15333_15337;
var G__15343 = count__15334_15338;
var G__15344 = (i__15335_15339 + (1));
seq__15332_15336 = G__15341;
chunk__15333_15337 = G__15342;
count__15334_15338 = G__15343;
i__15335_15339 = G__15344;
continue;
} else {
var temp__6753__auto___15345 = cljs.core.seq.call(null,seq__15332_15336);
if(temp__6753__auto___15345){
var seq__15332_15346__$1 = temp__6753__auto___15345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15332_15346__$1)){
var c__8295__auto___15347 = cljs.core.chunk_first.call(null,seq__15332_15346__$1);
var G__15348 = cljs.core.chunk_rest.call(null,seq__15332_15346__$1);
var G__15349 = c__8295__auto___15347;
var G__15350 = cljs.core.count.call(null,c__8295__auto___15347);
var G__15351 = (0);
seq__15332_15336 = G__15348;
chunk__15333_15337 = G__15349;
count__15334_15338 = G__15350;
i__15335_15339 = G__15351;
continue;
} else {
var obj_15352 = cljs.core.first.call(null,seq__15332_15346__$1);
shodan.inspection.inspect.call(null,obj_15352);

var G__15353 = cljs.core.next.call(null,seq__15332_15346__$1);
var G__15354 = null;
var G__15355 = (0);
var G__15356 = (0);
seq__15332_15336 = G__15353;
chunk__15333_15337 = G__15354;
count__15334_15338 = G__15355;
i__15335_15339 = G__15356;
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

return result__15183__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (a_vec,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"("));

var result__15183__auto__ = (function (){
var seq__15357_15361 = cljs.core.seq.call(null,a_vec);
var chunk__15358_15362 = null;
var count__15359_15363 = (0);
var i__15360_15364 = (0);
while(true){
if((i__15360_15364 < count__15359_15363)){
var obj_15365 = cljs.core._nth.call(null,chunk__15358_15362,i__15360_15364);
shodan.inspection.inspect.call(null,obj_15365);

var G__15366 = seq__15357_15361;
var G__15367 = chunk__15358_15362;
var G__15368 = count__15359_15363;
var G__15369 = (i__15360_15364 + (1));
seq__15357_15361 = G__15366;
chunk__15358_15362 = G__15367;
count__15359_15363 = G__15368;
i__15360_15364 = G__15369;
continue;
} else {
var temp__6753__auto___15370 = cljs.core.seq.call(null,seq__15357_15361);
if(temp__6753__auto___15370){
var seq__15357_15371__$1 = temp__6753__auto___15370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15357_15371__$1)){
var c__8295__auto___15372 = cljs.core.chunk_first.call(null,seq__15357_15371__$1);
var G__15373 = cljs.core.chunk_rest.call(null,seq__15357_15371__$1);
var G__15374 = c__8295__auto___15372;
var G__15375 = cljs.core.count.call(null,c__8295__auto___15372);
var G__15376 = (0);
seq__15357_15361 = G__15373;
chunk__15358_15362 = G__15374;
count__15359_15363 = G__15375;
i__15360_15364 = G__15376;
continue;
} else {
var obj_15377 = cljs.core.first.call(null,seq__15357_15371__$1);
shodan.inspection.inspect.call(null,obj_15377);

var G__15378 = cljs.core.next.call(null,seq__15357_15371__$1);
var G__15379 = null;
var G__15380 = (0);
var G__15381 = (0);
seq__15357_15361 = G__15378;
chunk__15358_15362 = G__15379;
count__15359_15363 = G__15380;
i__15360_15364 = G__15381;
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

return result__15183__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__15382 = null;
var G__15382__1 = (function (obj){
return console.log(cljs.core.pr_str.call(null,obj));
});
var G__15382__2 = (function (obj,prefix){
return console.log((function (){var or__7389__auto__ = prefix;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "";
}
})(),cljs.core.pr_str.call(null,obj));
});
G__15382 = function(obj,prefix){
switch(arguments.length){
case 1:
return G__15382__1.call(this,obj);
case 2:
return G__15382__2.call(this,obj,prefix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15382.cljs$core$IFn$_invoke$arity$1 = G__15382__1;
G__15382.cljs$core$IFn$_invoke$arity$2 = G__15382__2;
return G__15382;
})()
);

//# sourceMappingURL=inspection.js.map