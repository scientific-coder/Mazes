// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');

/**
 * @interface
 */
thi.ng.math.core.IMathOps = function(){};

thi.ng.math.core._PLUS_ = (function thi$ng$math$core$_PLUS_(var_args){
var args14176 = [];
var len__8605__auto___14188 = arguments.length;
var i__8606__auto___14189 = (0);
while(true){
if((i__8606__auto___14189 < len__8605__auto___14188)){
args14176.push((arguments[i__8606__auto___14189]));

var G__14190 = (i__8606__auto___14189 + (1));
i__8606__auto___14189 = G__14190;
continue;
} else {
}
break;
}

var G__14178 = args14176.length;
switch (G__14178) {
case 1:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14176.length)].join('')));

}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
}
});

thi.ng.math.core._PLUS_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._ = (function thi$ng$math$core$_(var_args){
var args14179 = [];
var len__8605__auto___14192 = arguments.length;
var i__8606__auto___14193 = (0);
while(true){
if((i__8606__auto___14193 < len__8605__auto___14192)){
args14179.push((arguments[i__8606__auto___14193]));

var G__14194 = (i__8606__auto___14193 + (1));
i__8606__auto___14193 = G__14194;
continue;
} else {
}
break;
}

var G__14181 = args14179.length;
switch (G__14181) {
case 1:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14179.length)].join('')));

}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
}
});

thi.ng.math.core._.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._STAR_ = (function thi$ng$math$core$_STAR_(var_args){
var args14182 = [];
var len__8605__auto___14196 = arguments.length;
var i__8606__auto___14197 = (0);
while(true){
if((i__8606__auto___14197 < len__8605__auto___14196)){
args14182.push((arguments[i__8606__auto___14197]));

var G__14198 = (i__8606__auto___14197 + (1));
i__8606__auto___14197 = G__14198;
continue;
} else {
}
break;
}

var G__14184 = args14182.length;
switch (G__14184) {
case 1:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14182.length)].join('')));

}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$_STAR_$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
}
});

thi.ng.math.core._STAR_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.div = (function thi$ng$math$core$div(var_args){
var args14185 = [];
var len__8605__auto___14200 = arguments.length;
var i__8606__auto___14201 = (0);
while(true){
if((i__8606__auto___14201 < len__8605__auto___14200)){
args14185.push((arguments[i__8606__auto___14201]));

var G__14202 = (i__8606__auto___14201 + (1));
i__8606__auto___14201 = G__14202;
continue;
} else {
}
break;
}

var G__14187 = args14185.length;
switch (G__14187) {
case 1:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14185.length)].join('')));

}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$2 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$div$arity$4 == null)))){
return _.thi$ng$math$core$IMathOps$div$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
}
});

thi.ng.math.core.div.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.madd = (function thi$ng$math$core$madd(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$madd$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$madd$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.madd[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.madd["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.madd",_);
}
}
}
});

thi.ng.math.core.addm = (function thi$ng$math$core$addm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$addm$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$addm$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.addm[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.addm["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.addm",_);
}
}
}
});

thi.ng.math.core.msub = (function thi$ng$math$core$msub(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$msub$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$msub$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.msub[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.msub["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.msub",_);
}
}
}
});

thi.ng.math.core.subm = (function thi$ng$math$core$subm(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$subm$arity$3 == null)))){
return _.thi$ng$math$core$IMathOps$subm$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.subm[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.subm["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.subm",_);
}
}
}
});

thi.ng.math.core.abs = (function thi$ng$math$core$abs(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMathOps$abs$arity$1 == null)))){
return _.thi$ng$math$core$IMathOps$abs$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.abs[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.abs["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.abs",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMutableMathOps = function(){};

thi.ng.math.core._PLUS__BANG_ = (function thi$ng$math$core$_PLUS__BANG_(var_args){
var args14204 = [];
var len__8605__auto___14216 = arguments.length;
var i__8606__auto___14217 = (0);
while(true){
if((i__8606__auto___14217 < len__8605__auto___14216)){
args14204.push((arguments[i__8606__auto___14217]));

var G__14218 = (i__8606__auto___14217 + (1));
i__8606__auto___14217 = G__14218;
continue;
} else {
}
break;
}

var G__14206 = args14204.length;
switch (G__14206) {
case 1:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14204.length)].join('')));

}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._PLUS__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
}
});

