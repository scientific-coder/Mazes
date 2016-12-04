// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('my_mazes.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('kdtree');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.core');
goog.require('reagent.core');
goog.require('thi.ng.geom.vector');
goog.require('thi.ng.geom.svg.core');
goog.require('thi.ng.math.core');
goog.require('shodan.inspection');
cljs.core.enable_console_print_BANG_();
my_mazes.core.abs = (function my_mazes$core$abs(n){
if(((0) <= n)){
return n;
} else {
return (- n);
}
});
my_mazes.core.sqrt = (function my_mazes$core$sqrt(x){
return Math.sqrt(x);
});
my_mazes.core.flip_2 = (function my_mazes$core$flip_2(f){
return (function (p1__21830_SHARP_,p2__21829_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__21829_SHARP_,p1__21830_SHARP_) : f.call(null,p2__21829_SHARP_,p1__21830_SHARP_));
});
});
my_mazes.core.rotate = my_mazes.core.flip_2(thi.ng.geom.core.rotate);
my_mazes.core.transform_polylines = (function my_mazes$core$transform_polylines(f,polys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,f),polys);
});
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count(xys)));
});
my_mazes.core.rotate_around = (function my_mazes$core$rotate_around(a,c,p){
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.rotate(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p,c),a),c);
});
my_mazes.core.rotate_centered = (function my_mazes$core$rotate_centered(a,xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.rotate_around,a,my_mazes.core.barycenter(cljs.core.rest(xys))),xys);
});
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((n + (1)),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__21832,r){
var vec__21836 = p__21832;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21836,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21836,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__21836,x,y){
return (function (p1__21831_SHARP_){
return thi.ng.geom.core.scale(p1__21831_SHARP_,r);
});})(vec__21836,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon((4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__21850(s__21851){
return (new cljs.core.LazySeq(null,(function (){
var s__21851__$1 = s__21851;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__21851__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__21851__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__21850_$_iter__21852(s__21853){
return (new cljs.core.LazySeq(null,((function (s__21851__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__21853__$1 = s__21853;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__21853__$1);
if(temp__6753__auto____$1){
var s__21853__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21853__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__21853__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__21855 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__21854 = (0);
while(true){
if((i__21854 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__21854);
cljs.core.chunk_append(b__21855,(function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2));
})());

var G__21861 = (i__21854 + (1));
i__21854 = G__21861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21855),my_mazes$core$square_grid_$_iter__21850_$_iter__21852(cljs.core.chunk_rest(s__21853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21855),null);
}
} else {
var c = cljs.core.first(s__21853__$2);
return cljs.core.cons((function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2));
})(),my_mazes$core$square_grid_$_iter__21850_$_iter__21852(cljs.core.rest(s__21853__$2)));
}
} else {
return null;
}
break;
}
});})(s__21851__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__21851__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$square_grid_$_iter__21850(cljs.core.rest(s__21851__$1)));
} else {
var G__21862 = cljs.core.rest(s__21851__$1);
s__21851__$1 = G__21862;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8246__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
});
my_mazes.core.hexagon = (function my_mazes$core$hexagon(p__21864,r){
var vec__21868 = p__21864;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21868,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__21868,x,y){
return (function (p1__21863_SHARP_){
return thi.ng.geom.core.scale(p1__21863_SHARP_,r);
});})(vec__21868,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((6)));
});
my_mazes.core.hexagon_grid = (function my_mazes$core$hexagon_grid(n_rows,n_cols,cell_size){
var v0 = (function (){var G__21890 = (thi.ng.math.core.PI / (6));
var G__21891 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cell_size,0.0);
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__21890,G__21891) : my_mazes.core.rotate.call(null,G__21890,G__21891));
})();
var vec__21887 = v0;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21887,(1),null);
var d_odd = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x0,((2) * y0));
var d_even = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,cell_size);
var iter__8246__auto__ = ((function (v0,vec__21887,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__21892(s__21893){
return (new cljs.core.LazySeq(null,((function (v0,vec__21887,x0,y0,d_odd,d_even){
return (function (){
var s__21893__$1 = s__21893;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__21893__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__21893__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__21887,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__21892_$_iter__21894(s__21895){
return (new cljs.core.LazySeq(null,((function (s__21893__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__21887,x0,y0,d_odd,d_even){
return (function (){
var s__21895__$1 = s__21895;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__21895__$1);
if(temp__6753__auto____$1){
var s__21895__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21895__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__21895__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__21897 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__21896 = (0);
while(true){
if((i__21896 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__21896);
cljs.core.chunk_append(b__21897,(function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})());

var G__21903 = (i__21896 + (1));
i__21896 = G__21903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21897),my_mazes$core$hexagon_grid_$_iter__21892_$_iter__21894(cljs.core.chunk_rest(s__21895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21897),null);
}
} else {
var c = cljs.core.first(s__21895__$2);
return cljs.core.cons((function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})(),my_mazes$core$hexagon_grid_$_iter__21892_$_iter__21894(cljs.core.rest(s__21895__$2)));
}
} else {
return null;
}
break;
}
});})(s__21893__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__21887,x0,y0,d_odd,d_even))
,null,null));
});})(s__21893__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__21887,x0,y0,d_odd,d_even))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$hexagon_grid_$_iter__21892(cljs.core.rest(s__21893__$1)));
} else {
var G__21904 = cljs.core.rest(s__21893__$1);
s__21893__$1 = G__21904;
continue;
}
} else {
return null;
}
break;
}
});})(v0,vec__21887,x0,y0,d_odd,d_even))
,null,null));
});})(v0,vec__21887,x0,y0,d_odd,d_even))
;
return iter__8246__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
});
my_mazes.core.triangle = (function my_mazes$core$triangle(p__21906,r){
var vec__21910 = p__21906;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__21910,x,y){
return (function (p1__21905_SHARP_){
return thi.ng.geom.core.scale(p1__21905_SHARP_,r);
});})(vec__21910,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((3)));
});
my_mazes.core.triangle_grid = (function my_mazes$core$triangle_grid(n_rows,n_cols,cell_size){
var side = (((3) * cell_size) / my_mazes.core.sqrt((3)));
var c_i = ((side * my_mazes.core.sqrt((3))) / (6));
var h = ((side * my_mazes.core.sqrt((3))) * 0.5);
var iter__8246__auto__ = ((function (side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__21924(s__21925){
return (new cljs.core.LazySeq(null,((function (side,c_i,h){
return (function (){
var s__21925__$1 = s__21925;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__21925__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__21925__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__21924_$_iter__21926(s__21927){
return (new cljs.core.LazySeq(null,((function (s__21925__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function (){
var s__21927__$1 = s__21927;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__21927__$1);
if(temp__6753__auto____$1){
var s__21927__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21927__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__21927__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__21929 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__21928 = (0);
while(true){
if((i__21928 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__21928);
cljs.core.chunk_append(b__21929,(function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})());

var G__21935 = (i__21928 + (1));
i__21928 = G__21935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),my_mazes$core$triangle_grid_$_iter__21924_$_iter__21926(cljs.core.chunk_rest(s__21927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),null);
}
} else {
var c = cljs.core.first(s__21927__$2);
return cljs.core.cons((function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})(),my_mazes$core$triangle_grid_$_iter__21924_$_iter__21926(cljs.core.rest(s__21927__$2)));
}
} else {
return null;
}
break;
}
});})(s__21925__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
,null,null));
});})(s__21925__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$triangle_grid_$_iter__21924(cljs.core.rest(s__21925__$1)));
} else {
var G__21936 = cljs.core.rest(s__21925__$1);
s__21925__$1 = G__21936;
continue;
}
} else {
return null;
}
break;
}
});})(side,c_i,h))
,null,null));
});})(side,c_i,h))
;
return iter__8246__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21937_SHARP_){
return cljs.core.with_meta(my_mazes.core.barycenter(p1__21937_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.my_eps = 0.001;
my_mazes.core.rel_EQ_ = (function my_mazes$core$rel_EQ_(v0,v1){
var abs0 = my_mazes.core.abs(v0);
var abs1 = my_mazes.core.abs(v1);
var diff = my_mazes.core.abs((v1 - v0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,v1)){
return true;
} else {
if(((v0 === (0))) || ((v1 === (0)))){
return (diff < my_mazes.core.my_eps);
} else {
return ((diff / (abs0 + abs1)) < my_mazes.core.my_eps);

}
}
});
my_mazes.core.delta_EQ_ = (function my_mazes$core$delta_EQ_(p__21938,p__21939){
var vec__21946 = p__21938;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21946,(1),null);
var vec__21949 = p__21939;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21949,(1),null);
var and__7377__auto__ = my_mazes.core.rel_EQ_(x0,x1);
if(cljs.core.truth_(and__7377__auto__)){
return my_mazes.core.rel_EQ_(y0,y1);
} else {
return and__7377__auto__;
}
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter(seg);
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p__21957){
var vec__21958 = p__21957;
var id_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21958,(0),null);
var b_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21958,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_t,id);
if(and__7377__auto__){
return my_mazes.core.delta_EQ_(b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__21952_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta(p1__21952_SHARP_),cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(p1__21952_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__21961_SHARP_,p2__21962_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$borders],[p1__21961_SHARP_,p2__21962_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells(cells);
var indexed = cljs.core.zipmap(cljs.core.iterate(cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__21963_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p1__21963_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv(((function (cells,t,indexed,neighbors){
return (function (p1__21964_SHARP_,p2__21965_SHARP_,p3__21966_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21964_SHARP_,p2__21965_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p3__21966_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.matching_seg,t,p2__21965_SHARP_),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p3__21966_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs))){
var bias_s = (function (){var G__21984 = cljs.core.count(xs);
return (bias.cljs$core$IFn$_invoke$arity$1 ? bias.cljs$core$IFn$_invoke$arity$1(G__21984) : bias.call(null,G__21984));
})();
var vec__21981 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bias_s){
return (function (p__21985,p__21986){
var vec__21987 = p__21985;
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(3),null);
var last_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21987,(4),null);
var vec__21990 = p__21986;
var bias_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21990,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bias_non_nil,(bias_b - delta)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21981,(3),null);
var bias_rescaled = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(1.0 / cljs.core.peek(bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs_non_nil,cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (bias_s,vec__21981,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__21968_SHARP_,p2__21967_SHARP_){
if((p2__21967_SHARP_ > rnd)){
return p1__21968_SHARP_;
} else {
return null;
}
});})(bias_s,vec__21981,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__21994){
var vec__21998 = p__21994;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21998,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21998,(1),null);
return ((function (vec__21998,x,y){
return (function (p1__21993_SHARP_){
var delta = (1.0 / p1__21993_SHARP_);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__21993_SHARP_,cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,delta),delta));
});
;})(vec__21998,x,y))
});
my_mazes.core.alternate_bias = (function my_mazes$core$alternate_bias(f){
return (function (xy){
return (function (n){
var n_v0 = cljs.core.quot(n,(2));
var n_v1 = (n - n_v0);
var delta = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(xy) : f.call(null,xy));
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((delta / n_v0)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(((1.0 - delta) / n_v1)))));
});
});
});
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__22001){
var vec__22015 = p__22001;
var vec__22018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22018,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22018,(1),null);
var vec__22021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22015,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22021,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias(((function (w,vec__22015,vec__22018,x_min,y_min,vec__22021,x_max,y_max){
return (function (p__22024){
var vec__22025 = p__22024;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025,(1),null);
return (x / w);
});})(w,vec__22015,vec__22018,x_min,y_min,vec__22021,x_max,y_max))
);
});
my_mazes.core.make_vertical_bias = (function my_mazes$core$make_vertical_bias(p__22028){
var vec__22042 = p__22028;
var vec__22045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22045,(1),null);
var vec__22048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22042,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(1),null);
var h = (y_max - y_min);
return my_mazes.core.alternate_bias(((function (h,vec__22042,vec__22045,x_min,y_min,vec__22048,x_max,y_max){
return (function (p__22051){
var vec__22052 = p__22051;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,(1),null);
return (y / h);
});})(h,vec__22042,vec__22045,x_min,y_min,vec__22048,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__22055){
var vec__22069 = p__22055;
var vec__22072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22072,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22072,(1),null);
var vec__22075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22075,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22075,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias(((function (y_T,x_d,x_center,vec__22069,vec__22072,x_min,y_min,vec__22075,x_max,y_max){
return (function (p__22078){
var vec__22079 = p__22078;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs((x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__22069,vec__22072,x_min,y_min,vec__22075,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(id_start,bias_f,indexed_cells){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__22097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__22098 = G__22097;
var to_visit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22098,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22098,(1),null);
var visited__$1 = visited;
var G__22097__$1 = G__22097;
while(true){
var visited__$2 = visited__$1;
var vec__22101 = G__22097__$1;
var to_visit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22101,(0),null);
var connections__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22101,(1),null);
if(cljs.core.empty_QMARK_(to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek(to_visit__$1);
var visiting_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop(to_visit__$1);
var visited__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil((function (){var G__22104 = my_mazes.core.barycenter(cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(visiting_cell));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__22104) : bias_f.call(null,G__22104));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (visited__$1,G__22097__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__22101,to_visit__$1,connections__$1,visited,G__22097,vec__22098,to_visit,connections){
return (function (p1__22082_SHARP_){
if(cljs.core.not((visited__$3.cljs$core$IFn$_invoke$arity$1 ? visited__$3.cljs$core$IFn$_invoke$arity$1(p1__22082_SHARP_) : visited__$3.call(null,p1__22082_SHARP_)))){
return p1__22082_SHARP_;
} else {
return null;
}
});})(visited__$1,G__22097__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__22101,to_visit__$1,connections__$1,visited,G__22097,vec__22098,to_visit,connections))
,cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__22105 = visited__$3;
var G__22106 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(to_visit__$2,visiting,cljs.core.array_seq([next_visit], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__22105;
G__22097__$1 = G__22106;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22111){
var map__22112 = p__22111;
var map__22112__$1 = ((((!((map__22112 == null)))?((((map__22112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22112):map__22112);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22112__$1,cljs.core.cst$kw$id);
var borders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22112__$1,cljs.core.cst$kw$borders);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22112__$1,cljs.core.cst$kw$neighbors);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__22112,map__22112__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not((function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
var G__22114 = cljs.core.PersistentHashSet.fromArray([n,id], true);
return (removed_walls.cljs$core$IFn$_invoke$arity$1 ? removed_walls.cljs$core$IFn$_invoke$arity$1(G__22114) : removed_walls.call(null,G__22114));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__22112,map__22112__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22129,p__22130){
var vec__22131 = p__22129;
var vec__22134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22131,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22134,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22134,(1),null);
var vec__22137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22131,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22137,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22137,(1),null);
var vec__22140 = p__22130;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22140,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var x__7729__auto__ = x_min;
var y__7730__auto__ = x;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})(),(function (){var x__7729__auto__ = y_min;
var y__7730__auto__ = y;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((function (){var x__7722__auto__ = x_max;
var y__7723__auto__ = x;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),(function (){var x__7722__auto__ = y_max;
var y__7723__auto__ = y;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})())], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_PLUS_),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.INF_,thi.ng.math.core.INF_)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,polylines));
});
my_mazes.core.draw_scene_BANG_ = (function my_mazes$core$draw_scene_BANG_(root,width,height,scene){
return thi.ng.domus.core.create_dom_BANG_(thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY),scene)], 0)),thi.ng.domus.core.clear_BANG_(root));
});
my_mazes.core.svg_polyline = (function my_mazes$core$svg_polyline(color,width,ps){
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$stroke_DASH_width,width], null),cljs.core.array_seq([thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1(ps)], 0));
});
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__22143,p__22144){
var vec__22151 = p__22143;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22151,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22151,(1),null);
var vec__22154 = p__22144;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22154,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22154,(1),null);
return ((x0 < x1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x0,x1)) && ((y0 < y1)));
});
my_mazes.core.order_seg = (function my_mazes$core$order_seg(xy0,xy1){
if(cljs.core.truth_(my_mazes.core.less_than_xy_QMARK_(xy0,xy1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy0,xy1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy1,xy0], null);
}
});
my_mazes.core.less_than_seg_QMARK_ = (function my_mazes$core$less_than_seg_QMARK_(s0,s1){
var vec__22163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22163,(0),null);
var xy0_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22163,(1),null);
var vec__22166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(0),null);
var xy1_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22166,(1),null);
return my_mazes.core.less_than_xy_QMARK_(my_mazes.core.barycenter(s0),my_mazes.core.barycenter(s1));
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq(vs)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22173,v){
var vec__22174 = p__22173;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22174,(0),null);
var v_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22174,(1),null);
if(cljs.core.truth_((lt.cljs$core$IFn$_invoke$arity$2 ? lt.cljs$core$IFn$_invoke$arity$2(v,v_min) : lt.call(null,v,v_min)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,v_min),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,v),v_min], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.first(vs)], null),cljs.core.rest(vs)));
} else {
return null;
}
});
if(typeof my_mazes.core.app_state !== 'undefined'){
} else {
my_mazes.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Similar to clojure.core/swap!, but records history and returns atom.
 */
my_mazes.core.swap_STAR__BANG_ = (function my_mazes$core$swap_STAR__BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___22180 = arguments.length;
var i__8606__auto___22181 = (0);
while(true){
if((i__8606__auto___22181 < len__8605__auto___22180)){
args__8612__auto__.push((arguments[i__8606__auto___22181]));

var G__22182 = (i__8606__auto___22181 + (1));
i__8606__auto___22181 = G__22182;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,(function (ref_val){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ref_val,args);
}));

return ref;
});

