// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.strf.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",(thi.ng.strf.core.hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.hex.cljs$core$IFn$_invoke$arity$1((6)) : thi.ng.strf.core.hex.call(null,(6)))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_rgba["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IRGBConvert.as-rgba",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_hsva["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSVConvert.as-hsva",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_hsla["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSLConvert.as-hsla",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_cmyka["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ICMYKConvert.as-cmyka",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_css["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ICSSConvert.as-css",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_int24["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int24",_);
}
}
}
});

thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_int32["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int32",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.red[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.red["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.red",_);
}
}
}
});

thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.green[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.green["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.green",_);
}
}
}
});

thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.blue["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.blue",_);
}
}
}
});

thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.alpha["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.alpha",_);
}
}
}
});

thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.hue["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.hue",_);
}
}
}
});

thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.saturation["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.saturation",_);
}
}
}
});

thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.brightness["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.brightness",_);
}
}
}
});

thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.luminance["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.luminance",_);
}
}
}
});

thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.cyan["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.cyan",_);
}
}
}
});

thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.magenta["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.magenta",_);
}
}
}
});

thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.yellow["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.yellow",_);
}
}
}
});

thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.black[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.black["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.black",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__8103__auto__.call(null,_,theta));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.rotate_hue["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,theta) : m__8103__auto____$1.call(null,_,theta));
} else {
throw cljs.core.missing_protocol("IColorOps.rotate-hue",_);
}
}
}
});

thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto__.call(null,_,offset));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_saturation["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto____$1.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-saturation",_);
}
}
}
});

thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto__.call(null,_,offset));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_brightness["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto____$1.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-brightness",_);
}
}
}
});

thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((!((_ == null))) && (!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto__.call(null,_,offset));
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_alpha["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,offset) : m__8103__auto____$1.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-alpha",_);
}
}
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a,__meta,__extmap,__hash){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18130,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18132 = (((k18130 instanceof cljs.core.Keyword))?k18130.fqn:null);
switch (G__18132) {
case "r":
return self__.r;

break;
case "g":
return self__.g;

break;
case "b":
return self__.b;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18130,else__8062__auto__);

}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__18133 = ((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0)));
return (thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1(G__18133) : thi.ng.color.core.int24.call(null,G__18133));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__18134 = (((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24)));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__18134) : thi.ng.color.core.int32.call(null,G__18134));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$r,self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$g,self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$b,self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18129){
var self__ = this;
var G__18129__$1 = this;
return (new cljs.core.RecordIter((0),G__18129__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r,cljs.core.cst$kw$g,cljs.core.cst$kw$b,cljs.core.cst$kw$a], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a,null,null,null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.RGBA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.r);

(dest[(idx + (1))] = self__.g);

(dest[(idx + (2))] = self__.b);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.rotate_hue(thi.ng.color.core.as_hsva(___$1),theta));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_saturation(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp((self__.a + offset),0.0,1.0),null,null,null));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
var G__18135 = [cljs.core.str("rgba("),cljs.core.str((r__$1 | (0))),cljs.core.str(","),cljs.core.str((g__$1 | (0))),cljs.core.str(","),cljs.core.str((b__$1 | (0))),cljs.core.str(","),cljs.core.str((function (){var x__7722__auto__ = 0.0;
var y__7723__auto__ = self__.a;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})()),cljs.core.str(")")].join('');
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__18135) : thi.ng.color.core.css.call(null,G__18135));
} else {
return thi.ng.color.core.as_css(thi.ng.color.core.as_int24(___$1));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__7722__auto__ = (function (){var x__7722__auto__ = self__.r;
var y__7723__auto__ = self__.g;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var y__7723__auto__ = self__.b;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__7729__auto__ = (function (){var x__7729__auto__ = self__.r;
var y__7730__auto__ = self__.g;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var y__7730__auto__ = self__.b;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()) / v);
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__7722__auto__ = (function (){var x__7722__auto__ = self__.r;
var y__7723__auto__ = self__.g;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var y__7723__auto__ = self__.b;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.RGBA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$r,null,cljs.core.cst$kw$g,null,cljs.core.cst$kw$b,null,cljs.core.cst$kw$a,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.RGBA((function (){var a__14149__auto__ = self__.r;
return (((dest__$1.r - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.g;
return (((dest__$1.g - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.b;
return (((dest__$1.b - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.a;
return (((dest__$1.a - a__14149__auto__) * t) + a__14149__auto__);
})(),null,null,null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18129){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18139 = cljs.core.keyword_identical_QMARK_;
var expr__18140 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18142 = cljs.core.cst$kw$r;
var G__18143 = expr__18140;
return (pred__18139.cljs$core$IFn$_invoke$arity$2 ? pred__18139.cljs$core$IFn$_invoke$arity$2(G__18142,G__18143) : pred__18139.call(null,G__18142,G__18143));
})())){
return (new thi.ng.color.core.RGBA(G__18129,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18144 = cljs.core.cst$kw$g;
var G__18145 = expr__18140;
return (pred__18139.cljs$core$IFn$_invoke$arity$2 ? pred__18139.cljs$core$IFn$_invoke$arity$2(G__18144,G__18145) : pred__18139.call(null,G__18144,G__18145));
})())){
return (new thi.ng.color.core.RGBA(self__.r,G__18129,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18146 = cljs.core.cst$kw$b;
var G__18147 = expr__18140;
return (pred__18139.cljs$core$IFn$_invoke$arity$2 ? pred__18139.cljs$core$IFn$_invoke$arity$2(G__18146,G__18147) : pred__18139.call(null,G__18146,G__18147));
})())){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__18129,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18148 = cljs.core.cst$kw$a;
var G__18149 = expr__18140;
return (pred__18139.cljs$core$IFn$_invoke$arity$2 ? pred__18139.cljs$core$IFn$_invoke$arity$2(G__18148,G__18149) : pred__18139.call(null,G__18148,G__18149));
})())){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__18129,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18129),null));
}
}
}
}
});

thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$r,self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$g,self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$b,self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__7722__auto__ = (function (){var x__7722__auto__ = self__.r;
var y__7723__auto__ = self__.g;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var y__7723__auto__ = self__.b;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var d = (v - (function (){var x__7729__auto__ = (function (){var x__7729__auto__ = self__.r;
var y__7730__auto__ = self__.g;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var y__7730__auto__ = self__.b;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,s))?0.0:(function (){var pred__18150 = cljs.core._EQ__EQ_;
var expr__18151 = v;
if(cljs.core.truth_((pred__18150.cljs$core$IFn$_invoke$arity$2 ? pred__18150.cljs$core$IFn$_invoke$arity$2(self__.r,expr__18151) : pred__18150.call(null,self__.r,expr__18151)))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_((pred__18150.cljs$core$IFn$_invoke$arity$2 ? pred__18150.cljs$core$IFn$_invoke$arity$2(self__.g,expr__18151) : pred__18150.call(null,self__.g,expr__18151)))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
var G__18153 = (((h__$1 < (0)))?(h__$1 + (1)):h__$1);
var G__18154 = s;
var G__18155 = v;
var G__18156 = self__.a;
return (thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4(G__18153,G__18154,G__18155,G__18156) : thi.ng.color.core.hsva.call(null,G__18153,G__18154,G__18155,G__18156));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18129){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__18129,self__.__extmap,self__.__hash));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - self__.r);
var m = (1.0 - self__.g);
var y = (1.0 - self__.b);
var k = (function (){var x__7729__auto__ = (function (){var x__7729__auto__ = c;
var y__7730__auto__ = m;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var y__7730__auto__ = y;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var G__18157 = (function (){var x__7722__auto__ = (c - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var G__18158 = (function (){var x__7722__auto__ = (m - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var G__18159 = (function (){var x__7722__auto__ = (y - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var G__18160 = (function (){var x__7722__auto__ = k;
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var G__18161 = self__.a;
return (thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 ? thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5(G__18157,G__18158,G__18159,G__18160,G__18161) : thi.ng.color.core.cmyka.call(null,G__18157,G__18158,G__18159,G__18160,G__18161));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var f1 = (function (){var x__7729__auto__ = (function (){var x__7729__auto__ = self__.r;
var y__7730__auto__ = self__.g;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var y__7730__auto__ = self__.b;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var f2 = (function (){var x__7722__auto__ = (function (){var x__7722__auto__ = self__.r;
var y__7723__auto__ = self__.g;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var y__7723__auto__ = self__.b;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,d))){
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(0.0,0.0,l,self__.a) : thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a));
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__18136 = cljs.core._EQ__EQ_;
var expr__18137 = f2;
if(cljs.core.truth_((pred__18136.cljs$core$IFn$_invoke$arity$2 ? pred__18136.cljs$core$IFn$_invoke$arity$2(self__.r,expr__18137) : pred__18136.call(null,self__.r,expr__18137)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__18136.cljs$core$IFn$_invoke$arity$2 ? pred__18136.cljs$core$IFn$_invoke$arity$2(self__.g,expr__18137) : pred__18136.call(null,self__.g,expr__18137)))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(h__$1,s,l,self__.a) : thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a));
}
});

thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$r,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$b,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null))], null);
});

thi.ng.color.core.RGBA.cljs$lang$type = true;

thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__18131){
return (new thi.ng.color.core.RGBA(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(G__18131),cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(G__18131),cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(G__18131),cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(G__18131),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18131,cljs.core.cst$kw$r,cljs.core.array_seq([cljs.core.cst$kw$g,cljs.core.cst$kw$b,cljs.core.cst$kw$a], 0)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int24 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18164,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18166 = (((k18164 instanceof cljs.core.Keyword))?k18164.fqn:null);
switch (G__18166) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18164,else__8062__auto__);

}
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__18167 = (self__.col | (4278190080));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__18167) : thi.ng.color.core.int32.call(null,G__18167));
});

thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18163){
var self__ = this;
var G__18163__$1 = this;
return (new cljs.core.RecordIter((0),G__18163__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$col], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.Int24.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.Int24.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int24.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215)),null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.Int24.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(thi.ng.color.core.as_rgba(___$1),dest,stride,idx);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.rotate_hue(thi.ng.color.core.as_hsva(___$1),theta));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_saturation(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha(thi.ng.color.core.as_int32(___$1),offset);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__18168 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.array_seq([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__18168) : thi.ng.color.core.css.call(null,G__18168));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),1.0,null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__14149__auto__ = r;
return ((((dest__$1.r * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__14149__auto__ = g;
return ((((dest__$1.g * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__14149__auto__ = b;
return ((((dest__$1.b * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0))),null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18163){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18169 = cljs.core.keyword_identical_QMARK_;
var expr__18170 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18172 = cljs.core.cst$kw$col;
var G__18173 = expr__18170;
return (pred__18169.cljs$core$IFn$_invoke$arity$2 ? pred__18169.cljs$core$IFn$_invoke$arity$2(G__18172,G__18173) : pred__18169.call(null,G__18172,G__18173));
})())){
return (new thi.ng.color.core.Int24(G__18163,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18163),null));
}
});

thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18163){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__18163,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$col], null);
});

thi.ng.color.core.Int24.cljs$lang$type = true;

thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/Int24");
});

thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/Int24");
});

thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__18165){
return (new thi.ng.color.core.Int24(cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(G__18165),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18165,cljs.core.cst$kw$col),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.Int32 = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18176,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18178 = (((k18176 instanceof cljs.core.Keyword))?k18176.fqn:null);
switch (G__18178) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18176,else__8062__auto__);

}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215)),null,null,null));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.Int32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18175){
var self__ = this;
var G__18175__$1 = this;
return (new cljs.core.RecordIter((0),G__18175__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$col], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.Int32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.Int32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215)),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.Int32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(thi.ng.color.core.as_rgba(___$1),dest,stride,idx);
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.rotate_hue(thi.ng.color.core.as_hsva(___$1),theta));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_saturation(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp((a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
var G__18179 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.array_seq([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__18179) : thi.ng.color.core.css.call(null,G__18179));
} else {
return thi.ng.color.core.as_css(thi.ng.color.core.as_rgba(___$1));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_cmyka(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * (self__.col & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.math.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.math.core.INV8BIT * (self__.col & (255))),(thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255))),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba(dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__14149__auto__ = r;
return ((((dest__$1.r * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__14149__auto__ = g;
return ((((dest__$1.g * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__14149__auto__ = b;
return ((((dest__$1.b * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0))) | (((0.5 + (function (){var a__14149__auto__ = a;
return ((((dest__$1.a * (255)) - a__14149__auto__) * t) + a__14149__auto__);
})()) | (0)) << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18175){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18180 = cljs.core.keyword_identical_QMARK_;
var expr__18181 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18183 = cljs.core.cst$kw$col;
var G__18184 = expr__18181;
return (pred__18180.cljs$core$IFn$_invoke$arity$2 ? pred__18180.cljs$core$IFn$_invoke$arity$2(G__18183,G__18184) : pred__18180.call(null,G__18183,G__18184));
})())){
return (new thi.ng.color.core.Int32(G__18175,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18175),null));
}
});

thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18175){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__18175,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$col], null);
});

thi.ng.color.core.Int32.cljs$lang$type = true;

thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/Int32");
});

thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/Int32");
});

thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__18177){
return (new thi.ng.color.core.Int32(cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(G__18177),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18177,cljs.core.cst$kw$col),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18187,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18189 = (((k18187 instanceof cljs.core.Keyword))?k18187.fqn:null);
switch (G__18189) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18187,else__8062__auto__);

}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$s,self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18186){
var self__ = this;
var G__18186__$1 = this;
return (new cljs.core.RecordIter((0),G__18186__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$s,cljs.core.cst$kw$v,cljs.core.cst$kw$a], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.v);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp((offset + self__.s),0.0,1.0),self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp((offset + self__.v),0.0,1.0),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.as_hsla(thi.ng.color.core.as_rgba(___$1)));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem((self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__18191 = i;
switch (G__18191) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a,null,null,null));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a,null,null,null));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a,null,null,null));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a,null,null,null));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a,null,null,null));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a,null,null,null));

}
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$v,null,cljs.core.cst$kw$s,null,cljs.core.cst$kw$h,null,cljs.core.cst$kw$a,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__14149__auto__ = (self__.h + (1));
return (((h2 - a__14149__auto__) * t) + a__14149__auto__);
})(),1.0):cljs.core.rem((function (){var a__14149__auto__ = self__.h;
return ((((h2 + (1)) - a__14149__auto__) * t) + a__14149__auto__);
})(),1.0)):(function (){var a__14149__auto__ = self__.h;
return (((h2 - a__14149__auto__) * t) + a__14149__auto__);
})()),(function (){var a__14149__auto__ = self__.s;
return (((dest__$1.s - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.v;
return (((dest__$1.v - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.a;
return (((dest__$1.a - a__14149__auto__) * t) + a__14149__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18186){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18192 = cljs.core.keyword_identical_QMARK_;
var expr__18193 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18195 = cljs.core.cst$kw$h;
var G__18196 = expr__18193;
return (pred__18192.cljs$core$IFn$_invoke$arity$2 ? pred__18192.cljs$core$IFn$_invoke$arity$2(G__18195,G__18196) : pred__18192.call(null,G__18195,G__18196));
})())){
return (new thi.ng.color.core.HSVA(G__18186,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18197 = cljs.core.cst$kw$s;
var G__18198 = expr__18193;
return (pred__18192.cljs$core$IFn$_invoke$arity$2 ? pred__18192.cljs$core$IFn$_invoke$arity$2(G__18197,G__18198) : pred__18192.call(null,G__18197,G__18198));
})())){
return (new thi.ng.color.core.HSVA(self__.h,G__18186,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18199 = cljs.core.cst$kw$v;
var G__18200 = expr__18193;
return (pred__18192.cljs$core$IFn$_invoke$arity$2 ? pred__18192.cljs$core$IFn$_invoke$arity$2(G__18199,G__18200) : pred__18192.call(null,G__18199,G__18200));
})())){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__18186,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18201 = cljs.core.cst$kw$a;
var G__18202 = expr__18193;
return (pred__18192.cljs$core$IFn$_invoke$arity$2 ? pred__18192.cljs$core$IFn$_invoke$arity$2(G__18201,G__18202) : pred__18192.call(null,G__18201,G__18202));
})())){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__18186,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18186),null));
}
}
}
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$s,self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18186){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__18186,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - (function (){var G__18190 = (((2) * l) - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18190) : thi.ng.math.core.abs_STAR_.call(null,G__18190));
})()));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(self__.h,s_SINGLEQUOTE_,l,self__.a) : thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a));
});

thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$h,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$v,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null))], null);
});

thi.ng.color.core.HSVA.cljs$lang$type = true;

thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__18188){
return (new thi.ng.color.core.HSVA(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__18188),cljs.core.cst$kw$s.cljs$core$IFn$_invoke$arity$1(G__18188),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__18188),cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(G__18188),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18188,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$s,cljs.core.cst$kw$v,cljs.core.cst$kw$a], 0)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a,__meta,__extmap,__hash){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.typedarrays.core.float32(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18206,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18208 = (((k18206 instanceof cljs.core.Keyword))?k18206.fqn:null);
switch (G__18208) {
case "h":
return self__.h;

break;
case "s":
return self__.s;

break;
case "l":
return self__.l;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18206,else__8062__auto__);

}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$s,self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$l,self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18205){
var self__ = this;
var G__18205__$1 = this;
return (new cljs.core.RecordIter((0),G__18205__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h,cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$a], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
(dest[idx] = self__.h);

(dest[(idx + (1))] = self__.s);

(dest[(idx + (2))] = self__.l);

(dest[(idx + (3))] = self__.a);

return (idx + stride);
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp((offset + self__.s),0.0,1.0),self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = (function (){var G__18209 = (self__.h * 360.0);
return Math.round(G__18209);
})();
var s__$1 = (function (){var G__18210 = (self__.s * 100.0);
return Math.round(G__18210);
})();
var l__$1 = (function (){var G__18211 = (self__.l * 100.0);
return Math.round(G__18211);
})();
var G__18212 = (((self__.a < (1)))?[cljs.core.str("hsla("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%,"),cljs.core.str(self__.a),cljs.core.str(")")].join(''):[cljs.core.str("hsl("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%)")].join(''));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__18212) : thi.ng.color.core.css.call(null,G__18212));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp((function (){var G__18213 = f1;
var G__18214 = f2;
var G__18215 = (self__.h + thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__18213,G__18214,G__18215) : thi.ng.color.core.hsl_hue.call(null,G__18213,G__18214,G__18215));
})(),0.0,1.0),thi.ng.math.core.clamp((thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(f1,f2,self__.h) : thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h)),0.0,1.0),thi.ng.math.core.clamp((function (){var G__18216 = f1;
var G__18217 = f2;
var G__18218 = (self__.h - thi.ng.math.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__18216,G__18217,G__18218) : thi.ng.color.core.hsl_hue.call(null,G__18216,G__18217,G__18218));
})(),0.0,1.0),self__.a,null,null,null));
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$s,null,cljs.core.cst$kw$l,null,cljs.core.cst$kw$h,null,cljs.core.cst$kw$a,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla(dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__14149__auto__ = (self__.h + (1));
return (((h2 - a__14149__auto__) * t) + a__14149__auto__);
})(),1.0):cljs.core.rem((function (){var a__14149__auto__ = self__.h;
return ((((h2 + (1)) - a__14149__auto__) * t) + a__14149__auto__);
})(),1.0)):(function (){var a__14149__auto__ = self__.h;
return (((h2 - a__14149__auto__) * t) + a__14149__auto__);
})()),(function (){var a__14149__auto__ = self__.s;
return (((dest__$1.s - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.l;
return (((dest__$1.l - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.a;
return (((dest__$1.a - a__14149__auto__) * t) + a__14149__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18205){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18219 = cljs.core.keyword_identical_QMARK_;
var expr__18220 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18222 = cljs.core.cst$kw$h;
var G__18223 = expr__18220;
return (pred__18219.cljs$core$IFn$_invoke$arity$2 ? pred__18219.cljs$core$IFn$_invoke$arity$2(G__18222,G__18223) : pred__18219.call(null,G__18222,G__18223));
})())){
return (new thi.ng.color.core.HSLA(G__18205,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18224 = cljs.core.cst$kw$s;
var G__18225 = expr__18220;
return (pred__18219.cljs$core$IFn$_invoke$arity$2 ? pred__18219.cljs$core$IFn$_invoke$arity$2(G__18224,G__18225) : pred__18219.call(null,G__18224,G__18225));
})())){
return (new thi.ng.color.core.HSLA(self__.h,G__18205,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18226 = cljs.core.cst$kw$l;
var G__18227 = expr__18220;
return (pred__18219.cljs$core$IFn$_invoke$arity$2 ? pred__18219.cljs$core$IFn$_invoke$arity$2(G__18226,G__18227) : pred__18219.call(null,G__18226,G__18227));
})())){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__18205,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18228 = cljs.core.cst$kw$a;
var G__18229 = expr__18220;
return (pred__18219.cljs$core$IFn$_invoke$arity$2 ? pred__18219.cljs$core$IFn$_invoke$arity$2(G__18228,G__18229) : pred__18219.call(null,G__18228,G__18229));
})())){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__18205,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18205),null));
}
}
}
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$h,self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$s,self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$l,self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - (function (){var G__18230 = (l2 - (1));
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18230) : thi.ng.math.core.abs_STAR_.call(null,G__18230));
})()))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18205){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__18205,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$h,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$s,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$l,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null))], null);
});

