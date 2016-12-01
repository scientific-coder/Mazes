// Compiled by ClojureScript 1.9.293 {}
goog.provide('my_mazes.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.matrix');
goog.require('kdtree');
goog.require('thi.ng.domus.core');
goog.require('thi.ng.geom.core');
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
return (function (p1__30196_SHARP_,p2__30195_SHARP_){
return f.call(null,p2__30195_SHARP_,p1__30196_SHARP_);
});
});
my_mazes.core.rotate = my_mazes.core.flip_2.call(null,thi.ng.geom.core.rotate);
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.call(null,(n + (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.call(null,1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__30198,r){
var vec__30202 = p__30198;
var x = cljs.core.nth.call(null,vec__30202,(0),null);
var y = cljs.core.nth.call(null,vec__30202,(1),null);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.call(null,x,y)),((function (vec__30202,x,y){
return (function (p1__30197_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__30197_SHARP_,r);
});})(vec__30202,x,y))
,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon.call(null,(4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__30211(s__30212){
return (new cljs.core.LazySeq(null,(function (){
var s__30212__$1 = s__30212;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__30212__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__30212__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__30211_$_iter__30213(s__30214){
return (new cljs.core.LazySeq(null,((function (s__30212__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__30214__$1 = s__30214;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__30214__$1);
if(temp__6753__auto____$1){
var s__30214__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30214__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__30214__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__30216 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__30215 = (0);
while(true){
if((i__30215 < size__8245__auto__)){
var c = cljs.core._nth.call(null,c__8244__auto__,i__30215);
cljs.core.chunk_append.call(null,b__30216,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)));

var G__30217 = (i__30215 + (1));
i__30215 = G__30217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30216),my_mazes$core$square_grid_$_iter__30211_$_iter__30213.call(null,cljs.core.chunk_rest.call(null,s__30214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30216),null);
}
} else {
var c = cljs.core.first.call(null,s__30214__$2);
return cljs.core.cons.call(null,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)),my_mazes$core$square_grid_$_iter__30211_$_iter__30213.call(null,cljs.core.rest.call(null,s__30214__$2)));
}
} else {
return null;
}
break;
}
});})(s__30212__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__30212__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq.call(null,iterys__8242__auto__.call(null,cljs.core.range.call(null,n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.call(null,fs__8243__auto__,my_mazes$core$square_grid_$_iter__30211.call(null,cljs.core.rest.call(null,s__30212__$1)));
} else {
var G__30218 = cljs.core.rest.call(null,s__30212__$1);
s__30212__$1 = G__30218;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8246__auto__.call(null,cljs.core.range.call(null,n_rows));
});
my_mazes.core.scene__GT_graphB = (function my_mazes$core$scene__GT_graphB(polys){
var cells = cljs.core.map_indexed.call(null,(function (p1__30219_SHARP_,p2__30220_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"borders","borders",-2120100848)],[p1__30219_SHARP_,p2__30220_SHARP_]);
}),polys);
var indexed = cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,(0)),cells);
var with_matching_seg = ((function (cells,indexed){
return (function (p__30230,cell){
var vec__30231 = p__30230;
var xy0 = cljs.core.nth.call(null,vec__30231,(0),null);
var xy1 = cljs.core.nth.call(null,vec__30231,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__30231,xy0,xy1,cells,indexed){
return (function (p1__30221_SHARP_){
var or__7389__auto__ = thi.ng.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy0,xy1], null),p1__30221_SHARP_);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy1,xy0], null),p1__30221_SHARP_);
}
});})(vec__30231,xy0,xy1,cells,indexed))
,cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(cell))))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell);
} else {
return null;
}
});})(cells,indexed))
;
var matching_cell = ((function (cells,indexed,with_matching_seg){
return (function (id,xy0_xy1){
return cljs.core.some.call(null,cljs.core.partial.call(null,with_matching_seg,xy0_xy1),cljs.core.vals.call(null,cljs.core.dissoc.call(null,indexed,id)));
});})(cells,indexed,with_matching_seg))
;
var neighbors = ((function (cells,indexed,with_matching_seg,matching_cell){
return (function (p1__30222_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,matching_cell,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30222_SHARP_)),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p1__30222_SHARP_)));
});})(cells,indexed,with_matching_seg,matching_cell))
;
return cljs.core.reduce_kv.call(null,((function (cells,indexed,with_matching_seg,matching_cell,neighbors){
return (function (p1__30223_SHARP_,p2__30224_SHARP_,p3__30225_SHARP_){
return cljs.core.assoc.call(null,p1__30223_SHARP_,p2__30224_SHARP_,cljs.core.assoc.call(null,p3__30225_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),neighbors.call(null,p3__30225_SHARP_)));
});})(cells,indexed,with_matching_seg,matching_cell,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale.call(null,cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count.call(null,xys)));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.call(null,(function (p1__30234_SHARP_){
return cljs.core.with_meta.call(null,my_mazes.core.barycenter.call(null,p1__30234_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree.call(null,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter.call(null,seg);
return cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (b){
return (function (p__30240){
var vec__30241 = p__30240;
var id_t = cljs.core.nth.call(null,vec__30241,(0),null);
var b_t = cljs.core.nth.call(null,vec__30241,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.call(null,id_t,id);
if(and__7377__auto__){
return thi.ng.math.core.delta_EQ_.call(null,b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.call(null,((function (b){
return (function (p1__30235_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta.call(null,p1__30235_SHARP_),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p1__30235_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.call(null,t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.call(null,(function (p1__30244_SHARP_,p2__30245_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"borders","borders",-2120100848)],[p1__30244_SHARP_,p2__30245_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells.call(null,cells);
var indexed = cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__30246_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p1__30246_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv.call(null,((function (cells,t,indexed,neighbors){
return (function (p1__30247_SHARP_,p2__30248_SHARP_,p3__30249_SHARP_){
return cljs.core.assoc.call(null,p1__30247_SHARP_,p2__30248_SHARP_,cljs.core.assoc.call(null,p3__30249_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.matching_seg,t,p2__30248_SHARP_),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p3__30249_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,xs))){
var bias_s = bias.call(null,cljs.core.count.call(null,xs));
var vec__30263 = cljs.core.reduce.call(null,((function (bias_s){
return (function (p__30266,p__30267){
var vec__30268 = p__30266;
var bias_non_nil = cljs.core.nth.call(null,vec__30268,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__30268,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__30268,(2),null);
var delta = cljs.core.nth.call(null,vec__30268,(3),null);
var last_b = cljs.core.nth.call(null,vec__30268,(4),null);
var vec__30271 = p__30267;
var bias_b = cljs.core.nth.call(null,vec__30271,(0),null);
var v = cljs.core.nth.call(null,vec__30271,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,bias_non_nil,(bias_b - delta)),cljs.core.conj.call(null,xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.call(null,cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.call(null,vec__30263,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__30263,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__30263,(2),null);
var delta = cljs.core.nth.call(null,vec__30263,(3),null);
var bias_rescaled = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(1.0 / cljs.core.peek.call(null,bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.call(null);
return cljs.core.nth.call(null,xs_non_nil,cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (bias_s,vec__30263,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__30251_SHARP_,p2__30250_SHARP_){
if((p2__30250_SHARP_ > rnd)){
return p1__30251_SHARP_;
} else {
return null;
}
});})(bias_s,vec__30263,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__30275){
var vec__30279 = p__30275;
var x = cljs.core.nth.call(null,vec__30279,(0),null);
var y = cljs.core.nth.call(null,vec__30279,(1),null);
return ((function (vec__30279,x,y){
return (function (p1__30274_SHARP_){
var delta = (1.0 / p1__30274_SHARP_);
return cljs.core.take.call(null,p1__30274_SHARP_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,delta),delta));
});
;})(vec__30279,x,y))
});
my_mazes.core.alternate_bias = (function my_mazes$core$alternate_bias(f){
return (function (xy){
return (function (n){
var n_v0 = cljs.core.quot.call(null,n,(2));
var n_v1 = (n - n_v0);
var delta = f.call(null,xy);
return cljs.core.reductions.call(null,cljs.core._PLUS_,cljs.core.take.call(null,n,cljs.core.interleave.call(null,cljs.core.repeat.call(null,(delta / n_v0)),cljs.core.repeat.call(null,((1.0 - delta) / n_v1)))));
});
});
});
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__30282){
var vec__30296 = p__30282;
var vec__30299 = cljs.core.nth.call(null,vec__30296,(0),null);
var x_min = cljs.core.nth.call(null,vec__30299,(0),null);
var y_min = cljs.core.nth.call(null,vec__30299,(1),null);
var vec__30302 = cljs.core.nth.call(null,vec__30296,(1),null);
var x_max = cljs.core.nth.call(null,vec__30302,(0),null);
var y_max = cljs.core.nth.call(null,vec__30302,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias.call(null,((function (w,vec__30296,vec__30299,x_min,y_min,vec__30302,x_max,y_max){
return (function (p__30305){
var vec__30306 = p__30305;
var x = cljs.core.nth.call(null,vec__30306,(0),null);
var y = cljs.core.nth.call(null,vec__30306,(1),null);
return (x / w);
});})(w,vec__30296,vec__30299,x_min,y_min,vec__30302,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__30309){
var vec__30323 = p__30309;
var vec__30326 = cljs.core.nth.call(null,vec__30323,(0),null);
var x_min = cljs.core.nth.call(null,vec__30326,(0),null);
var y_min = cljs.core.nth.call(null,vec__30326,(1),null);
var vec__30329 = cljs.core.nth.call(null,vec__30323,(1),null);
var x_max = cljs.core.nth.call(null,vec__30329,(0),null);
var y_max = cljs.core.nth.call(null,vec__30329,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias.call(null,((function (y_T,x_d,x_center,vec__30323,vec__30326,x_min,y_min,vec__30329,x_max,y_max){
return (function (p__30332){
var vec__30333 = p__30332;
var x = cljs.core.nth.call(null,vec__30333,(0),null);
var y = cljs.core.nth.call(null,vec__30333,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs.call(null,(x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__30323,vec__30326,x_min,y_min,vec__30329,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(indexed_cells,id_start,bias_f){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__30350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__30351 = G__30350;
var to_visit = cljs.core.nth.call(null,vec__30351,(0),null);
var connections = cljs.core.nth.call(null,vec__30351,(1),null);
var visited__$1 = visited;
var G__30350__$1 = G__30350;
while(true){
var visited__$2 = visited__$1;
var vec__30354 = G__30350__$1;
var to_visit__$1 = cljs.core.nth.call(null,vec__30354,(0),null);
var connections__$1 = cljs.core.nth.call(null,vec__30354,(1),null);
if(cljs.core.empty_QMARK_.call(null,to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek.call(null,to_visit__$1);
var visiting_cell = cljs.core.get.call(null,indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop.call(null,to_visit__$1);
var visited__$3 = cljs.core.conj.call(null,visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil.call(null,bias_f.call(null,my_mazes.core.barycenter.call(null,new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(visiting_cell))),cljs.core.map.call(null,((function (visited__$1,G__30350__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__30354,to_visit__$1,connections__$1,visited,G__30350,vec__30351,to_visit,connections){
return (function (p1__30336_SHARP_){
if(cljs.core.not.call(null,visited__$3.call(null,p1__30336_SHARP_))){
return p1__30336_SHARP_;
} else {
return null;
}
});})(visited__$1,G__30350__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__30354,to_visit__$1,connections__$1,visited,G__30350,vec__30351,to_visit,connections))
,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__30357 = visited__$3;
var G__30358 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,to_visit__$2,visiting,next_visit),cljs.core.conj.call(null,connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__30357;
G__30350__$1 = G__30358;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__30362){
var map__30363 = p__30362;
var map__30363__$1 = ((((!((map__30363 == null)))?((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var id = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var borders = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"borders","borders",-2120100848));
var neighbors = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (map__30363,map__30363__$1,id,borders,neighbors){
return (function (n,s){
if(cljs.core.not.call(null,(function (){var and__7377__auto__ = n;
if(cljs.core.truth_(and__7377__auto__)){
return removed_walls.call(null,cljs.core.PersistentHashSet.fromArray([n,id], true));
} else {
return and__7377__auto__;
}
})())){
return s;
} else {
return null;
}
});})(map__30363,map__30363__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.call(null,(2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.call(null,(function (p__30379,p__30380){
var vec__30381 = p__30379;
var vec__30384 = cljs.core.nth.call(null,vec__30381,(0),null);
var x_min = cljs.core.nth.call(null,vec__30384,(0),null);
var y_min = cljs.core.nth.call(null,vec__30384,(1),null);
var vec__30387 = cljs.core.nth.call(null,vec__30381,(1),null);
var x_max = cljs.core.nth.call(null,vec__30387,(0),null);
var y_max = cljs.core.nth.call(null,vec__30387,(1),null);
var vec__30390 = p__30380;
var x = cljs.core.nth.call(null,vec__30390,(0),null);
var y = cljs.core.nth.call(null,vec__30390,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,(function (){var x__7729__auto__ = x_min;
var y__7730__auto__ = x;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})(),(function (){var x__7729__auto__ = y_min;
var y__7730__auto__ = y;
return ((x__7729__auto__ < y__7730__auto__) ? x__7729__auto__ : y__7730__auto__);
})()),thi.ng.geom.vector.vec2.call(null,(function (){var x__7722__auto__ = x_max;
var y__7723__auto__ = x;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})(),(function (){var x__7722__auto__ = y_max;
var y__7723__auto__ = y;
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})())], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_PLUS_,thi.ng.math.core.INF_PLUS_),thi.ng.geom.vector.vec2.call(null,thi.ng.math.core.INF_,thi.ng.math.core.INF_)], null),cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,polylines));
});
my_mazes.core.transform_polylines = (function my_mazes$core$transform_polylines(f,polys){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,f),polys);
});
my_mazes.core.draw_scene_BANG_ = (function my_mazes$core$draw_scene_BANG_(root,width,height,scene){
return thi.ng.domus.core.create_dom_BANG_.call(null,thi.ng.geom.svg.core.svg.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),cljs.core.apply.call(null,cljs.core.partial.call(null,thi.ng.geom.svg.core.group,cljs.core.PersistentArrayMap.EMPTY),scene)),thi.ng.domus.core.clear_BANG_.call(null,root));
});
my_mazes.core.svg_polyline = (function my_mazes$core$svg_polyline(color,width,ps){
return thi.ng.geom.svg.core.group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),width], null),thi.ng.geom.svg.core.line_strip.call(null,ps));
});
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__30393,p__30394){
var vec__30401 = p__30393;
var x0 = cljs.core.nth.call(null,vec__30401,(0),null);
var y0 = cljs.core.nth.call(null,vec__30401,(1),null);
var vec__30404 = p__30394;
var x1 = cljs.core.nth.call(null,vec__30404,(0),null);
var y1 = cljs.core.nth.call(null,vec__30404,(1),null);
return ((x0 < x1)) || ((cljs.core._EQ_.call(null,x0,x1)) && ((y0 < y1)));
});
my_mazes.core.order_seg = (function my_mazes$core$order_seg(xy0,xy1){
if(cljs.core.truth_(my_mazes.core.less_than_xy_QMARK_.call(null,xy0,xy1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy0,xy1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy1,xy0], null);
}
});
my_mazes.core.less_than_seg_QMARK_ = (function my_mazes$core$less_than_seg_QMARK_(s0,s1){
var vec__30413 = cljs.core.apply.call(null,my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.call(null,vec__30413,(0),null);
var xy0_1 = cljs.core.nth.call(null,vec__30413,(1),null);
var vec__30416 = cljs.core.apply.call(null,my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.call(null,vec__30416,(0),null);
var xy1_1 = cljs.core.nth.call(null,vec__30416,(1),null);
return my_mazes.core.less_than_xy_QMARK_.call(null,xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq.call(null,vs)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__30423,v){
var vec__30424 = p__30423;
var res = cljs.core.nth.call(null,vec__30424,(0),null);
var v_min = cljs.core.nth.call(null,vec__30424,(1),null);
if(cljs.core.truth_(lt.call(null,v,v_min))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,res,v_min),v], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,res,v),v_min], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,vs)], null),cljs.core.rest.call(null,vs)));
} else {
return null;
}
});
cljs.core.enable_console_print_BANG_.call(null);
my_mazes.core.w = (1024);
my_mazes.core.h = (1024);
my_mazes.core.paint_BANG_ = cljs.core.partial.call(null,my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id.call(null,"app"),my_mazes.core.w,my_mazes.core.h);
my_mazes.core.test_scene = my_mazes.core.square_grid.call(null,(20),(20),(32));
my_mazes.core.scene_bb = my_mazes.core.bounding_box.call(null,my_mazes.core.test_scene);
my_mazes.core.start_time = (new Date()).getTime();
my_mazes.core.test_graph = my_mazes.core.scene__GT_graph.call(null,my_mazes.core.test_scene);
cljs.core.println.call(null,((new Date()).getTime() - my_mazes.core.start_time));
my_mazes.core.test_rw = my_mazes.core.remove_walls.call(null,my_mazes.core.test_graph,(0),my_mazes.core.make_T_bias.call(null,my_mazes.core.scene_bb));
my_mazes.core.test_maze = my_mazes.core.maze__GT_polylines.call(null,cljs.core.vals.call(null,my_mazes.core.test_graph),my_mazes.core.test_rw);
my_mazes.core.paint_BANG_.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.svg_polyline,"#00F",(5)),my_mazes.core.remove_min.call(null,cljs.core.complement.call(null,my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min.call(null,my_mazes.core.less_than_seg_QMARK_,my_mazes.core.transform_polylines.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.math.core._.call(null,my_mazes.core.barycenter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,(0),(0)),thi.ng.geom.vector.vec2.call(null,my_mazes.core.w,my_mazes.core.h)], null)),my_mazes.core.barycenter.call(null,my_mazes.core.scene_bb))),my_mazes.core.test_maze)))));
cljs.core.println.call(null,"Done !");
if(typeof my_mazes.core.state !== 'undefined'){
} else {
my_mazes.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

//# sourceMappingURL=core.js.map