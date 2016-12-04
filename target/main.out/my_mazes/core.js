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
return (function (p1__22425_SHARP_,p2__22424_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__22424_SHARP_,p1__22425_SHARP_) : f.call(null,p2__22424_SHARP_,p1__22425_SHARP_));
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
my_mazes.core.square = (function my_mazes$core$square(p__22427,r){
var vec__22431 = p__22427;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22431,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22431,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__22431,x,y){
return (function (p1__22426_SHARP_){
return thi.ng.geom.core.scale(p1__22426_SHARP_,r);
});})(vec__22431,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon((4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__22445(s__22446){
return (new cljs.core.LazySeq(null,(function (){
var s__22446__$1 = s__22446;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22446__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__22446__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__22445_$_iter__22447(s__22448){
return (new cljs.core.LazySeq(null,((function (s__22446__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__22448__$1 = s__22448;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__22448__$1);
if(temp__6753__auto____$1){
var s__22448__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22448__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__22448__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__22450 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__22449 = (0);
while(true){
if((i__22449 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__22449);
cljs.core.chunk_append(b__22450,(function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null)),(cell_size / thi.ng.math.core.SQRT2));
})());

var G__22456 = (i__22449 + (1));
i__22449 = G__22456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22450),my_mazes$core$square_grid_$_iter__22445_$_iter__22447(cljs.core.chunk_rest(s__22448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22450),null);
}
} else {
var c = cljs.core.first(s__22448__$2);
return cljs.core.cons((function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null)),(cell_size / thi.ng.math.core.SQRT2));
})(),my_mazes$core$square_grid_$_iter__22445_$_iter__22447(cljs.core.rest(s__22448__$2)));
}
} else {
return null;
}
break;
}
});})(s__22446__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__22446__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$square_grid_$_iter__22445(cljs.core.rest(s__22446__$1)));
} else {
var G__22457 = cljs.core.rest(s__22446__$1);
s__22446__$1 = G__22457;
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
my_mazes.core.hexagon = (function my_mazes$core$hexagon(p__22459,r){
var vec__22463 = p__22459;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22463,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__22463,x,y){
return (function (p1__22458_SHARP_){
return thi.ng.geom.core.scale(p1__22458_SHARP_,r);
});})(vec__22463,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((6)));
});
my_mazes.core.hexagon_grid = (function my_mazes$core$hexagon_grid(n_rows,n_cols,cell_size){
var v0 = (function (){var G__22485 = (thi.ng.math.core.PI / (6));
var G__22486 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cell_size,0.0);
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__22485,G__22486) : my_mazes.core.rotate.call(null,G__22485,G__22486));
})();
var vec__22482 = v0;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22482,(1),null);
var d_odd = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x0,((2) * y0));
var d_even = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,cell_size);
var iter__8246__auto__ = ((function (v0,vec__22482,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__22487(s__22488){
return (new cljs.core.LazySeq(null,((function (v0,vec__22482,x0,y0,d_odd,d_even){
return (function (){
var s__22488__$1 = s__22488;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22488__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__22488__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__22482,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__22487_$_iter__22489(s__22490){
return (new cljs.core.LazySeq(null,((function (s__22488__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__22482,x0,y0,d_odd,d_even){
return (function (){
var s__22490__$1 = s__22490;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__22490__$1);
if(temp__6753__auto____$1){
var s__22490__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22490__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__22490__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__22492 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__22491 = (0);
while(true){
if((i__22491 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__22491);
cljs.core.chunk_append(b__22492,(function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})());

var G__22498 = (i__22491 + (1));
i__22491 = G__22498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22492),my_mazes$core$hexagon_grid_$_iter__22487_$_iter__22489(cljs.core.chunk_rest(s__22490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22492),null);
}
} else {
var c = cljs.core.first(s__22490__$2);
return cljs.core.cons((function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})(),my_mazes$core$hexagon_grid_$_iter__22487_$_iter__22489(cljs.core.rest(s__22490__$2)));
}
} else {
return null;
}
break;
}
});})(s__22488__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__22482,x0,y0,d_odd,d_even))
,null,null));
});})(s__22488__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__22482,x0,y0,d_odd,d_even))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$hexagon_grid_$_iter__22487(cljs.core.rest(s__22488__$1)));
} else {
var G__22499 = cljs.core.rest(s__22488__$1);
s__22488__$1 = G__22499;
continue;
}
} else {
return null;
}
break;
}
});})(v0,vec__22482,x0,y0,d_odd,d_even))
,null,null));
});})(v0,vec__22482,x0,y0,d_odd,d_even))
;
return iter__8246__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
});
my_mazes.core.triangle = (function my_mazes$core$triangle(p__22501,r){
var vec__22505 = p__22501;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22505,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22505,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__22505,x,y){
return (function (p1__22500_SHARP_){
return thi.ng.geom.core.scale(p1__22500_SHARP_,r);
});})(vec__22505,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((3)));
});
my_mazes.core.triangle_grid = (function my_mazes$core$triangle_grid(n_rows,n_cols,cell_size){
var side = (((3) * cell_size) / my_mazes.core.sqrt((3)));
var c_i = ((side * my_mazes.core.sqrt((3))) / (6));
var h = ((side * my_mazes.core.sqrt((3))) * 0.5);
var iter__8246__auto__ = ((function (side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__22519(s__22520){
return (new cljs.core.LazySeq(null,((function (side,c_i,h){
return (function (){
var s__22520__$1 = s__22520;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22520__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__22520__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__22519_$_iter__22521(s__22522){
return (new cljs.core.LazySeq(null,((function (s__22520__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function (){
var s__22522__$1 = s__22522;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__22522__$1);
if(temp__6753__auto____$1){
var s__22522__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22522__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__22522__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__22524 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__22523 = (0);
while(true){
if((i__22523 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__22523);
cljs.core.chunk_append(b__22524,(function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})());

var G__22530 = (i__22523 + (1));
i__22523 = G__22530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22524),my_mazes$core$triangle_grid_$_iter__22519_$_iter__22521(cljs.core.chunk_rest(s__22522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22524),null);
}
} else {
var c = cljs.core.first(s__22522__$2);
return cljs.core.cons((function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})(),my_mazes$core$triangle_grid_$_iter__22519_$_iter__22521(cljs.core.rest(s__22522__$2)));
}
} else {
return null;
}
break;
}
});})(s__22520__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
,null,null));
});})(s__22520__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$triangle_grid_$_iter__22519(cljs.core.rest(s__22520__$1)));
} else {
var G__22531 = cljs.core.rest(s__22520__$1);
s__22520__$1 = G__22531;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22532_SHARP_){
return cljs.core.with_meta(my_mazes.core.barycenter(p1__22532_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c));
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
my_mazes.core.delta_EQ_ = (function my_mazes$core$delta_EQ_(p__22533,p__22534){
var vec__22541 = p__22533;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22541,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22541,(1),null);
var vec__22544 = p__22534;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22544,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22544,(1),null);
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
return (function (p__22552){
var vec__22553 = p__22552;
var id_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22553,(0),null);
var b_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22553,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_t,id);
if(and__7377__auto__){
return my_mazes.core.delta_EQ_(b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__22547_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta(p1__22547_SHARP_),cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(p1__22547_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__22556_SHARP_,p2__22557_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$borders],[p1__22556_SHARP_,p2__22557_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells(cells);
var indexed = cljs.core.zipmap(cljs.core.iterate(cljs.core.inc,(0)),cells);
return cljs.core.reduce_kv(((function (cells,t,indexed){
return (function (p1__22558_SHARP_,p2__22559_SHARP_,p3__22560_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22558_SHARP_,p2__22559_SHARP_,(function (){var segments = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p3__22560_SHARP_));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p3__22560_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.matching_seg,t,p2__22559_SHARP_),segments),cljs.core.array_seq([cljs.core.cst$kw$normalized_DASH_segs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (segments,cells,t,indexed){
return (function (p__22565){
var vec__22566 = p__22565;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22566,(1),null);
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1,p0));
});})(segments,cells,t,indexed))
,segments)], 0));
})());
});})(cells,t,indexed))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs,vs){
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs))){
var vec__22583 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22586,p__22587){
var vec__22588 = p__22586;
var vnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(0),null);
var xnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,(1),null);
var vec__22591 = p__22587;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591,(1),null);
if(cljs.core.truth_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vnn,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xnn,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vnn,xnn], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,vs,xs));
var vsnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(0),null);
var xsnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,(1),null);
var scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bias,vsnn);
var sum_s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scores);
var scores_s = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__22583,vsnn,xsnn,scores,sum_s){
return (function (p1__22569_SHARP_){
return (p1__22569_SHARP_ / sum_s);
});})(vec__22583,vsnn,xsnn,scores,sum_s))
,scores);
var rnd = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__22583,vsnn,xsnn,scores,sum_s,scores_s,rnd){
return (function (p1__22571_SHARP_,p2__22570_SHARP_){
if((p2__22570_SHARP_ > rnd)){
return p1__22571_SHARP_;
} else {
return null;
}
});})(vec__22583,vsnn,xsnn,scores,sum_s,scores_s,rnd))
,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scores_s)));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xsnn,idx);
} else {
return null;
}
});
my_mazes.core.make_no_bias = (function my_mazes$core$make_no_bias(v_ref){
return (function (bounding_box){
return (function (p__22598){
var vec__22599 = p__22598;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(1),null);
return ((function (vec__22599,x,y){
return (function (_){
return (1);
});
;})(vec__22599,x,y))
});
});
});
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(v_ref){
return (function (p__22618){
var vec__22619 = p__22618;
var vec__22622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22622,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22622,(1),null);
var vec__22625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22625,(1),null);
var w = (x_max - x_min);
var f = ((function (w,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max){
return (function (p__22628){
var vec__22629 = p__22628;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22629,(1),null);
return ((x - x_min) / w);
});})(w,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max))
;
return ((function (w,f,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max){
return (function (xy){
var v = (function (){var G__22632 = (f(xy) * thi.ng.math.core.PI);
var G__22633 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__22632,G__22633) : my_mazes.core.rotate.call(null,G__22632,G__22633));
})();
return ((function (v,w,f,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.1;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,w,f,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max))
});
;})(w,f,vec__22619,vec__22622,x_min,y_min,vec__22625,x_max,y_max))
});
});
my_mazes.core.make_vertical_bias = (function my_mazes$core$make_vertical_bias(v_ref){
return (function (p__22650){
var vec__22651 = p__22650;
var vec__22654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22651,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22654,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22654,(1),null);
var vec__22657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22651,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22657,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22657,(1),null);
var h = (y_max - y_min);
var f = ((function (h,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max){
return (function (p__22660){
var vec__22661 = p__22660;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22661,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22661,(1),null);
return ((y - y_min) / h);
});})(h,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max))
;
return ((function (h,f,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max){
return (function (xy){
var v = (function (){var G__22664 = (f(xy) * thi.ng.math.core.PI);
var G__22665 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__22664,G__22665) : my_mazes.core.rotate.call(null,G__22664,G__22665));
})();
return ((function (v,h,f,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.1;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,h,f,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max))
});
;})(h,f,vec__22651,vec__22654,x_min,y_min,vec__22657,x_max,y_max))
});
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(v_ref){
return (function (p__22682){
var vec__22683 = p__22682;
var vec__22686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22686,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22686,(1),null);
var vec__22689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22689,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22689,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
var f = ((function (y_T,x_d,x_center,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max){
return (function (p__22692){
var vec__22693 = p__22692;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22693,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs((x - x_center)) < x_d))){
return 0.05;
} else {
return 0.55;
}
});})(y_T,x_d,x_center,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max))
;
return ((function (y_T,x_d,x_center,f,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max){
return (function (xy){
var v = (function (){var G__22696 = (f(xy) * thi.ng.math.core.PI);
var G__22697 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__22696,G__22697) : my_mazes.core.rotate.call(null,G__22696,G__22697));
})();
return ((function (v,y_T,x_d,x_center,f,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.1;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,y_T,x_d,x_center,f,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max))
});
;})(y_T,x_d,x_center,f,vec__22683,vec__22686,x_min,y_min,vec__22689,x_max,y_max))
});
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(id_start,bias_f,indexed_cells){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__22713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__22714 = G__22713;
var to_visit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22714,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22714,(1),null);
var visited__$1 = visited;
var G__22713__$1 = G__22713;
while(true){
var visited__$2 = visited__$1;
var vec__22717 = G__22713__$1;
var to_visit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717,(0),null);
var connections__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717,(1),null);
if(cljs.core.empty_QMARK_(to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek(to_visit__$1);
var visiting_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop(to_visit__$1);
var visited__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil((function (){var G__22720 = my_mazes.core.barycenter(cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(visiting_cell));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__22720) : bias_f.call(null,G__22720));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (visited__$1,G__22713__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__22717,to_visit__$1,connections__$1,visited,G__22713,vec__22714,to_visit,connections){
return (function (p1__22698_SHARP_){
if(cljs.core.not((visited__$3.cljs$core$IFn$_invoke$arity$1 ? visited__$3.cljs$core$IFn$_invoke$arity$1(p1__22698_SHARP_) : visited__$3.call(null,p1__22698_SHARP_)))){
return p1__22698_SHARP_;
} else {
return null;
}
});})(visited__$1,G__22713__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__22717,to_visit__$1,connections__$1,visited,G__22713,vec__22714,to_visit,connections))
,cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(visiting_cell)),cljs.core.cst$kw$normalized_DASH_segs.cljs$core$IFn$_invoke$arity$1(visiting_cell));
var G__22721 = visited__$3;
var G__22722 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(to_visit__$2,visiting,cljs.core.array_seq([next_visit], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__22721;
G__22713__$1 = G__22722;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__22727){
var map__22728 = p__22727;
var map__22728__$1 = ((((!((map__22728 == null)))?((((map__22728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22728):map__22728);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.cst$kw$id);
var borders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.cst$kw$borders);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22728__$1,cljs.core.cst$kw$neighbors);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__22728,map__22728__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not((function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
var G__22730 = cljs.core.PersistentHashSet.fromArray([n,id], true);
return (removed_walls.cljs$core$IFn$_invoke$arity$1 ? removed_walls.cljs$core$IFn$_invoke$arity$1(G__22730) : removed_walls.call(null,G__22730));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__22728,map__22728__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22745,p__22746){
var vec__22747 = p__22745;
var vec__22750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,(1),null);
var vec__22753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22753,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22753,(1),null);
var vec__22756 = p__22746;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22756,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__22759,p__22760){
var vec__22767 = p__22759;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22767,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22767,(1),null);
var vec__22770 = p__22760;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22770,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22770,(1),null);
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
var vec__22779 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22779,(0),null);
var xy0_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22779,(1),null);
var vec__22782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22782,(0),null);
var xy1_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22782,(1),null);
return my_mazes.core.less_than_xy_QMARK_(my_mazes.core.barycenter(s0),my_mazes.core.barycenter(s1));
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq(vs)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22789,v){
var vec__22790 = p__22789;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22790,(0),null);
var v_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22790,(1),null);
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
var len__8605__auto___22796 = arguments.length;
var i__8606__auto___22797 = (0);
while(true){
if((i__8606__auto___22797 < len__8605__auto___22796)){
args__8612__auto__.push((arguments[i__8606__auto___22797]));

var G__22798 = (i__8606__auto___22797 + (1));
i__8606__auto___22797 = G__22798;
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

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq22793){
var G__22794 = cljs.core.first(seq22793);
var seq22793__$1 = cljs.core.next(seq22793);
var G__22795 = cljs.core.first(seq22793__$1);
var seq22793__$2 = cljs.core.next(seq22793__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22794,G__22795,seq22793__$2);
});

