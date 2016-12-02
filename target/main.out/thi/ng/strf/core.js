// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__8612__auto__ = [];
var len__8605__auto___18049 = arguments.length;
var i__8606__auto___18050 = (0);
while(true){
if((i__8606__auto___18050 < len__8605__auto___18049)){
args__8612__auto__.push((arguments[i__8606__auto___18050]));

var G__18051 = (i__8606__auto___18050 + (1));
i__8606__auto___18050 = G__18051;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__18045){
var vec__18046 = p__18045;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq18042){
var G__18043 = cljs.core.first(seq18042);
var seq18042__$1 = cljs.core.next(seq18042);
var G__18044 = cljs.core.first(seq18042__$1);
var seq18042__$2 = cljs.core.next(seq18042__$1);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(G__18043,G__18044,seq18042__$2);
});

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__8612__auto__ = [];
var len__8605__auto___18059 = arguments.length;
var i__8606__auto___18060 = (0);
while(true){
if((i__8606__auto___18060 < len__8605__auto___18059)){
args__8612__auto__.push((arguments[i__8606__auto___18060]));

var G__18061 = (i__8606__auto___18060 + (1));
i__8606__auto___18060 = G__18061;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__18055){
var vec__18056 = p__18055;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056,(0),null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(x,radix,cljs.core.array_seq([default$], 0));
});

thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2);

thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq18052){
var G__18053 = cljs.core.first(seq18052);
var seq18052__$1 = cljs.core.next(seq18052);
var G__18054 = cljs.core.first(seq18052__$1);
var seq18052__$2 = cljs.core.next(seq18052__$1);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic(G__18053,G__18054,seq18052__$2);
});

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__8612__auto__ = [];
var len__8605__auto___18068 = arguments.length;
var i__8606__auto___18069 = (0);
while(true){
if((i__8606__auto___18069 < len__8605__auto___18068)){
args__8612__auto__.push((arguments[i__8606__auto___18069]));

var G__18070 = (i__8606__auto___18069 + (1));
i__8606__auto___18069 = G__18070;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__18064){
var vec__18065 = p__18064;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18065,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
});

thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq18062){
var G__18063 = cljs.core.first(seq18062);
var seq18062__$1 = cljs.core.next(seq18062);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(G__18063,seq18062__$1);
});

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__8612__auto__ = [];
var len__8605__auto___18077 = arguments.length;
var i__8606__auto___18078 = (0);
while(true){
if((i__8606__auto___18078 < len__8605__auto___18077)){
args__8612__auto__.push((arguments[i__8606__auto___18078]));

var G__18079 = (i__8606__auto___18078 + (1));
i__8606__auto___18078 = G__18079;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__18073){
var vec__18074 = p__18073;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18074,(0),null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.array_seq([default$], 0));
});

thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq18071){
var G__18072 = cljs.core.first(seq18071);
var seq18071__$1 = cljs.core.next(seq18071);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic(G__18072,seq18071__$1);
});

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l))),cljs.core.str(x)].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.pad_right = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return ((function (fill__$1){
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str(x),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l)))].join('');
} else {
return x;
}
});
;})(fill__$1))
}));
thi.ng.strf.core.hex = cljs.core.memoize((function (len){
var pad = (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(len,"0") : thi.ng.strf.core.pad_left.call(null,len,"0"));
return ((function (pad){
return (function (x){
var G__18080 = (new Number((thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.strf.core.int$.call(null,x)))).toString((16));
return (pad.cljs$core$IFn$_invoke$arity$1 ? pad.cljs$core$IFn$_invoke$arity$1(G__18080) : pad.call(null,G__18080));
});
;})(pad))
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__8612__auto__ = [];
var len__8605__auto___18084 = arguments.length;
var i__8606__auto___18085 = (0);
while(true){
if((i__8606__auto___18085 < len__8605__auto___18084)){
args__8612__auto__.push((arguments[i__8606__auto___18085]));

var G__18086 = (i__8606__auto___18085 + (1));
i__8606__auto___18085 = G__18086;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((1) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8613__auto__);
});

thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__6751__auto__ = cljs.core.first(fmt__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var f = temp__6751__auto__;
if(typeof f === 'string'){
var G__18087 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,f);
var G__18088 = cljs.core.next(fmt__$1);
var G__18089 = args__$1;
s = G__18087;
fmt__$1 = G__18088;
args__$1 = G__18089;
continue;
} else {
var G__18090 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,(function (){var G__18083 = cljs.core.first(args__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18083) : f.call(null,G__18083));
})());
var G__18091 = cljs.core.next(fmt__$1);
var G__18092 = cljs.core.next(args__$1);
s = G__18090;
fmt__$1 = G__18091;
args__$1 = G__18092;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.persistent_BANG_(s));
}
break;
}
});

thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1);

thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq18081){
var G__18082 = cljs.core.first(seq18081);
var seq18081__$1 = cljs.core.next(seq18081);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(G__18082,seq18081__$1);
});

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2((2),"0") : thi.ng.strf.core.pad_left.call(null,(2),"0")),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd,((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields(d));
});})(d2))
,cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd_DASH_hh_DASH_mm_DASH_ss,((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields(d));
});})(d2))
,cljs.core.cst$kw$yyyymmdd_DASH_hhmmss,((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields(d));
});})(d2))
,cljs.core.cst$kw$dd_DASH_mm_DASH_yyyy,((function (d2){
return (function (d){
var vec__18094 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18094,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18094,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18094,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.array_seq([d__$1,m,y], 0));
});})(d2))
,cljs.core.cst$kw$mm_DASH_dd_DASH_yyyy,((function (d2){
return (function (d){
var vec__18097 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18097,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18097,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18097,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.array_seq([m,d__$1,y], 0));
});})(d2))
,cljs.core.cst$kw$dd_DASH_mm_DASH_yy,((function (d2){
return (function (d){
var vec__18100 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18100,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d2,((function (vec__18100,y,m,d__$1,d2){
return (function (p1__18093_SHARP_){
return cljs.core.mod(p1__18093_SHARP_,(100));
});})(vec__18100,y,m,d__$1,d2))
)], null),cljs.core.array_seq([d__$1,m,y], 0));
});})(d2))
,cljs.core.cst$kw$hh_DASH_mm_DASH_ss,((function (d2){
return (function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields(d));
});})(d2))
], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var args18103 = [];
var len__8605__auto___18107 = arguments.length;
var i__8606__auto___18108 = (0);
while(true){
if((i__8606__auto___18108 < len__8605__auto___18107)){
args18103.push((arguments[i__8606__auto___18108]));

var G__18109 = (i__8606__auto___18108 + (1));
i__8606__auto___18108 = G__18109;
continue;
} else {
}
break;
}

var G__18105 = args18103.length;
switch (G__18105) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18103.length)].join('')));

}
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
return (function (){var G__18106 = cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd_DASH_hh_DASH_mm_DASH_ss;
return (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(G__18106) : thi.ng.strf.core.date_formatters.call(null,G__18106));
})().call(null,d);
});

thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(d) : fmt.call(null,d));
} else {
return (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(fmt) : thi.ng.strf.core.date_formatters.call(null,fmt)).call(null,d);
}
});

thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2;

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = (function (){var G__18111 = (4);
var G__18112 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__18111,G__18112) : thi.ng.strf.core.pad_left.call(null,G__18111,G__18112));
})();
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
var G__18114 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((1) << bits));
return (thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(G__18114) : thi.ng.strf.core.int$.call(null,G__18114));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
return (function (){var G__18118 = (function (){var G__18120 = (bits / (4));
return Math.ceil(G__18120);
})();
var G__18119 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__18118,G__18119) : thi.ng.strf.core.pad_left.call(null,G__18118,G__18119));
})().call(null,thi.ng.strf.core.rand_bits(bits).toString((16)));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
var G__18122 = cljs.core.rand_int((65536)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__18122) : thi.ng.strf.core.format_16bit_hex.call(null,G__18122));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str("-"),cljs.core.str((function (){var G__18125 = ((thi.ng.strf.core.rand_bits((16)) & (4095)) | (16384)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__18125) : thi.ng.strf.core.format_16bit_hex.call(null,G__18125));
})()),cljs.core.str("-"),cljs.core.str((function (){var G__18126 = ((thi.ng.strf.core.rand_bits((16)) & (16383)) | (32768)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__18126) : thi.ng.strf.core.format_16bit_hex.call(null,G__18126));
})()),cljs.core.str("-"),cljs.core.str(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str(thi.ng.strf.core.rand_16bits_hex())].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return cljs.core.name(x);
} else {
return [cljs.core.str(x)].join('');
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape(thi.ng.strf.core.as_str(x),thi.ng.strf.core.html_entities);
});
