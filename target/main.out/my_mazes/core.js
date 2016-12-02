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
my_mazes.core.abs = (function my_mazes$core$abs(n){
if(((0) <= n)){
return n;
} else {
return (- n);
}
});
my_mazes.core.flip_2 = (function my_mazes$core$flip_2(f){
return (function (p1__23489_SHARP_,p2__23488_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__23488_SHARP_,p1__23489_SHARP_) : f.call(null,p2__23488_SHARP_,p1__23489_SHARP_));
});
});
my_mazes.core.rotate = my_mazes.core.flip_2(thi.ng.geom.core.rotate);
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((n + (1)),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__23491,r){
var vec__23495 = p__23491;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23495,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23495,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(x,y)),((function (vec__23495,x,y){
return (function (p1__23490_SHARP_){
return thi.ng.geom.core.scale(p1__23490_SHARP_,r);
});})(vec__23495,x,y))
,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon((4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__23509(s__23510){
return (new cljs.core.LazySeq(null,(function (){
var s__23510__$1 = s__23510;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__23510__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first(xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__23510__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__23509_$_iter__23511(s__23512){
return (new cljs.core.LazySeq(null,((function (s__23510__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__23512__$1 = s__23512;
while(true){
var temp__6753__auto____$1 = cljs.core.seq(s__23512__$1);
if(temp__6753__auto____$1){
var s__23512__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23512__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__23512__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__23514 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__23513 = (0);
while(true){
if((i__23513 < size__8245__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__23513);
cljs.core.chunk_append(b__23514,my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)));

var G__23520 = (i__23513 + (1));
i__23513 = G__23520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23514),my_mazes$core$square_grid_$_iter__23509_$_iter__23511(cljs.core.chunk_rest(s__23512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23514),null);
}
} else {
var c = cljs.core.first(s__23512__$2);
return cljs.core.cons(my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)),my_mazes$core$square_grid_$_iter__23509_$_iter__23511(cljs.core.rest(s__23512__$2)));
}
} else {
return null;
}
break;
}
});})(s__23510__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__23510__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq(iterys__8242__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8243__auto__,my_mazes$core$square_grid_$_iter__23509(cljs.core.rest(s__23510__$1)));
} else {
var G__23521 = cljs.core.rest(s__23510__$1);
s__23510__$1 = G__23521;
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
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count(xys)));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23522_SHARP_){
return cljs.core.with_meta(my_mazes.core.barycenter(p1__23522_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter(seg);
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p__23528){
var vec__23529 = p__23528;
var id_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529,(0),null);
var b_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23529,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_t,id);
if(and__7377__auto__){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__23523_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta(p1__23523_SHARP_),cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(p1__23523_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__23532_SHARP_,p2__23533_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$borders],[p1__23532_SHARP_,p2__23533_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells(cells);
var indexed = cljs.core.zipmap(cljs.core.iterate(cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__23534_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p1__23534_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv(((function (cells,t,indexed,neighbors){
return (function (p1__23535_SHARP_,p2__23536_SHARP_,p3__23537_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23535_SHARP_,p2__23536_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p3__23537_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.matching_seg,t,p2__23536_SHARP_),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p3__23537_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs))){
var bias_s = (function (){var G__23555 = cljs.core.count(xs);
return (bias.cljs$core$IFn$_invoke$arity$1 ? bias.cljs$core$IFn$_invoke$arity$1(G__23555) : bias.call(null,G__23555));
})();
var vec__23552 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bias_s){
return (function (p__23556,p__23557){
var vec__23558 = p__23556;
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(3),null);
var last_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23558,(4),null);
var vec__23561 = p__23557;
var bias_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23561,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bias_non_nil,(bias_b - delta)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23552,(3),null);
var bias_rescaled = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(1.0 / cljs.core.peek(bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs_non_nil,cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (bias_s,vec__23552,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__23539_SHARP_,p2__23538_SHARP_){
if((p2__23538_SHARP_ > rnd)){
return p1__23539_SHARP_;
} else {
return null;
}
});})(bias_s,vec__23552,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__23565){
var vec__23569 = p__23565;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23569,(1),null);
return ((function (vec__23569,x,y){
return (function (p1__23564_SHARP_){
var delta = (1.0 / p1__23564_SHARP_);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__23564_SHARP_,cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,delta),delta));
});
;})(vec__23569,x,y))
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
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__23572){
var vec__23586 = p__23572;
var vec__23589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23586,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23589,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23589,(1),null);
var vec__23592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23586,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23592,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias(((function (w,vec__23586,vec__23589,x_min,y_min,vec__23592,x_max,y_max){
return (function (p__23595){
var vec__23596 = p__23595;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,(1),null);
return (x / w);
});})(w,vec__23586,vec__23589,x_min,y_min,vec__23592,x_max,y_max))
);
});
my_mazes.core.make_vertical_bias = (function my_mazes$core$make_vertical_bias(p__23599){
var vec__23613 = p__23599;
var vec__23616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23613,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(1),null);
var vec__23619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23613,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(1),null);
var h = (y_max - y_min);
return my_mazes.core.alternate_bias(((function (h,vec__23613,vec__23616,x_min,y_min,vec__23619,x_max,y_max){
return (function (p__23622){
var vec__23623 = p__23622;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23623,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23623,(1),null);
return (y / h);
});})(h,vec__23613,vec__23616,x_min,y_min,vec__23619,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__23626){
var vec__23640 = p__23626;
var vec__23643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23643,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23643,(1),null);
var vec__23646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23640,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23646,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23646,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias(((function (y_T,x_d,x_center,vec__23640,vec__23643,x_min,y_min,vec__23646,x_max,y_max){
return (function (p__23649){
var vec__23650 = p__23649;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23650,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23650,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs((x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__23640,vec__23643,x_min,y_min,vec__23646,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(indexed_cells,id_start,bias_f){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__23668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__23669 = G__23668;
var to_visit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23669,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23669,(1),null);
var visited__$1 = visited;
var G__23668__$1 = G__23668;
while(true){
var visited__$2 = visited__$1;
var vec__23672 = G__23668__$1;
var to_visit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23672,(0),null);
var connections__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23672,(1),null);
if(cljs.core.empty_QMARK_(to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek(to_visit__$1);
var visiting_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop(to_visit__$1);
var visited__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil((function (){var G__23675 = my_mazes.core.barycenter(cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(visiting_cell));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__23675) : bias_f.call(null,G__23675));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (visited__$1,G__23668__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__23672,to_visit__$1,connections__$1,visited,G__23668,vec__23669,to_visit,connections){
return (function (p1__23653_SHARP_){
if(cljs.core.not((visited__$3.cljs$core$IFn$_invoke$arity$1 ? visited__$3.cljs$core$IFn$_invoke$arity$1(p1__23653_SHARP_) : visited__$3.call(null,p1__23653_SHARP_)))){
return p1__23653_SHARP_;
} else {
return null;
}
});})(visited__$1,G__23668__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__23672,to_visit__$1,connections__$1,visited,G__23668,vec__23669,to_visit,connections))
,cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__23676 = visited__$3;
var G__23677 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(to_visit__$2,visiting,cljs.core.array_seq([next_visit], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__23676;
G__23668__$1 = G__23677;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23682){
var map__23683 = p__23682;
var map__23683__$1 = ((((!((map__23683 == null)))?((((map__23683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23683):map__23683);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.cst$kw$id);
var borders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.cst$kw$borders);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23683__$1,cljs.core.cst$kw$neighbors);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__23683,map__23683__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not((function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
var G__23685 = cljs.core.PersistentHashSet.fromArray([n,id], true);
return (removed_walls.cljs$core$IFn$_invoke$arity$1 ? removed_walls.cljs$core$IFn$_invoke$arity$1(G__23685) : removed_walls.call(null,G__23685));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__23683,map__23683__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23700,p__23701){
var vec__23702 = p__23700;
var vec__23705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23705,(1),null);
var vec__23708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23702,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23708,(1),null);
var vec__23711 = p__23701;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23711,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23711,(1),null);
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
my_mazes.core.transform_polylines = (function my_mazes$core$transform_polylines(f,polys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,f),polys);
});
my_mazes.core.draw_scene_BANG_ = (function my_mazes$core$draw_scene_BANG_(root,width,height,scene){
return thi.ng.domus.core.create_dom_BANG_(thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height], null),cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY),scene)], 0)),thi.ng.domus.core.clear_BANG_(root));
});
my_mazes.core.svg_polyline = (function my_mazes$core$svg_polyline(color,width,ps){
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke,color,cljs.core.cst$kw$stroke_DASH_width,width], null),cljs.core.array_seq([thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$1(ps)], 0));
});
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__23714,p__23715){
var vec__23722 = p__23714;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23722,(1),null);
var vec__23725 = p__23715;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23725,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23725,(1),null);
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
var vec__23734 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(0),null);
var xy0_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23734,(1),null);
var vec__23737 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(0),null);
var xy1_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23737,(1),null);
return my_mazes.core.less_than_xy_QMARK_(xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq(vs)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23744,v){
var vec__23745 = p__23744;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23745,(0),null);
var v_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23745,(1),null);
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
cljs.core.enable_console_print_BANG_();
if(typeof my_mazes.core.app_state !== 'undefined'){
} else {
my_mazes.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Similar to clojure.core/swap!, but records history and returns atom.
 */
my_mazes.core.swap_STAR__BANG_ = (function my_mazes$core$swap_STAR__BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___23751 = arguments.length;
var i__8606__auto___23752 = (0);
while(true){
if((i__8606__auto___23752 < len__8605__auto___23751)){
args__8612__auto__.push((arguments[i__8606__auto___23752]));

var G__23753 = (i__8606__auto___23752 + (1));
i__8606__auto___23752 = G__23753;
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

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq23748){
var G__23749 = cljs.core.first(seq23748);
var seq23748__$1 = cljs.core.next(seq23748);
var G__23750 = cljs.core.first(seq23748__$1);
var seq23748__$2 = cljs.core.next(seq23748__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23749,G__23750,seq23748__$2);
});

my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__23769 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__23769__$1 = ((((!((map__23769 == null)))?((((map__23769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23769):map__23769);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23769__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23769__$1,cljs.core.cst$kw$cols);
var bias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23769__$1,cljs.core.cst$kw$bias);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("bias: "),cljs.core.str(bias)].join('')], 0));
var scene = my_mazes.core.square_grid(cols,rows,(1));
var pen_width = (6);
var scene_bb = my_mazes.core.bounding_box(scene);
var vec__23770 = scene_bb;
var vec__23773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23770,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23773,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23773,(1),null);
var vec__23776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23770,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23776,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23776,(1),null);
var graph = my_mazes.core.scene__GT_graph(scene);
var bias_f = (function (){var pred__23780 = cljs.core._EQ_;
var expr__23781 = bias;
if(cljs.core.truth_((pred__23780.cljs$core$IFn$_invoke$arity$2 ? pred__23780.cljs$core$IFn$_invoke$arity$2("vertical",expr__23781) : pred__23780.call(null,"vertical",expr__23781)))){
return my_mazes.core.make_vertical_bias;
} else {
if(cljs.core.truth_((pred__23780.cljs$core$IFn$_invoke$arity$2 ? pred__23780.cljs$core$IFn$_invoke$arity$2("horizontal",expr__23781) : pred__23780.call(null,"horizontal",expr__23781)))){
return my_mazes.core.make_horizontal_bias;
} else {
if(cljs.core.truth_((pred__23780.cljs$core$IFn$_invoke$arity$2 ? pred__23780.cljs$core$IFn$_invoke$arity$2("T",expr__23781) : pred__23780.call(null,"T",expr__23781)))){
return my_mazes.core.make_T_bias;
} else {
return ((function (pred__23780,expr__23781,map__23769,map__23769__$1,rows,cols,bias,_,scene,pen_width,scene_bb,vec__23770,vec__23773,x_min,y_min,vec__23776,x_max,y_max,graph){
return (function (___$1){
return my_mazes.core.no_bias;
});
;})(pred__23780,expr__23781,map__23769,map__23769__$1,rows,cols,bias,_,scene,pen_width,scene_bb,vec__23770,vec__23773,x_min,y_min,vec__23776,x_max,y_max,graph))
}
}
}
})();
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$maze,my_mazes.core.remove_min(cljs.core.complement(my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min(my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines(cljs.core.vals(graph),my_mazes.core.remove_walls(graph,(0),(function (){var G__23783 = my_mazes.core.bounding_box(scene);
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__23783) : bias_f.call(null,G__23783));
})()))))], 0));
});
my_mazes.core.do_paint_BANG_ = (function my_mazes$core$do_paint_BANG_(){
var map__23797 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__23797__$1 = ((((!((map__23797 == null)))?((((map__23797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23797):map__23797);
var maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797__$1,cljs.core.cst$kw$maze);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797__$1,cljs.core.cst$kw$size);
var pen_width = (6);
var zoomed_maze = my_mazes.core.transform_polylines(((function (map__23797,map__23797__$1,maze,size,pen_width){
return (function (p1__23784_SHARP_){
return thi.ng.geom.core.scale(p1__23784_SHARP_,size);
});})(map__23797,map__23797__$1,maze,size,pen_width))
,maze);
var scene_bb = my_mazes.core.bounding_box(zoomed_maze);
var vec__23798 = scene_bb;
var vec__23801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23798,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23801,(1),null);
var vec__23804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23798,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23804,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23804,(1),null);
var w = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((x_max - x_min) + pen_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var h = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((y_max - y_min) + pen_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var paint_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id("maze"),w,h);
var _ = my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$dummy,null], 0));
var G__23808 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.svg_polyline,"#00F",pen_width),my_mazes.core.transform_polylines(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(my_mazes.core.barycenter(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)], null)),my_mazes.core.barycenter(scene_bb))),zoomed_maze));
return (paint_BANG_.cljs$core$IFn$_invoke$arity$1 ? paint_BANG_.cljs$core$IFn$_invoke$arity$1(G__23808) : paint_BANG_.call(null,G__23808));
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Done !"], 0));
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("%")].join('')], null),cljs.core.cst$kw$on_DASH_change,(function (e){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,(e.target.value | (0))], 0));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$size,param)){
my_mazes.core.update_maze_BANG_();
} else {
}

