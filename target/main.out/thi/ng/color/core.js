// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.color.core');
goog.require('cljs.core');
goog.require('thi.ng.xerror.core');
goog.require('thi.ng.math.core');
goog.require('thi.ng.dstruct.streams');
goog.require('thi.ng.typedarrays.core');
goog.require('thi.ng.strf.core');







thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex.call(null,(6))], null);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_rgba["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IRGBConvert.as-rgba",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_hsva["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSVConvert.as-hsva",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_hsla["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IHSLConvert.as-hsla",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_cmyka["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICMYKConvert.as-cmyka",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_css["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICSSConvert.as-css",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_int24["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int24",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.as_int32["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IIntConvert.as-int32",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.red["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.red",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.green["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.green",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.blue["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.blue",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.alpha["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.alpha",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.hue["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.hue",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.saturation["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.saturation",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.brightness["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.brightness",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.luminance["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.luminance",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.cyan["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.cyan",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.magenta["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.magenta",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.yellow["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.yellow",_);
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
return m__8103__auto__.call(null,_);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.black["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IColorComponents.black",_);
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
return m__8103__auto__.call(null,_,theta);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.rotate_hue["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_,theta);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.rotate-hue",_);
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
return m__8103__auto__.call(null,_,offset);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_saturation["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-saturation",_);
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
return m__8103__auto__.call(null,_,offset);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_brightness["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-brightness",_);
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
return m__8103__auto__.call(null,_,offset);
} else {
var m__8103__auto____$1 = (thi.ng.color.core.adjust_alpha["_"]);
if(!((m__8103__auto____$1 == null))){
return m__8103__auto____$1.call(null,_,offset);
} else {
throw cljs.core.missing_protocol.call(null,"IColorOps.adjust-alpha",_);
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
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.RGBA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12373,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12375 = (((k12373 instanceof cljs.core.Keyword))?k12373.fqn:null);
switch (G__12375) {
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
return cljs.core.get.call(null,self__.__extmap,k12373,else__8062__auto__);

}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int24.call(null,((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.int32.call(null,(((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24))));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.RGBA{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12372){
var self__ = this;
var G__12372__$1 = this;
return (new cljs.core.RecordIter((0),G__12372__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
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
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp.call(null,(self__.a + offset),0.0,1.0),null,null,null));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
return thi.ng.color.core.css.call(null,[cljs.core.str("rgba("),cljs.core.str((r__$1 | (0))),cljs.core.str(","),cljs.core.str((g__$1 | (0))),cljs.core.str(","),cljs.core.str((b__$1 | (0))),cljs.core.str(","),cljs.core.str((function (){var x__7722__auto__ = 0.0;
var y__7723__auto__ = self__.a;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})()),cljs.core.str(")")].join(''));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_int24.call(null,___$1));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
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
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))){
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
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"b","b",1482224470),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.RGBA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.RGBA((function (){var a__9156__auto__ = self__.r;
return (((dest__$1.r - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.g;
return (((dest__$1.g - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.b;
return (((dest__$1.b - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.a;
return (((dest__$1.a - a__9156__auto__) * t) + a__9156__auto__);
})(),null,null,null));
});

thi.ng.color.core.RGBA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12372){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12379 = cljs.core.keyword_identical_QMARK_;
var expr__12380 = k__8067__auto__;
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__12380))){
return (new thi.ng.color.core.RGBA(G__12372,self__.g,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"g","g",1738089905),expr__12380))){
return (new thi.ng.color.core.RGBA(self__.r,G__12372,self__.b,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"b","b",1482224470),expr__12380))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,G__12372,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12379.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__12380))){
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,G__12372,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12372),null));
}
}
}
}
});

thi.ng.color.core.RGBA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"g","g",1738089905),self__.g],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"b","b",1482224470),self__.b],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
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
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,s))?0.0:(function (){var pred__12382 = cljs.core._EQ__EQ_;
var expr__12383 = v;
if(cljs.core.truth_(pred__12382.call(null,self__.r,expr__12383))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_(pred__12382.call(null,self__.g,expr__12383))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
return thi.ng.color.core.hsva.call(null,(((h__$1 < (0)))?(h__$1 + (1)):h__$1),s,v,self__.a);
});

thi.ng.color.core.RGBA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12372){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,self__.a,G__12372,self__.__extmap,self__.__hash));
});

