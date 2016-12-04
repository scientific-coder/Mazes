// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[cljs.core.cst$kw$float64,cljs.core.cst$kw$uint8,cljs.core.cst$kw$int8,cljs.core.cst$kw$uint8_DASH_clamped,cljs.core.cst$kw$uint16,cljs.core.cst$kw$int16,cljs.core.cst$kw$uint32,cljs.core.cst$kw$float32,cljs.core.cst$kw$int32]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_(x)){
return cljs.core.cst$kw$array;
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.typedarrays.core.array_types,cljs.core.first(cljs.core.re_find(/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str(x.constructor)].join(''))));
} else {
return null;
}
}
});
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_arrays_supported_QMARK_)){
cljs.core.run_BANG_((function (type){
if(cljs.core.truth_((self[type]).prototype.slice)){
return null;
} else {
return (self[type]).prototype.slice = (function (from,to){
var this$ = this;
var from__$1 = (((from < (0)))?((this$.length + from) | (0)):(from | (0)));
var to__$1 = (cljs.core.truth_(goog.isNumber(to))?(((to < (0)))?((this$.length + to) | (0)):(function (){var G__17935 = to;
var G__17936 = this$.length;
return Math.min(G__17935,G__17936);
})()):this$.length);
var len = (function (){var G__17937 = (to__$1 - from__$1);
var G__17938 = (0);
return Math.max(G__17937,G__17938);
})();
var ctor = this$.constructor;
var dest = new ctor(len);
var i_17939 = (0);
while(true){
if((i_17939 < len)){
(dest[i_17939] = (this$[(from__$1 + i_17939)]));

var G__17940 = (i_17939 + (1));
i_17939 = G__17940;
continue;
} else {
}
break;
}

return dest;
});
}
}),cljs.core.keys(thi.ng.typedarrays.core.array_types));
} else {
}
/**
 * Creates a native Int8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int8Array(len));
var i_17941 = (0);
var coll_17942 = size_or_coll;
while(true){
if((i_17941 < len)){
(buf[i_17941] = cljs.core.first(coll_17942));

var G__17943 = (i_17941 + (1));
var G__17944 = cljs.core.next(coll_17942);
i_17941 = G__17943;
coll_17942 = G__17944;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int8_view = (function thi$ng$typedarrays$core$int8_view(var_args){
var args17945 = [];
var len__8605__auto___17948 = arguments.length;
var i__8606__auto___17949 = (0);
while(true){
if((i__8606__auto___17949 < len__8605__auto___17948)){
args17945.push((arguments[i__8606__auto___17949]));

var G__17950 = (i__8606__auto___17949 + (1));
i__8606__auto___17949 = G__17950;
continue;
} else {
}
break;
}

var G__17947 = args17945.length;
switch (G__17947) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17945.length)].join('')));

}
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int8Array(a.buffer));
});

thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8Array(len));
var i_17952 = (0);
var coll_17953 = size_or_coll;
while(true){
if((i_17952 < len)){
(buf[i_17952] = cljs.core.first(coll_17953));

var G__17954 = (i_17952 + (1));
var G__17955 = cljs.core.next(coll_17953);
i_17952 = G__17954;
coll_17953 = G__17955;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_view = (function thi$ng$typedarrays$core$uint8_view(var_args){
var args17956 = [];
var len__8605__auto___17959 = arguments.length;
var i__8606__auto___17960 = (0);
while(true){
if((i__8606__auto___17960 < len__8605__auto___17959)){
args17956.push((arguments[i__8606__auto___17960]));

var G__17961 = (i__8606__auto___17960 + (1));
i__8606__auto___17960 = G__17961;
continue;
} else {
}
break;
}

var G__17958 = args17956.length;
switch (G__17958) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17956.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8Array(a.buffer));
});

thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_17963 = (0);
var coll_17964 = size_or_coll;
while(true){
if((i_17963 < len)){
(buf[i_17963] = cljs.core.first(coll_17964));

var G__17965 = (i_17963 + (1));
var G__17966 = cljs.core.next(coll_17964);
i_17963 = G__17965;
coll_17964 = G__17966;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint8ClampedArray view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint8_clamped_view = (function thi$ng$typedarrays$core$uint8_clamped_view(var_args){
var args17967 = [];
var len__8605__auto___17970 = arguments.length;
var i__8606__auto___17971 = (0);
while(true){
if((i__8606__auto___17971 < len__8605__auto___17970)){
args17967.push((arguments[i__8606__auto___17971]));

var G__17972 = (i__8606__auto___17971 + (1));
i__8606__auto___17971 = G__17972;
continue;
} else {
}
break;
}

var G__17969 = args17967.length;
switch (G__17969) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17967.length)].join('')));

}
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint8ClampedArray(a.buffer));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint8ClampedArray(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint8_clamped_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int16Array(len));
var i_17974 = (0);
var coll_17975 = size_or_coll;
while(true){
if((i_17974 < len)){
(buf[i_17974] = cljs.core.first(coll_17975));

var G__17976 = (i_17974 + (1));
var G__17977 = cljs.core.next(coll_17975);
i_17974 = G__17976;
coll_17975 = G__17977;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int16_view = (function thi$ng$typedarrays$core$int16_view(var_args){
var args17978 = [];
var len__8605__auto___17981 = arguments.length;
var i__8606__auto___17982 = (0);
while(true){
if((i__8606__auto___17982 < len__8605__auto___17981)){
args17978.push((arguments[i__8606__auto___17982]));

var G__17983 = (i__8606__auto___17982 + (1));
i__8606__auto___17982 = G__17983;
continue;
} else {
}
break;
}

var G__17980 = args17978.length;
switch (G__17980) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17978.length)].join('')));

}
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int16Array(a.buffer));
});

thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint16Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint16Array(len));
var i_17985 = (0);
var coll_17986 = size_or_coll;
while(true){
if((i_17985 < len)){
(buf[i_17985] = cljs.core.first(coll_17986));

var G__17987 = (i_17985 + (1));
var G__17988 = cljs.core.next(coll_17986);
i_17985 = G__17987;
coll_17986 = G__17988;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint16Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint16_view = (function thi$ng$typedarrays$core$uint16_view(var_args){
var args17989 = [];
var len__8605__auto___17992 = arguments.length;
var i__8606__auto___17993 = (0);
while(true){
if((i__8606__auto___17993 < len__8605__auto___17992)){
args17989.push((arguments[i__8606__auto___17993]));

var G__17994 = (i__8606__auto___17993 + (1));
i__8606__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var G__17991 = args17989.length;
switch (G__17991) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17989.length)].join('')));

}
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint16Array(a.buffer));
});

thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint16Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint16_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Int32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int32Array(len));
var i_17996 = (0);
var coll_17997 = size_or_coll;
while(true){
if((i_17996 < len)){
(buf[i_17996] = cljs.core.first(coll_17997));

var G__17998 = (i_17996 + (1));
var G__17999 = cljs.core.next(coll_17997);
i_17996 = G__17998;
coll_17997 = G__17999;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Int32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.int32_view = (function thi$ng$typedarrays$core$int32_view(var_args){
var args18000 = [];
var len__8605__auto___18003 = arguments.length;
var i__8606__auto___18004 = (0);
while(true){
if((i__8606__auto___18004 < len__8605__auto___18003)){
args18000.push((arguments[i__8606__auto___18004]));

var G__18005 = (i__8606__auto___18004 + (1));
i__8606__auto___18004 = G__18005;
continue;
} else {
}
break;
}

var G__18002 = args18000.length;
switch (G__18002) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18000.length)].join('')));

}
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Int32Array(a.buffer));
});

thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Int32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.int32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Uint32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint32Array(len));
var i_18007 = (0);
var coll_18008 = size_or_coll;
while(true){
if((i_18007 < len)){
(buf[i_18007] = cljs.core.first(coll_18008));

var G__18009 = (i_18007 + (1));
var G__18010 = cljs.core.next(coll_18008);
i_18007 = G__18009;
coll_18008 = G__18010;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Uint32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.uint32_view = (function thi$ng$typedarrays$core$uint32_view(var_args){
var args18011 = [];
var len__8605__auto___18014 = arguments.length;
var i__8606__auto___18015 = (0);
while(true){
if((i__8606__auto___18015 < len__8605__auto___18014)){
args18011.push((arguments[i__8606__auto___18015]));

var G__18016 = (i__8606__auto___18015 + (1));
i__8606__auto___18015 = G__18016;
continue;
} else {
}
break;
}

var G__18013 = args18011.length;
switch (G__18013) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18011.length)].join('')));

}
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Uint32Array(a.buffer));
});

thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Uint32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.uint32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float32Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float32Array(len));
var i_18018 = (0);
var coll_18019 = size_or_coll;
while(true){
if((i_18018 < len)){
(buf[i_18018] = cljs.core.first(coll_18019));

var G__18020 = (i_18018 + (1));
var G__18021 = cljs.core.next(coll_18019);
i_18018 = G__18020;
coll_18019 = G__18021;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float32Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float32_view = (function thi$ng$typedarrays$core$float32_view(var_args){
var args18022 = [];
var len__8605__auto___18025 = arguments.length;
var i__8606__auto___18026 = (0);
while(true){
if((i__8606__auto___18026 < len__8605__auto___18025)){
args18022.push((arguments[i__8606__auto___18026]));

var G__18027 = (i__8606__auto___18026 + (1));
i__8606__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var G__18024 = args18022.length;
switch (G__18024) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18022.length)].join('')));

}
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float32Array(a.buffer));
});

thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float32Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float32_view.cljs$lang$maxFixedArity = 3;

/**
 * Creates a native Float64Array of the given size or from `coll`
 *   If arg already is a typed array then a copy is created.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float64Array(len));
var i_18029 = (0);
var coll_18030 = size_or_coll;
while(true){
if((i_18029 < len)){
(buf[i_18029] = cljs.core.first(coll_18030));

var G__18031 = (i_18029 + (1));
var G__18032 = cljs.core.next(coll_18030);
i_18029 = G__18031;
coll_18030 = G__18032;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a Float64Array view of the given typed array's
 *   underlying ArrayBuffer, optionally from given byte offset
 *   and item length.
 */
thi.ng.typedarrays.core.float64_view = (function thi$ng$typedarrays$core$float64_view(var_args){
var args18033 = [];
var len__8605__auto___18036 = arguments.length;
var i__8606__auto___18037 = (0);
while(true){
if((i__8606__auto___18037 < len__8605__auto___18036)){
args18033.push((arguments[i__8606__auto___18037]));

var G__18038 = (i__8606__auto___18037 + (1));
i__8606__auto___18037 = G__18038;
continue;
} else {
}
break;
}

var G__18035 = args18033.length;
switch (G__18035) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18033.length)].join('')));

}
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float64Array(a.buffer));
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float64Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float64_view.cljs$lang$maxFixedArity = 3;