return my_mazes.core.do_paint_BANG_();
})], null)], null);
});
my_mazes.core.menu = (function my_mazes$core$menu(id,param,values){
var current = (function (){var G__23817 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
return (param.cljs$core$IFn$_invoke$arity$1 ? param.cljs$core$IFn$_invoke$arity$1(G__23817) : param.call(null,G__23817));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,current,cljs.core.cst$kw$name,current,cljs.core.cst$kw$value,current,cljs.core.cst$kw$on_DASH_change,((function (current){
return (function (p1__23809_SHARP_){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,p1__23809_SHARP_.target.value], 0));

my_mazes.core.update_maze_BANG_();

return my_mazes.core.do_paint_BANG_();
});})(current))
], null),(function (){var iter__8246__auto__ = ((function (current){
return (function my_mazes$core$menu_$_iter__23818(s__23819){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__23819__$1 = s__23819;
while(true){
var temp__6753__auto__ = cljs.core.seq(s__23819__$1);
if(temp__6753__auto__){
var s__23819__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23819__$2)){
var c__8244__auto__ = cljs.core.chunk_first(s__23819__$2);
var size__8245__auto__ = cljs.core.count(c__8244__auto__);
var b__23821 = cljs.core.chunk_buffer(size__8245__auto__);
if((function (){var i__23820 = (0);
while(true){
if((i__23820 < size__8245__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8244__auto__,i__23820);
cljs.core.chunk_append(b__23821,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)));

var G__23824 = (i__23820 + (1));
i__23820 = G__23824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23821),my_mazes$core$menu_$_iter__23818(cljs.core.chunk_rest(s__23819__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23821),null);
}
} else {
var v = cljs.core.first(s__23819__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,v], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,v], null)),my_mazes$core$menu_$_iter__23818(cljs.core.rest(s__23819__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$cols,cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(2),(100),(50)], null),"cols: ",cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$rows,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(2),(100),(50)], null),"rows : ",cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(10),(100),(50)], null),"size : ",cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),my_mazes.core.menu("Bias",cljs.core.cst$kw$bias,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unbiased","vertical","horizontal","T"], null))], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$size,(32),cljs.core.cst$kw$bias,"unbiased"], null)], 0));
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app();

var G__23827_23829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null);
var G__23828_23830 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__23827_23829,G__23828_23830) : reagent.core.render_component.call(null,G__23827_23829,G__23828_23830));

my_mazes.core.update_maze_BANG_();

return my_mazes.core.do_paint_BANG_();
});
my_mazes.core.main();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main called"], 0));
