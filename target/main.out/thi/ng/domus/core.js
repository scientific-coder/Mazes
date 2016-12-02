// Compiled by ClojureScript 1.9.293 {}
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
var specs_16065__$1 = specs;
while(true){
if(cljs.core.truth_(specs_16065__$1)){
var vec__16062_16066 = cljs.core.first.call(null,specs_16065__$1);
var el_16067 = cljs.core.nth.call(null,vec__16062_16066,(0),null);
var eid_16068 = cljs.core.nth.call(null,vec__16062_16066,(1),null);
var f_16069 = cljs.core.nth.call(null,vec__16062_16066,(2),null);
var cap_QMARK__16070 = cljs.core.nth.call(null,vec__16062_16066,(3),null);
var el_16071__$1 = ((typeof el_16067 === 'string')?((cljs.core._EQ_.call(null,"$window",el_16067))?window:thi.ng.domus.core.query.call(null,null,el_16067)):el_16067);
if(cljs.core.truth_(el_16071__$1)){
update_BANG_.call(null,el_16071__$1,cljs.core.name.call(null,eid_16068),f_16069,cap_QMARK__16070);
} else {
}

var G__16072 = cljs.core.next.call(null,specs_16065__$1);
specs_16065__$1 = G__16072;
continue;
} else {
}
break;
}

return specs;
});
thi.ng.domus.core.add_listeners = (function thi$ng$domus$core$add_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_.call(null,(function (el,eid,f,cap_QMARK_){
return el.addEventListener(eid,f,cap_QMARK_);
}),specs);
});
thi.ng.domus.core.remove_listeners = (function thi$ng$domus$core$remove_listeners(specs){
return thi.ng.domus.core.update_listeners_STAR_.call(null,(function (el,eid,f,_){
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
return thi.ng.domus.core.set_html_BANG_.call(null,el,"");
});
thi.ng.domus.core.set_class_BANG_ = (function thi$ng$domus$core$set_class_BANG_(el,name){
goog.dom.classes.set(el,name);

return el;
});
thi.ng.domus.core.add_class_BANG_ = (function thi$ng$domus$core$add_class_BANG_(el,name){
if(typeof name === 'string'){
goog.dom.classes.add(el,name);
} else {
cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__16073_SHARP_){
return goog.dom.classes.add(el,p1__16073_SHARP_);
}),name));
}

return el;
});
thi.ng.domus.core.remove_class_BANG_ = (function thi$ng$domus$core$remove_class_BANG_(el,name){
goog.dom.classes.remove(el,name);

return el;
});
thi.ng.domus.core.set_style_BANG_ = (function thi$ng$domus$core$set_style_BANG_(el,opts){
goog.style.setStyle(el,cljs.core.clj__GT_js.call(null,opts));

return el;
});
thi.ng.domus.core.get_style = (function thi$ng$domus$core$get_style(el,prop){
return goog.style.getStyle(el,cljs.core.name.call(null,prop));
});
thi.ng.domus.core.get_attrib = (function thi$ng$domus$core$get_attrib(el,attr){
return el.getAttribute(attr);
});
thi.ng.domus.core.get_attribs = (function thi$ng$domus$core$get_attribs(el,attrs){
return cljs.core.mapv.call(null,(function (p1__16074_SHARP_){
return el.getAttribute(p1__16074_SHARP_);
}),attrs);
});
thi.ng.domus.core.set_attribs_BANG_ = (function thi$ng$domus$core$set_attribs_BANG_(el,attribs){
if(cljs.core.truth_(el)){
var attribs_16088__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_16088__$1)){
var vec__16082_16089 = cljs.core.first.call(null,attribs_16088__$1);
var k_16090 = cljs.core.nth.call(null,vec__16082_16089,(0),null);
var v_16091 = cljs.core.nth.call(null,vec__16082_16089,(1),null);
if(cljs.core.truth_(v_16091)){
var pred__16085_16092 = cljs.core._EQ_;
var expr__16086_16093 = k_16090;
if(cljs.core.truth_(pred__16085_16092.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__16086_16093))){
thi.ng.domus.core.set_style_BANG_.call(null,el,v_16091);
} else {
if(cljs.core.truth_(pred__16085_16092.call(null,new cljs.core.Keyword(null,"events","events",1792552201),expr__16086_16093))){
thi.ng.domus.core.add_listeners.call(null,cljs.core.map.call(null,((function (attribs_16088__$1,pred__16085_16092,expr__16086_16093,vec__16082_16089,k_16090,v_16091){
return (function (p1__16075_SHARP_){
return cljs.core.vec.call(null,cljs.core.cons.call(null,el,p1__16075_SHARP_));
});})(attribs_16088__$1,pred__16085_16092,expr__16086_16093,vec__16082_16089,k_16090,v_16091))
,v_16091));
} else {
el.setAttribute(cljs.core.name.call(null,k_16090),v_16091);
}
}
} else {
}

var G__16094 = cljs.core.next.call(null,attribs_16088__$1);
attribs_16088__$1 = G__16094;
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
var attribs_16095__$1 = attribs;
while(true){
if(cljs.core.truth_(attribs_16095__$1)){
el.removeAttribute(cljs.core.name.call(null,cljs.core.first.call(null,attribs_16095__$1)));

var G__16096 = cljs.core.next.call(null,attribs_16095__$1);
attribs_16095__$1 = G__16096;
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
return thi.ng.domus.core.show_BANG_.call(null,thi.ng.domus.core.hide_BANG_.call(null,el));
});
thi.ng.domus.core.__GT_px = (function thi$ng$domus$core$__GT_px(x){
return [cljs.core.str(x),cljs.core.str("px")].join('');
});
thi.ng.domus.core.create_BANG_ = (function thi$ng$domus$core$create_BANG_(var_args){
var args16097 = [];
var len__8605__auto___16100 = arguments.length;
var i__8606__auto___16101 = (0);
while(true){
if((i__8606__auto___16101 < len__8605__auto___16100)){
args16097.push((arguments[i__8606__auto___16101]));

var G__16102 = (i__8606__auto___16101 + (1));
i__8606__auto___16101 = G__16102;
continue;
} else {
}
break;
}

var G__16099 = args16097.length;
switch (G__16099) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16097.length)].join('')));

}
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return thi.ng.domus.core.create_BANG_.call(null,type,null,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,parent){
return thi.ng.domus.core.create_BANG_.call(null,type,parent,null);
});

