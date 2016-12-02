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
return (function (p1__21830_SHARP_,p2__21829_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p2__21829_SHARP_,p1__21830_SHARP_) : f.call(null,p2__21829_SHARP_,p1__21830_SHARP_));
});
});
my_mazes.core.rotate = my_mazes.core.flip_2(thi.ng.geom.core.rotate);
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
cljs.core.chunk_append(b__21855,my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)));

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
return cljs.core.cons(my_mazes.core.square(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)),my_mazes$core$square_grid_$_iter__21850_$_iter__21852(cljs.core.rest(s__21853__$2)));
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
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count(xys)));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21863_SHARP_){
return cljs.core.with_meta(my_mazes.core.barycenter(p1__21863_SHARP_),cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter(seg);
return cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p__21869){
var vec__21870 = p__21869;
var id_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(0),null);
var b_t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_t,id);
if(and__7377__auto__){
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2(b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__21864_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta(p1__21864_SHARP_),cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(p1__21864_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__21873_SHARP_,p2__21874_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$id,cljs.core.cst$kw$borders],[p1__21873_SHARP_,p2__21874_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells(cells);
var indexed = cljs.core.zipmap(cljs.core.iterate(cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__21875_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p1__21875_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv(((function (cells,t,indexed,neighbors){
return (function (p1__21876_SHARP_,p2__21877_SHARP_,p3__21878_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21876_SHARP_,p2__21877_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p3__21878_SHARP_,cljs.core.cst$kw$neighbors,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.matching_seg,t,p2__21877_SHARP_),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(p3__21878_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,xs))){
var bias_s = (function (){var G__21896 = cljs.core.count(xs);
return (bias.cljs$core$IFn$_invoke$arity$1 ? bias.cljs$core$IFn$_invoke$arity$1(G__21896) : bias.call(null,G__21896));
})();
var vec__21893 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bias_s){
return (function (p__21897,p__21898){
var vec__21899 = p__21897;
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(3),null);
var last_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,(4),null);
var vec__21902 = p__21898;
var bias_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21902,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bias_non_nil,(bias_b - delta)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893,(0),null);
var xs_non_nil = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893,(1),null);
var nb_nils = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893,(2),null);
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21893,(3),null);
var bias_rescaled = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(1.0 / cljs.core.peek(bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.cljs$core$IFn$_invoke$arity$0();
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(xs_non_nil,cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (bias_s,vec__21893,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__21880_SHARP_,p2__21879_SHARP_){
if((p2__21879_SHARP_ > rnd)){
return p1__21880_SHARP_;
} else {
return null;
}
});})(bias_s,vec__21893,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__21906){
var vec__21910 = p__21906;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,(1),null);
return ((function (vec__21910,x,y){
return (function (p1__21905_SHARP_){
var delta = (1.0 / p1__21905_SHARP_);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(p1__21905_SHARP_,cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,delta),delta));
});
;})(vec__21910,x,y))
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
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__21913){
var vec__21927 = p__21913;
var vec__21930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930,(1),null);
var vec__21933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21933,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias(((function (w,vec__21927,vec__21930,x_min,y_min,vec__21933,x_max,y_max){
return (function (p__21936){
var vec__21937 = p__21936;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21937,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21937,(1),null);
return (x / w);
});})(w,vec__21927,vec__21930,x_min,y_min,vec__21933,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__21940){
var vec__21954 = p__21940;
var vec__21957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21954,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21957,(1),null);
var vec__21960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21954,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias(((function (y_T,x_d,x_center,vec__21954,vec__21957,x_min,y_min,vec__21960,x_max,y_max){
return (function (p__21963){
var vec__21964 = p__21963;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs((x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__21954,vec__21957,x_min,y_min,vec__21960,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(indexed_cells,id_start,bias_f){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__21982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__21983 = G__21982;
var to_visit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(0),null);
var connections = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21983,(1),null);
var visited__$1 = visited;
var G__21982__$1 = G__21982;
while(true){
var visited__$2 = visited__$1;
var vec__21986 = G__21982__$1;
var to_visit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(0),null);
var connections__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21986,(1),null);
if(cljs.core.empty_QMARK_(to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek(to_visit__$1);
var visiting_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop(to_visit__$1);
var visited__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil((function (){var G__21989 = my_mazes.core.barycenter(cljs.core.cst$kw$borders.cljs$core$IFn$_invoke$arity$1(visiting_cell));
return (bias_f.cljs$core$IFn$_invoke$arity$1 ? bias_f.cljs$core$IFn$_invoke$arity$1(G__21989) : bias_f.call(null,G__21989));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (visited__$1,G__21982__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__21986,to_visit__$1,connections__$1,visited,G__21982,vec__21983,to_visit,connections){
return (function (p1__21967_SHARP_){
if(cljs.core.not((visited__$3.cljs$core$IFn$_invoke$arity$1 ? visited__$3.cljs$core$IFn$_invoke$arity$1(p1__21967_SHARP_) : visited__$3.call(null,p1__21967_SHARP_)))){
return p1__21967_SHARP_;
} else {
return null;
}
});})(visited__$1,G__21982__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__21986,to_visit__$1,connections__$1,visited,G__21982,vec__21983,to_visit,connections))
,cljs.core.cst$kw$neighbors.cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__21990 = visited__$3;
var G__21991 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(to_visit__$2,visiting,cljs.core.array_seq([next_visit], 0)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__21990;
G__21982__$1 = G__21991;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21996){
var map__21997 = p__21996;
var map__21997__$1 = ((((!((map__21997 == null)))?((((map__21997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21997):map__21997);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21997__$1,cljs.core.cst$kw$id);
var borders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21997__$1,cljs.core.cst$kw$borders);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21997__$1,cljs.core.cst$kw$neighbors);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__21997,map__21997__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not((function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
var G__21999 = cljs.core.PersistentHashSet.fromArray([n,id], true);
return (removed_walls.cljs$core$IFn$_invoke$arity$1 ? removed_walls.cljs$core$IFn$_invoke$arity$1(G__21999) : removed_walls.call(null,G__21999));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__21997,map__21997__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22014,p__22015){
var vec__22016 = p__22014;
var vec__22019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22019,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22019,(1),null);
var vec__22022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22016,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22022,(1),null);
var vec__22025 = p__22015;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22025,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__22028,p__22029){
var vec__22036 = p__22028;
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(0),null);
var y0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,(1),null);
var vec__22039 = p__22029;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22039,(1),null);
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
var vec__22048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(0),null);
var xy0_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(1),null);
var vec__22051 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22051,(0),null);
var xy1_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22051,(1),null);
return my_mazes.core.less_than_xy_QMARK_(xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq(vs)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__22058,v){
var vec__22059 = p__22058;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,(0),null);
var v_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,(1),null);
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
my_mazes.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$update_DASH_maze,true], null));
}
/**
 * Similar to clojure.core/swap!, but records history and returns atom.
 */
my_mazes.core.swap_STAR__BANG_ = (function my_mazes$core$swap_STAR__BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___22065 = arguments.length;
var i__8606__auto___22066 = (0);
while(true){
if((i__8606__auto___22066 < len__8605__auto___22065)){
args__8612__auto__.push((arguments[i__8606__auto___22066]));

var G__22067 = (i__8606__auto___22066 + (1));
i__8606__auto___22066 = G__22067;
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

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq22062){
var G__22063 = cljs.core.first(seq22062);
var seq22062__$1 = cljs.core.next(seq22062);
var G__22064 = cljs.core.first(seq22062__$1);
var seq22062__$2 = cljs.core.next(seq22062__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22063,G__22064,seq22062__$2);
});

my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__22079 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22079__$1 = ((((!((map__22079 == null)))?((((map__22079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22079):map__22079);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22079__$1,cljs.core.cst$kw$rows);
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22079__$1,cljs.core.cst$kw$cols);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["update !"], 0));
var scene = my_mazes.core.square_grid(cols,rows,(1));
var pen_width = (6);
var scene_bb = my_mazes.core.bounding_box(scene);
var vec__22080 = scene_bb;
var vec__22083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22083,(1),null);
var vec__22086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22086,(1),null);
var graph = my_mazes.core.scene__GT_graph(scene);
if(cljs.core.truth_(cljs.core.cst$kw$update_DASH_maze.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))))){
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$maze,my_mazes.core.remove_min(cljs.core.complement(my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min(my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines(cljs.core.vals(graph),my_mazes.core.remove_walls(graph,(0),my_mazes.core.make_T_bias(my_mazes.core.bounding_box(scene))))))], 0));
} else {
return null;
}
});
my_mazes.core.do_paint_BANG_ = (function my_mazes$core$do_paint_BANG_(){
var map__22103 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state));
var map__22103__$1 = ((((!((map__22103 == null)))?((((map__22103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22103.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22103):map__22103);
var maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.cst$kw$maze);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.cst$kw$size);
var update_maze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22103__$1,cljs.core.cst$kw$update_DASH_maze);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("paint! "),cljs.core.str(update_maze)].join('')], 0));
var ___$1 = (cljs.core.truth_(update_maze)?my_mazes.core.update_maze_BANG_():null);
var pen_width = (6);
var zoomed_maze = my_mazes.core.transform_polylines(((function (map__22103,map__22103__$1,maze,size,update_maze,_,___$1,pen_width){
return (function (p1__22090_SHARP_){
return thi.ng.geom.core.scale(p1__22090_SHARP_,size);
});})(map__22103,map__22103__$1,maze,size,update_maze,_,___$1,pen_width))
,maze);
var scene_bb = my_mazes.core.bounding_box(zoomed_maze);
var vec__22104 = scene_bb;
var vec__22107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(0),null);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22107,(1),null);
var vec__22110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22104,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(0),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,(1),null);
var w = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((x_max - x_min) + pen_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var h = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((y_max - y_min) + pen_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var paint_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id("maze"),w,h);
var ___$2 = my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([cljs.core.cst$kw$dummy,null], 0));
var G__22114 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(my_mazes.core.svg_polyline,"#00F",pen_width),my_mazes.core.transform_polylines(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core._PLUS_,thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2(my_mazes.core.barycenter(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)),thi.ng.geom.vector.vec2.cljs$core$IFn$_invoke$arity$2(w,h)], null)),my_mazes.core.barycenter(scene_bb))),zoomed_maze));
return (paint_BANG_.cljs$core$IFn$_invoke$arity$1 ? paint_BANG_.cljs$core$IFn$_invoke$arity$1(G__22114) : paint_BANG_.call(null,G__22114));
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Done !"], 0));
my_mazes.core.error_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
my_mazes.core.set_error_BANG_ = (function my_mazes$core$set_error_BANG_(err){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(my_mazes.core.error_state,err) : cljs.core.reset_BANG_.call(null,my_mazes.core.error_state,err));

if(cljs.core.truth_(err)){
var G__22117 = (function (){
return (my_mazes.core.set_error_BANG_.cljs$core$IFn$_invoke$arity$1 ? my_mazes.core.set_error_BANG_.cljs$core$IFn$_invoke$arity$1(null) : my_mazes.core.set_error_BANG_.call(null,null));
});
var G__22118 = (1000);
return setTimeout(G__22117,G__22118);
} else {
return null;
}
});
/**
 * Component displaying current error message
 */
