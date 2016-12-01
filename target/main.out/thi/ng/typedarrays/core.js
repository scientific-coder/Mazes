// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return !(((window["ArrayBuffer"]) == null));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[new cljs.core.Keyword(null,"float64","float64",1881838306),new cljs.core.Keyword(null,"uint8","uint8",956521151),new cljs.core.Keyword(null,"int8","int8",-1834023920),new cljs.core.Keyword(null,"uint8-clamped","uint8-clamped",1439331936),new cljs.core.Keyword(null,"uint16","uint16",-588869202),new cljs.core.Keyword(null,"int16","int16",-188764863),new cljs.core.Keyword(null,"uint32","uint32",-418789486),new cljs.core.Keyword(null,"float32","float32",-2119815775),new cljs.core.Keyword(null,"int32","int32",1718804896)]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.call(null,"object",goog.typeOf(x))){
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
if(cljs.core.array_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"array","array",-2080713842);
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,x))){
return cljs.core.get.call(null,thi.ng.typedarrays.core.array_types,cljs.core.first.call(null,cljs.core.re_find.call(null,/((Uint|Int|Float)\d+(Clamped)?Array)/,[cljs.core.str(x.constructor)].join(''))));
} else {
return null;
}
}
});
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_arrays_supported_QMARK_)){
cljs.core.run_BANG_.call(null,(function (type){
if(cljs.core.truth_((self[type]).prototype.slice)){
return null;
} else {
return (self[type]).prototype.slice = (function (from,to){
var this$ = this;
var from__$1 = (((from < (0)))?((this$.length + from) | (0)):(from | (0)));
var to__$1 = (cljs.core.truth_(goog.isNumber(to))?(((to < (0)))?((this$.length + to) | (0)):Math.min(to,this$.length)):this$.length);
var len = Math.max((to__$1 - from__$1),(0));
var ctor = this$.constructor;
var dest = new ctor(len);
var i_12201 = (0);
while(true){
if((i_12201 < len)){
(dest[i_12201] = (this$[(from__$1 + i_12201)]));

var G__12202 = (i_12201 + (1));
i_12201 = G__12202;
continue;
} else {
}
break;
}

return dest;
});
}
}),cljs.core.keys.call(null,thi.ng.typedarrays.core.array_types));
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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int8Array(len));
var i_12203 = (0);
var coll_12204 = size_or_coll;
while(true){
if((i_12203 < len)){
(buf[i_12203] = cljs.core.first.call(null,coll_12204));

var G__12205 = (i_12203 + (1));
var G__12206 = cljs.core.next.call(null,coll_12204);
i_12203 = G__12205;
coll_12204 = G__12206;
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
var args12207 = [];
var len__8605__auto___12210 = arguments.length;
var i__8606__auto___12211 = (0);
while(true){
if((i__8606__auto___12211 < len__8605__auto___12210)){
args12207.push((arguments[i__8606__auto___12211]));

var G__12212 = (i__8606__auto___12211 + (1));
i__8606__auto___12211 = G__12212;
continue;
} else {
}
break;
}

var G__12209 = args12207.length;
switch (G__12209) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12207.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8Array(len));
var i_12214 = (0);
var coll_12215 = size_or_coll;
while(true){
if((i_12214 < len)){
(buf[i_12214] = cljs.core.first.call(null,coll_12215));

var G__12216 = (i_12214 + (1));
var G__12217 = cljs.core.next.call(null,coll_12215);
i_12214 = G__12216;
coll_12215 = G__12217;
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
var args12218 = [];
var len__8605__auto___12221 = arguments.length;
var i__8606__auto___12222 = (0);
while(true){
if((i__8606__auto___12222 < len__8605__auto___12221)){
args12218.push((arguments[i__8606__auto___12222]));

var G__12223 = (i__8606__auto___12222 + (1));
i__8606__auto___12222 = G__12223;
continue;
} else {
}
break;
}

var G__12220 = args12218.length;
switch (G__12220) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12218.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint8ClampedArray(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_12225 = (0);
var coll_12226 = size_or_coll;
while(true){
if((i_12225 < len)){
(buf[i_12225] = cljs.core.first.call(null,coll_12226));

var G__12227 = (i_12225 + (1));
var G__12228 = cljs.core.next.call(null,coll_12226);
i_12225 = G__12227;
coll_12226 = G__12228;
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
var args12229 = [];
var len__8605__auto___12232 = arguments.length;
var i__8606__auto___12233 = (0);
while(true){
if((i__8606__auto___12233 < len__8605__auto___12232)){
args12229.push((arguments[i__8606__auto___12233]));

var G__12234 = (i__8606__auto___12233 + (1));
i__8606__auto___12233 = G__12234;
continue;
} else {
}
break;
}

var G__12231 = args12229.length;
switch (G__12231) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12229.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int16Array(len));
var i_12236 = (0);
var coll_12237 = size_or_coll;
while(true){
if((i_12236 < len)){
(buf[i_12236] = cljs.core.first.call(null,coll_12237));

var G__12238 = (i_12236 + (1));
var G__12239 = cljs.core.next.call(null,coll_12237);
i_12236 = G__12238;
coll_12237 = G__12239;
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
var args12240 = [];
var len__8605__auto___12243 = arguments.length;
var i__8606__auto___12244 = (0);
while(true){
if((i__8606__auto___12244 < len__8605__auto___12243)){
args12240.push((arguments[i__8606__auto___12244]));

var G__12245 = (i__8606__auto___12244 + (1));
i__8606__auto___12244 = G__12245;
continue;
} else {
}
break;
}

var G__12242 = args12240.length;
switch (G__12242) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12240.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint16Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint16Array(len));
var i_12247 = (0);
var coll_12248 = size_or_coll;
while(true){
if((i_12247 < len)){
(buf[i_12247] = cljs.core.first.call(null,coll_12248));

var G__12249 = (i_12247 + (1));
var G__12250 = cljs.core.next.call(null,coll_12248);
i_12247 = G__12249;
coll_12248 = G__12250;
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
var args12251 = [];
var len__8605__auto___12254 = arguments.length;
var i__8606__auto___12255 = (0);
while(true){
if((i__8606__auto___12255 < len__8605__auto___12254)){
args12251.push((arguments[i__8606__auto___12255]));

var G__12256 = (i__8606__auto___12255 + (1));
i__8606__auto___12255 = G__12256;
continue;
} else {
}
break;
}

var G__12253 = args12251.length;
switch (G__12253) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12251.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Int32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Int32Array(len));
var i_12258 = (0);
var coll_12259 = size_or_coll;
while(true){
if((i_12258 < len)){
(buf[i_12258] = cljs.core.first.call(null,coll_12259));

var G__12260 = (i_12258 + (1));
var G__12261 = cljs.core.next.call(null,coll_12259);
i_12258 = G__12260;
coll_12259 = G__12261;
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
var args12262 = [];
var len__8605__auto___12265 = arguments.length;
var i__8606__auto___12266 = (0);
while(true){
if((i__8606__auto___12266 < len__8605__auto___12265)){
args12262.push((arguments[i__8606__auto___12266]));

var G__12267 = (i__8606__auto___12266 + (1));
i__8606__auto___12266 = G__12267;
continue;
} else {
}
break;
}

var G__12264 = args12262.length;
switch (G__12264) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12262.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Uint32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Uint32Array(len));
var i_12269 = (0);
var coll_12270 = size_or_coll;
while(true){
if((i_12269 < len)){
(buf[i_12269] = cljs.core.first.call(null,coll_12270));

var G__12271 = (i_12269 + (1));
var G__12272 = cljs.core.next.call(null,coll_12270);
i_12269 = G__12271;
coll_12270 = G__12272;
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
var args12273 = [];
var len__8605__auto___12276 = arguments.length;
var i__8606__auto___12277 = (0);
while(true){
if((i__8606__auto___12277 < len__8605__auto___12276)){
args12273.push((arguments[i__8606__auto___12277]));

var G__12278 = (i__8606__auto___12277 + (1));
i__8606__auto___12277 = G__12278;
continue;
} else {
}
break;
}

var G__12275 = args12273.length;
switch (G__12275) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12273.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float32Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float32Array(len));
var i_12280 = (0);
var coll_12281 = size_or_coll;
while(true){
if((i_12280 < len)){
(buf[i_12280] = cljs.core.first.call(null,coll_12281));

var G__12282 = (i_12280 + (1));
var G__12283 = cljs.core.next.call(null,coll_12281);
i_12280 = G__12282;
coll_12281 = G__12283;
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
var args12284 = [];
var len__8605__auto___12287 = arguments.length;
var i__8606__auto___12288 = (0);
while(true){
if((i__8606__auto___12288 < len__8605__auto___12287)){
args12284.push((arguments[i__8606__auto___12288]));

var G__12289 = (i__8606__auto___12288 + (1));
i__8606__auto___12288 = G__12289;
continue;
} else {
}
break;
}

var G__12286 = args12284.length;
switch (G__12286) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12284.length)].join('')));

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
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_.call(null,size_or_coll))){
return (new Float64Array(size_or_coll));
} else {
var len = cljs.core.count.call(null,size_or_coll);
var buf = (new Float64Array(len));
var i_12291 = (0);
var coll_12292 = size_or_coll;
while(true){
if((i_12291 < len)){
(buf[i_12291] = cljs.core.first.call(null,coll_12292));

var G__12293 = (i_12291 + (1));
var G__12294 = cljs.core.next.call(null,coll_12292);
i_12291 = G__12293;
coll_12292 = G__12294;
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
var args12295 = [];
var len__8605__auto___12298 = arguments.length;
var i__8606__auto___12299 = (0);
while(true){
if((i__8606__auto___12299 < len__8605__auto___12298)){
args12295.push((arguments[i__8606__auto___12299]));

var G__12300 = (i__8606__auto___12299 + (1));
i__8606__auto___12299 = G__12300;
continue;
} else {
}
break;
}

var G__12297 = args12295.length;
switch (G__12297) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12295.length)].join('')));

}
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1 = (function (a){
return (new Float64Array(a.buffer));
});

thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3 = (function (a,offset,len){
return (new Float64Array(a.buffer,offset,len));
});

thi.ng.typedarrays.core.float64_view.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map