my_mazes.core.swap_STAR__BANG_.cljs$lang$maxFixedArity = (2);

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq22177){
var G__22178 = cljs.core.first(seq22177);
var seq22177__$1 = cljs.core.next(seq22177);
var G__22179 = cljs.core.first(seq22177__$1);
var seq22177__$2 = cljs.core.next(seq22177__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22178,G__22179,seq22177__$2);
});

my_mazes.core.update_maze_display_BANG_ = (function my_mazes$core$update_maze_display_BANG_(){
var map__22196 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22196__$1 = ((((!((map__22196 == null)))?((((map__22196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22196):map__22196);
var maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,cljs.core.cst$kw$maze);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,cljs.core.cst$kw$size);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22196__$1,cljs.core.cst$kw$line_DASH_width);
var zoomed_maze = my_mazes.core.transform_polylines(((function (map__22196,map__22196__$1,maze,size,line_width){
return (function (p1__22183_SHARP_){
return thi.ng.geom.core.scale(p1__22183_SHARP_,size);
});})(map__22196,map__22196__$1,maze,size,line_width))
,maze);
var scene_bb = my_mazes.core.bounding_box(zoomed_maze);
var vec__22197 = scene_bb;
var vec__22200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22197,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22200,(1),null);
var vec__22203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22197,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22203,(1),null);
var w = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((x_max - x_min) + line_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var h = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((y_max - y_min) + line_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var paint_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id("maze"),w,h);
var _ = my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$dummy,null], 0));
var G__22207 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.svg_polyline,"#00F",line_width),my_mazes.core.transform_polylines(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(my_mazes.core.barycenter(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)], null)),my_mazes.core.barycenter(scene_bb))),zoomed_maze));
return (paint_BANG_.cljs$core$IFn$_invoke$arity$1 ? paint_BANG_.cljs$core$IFn$_invoke$arity$1(G__22207) : paint_BANG_.call(null,G__22207));
});
my_mazes.core.compute_maze = (function my_mazes$core$compute_maze(indexed_cells,bias_f){
var cells = cljs.core.vals(indexed_cells);
var bias = (function (){var G__22209 = my_mazes.core.bounding_box(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$borders,cells));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__22209) : bias_f.call(null,G__22209));
})();
return my_mazes.core.remove_min(cljs.core.complement(my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min(my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines(cells,my_mazes.core.remove_walls((0),bias,indexed_cells))));
});
my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__22215 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22215__$1 = ((((!((map__22215 == null)))?((((map__22215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22215.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22215):map__22215);
var indexed_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215__$1,cljs.core.cst$kw$indexed_DASH_cells);
var bias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22215__$1,cljs.core.cst$kw$bias);
var bias_f = (function (){var pred__22217 = cljs.core._EQ_;
var expr__22218 = bias;
if(cljs.core.truth_((pred__22217.cljs$core$IFn$_invoke$arity$2 ? pred__22217.cljs$core$IFn$_invoke$arity$2("vertical",expr__22218) : pred__22217.call(null,"vertical",expr__22218)))){
return my_mazes.core.make_vertical_bias;
} else {
if(cljs.core.truth_((pred__22217.cljs$core$IFn$_invoke$arity$2 ? pred__22217.cljs$core$IFn$_invoke$arity$2("horizontal",expr__22218) : pred__22217.call(null,"horizontal",expr__22218)))){
return my_mazes.core.make_horizontal_bias;
} else {
if(cljs.core.truth_((pred__22217.cljs$core$IFn$_invoke$arity$2 ? pred__22217.cljs$core$IFn$_invoke$arity$2("T",expr__22218) : pred__22217.call(null,"T",expr__22218)))){
return my_mazes.core.make_T_bias;
} else {
return ((function (pred__22217,expr__22218,map__22215,map__22215__$1,indexed_cells,bias){
return (function (_){
return my_mazes.core.no_bias;
});
;})(pred__22217,expr__22218,map__22215,map__22215__$1,indexed_cells,bias))
}
}
}
})();
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$maze,my_mazes.core.compute_maze(indexed_cells,bias_f)], 0));

