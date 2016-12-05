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
return (function (p1__27832_SHARP_,p2__27831_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__27831_SHARP_,p1__27832_SHARP_) : f.call(null,p2__27831_SHARP_,p1__27832_SHARP_));
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
my_mazes.core.square = (function my_mazes$core$square(p__27834,r){
var vec__27838 = p__27834;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__27838,x,y){
return (function (p1__27833_SHARP_){
return thi.ng.geom.core.scale(p1__27833_SHARP_,r);
});})(vec__27838,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon((4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__27852(s__27853){
return (new cljs.core.LazySeq(null,(function (){
var s__27853__$1 = s__27853;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__27853__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__27853__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__27852_$_iter__27854(s__27855){
return (new cljs.core.LazySeq(null,((function (s__27853__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__27855__$1 = s__27855;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__27855__$1);
if(temp__6753__auto____$1){
var s__27855__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27855__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__27855__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__27857 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__27856 = (0);
while(true){
if((i__27856 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__27856);
cljs.core.chunk_append(b__27857,(function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null)),(cell_size / thi.ng.math.core.SQRT2));
})());

var G__27863 = (i__27856 + (1));
i__27856 = G__27863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27857),my_mazes$core$square_grid_$_iter__27852_$_iter__27854(cljs.core.chunk_rest(s__27855__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27857),null);
}
} else {
var c = cljs.core.first(s__27855__$2);
return cljs.core.cons((function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null)),(cell_size / thi.ng.math.core.SQRT2));
})(),my_mazes$core$square_grid_$_iter__27852_$_iter__27854(cljs.core.rest(s__27855__$2)));
}
} else {
return null;
}
break;
}
});})(s__27853__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__27853__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$square_grid_$_iter__27852(cljs.core.rest(s__27853__$1)));
} else {
var G__27864 = cljs.core.rest(s__27853__$1);
s__27853__$1 = G__27864;
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
my_mazes.core.hexagon = (function my_mazes$core$hexagon(p__27866,r){
var vec__27870 = p__27866;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__27870,x,y){
return (function (p1__27865_SHARP_){
return thi.ng.geom.core.scale(p1__27865_SHARP_,r);
});})(vec__27870,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((6)));
});
my_mazes.core.hexagon_grid = (function my_mazes$core$hexagon_grid(n_rows,n_cols,cell_size){
var v0 = (function (){var G__27892 = (thi.ng.math.core.PI / (6));
var G__27893 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(cell_size,0.0);
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__27892,G__27893) : my_mazes.core.rotate.call(null,G__27892,G__27893));
})();
var vec__27889 = v0;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27889,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27889,(1),null);
var d_odd = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x0,((2) * y0));
var d_even = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(0.0,cell_size);
var iter__8246__auto__ = ((function (v0,vec__27889,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__27894(s__27895){
return (new cljs.core.LazySeq(null,((function (v0,vec__27889,x0,y0,d_odd,d_even){
return (function (){
var s__27895__$1 = s__27895;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__27895__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__27895__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__27889,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__27894_$_iter__27896(s__27897){
return (new cljs.core.LazySeq(null,((function (s__27895__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__27889,x0,y0,d_odd,d_even){
return (function (){
var s__27897__$1 = s__27897;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__27897__$1);
if(temp__6753__auto____$1){
var s__27897__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27897__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__27897__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__27899 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__27898 = (0);
while(true){
if((i__27898 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__27898);
cljs.core.chunk_append(b__27899,(function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})());

var G__27905 = (i__27898 + (1));
i__27898 = G__27905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27899),my_mazes$core$hexagon_grid_$_iter__27894_$_iter__27896(cljs.core.chunk_rest(s__27897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27899),null);
}
} else {
var c = cljs.core.first(s__27897__$2);
return cljs.core.cons((function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y);
return my_mazes.core.hexagon(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(((cljs.core.odd_QMARK_(r))?d_odd:d_even),center),cell_size);
})(),my_mazes$core$hexagon_grid_$_iter__27894_$_iter__27896(cljs.core.rest(s__27897__$2)));
}
} else {
return null;
}
break;
}
});})(s__27895__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__27889,x0,y0,d_odd,d_even))
,null,null));
});})(s__27895__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__27889,x0,y0,d_odd,d_even))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$hexagon_grid_$_iter__27894(cljs.core.rest(s__27895__$1)));
} else {
var G__27906 = cljs.core.rest(s__27895__$1);
s__27895__$1 = G__27906;
continue;
}
} else {
return null;
}
break;
}
});})(v0,vec__27889,x0,y0,d_odd,d_even))
,null,null));
});})(v0,vec__27889,x0,y0,d_odd,d_even))
;
return iter__8246__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_rows));
});
my_mazes.core.triangle = (function my_mazes$core$triangle(p__27908,r){
var vec__27912 = p__27908;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__27912,x,y){
return (function (p1__27907_SHARP_){
return thi.ng.geom.core.scale(p1__27907_SHARP_,r);
});})(vec__27912,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon((3)));
});
my_mazes.core.triangle_grid = (function my_mazes$core$triangle_grid(n_rows,n_cols,cell_size){
var side = (((3) * cell_size) / my_mazes.core.sqrt((3)));
var c_i = ((side * my_mazes.core.sqrt((3))) / (6));
var h = ((side * my_mazes.core.sqrt((3))) * 0.5);
var iter__8246__auto__ = ((function (side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__27926(s__27927){
return (new cljs.core.LazySeq(null,((function (side,c_i,h){
return (function (){
var s__27927__$1 = s__27927;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__27927__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__27927__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function my_mazes$core$triangle_grid_$_iter__27926_$_iter__27928(s__27929){
return (new cljs.core.LazySeq(null,((function (s__27927__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h){
return (function (){
var s__27929__$1 = s__27929;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__27929__$1);
if(temp__6753__auto____$1){
var s__27929__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27929__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__27929__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__27931 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__27930 = (0);
while(true){
if((i__27930 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__27930);
cljs.core.chunk_append(b__27931,(function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})());

var G__27937 = (i__27930 + (1));
i__27930 = G__27937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27931),my_mazes$core$triangle_grid_$_iter__27926_$_iter__27928(cljs.core.chunk_rest(s__27929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27931),null);
}
} else {
var c = cljs.core.first(s__27929__$2);
return cljs.core.cons((function (){var center = thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((side / (2)),0.0),c),thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),h),r)),((cljs.core.even_QMARK_((c + r)))?thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((cell_size - c_i) / (2))):thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),((c_i - cell_size) / (2)))));
var shape = my_mazes.core.triangle(center,cell_size);
if(cljs.core.odd_QMARK_((c + r))){
return my_mazes.core.rotate_centered(thi.ng.math.core.PI,shape);
} else {
return shape;
}
})(),my_mazes$core$triangle_grid_$_iter__27926_$_iter__27928(cljs.core.rest(s__27929__$2)));
}
} else {
return null;
}
break;
}
});})(s__27927__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
,null,null));
});})(s__27927__$1,r,xs__7309__auto__,temp__6753__auto__,side,c_i,h))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$triangle_grid_$_iter__27926(cljs.core.rest(s__27927__$1)));
} else {
var G__27938 = cljs.core.rest(s__27927__$1);
s__27927__$1 = G__27938;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27939_SHARP_){
return cljs.core.with_meta(my_mazes.core.barycenter(p1__27939_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c));
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
my_mazes.core.delta_EQ_ = (function my_mazes$core$delta_EQ_(p__27940,p__27941){
var vec__27948 = p__27940;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(1),null);
var vec__27951 = p__27941;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27951,(1),null);
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
return (function (p__27959){
var vec__27960 = p__27959;
var id_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(0),null);
var b_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27960,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_t,id);
if(and__7377__auto__){
return my_mazes.core.delta_EQ_(b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__27954_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta(p1__27954_SHARP_),cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(p1__27954_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__27963_SHARP_,p2__27964_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$borders],[p1__27963_SHARP_,p2__27964_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells(cells);
var indexed = cljs.core.zipmap(cljs.core.iterate(cljs.core.inc,(0)),cells);
return cljs.core.reduce_kv(((function (cells,t,indexed){
return (function (p1__27965_SHARP_,p2__27966_SHARP_,p3__27967_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27965_SHARP_,p2__27966_SHARP_,(function (){var segments = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p3__27967_SHARP_));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p3__27967_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.matching_seg,t,p2__27966_SHARP_),segments),cljs.core.array_seq([cljs.core.cst$kw$normalized_DASH_segs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (segments,cells,t,indexed){
return (function (p__27972){
var vec__27973 = p__27972;
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27973,(1),null);
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(p1,p0));
});})(segments,cells,t,indexed))
,segments)], 0));
})());
});})(cells,t,indexed))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs,vs){
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs))){
var vec__27990 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__27993,p__27994){
var vec__27995 = p__27993;
var vnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(0),null);
var xnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995,(1),null);
var vec__27998 = p__27994;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27998,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27998,(1),null);
if(cljs.core.truth_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vnn,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xnn,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vnn,xnn], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,vs,xs));
var vsnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var xsnn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
var scores = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bias,vsnn);
var sum_s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scores);
var scores_s = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27990,vsnn,xsnn,scores,sum_s){
return (function (p1__27976_SHARP_){
return (p1__27976_SHARP_ / sum_s);
});})(vec__27990,vsnn,xsnn,scores,sum_s))
,scores);
var rnd = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
var idx = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__27990,vsnn,xsnn,scores,sum_s,scores_s,rnd){
return (function (p1__27978_SHARP_,p2__27977_SHARP_){
if((p2__27977_SHARP_ > rnd)){
return p1__27978_SHARP_;
} else {
return null;
}
});})(vec__27990,vsnn,xsnn,scores,sum_s,scores_s,rnd))
,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,scores_s)));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xsnn,idx);
} else {
return null;
}
});
my_mazes.core.make_no_bias = (function my_mazes$core$make_no_bias(v_ref){
return (function (bounding_box){
return (function (p__28005){
var vec__28006 = p__28005;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28006,(1),null);
return ((function (vec__28006,x,y){
return (function (_){
return 1.0;
});
;})(vec__28006,x,y))
});
});
});
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(v_ref){
return (function (p__28025){
var vec__28026 = p__28025;
var vec__28029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28029,(1),null);
var vec__28032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(1),null);
var w = (x_max - x_min);
var f = ((function (w,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max){
return (function (p__28035){
var vec__28036 = p__28035;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28036,(1),null);
return ((x - x_min) / w);
});})(w,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max))
;
return ((function (w,f,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max){
return (function (xy){
var v = (function (){var G__28039 = (f(xy) * thi.ng.math.core.PI);
var G__28040 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__28039,G__28040) : my_mazes.core.rotate.call(null,G__28039,G__28040));
})();
return ((function (v,w,f,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.01;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,w,f,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max))
});
;})(w,f,vec__28026,vec__28029,x_min,y_min,vec__28032,x_max,y_max))
});
});
my_mazes.core.make_vertical_bias = (function my_mazes$core$make_vertical_bias(v_ref){
return (function (p__28057){
var vec__28058 = p__28057;
var vec__28061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28058,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28061,(1),null);
var vec__28064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28058,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28064,(1),null);
var h = (y_max - y_min);
var f = ((function (h,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max){
return (function (p__28067){
var vec__28068 = p__28067;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068,(1),null);
return ((y - y_min) / h);
});})(h,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max))
;
return ((function (h,f,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max){
return (function (xy){
var v = (function (){var G__28071 = (f(xy) * thi.ng.math.core.PI);
var G__28072 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__28071,G__28072) : my_mazes.core.rotate.call(null,G__28071,G__28072));
})();
return ((function (v,h,f,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.01;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,h,f,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max))
});
;})(h,f,vec__28058,vec__28061,x_min,y_min,vec__28064,x_max,y_max))
});
});
my_mazes.core.make_circle_bias = (function my_mazes$core$make_circle_bias(v_ref){
return (function (p__28088){
var vec__28089 = p__28088;
var vec__28092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092,(1),null);
var vec__28095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28089,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095,(1),null);
var center = thi.ng.geom.core.scale(thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((x_max + x_min),(y_max + y_min)),0.5);
var vec__28098 = center;
var x_center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(0),null);
var y_center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28098,(1),null);
var d2_border = (function (){var x__7729__auto__ = thi.ng.geom.core.dist_squared(center,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_center,y_min));
var y__7730__auto__ = thi.ng.geom.core.dist_squared(center,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x_min,y_center));
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})();
var f = ((function (center,vec__28098,x_center,y_center,d2_border,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max){
return (function (xy){
var x__7729__auto__ = (thi.ng.geom.core.dist_squared(xy,center) / d2_border);
var y__7730__auto__ = 1.0;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
});})(center,vec__28098,x_center,y_center,d2_border,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max))
;
return ((function (center,vec__28098,x_center,y_center,d2_border,f,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max){
return (function (xy){
var v = (function (){var G__28101 = (f(xy) * thi.ng.math.core.PI);
var G__28102 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__28101,G__28102) : my_mazes.core.rotate.call(null,G__28101,G__28102));
})();
return ((function (v,center,vec__28098,x_center,y_center,d2_border,f,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.01;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,center,vec__28098,x_center,y_center,d2_border,f,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max))
});
;})(center,vec__28098,x_center,y_center,d2_border,f,vec__28089,vec__28092,x_min,y_min,vec__28095,x_max,y_max))
});
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(v_ref){
return (function (p__28119){
var vec__28120 = p__28119;
var vec__28123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(1),null);
var vec__28126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28120,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28126,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
var f = ((function (y_T,x_d,x_center,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max){
return (function (p__28129){
var vec__28130 = p__28129;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28130,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs((x - x_center)) < x_d))){
return 0.01;
} else {
return 0.99;
}
});})(y_T,x_d,x_center,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max))
;
return ((function (y_T,x_d,x_center,f,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max){
return (function (xy){
var v = (function (){var G__28133 = (f(xy) * thi.ng.math.core.PI);
var G__28134 = v_ref;
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__28133,G__28134) : my_mazes.core.rotate.call(null,G__28133,G__28134));
})();
return ((function (v,y_T,x_d,x_center,f,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max){
return (function (normed_v){
var x__7722__auto__ = my_mazes.core.abs(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2(v,normed_v));
var y__7723__auto__ = 0.1;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
});
;})(v,y_T,x_d,x_center,f,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max))
});
;})(y_T,x_d,x_center,f,vec__28120,vec__28123,x_min,y_min,vec__28126,x_max,y_max))
});
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(id_start,bias_f,indexed_cells){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__28150 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__28151 = G__28150;
var to_visit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
var visited__$1 = visited;
var G__28150__$1 = G__28150;
while(true){
var visited__$2 = visited__$1;
var vec__28154 = G__28150__$1;
var to_visit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(0),null);
var connections__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28154,(1),null);
if(cljs.core.empty_QMARK_(to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek(to_visit__$1);
var visiting_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop(to_visit__$1);
var visited__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil((function (){var G__28157 = my_mazes.core.barycenter(cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(visiting_cell));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__28157) : bias_f.call(null,G__28157));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (visited__$1,G__28150__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__28154,to_visit__$1,connections__$1,visited,G__28150,vec__28151,to_visit,connections){
return (function (p1__28135_SHARP_){
if(cljs.core.not((visited__$3.cljs$core$IFn$_invoke$arity$1 ? visited__$3.cljs$core$IFn$_invoke$arity$1(p1__28135_SHARP_) : visited__$3.call(null,p1__28135_SHARP_)))){
return p1__28135_SHARP_;
} else {
return null;
}
});})(visited__$1,G__28150__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__28154,to_visit__$1,connections__$1,visited,G__28150,vec__28151,to_visit,connections))
,cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(visiting_cell)),cljs.core.cst$kw$normalized_DASH_segs.cljs$core$IFn$_invoke$arity$1(visiting_cell));
var G__28158 = visited__$3;
var G__28159 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(to_visit__$2,visiting,cljs.core.array_seq([next_visit], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__28158;
G__28150__$1 = G__28159;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__28164){
var map__28165 = p__28164;
var map__28165__$1 = ((((!((map__28165 == null)))?((((map__28165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28165):map__28165);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28165__$1,cljs.core.cst$kw$id);
var borders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28165__$1,cljs.core.cst$kw$borders);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28165__$1,cljs.core.cst$kw$neighbors);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__28165,map__28165__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not((function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
var G__28167 = cljs.core.PersistentHashSet.fromArray([n,id], true);
return (removed_walls.cljs$core$IFn$_invoke$arity$1 ? removed_walls.cljs$core$IFn$_invoke$arity$1(G__28167) : removed_walls.call(null,G__28167));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__28165,map__28165__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28182,p__28183){
var vec__28184 = p__28182;
var vec__28187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28184,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28187,(1),null);
var vec__28190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28184,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28190,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28190,(1),null);
var vec__28193 = p__28183;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28193,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28193,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__28196,p__28197){
var vec__28204 = p__28196;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28204,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28204,(1),null);
var vec__28207 = p__28197;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(1),null);
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
var vec__28216 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216,(0),null);
var xy0_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28216,(1),null);
var vec__28219 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28219,(0),null);
var xy1_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28219,(1),null);
return my_mazes.core.less_than_xy_QMARK_(my_mazes.core.barycenter(s0),my_mazes.core.barycenter(s1));
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq(vs)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28226,v){
var vec__28227 = p__28226;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(0),null);
var v_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28227,(1),null);
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
var len__8605__auto___28233 = arguments.length;
var i__8606__auto___28234 = (0);
while(true){
if((i__8606__auto___28234 < len__8605__auto___28233)){
args__8612__auto__.push((arguments[i__8606__auto___28234]));

var G__28235 = (i__8606__auto___28234 + (1));
i__8606__auto___28234 = G__28235;
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

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq28230){
var G__28231 = cljs.core.first(seq28230);
var seq28230__$1 = cljs.core.next(seq28230);
var G__28232 = cljs.core.first(seq28230__$1);
var seq28230__$2 = cljs.core.next(seq28230__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28231,G__28232,seq28230__$2);
});

