// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('thi.ng.domus.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.style');
goog.require('thi.ng.domus.utils');
goog.require('clojure.string');
thi.ng.domus.core.svg_ns = "http://www.w3.org/2000/svg";
thi.ng.domus.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
thi.ng.domus.core.svg_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 77, ["stop",null,"hkern",null,"glyphRef",null,"feDistantLight",null,"animateMotion",null,"radialGradient",null,"feSpotLight",null,"feFuncA",null,"foreignObject",null,"image",null,"feTurbulence",null,"linearGradient",null,"feSpecularLighting",null,"feBlend",null,"feFuncG",null,"missing-glyph",null,"feImage",null,"font-face-src",null,"feColorMatrix",null,"path",null,"svg",null,"font-face-uri",null,"fePointLight",null,"feConvolveMatrix",null,"font-face-format",null,"font-face-name",null,"altGlyphDef",null,"tref",null,"font-face",null,"feFuncR",null,"animate",null,"animateTransform",null,"feDiffuseLighting",null,"ellipse",null,"feOffset",null,"switch",null,"text",null,"feFlood",null,"cursor",null,"animateColor",null,"desc",null,"tspan",null,"feFuncB",null,"filter",null,"symbol",null,"color-profile",null,"altGlyph",null,"metadata",null,"font",null,"mpath",null,"feComponentTransfer",null,"feMerge",null,"line",null,"title",null,"polygon",null,"pattern",null,"textPath",null,"polyline",null,"g",null,"altGlyphItem",null,"set",null,"clipPath",null,"rect",null,"feDisplacementMap",null,"defs",null,"marker",null,"feMorphology",null,"glyph",null,"circle",null,"use",null,"view",null,"feGaussianBlur",null,"mask",null,"feMergeNode",null,"feTile",null,"feComposite",null,"vkern",null], null), null);
thi.ng.domus.core.by_id = (function thi$ng$domus$core$by_id(id){
return document.getElementById(id);
});
thi.ng.domus.core.query = (function thi$ng$domus$core$query(e,q){
return (function (){var or__7389__auto__ = e;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return document;
}
})().querySelector(q);
});
thi.ng.domus.core.query_all = (function thi$ng$domus$core$query_all(e,q){
return (function (){var or__7389__auto__ = e;
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return document;
}
})().querySelectorAll(q);
});
thi.ng.domus.core.match_media = (function thi$ng$domus$core$match_media(q){
return window.matchMedia(q).matches;
});
thi.ng.domus.core.parent = (function thi$ng$domus$core$parent(el){
return el.parentElement;
});
thi.ng.domus.core.update_listeners_STAR_ = (function thi$ng$domus$core$update_listeners_STAR_(update_BANG_,specs){
var specs_21733__$1 = specs;
while(true){
if(cljs.core.truth_(specs_21733__$1)){
var vec__21726_21734 = cljs.core.first(specs_21733__$1);
var el_21735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726_21734,(0),null);
var eid_21736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726_21734,(1),null);
var f_21737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726_21734,(2),null);
var cap_QMARK__21738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726_21734,(3),null);
var el_21739__$1 = ((typeof el_21735 === 'string')?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$window",el_21735))?window:thi.ng.domus.core.query(null,el_21735)):el_21735);
if(cljs.core.truth_(el_21739__$1)){
var G__21729_21740 = el_21739__$1;
var G__21730_21741 = cljs.core.name(eid_21736);
var G__21731_21742 = f_21737;
var G__21732_21743 = cap_QMARK__21738;
(update_BANG_.cljs$core$IFn$_invoke$arity$4 ? update_BANG_.cljs$core$IFn$_invoke$arity$4(G__21729_21740,G__21730_21741,G__21731_21742,G__21732_21743) : update_BANG_.call(null,G__21729_21740,G__21730_21741,G__21731_21742,G__21732_21743));
} else {
}

var G__21744 = cljs.core.next(specs_21733__$1);
specs_21733__$1 = G__21744;
continue;
} else {
}
break;
}

