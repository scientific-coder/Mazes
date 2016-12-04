// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.xerror.core');
goog.require('cljs.core');
thi.ng.xerror.core.throw_BANG_ = (function thi$ng$xerror$core$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.xerror.core.key_error_BANG_ = (function thi$ng$xerror$core$key_error_BANG_(k){
return thi.ng.xerror.core.throw_BANG_([cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.xerror.core.type_error_BANG_ = (function thi$ng$xerror$core$type_error_BANG_(t,x){
return thi.ng.xerror.core.throw_BANG_([cljs.core.str("Can't cast to "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''));
});
thi.ng.xerror.core.arity_error_BANG_ = (function thi$ng$xerror$core$arity_error_BANG_(n){
return thi.ng.xerror.core.throw_BANG_([cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.xerror.core.illegal_arg_BANG_ = (function thi$ng$xerror$core$illegal_arg_BANG_(var_args){
var args14515 = [];
var len__8605__auto___14518 = arguments.length;
var i__8606__auto___14519 = (0);
while(true){
if((i__8606__auto___14519 < len__8605__auto___14518)){
args14515.push((arguments[i__8606__auto___14519]));

var G__14520 = (i__8606__auto___14519 + (1));
i__8606__auto___14519 = G__14520;
continue;
} else {
}
break;
}

var G__14517 = args14515.length;
switch (G__14517) {
case 1:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14515.length)].join('')));

}
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2("Illegal argument",x);
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.xerror.core.throw_BANG_([cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;

thi.ng.xerror.core.unsupported_BANG_ = (function thi$ng$xerror$core$unsupported_BANG_(var_args){
var args14522 = [];
var len__8605__auto___14525 = arguments.length;
var i__8606__auto___14526 = (0);
while(true){
if((i__8606__auto___14526 < len__8605__auto___14525)){
args14522.push((arguments[i__8606__auto___14526]));

var G__14527 = (i__8606__auto___14526 + (1));
i__8606__auto___14526 = G__14527;
continue;
} else {
}
break;
}

var G__14524 = args14522.length;
switch (G__14524) {
case 0:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14522.length)].join('')));

}
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1("Unsupported operation");
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.xerror.core.unsupported_BANG_.cljs$lang$maxFixedArity = 1;