my_mazes.core.update_maze_display_BANG_ = (function my_mazes$core$update_maze_display_BANG_(){
var map__28249 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__28249__$1 = ((((!((map__28249 == null)))?((((map__28249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28249):map__28249);
var maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,cljs.core.cst$kw$maze);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,cljs.core.cst$kw$size);
var line_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28249__$1,cljs.core.cst$kw$line_DASH_width);
var zoomed_maze = my_mazes.core.transform_polylines(((function (map__28249,map__28249__$1,maze,size,line_width){
return (function (p1__28236_SHARP_){
return thi.ng.geom.core.scale(p1__28236_SHARP_,size);
});})(map__28249,map__28249__$1,maze,size,line_width))
,maze);
var scene_bb = my_mazes.core.bounding_box(zoomed_maze);
var vec__28250 = scene_bb;
var vec__28253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28253,(1),null);
var vec__28256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28250,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28256,(1),null);
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
var G__28260 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.svg_polyline,"#00F",line_width),my_mazes.core.transform_polylines(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(my_mazes.core.barycenter(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)], null)),my_mazes.core.barycenter(scene_bb))),zoomed_maze));
return (paint_BANG_.cljs$core$IFn$_invoke$arity$1 ? paint_BANG_.cljs$core$IFn$_invoke$arity$1(G__28260) : paint_BANG_.call(null,G__28260));
});
my_mazes.core.compute_maze = (function my_mazes$core$compute_maze(indexed_cells,bias_f){
var cells = cljs.core.vals(indexed_cells);
var bias = (function (){var G__28262 = my_mazes.core.bounding_box(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$borders,cells));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__28262) : bias_f.call(null,G__28262));
})();
return my_mazes.core.remove_min(cljs.core.complement(my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min(my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines(cells,my_mazes.core.remove_walls((0),bias,indexed_cells))));
});
my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__28271 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__28271__$1 = ((((!((map__28271 == null)))?((((map__28271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28271):map__28271);
var indexed_cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28271__$1,cljs.core.cst$kw$indexed_DASH_cells);
var bias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28271__$1,cljs.core.cst$kw$bias);
var v_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28271__$1,cljs.core.cst$kw$v_DASH_ref);
var bias_f = (function (){var pred__28273 = cljs.core._EQ_;
var expr__28274 = bias;
if(cljs.core.truth_((pred__28273.cljs$core$IFn$_invoke$arity$2 ? pred__28273.cljs$core$IFn$_invoke$arity$2("vertical",expr__28274) : pred__28273.call(null,"vertical",expr__28274)))){
return my_mazes.core.make_vertical_bias;
} else {
if(cljs.core.truth_((pred__28273.cljs$core$IFn$_invoke$arity$2 ? pred__28273.cljs$core$IFn$_invoke$arity$2("horizontal",expr__28274) : pred__28273.call(null,"horizontal",expr__28274)))){
return my_mazes.core.make_horizontal_bias;
} else {
if(cljs.core.truth_((pred__28273.cljs$core$IFn$_invoke$arity$2 ? pred__28273.cljs$core$IFn$_invoke$arity$2("circle",expr__28274) : pred__28273.call(null,"circle",expr__28274)))){
return my_mazes.core.make_circle_bias;
} else {
if(cljs.core.truth_((pred__28273.cljs$core$IFn$_invoke$arity$2 ? pred__28273.cljs$core$IFn$_invoke$arity$2("T",expr__28274) : pred__28273.call(null,"T",expr__28274)))){
return my_mazes.core.make_T_bias;
} else {
return my_mazes.core.make_no_bias;
}
}
}
}
})();
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$maze,my_mazes.core.compute_maze(indexed_cells,(function (){var G__28276 = (function (){var G__28277 = ((thi.ng.math.core.PI * v_ref) * 0.01);
var G__28278 = thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(1.0,(0));
return (my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2 ? my_mazes.core.rotate.cljs$core$IFn$_invoke$arity$2(G__28277,G__28278) : my_mazes.core.rotate.call(null,G__28277,G__28278));
})();
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__28276) : bias_f.call(null,G__28276));
})())], 0));

