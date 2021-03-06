// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_reload.display');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.connection');
goog.require('goog.dom');
goog.require('goog.Timer');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('clojure.string');
adzerk.boot_reload.display.transition_duration = (250);
adzerk.boot_reload.display.cljs_logo = "<svg width='40px' height='40px' viewBox='0 0 438 438' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n    <!-- Generator: Sketch 3.3.3 (12072) - http://www.bohemiancoding.com/sketch -->\n    <circle fill='#FFFFFF' cx='219' cy='219' r='219'></circle>\n    <g transform='translate(20.000000, 21.000000)'>\n        <g transform='translate(69.000000, 131.000000)'>\n            <path fill='#96CA4B' d='M39,119.6 C26.3,119.6 16.7,115.9 10.1,108.5 C3.5,101.1 0.2,90.5 0.2,76.7 C0.2,62.6 3.6,51.8 10.5,44.2 C17.4,36.6 27.3,32.8 40.4,32.8 C49.2,32.8 57.2,34.4 64.2,37.7 L58.8,52 C51.3,49.1 45.1,47.6 40.2,47.6 C25.7,47.6 18.5,57.2 18.5,76.4 C18.5,85.8 20.3,92.8 23.9,97.6 C27.5,102.3 32.8,104.7 39.8,104.7 C47.7,104.7 55.2,102.7 62.3,98.8 L62.3,114.3 C59.1,116.2 55.7,117.5 52.1,118.3 C48.5,119.2 44.1,119.6 39,119.6 L39,119.6 Z'></path>\n            <path fill='#96CA4B' d='M111.4,118.1 L93.6,118.1 L93.6,0.3 L111.4,0.3 L111.4,118.1 L111.4,118.1 Z'></path>\n            <path fill='#5F7FBF' d='M139.9,155.3 C134.6,155.3 130.1,154.7 126.6,153.4 L126.6,139.3 C130,140.2 133.5,140.7 137.1,140.7 C144.7,140.7 148.5,136.4 148.5,127.8 L148.5,34.3 L166.3,34.3 L166.3,129 C166.3,137.6 164,144.2 159.5,148.6 C154.9,153.1 148.4,155.3 139.9,155.3 L139.9,155.3 Z M147.4,12.2 C147.4,9 148.3,6.6 150,4.9 C151.7,3.2 154.2,2.3 157.5,2.3 C160.6,2.3 163.1,3.2 164.8,4.9 C166.5,6.6 167.4,9.1 167.4,12.2 C167.4,15.2 166.5,17.6 164.8,19.4 C163.1,21.1 160.6,22 157.5,22 C154.3,22 151.8,21.1 150,19.4 C148.2,17.6 147.4,15.2 147.4,12.2 L147.4,12.2 Z'></path>\n            <path fill='#5F7FBF' d='M259.5,94.3 C259.5,102.5 256.5,108.7 250.6,113.1 C244.6,117.5 236.1,119.6 225,119.6 C213.8,119.6 204.9,117.9 198.1,114.5 L198.1,99.1 C207.9,103.6 217.1,105.9 225.6,105.9 C236.5,105.9 242,102.6 242,96 C242,93.9 241.4,92.1 240.2,90.7 C239,89.3 237,87.8 234.2,86.3 C231.4,84.8 227.6,83.1 222.6,81.2 C213,77.5 206.4,73.7 203,70 C199.6,66.3 197.9,61.4 197.9,55.5 C197.9,48.3 200.8,42.8 206.6,38.8 C212.4,34.8 220.2,32.9 230.2,32.9 C240,32.9 249.3,34.9 258.1,38.9 L252.3,52.3 C243.3,48.6 235.7,46.7 229.5,46.7 C220.1,46.7 215.4,49.4 215.4,54.7 C215.4,57.3 216.6,59.5 219.1,61.4 C221.5,63.2 226.9,65.7 235.1,68.9 C242,71.6 247,74 250.2,76.2 C253.3,78.4 255.6,81 257.2,83.9 C258.7,86.7 259.5,90.2 259.5,94.3 L259.5,94.3 Z'></path>\n        </g>\n        <path stroke='#96CA4B' stroke-width='6' fill='#96CA4B' d='M183,376.7 C91.8,368.6 20,291.7 20,198.4 C20,105.1 91.8,28.3 183,20.2 L183,0.1 C80.7,8.3 0,94.1 0,198.5 C0,302.9 80.7,388.7 183,396.9 L183,376.7 L183,376.7 Z'></path>\n        <path stroke='#5F7FBF' stroke-width='6' fill='#5F7FBF' d='M215,0.1 L215,20.2 C306.2,28.3 378,105.2 378,198.5 C378,291.8 306.2,368.7 215,376.8 L215,396.9 C317.3,388.7 398,302.9 398,198.5 C398,94.1 317.3,8.3 215,0.1 L215,0.1 Z'></path>\n    </g>\n  </svg>";
adzerk.boot_reload.display.__GT_css = (function adzerk$boot_reload$display$__GT_css(rules){
if(!(cljs.core.even_QMARK_(cljs.core.count(rules)))){
var G__17403_17408 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([rules], 0));
console.log(G__17403_17408);
} else {
}

if(cljs.core.even_QMARK_(cljs.core.count(rules))){
} else {
throw (new Error("Assert failed: (even? (count rules))"));
}

var rules__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rules);
var render_rule = ((function (rules__$1){
return (function (p__17404){
var vec__17405 = p__17404;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17405,(1),null);
return [cljs.core.str(cljs.core.name(attr)),cljs.core.str(":"),cljs.core.str(v),cljs.core.str(";")].join('');
});})(rules__$1))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(render_rule,rules__$1));
});
adzerk.boot_reload.display.mk_node = (function adzerk$boot_reload$display$mk_node(var_args){
var args17409 = [];
var len__8605__auto___17415 = arguments.length;
var i__8606__auto___17416 = (0);
while(true){
if((i__8606__auto___17416 < len__8605__auto___17415)){
args17409.push((arguments[i__8606__auto___17416]));

var G__17417 = (i__8606__auto___17416 + (1));
i__8606__auto___17416 = G__17417;
continue;
} else {
}
break;
}

var G__17411 = args17409.length;
switch (G__17411) {
case 1:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17409.length)].join('')));

}
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$1 = (function (type){
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(type,cljs.core.PersistentArrayMap.EMPTY,null);
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$2 = (function (type,attrs){
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(type,attrs,null);
});

adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3 = (function (type,attrs,content){
var G__17412 = cljs.core.name(type);
var G__17413 = cljs.core.clj__GT_js(cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$style,adzerk.boot_reload.display.__GT_css));
var G__17414 = cljs.core.clj__GT_js(content);
return goog.dom.createDom(G__17412,G__17413,G__17414);
});

adzerk.boot_reload.display.mk_node.cljs$lang$maxFixedArity = 3;

adzerk.boot_reload.display.style = (function adzerk$boot_reload$display$style(var_args){
var args__8612__auto__ = [];
var len__8605__auto___17420 = arguments.length;
var i__8606__auto___17421 = (0);
while(true){
if((i__8606__auto___17421 < len__8605__auto___17420)){
args__8612__auto__.push((arguments[i__8606__auto___17421]));

var G__17422 = (i__8606__auto___17421 + (1));
i__8606__auto___17421 = G__17422;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic = (function (types){
var s = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logo,cljs.core.cst$kw$bg_DASH_red,cljs.core.cst$kw$flex_DASH_c,cljs.core.cst$kw$bg_DASH_clear,cljs.core.cst$kw$mr10,cljs.core.cst$kw$flex,cljs.core.cst$kw$hide,cljs.core.cst$kw$bg_DASH_yellow,cljs.core.cst$kw$pad,cljs.core.cst$kw$container],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$width,"40px",cljs.core.cst$kw$height,"40px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$background_DASH_color,"rgba(255, 161, 161, 0.952941)",cljs.core.cst$kw$box_DASH_shadow,"rgb(170, 170, 170) 0px 0px 1px"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_DASH_webkit_DASH_box_DASH_align,"center",cljs.core.cst$kw$_DASH_webkit_DASH_align_DASH_items,"center",cljs.core.cst$kw$_DASH_ms_DASH_flex_DASH_align,"center",cljs.core.cst$kw$align_DASH_items,"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$background_DASH_color,"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$margin_DASH_right,"10px"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$display,"-webkit-box",cljs.core.cst$kw$display,"-webkit-flex",cljs.core.cst$kw$display,"-ms-flexbox",cljs.core.cst$kw$display,"flex"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$opacity,"0",cljs.core.cst$kw$bottom,"-100px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$background_DASH_color,"rgba(255, 220, 110, 0.952941)",cljs.core.cst$kw$box_DASH_shadow,"rgb(170, 170, 170) 0px 0px 1px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$padding,"12px"], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color,"black",cljs.core.cst$kw$max_DASH_height,"320px",cljs.core.cst$kw$overflow,"scroll",cljs.core.cst$kw$transition,[cljs.core.str(adzerk.boot_reload.display.transition_duration),cljs.core.str("ms")].join(''),cljs.core.cst$kw$font_DASH_family,"sans-serif",cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$left,"0px",cljs.core.cst$kw$right,"0px",cljs.core.cst$kw$bottom,"0px",cljs.core.cst$kw$z_DASH_index,"999999"], null)]);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(s,types))], null);
});

adzerk.boot_reload.display.style.cljs$lang$maxFixedArity = (0);

adzerk.boot_reload.display.style.cljs$lang$applyTo = (function (seq17419){
return adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17419));
});

adzerk.boot_reload.display.open_file = (function adzerk$boot_reload$display$open_file(data){
return adzerk.boot_reload.connection.send_message_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$open_DASH_file], null),cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null))], 0)));
});
adzerk.boot_reload.display.exception_node = (function adzerk$boot_reload$display$exception_node(p__17423){
var map__17430 = p__17423;
var map__17430__$1 = ((((!((map__17430 == null)))?((((map__17430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17430):map__17430);
var data = map__17430__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$message);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$line);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17430__$1,cljs.core.cst$kw$file);
var G__17432 = adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,null,message);
var G__17433_17436 = G__17432;
var G__17434_17437 = goog.events.EventType.CLICK;
var G__17435_17438 = ((function (G__17433_17436,G__17434_17437,G__17432,map__17430,map__17430__$1,data,message,line,file){
return (function (){
return adzerk.boot_reload.display.open_file(data);
});})(G__17433_17436,G__17434_17437,G__17432,map__17430,map__17430__$1,data,message,line,file))
;
goog.events.listen(G__17433_17436,G__17434_17437,G__17435_17438);

return G__17432;
});
adzerk.boot_reload.display.warning_node = (function adzerk$boot_reload$display$warning_node(p__17439){
var map__17446 = p__17439;
var map__17446__$1 = ((((!((map__17446 == null)))?((((map__17446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17446):map__17446);
var data = map__17446__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$message);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$line);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17446__$1,cljs.core.cst$kw$file);
var G__17448 = adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$span,adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mr10], 0)),message),adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$span,adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mr10], 0)),[cljs.core.str("at line "),cljs.core.str(line)].join('')),adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$span,adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$mr10], 0)),file)], null));
var G__17449_17452 = G__17448;
var G__17450_17453 = goog.events.EventType.CLICK;
var G__17451_17454 = ((function (G__17449_17452,G__17450_17453,G__17448,map__17446,map__17446__$1,data,message,line,file){
return (function (){
return adzerk.boot_reload.display.open_file(data);
});})(G__17449_17452,G__17450_17453,G__17448,map__17446,map__17446__$1,data,message,line,file))
;
goog.events.listen(G__17449_17452,G__17450_17453,G__17451_17454);

