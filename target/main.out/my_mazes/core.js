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
return (function (p1__15785_SHARP_,p2__15784_SHARP_){
return f.call(null,p2__15784_SHARP_,p1__15785_SHARP_);
});
});
my_mazes.core.rotate = my_mazes.core.flip_2.call(null,thi.ng.geom.core.rotate);
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.call(null,(n + (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.call(null,1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__15787,r){
var vec__15791 = p__15787;
var x = cljs.core.nth.call(null,vec__15791,(0),null);
var y = cljs.core.nth.call(null,vec__15791,(1),null);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.call(null,x,y)),((function (vec__15791,x,y){
return (function (p1__15786_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__15786_SHARP_,r);
});})(vec__15791,x,y))
,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon.call(null,(4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__15800(s__15801){
return (new cljs.core.LazySeq(null,(function (){
var s__15801__$1 = s__15801;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__15801__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__15801__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__15800_$_iter__15802(s__15803){
return (new cljs.core.LazySeq(null,((function (s__15801__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__15803__$1 = s__15803;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__15803__$1);
if(temp__6753__auto____$1){
var s__15803__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15803__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__15803__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__15805 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__15804 = (0);
while(true){
if((i__15804 < size__8245__auto__)){
var c = cljs.core._nth.call(null,c__8244__auto__,i__15804);
cljs.core.chunk_append.call(null,b__15805,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)));

var G__15806 = (i__15804 + (1));
i__15804 = G__15806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15805),my_mazes$core$square_grid_$_iter__15800_$_iter__15802.call(null,cljs.core.chunk_rest.call(null,s__15803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15805),null);
}
} else {
var c = cljs.core.first.call(null,s__15803__$2);
return cljs.core.cons.call(null,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)),my_mazes$core$square_grid_$_iter__15800_$_iter__15802.call(null,cljs.core.rest.call(null,s__15803__$2)));
}
} else {
return null;
}
break;
}
});})(s__15801__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__15801__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq.call(null,iterys__8242__auto__.call(null,cljs.core.range.call(null,n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.call(null,fs__8243__auto__,my_mazes$core$square_grid_$_iter__15800.call(null,cljs.core.rest.call(null,s__15801__$1)));
} else {
var G__15807 = cljs.core.rest.call(null,s__15801__$1);
s__15801__$1 = G__15807;
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
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.call(null,(function (p1__15808_SHARP_,p2__15809_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"borders","borders",-2120100848)],[p1__15808_SHARP_,p2__15809_SHARP_]);
}),polys);
var indexed = cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,(0)),cells);
var with_matching_seg = ((function (cells,indexed){
return (function (p__15819,cell){
var vec__15820 = p__15819;
var xy0 = cljs.core.nth.call(null,vec__15820,(0),null);
var xy1 = cljs.core.nth.call(null,vec__15820,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,((function (vec__15820,xy0,xy1,cells,indexed){
return (function (p1__15810_SHARP_){
var or__7389__auto__ = thi.ng.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy0,xy1], null),p1__15810_SHARP_);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return thi.ng.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xy1,xy0], null),p1__15810_SHARP_);
}
});})(vec__15820,xy0,xy1,cells,indexed))
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
return (function (p1__15811_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,matching_cell,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__15811_SHARP_)),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p1__15811_SHARP_)));
});})(cells,indexed,with_matching_seg,matching_cell))
;
return cljs.core.reduce_kv.call(null,((function (cells,indexed,with_matching_seg,matching_cell,neighbors){
return (function (p1__15812_SHARP_,p2__15813_SHARP_,p3__15814_SHARP_){
return cljs.core.assoc.call(null,p1__15812_SHARP_,p2__15813_SHARP_,cljs.core.assoc.call(null,p3__15814_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),neighbors.call(null,p3__15814_SHARP_)));
});})(cells,indexed,with_matching_seg,matching_cell,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,xs))){
var bias_s = bias.call(null,cljs.core.count.call(null,xs));
var vec__15836 = cljs.core.reduce.call(null,((function (bias_s){
return (function (p__15839,p__15840){
var vec__15841 = p__15839;
var bias_non_nil = cljs.core.nth.call(null,vec__15841,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__15841,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__15841,(2),null);
var delta = cljs.core.nth.call(null,vec__15841,(3),null);
var last_b = cljs.core.nth.call(null,vec__15841,(4),null);
var vec__15844 = p__15840;
var bias_b = cljs.core.nth.call(null,vec__15844,(0),null);
var v = cljs.core.nth.call(null,vec__15844,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,bias_non_nil,(bias_b - delta)),cljs.core.conj.call(null,xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.call(null,cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.call(null,vec__15836,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__15836,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__15836,(2),null);
var delta = cljs.core.nth.call(null,vec__15836,(3),null);
var bias_rescaled = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(1.0 / cljs.core.peek.call(null,bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.call(null);
return cljs.core.nth.call(null,xs_non_nil,cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (bias_s,vec__15836,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__15824_SHARP_,p2__15823_SHARP_){
if((p2__15823_SHARP_ > rnd)){
return p1__15824_SHARP_;
} else {
return null;
}
});})(bias_s,vec__15836,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__15848){
var vec__15852 = p__15848;
var x = cljs.core.nth.call(null,vec__15852,(0),null);
var y = cljs.core.nth.call(null,vec__15852,(1),null);
return ((function (vec__15852,x,y){
return (function (p1__15847_SHARP_){
var delta = (1.0 / p1__15847_SHARP_);
return cljs.core.take.call(null,p1__15847_SHARP_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,delta),delta));
});
;})(vec__15852,x,y))
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
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__15855){
var vec__15869 = p__15855;
var vec__15872 = cljs.core.nth.call(null,vec__15869,(0),null);
var x_min = cljs.core.nth.call(null,vec__15872,(0),null);
var y_min = cljs.core.nth.call(null,vec__15872,(1),null);
var vec__15875 = cljs.core.nth.call(null,vec__15869,(1),null);
var x_max = cljs.core.nth.call(null,vec__15875,(0),null);
var y_max = cljs.core.nth.call(null,vec__15875,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias.call(null,((function (w,vec__15869,vec__15872,x_min,y_min,vec__15875,x_max,y_max){
return (function (p__15878){
var vec__15879 = p__15878;
var x = cljs.core.nth.call(null,vec__15879,(0),null);
var y = cljs.core.nth.call(null,vec__15879,(1),null);
return (x / w);
});})(w,vec__15869,vec__15872,x_min,y_min,vec__15875,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__15882){
var vec__15896 = p__15882;
var vec__15899 = cljs.core.nth.call(null,vec__15896,(0),null);
var x_min = cljs.core.nth.call(null,vec__15899,(0),null);
var y_min = cljs.core.nth.call(null,vec__15899,(1),null);
var vec__15902 = cljs.core.nth.call(null,vec__15896,(1),null);
var x_max = cljs.core.nth.call(null,vec__15902,(0),null);
var y_max = cljs.core.nth.call(null,vec__15902,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias.call(null,((function (y_T,x_d,x_center,vec__15896,vec__15899,x_min,y_min,vec__15902,x_max,y_max){
return (function (p__15905){
var vec__15906 = p__15905;
var x = cljs.core.nth.call(null,vec__15906,(0),null);
var y = cljs.core.nth.call(null,vec__15906,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs.call(null,(x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__15896,vec__15899,x_min,y_min,vec__15902,x_max,y_max))
);
});
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale.call(null,cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count.call(null,xys)));
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(indexed_cells,id_start,bias_f){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__15923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__15924 = G__15923;
var to_visit = cljs.core.nth.call(null,vec__15924,(0),null);
var connections = cljs.core.nth.call(null,vec__15924,(1),null);
var visited__$1 = visited;
var G__15923__$1 = G__15923;
while(true){
var visited__$2 = visited__$1;
var vec__15927 = G__15923__$1;
var to_visit__$1 = cljs.core.nth.call(null,vec__15927,(0),null);
var connections__$1 = cljs.core.nth.call(null,vec__15927,(1),null);
if(cljs.core.empty_QMARK_.call(null,to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek.call(null,to_visit__$1);
var visiting_cell = cljs.core.get.call(null,indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop.call(null,to_visit__$1);
var visited__$3 = cljs.core.conj.call(null,visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil.call(null,bias_f.call(null,my_mazes.core.barycenter.call(null,new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(visiting_cell))),cljs.core.map.call(null,((function (visited__$1,G__15923__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__15927,to_visit__$1,connections__$1,visited,G__15923,vec__15924,to_visit,connections){
return (function (p1__15909_SHARP_){
if(cljs.core.not.call(null,visited__$3.call(null,p1__15909_SHARP_))){
return p1__15909_SHARP_;
} else {
return null;
}
});})(visited__$1,G__15923__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__15927,to_visit__$1,connections__$1,visited,G__15923,vec__15924,to_visit,connections))
,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__15930 = visited__$3;
var G__15931 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,to_visit__$2,visiting,next_visit),cljs.core.conj.call(null,connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__15930;
G__15923__$1 = G__15931;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__15935){
var map__15936 = p__15935;
var map__15936__$1 = ((((!((map__15936 == null)))?((((map__15936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15936):map__15936);
var id = cljs.core.get.call(null,map__15936__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var borders = cljs.core.get.call(null,map__15936__$1,new cljs.core.Keyword(null,"borders","borders",-2120100848));
var neighbors = cljs.core.get.call(null,map__15936__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (map__15936,map__15936__$1,id,borders,neighbors){
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
});})(map__15936,map__15936__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.call(null,(2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.call(null,(function (p__15952,p__15953){
var vec__15954 = p__15952;
var vec__15957 = cljs.core.nth.call(null,vec__15954,(0),null);
var x_min = cljs.core.nth.call(null,vec__15957,(0),null);
var y_min = cljs.core.nth.call(null,vec__15957,(1),null);
var vec__15960 = cljs.core.nth.call(null,vec__15954,(1),null);
var x_max = cljs.core.nth.call(null,vec__15960,(0),null);
var y_max = cljs.core.nth.call(null,vec__15960,(1),null);
var vec__15963 = p__15953;
var x = cljs.core.nth.call(null,vec__15963,(0),null);
var y = cljs.core.nth.call(null,vec__15963,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__15966,p__15967){
var vec__15974 = p__15966;
var x0 = cljs.core.nth.call(null,vec__15974,(0),null);
var y0 = cljs.core.nth.call(null,vec__15974,(1),null);
var vec__15977 = p__15967;
var x1 = cljs.core.nth.call(null,vec__15977,(0),null);
var y1 = cljs.core.nth.call(null,vec__15977,(1),null);
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
var vec__15986 = cljs.core.apply.call(null,my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.call(null,vec__15986,(0),null);
var xy0_1 = cljs.core.nth.call(null,vec__15986,(1),null);
var vec__15989 = cljs.core.apply.call(null,my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.call(null,vec__15989,(0),null);
var xy1_1 = cljs.core.nth.call(null,vec__15989,(1),null);
return my_mazes.core.less_than_xy_QMARK_.call(null,xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq.call(null,vs)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__15996,v){
var vec__15997 = p__15996;
var res = cljs.core.nth.call(null,vec__15997,(0),null);
var v_min = cljs.core.nth.call(null,vec__15997,(1),null);
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
my_mazes.core.points = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null)], null);
my_mazes.core.tree = kdtree.build_tree.call(null,my_mazes.core.points);
cljs.core.println.call(null,"Tree:",my_mazes.core.tree);
my_mazes.core.w = (1024);
my_mazes.core.h = (1024);
my_mazes.core.paint_BANG_ = cljs.core.partial.call(null,my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id.call(null,"app"),my_mazes.core.w,my_mazes.core.h);
my_mazes.core.test_scene = my_mazes.core.square_grid.call(null,(10),(10),(64));
my_mazes.core.scene_bb = my_mazes.core.bounding_box.call(null,my_mazes.core.test_scene);
my_mazes.core.test_graph = my_mazes.core.scene__GT_graph.call(null,my_mazes.core.test_scene);
my_mazes.core.test_rw = my_mazes.core.remove_walls.call(null,my_mazes.core.test_graph,(0),my_mazes.core.make_T_bias.call(null,my_mazes.core.scene_bb));
my_mazes.core.test_maze = my_mazes.core.maze__GT_polylines.call(null,cljs.core.vals.call(null,my_mazes.core.test_graph),my_mazes.core.test_rw);
my_mazes.core.paint_BANG_.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.svg_polyline,"#00F",(5)),my_mazes.core.remove_min.call(null,cljs.core.complement.call(null,my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min.call(null,my_mazes.core.less_than_seg_QMARK_,my_mazes.core.transform_polylines.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.math.core._.call(null,my_mazes.core.barycenter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,(0),(0)),thi.ng.geom.vector.vec2.call(null,my_mazes.core.w,my_mazes.core.h)], null)),my_mazes.core.barycenter.call(null,my_mazes.core.scene_bb))),my_mazes.core.test_maze)))));
cljs.core.println.call(null,"Done !");
if(typeof my_mazes.core.state !== 'undefined'){
} else {
my_mazes.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

//# sourceMappingURL=core.js.map