return specs;
});
thi.ng.domus.core.add_listeners = (function thi$ng$domus$core$add_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_((function (el,eid,f,cap_QMARK_){
return el.addEventListener(eid,f,cap_QMARK_);
}),specs);
});
thi.ng.domus.core.remove_listeners = (function thi$ng$domus$core$remove_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_((function (el,eid,f,_){
return el.removeEventListener(eid,f);
}),specs);
});
thi.ng.domus.core.wheel_event_type = (function thi$ng$domus$core$wheel_event_type(){
if(cljs.core.truth_(goog.isDef(window.onwheel))){
return "wheel";
} else {
return "mousewheel";
}
});
thi.ng.domus.core.set_html_BANG_ = (function thi$ng$domus$core$set_html_BANG_(el,s){
el.innerHTML = s;

return el;
});
thi.ng.domus.core.set_text_BANG_ = (function thi$ng$domus$core$set_text_BANG_(el,s){
goog.dom.setTextContent(el,s);

return el;
});
thi.ng.domus.core.clear_BANG_ = (function thi$ng$domus$core$clear_BANG_(el){
return thi.ng.domus.core.set_html_BANG_(el,"");
});
thi.ng.domus.core.set_class_BANG_ = (function thi$ng$domus$core$set_class_BANG_(el,name){
goog.dom.classes.set(el,name);

return el;
});
thi.ng.domus.core.add_class_BANG_ = (function thi$ng$domus$core$add_class_BANG_(el,name){
if(typeof name === 'string'){
goog.dom.classes.add(el,name);
} else {
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21745_SHARP_){
return goog.dom.classes.add(el,p1__21745_SHARP_);
}),name));
}

return el;
});
thi.ng.domus.core.remove_class_BANG_ = (function thi$ng$domus$core$remove_class_BANG_(el,name){
goog.dom.classes.remove(el,name);

return el;
});
thi.ng.domus.core.set_style_BANG_ = (function thi$ng$domus$core$set_style_BANG_(el,opts){
var G__21748_21750 = el;
var G__21749_21751 = cljs.core.clj__GT_js(opts);
goog.style.setStyle(G__21748_21750,G__21749_21751);

return el;
});
thi.ng.domus.core.get_style = (function thi$ng$domus$core$get_style(el,prop){
var G__21754 = el;
var G__21755 = cljs.core.name(prop);
return goog.style.getStyle(G__21754,G__21755);
});
thi.ng.domus.core.get_attrib = (function thi$ng$domus$core$get_attrib(el,attr){
return el.getAttribute(attr);
});
thi.ng.domus.core.get_attribs = (function thi$ng$domus$core$get_attribs(el,attrs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21756_SHARP_){
return el.getAttribute(p1__21756_SHARP_);
}),attrs);
});
thi.ng.domus.core.set_attribs_BANG_ = (function thi$ng$domus$core$set_attribs_BANG_(el,attribs){
if(cljs.core.truth_(el)){
var attribs_21778__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_21778__$1)){
var vec__21768_21779 = cljs.core.first(attribs_21778__$1);
var k_21780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21768_21779,(0),null);
var v_21781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21768_21779,(1),null);
if(cljs.core.truth_(v_21781)){
var pred__21771_21782 = cljs.core._EQ_;
var expr__21772_21783 = k_21780;
if(cljs.core.truth_((function (){var G__21774 = cljs.core.cst$kw$style;
var G__21775 = expr__21772_21783;
return (pred__21771_21782.cljs$core$IFn$_invoke$arity$2 ? pred__21771_21782.cljs$core$IFn$_invoke$arity$2(G__21774,G__21775) : pred__21771_21782.call(null,G__21774,G__21775));
})())){
thi.ng.domus.core.set_style_BANG_(el,v_21781);
} else {
if(cljs.core.truth_((function (){var G__21776 = cljs.core.cst$kw$events;
var G__21777 = expr__21772_21783;
return (pred__21771_21782.cljs$core$IFn$_invoke$arity$2 ? pred__21771_21782.cljs$core$IFn$_invoke$arity$2(G__21776,G__21777) : pred__21771_21782.call(null,G__21776,G__21777));
})())){
thi.ng.domus.core.add_listeners(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attribs_21778__$1,pred__21771_21782,expr__21772_21783,vec__21768_21779,k_21780,v_21781){
return (function (p1__21757_SHARP_){
return cljs.core.vec(cljs.core.cons(el,p1__21757_SHARP_));
});})(attribs_21778__$1,pred__21771_21782,expr__21772_21783,vec__21768_21779,k_21780,v_21781))
,v_21781));
} else {
el.setAttribute(cljs.core.name(k_21780),v_21781);
}
}
} else {
}