thi.ng.color.core.HSLA.cljs$lang$type = true;

thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__18207){
return (new thi.ng.color.core.HSLA(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(G__18207),cljs.core.cst$kw$s.cljs$core$IFn$_invoke$arity$1(G__18207),cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(G__18207),cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(G__18207),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18207,cljs.core.cst$kw$h,cljs.core.array_seq([cljs.core.cst$kw$s,cljs.core.cst$kw$l,cljs.core.cst$kw$a], 0)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a,__meta,__extmap,__hash){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18233,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18235 = (((k18233 instanceof cljs.core.Keyword))?k18233.fqn:null);
switch (G__18235) {
case "c":
return self__.c;

break;
case "m":
return self__.m;

break;
case "y":
return self__.y;

break;
case "k":
return self__.k;

break;
case "a":
return self__.a;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18233,else__8062__auto__);

}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$c,self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$m,self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18232){
var self__ = this;
var G__18232__$1 = this;
return (new cljs.core.RecordIter((0),G__18232__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c,cljs.core.cst$kw$m,cljs.core.cst$kw$y,cljs.core.cst$kw$k,cljs.core.cst$kw$a], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a,null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(thi.ng.color.core.as_rgba(___$1),dest,stride,idx);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.rotate_hue(thi.ng.color.core.as_hsva(___$1),theta));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_saturation(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__7729__auto__ = 1.0;
var y__7730__auto__ = (self__.c + self__.k);
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()),(1.0 - (function (){var x__7729__auto__ = 1.0;
var y__7730__auto__ = (self__.m + self__.k);
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()),(1.0 - (function (){var x__7729__auto__ = 1.0;
var y__7730__auto__ = (self__.y + self__.k);
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()),self__.a,null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$y,null,cljs.core.cst$kw$m,null,cljs.core.cst$kw$k,null,cljs.core.cst$kw$c,null,cljs.core.cst$kw$a,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka(dest);
return (new thi.ng.color.core.CMYKA((function (){var a__14149__auto__ = self__.c;
return (((dest__$1.c - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.m;
return (((dest__$1.m - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.y;
return (((dest__$1.y - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.k;
return (((dest__$1.k - a__14149__auto__) * t) + a__14149__auto__);
})(),(function (){var a__14149__auto__ = self__.a;
return (((dest__$1.a - a__14149__auto__) * t) + a__14149__auto__);
})(),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18232){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18236 = cljs.core.keyword_identical_QMARK_;
var expr__18237 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18239 = cljs.core.cst$kw$c;
var G__18240 = expr__18237;
return (pred__18236.cljs$core$IFn$_invoke$arity$2 ? pred__18236.cljs$core$IFn$_invoke$arity$2(G__18239,G__18240) : pred__18236.call(null,G__18239,G__18240));
})())){
return (new thi.ng.color.core.CMYKA(G__18232,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18241 = cljs.core.cst$kw$m;
var G__18242 = expr__18237;
return (pred__18236.cljs$core$IFn$_invoke$arity$2 ? pred__18236.cljs$core$IFn$_invoke$arity$2(G__18241,G__18242) : pred__18236.call(null,G__18241,G__18242));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,G__18232,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18243 = cljs.core.cst$kw$y;
var G__18244 = expr__18237;
return (pred__18236.cljs$core$IFn$_invoke$arity$2 ? pred__18236.cljs$core$IFn$_invoke$arity$2(G__18243,G__18244) : pred__18236.call(null,G__18243,G__18244));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__18232,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18245 = cljs.core.cst$kw$k;
var G__18246 = expr__18237;
return (pred__18236.cljs$core$IFn$_invoke$arity$2 ? pred__18236.cljs$core$IFn$_invoke$arity$2(G__18245,G__18246) : pred__18236.call(null,G__18245,G__18246));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__18232,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18247 = cljs.core.cst$kw$a;
var G__18248 = expr__18237;
return (pred__18236.cljs$core$IFn$_invoke$arity$2 ? pred__18236.cljs$core$IFn$_invoke$arity$2(G__18247,G__18248) : pred__18236.call(null,G__18247,G__18248));
})())){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__18232,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18232),null));
}
}
}
}
}
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$c,self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$m,self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$y,self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$a,self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18232){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__18232,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$c,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null)),cljs.core.with_meta(cljs.core.cst$sym$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null))], null);
});

thi.ng.color.core.CMYKA.cljs$lang$type = true;

thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__18234){
return (new thi.ng.color.core.CMYKA(cljs.core.cst$kw$c.cljs$core$IFn$_invoke$arity$1(G__18234),cljs.core.cst$kw$m.cljs$core$IFn$_invoke$arity$1(G__18234),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(G__18234),cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__18234),cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(G__18234),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18234,cljs.core.cst$kw$c,cljs.core.array_seq([cljs.core.cst$kw$m,cljs.core.cst$kw$y,cljs.core.cst$kw$k,cljs.core.cst$kw$a], 0)),null));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.color.core.CSS = (function (col,__meta,__extmap,__hash){
this.col = col;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k18251,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__18253 = (((k18251 instanceof cljs.core.Keyword))?k18251.fqn:null);
switch (G__18253) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18251,else__8062__auto__);

}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24(c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32(c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18250){
var self__ = this;
var G__18250__$1 = this;
return (new cljs.core.RecordIter((0),G__18250__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$col], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

thi.ng.color.core.CSS.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.color.core.CSS.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CSS.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.invert(thi.ng.color.core.as_rgba(___$1)));
});

thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer(thi.ng.color.core.as_rgba(___$1),dest,stride,idx);
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.rotate_hue(thi.ng.color.core.as_hsva(___$1),theta));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_saturation(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_brightness(thi.ng.color.core.as_hsva(___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_alpha(thi.ng.color.core.as_rgba(___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsla(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_hsla(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba(c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$col,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(thi.ng.color.core.as_rgba(___$1),dest,t));
});

thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__18250){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__18254 = cljs.core.keyword_identical_QMARK_;
var expr__18255 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__18257 = cljs.core.cst$kw$col;
var G__18258 = expr__18255;
return (pred__18254.cljs$core$IFn$_invoke$arity$2 ? pred__18254.cljs$core$IFn$_invoke$arity$2(G__18257,G__18258) : pred__18254.call(null,G__18257,G__18258));
})())){
return (new thi.ng.color.core.CSS(G__18250,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__18250),null));
}
});

thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$col,self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__18250){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__18250,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.as_rgba(___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla(c);
}
});

thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$col,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$String], null))], null);
});

thi.ng.color.core.CSS.cljs$lang$type = true;

thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"thi.ng.color.core/CSS");
});

thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"thi.ng.color.core/CSS");
});

thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__18252){
return (new thi.ng.color.core.CSS(cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1(G__18252),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18252,cljs.core.cst$kw$col),null));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if(typeof thi.ng.color.core.t_thi$ng$color$core18299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.math.core.IInvert}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.math.core.IInterpolate}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.dstruct.streams.IIntoBuffer}
 * @implements {thi.ng.color.core.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core18299 = (function (to_rgba,from_rgba,ctor,col,meta18300){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta18300 = meta18300;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.col], 0));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__18302 = (function (){var G__18303 = thi.ng.math.core.invert((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__18303) : self__.from_rgba.call(null,G__18303));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__18302) : self__.ctor.call(null,G__18302));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,stride,idx);
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var G__18304 = (function (){var G__18305 = thi.ng.color.core.rotate_hue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),theta);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__18305) : self__.from_rgba.call(null,G__18305));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__18304) : self__.ctor.call(null,G__18304));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__18306 = (function (){var G__18307 = thi.ng.color.core.adjust_saturation((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__18307) : self__.from_rgba.call(null,G__18307));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__18306) : self__.ctor.call(null,G__18306));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__18308 = (function (){var G__18309 = thi.ng.color.core.adjust_brightness((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__18309) : self__.from_rgba.call(null,G__18309));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__18308) : self__.ctor.call(null,G__18308));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(thi.ng.color.core.as_hsva(___$1));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(thi.ng.color.core.as_hsla(___$1));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18301){
var self__ = this;
var _18301__$1 = this;
return self__.meta18300;
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(___$1,dest,0.5);
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var G__18310 = (function (){var G__18311 = thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),dest,t);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__18311) : self__.from_rgba.call(null,G__18311));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__18310) : self__.ctor.call(null,G__18310));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18301,meta18300__$1){
var self__ = this;
var _18301__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core18299(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta18300__$1));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core18299.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
});

thi.ng.color.core.t_thi$ng$color$core18299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$to_DASH_rgba,cljs.core.cst$sym$from_DASH_rgba,cljs.core.cst$sym$ctor,cljs.core.cst$sym$col,cljs.core.cst$sym$meta18300], null);
});

thi.ng.color.core.t_thi$ng$color$core18299.cljs$lang$type = true;

thi.ng.color.core.t_thi$ng$color$core18299.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core18299";

thi.ng.color.core.t_thi$ng$color$core18299.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write(writer__8042__auto__,"thi.ng.color.core/t_thi$ng$color$core18299");
});

thi.ng.color.core.__GT_t_thi$ng$color$core18299 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core18299(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta18300){
return (new thi.ng.color.core.t_thi$ng$color$core18299(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta18300));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core18299(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var args18312 = [];
var len__8605__auto___18319 = arguments.length;
var i__8606__auto___18320 = (0);
while(true){
if((i__8606__auto___18320 < len__8605__auto___18319)){
args18312.push((arguments[i__8606__auto___18320]));

var G__18321 = (i__8606__auto___18320 + (1));
i__8606__auto___18320 = G__18321;
continue;
} else {
}
break;
}

var G__18314 = args18312.length;
switch (G__18314) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18312.length)].join('')));

}
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__18315){
var vec__18316 = p__18315;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18316,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0,null,null,null));
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24((col & (16777215)),null,null,null));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var args18323 = [];
var len__8605__auto___18326 = arguments.length;
var i__8606__auto___18327 = (0);
while(true){
if((i__8606__auto___18327 < len__8605__auto___18326)){
args18323.push((arguments[i__8606__auto___18327]));

var G__18328 = (i__8606__auto___18327 + (1));
i__8606__auto___18327 = G__18328;
continue;
} else {
}
break;
}

var G__18325 = args18323.length;
switch (G__18325) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18323.length)].join('')));

}
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp(alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
});

thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2;

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var args18330 = [];
var len__8605__auto___18337 = arguments.length;
var i__8606__auto___18338 = (0);
while(true){
if((i__8606__auto___18338 < len__8605__auto___18337)){
args18330.push((arguments[i__8606__auto___18338]));

var G__18339 = (i__8606__auto___18338 + (1));
i__8606__auto___18338 = G__18339;
continue;
} else {
}
break;
}

var G__18332 = args18330.length;
switch (G__18332) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18330.length)].join('')));

}
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__18333){
var vec__18334 = p__18333;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18334,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18334,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18334,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18334,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0,null,null,null));
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var args18341 = [];
var len__8605__auto___18348 = arguments.length;
var i__8606__auto___18349 = (0);
while(true){
if((i__8606__auto___18349 < len__8605__auto___18348)){
args18341.push((arguments[i__8606__auto___18349]));

var G__18350 = (i__8606__auto___18349 + (1));
i__8606__auto___18349 = G__18350;
continue;
} else {
}
break;
}

var G__18343 = args18341.length;
switch (G__18343) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18341.length)].join('')));

}
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__18344){
var vec__18345 = p__18344;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18345,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0,null,null,null));
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var args18352 = [];
var len__8605__auto___18359 = arguments.length;
var i__8606__auto___18360 = (0);
while(true){
if((i__8606__auto___18360 < len__8605__auto___18359)){
args18352.push((arguments[i__8606__auto___18360]));

var G__18361 = (i__8606__auto___18360 + (1));
i__8606__auto___18360 = G__18361;
continue;
} else {
}
break;
}