my_mazes.core.update_maze_display_BANG_ = (function my_mazes$core$update_maze_display_BANG_(){
var map__22812 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22812__$1 = ((((!((map__22812 == null)))?((((map__22812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22812):map__22812);
var maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22812__$1,cljs.core.cst$kw$maze);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22812__$1,cljs.core.cst$kw$size);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22812__$1,cljs.core.cst$kw$line_DASH_width);
var zoomed_maze = my_mazes.core.transform_polylines(((function (map__22812,map__22812__$1,maze,size,line_width){
return (function (p1__22799_SHARP_){
return thi.ng.geom.core.scale(p1__22799_SHARP_,size);
});})(map__22812,map__22812__$1,maze,size,line_width))
,maze);
var scene_bb = my_mazes.core.bounding_box(zoomed_maze);
var vec__22813 = scene_bb;
var vec__22816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22813,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22816,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22816,(1),null);
var vec__22819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22813,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,(1),null);
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
var G__22823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.svg_polyline,"#00F",line_width),my_mazes.core.transform_polylines(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(my_mazes.core.barycenter(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)], null)),my_mazes.core.barycenter(scene_bb))),zoomed_maze));
return (paint_BANG_.cljs$core$IFn$_invoke$arity$1 ? paint_BANG_.cljs$core$IFn$_invoke$arity$1(G__22823) : paint_BANG_.call(null,G__22823));
});
my_mazes.core.compute_maze = (function my_mazes$core$compute_maze(indexed_cells,bias_f){
var cells = cljs.core.vals(indexed_cells);
var bias = (function (){var G__22825 = my_mazes.core.bounding_box(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$borders,cells));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__22825) : bias_f.call(null,G__22825));
})();
return my_mazes.core.remove_min(cljs.core.complement(my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min(my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines(cells,my_mazes.core.remove_walls((0),bias,indexed_cells))));
});
my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__22834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22834__$1 = ((((!((map__22834 == null)))?((((map__22834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22834):map__22834);
var indexed_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$indexed_DASH_cells);
var bias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$bias);
var v_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$v_DASH_ref);
var bias_f = (function (){var pred__22836 = cljs.core._EQ_;
var expr__22837 = bias;
if(cljs.core.truth_((pred__22836.cljs$core$IFn$_invoke$arity$2 ? pred__22836.cljs$core$IFn$_invoke$arity$2("vertical",expr__22837) : pred__22836.call(null,"vertical",expr__22837)))){
return my_mazes.core.make_vertical_bias;
} else {
if(cljs.core.truth_((pred__22836.cljs$core$IFn$_invoke$arity$2 ? pred__22836.cljs$core$IFn$_invoke$arity$2("horizontal",expr__22837) : pred__22836.call(null,"horizontal",expr__22837)))){
return my_mazes.core.make_horizontal_bias;
} else {
if(cljs.core.truth_((pred__22836.cljs$core$IFn$_invoke$arity$2 ? pred__22836.cljs$core$IFn$_invoke$arity$2("T",expr__22837) : pred__22836.call(null,"T",expr__22837)))){
return my_mazes.core.make_T_bias;
} else {
return my_mazes.core.make_no_bias;
}
}
}
})();
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$maze,my_mazes.core.compute_maze(indexed_cells,(function (){var G__22839 = (function (){var G__22840 = ((thi.ng.math.core.PI * v_ref) * 0.01);
var G__22841 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(1.0,(0));
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__22840,G__22841) : my_mazes.core.rotate.call(null,G__22840,G__22841));
})();
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__22839) : bias_f.call(null,G__22839));
})())], 0));