return my_mazes.core.update_maze_display_BANG_();
});
my_mazes.core.compute_cells = (function my_mazes$core$compute_cells(shape_f,rows,cols){
return my_mazes.core.scene__GT_graph((shape_f.cljs$core$IFn$_invoke$arity$3 ? shape_f.cljs$core$IFn$_invoke$arity$3(rows,cols,1.0) : shape_f.call(null,rows,cols,1.0)));
});
my_mazes.core.update_cells_BANG_ = (function my_mazes$core$update_cells_BANG_(){
var map__22225 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22225__$1 = ((((!((map__22225 == null)))?((((map__22225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22225):map__22225);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,cljs.core.cst$kw$shape);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22225__$1,cljs.core.cst$kw$cols);
var shape_f = (function (){var pred__22227 = cljs.core._EQ_;
var expr__22228 = shape;
if(cljs.core.truth_((pred__22227.cljs$core$IFn$_invoke$arity$2 ? pred__22227.cljs$core$IFn$_invoke$arity$2("hexagon",expr__22228) : pred__22227.call(null,"hexagon",expr__22228)))){
return my_mazes.core.hexagon_grid;
} else {
if(cljs.core.truth_((pred__22227.cljs$core$IFn$_invoke$arity$2 ? pred__22227.cljs$core$IFn$_invoke$arity$2("square",expr__22228) : pred__22227.call(null,"square",expr__22228)))){
return my_mazes.core.square_grid;
} else {
if(cljs.core.truth_((pred__22227.cljs$core$IFn$_invoke$arity$2 ? pred__22227.cljs$core$IFn$_invoke$arity$2("triangle",expr__22228) : pred__22227.call(null,"triangle",expr__22228)))){
return my_mazes.core.triangle_grid;
} else {
return my_mazes.core.square_grid;
}
}
}
})();
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$indexed_DASH_cells,my_mazes.core.compute_cells(shape_f,rows,cols)], 0));

return my_mazes.core.update_maze_BANG_();
});
my_mazes.core.callbacks = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cols,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$rows,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$size,my_mazes.core.update_maze_display_BANG_,cljs.core.cst$kw$line_DASH_width,my_mazes.core.update_maze_display_BANG_,cljs.core.cst$kw$shape,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$bias,my_mazes.core.update_maze_BANG_], null);
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("%")].join('')], null),cljs.core.cst$kw$on_DASH_change,(function (e){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,(e.target.value | (0))], 0));