thi.ng.math.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.__BANG_ = (function thi$ng$math$core$__BANG_(var_args){
var args14207 = [];
var len__8605__auto___14220 = arguments.length;
var i__8606__auto___14221 = (0);
while(true){
if((i__8606__auto___14221 < len__8605__auto___14220)){
args14207.push((arguments[i__8606__auto___14221]));

var G__14222 = (i__8606__auto___14221 + (1));
i__8606__auto___14221 = G__14222;
continue;
} else {
}
break;
}

var G__14209 = args14207.length;
switch (G__14209) {
case 1:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14207.length)].join('')));

}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
}
});

thi.ng.math.core.__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core._STAR__BANG_ = (function thi$ng$math$core$_STAR__BANG_(var_args){
var args14210 = [];
var len__8605__auto___14224 = arguments.length;
var i__8606__auto___14225 = (0);
while(true){
if((i__8606__auto___14225 < len__8605__auto___14224)){
args14210.push((arguments[i__8606__auto___14225]));

var G__14226 = (i__8606__auto___14225 + (1));
i__8606__auto___14225 = G__14226;
continue;
} else {
}
break;
}

var G__14212 = args14210.length;
switch (G__14212) {
case 1:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14210.length)].join('')));

}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core._STAR__BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
}
});

thi.ng.math.core._STAR__BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.div_BANG_ = (function thi$ng$math$core$div_BANG_(var_args){
var args14213 = [];
var len__8605__auto___14228 = arguments.length;
var i__8606__auto___14229 = (0);
while(true){
if((i__8606__auto___14229 < len__8605__auto___14228)){
args14213.push((arguments[i__8606__auto___14229]));

var G__14230 = (i__8606__auto___14229 + (1));
i__8606__auto___14229 = G__14230;
continue;
} else {
}
break;
}

var G__14215 = args14213.length;
switch (G__14215) {
case 1:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14213.length)].join('')));

}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 == null)))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto__.call(null,_,a,b,c));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.div_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__8103__auto____$1.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
}
});

thi.ng.math.core.div_BANG_.cljs$lang$maxFixedArity = 4;


thi.ng.math.core.madd_BANG_ = (function thi$ng$math$core$madd_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.madd_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.madd_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.madd!",_);
}
}
}
});

thi.ng.math.core.addm_BANG_ = (function thi$ng$math$core$addm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.addm_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.addm_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.addm!",_);
}
}
}
});

thi.ng.math.core.msub_BANG_ = (function thi$ng$math$core$msub_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.msub_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.msub_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.msub!",_);
}
}
}
});

thi.ng.math.core.subm_BANG_ = (function thi$ng$math$core$subm_BANG_(_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 == null)))){
return _.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.subm_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.subm_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.subm!",_);
}
}
}
});

thi.ng.math.core.abs_BANG_ = (function thi$ng$math$core$abs_BANG_(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 == null)))){
return _.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.abs_BANG_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.abs_BANG_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.abs!",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IConjugate = function(){};

thi.ng.math.core.conjugate = (function thi$ng$math$core$conjugate(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IConjugate$conjugate$arity$1 == null)))){
return _.thi$ng$math$core$IConjugate$conjugate$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.conjugate[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.conjugate["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IConjugate.conjugate",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ICrossProduct = function(){};

thi.ng.math.core.cross = (function thi$ng$math$core$cross(_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$ICrossProduct$cross$arity$2 == null)))){
return _.thi$ng$math$core$ICrossProduct$cross$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.cross[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.cross["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("ICrossProduct.cross",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IDeltaEquals = function(){};

thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var args14232 = [];
var len__8605__auto___14235 = arguments.length;
var i__8606__auto___14236 = (0);
while(true){
if((i__8606__auto___14236 < len__8605__auto___14235)){
args14232.push((arguments[i__8606__auto___14236]));

var G__14237 = (i__8606__auto___14236 + (1));
i__8606__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var G__14234 = args14232.length;
switch (G__14234) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14232.length)].join('')));

}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((!((a == null))) && (!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 == null)))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
var x__8102__auto__ = (((a == null))?null:a);
var m__8103__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8103__auto__.call(null,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8103__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("IDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((!((a == null))) && (!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 == null)))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
var x__8102__auto__ = (((a == null))?null:a);
var m__8103__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__8103__auto__.call(null,a,b,eps));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.delta_EQ_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__8103__auto____$1.call(null,a,b,eps));
} else {
throw cljs.core.missing_protocol("IDeltaEquals.delta=",a);
}
}
}
});

thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.math.core.IDeterminant = function(){};

thi.ng.math.core.determinant = (function thi$ng$math$core$determinant(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDeterminant$determinant$arity$1 == null)))){
return _.thi$ng$math$core$IDeterminant$determinant$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.determinant[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.determinant["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IDeterminant.determinant",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IDotProduct = function(){};

thi.ng.math.core.dot = (function thi$ng$math$core$dot(var_args){
var args14239 = [];
var len__8605__auto___14242 = arguments.length;
var i__8606__auto___14243 = (0);
while(true){
if((i__8606__auto___14243 < len__8605__auto___14242)){
args14239.push((arguments[i__8606__auto___14243]));

var G__14244 = (i__8606__auto___14243 + (1));
i__8606__auto___14243 = G__14244;
continue;
} else {
}
break;
}

var G__14241 = args14239.length;
switch (G__14241) {
case 1:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14239.length)].join('')));

}
});

thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDotProduct$dot$arity$1 == null)))){
return _.thi$ng$math$core$IDotProduct$dot$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.dot["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IDotProduct.dot",_);
}
}
}
});

thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IDotProduct$dot$arity$2 == null)))){
return _.thi$ng$math$core$IDotProduct$dot$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.dot["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDotProduct.dot",_);
}
}
}
});

thi.ng.math.core.dot.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
thi.ng.math.core.IInterpolate = function(){};

thi.ng.math.core.mix = (function thi$ng$math$core$mix(var_args){
var args14246 = [];
var len__8605__auto___14249 = arguments.length;
var i__8606__auto___14250 = (0);
while(true){
if((i__8606__auto___14250 < len__8605__auto___14249)){
args14246.push((arguments[i__8606__auto___14250]));

var G__14251 = (i__8606__auto___14250 + (1));
i__8606__auto___14250 = G__14251;
continue;
} else {
}
break;
}

var G__14248 = args14246.length;
switch (G__14248) {
case 2:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14246.length)].join('')));

}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$2 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$2(_,x);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto__.call(null,_,x));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto____$1.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$3 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$3(_,x,t);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__8103__auto__.call(null,_,x,t));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__8103__auto____$1.call(null,_,x,t));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix$arity$6 == null)))){
return _.thi$ng$math$core$IInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$6 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__8103__auto__.call(null,_,a,b,c,u,v));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mix["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$6 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__8103__auto____$1.call(null,_,a,b,c,u,v));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
}
});

thi.ng.math.core.mix.cljs$lang$maxFixedArity = 6;


thi.ng.math.core.mix_with = (function thi$ng$math$core$mix_with(_,x,t,f){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$mix_with$arity$4 == null)))){
return _.thi$ng$math$core$IInterpolate$mix_with$arity$4(_,x,t,f);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mix_with[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$4(_,x,t,f) : m__8103__auto__.call(null,_,x,t,f));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mix_with["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$4(_,x,t,f) : m__8103__auto____$1.call(null,_,x,t,f));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix-with",_);
}
}
}
});

thi.ng.math.core.step = (function thi$ng$math$core$step(_,e){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$step$arity$2 == null)))){
return _.thi$ng$math$core$IInterpolate$step$arity$2(_,e);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.step[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__8103__auto__.call(null,_,e));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.step["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,e) : m__8103__auto____$1.call(null,_,e));
} else {
throw cljs.core.missing_protocol("IInterpolate.step",_);
}
}
}
});

thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(_,e1,e2){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInterpolate$smoothstep$arity$3 == null)))){
return _.thi$ng$math$core$IInterpolate$smoothstep$arity$3(_,e1,e2);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.smoothstep[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,e1,e2) : m__8103__auto__.call(null,_,e1,e2));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.smoothstep["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,e1,e2) : m__8103__auto____$1.call(null,_,e1,e2));
} else {
throw cljs.core.missing_protocol("IInterpolate.smoothstep",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IInvert = function(){};

thi.ng.math.core.invert = (function thi$ng$math$core$invert(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IInvert$invert$arity$1 == null)))){
return _.thi$ng$math$core$IInvert$invert$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.invert[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.invert["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IInvert.invert",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMinMax = function(){};

thi.ng.math.core.min = (function thi$ng$math$core$min(var_args){
var args14253 = [];
var len__8605__auto___14259 = arguments.length;
var i__8606__auto___14260 = (0);
while(true){
if((i__8606__auto___14260 < len__8605__auto___14259)){
args14253.push((arguments[i__8606__auto___14260]));

var G__14261 = (i__8606__auto___14260 + (1));
i__8606__auto___14260 = G__14261;
continue;
} else {
}
break;
}

var G__14255 = args14253.length;
switch (G__14255) {
case 2:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14253.length)].join('')));

}
});

thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$min$arity$2 == null)))){
return _.thi$ng$math$core$IMinMax$min$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.min[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.min["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMinMax.min",_);
}
}
}
});

thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$min$arity$3 == null)))){
return _.thi$ng$math$core$IMinMax$min$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.min[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.min["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMinMax.min",_);
}
}
}
});

thi.ng.math.core.min.cljs$lang$maxFixedArity = 3;


thi.ng.math.core.max = (function thi$ng$math$core$max(var_args){
var args14256 = [];
var len__8605__auto___14263 = arguments.length;
var i__8606__auto___14264 = (0);
while(true){
if((i__8606__auto___14264 < len__8605__auto___14263)){
args14256.push((arguments[i__8606__auto___14264]));

var G__14265 = (i__8606__auto___14264 + (1));
i__8606__auto___14264 = G__14265;
continue;
} else {
}
break;
}

var G__14258 = args14256.length;
switch (G__14258) {
case 2:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14256.length)].join('')));

}
});

thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$max$arity$2 == null)))){
return _.thi$ng$math$core$IMinMax$max$arity$2(_,a);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.max[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto__.call(null,_,a));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.max["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,a) : m__8103__auto____$1.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMinMax.max",_);
}
}
}
});

thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMinMax$max$arity$3 == null)))){
return _.thi$ng$math$core$IMinMax$max$arity$3(_,a,b);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.max[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto__.call(null,_,a,b));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.max["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__8103__auto____$1.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMinMax.max",_);
}
}
}
});

thi.ng.math.core.max.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
thi.ng.math.core.ILimit = function(){};

thi.ng.math.core.limit = (function thi$ng$math$core$limit(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ILimit$limit$arity$2 == null)))){
return _.thi$ng$math$core$ILimit$limit$arity$2(_,x);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.limit[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto__.call(null,_,x));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.limit["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto____$1.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ILimit.limit",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.IMagnitude = function(){};

thi.ng.math.core.mag = (function thi$ng$math$core$mag(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMagnitude$mag$arity$1 == null)))){
return _.thi$ng$math$core$IMagnitude$mag$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mag[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mag["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMagnitude.mag",_);
}
}
}
});