return my_mazes.core.update_maze_display_BANG_();
});
my_mazes.core.compute_cells = (function my_mazes$core$compute_cells(shape_f,rows,cols){
return my_mazes.core.scene__GT_graph((shape_f.cljs$core$IFn$_invoke$arity$3 ? shape_f.cljs$core$IFn$_invoke$arity$3(rows,cols,1.0) : shape_f.call(null,rows,cols,1.0)));
});
my_mazes.core.update_cells_BANG_ = (function my_mazes$core$update_cells_BANG_(){
var map__22847 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22847__$1 = ((((!((map__22847 == null)))?((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22847):map__22847);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,cljs.core.cst$kw$shape);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,cljs.core.cst$kw$cols);
var shape_f = (function (){var pred__22849 = cljs.core._EQ_;
var expr__22850 = shape;
if(cljs.core.truth_((pred__22849.cljs$core$IFn$_invoke$arity$2 ? pred__22849.cljs$core$IFn$_invoke$arity$2("hexagon",expr__22850) : pred__22849.call(null,"hexagon",expr__22850)))){
return my_mazes.core.hexagon_grid;
} else {
if(cljs.core.truth_((pred__22849.cljs$core$IFn$_invoke$arity$2 ? pred__22849.cljs$core$IFn$_invoke$arity$2("square",expr__22850) : pred__22849.call(null,"square",expr__22850)))){
return my_mazes.core.square_grid;
} else {
if(cljs.core.truth_((pred__22849.cljs$core$IFn$_invoke$arity$2 ? pred__22849.cljs$core$IFn$_invoke$arity$2("triangle",expr__22850) : pred__22849.call(null,"triangle",expr__22850)))){
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
my_mazes.core.callbacks = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$cols,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$rows,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$size,my_mazes.core.update_maze_display_BANG_,cljs.core.cst$kw$line_DASH_width,my_mazes.core.update_maze_display_BANG_,cljs.core.cst$kw$shape,my_mazes.core.update_cells_BANG_,cljs.core.cst$kw$bias,my_mazes.core.update_maze_BANG_,cljs.core.cst$kw$v_DASH_ref,my_mazes.core.update_maze_BANG_], null);
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("%")].join('')], null),cljs.core.cst$kw$on_DASH_change,(function (e){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,(e.target.value | (0))], 0));

return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(my_mazes.core.callbacks) : param.call(null,my_mazes.core.callbacks)).call(null);
})], null)], null);
});
my_mazes.core.menu = (function my_mazes$core$menu(id,param,values){
var current = (function (){var G__22860 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__22860) : param.call(null,G__22860));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,current,cljs.core.cst$kw$name,current,cljs.core.cst$kw$value,current,cljs.core.cst$kw$on_DASH_change,((function (current){
return (function (p1__22852_SHARP_){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,p1__22852_SHARP_.target.value], 0));

return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(my_mazes.core.callbacks) : param.call(null,my_mazes.core.callbacks)).call(null);
});})(current))
], null),(function (){var iter__8246__auto__ = ((function (current){
return (function my_mazes$core$menu_$_iter__22861(s__22862){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__22862__$1 = s__22862;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__22862__$1);
if(temp__6753__auto__){
var s__22862__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22862__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__22862__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__22864 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__22863 = (0);
while(true){
if((i__22863 < size__8245__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__22863);
cljs.core.chunk_append(b__22864,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)));

var G__22867 = (i__22863 + (1));
i__22863 = G__22867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22864),my_mazes$core$menu_$_iter__22861(cljs.core.chunk_rest(s__22862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22864),null);
}
} else {
var v = cljs.core.first(s__22862__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)),my_mazes$core$menu_$_iter__22861(cljs.core.rest(s__22862__$2)));
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
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$cols,cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"cols: ",cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$rows,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"rows : ",cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(4),(100),(50)], null),"size : ",cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$line_DASH_width,cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(10),(20)], null),"line width : ",cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),my_mazes.core.menu("shape",cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["square","hexagon","triangle"], null)),my_mazes.core.menu("Bias",cljs.core.cst$kw$bias,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unbiased","vertical","horizontal","T"], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$v_DASH_ref,cljs.core.cst$kw$v_DASH_ref.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(0),(100),(20)], null),"v-ref angle : ",cljs.core.cst$kw$v_DASH_ref.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),"%"], null)], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$size,(32),cljs.core.cst$kw$line_DASH_width,(5),cljs.core.cst$kw$shape,"square",cljs.core.cst$kw$bias,"unbiased",cljs.core.cst$kw$v_DASH_ref,0.0], null)], 0));

return my_mazes.core.update_cells_BANG_();
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app();

var G__22870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null);
var G__22871 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__22870,G__22871) : reagent.core.render_component.call(null,G__22870,G__22871));
});
my_mazes.core.main();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main called"], 0));