thi.ng.color.core.RGBA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
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
return thi.ng.color.core.cmyka.call(null,(function (){var x__7722__auto__ = (c - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),(function (){var x__7722__auto__ = (m - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),(function (){var x__7722__auto__ = (y - k);
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),(function (){var x__7722__auto__ = k;
var y__7723__auto__ = 0.0;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),self__.a);
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
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,d))){
return thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a);
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.math.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.math.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.math.core.SIXTH) + d2) / d);
var h = (function (){var pred__12376 = cljs.core._EQ__EQ_;
var expr__12377 = f2;
if(cljs.core.truth_(pred__12376.call(null,self__.r,expr__12377))){
return (db - dg);
} else {
if(cljs.core.truth_(pred__12376.call(null,self__.g,expr__12377))){
return ((thi.ng.math.core.THIRD + dr) - db);
} else {
return ((thi.ng.math.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a);
}
});

thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.RGBA.cljs$lang$type = true;

thi.ng.color.core.RGBA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/RGBA");
});

thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a,null,null,null));
});

thi.ng.color.core.map__GT_RGBA = (function thi$ng$color$core$map__GT_RGBA(G__12374){
return (new thi.ng.color.core.RGBA(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__12374),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(G__12374),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(G__12374),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__12374),null,cljs.core.dissoc.call(null,G__12374,new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
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
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.Int24.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12387,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12389 = (((k12387 instanceof cljs.core.Keyword))?k12387.fqn:null);
switch (G__12389) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12387,else__8062__auto__);

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
return thi.ng.color.core.int32.call(null,(self__.col | (4278190080)));
});

