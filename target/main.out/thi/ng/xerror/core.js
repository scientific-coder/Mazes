// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.xerror.core');
goog.require('cljs.core');
thi.ng.xerror.core.throw_BANG_ = (function thi$ng$xerror$core$throw_BANG_(msg){
throw (new Error(msg));
});
thi.ng.xerror.core.key_error_BANG_ = (function thi$ng$xerror$core$key_error_BANG_(k){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.xerror.core.type_error_BANG_ = (function thi$ng$xerror$core$type_error_BANG_(t,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Can't cast to "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''));
});
thi.ng.xerror.core.arity_error_BANG_ = (function thi$ng$xerror$core$arity_error_BANG_(n){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.xerror.core.illegal_arg_BANG_ = (function thi$ng$xerror$core$illegal_arg_BANG_(var_args){
var args9621 = [];
var len__8605__auto___9624 = arguments.length;
var i__8606__auto___9625 = (0);
while(true){
if((i__8606__auto___9625 < len__8605__auto___9624)){
args9621.push((arguments[i__8606__auto___9625]));

var G__9626 = (i__8606__auto___9625 + (1));
i__8606__auto___9625 = G__9626;
continue;
} else {
}
break;
}

var G__9623 = args9621.length;
switch (G__9623) {
case 1:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9621.length)].join('')));

}
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return thi.ng.xerror.core.illegal_arg_BANG_.call(null,"Illegal argument",x);
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (msg,x){
return thi.ng.xerror.core.throw_BANG_.call(null,[cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});

thi.ng.xerror.core.illegal_arg_BANG_.cljs$lang$maxFixedArity = 2;

thi.ng.xerror.core.unsupported_BANG_ = (function thi$ng$xerror$core$unsupported_BANG_(var_args){
var args9628 = [];
var len__8605__auto___9631 = arguments.length;
var i__8606__auto___9632 = (0);
while(true){
if((i__8606__auto___9632 < len__8605__auto___9631)){
args9628.push((arguments[i__8606__auto___9632]));

var G__9633 = (i__8606__auto___9632 + (1));
i__8606__auto___9632 = G__9633;
continue;
} else {
}
break;
}

var G__9630 = args9628.length;
switch (G__9630) {
case 0:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9628.length)].join('')));

}
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.xerror.core.unsupported_BANG_.call(null,"Unsupported operation");
});

thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (msg){
throw (new Error(msg));
});

thi.ng.xerror.core.unsupported_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=core.js.map