my_mazes.core.user_error = (function my_mazes$core$user_error(){
var temp__6753__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.error_state) : cljs.core.deref.call(null,my_mazes.core.error_state));
if(cljs.core.truth_(temp__6753__auto__)){
var err = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background,"red",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$color,"white"], null)], null),err], null);
} else {
return null;
}
});
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width,update_maze){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,"range",cljs.core.cst$kw$value,value,cljs.core.cst$kw$min,min,cljs.core.cst$kw$max,max,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str(width),cljs.core.str("%")].join('')], null),cljs.core.cst$kw$on_DASH_change,(function (e){
my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.assoc,cljs.core.array_seq([param,(e.target.value | (0)),cljs.core.cst$kw$update_DASH_maze,update_maze], 0));

return my_mazes.core.do_paint_BANG_();
})], null)], null);
});
/**
 * Application root component
 */
my_mazes.core.main_panel = (function my_mazes$core$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.user_error], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$cols,cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(2),(40),(50),true], null),"cols: ",cljs.core.cst$kw$cols.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$rows,cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(2),(40),(50),true], null),"rows : ",cljs.core.cst$kw$rows.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,cljs.core.cst$kw$size,cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state))),(10),(100),(50),false], null),"size : ",cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(my_mazes.core.app_state) : cljs.core.deref.call(null,my_mazes.core.app_state)))], null)], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(my_mazes.core.app_state,cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cols,(2),cljs.core.cst$kw$rows,(2),cljs.core.cst$kw$size,(32)], null)], 0));
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app();

var G__22121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null);
var G__22122 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__22121,G__22122) : reagent.core.render_component.call(null,G__22121,G__22122));
});
my_mazes.core.main();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["main called"], 0));