return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(my_mazes.core.callbacks) : param.call(null,my_mazes.core.callbacks)).call(null);
})], null)], null);
});
my_mazes.core.menu = (function my_mazes$core$menu(id,param,values){
var current = (function (){var G__22238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__22238) : param.call(null,G__22238));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,current,cljs.core.cst$kw$name,current,cljs.core.cst$kw$value,current,cljs.core.cst$kw$on_DASH_change,((function (current){
return (function (p1__22230_SHARP_){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,p1__22230_SHARP_.target.value], 0));

return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(my_mazes.core.callbacks) : param.call(null,my_mazes.core.callbacks)).call(null);
});})(current))
], null),(function (){var iter__8246__auto__ = ((function (current){
return (function my_mazes$core$menu_$_iter__22239(s__22240){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__22240__$1 = s__22240;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22240__$1);
if(temp__6753__auto__){
var s__22240__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22240__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__22240__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__22242 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__22241 = (0);
while(true){
if((i__22241 < size__8245__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__22241);
cljs.core.chunk_append(b__22242,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)));

var G__22245 = (i__22241 + (1));
i__22241 = G__22245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22242),my_mazes$core$menu_$_iter__22239(cljs.core.chunk_rest(s__22240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22242),null);
}
} else {
var v = cljs.core.first(s__22240__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)),my_mazes$core$menu_$_iter__22239(cljs.core.rest(s__22240__$2)));
}
} else {
return null;
}
break;
}
});})(current))
,null,null));
});})(current))
;
return iter__8246__auto__(values);
})()], null);
});
/**
 * Application root component
 */
my_mazes.core.main_panel = (function my_mazes$core$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$cols,cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"cols: ",cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$rows,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"rows : ",cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(10),(100),(50)], null),"size : ",cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$line_DASH_width,cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(10),(20)], null),"line width : ",cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),my_mazes.core.menu("shape",cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["square","hexagon","triangle"], null)),my_mazes.core.menu("Bias",cljs.core.cst$kw$bias,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unbiased","vertical","horizontal","T"], null))], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$size,(32),cljs.core.cst$kw$line_DASH_width,(5),cljs.core.cst$kw$shape,"square",cljs.core.cst$kw$bias,"unbiased"], null)], 0));

return my_mazes.core.update_cells_BANG_();
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app();

var G__22248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null);
var G__22249 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__22248,G__22249) : reagent.core.render_component.call(null,G__22248,G__22249));
});
my_mazes.core.main();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main called"], 0));