return G__17448;
});
adzerk.boot_reload.display.reloaded_node = (function adzerk$boot_reload$display$reloaded_node(){
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,null,null);
});
adzerk.boot_reload.display.logo_node = (function adzerk$boot_reload$display$logo_node(logo){
var element = document.createElement("div");
element.innerHTML = logo;

return (element.childNodes[(0)]);
});
adzerk.boot_reload.display.warnings_node = (function adzerk$boot_reload$display$warnings_node(warnings){
return adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.display.warning_node,warnings));
});
adzerk.boot_reload.display.construct_hud_node = (function adzerk$boot_reload$display$construct_hud_node(p__17455){
var map__17463 = p__17455;
var map__17463__$1 = ((((!((map__17463 == null)))?((((map__17463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17463):map__17463);
var messages = map__17463__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$warnings);
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17463__$1,cljs.core.cst$kw$exception);
var G__17465 = adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$div,adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$pad,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_c,(cljs.core.truth_(exception)?cljs.core.cst$kw$bg_DASH_red:((cljs.core.seq(warnings))?cljs.core.cst$kw$bg_DASH_yellow:cljs.core.cst$kw$bg_DASH_clear
))], 0)));
var G__17466_17470 = G__17465;
var G__17467_17471 = adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$logo,cljs.core.cst$kw$mr10], 0)),adzerk.boot_reload.display.logo_node(adzerk.boot_reload.display.cljs_logo));
goog.dom.append(G__17466_17470,G__17467_17471);