var G__18354 = args18352.length;
switch (G__18354) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18352.length)].join('')));

}
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__18355){
var vec__18356 = p__18355;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18356,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(cljs.core.truth_(a)?a:1.0),null,null,null));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0,null,null,null));
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5;

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4(0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__14149__auto__ = f1;
return (((f2 - a__14149__auto__) * (6.0 * h__$1)) + a__14149__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__14149__auto__ = f1;
return (((f2 - a__14149__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__14149__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod((6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp(((function (){var G__18366 = (h__$1 - 3.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18366) : thi.ng.math.core.abs_STAR_.call(null,G__18366));
})() - (1)),0.0,1.0),thi.ng.math.core.clamp((2.0 - (function (){var G__18367 = (h__$1 - 2.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18367) : thi.ng.math.core.abs_STAR_.call(null,G__18367));
})()),0.0,1.0),thi.ng.math.core.clamp((2.0 - (function (){var G__18368 = (h__$1 - 4.0);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18368) : thi.ng.math.core.abs_STAR_.call(null,G__18368));
})()),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__18376 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(2),null);
var pw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18376,(3),null);
var vec__18379 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(2),null);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18379,(3),null);
var c = (qx - (function (){var x__7729__auto__ = qw;
var y__7730__auto__ = qy;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})());
var h = (function (){var G__18382 = (((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__18382) : thi.ng.math.core.abs_STAR_.call(null,G__18382));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp(h,0.0,1.0),thi.ng.math.core.clamp(c,0.0,1.0),thi.ng.math.core.clamp(qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__18389 = thi.ng.color.core.rgba__GT_hcva(rgba);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18389,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__18392 = thi.ng.color.core.hue__GT_rgb(h);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp((c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp((c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var args18395 = [];
var len__8605__auto___18401 = arguments.length;
var i__8606__auto___18402 = (0);
while(true){
if((i__8606__auto___18402 < len__8605__auto___18401)){
args18395.push((arguments[i__8606__auto___18402]));

var G__18403 = (i__8606__auto___18402 + (1));
i__8606__auto___18402 = G__18403;
continue;
} else {
}
break;
}

var G__18397 = args18395.length;
switch (G__18397) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18395.length)].join('')));

}
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.hcya__GT_rgba,hcya);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4(h,c,y,1.0);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__18398 = thi.ng.color.core.hue__GT_rgb(h);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp((((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp((((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp((((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var args18405 = [];
var len__8605__auto___18408 = arguments.length;
var i__8606__auto___18409 = (0);
while(true){
if((i__8606__auto___18409 < len__8605__auto___18408)){
args18405.push((arguments[i__8606__auto___18409]));

var G__18410 = (i__8606__auto___18409 + (1));
i__8606__auto___18409 = G__18410;
continue;
} else {
}
break;
}

var G__18407 = args18405.length;
switch (G__18407) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18405.length)].join('')));

}
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,cb,cr,1.0);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp(((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp((y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp(((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp((((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp((((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp((((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var args18412 = [];
var len__8605__auto___18415 = arguments.length;
var i__8606__auto___18416 = (0);
while(true){
if((i__8606__auto___18416 < len__8605__auto___18415)){
args18412.push((arguments[i__8606__auto___18416]));

var G__18417 = (i__8606__auto___18416 + (1));
i__8606__auto___18416 = G__18417;
continue;
} else {
}
break;
}

var G__18414 = args18412.length;
switch (G__18414) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18412.length)].join('')));

}
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.yuva__GT_rgba,yuva);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,u,v,1.0);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp(((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp((y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp(((2.03211 * u) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp((((x < 0.0031308))?(12.92 * x):((1.055 * (function (){var G__18421 = x;
var G__18422 = ((1) / 2.4);
return Math.pow(G__18421,G__18422);
})()) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var args18423 = [];
var len__8605__auto___18426 = arguments.length;
var i__8606__auto___18427 = (0);
while(true){
if((i__8606__auto___18427 < len__8605__auto___18426)){
args18423.push((arguments[i__8606__auto___18427]));

var G__18428 = (i__8606__auto___18427 + (1));
i__8606__auto___18427 = G__18428;
continue;
} else {
}
break;
}

var G__18425 = args18423.length;
switch (G__18425) {
case 1:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18423.length)].join('')));

}
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.cie1931__GT_rgba,xyz);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4(x,y,z,1.0);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct((((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct((((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct((((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
});

thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(hex)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1)):hex);
var len = cljs.core.count(hex__$1);
if(((3) === len)){
var vec__18433 = hex__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18433,(2),null);
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(r),cljs.core.str(r),cljs.core.str(g),cljs.core.str(g),cljs.core.str(b),cljs.core.str(b)].join(''),(16),cljs.core.array_seq([(0)], 0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.array_seq([(0)], 0)));
} else {
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.array_seq([(0)], 0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,(0),(cljs.core.count(c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(c,(10),cljs.core.array_seq([(0)], 0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(col))){
return thi.ng.color.core.hex__GT_int(col);
} else {
var vec__18442 = cljs.core.re_seq(/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__18445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18442,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(3),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(4),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18445,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null).call(null,mode))){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val(a),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([1.0], 0)),null,null,null));
} else {
return (new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float(a) / 360.0),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.array_seq([1.0], 0)),null,null,null)).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null);
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type(thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type(thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type(thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type(thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$orange,cljs.core.cst$kw$yellow,cljs.core.cst$kw$lime,cljs.core.cst$kw$green,cljs.core.cst$kw$teal,cljs.core.cst$kw$cyan,cljs.core.cst$kw$azure,cljs.core.cst$kw$blue,cljs.core.cst$kw$purple,cljs.core.cst$kw$magenta], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18448_SHARP_){
return (p1__18448_SHARP_ / 360.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys(thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$yellow,cljs.core.cst$kw$green,cljs.core.cst$kw$cyan,cljs.core.cst$kw$blue,cljs.core.cst$kw$magenta], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var args18449 = [];
var len__8605__auto___18460 = arguments.length;
var i__8606__auto___18461 = (0);
while(true){
if((i__8606__auto___18461 < len__8605__auto___18460)){
args18449.push((arguments[i__8606__auto___18461]));

var G__18462 = (i__8606__auto___18461 + (1));
i__8606__auto___18461 = G__18462;
continue;
} else {
}
break;
}

var G__18451 = args18449.length;
switch (G__18451) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18449.length)].join('')));

}
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2(col,thi.ng.color.core.hues);
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue(col);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (h){
return (function (p__18452,p__18453){
var vec__18454 = p__18452;
var h_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18454,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18454,(1),null);
var vec__18457 = p__18453;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18457,(1),null);
var d = (function (){var x__7729__auto__ = thi.ng.math.core.abs_diff(h,v);
var y__7730__auto__ = thi.ng.math.core.abs_diff((h - (1)),v);
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
});})(h))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
});

thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2;

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba(col);
return (new thi.ng.color.core.RGBA((function (){var G__18470 = col__$1.r;
var G__18471 = gamma;
return Math.pow(G__18470,G__18471);
})(),(function (){var G__18472 = col__$1.g;
var G__18473 = gamma;
return Math.pow(G__18472,G__18473);
})(),(function (){var G__18474 = col__$1.b;
var G__18475 = gamma;
return Math.pow(G__18474,G__18475);
})(),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue(col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness(thi.ng.color.core.adjust_saturation(thi.ng.color.core.rotate_hue(col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var args18476 = [];
var len__8605__auto___18479 = arguments.length;
var i__8606__auto___18480 = (0);
while(true){
if((i__8606__auto___18480 < len__8605__auto___18479)){
args18476.push((arguments[i__8606__auto___18480]));

var G__18481 = (i__8606__auto___18480 + (1));
i__8606__auto___18480 = G__18481;
continue;
} else {
}
break;
}

var G__18478 = args18476.length;
switch (G__18478) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18476.length)].join('')));

}
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4(col,delta,delta,delta);
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog(col,(thi.ng.math.core.randnorm() * theta),(thi.ng.math.core.randnorm() * sat),(thi.ng.math.core.randnorm() * bright));
});

thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4;

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__18492 = (function (){var G__18498 = thi.ng.color.core.as_rgba(a);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18498) : cljs.core.deref.call(null,G__18498));
})();
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(0),null);
var ga = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(1),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(2),null);
var vec__18495 = (function (){var G__18499 = thi.ng.color.core.as_rgba(b);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18499) : cljs.core.deref.call(null,G__18499));
})();
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(0),null);
var gb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(1),null);
var bb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
var G__18500 = (((dr * dr) + (dg * dg)) + (db * db));
return Math.sqrt(G__18500);
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__18510 = (function (){var G__18516 = thi.ng.color.core.as_hsva(a);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18516) : cljs.core.deref.call(null,G__18516));
})();
var ha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510,(0),null);
var sa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510,(1),null);
var va = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18510,(2),null);
var vec__18513 = (function (){var G__18517 = thi.ng.color.core.as_hsva(b);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18517) : cljs.core.deref.call(null,G__18517));
})();
var hb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(0),null);
var sb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(1),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
var G__18518 = (((dh * dh) + (ds * ds)) + (dv * dv));
return Math.sqrt(G__18518);
});