return my_mazes.core.update_maze_display_BANG_();
});
my_mazes.core.compute_cells = (function my_mazes$core$compute_cells(shape_f,rows,cols){
return my_mazes.core.scene__GT_graph((shape_f.cljs$core$IFn$_invoke$arity$3 ? shape_f.cljs$core$IFn$_invoke$arity$3(rows,cols,1.0) : shape_f.call(null,rows,cols,1.0)));
});
my_mazes.core.update_cells_BANG_ = (function my_mazes$core$update_cells_BANG_(){
var map__28284 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__28284__$1 = ((((!((map__28284 == null)))?((((map__28284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28284):map__28284);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28284__$1,cljs.core.cst$kw$shape);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28284__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28284__$1,cljs.core.cst$kw$cols);
var shape_f = (function (){var pred__28286 = cljs.core._EQ_;
var expr__28287 = shape;
if(cljs.core.truth_((pred__28286.cljs$core$IFn$_invoke$arity$2 ? pred__28286.cljs$core$IFn$_invoke$arity$2("hexagon",expr__28287) : pred__28286.call(null,"hexagon",expr__28287)))){
return my_mazes.core.hexagon_grid;
} else {
if(cljs.core.truth_((pred__28286.cljs$core$IFn$_invoke$arity$2 ? pred__28286.cljs$core$IFn$_invoke$arity$2("square",expr__28287) : pred__28286.call(null,"square",expr__28287)))){
return my_mazes.core.square_grid;
} else {
if(cljs.core.truth_((pred__28286.cljs$core$IFn$_invoke$arity$2 ? pred__28286.cljs$core$IFn$_invoke$arity$2("triangle",expr__28287) : pred__28286.call(null,"triangle",expr__28287)))){
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
var current = (function (){var G__28297 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__28297) : param.call(null,G__28297));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,current,cljs.core.cst$kw$name,current,cljs.core.cst$kw$value,current,cljs.core.cst$kw$on_DASH_change,((function (current){
return (function (p1__28289_SHARP_){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,p1__28289_SHARP_.target.value], 0));

return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(my_mazes.core.callbacks) : param.call(null,my_mazes.core.callbacks)).call(null);
});})(current))
], null),(function (){var iter__8246__auto__ = ((function (current){
return (function my_mazes$core$menu_$_iter__28298(s__28299){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__28299__$1 = s__28299;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__28299__$1);
if(temp__6753__auto__){
var s__28299__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28299__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__28299__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__28301 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__28300 = (0);
while(true){
if((i__28300 < size__8245__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__28300);
cljs.core.chunk_append(b__28301,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)));

var G__28304 = (i__28300 + (1));
i__28300 = G__28304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28301),my_mazes$core$menu_$_iter__28298(cljs.core.chunk_rest(s__28299__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28301),null);
}
} else {
var v = cljs.core.first(s__28299__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)),my_mazes$core$menu_$_iter__28298(cljs.core.rest(s__28299__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$toggle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),cljs.core.cst$kw$on_DASH_change,(function (){
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$ui,cljs.core.not(cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))))], 0));
})], null)], null),"ui"], null),(cljs.core.truth_(cljs.core.cst$kw$ui.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))))?new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$cols,cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"cols: ",cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$rows,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(100),(50)], null),"rows : ",cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(4),(100),(50)], null),"size : ",cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$line_DASH_width,cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(1),(10),(20)], null),"line width : ",cljs.core.cst$kw$line_DASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),my_mazes.core.menu("shape",cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["square","hexagon","triangle"], null)),my_mazes.core.menu("Bias",cljs.core.cst$kw$bias,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unbiased","vertical","horizontal","circle","T"], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$v_DASH_ref,cljs.core.cst$kw$v_DASH_ref.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(0),(100),(20)], null),"v-ref angle : ",cljs.core.cst$kw$v_DASH_ref.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),"%"], null)], null):null)], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$size,(32),cljs.core.cst$kw$line_DASH_width,(5),cljs.core.cst$kw$shape,"square",cljs.core.cst$kw$bias,"unbiased",cljs.core.cst$kw$v_DASH_ref,0.0,cljs.core.cst$kw$ui,true], null)], 0));

return my_mazes.core.update_cells_BANG_();
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app();

var G__28307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null);
var G__28308 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28307,G__28308) : reagent.core.render_component.call(null,G__28307,G__28308));
});
my_mazes.core.main();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main called"], 0));