thi.ng.math.core.mag_squared = (function thi$ng$math$core$mag_squared(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$IMagnitude$mag_squared$arity$1 == null)))){
return _.thi$ng$math$core$IMagnitude$mag_squared$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.mag_squared[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.mag_squared["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IMagnitude.mag-squared",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.INormalize = function(){};

thi.ng.math.core.normalize = (function thi$ng$math$core$normalize(var_args){
var args14267 = [];
var len__8605__auto___14270 = arguments.length;
var i__8606__auto___14271 = (0);
while(true){
if((i__8606__auto___14271 < len__8605__auto___14270)){
args14267.push((arguments[i__8606__auto___14271]));

var G__14272 = (i__8606__auto___14271 + (1));
i__8606__auto___14271 = G__14272;
continue;
} else {
}
break;
}

var G__14269 = args14267.length;
switch (G__14269) {
case 1:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14267.length)].join('')));

}
});

thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalize$arity$1 == null)))){
return _.thi$ng$math$core$INormalize$normalize$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.normalize["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalize.normalize",_);
}
}
}
});

thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,norm){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalize$arity$2 == null)))){
return _.thi$ng$math$core$INormalize$normalize$arity$2(_,norm);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,norm) : m__8103__auto__.call(null,_,norm));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.normalize["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,norm) : m__8103__auto____$1.call(null,_,norm));
} else {
throw cljs.core.missing_protocol("INormalize.normalize",_);
}
}
}
});

thi.ng.math.core.normalize.cljs$lang$maxFixedArity = 2;


thi.ng.math.core.normalized_QMARK_ = (function thi$ng$math$core$normalized_QMARK_(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 == null)))){
return _.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.normalized_QMARK_[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.normalized_QMARK_["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalize.normalized?",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ISetOps = function(){};

thi.ng.math.core.union = (function thi$ng$math$core$union(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$union$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$union$arity$2(_,x);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.union[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto__.call(null,_,x));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.union["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto____$1.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.union",_);
}
}
}
});

thi.ng.math.core.intersection = (function thi$ng$math$core$intersection(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$intersection$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$intersection$arity$2(_,x);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.intersection[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto__.call(null,_,x));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.intersection["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto____$1.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.intersection",_);
}
}
}
});

thi.ng.math.core.difference = (function thi$ng$math$core$difference(_,x){
if((!((_ == null))) && (!((_.thi$ng$math$core$ISetOps$difference$arity$2 == null)))){
return _.thi$ng$math$core$ISetOps$difference$arity$2(_,x);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.difference[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto__.call(null,_,x));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.difference["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$2(_,x) : m__8103__auto____$1.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.difference",_);
}
}
}
});


/**
 * @interface
 */
thi.ng.math.core.ITranspose = function(){};

thi.ng.math.core.transpose = (function thi$ng$math$core$transpose(_){
if((!((_ == null))) && (!((_.thi$ng$math$core$ITranspose$transpose$arity$1 == null)))){
return _.thi$ng$math$core$ITranspose$transpose$arity$1(_);
} else {
var x__8102__auto__ = (((_ == null))?null:_);
var m__8103__auto__ = (thi.ng.math.core.transpose[goog.typeOf(x__8102__auto__)]);
if(!((m__8103__auto__ == null))){
return (m__8103__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto__.call(null,_));
} else {
var m__8103__auto____$1 = (thi.ng.math.core.transpose["_"]);
if(!((m__8103__auto____$1 == null))){
return (m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8103__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8103__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITranspose.transpose",_);
}
}
}
});

thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.TWO_THIRD = (2.0 / 3.0);
thi.ng.math.core.SIXTH = (1.0 / 6.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core.INV7BIT = (1.0 / (127));
thi.ng.math.core.INV8BIT = (1.0 / (255));
thi.ng.math.core.INV15BIT = (1.0 / (32767));
thi.ng.math.core.INV16BIT = (1.0 / (65535));
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs_STAR_ = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
var G__14275 = (x - y);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14275) : thi.ng.math.core.abs_STAR_.call(null,G__14275));
});
thi.ng.math.core.sign = (function thi$ng$math$core$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);
}
}
});
(thi.ng.math.core.IDeltaEquals["number"] = true);