thi.ng.domus.core.create_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (type,parent,attribs){
var el = (cljs.core.truth_(thi.ng.domus.core.svg_tags.call(null,type))?document.createElementNS(thi.ng.domus.core.svg_ns,type):document.createElement(type));
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_.call(null,el,attribs);
} else {
}

return el;
});

thi.ng.domus.core.create_BANG_.cljs$lang$maxFixedArity = 3;

thi.ng.domus.core.create_ns_BANG_ = (function thi$ng$domus$core$create_ns_BANG_(var_args){
var args16104 = [];
var len__8605__auto___16107 = arguments.length;
var i__8606__auto___16108 = (0);
while(true){
if((i__8606__auto___16108 < len__8605__auto___16107)){
args16104.push((arguments[i__8606__auto___16108]));

var G__16109 = (i__8606__auto___16108 + (1));
i__8606__auto___16108 = G__16109;
continue;
} else {
}
break;
}

var G__16106 = args16104.length;
switch (G__16106) {
case 3:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16104.length)].join('')));

}
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ns,type,parent){
return thi.ng.domus.core.create_ns_BANG_.call(null,ns,type,parent,null);
});

thi.ng.domus.core.create_ns_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (ns,type,parent,attribs){
var el = document.createElementNS(ns,type);
if(cljs.core.truth_(parent)){
parent.appendChild(el);
} else {
}

if(cljs.core.truth_(attribs)){
thi.ng.domus.core.set_attribs_BANG_.call(null,el,attribs);
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
thi.ng.domus.core.normalize_element = (function thi$ng$domus$core$normalize_element(p__16111){
var vec__16118 = p__16111;
var seq__16119 = cljs.core.seq.call(null,vec__16118);
var first__16120 = cljs.core.first.call(null,seq__16119);
var seq__16119__$1 = cljs.core.next.call(null,seq__16119);
var tag = first__16120;
var content = seq__16119__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name")].join('');
} else {
}

var vec__16121 = cljs.core.re_matches.call(null,thi.ng.domus.core.re_tag,thi.ng.domus.utils.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__16121,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__16121,(1),null);
var id = cljs.core.nth.call(null,vec__16121,(2),null);
var class$ = cljs.core.nth.call(null,vec__16121,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,"."," "):null)], null);
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
thi.ng.domus.core.create_dom_BANG_ = (function thi$ng$domus$core$create_dom_BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___16134 = arguments.length;
var i__8606__auto___16135 = (0);
while(true){
if((i__8606__auto___16135 < len__8605__auto___16134)){
args__8612__auto__.push((arguments[i__8606__auto___16135]));

var G__16136 = (i__8606__auto___16135 + (1));
i__8606__auto___16135 = G__16136;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (x,parent,p__16128){
var map__16129 = p__16128;
var map__16129__$1 = ((((!((map__16129 == null)))?((((map__16129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16129):map__16129);
var escape_QMARK_ = cljs.core.get.call(null,map__16129__$1,new cljs.core.Keyword(null,"escape?","escape?",-575595299));
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__16131 = thi.ng.domus.core.normalize_element.call(null,x);
var tag = cljs.core.nth.call(null,vec__16131,(0),null);
var attrs = cljs.core.nth.call(null,vec__16131,(1),null);
var content = cljs.core.nth.call(null,vec__16131,(2),null);
var el = thi.ng.domus.core.create_BANG_.call(null,tag,parent,attrs);
if(cljs.core.truth_(content)){
thi.ng.domus.core.create_dom_BANG_.call(null,content,el);
} else {
}

return el;
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__16129,map__16129__$1,escape_QMARK_){
return (function (p1__16124_SHARP_){
return thi.ng.domus.core.create_dom_BANG_.call(null,p1__16124_SHARP_,parent);
});})(map__16129,map__16129__$1,escape_QMARK_))
,x));
} else {
if((x == null)){
return parent;
} else {
return thi.ng.domus.core.create_text_BANG_.call(null,((!(cljs.core._EQ_.call(null,false,escape_QMARK_)))?thi.ng.domus.utils.escape_html.call(null,x):x),parent);

}
}
}
});

thi.ng.domus.core.create_dom_BANG_.cljs$lang$maxFixedArity = (2);

thi.ng.domus.core.create_dom_BANG_.cljs$lang$applyTo = (function (seq16125){
var G__16126 = cljs.core.first.call(null,seq16125);
var seq16125__$1 = cljs.core.next.call(null,seq16125);
var G__16127 = cljs.core.first.call(null,seq16125__$1);
var seq16125__$2 = cljs.core.next.call(null,seq16125__$1);
return thi.ng.domus.core.create_dom_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16126,G__16127,seq16125__$2);
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

//# sourceMappingURL=core.js.map