thi.ng.color.core.Int24.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.Int24{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12386){
var self__ = this;
var G__12386__$1 = this;
return (new cljs.core.RecordIter((0),G__12386__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
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
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_int32.call(null,___$1),offset);
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.Int24.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int24((((((0.5 + (function (){var a__9156__auto__ = r;
return ((((dest__$1.r * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__9156__auto__ = g;
return ((((dest__$1.g * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__9156__auto__ = b;
return ((((dest__$1.b * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0))),null,null,null));
});

thi.ng.color.core.Int24.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12386){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12390 = cljs.core.keyword_identical_QMARK_;
var expr__12391 = k__8067__auto__;
if(cljs.core.truth_(pred__12390.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__12391))){
return (new thi.ng.color.core.Int24(G__12386,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int24(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12386),null));
}
});

thi.ng.color.core.Int24.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12386){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.Int24(self__.col,G__12386,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int24.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int24.cljs$lang$type = true;

thi.ng.color.core.Int24.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/Int24");
});

thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/Int24");
});

thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col,null,null,null));
});

thi.ng.color.core.map__GT_Int24 = (function thi$ng$color$core$map__GT_Int24(G__12388){
return (new thi.ng.color.core.Int24(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__12388),null,cljs.core.dissoc.call(null,G__12388,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
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
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.Int32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12395,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12397 = (((k12395 instanceof cljs.core.Keyword))?k12395.fqn:null);
switch (G__12397) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12395,else__8062__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.Int32{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12394){
var self__ = this;
var G__12394__$1 = this;
return (new cljs.core.RecordIter((0),G__12394__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
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
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.math.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp.call(null,(a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
return thi.ng.color.core.css.call(null,thi.ng.strf.core.format.call(null,thi.ng.color.core.hex6,(self__.col & (16777215))));
} else {
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.math.core.INV8BIT * ((self__.col >> (8)) & (255)));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_cmyka.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.Int32.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
var dest__$1 = thi.ng.color.core.as_rgba.call(null,dest);
return (new thi.ng.color.core.Int32(((((((0.5 + (function (){var a__9156__auto__ = r;
return ((((dest__$1.r * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0)) << (16)) | (((0.5 + (function (){var a__9156__auto__ = g;
return ((((dest__$1.g * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0)) << (8))) | ((0.5 + (function (){var a__9156__auto__ = b;
return ((((dest__$1.b * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0))) | (((0.5 + (function (){var a__9156__auto__ = a;
return ((((dest__$1.a * (255)) - a__9156__auto__) * t) + a__9156__auto__);
})()) | (0)) << (24))),null,null,null));
});

thi.ng.color.core.Int32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12394){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12398 = cljs.core.keyword_identical_QMARK_;
var expr__12399 = k__8067__auto__;
if(cljs.core.truth_(pred__12398.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__12399))){
return (new thi.ng.color.core.Int32(G__12394,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.Int32(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12394),null));
}
});

thi.ng.color.core.Int32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12394){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.Int32(self__.col,G__12394,self__.__extmap,self__.__hash));
});

thi.ng.color.core.Int32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
});

thi.ng.color.core.Int32.cljs$lang$type = true;

thi.ng.color.core.Int32.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/Int32");
});

thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/Int32");
});

thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.map__GT_Int32 = (function thi$ng$color$core$map__GT_Int32(G__12396){
return (new thi.ng.color.core.Int32(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__12396),null,cljs.core.dissoc.call(null,G__12396,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
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
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.HSVA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12403,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12405 = (((k12403 instanceof cljs.core.Keyword))?k12403.fqn:null);
switch (G__12405) {
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
return cljs.core.get.call(null,self__.__extmap,k12403,else__8062__auto__);

}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.HSVA{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12402){
var self__ = this;
var G__12402__$1 = this;
return (new cljs.core.RecordIter((0),G__12402__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.v,self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp.call(null,(offset + self__.v),0.0,1.0),self__.a,null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a,null,null,null));
} else {
var h__$1 = cljs.core.rem.call(null,(self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__12406 = i;
switch (G__12406) {
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.HSVA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsva.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__9156__auto__ = (self__.h + (1));
return (((h2 - a__9156__auto__) * t) + a__9156__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__9156__auto__ = self__.h;
return ((((h2 + (1)) - a__9156__auto__) * t) + a__9156__auto__);
})(),1.0)):(function (){var a__9156__auto__ = self__.h;
return (((h2 - a__9156__auto__) * t) + a__9156__auto__);
})()),(function (){var a__9156__auto__ = self__.s;
return (((dest__$1.s - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.v;
return (((dest__$1.v - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.a;
return (((dest__$1.a - a__9156__auto__) * t) + a__9156__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSVA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12402){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12407 = cljs.core.keyword_identical_QMARK_;
var expr__12408 = k__8067__auto__;
if(cljs.core.truth_(pred__12407.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12408))){
return (new thi.ng.color.core.HSVA(G__12402,self__.s,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12407.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__12408))){
return (new thi.ng.color.core.HSVA(self__.h,G__12402,self__.v,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12407.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__12408))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,G__12402,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12407.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__12408))){
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,G__12402,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12402),null));
}
}
}
}
});

thi.ng.color.core.HSVA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
});

thi.ng.color.core.HSVA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12402){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,self__.a,G__12402,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSVA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - thi.ng.math.core.abs_STAR_.call(null,(((2) * l) - (1)))));
return thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a);
});

thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSVA.cljs$lang$type = true;

thi.ng.color.core.HSVA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/HSVA");
});

thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a,null,null,null));
});

thi.ng.color.core.map__GT_HSVA = (function thi$ng$color$core$map__GT_HSVA(G__12404){
return (new thi.ng.color.core.HSVA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12404),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__12404),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__12404),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__12404),null,cljs.core.dissoc.call(null,G__12404,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
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
return thi.ng.typedarrays.core.float32.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.HSLA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12413,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12415 = (((k12413 instanceof cljs.core.Keyword))?k12413.fqn:null);
switch (G__12415) {
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
return cljs.core.get.call(null,self__.__extmap,k12413,else__8062__auto__);

}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.HSLA{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12412){
var self__ = this;
var G__12412__$1 = this;
return (new cljs.core.RecordIter((0),G__12412__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod.call(null,(0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
var h__$1 = (self__.h + (cljs.core.rem.call(null,theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp.call(null,(offset + self__.s),0.0,1.0),self__.l,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
return thi.ng.color.core.css.call(null,(((self__.a < (1)))?[cljs.core.str("hsla("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%,"),cljs.core.str(self__.a),cljs.core.str(")")].join(''):[cljs.core.str("hsl("),cljs.core.str(h__$1),cljs.core.str(","),cljs.core.str(s__$1),cljs.core.str("%,"),cljs.core.str(l__$1),cljs.core.str("%)")].join('')));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a,null,null,null));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h + thi.ng.math.core.THIRD)),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h),0.0,1.0),thi.ng.math.core.clamp.call(null,thi.ng.color.core.hsl_hue.call(null,f1,f2,(self__.h - thi.ng.math.core.THIRD)),0.0,1.0),self__.a,null,null,null));
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"h","h",1109658740),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.HSLA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_hsla.call(null,dest);
var h2 = dest__$1.h;
var hd = thi.ng.math.core.abs_diff.call(null,self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem.call(null,(function (){var a__9156__auto__ = (self__.h + (1));
return (((h2 - a__9156__auto__) * t) + a__9156__auto__);
})(),1.0):cljs.core.rem.call(null,(function (){var a__9156__auto__ = self__.h;
return ((((h2 + (1)) - a__9156__auto__) * t) + a__9156__auto__);
})(),1.0)):(function (){var a__9156__auto__ = self__.h;
return (((h2 - a__9156__auto__) * t) + a__9156__auto__);
})()),(function (){var a__9156__auto__ = self__.s;
return (((dest__$1.s - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.l;
return (((dest__$1.l - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.a;
return (((dest__$1.a - a__9156__auto__) * t) + a__9156__auto__);
})(),null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12412){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12416 = cljs.core.keyword_identical_QMARK_;
var expr__12417 = k__8067__auto__;
if(cljs.core.truth_(pred__12416.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12417))){
return (new thi.ng.color.core.HSLA(G__12412,self__.s,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12416.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__12417))){
return (new thi.ng.color.core.HSLA(self__.h,G__12412,self__.l,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12416.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__12417))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,G__12412,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12416.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__12417))){
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,G__12412,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12412),null));
}
}
}
}
});

thi.ng.color.core.HSLA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"s","s",1705939918),self__.s],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - thi.ng.math.core.abs_STAR_.call(null,(l2 - (1)))))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a,null,null,null));
});

thi.ng.color.core.HSLA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12412){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,self__.a,G__12412,self__.__extmap,self__.__hash));
});