var G__17468_17472 = G__17465;
var G__17469_17473 = (cljs.core.truth_(exception)?adzerk.boot_reload.display.exception_node(exception):((cljs.core.seq(warnings))?adzerk.boot_reload.display.warnings_node(warnings):adzerk.boot_reload.display.reloaded_node()
));
goog.dom.append(G__17468_17472,G__17469_17473);

return G__17465;
});
adzerk.boot_reload.display.remove_container_BANG_ = (function adzerk$boot_reload$display$remove_container_BANG_(id){
var el = goog.dom.getElement(id);
var G__17478_17482 = el;
var G__17479_17483 = cljs.core.clj__GT_js(cljs.core.update.cljs$core$IFn$_invoke$arity$3(adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$container,cljs.core.cst$kw$hide], 0)),cljs.core.cst$kw$style,adzerk.boot_reload.display.__GT_css));
goog.dom.setProperties(G__17478_17482,G__17479_17483);

var G__17480 = ((function (el){
return (function (){
return goog.dom.removeNode(el);
});})(el))
;
var G__17481 = adzerk.boot_reload.display.transition_duration;
return goog.Timer.callOnce(G__17480,G__17481);
});
adzerk.boot_reload.display.insert_container_BANG_ = (function adzerk$boot_reload$display$insert_container_BANG_(id,p__17484){
var map__17493 = p__17484;
var map__17493__$1 = ((((!((map__17493 == null)))?((((map__17493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17493):map__17493);
var messages = map__17493__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17493__$1,cljs.core.cst$kw$warnings);
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17493__$1,cljs.core.cst$kw$exception);
var hud = adzerk.boot_reload.display.construct_hud_node(messages);
var el = adzerk.boot_reload.display.mk_node.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$container,cljs.core.cst$kw$hide], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], 0)),hud);
var show_BANG_ = ((function (hud,el,map__17493,map__17493__$1,messages,warnings,exception){
return (function (){
var G__17495 = el;
var G__17496 = cljs.core.clj__GT_js(cljs.core.update.cljs$core$IFn$_invoke$arity$3(adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$container], 0)),cljs.core.cst$kw$style,adzerk.boot_reload.display.__GT_css));
return goog.dom.setProperties(G__17495,G__17496);
});})(hud,el,map__17493,map__17493__$1,messages,warnings,exception))
;
var no_prob_QMARK_ = (cljs.core.not(exception)) && (cljs.core.not(cljs.core.seq(warnings)));
var hide_BANG_ = ((function (hud,el,show_BANG_,no_prob_QMARK_,map__17493,map__17493__$1,messages,warnings,exception){
return (function (){
var G__17497 = el;
var G__17498 = cljs.core.clj__GT_js(cljs.core.update.cljs$core$IFn$_invoke$arity$3(adzerk.boot_reload.display.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$container,cljs.core.cst$kw$hide], 0)),cljs.core.cst$kw$style,adzerk.boot_reload.display.__GT_css));
return goog.dom.setProperties(G__17497,G__17498);
});})(hud,el,show_BANG_,no_prob_QMARK_,map__17493,map__17493__$1,messages,warnings,exception))
;
goog.dom.appendChild(document.body,el);

goog.Timer.callOnce(show_BANG_,adzerk.boot_reload.display.transition_duration);

if(no_prob_QMARK_){
var G__17499 = hide_BANG_;
var G__17500 = (adzerk.boot_reload.display.transition_duration * (5));
return goog.Timer.callOnce(G__17499,G__17500);
} else {
return null;
}
});
adzerk.boot_reload.display.gen_id = (function adzerk$boot_reload$display$gen_id(){
return [cljs.core.str("boot-reload-hud-"),cljs.core.str(cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()))].join('');
});
if(typeof adzerk.boot_reload.display.current_container !== 'undefined'){
} else {
adzerk.boot_reload.display.current_container = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
adzerk.boot_reload.display.display = (function adzerk$boot_reload$display$display(messages,opts){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(adzerk.boot_reload.display.current_container,(function (container){
if(cljs.core.truth_(container)){
try{adzerk.boot_reload.display.remove_container_BANG_(container);
}catch (e17502){if((e17502 instanceof Error)){
var __17503 = e17502;
} else {
throw e17502;

}
}} else {
}

var id = adzerk.boot_reload.display.gen_id();
adzerk.boot_reload.display.insert_container_BANG_(id,messages);

return id;
}));
});
