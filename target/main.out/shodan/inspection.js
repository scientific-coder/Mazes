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
var G__15920__delegate = function (x,args){
return shodan.inspection.find_type.call(null,x);
};
var G__15920 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__15921__i = 0, G__15921__a = new Array(arguments.length -  1);
while (G__15921__i < G__15921__a.length) {G__15921__a[G__15921__i] = arguments[G__15921__i + 1]; ++G__15921__i;}
  args = new cljs.core.IndexedSeq(G__15921__a,0);
} 
return G__15920__delegate.call(this,x,args);};
G__15920.cljs$lang$maxFixedArity = 1;
G__15920.cljs$lang$applyTo = (function (arglist__15922){
var x = cljs.core.first(arglist__15922);
var args = cljs.core.rest(arglist__15922);
return G__15920__delegate(x,args);
});
G__15920.cljs$core$IFn$_invoke$arity$variadic = G__15920__delegate;
return G__15920;
})()
;})(method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__,hierarchy__8419__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8419__auto__,method_table__8415__auto__,prefer_table__8416__auto__,method_cache__8417__auto__,cached_hierarchy__8418__auto__));
})();
}
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"map","map",1371690461),(function (a_map,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"{"));

var result__15809__auto__ = (function (){
var seq__15923_15933 = cljs.core.seq.call(null,a_map);
var chunk__15924_15934 = null;
var count__15925_15935 = (0);
var i__15926_15936 = (0);
while(true){
if((i__15926_15936 < count__15925_15935)){
var vec__15927_15937 = cljs.core._nth.call(null,chunk__15924_15934,i__15926_15936);
var k_15938 = cljs.core.nth.call(null,vec__15927_15937,(0),null);
var v_15939 = cljs.core.nth.call(null,vec__15927_15937,(1),null);
shodan.inspection.inspect.call(null,v_15939,cljs.core.pr_str.call(null,k_15938));

var G__15940 = seq__15923_15933;
var G__15941 = chunk__15924_15934;
var G__15942 = count__15925_15935;
var G__15943 = (i__15926_15936 + (1));
seq__15923_15933 = G__15940;
chunk__15924_15934 = G__15941;
count__15925_15935 = G__15942;
i__15926_15936 = G__15943;
continue;
} else {
var temp__6753__auto___15944 = cljs.core.seq.call(null,seq__15923_15933);
if(temp__6753__auto___15944){
var seq__15923_15945__$1 = temp__6753__auto___15944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15923_15945__$1)){
var c__8295__auto___15946 = cljs.core.chunk_first.call(null,seq__15923_15945__$1);
var G__15947 = cljs.core.chunk_rest.call(null,seq__15923_15945__$1);
var G__15948 = c__8295__auto___15946;
var G__15949 = cljs.core.count.call(null,c__8295__auto___15946);
var G__15950 = (0);
seq__15923_15933 = G__15947;
chunk__15924_15934 = G__15948;
count__15925_15935 = G__15949;
i__15926_15936 = G__15950;
continue;
} else {
var vec__15930_15951 = cljs.core.first.call(null,seq__15923_15945__$1);
var k_15952 = cljs.core.nth.call(null,vec__15930_15951,(0),null);
var v_15953 = cljs.core.nth.call(null,vec__15930_15951,(1),null);
shodan.inspection.inspect.call(null,v_15953,cljs.core.pr_str.call(null,k_15952));

var G__15954 = cljs.core.next.call(null,seq__15923_15945__$1);
var G__15955 = null;
var G__15956 = (0);
var G__15957 = (0);
seq__15923_15933 = G__15954;
chunk__15924_15934 = G__15955;
count__15925_15935 = G__15956;
i__15926_15936 = G__15957;
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

return result__15809__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (a_vec,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"["));

var result__15809__auto__ = (function (){
var seq__15958_15962 = cljs.core.seq.call(null,a_vec);
var chunk__15959_15963 = null;
var count__15960_15964 = (0);
var i__15961_15965 = (0);
while(true){
if((i__15961_15965 < count__15960_15964)){
var obj_15966 = cljs.core._nth.call(null,chunk__15959_15963,i__15961_15965);
shodan.inspection.inspect.call(null,obj_15966);

var G__15967 = seq__15958_15962;
var G__15968 = chunk__15959_15963;
var G__15969 = count__15960_15964;
var G__15970 = (i__15961_15965 + (1));
seq__15958_15962 = G__15967;
chunk__15959_15963 = G__15968;
count__15960_15964 = G__15969;
i__15961_15965 = G__15970;
continue;
} else {
var temp__6753__auto___15971 = cljs.core.seq.call(null,seq__15958_15962);
if(temp__6753__auto___15971){
var seq__15958_15972__$1 = temp__6753__auto___15971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15958_15972__$1)){
var c__8295__auto___15973 = cljs.core.chunk_first.call(null,seq__15958_15972__$1);
var G__15974 = cljs.core.chunk_rest.call(null,seq__15958_15972__$1);
var G__15975 = c__8295__auto___15973;
var G__15976 = cljs.core.count.call(null,c__8295__auto___15973);
var G__15977 = (0);
seq__15958_15962 = G__15974;
chunk__15959_15963 = G__15975;
count__15960_15964 = G__15976;
i__15961_15965 = G__15977;
continue;
} else {
var obj_15978 = cljs.core.first.call(null,seq__15958_15972__$1);
shodan.inspection.inspect.call(null,obj_15978);

var G__15979 = cljs.core.next.call(null,seq__15958_15972__$1);
var G__15980 = null;
var G__15981 = (0);
var G__15982 = (0);
seq__15958_15962 = G__15979;
chunk__15959_15963 = G__15980;
count__15960_15964 = G__15981;
i__15961_15965 = G__15982;
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

return result__15809__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (a_vec,prefix){
console.group(shodan.inspection.group_name.call(null,prefix,"("));

var result__15809__auto__ = (function (){
var seq__15983_15987 = cljs.core.seq.call(null,a_vec);
var chunk__15984_15988 = null;
var count__15985_15989 = (0);
var i__15986_15990 = (0);
while(true){
if((i__15986_15990 < count__15985_15989)){
var obj_15991 = cljs.core._nth.call(null,chunk__15984_15988,i__15986_15990);
shodan.inspection.inspect.call(null,obj_15991);

var G__15992 = seq__15983_15987;
var G__15993 = chunk__15984_15988;
var G__15994 = count__15985_15989;
var G__15995 = (i__15986_15990 + (1));
seq__15983_15987 = G__15992;
chunk__15984_15988 = G__15993;
count__15985_15989 = G__15994;
i__15986_15990 = G__15995;
continue;
} else {
var temp__6753__auto___15996 = cljs.core.seq.call(null,seq__15983_15987);
if(temp__6753__auto___15996){
var seq__15983_15997__$1 = temp__6753__auto___15996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15983_15997__$1)){
var c__8295__auto___15998 = cljs.core.chunk_first.call(null,seq__15983_15997__$1);
var G__15999 = cljs.core.chunk_rest.call(null,seq__15983_15997__$1);
var G__16000 = c__8295__auto___15998;
var G__16001 = cljs.core.count.call(null,c__8295__auto___15998);
var G__16002 = (0);
seq__15983_15987 = G__15999;
chunk__15984_15988 = G__16000;
count__15985_15989 = G__16001;
i__15986_15990 = G__16002;
continue;
} else {
var obj_16003 = cljs.core.first.call(null,seq__15983_15997__$1);
shodan.inspection.inspect.call(null,obj_16003);

var G__16004 = cljs.core.next.call(null,seq__15983_15997__$1);
var G__16005 = null;
var G__16006 = (0);
var G__16007 = (0);
seq__15983_15987 = G__16004;
chunk__15984_15988 = G__16005;
count__15985_15989 = G__16006;
i__15986_15990 = G__16007;
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

return result__15809__auto__;
}));
cljs.core._add_method.call(null,shodan.inspection.inspect,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__16008 = null;
var G__16008__1 = (function (obj){
return console.log(cljs.core.pr_str.call(null,obj));
});
var G__16008__2 = (function (obj,prefix){
return console.log((function (){var or__7389__auto__ = prefix;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return "";
}
})(),cljs.core.pr_str.call(null,obj));
});
G__16008 = function(obj,prefix){
switch(arguments.length){
case 1:
return G__16008__1.call(this,obj);
case 2:
return G__16008__2.call(this,obj,prefix);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16008.cljs$core$IFn$_invoke$arity$1 = G__16008__1;
G__16008.cljs$core$IFn$_invoke$arity$2 = G__16008__2;
return G__16008;
})()
);

//# sourceMappingURL=inspection.js.map