var G__21784 = cljs.core.next(attribs_21778__$1);
attribs_21778__$1 = G__21784;
continue;
} else {
}
break;
}
} else {
}

return el;
});
thi.ng.domus.core.remove_attribs_BANG_ = (function thi$ng$domus$core$remove_attribs_BANG_(el,attribs){
if(cljs.core.truth_(el)){
var attribs_21785__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_21785__$1)){
el.removeAttribute(cljs.core.name(cljs.core.first(attribs_21785__$1)));

var G__21786 = cljs.core.next(attribs_21785__$1);
attribs_21785__$1 = G__21786;
continue;
} else {
}
break;
}
} else {
}

return el;
});
thi.ng.domus.core.show_BANG_ = (function thi$ng$domus$core$show_BANG_(el){
goog.style.setStyle(el,"display","block");

return el;
});
thi.ng.domus.core.hide_BANG_ = (function thi$ng$domus$core$hide_BANG_(el){
goog.style.setStyle(el,"display","none");

return el;
});
thi.ng.domus.core.offset = (function thi$ng$domus$core$offset(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
thi.ng.domus.core.size = (function thi$ng$domus$core$size(el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el.clientWidth,el.clientHeight], null);
});
thi.ng.domus.core.force_redraw_BANG_ = (function thi$ng$domus$core$force_redraw_BANG_(el){
return thi.ng.domus.core.show_BANG_(thi.ng.domus.core.hide_BANG_(el));
});
thi.ng.domus.core.__GT_px = (function thi$ng$domus$core$__GT_px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
thi.ng.domus.core.create_BANG_ = (function thi$ng$domus$core$create_BANG_(var_args){
var args21787 = [];
var len__8605__auto___21790 = arguments.length;
var i__8606__auto___21791 = (0);
while(true){
if((i__8606__auto___21791 < len__8605__auto___21790)){
args21787.push((arguments[i__8606__auto___21791]));

var G__21792 = (i__8606__auto___21791 + (1));
i__8606__auto___21791 = G__21792;
continue;
} else {
}
break;
}

var G__21789 = args21787.length;
switch (G__21789) {
case 1:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21787.length)].join('')));

}
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3(type,null,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,parent){
return thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3(type,parent,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (type,parent,attribs){
var el = (cljs.core.truth_((thi.ng.domus.core.svg_tags.cljs$core$IFn$_invoke$arity$1 ? thi.ng.domus.core.svg_tags.cljs$core$IFn$_invoke$arity$1(type) : thi.ng.domus.core.svg_tags.call(null,type)))?document.createElementNS(thi.ng.domus.core.svg_ns,type):document.createElement(type));
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_(el,attribs);
} else {
}

return el;
});

thi.ng.domus.core.create_BANG_.cljs$lang$maxFixedArity = 3;

thi.ng.domus.core.create_ns_BANG_ = (function thi$ng$domus$core$create_ns_BANG_(var_args){
var args21794 = [];
var len__8605__auto___21797 = arguments.length;
var i__8606__auto___21798 = (0);
while(true){
if((i__8606__auto___21798 < len__8605__auto___21797)){
args21794.push((arguments[i__8606__auto___21798]));

var G__21799 = (i__8606__auto___21798 + (1));
i__8606__auto___21798 = G__21799;
continue;
} else {
}
break;
}

var G__21796 = args21794.length;
switch (G__21796) {
case 3:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21794.length)].join('')));

}
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ns,type,parent){
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4(ns,type,parent,null);
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (ns,type,parent,attribs){
var el = document.createElementNS(ns,type);
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_(el,attribs);
} else {
}

return el;
});