thi.ng.color.core.HSLA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.HSLA.cljs$lang$type = true;

thi.ng.color.core.HSLA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/HSLA");
});

thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a,null,null,null));
});

thi.ng.color.core.map__GT_HSLA = (function thi$ng$color$core$map__GT_HSLA(G__12414){
return (new thi.ng.color.core.HSLA(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12414),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(G__12414),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__12414),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__12414),null,cljs.core.dissoc.call(null,G__12414,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
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
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12421,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12423 = (((k12421 instanceof cljs.core.Keyword))?k12421.fqn:null);
switch (G__12423) {
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
return cljs.core.get.call(null,self__.__extmap,k12421,else__8062__auto__);

}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.CMYKA{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12420){
var self__ = this;
var G__12420__$1 = this;
return (new cljs.core.RecordIter((0),G__12420__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (5 + cljs.core.count.call(null,self__.__extmap));
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
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp.call(null,(offset + self__.a),0.0,1.0),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"m","m",1632677161),null,new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.CMYKA.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var dest__$1 = thi.ng.color.core.as_cmyka.call(null,dest);
return (new thi.ng.color.core.CMYKA((function (){var a__9156__auto__ = self__.c;
return (((dest__$1.c - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.m;
return (((dest__$1.m - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.y;
return (((dest__$1.y - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.k;
return (((dest__$1.k - a__9156__auto__) * t) + a__9156__auto__);
})(),(function (){var a__9156__auto__ = self__.a;
return (((dest__$1.a - a__9156__auto__) * t) + a__9156__auto__);
})(),null,null,null));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12420){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12424 = cljs.core.keyword_identical_QMARK_;
var expr__12425 = k__8067__auto__;
if(cljs.core.truth_(pred__12424.call(null,new cljs.core.Keyword(null,"c","c",-1763192079),expr__12425))){
return (new thi.ng.color.core.CMYKA(G__12420,self__.m,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12424.call(null,new cljs.core.Keyword(null,"m","m",1632677161),expr__12425))){
return (new thi.ng.color.core.CMYKA(self__.c,G__12420,self__.y,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12424.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12425))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,G__12420,self__.k,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12424.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__12425))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,G__12420,self__.a,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12424.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__12425))){
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,G__12420,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12420),null));
}
}
}
}
}
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"c","c",-1763192079),self__.c],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"m","m",1632677161),self__.m],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null))], null),self__.__extmap));
});

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12420){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,self__.a,G__12420,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CMYKA.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
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
return thi.ng.color.core.as_hsla.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

thi.ng.color.core.CMYKA.cljs$lang$type = true;

thi.ng.color.core.CMYKA.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/CMYKA");
});

thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a,null,null,null));
});

thi.ng.color.core.map__GT_CMYKA = (function thi$ng$color$core$map__GT_CMYKA(G__12422){
return (new thi.ng.color.core.CMYKA(new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(G__12422),new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(G__12422),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12422),new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__12422),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__12422),null,cljs.core.dissoc.call(null,G__12422,new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"a","a",-2123407586)),null));
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
return thi.ng.dstruct.streams.get_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.color.core.CSS.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k12429,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__12431 = (((k12429 instanceof cljs.core.Keyword))?k12429.fqn:null);
switch (G__12431) {
case "col":
return self__.col;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12429,else__8062__auto__);

}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.color.core.CSS{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12428){
var self__ = this;
var G__12428__$1 = this;
return (new cljs.core.RecordIter((0),G__12428__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.invert.call(null,thi.ng.color.core.as_rgba.call(null,___$1)));
});

thi.ng.color.core.CSS.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
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
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
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
return thi.ng.dstruct.streams.into_float_buffer.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,stride,idx);
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.rotate_hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1),theta));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1),offset));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.color.core.adjust_alpha.call(null,thi.ng.color.core.as_rgba.call(null,___$1),offset));
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
return thi.ng.color.core.magenta.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,thi.ng.color.core.parse_css.call(null,self__.col));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba.call(null,c);
}
});

thi.ng.color.core.CSS.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col","col",-1959363084),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.CSS.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,thi.ng.math.core.mix.call(null,thi.ng.color.core.as_rgba.call(null,___$1),dest,t));
});