(thi.ng.math.core.delta_EQ_["number"] = (function() {
var G__14278 = null;
var G__14278__2 = (function (a,b){
if(typeof b === 'number'){
return ((function (){var G__14276 = (a - b);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14276) : thi.ng.math.core.abs_STAR_.call(null,G__14276));
})() <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__14278__3 = (function (a,b,eps){
if(typeof b === 'number'){
return ((function (){var G__14277 = (a - b);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__14277) : thi.ng.math.core.abs_STAR_.call(null,G__14277));
})() <= eps);
} else {
return null;
}
});
G__14278 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__14278__2.call(this,a,b);
case 3:
return G__14278__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14278.cljs$core$IFn$_invoke$arity$2 = G__14278__2;
G__14278.cljs$core$IFn$_invoke$arity$3 = G__14278__3;
return G__14278;
})()
);

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__14279 = cljs.core.next(a__$2);
var G__14280 = cljs.core.next(b__$1);
a__$2 = G__14279;
b__$1 = G__14280;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__14281 = cljs.core.next(a__$2);
var G__14282 = cljs.core.next(b__$1);
a__$2 = G__14281;
b__$1 = G__14282;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__14283 = cljs.core.next(a__$2);
var G__14284 = cljs.core.next(b__$1);
a__$2 = G__14283;
b__$1 = G__14284;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
});

cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__14285 = cljs.core.next(a__$2);
var G__14286 = cljs.core.next(b__$1);
a__$2 = G__14285;
b__$1 = G__14286;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
});

(thi.ng.math.core.IDeltaEquals["null"] = true);

(thi.ng.math.core.delta_EQ_["null"] = (function() {
var G__14287 = null;
var G__14287__2 = (function (_,b){
return (b == null);
});
var G__14287__3 = (function (_,b,___$1){
return (b == null);
});
G__14287 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__14287__2.call(this,_,b);
case 3:
return G__14287__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14287.cljs$core$IFn$_invoke$arity$2 = G__14287__2;
G__14287.cljs$core$IFn$_invoke$arity$3 = G__14287__3;
return G__14287;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_(x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_(x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(var_args){
var args14288 = [];
var len__8605__auto___14291 = arguments.length;
var i__8606__auto___14292 = (0);
while(true){
if((i__8606__auto___14292 < len__8605__auto___14291)){
args14288.push((arguments[i__8606__auto___14292]));

var G__14293 = (i__8606__auto___14292 + (1));
i__8606__auto___14292 = G__14293;
continue;
} else {
}
break;
}

var G__14290 = args14288.length;
switch (G__14290) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14288.length)].join('')));

}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
});

thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2;

/**
 * Constraints x to be in closed interval [min max].
 */
thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
/**
 * Constraints x to be in closed interval [0.0 .. 1.0]
 */
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Maps x from one interval into another. Intervals can be defined as
 *   vectors. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var args14295 = [];
var len__8605__auto___14306 = arguments.length;
var i__8606__auto___14307 = (0);
while(true){
if((i__8606__auto___14307 < len__8605__auto___14306)){
args14295.push((arguments[i__8606__auto___14307]));

var G__14308 = (i__8606__auto___14307 + (1));
i__8606__auto___14307 = G__14308;
continue;
} else {
}
break;
}

var G__14297 = args14295.length;
switch (G__14297) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14295.length)].join('')));

}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__14298,p__14299){
var vec__14300 = p__14298;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14300,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14300,(1),null);
var vec__14303 = p__14299;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
});

thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
});

thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5;