thi.ng.domus.core.create_ns_BANG_.cljs$lang$maxFixedArity = 4;

thi.ng.domus.core.create_text_BANG_ = (function thi$ng$domus$core$create_text_BANG_(txt,parent){
var el = document.createTextNode(txt);
parent.appendChild(el);

return el;
});
thi.ng.domus.core.remove_BANG_ = (function thi$ng$domus$core$remove_BANG_(el){
return el.parentElement.removeChild(el);
});
thi.ng.domus.core.append_BANG_ = (function thi$ng$domus$core$append_BANG_(parent,el){
return parent.appendChild(el);
});
thi.ng.domus.core.insert_BANG_ = (function thi$ng$domus$core$insert_BANG_(el,parent){
parent.insertBefore(el,parent.firstChild);

return el;
});
thi.ng.domus.core.normalize_element = (function thi$ng$domus$core$normalize_element(p__21801){
var vec__21808 = p__21801;
var seq__21809 = cljs.core.seq(vec__21808);
var first__21810 = cljs.core.first(seq__21809);
var seq__21809__$1 = cljs.core.next(seq__21809);
var tag = first__21810;
var content = seq__21809__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else {
}

var vec__21811 = cljs.core.re_matches(thi.ng.domus.core.re_tag,thi.ng.domus.utils.as_str(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21811,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$class,(cljs.core.truth_(class$)?clojure.string.replace(class$,"."," "):null)], null);
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
thi.ng.domus.core.create_dom_BANG_ = (function thi$ng$domus$core$create_dom_BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___21824 = arguments.length;
var i__8606__auto___21825 = (0);
while(true){
if((i__8606__auto___21825 < len__8605__auto___21824)){
args__8612__auto__.push((arguments[i__8606__auto___21825]));

var G__21826 = (i__8606__auto___21825 + (1));
i__8606__auto___21825 = G__21826;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (x,parent,p__21818){
var map__21819 = p__21818;
var map__21819__$1 = ((((!((map__21819 == null)))?((((map__21819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21819):map__21819);
var escape_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21819__$1,cljs.core.cst$kw$escape_QMARK_);
if(cljs.core.vector_QMARK_(x)){
var vec__21821 = thi.ng.domus.core.normalize_element(x);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(2),null);
var el = thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3(tag,parent,attrs);
if(cljs.core.truth_(content)){
thi.ng.domus.core.create_dom_BANG_(content,el);
} else {
}

return el;
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21819,map__21819__$1,escape_QMARK_){
return (function (p1__21814_SHARP_){
return thi.ng.domus.core.create_dom_BANG_(p1__21814_SHARP_,parent);
});})(map__21819,map__21819__$1,escape_QMARK_))
,x));
} else {
if((x == null)){
return parent;
} else {
return thi.ng.domus.core.create_text_BANG_(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,escape_QMARK_)))?thi.ng.domus.utils.escape_html(x):x),parent);

}
}
}
});

thi.ng.domus.core.create_dom_BANG_.cljs$lang$maxFixedArity = (2);

thi.ng.domus.core.create_dom_BANG_.cljs$lang$applyTo = (function (seq21815){
var G__21816 = cljs.core.first(seq21815);
var seq21815__$1 = cljs.core.next(seq21815);
var G__21817 = cljs.core.first(seq21815__$1);
var seq21815__$2 = cljs.core.next(seq21815__$1);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21816,G__21817,seq21815__$2);
});

thi.ng.domus.core.request_fullscreen = (function thi$ng$domus$core$request_fullscreen(){
var doc = document.documentElement;
if(cljs.core.truth_(doc.requestFullscreen)){
return doc.requestFullscreen();
} else {
if(cljs.core.truth_(doc.mozRequestFullScreen)){
return doc.mozRequestFullScreen();
} else {
if(cljs.core.truth_(doc.webkitRequestFullscreen)){
return doc.webkitRequestFullscreen();
} else {
if(cljs.core.truth_(doc.msRequestFullscreen)){
return doc.msRequestFullscreen();
} else {
return null;

}
}
}
}
});