thi.ng.color.core.CSS.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__12428){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__12432 = cljs.core.keyword_identical_QMARK_;
var expr__12433 = k__8067__auto__;
if(cljs.core.truth_(pred__12432.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),expr__12433))){
return (new thi.ng.color.core.CSS(G__12428,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.color.core.CSS(self__.col,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__12428),null));
}
});

thi.ng.color.core.CSS.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"col","col",-1959363084),self__.col],null))], null),self__.__extmap));
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
});

thi.ng.color.core.CSS.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__12428){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.color.core.CSS(self__.col,G__12428,self__.__extmap,self__.__hash));
});

thi.ng.color.core.CSS.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,thi.ng.color.core.as_rgba.call(null,___$1));
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
var c = thi.ng.color.core.parse_css.call(null,self__.col);
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla.call(null,c);
}
});

thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
});

thi.ng.color.core.CSS.cljs$lang$type = true;

thi.ng.color.core.CSS.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.color.core/CSS");
});

thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.color.core/CSS");
});

thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col,null,null,null));
});

thi.ng.color.core.map__GT_CSS = (function thi$ng$color$core$map__GT_CSS(G__12430){
return (new thi.ng.color.core.CSS(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(G__12430),null,cljs.core.dissoc.call(null,G__12430,new cljs.core.Keyword(null,"col","col",-1959363084)),null));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if(typeof thi.ng.color.core.t_thi$ng$color$core12445 !== 'undefined'){
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
thi.ng.color.core.t_thi$ng$color$core12445 = (function (to_rgba,from_rgba,ctor,col,meta12446){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta12446 = meta12446;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.get_float_buffer.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$math$core$IInvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$math$core$IInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.invert.call(null,self__.to_rgba.call(null,self__.col))));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$dstruct$streams$IIntoBuffer$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
return thi.ng.dstruct.streams.into_float_buffer.call(null,self__.to_rgba.call(null,self__.col),dest,stride,idx);
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.rotate_hue.call(null,self__.to_rgba.call(null,self__.col),theta)));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_saturation.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.color.core.adjust_brightness.call(null,self__.to_rgba.call(null,self__.col),offset)));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness.call(null,thi.ng.color.core.as_hsva.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance.call(null,thi.ng.color.core.as_hsla.call(null,___$1));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12447){
var self__ = this;
var _12447__$1 = this;
return self__.meta12446;
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to_rgba.call(null,self__.col);
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$math$core$IInterpolate$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$math$core$IInterpolate$mix$arity$2 = (function (_,dest){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.mix.call(null,___$1,dest,0.5);
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$math$core$IInterpolate$mix$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return self__.ctor.call(null,self__.from_rgba.call(null,thi.ng.math.core.mix.call(null,self__.to_rgba.call(null,self__.col),dest,t)));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12447,meta12446__$1){
var self__ = this;
var _12447__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core12445(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta12446__$1));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
});

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.color.core.t_thi$ng$color$core12445.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla.call(null,self__.to_rgba.call(null,self__.col));
});

thi.ng.color.core.t_thi$ng$color$core12445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta12446","meta12446",1314623947,null)], null);
});

thi.ng.color.core.t_thi$ng$color$core12445.cljs$lang$type = true;

thi.ng.color.core.t_thi$ng$color$core12445.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core12445";

thi.ng.color.core.t_thi$ng$color$core12445.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write.call(null,writer__8042__auto__,"thi.ng.color.core/t_thi$ng$color$core12445");
});

thi.ng.color.core.__GT_t_thi$ng$color$core12445 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core12445(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta12446){
return (new thi.ng.color.core.t_thi$ng$color$core12445(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta12446));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core12445(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var args12448 = [];
var len__8605__auto___12455 = arguments.length;
var i__8606__auto___12456 = (0);
while(true){
if((i__8606__auto___12456 < len__8605__auto___12455)){
args12448.push((arguments[i__8606__auto___12456]));

var G__12457 = (i__8606__auto___12456 + (1));
i__8606__auto___12456 = G__12457;
continue;
} else {
}
break;
}

var G__12450 = args12448.length;
switch (G__12450) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12448.length)].join('')));

}
});

thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__12451){
var vec__12452 = p__12451;
var r = cljs.core.nth.call(null,vec__12452,(0),null);
var g = cljs.core.nth.call(null,vec__12452,(1),null);
var b = cljs.core.nth.call(null,vec__12452,(2),null);
var a = cljs.core.nth.call(null,vec__12452,(3),null);
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
var args12459 = [];
var len__8605__auto___12462 = arguments.length;
var i__8606__auto___12463 = (0);
while(true){
if((i__8606__auto___12463 < len__8605__auto___12462)){
args12459.push((arguments[i__8606__auto___12463]));

var G__12464 = (i__8606__auto___12463 + (1));
i__8606__auto___12463 = G__12464;
continue;
} else {
}
break;
}

var G__12461 = args12459.length;
switch (G__12461) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12459.length)].join('')));

}
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col,null,null,null));
});

thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp.call(null,alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24))),null,null,null));
});

thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2;

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var args12466 = [];
var len__8605__auto___12473 = arguments.length;
var i__8606__auto___12474 = (0);
while(true){
if((i__8606__auto___12474 < len__8605__auto___12473)){
args12466.push((arguments[i__8606__auto___12474]));

var G__12475 = (i__8606__auto___12474 + (1));
i__8606__auto___12474 = G__12475;
continue;
} else {
}
break;
}

var G__12468 = args12466.length;
switch (G__12468) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12466.length)].join('')));

}
});

thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__12469){
var vec__12470 = p__12469;
var h = cljs.core.nth.call(null,vec__12470,(0),null);
var s = cljs.core.nth.call(null,vec__12470,(1),null);
var v = cljs.core.nth.call(null,vec__12470,(2),null);
var a = cljs.core.nth.call(null,vec__12470,(3),null);
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
var args12477 = [];
var len__8605__auto___12484 = arguments.length;
var i__8606__auto___12485 = (0);
while(true){
if((i__8606__auto___12485 < len__8605__auto___12484)){
args12477.push((arguments[i__8606__auto___12485]));

var G__12486 = (i__8606__auto___12485 + (1));
i__8606__auto___12485 = G__12486;
continue;
} else {
}
break;
}

var G__12479 = args12477.length;
switch (G__12479) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12477.length)].join('')));

}
});

thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__12480){
var vec__12481 = p__12480;
var h = cljs.core.nth.call(null,vec__12481,(0),null);
var s = cljs.core.nth.call(null,vec__12481,(1),null);
var l = cljs.core.nth.call(null,vec__12481,(2),null);
var a = cljs.core.nth.call(null,vec__12481,(3),null);
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
var args12488 = [];
var len__8605__auto___12495 = arguments.length;
var i__8606__auto___12496 = (0);
while(true){
if((i__8606__auto___12496 < len__8605__auto___12495)){
args12488.push((arguments[i__8606__auto___12496]));

var G__12497 = (i__8606__auto___12496 + (1));
i__8606__auto___12496 = G__12497;
continue;
} else {
}
break;
}

var G__12490 = args12488.length;
switch (G__12490) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12488.length)].join('')));

}
});

thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__12491){
var vec__12492 = p__12491;
var c = cljs.core.nth.call(null,vec__12492,(0),null);
var m = cljs.core.nth.call(null,vec__12492,(1),null);
var y = cljs.core.nth.call(null,vec__12492,(2),null);
var k = cljs.core.nth.call(null,vec__12492,(3),null);
var a = cljs.core.nth.call(null,vec__12492,(4),null);
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
return (new thi.ng.color.core.RGBA(thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),thi.ng.math.core.random.call(null),1.0,null,null,null));
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.call(null,(1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.call(null,(0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.call(null,(0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.call(null,(0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.call(null,(1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.call(null,(1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.call(null,(0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.call(null,(1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.call(null,0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.math.core.SIXTH)){
var a__9156__auto__ = f1;
return (((f2 - a__9156__auto__) * (6.0 * h__$1)) + a__9156__auto__);
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.math.core.TWO_THIRD)){
var a__9156__auto__ = f1;
return (((f2 - a__9156__auto__) * ((thi.ng.math.core.TWO_THIRD - h__$1) * 6.0)) + a__9156__auto__);
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod.call(null,(6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 3.0)) - (1)),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 2.0))),0.0,1.0),thi.ng.math.core.clamp.call(null,(2.0 - thi.ng.math.core.abs_STAR_.call(null,(h__$1 - 4.0))),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__12505 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.math.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.math.core.THIRD)], null));
var px = cljs.core.nth.call(null,vec__12505,(0),null);
var py = cljs.core.nth.call(null,vec__12505,(1),null);
var pz = cljs.core.nth.call(null,vec__12505,(2),null);
var pw = cljs.core.nth.call(null,vec__12505,(3),null);
var vec__12508 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.call(null,vec__12508,(0),null);
var qy = cljs.core.nth.call(null,vec__12508,(1),null);
var qz = cljs.core.nth.call(null,vec__12508,(2),null);
var qw = cljs.core.nth.call(null,vec__12508,(3),null);
var c = (qx - (function (){var x__7729__auto__ = qw;
var y__7730__auto__ = qy;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})());
var h = thi.ng.math.core.abs_STAR_.call(null,(((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,h,0.0,1.0),thi.ng.math.core.clamp.call(null,c,0.0,1.0),thi.ng.math.core.clamp.call(null,qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__12517 = thi.ng.color.core.rgba__GT_hcva.call(null,rgba);
var h = cljs.core.nth.call(null,vec__12517,(0),null);
var c = cljs.core.nth.call(null,vec__12517,(1),null);
var v = cljs.core.nth.call(null,vec__12517,(2),null);
var a = cljs.core.nth.call(null,vec__12517,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.call(null,0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__12520 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12520,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12520,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12520,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp.call(null,(c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var args12523 = [];
var len__8605__auto___12529 = arguments.length;
var i__8606__auto___12530 = (0);
while(true){
if((i__8606__auto___12530 < len__8605__auto___12529)){
args12523.push((arguments[i__8606__auto___12530]));

var G__12531 = (i__8606__auto___12530 + (1));
i__8606__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var G__12525 = args12523.length;
switch (G__12525) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12523.length)].join('')));

}
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.call(null,thi.ng.color.core.hcya__GT_rgba,hcya);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.call(null,h,c,y,1.0);
});

thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__12526 = thi.ng.color.core.hue__GT_rgb.call(null,h);
var r = cljs.core.nth.call(null,vec__12526,(0),null);
var g = cljs.core.nth.call(null,vec__12526,(1),null);
var b = cljs.core.nth.call(null,vec__12526,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,(((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var args12533 = [];
var len__8605__auto___12536 = arguments.length;
var i__8606__auto___12537 = (0);
while(true){
if((i__8606__auto___12537 < len__8605__auto___12536)){
args12533.push((arguments[i__8606__auto___12537]));

var G__12538 = (i__8606__auto___12537 + (1));
i__8606__auto___12537 = G__12538;
continue;
} else {
}
break;
}

var G__12535 = args12533.length;
switch (G__12535) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12533.length)].join('')));

}
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.call(null,thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.call(null,y,cb,cr,1.0);
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp.call(null,((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp.call(null,(((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp.call(null,(((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var args12540 = [];
var len__8605__auto___12543 = arguments.length;
var i__8606__auto___12544 = (0);
while(true){
if((i__8606__auto___12544 < len__8605__auto___12543)){
args12540.push((arguments[i__8606__auto___12544]));

var G__12545 = (i__8606__auto___12544 + (1));
i__8606__auto___12544 = G__12545;
continue;
} else {
}
break;
}

var G__12542 = args12540.length;
switch (G__12542) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12540.length)].join('')));

}
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.call(null,thi.ng.color.core.yuva__GT_rgba,yuva);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.call(null,y,u,v,1.0);
});

thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp.call(null,((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp.call(null,(y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp.call(null,((2.03211 * u) + y),0.0,1.0),a,null,null,null));
});

thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp.call(null,(((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgba = (function thi$ng$color$core$cie1931__GT_rgba(var_args){
var args12547 = [];
var len__8605__auto___12550 = arguments.length;
var i__8606__auto___12551 = (0);
while(true){
if((i__8606__auto___12551 < len__8605__auto___12550)){
args12547.push((arguments[i__8606__auto___12551]));

var G__12552 = (i__8606__auto___12551 + (1));
i__8606__auto___12551 = G__12552;
continue;
} else {
}
break;
}

var G__12549 = args12547.length;
switch (G__12549) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12547.length)].join('')));

}
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.call(null,thi.ng.color.core.cie1931__GT_rgba,xyz);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgba.call(null,x,y,z,1.0);
});

thi.ng.color.core.cie1931__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.cie1931_gamma_correct.call(null,(((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct.call(null,(((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a,null,null,null));
});

thi.ng.color.core.cie1931__GT_rgba.cljs$lang$maxFixedArity = 4;

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,hex)))?cljs.core.subs.call(null,hex,(1)):hex);
var len = cljs.core.count.call(null,hex__$1);
if(((3) === len)){
var vec__12557 = hex__$1;
var r = cljs.core.nth.call(null,vec__12557,(0),null);
var g = cljs.core.nth.call(null,vec__12557,(1),null);
var b = cljs.core.nth.call(null,vec__12557,(2),null);
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,[cljs.core.str(r),cljs.core.str(r),cljs.core.str(g),cljs.core.str(g),cljs.core.str(b),cljs.core.str(b)].join(''),(16),(0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
} else {
return thi.ng.color.core.int32.call(null,thi.ng.strf.core.parse_int.call(null,hex__$1,(16),(0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float.call(null,cljs.core.subs.call(null,c,(0),(cljs.core.count.call(null,c) - (1)))));
} else {
return (thi.ng.math.core.INV8BIT * thi.ng.strf.core.parse_int.call(null,c,(10),(0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,col))){
return thi.ng.color.core.hex__GT_int.call(null,col);
} else {
var vec__12566 = cljs.core.re_seq.call(null,/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__12569 = cljs.core.nth.call(null,vec__12566,(0),null);
var _ = cljs.core.nth.call(null,vec__12569,(0),null);
var mode = cljs.core.nth.call(null,vec__12569,(1),null);
var a = cljs.core.nth.call(null,vec__12569,(2),null);
var b = cljs.core.nth.call(null,vec__12569,(3),null);
var c = cljs.core.nth.call(null,vec__12569,(4),null);
var d = cljs.core.nth.call(null,vec__12569,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null).call(null,mode))){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val.call(null,a),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null));
} else {
return thi.ng.color.core.as_rgba.call(null,(new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float.call(null,a) / 360.0),thi.ng.color.core.parse_channel_val.call(null,b),thi.ng.color.core.parse_channel_val.call(null,c),thi.ng.strf.core.parse_float.call(null,d,1.0),null,null,null)));
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type.call(null,thi.ng.color.core.cie1931__GT_rgba,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.call(null,(function (p1__12572_SHARP_){
return (p1__12572_SHARP_ / 360.0);
}),cljs.core.range.call(null,(0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys.call(null,thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var args12573 = [];
var len__8605__auto___12584 = arguments.length;
var i__8606__auto___12585 = (0);
while(true){
if((i__8606__auto___12585 < len__8605__auto___12584)){
args12573.push((arguments[i__8606__auto___12585]));

var G__12586 = (i__8606__auto___12585 + (1));
i__8606__auto___12585 = G__12586;
continue;
} else {
}
break;
}

var G__12575 = args12573.length;
switch (G__12575) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12573.length)].join('')));

}
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.call(null,col,thi.ng.color.core.hues);
});

thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue.call(null,col);
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (h){
return (function (p__12576,p__12577){
var vec__12578 = p__12576;
var h_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12578,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__12578,(1),null);
var vec__12581 = p__12577;
var k = cljs.core.nth.call(null,vec__12581,(0),null);
var v = cljs.core.nth.call(null,vec__12581,(1),null);
var d = (function (){var x__7729__auto__ = thi.ng.math.core.abs_diff.call(null,h,v);
var y__7730__auto__ = thi.ng.math.core.abs_diff.call(null,(h - (1)),v);
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
var col__$1 = thi.ng.color.core.as_rgba.call(null,col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a,null,null,null));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue.call(null,col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness.call(null,thi.ng.color.core.adjust_saturation.call(null,thi.ng.color.core.rotate_hue.call(null,col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(var_args){
var args12588 = [];
var len__8605__auto___12591 = arguments.length;
var i__8606__auto___12592 = (0);
while(true){
if((i__8606__auto___12592 < len__8605__auto___12591)){
args12588.push((arguments[i__8606__auto___12592]));

var G__12593 = (i__8606__auto___12592 + (1));
i__8606__auto___12592 = G__12593;
continue;
} else {
}
break;
}

var G__12590 = args12588.length;
switch (G__12590) {
case 2:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12588.length)].join('')));

}
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$2 = (function (col,delta){
return thi.ng.color.core.random_analog.call(null,col,delta,delta,delta);
});

thi.ng.color.core.random_analog.cljs$core$IFn$_invoke$arity$4 = (function (col,theta,sat,bright){
return thi.ng.color.core.analog.call(null,col,(thi.ng.math.core.randnorm.call(null) * theta),(thi.ng.math.core.randnorm.call(null) * sat),(thi.ng.math.core.randnorm.call(null) * bright));
});

thi.ng.color.core.random_analog.cljs$lang$maxFixedArity = 4;

/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__12601 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,a));
var ra = cljs.core.nth.call(null,vec__12601,(0),null);
var ga = cljs.core.nth.call(null,vec__12601,(1),null);
var ba = cljs.core.nth.call(null,vec__12601,(2),null);
var vec__12604 = cljs.core.deref.call(null,thi.ng.color.core.as_rgba.call(null,b));
var rb = cljs.core.nth.call(null,vec__12604,(0),null);
var gb = cljs.core.nth.call(null,vec__12604,(1),null);
var bb = cljs.core.nth.call(null,vec__12604,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors (in cartesian space).
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__12613 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,a));
var ha = cljs.core.nth.call(null,vec__12613,(0),null);
var sa = cljs.core.nth.call(null,vec__12613,(1),null);
var va = cljs.core.nth.call(null,vec__12613,(2),null);
var vec__12616 = cljs.core.deref.call(null,thi.ng.color.core.as_hsva.call(null,b));
var hb = cljs.core.nth.call(null,vec__12616,(0),null);
var sb = cljs.core.nth.call(null,vec__12616,(1),null);
var vb = cljs.core.nth.call(null,vec__12616,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=core.js.map