/**
 * Takes a number x, input interval and output interval. Returns x
 *   mapped proportionally from input to output interval and clamps it to
 *   output. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(var_args){
var args14310 = [];
var len__8605__auto___14333 = arguments.length;
var i__8606__auto___14334 = (0);
while(true){
if((i__8606__auto___14334 < len__8605__auto___14333)){
args14310.push((arguments[i__8606__auto___14334]));

var G__14335 = (i__8606__auto___14334 + (1));
i__8606__auto___14334 = G__14335;
continue;
} else {
}
break;
}

var G__14312 = args14310.length;
switch (G__14312) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14310.length)].join('')));

}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__14313,p__14314){
var vec__14315 = p__14313;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14315,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14315,(1),null);
var vec__14318 = p__14314;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14318,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14318,(1),null);
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
}
}
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__14321,p__14322,p__14323){
var vec__14324 = p__14321;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14324,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14324,(1),null);
var vec__14327 = p__14322;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14327,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14327,(1),null);
var vec__14330 = p__14323;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14330,(1),null);
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
});

thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7;

/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(var_args){
var args14337 = [];
var len__8605__auto___14344 = arguments.length;
var i__8606__auto___14345 = (0);
while(true){
if((i__8606__auto___14345 < len__8605__auto___14344)){
args14337.push((arguments[i__8606__auto___14345]));

var G__14346 = (i__8606__auto___14345 + (1));
i__8606__auto___14345 = G__14346;
continue;
} else {
}
break;
}

var G__14339 = args14337.length;
switch (G__14339) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14337.length)].join('')));

}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14340,x){
var vec__14341 = p__14340;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(1),null);
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
if((x >= min)){
return (x <= max);
} else {
return null;
}
});

thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Returns x mod y with result always in semi-closed interval [0..y
 */
thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem(x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
 *   resolution 1/x.
 */
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14348_SHARP_){
return (p1__14348_SHARP_ / n);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1))));
});
thi.ng.math.core.mix_STAR_ = (function thi$ng$math$core$mix_STAR_(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step_STAR_ = (function thi$ng$math$core$step_STAR_(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep_STAR_ = (function thi$ng$math$core$smoothstep_STAR_(e0,e1,x){
var t = thi.ng.math.core.clamp(((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.mix_circular = (function thi$ng$math$core$mix_circular(a,b,t){
var t__$1 = (1.0 - t);
return (((b - a) * (function (){var G__14350 = (1.0 - (t__$1 * t__$1));
return Math.sqrt(G__14350);
})()) + a);
});
thi.ng.math.core.mix_circular_flipped = (function thi$ng$math$core$mix_circular_flipped(a,b,t){
return (((b - a) * (- ((function (){var G__14352 = (1.0 - (t * t));
return Math.sqrt(G__14352);
})() - 1.0))) + a);
});
thi.ng.math.core.mix_cosine = (function thi$ng$math$core$mix_cosine(a,b,t){
return (((a - b) * (((function (){var G__14354 = (t * thi.ng.math.core.PI);
return Math.cos(G__14354);
})() * 0.5) + 0.5)) + b);
});
thi.ng.math.core.mix_bezier = (function thi$ng$math$core$mix_bezier(a,b,t,c1,c2){
var tsq = (t * t);
var invt = (1.0 - t);
var itsq = (invt * invt);
return (((((a * t) * itsq) + ((((((b - a) * c1) + a) * 3.0) * t) * itsq)) + ((((((b - a) * c2) + b) * 3.0) * tsq) * invt)) + ((b * t) * tsq));
});
thi.ng.math.core.mix_exp = (function thi$ng$math$core$mix_exp(a,b,t,e){
return (((b - a) * Math.pow(t,e)) + a);
});
thi.ng.math.core.mix_decimated = (function thi$ng$math$core$mix_decimated(a,b,t,n){
return (((b - a) * (((t * n) | (0)) / n)) + a);
});
thi.ng.math.core.mix_lens = (function thi$ng$math$core$mix_lens(a,b,t,pos,strength){
var v = (((b - a) * t) + a);
return ((((t < pos))?(((((strength > (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,a,(((b - a) * pos) + a),(t / pos)) - v) * strength):(((((strength < (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular).call(null,(((b - a) * pos) + a),b,((t - pos) / (1.0 - pos))) - v) * (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(strength) : thi.ng.math.core.abs_STAR_.call(null,strength)))) + v);
});
thi.ng.math.core.mix_bounce = (function thi$ng$math$core$mix_bounce(a,b,t,k){
if(!((t === (0)))){
var t_SINGLEQUOTE_ = (t * k);
var t_SINGLEQUOTE___$1 = (1.0 - ((Math.sin(t_SINGLEQUOTE_) / t_SINGLEQUOTE_) * (function (){var G__14356 = (t * thi.ng.math.core.HALF_PI);
return Math.cos(G__14356);
})()));
return (((b - a) * t_SINGLEQUOTE___$1) + a);
} else {
return a;
}
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor(((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__14357 = (pow2 << (1));
pow2 = G__14357;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
var G__14360 = (2);
var G__14361 = ((Math.log(x) / thi.ng.math.core.LOG2) | (0));
return Math.pow(G__14360,G__14361);
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil((Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil(x);
} else {
return thi.ng.math.core.floor(x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs_STAR_.call(null,x));
var ay = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs_STAR_.call(null,y));
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs_STAR_.call(null,x));
var ay = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs_STAR_.call(null,y));
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * (function (){var G__14364 = (2);
var G__14365 = (k | (0));
return Math.pow(G__14364,G__14365);
})());
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract(k);
var k__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,0.5))?((cljs.core.even_QMARK_((k | (0))))?(k | (0)):thi.ng.math.core.ceil(k)):(((f < 0.5))?thi.ng.math.core.floor(k):thi.ng.math.core.ceil(k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
var G__14367 = ((x * x) + (y * y));
return Math.sqrt(G__14367);
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
var G__14370 = x;
var G__14371 = (1.0 / y);
return Math.pow(G__14370,G__14371);
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * (function (){var G__14373 = (1.0 - h);
return Math.exp(G__14373);
})());
});
thi.ng.math.core.sinc = (function thi$ng$math$core$sinc(var_args){
var args14374 = [];
var len__8605__auto___14377 = arguments.length;
var i__8606__auto___14378 = (0);
while(true){
if((i__8606__auto___14378 < len__8605__auto___14377)){
args14374.push((arguments[i__8606__auto___14378]));

var G__14379 = (i__8606__auto___14378 + (1));
i__8606__auto___14378 = G__14379;
continue;
} else {
}
break;
}

var G__14376 = args14374.length;
switch (G__14376) {
case 1:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14374.length)].join('')));

}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x === (0))){
return 0.0;
} else {
return (Math.sin(x) / x);
}
});

thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2 = (function (x,freq){
if((x === (0))){
return 0.0;
} else {
var x_SINGLEQUOTE_ = (x * freq);
return (Math.sin(x_SINGLEQUOTE_) / x_SINGLEQUOTE_);
}
});

thi.ng.math.core.sinc.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.random = (function thi$ng$math$core$random(var_args){
var args14381 = [];
var len__8605__auto___14384 = arguments.length;
var i__8606__auto___14385 = (0);
while(true){
if((i__8606__auto___14385 < len__8605__auto___14384)){
args14381.push((arguments[i__8606__auto___14385]));

var G__14386 = (i__8606__auto___14385 + (1));
i__8606__auto___14385 = G__14386;
continue;
} else {
}
break;
}

var G__14383 = args14381.length;
switch (G__14383) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14381.length)].join('')));

}
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null));
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return ((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * max);
});

thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null))) + min);
});

thi.ng.math.core.random.cljs$lang$maxFixedArity = 2;

thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return (((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?((function (){var G__14389 = (((n / 100.0) * num) + 0.5);
return Math.round(G__14389);
})() | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,thi.ng.math.core.percentile_index(n,cljs.core.count(sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index((n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index((n - (1)),num);
var b = thi.ng.math.core.quartile_index(n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__14393 = thi.ng.math.core.quartile_range(n,cljs.core.count(sorted));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14393,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14393,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((b - a),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var args14397 = [];
var len__8605__auto___14400 = arguments.length;
var i__8606__auto___14401 = (0);
while(true){
if((i__8606__auto___14401 < len__8605__auto___14400)){
args14397.push((arguments[i__8606__auto___14401]));

var G__14402 = (i__8606__auto___14401 + (1));
i__8606__auto___14401 = G__14402;
continue;
} else {
}
break;
}

var G__14399 = args14397.length;
switch (G__14399) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14397.length)].join('')));

}
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2(n,1.0);
});

thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,ws));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ws,s){
return (function (p1__14396_SHARP_){
return (s * p1__14396_SHARP_);
});})(ws,s))
,ws);
});

thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2;

