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
var i_12723 = (0);
while(true){
if((i_12723 < len)){
(dest[i_12723] = (this$[(from__$1 + i_12723)]));

var G__12724 = (i_12723 + (1));
i_12723 = G__12724;
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
var i_12725 = (0);
var coll_12726 = size_or_coll;
while(true){
if((i_12725 < len)){
(buf[i_12725] = cljs.core.first.call(null,coll_12726));

var G__12727 = (i_12725 + (1));
var G__12728 = cljs.core.next.call(null,coll_12726);
i_12725 = G__12727;
coll_12726 = G__12728;
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
var args12729 = [];
var len__8605__auto___12732 = arguments.length;
var i__8606__auto___12733 = (0);
while(true){
if((i__8606__auto___12733 < len__8605__auto___12732)){
args12729.push((arguments[i__8606__auto___12733]));

var G__12734 = (i__8606__auto___12733 + (1));
i__8606__auto___12733 = G__12734;
continue;
} else {
}
break;
}

var G__12731 = args12729.length;
switch (G__12731) {
case 1:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12729.length)].join('')));

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
var i_12736 = (0);
var coll_12737 = size_or_coll;
while(true){
if((i_12736 < len)){
(buf[i_12736] = cljs.core.first.call(null,coll_12737));

var G__12738 = (i_12736 + (1));
var G__12739 = cljs.core.next.call(null,coll_12737);
i_12736 = G__12738;
coll_12737 = G__12739;
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
var args12740 = [];
var len__8605__auto___12743 = arguments.length;
var i__8606__auto___12744 = (0);
while(true){
if((i__8606__auto___12744 < len__8605__auto___12743)){
args12740.push((arguments[i__8606__auto___12744]));

var G__12745 = (i__8606__auto___12744 + (1));
i__8606__auto___12744 = G__12745;
continue;
} else {
}
break;
}

var G__12742 = args12740.length;
switch (G__12742) {
case 1:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12740.length)].join('')));

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
var i_12747 = (0);
var coll_12748 = size_or_coll;
while(true){
if((i_12747 < len)){
(buf[i_12747] = cljs.core.first.call(null,coll_12748));

var G__12749 = (i_12747 + (1));
var G__12750 = cljs.core.next.call(null,coll_12748);
i_12747 = G__12749;
coll_12748 = G__12750;
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
var args12751 = [];
var len__8605__auto___12754 = arguments.length;
var i__8606__auto___12755 = (0);
while(true){
if((i__8606__auto___12755 < len__8605__auto___12754)){
args12751.push((arguments[i__8606__auto___12755]));

var G__12756 = (i__8606__auto___12755 + (1));
i__8606__auto___12755 = G__12756;
continue;
} else {
}
break;
}

var G__12753 = args12751.length;
switch (G__12753) {
case 1:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint8_clamped_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12751.length)].join('')));

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
var i_12758 = (0);
var coll_12759 = size_or_coll;
while(true){
if((i_12758 < len)){
(buf[i_12758] = cljs.core.first.call(null,coll_12759));

var G__12760 = (i_12758 + (1));
var G__12761 = cljs.core.next.call(null,coll_12759);
i_12758 = G__12760;
coll_12759 = G__12761;
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
var args12762 = [];
var len__8605__auto___12765 = arguments.length;
var i__8606__auto___12766 = (0);
while(true){
if((i__8606__auto___12766 < len__8605__auto___12765)){
args12762.push((arguments[i__8606__auto___12766]));

var G__12767 = (i__8606__auto___12766 + (1));
i__8606__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var G__12764 = args12762.length;
switch (G__12764) {
case 1:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12762.length)].join('')));

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
var i_12769 = (0);
var coll_12770 = size_or_coll;
while(true){
if((i_12769 < len)){
(buf[i_12769] = cljs.core.first.call(null,coll_12770));

var G__12771 = (i_12769 + (1));
var G__12772 = cljs.core.next.call(null,coll_12770);
i_12769 = G__12771;
coll_12770 = G__12772;
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
var args12773 = [];
var len__8605__auto___12776 = arguments.length;
var i__8606__auto___12777 = (0);
while(true){
if((i__8606__auto___12777 < len__8605__auto___12776)){
args12773.push((arguments[i__8606__auto___12777]));

var G__12778 = (i__8606__auto___12777 + (1));
i__8606__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var G__12775 = args12773.length;
switch (G__12775) {
case 1:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint16_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12773.length)].join('')));

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
var i_12780 = (0);
var coll_12781 = size_or_coll;
while(true){
if((i_12780 < len)){
(buf[i_12780] = cljs.core.first.call(null,coll_12781));

var G__12782 = (i_12780 + (1));
var G__12783 = cljs.core.next.call(null,coll_12781);
i_12780 = G__12782;
coll_12781 = G__12783;
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
var args12784 = [];
var len__8605__auto___12787 = arguments.length;
var i__8606__auto___12788 = (0);
while(true){
if((i__8606__auto___12788 < len__8605__auto___12787)){
args12784.push((arguments[i__8606__auto___12788]));

var G__12789 = (i__8606__auto___12788 + (1));
i__8606__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var G__12786 = args12784.length;
switch (G__12786) {
case 1:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.int32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12784.length)].join('')));

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
var i_12791 = (0);
var coll_12792 = size_or_coll;
while(true){
if((i_12791 < len)){
(buf[i_12791] = cljs.core.first.call(null,coll_12792));

var G__12793 = (i_12791 + (1));
var G__12794 = cljs.core.next.call(null,coll_12792);
i_12791 = G__12793;
coll_12792 = G__12794;
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
var args12795 = [];
var len__8605__auto___12798 = arguments.length;
var i__8606__auto___12799 = (0);
while(true){
if((i__8606__auto___12799 < len__8605__auto___12798)){
args12795.push((arguments[i__8606__auto___12799]));

var G__12800 = (i__8606__auto___12799 + (1));
i__8606__auto___12799 = G__12800;
continue;
} else {
}
break;
}

var G__12797 = args12795.length;
switch (G__12797) {
case 1:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.uint32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12795.length)].join('')));

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
var i_12802 = (0);
var coll_12803 = size_or_coll;
while(true){
if((i_12802 < len)){
(buf[i_12802] = cljs.core.first.call(null,coll_12803));

var G__12804 = (i_12802 + (1));
var G__12805 = cljs.core.next.call(null,coll_12803);
i_12802 = G__12804;
coll_12803 = G__12805;
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
var args12806 = [];
var len__8605__auto___12809 = arguments.length;
var i__8606__auto___12810 = (0);
while(true){
if((i__8606__auto___12810 < len__8605__auto___12809)){
args12806.push((arguments[i__8606__auto___12810]));

var G__12811 = (i__8606__auto___12810 + (1));
i__8606__auto___12810 = G__12811;
continue;
} else {
}
break;
}

var G__12808 = args12806.length;
switch (G__12808) {
case 1:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float32_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12806.length)].join('')));

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
var i_12813 = (0);
var coll_12814 = size_or_coll;
while(true){
if((i_12813 < len)){
(buf[i_12813] = cljs.core.first.call(null,coll_12814));

var G__12815 = (i_12813 + (1));
var G__12816 = cljs.core.next.call(null,coll_12814);
i_12813 = G__12815;
coll_12814 = G__12816;
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
var args12817 = [];
var len__8605__auto___12820 = arguments.length;
var i__8606__auto___12821 = (0);
while(true){
if((i__8606__auto___12821 < len__8605__auto___12820)){
args12817.push((arguments[i__8606__auto___12821]));

var G__12822 = (i__8606__auto___12821 + (1));
i__8606__auto___12821 = G__12822;
continue;
} else {
}
break;
}

var G__12819 = args12817.length;
switch (G__12819) {
case 1:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.typedarrays.core.float64_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12817.length)].join('')));

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