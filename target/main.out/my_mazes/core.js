// Compiled by ClojureScript 1.9.293 {}
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
return (function (p1__25602_SHARP_,p2__25601_SHARP_){
return f.call(null,p2__25601_SHARP_,p1__25602_SHARP_);
});
});
my_mazes.core.rotate = my_mazes.core.flip_2.call(null,thi.ng.geom.core.rotate);
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.call(null,(n + (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.call(null,1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__25604,r){
var vec__25608 = p__25604;
var x = cljs.core.nth.call(null,vec__25608,(0),null);
var y = cljs.core.nth.call(null,vec__25608,(1),null);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.call(null,x,y)),((function (vec__25608,x,y){
return (function (p1__25603_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__25603_SHARP_,r);
});})(vec__25608,x,y))
,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon.call(null,(4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__25617(s__25618){
return (new cljs.core.LazySeq(null,(function (){
var s__25618__$1 = s__25618;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__25618__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__25618__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__25617_$_iter__25619(s__25620){
return (new cljs.core.LazySeq(null,((function (s__25618__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__25620__$1 = s__25620;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__25620__$1);
if(temp__6753__auto____$1){
var s__25620__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25620__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__25620__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__25622 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__25621 = (0);
while(true){
if((i__25621 < size__8245__auto__)){
var c = cljs.core._nth.call(null,c__8244__auto__,i__25621);
cljs.core.chunk_append.call(null,b__25622,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)));

var G__25623 = (i__25621 + (1));
i__25621 = G__25623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25622),my_mazes$core$square_grid_$_iter__25617_$_iter__25619.call(null,cljs.core.chunk_rest.call(null,s__25620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25622),null);
}
} else {
var c = cljs.core.first.call(null,s__25620__$2);
return cljs.core.cons.call(null,my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2)),my_mazes$core$square_grid_$_iter__25617_$_iter__25619.call(null,cljs.core.rest.call(null,s__25620__$2)));
}
} else {
return null;
}
break;
}
});})(s__25618__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__25618__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq.call(null,iterys__8242__auto__.call(null,cljs.core.range.call(null,n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.call(null,fs__8243__auto__,my_mazes$core$square_grid_$_iter__25617.call(null,cljs.core.rest.call(null,s__25618__$1)));
} else {
var G__25624 = cljs.core.rest.call(null,s__25618__$1);
s__25618__$1 = G__25624;
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
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale.call(null,cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count.call(null,xys)));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.call(null,(function (p1__25625_SHARP_){
return cljs.core.with_meta.call(null,my_mazes.core.barycenter.call(null,p1__25625_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree.call(null,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter.call(null,seg);
return cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (b){
return (function (p__25631){
var vec__25632 = p__25631;
var id_t = cljs.core.nth.call(null,vec__25632,(0),null);
var b_t = cljs.core.nth.call(null,vec__25632,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.call(null,id_t,id);
if(and__7377__auto__){
return thi.ng.math.core.delta_EQ_.call(null,b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.call(null,((function (b){
return (function (p1__25626_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta.call(null,p1__25626_SHARP_),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p1__25626_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.call(null,t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.call(null,(function (p1__25635_SHARP_,p2__25636_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"borders","borders",-2120100848)],[p1__25635_SHARP_,p2__25636_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells.call(null,cells);
var indexed = cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__25637_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p1__25637_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv.call(null,((function (cells,t,indexed,neighbors){
return (function (p1__25638_SHARP_,p2__25639_SHARP_,p3__25640_SHARP_){
return cljs.core.assoc.call(null,p1__25638_SHARP_,p2__25639_SHARP_,cljs.core.assoc.call(null,p3__25640_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.matching_seg,t,p2__25639_SHARP_),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p3__25640_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,xs))){
var bias_s = bias.call(null,cljs.core.count.call(null,xs));
var vec__25654 = cljs.core.reduce.call(null,((function (bias_s){
return (function (p__25657,p__25658){
var vec__25659 = p__25657;
var bias_non_nil = cljs.core.nth.call(null,vec__25659,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__25659,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__25659,(2),null);
var delta = cljs.core.nth.call(null,vec__25659,(3),null);
var last_b = cljs.core.nth.call(null,vec__25659,(4),null);
var vec__25662 = p__25658;
var bias_b = cljs.core.nth.call(null,vec__25662,(0),null);
var v = cljs.core.nth.call(null,vec__25662,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,bias_non_nil,(bias_b - delta)),cljs.core.conj.call(null,xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.call(null,cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.call(null,vec__25654,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__25654,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__25654,(2),null);
var delta = cljs.core.nth.call(null,vec__25654,(3),null);
var bias_rescaled = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(1.0 / cljs.core.peek.call(null,bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.call(null);
return cljs.core.nth.call(null,xs_non_nil,cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (bias_s,vec__25654,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__25642_SHARP_,p2__25641_SHARP_){
if((p2__25641_SHARP_ > rnd)){
return p1__25642_SHARP_;
} else {
return null;
}
});})(bias_s,vec__25654,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__25666){
var vec__25670 = p__25666;
var x = cljs.core.nth.call(null,vec__25670,(0),null);
var y = cljs.core.nth.call(null,vec__25670,(1),null);
return ((function (vec__25670,x,y){
return (function (p1__25665_SHARP_){
var delta = (1.0 / p1__25665_SHARP_);
return cljs.core.take.call(null,p1__25665_SHARP_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,delta),delta));
});
;})(vec__25670,x,y))
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
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__25673){
var vec__25687 = p__25673;
var vec__25690 = cljs.core.nth.call(null,vec__25687,(0),null);
var x_min = cljs.core.nth.call(null,vec__25690,(0),null);
var y_min = cljs.core.nth.call(null,vec__25690,(1),null);
var vec__25693 = cljs.core.nth.call(null,vec__25687,(1),null);
var x_max = cljs.core.nth.call(null,vec__25693,(0),null);
var y_max = cljs.core.nth.call(null,vec__25693,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias.call(null,((function (w,vec__25687,vec__25690,x_min,y_min,vec__25693,x_max,y_max){
return (function (p__25696){
var vec__25697 = p__25696;
var x = cljs.core.nth.call(null,vec__25697,(0),null);
var y = cljs.core.nth.call(null,vec__25697,(1),null);
return (x / w);
});})(w,vec__25687,vec__25690,x_min,y_min,vec__25693,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__25700){
var vec__25714 = p__25700;
var vec__25717 = cljs.core.nth.call(null,vec__25714,(0),null);
var x_min = cljs.core.nth.call(null,vec__25717,(0),null);
var y_min = cljs.core.nth.call(null,vec__25717,(1),null);
var vec__25720 = cljs.core.nth.call(null,vec__25714,(1),null);
var x_max = cljs.core.nth.call(null,vec__25720,(0),null);
var y_max = cljs.core.nth.call(null,vec__25720,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias.call(null,((function (y_T,x_d,x_center,vec__25714,vec__25717,x_min,y_min,vec__25720,x_max,y_max){
return (function (p__25723){
var vec__25724 = p__25723;
var x = cljs.core.nth.call(null,vec__25724,(0),null);
var y = cljs.core.nth.call(null,vec__25724,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs.call(null,(x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__25714,vec__25717,x_min,y_min,vec__25720,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(indexed_cells,id_start,bias_f){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__25741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__25742 = G__25741;
var to_visit = cljs.core.nth.call(null,vec__25742,(0),null);
var connections = cljs.core.nth.call(null,vec__25742,(1),null);
var visited__$1 = visited;
var G__25741__$1 = G__25741;
while(true){
var visited__$2 = visited__$1;
var vec__25745 = G__25741__$1;
var to_visit__$1 = cljs.core.nth.call(null,vec__25745,(0),null);
var connections__$1 = cljs.core.nth.call(null,vec__25745,(1),null);
if(cljs.core.empty_QMARK_.call(null,to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek.call(null,to_visit__$1);
var visiting_cell = cljs.core.get.call(null,indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop.call(null,to_visit__$1);
var visited__$3 = cljs.core.conj.call(null,visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil.call(null,bias_f.call(null,my_mazes.core.barycenter.call(null,new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(visiting_cell))),cljs.core.map.call(null,((function (visited__$1,G__25741__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__25745,to_visit__$1,connections__$1,visited,G__25741,vec__25742,to_visit,connections){
return (function (p1__25727_SHARP_){
if(cljs.core.not.call(null,visited__$3.call(null,p1__25727_SHARP_))){
return p1__25727_SHARP_;
} else {
return null;
}
});})(visited__$1,G__25741__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__25745,to_visit__$1,connections__$1,visited,G__25741,vec__25742,to_visit,connections))
,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__25748 = visited__$3;
var G__25749 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,to_visit__$2,visiting,next_visit),cljs.core.conj.call(null,connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__25748;
G__25741__$1 = G__25749;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__25753){
var map__25754 = p__25753;
var map__25754__$1 = ((((!((map__25754 == null)))?((((map__25754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25754):map__25754);
var id = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var borders = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"borders","borders",-2120100848));
var neighbors = cljs.core.get.call(null,map__25754__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (map__25754,map__25754__$1,id,borders,neighbors){
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
});})(map__25754,map__25754__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.call(null,(2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.call(null,(function (p__25770,p__25771){
var vec__25772 = p__25770;
var vec__25775 = cljs.core.nth.call(null,vec__25772,(0),null);
var x_min = cljs.core.nth.call(null,vec__25775,(0),null);
var y_min = cljs.core.nth.call(null,vec__25775,(1),null);
var vec__25778 = cljs.core.nth.call(null,vec__25772,(1),null);
var x_max = cljs.core.nth.call(null,vec__25778,(0),null);
var y_max = cljs.core.nth.call(null,vec__25778,(1),null);
var vec__25781 = p__25771;
var x = cljs.core.nth.call(null,vec__25781,(0),null);
var y = cljs.core.nth.call(null,vec__25781,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__25784,p__25785){
var vec__25792 = p__25784;
var x0 = cljs.core.nth.call(null,vec__25792,(0),null);
var y0 = cljs.core.nth.call(null,vec__25792,(1),null);
var vec__25795 = p__25785;
var x1 = cljs.core.nth.call(null,vec__25795,(0),null);
var y1 = cljs.core.nth.call(null,vec__25795,(1),null);
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
var vec__25804 = cljs.core.apply.call(null,my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.call(null,vec__25804,(0),null);
var xy0_1 = cljs.core.nth.call(null,vec__25804,(1),null);
var vec__25807 = cljs.core.apply.call(null,my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.call(null,vec__25807,(0),null);
var xy1_1 = cljs.core.nth.call(null,vec__25807,(1),null);
return my_mazes.core.less_than_xy_QMARK_.call(null,xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq.call(null,vs)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__25814,v){
var vec__25815 = p__25814;
var res = cljs.core.nth.call(null,vec__25815,(0),null);
var v_min = cljs.core.nth.call(null,vec__25815,(1),null);
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
if(typeof my_mazes.core.app_state !== 'undefined'){
} else {
my_mazes.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
my_mazes.core.do_paint_BANG_ = (function my_mazes$core$do_paint_BANG_(){
var map__25829 = cljs.core.deref.call(null,my_mazes.core.app_state);
var map__25829__$1 = ((((!((map__25829 == null)))?((((map__25829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25829):map__25829);
var rows = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var size = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var scene = my_mazes.core.square_grid.call(null,cols,rows,size);
var pen_width = (6);
var scene_bb = my_mazes.core.bounding_box.call(null,scene);
var vec__25830 = scene_bb;
var vec__25833 = cljs.core.nth.call(null,vec__25830,(0),null);
var x_min = cljs.core.nth.call(null,vec__25833,(0),null);
var y_min = cljs.core.nth.call(null,vec__25833,(1),null);
var vec__25836 = cljs.core.nth.call(null,vec__25830,(1),null);
var x_max = cljs.core.nth.call(null,vec__25836,(0),null);
var y_max = cljs.core.nth.call(null,vec__25836,(1),null);
var graph = my_mazes.core.scene__GT_graph.call(null,scene);
var r_w = my_mazes.core.remove_walls.call(null,graph,(0),my_mazes.core.make_T_bias.call(null,scene_bb));
var maze = my_mazes.core.maze__GT_polylines.call(null,cljs.core.vals.call(null,graph),r_w);
var w = ((x_max - x_min) + pen_width);
var h = ((y_max - y_min) + pen_width);
var paint_BANG_ = cljs.core.partial.call(null,my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id.call(null,"maze"),w,h);
return paint_BANG_.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.svg_polyline,"#00F",pen_width),my_mazes.core.remove_min.call(null,cljs.core.complement.call(null,my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min.call(null,my_mazes.core.less_than_seg_QMARK_,my_mazes.core.transform_polylines.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.math.core._.call(null,my_mazes.core.barycenter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,(0),(0)),thi.ng.geom.vector.vec2.call(null,w,h)], null)),my_mazes.core.barycenter.call(null,scene_bb))),maze)))));
});
cljs.core.println.call(null,"Done !");
my_mazes.core.error_state = reagent.core.atom.call(null,null);
my_mazes.core.set_error_BANG_ = (function my_mazes$core$set_error_BANG_(err){
cljs.core.reset_BANG_.call(null,my_mazes.core.error_state,err);

if(cljs.core.truth_(err)){
return setTimeout((function (){
return my_mazes.core.set_error_BANG_.call(null,null);
}),(1000));
} else {
return null;
}
});
/**
 * Similar to clojure.core/swap!, but records history and returns atom.
 */
my_mazes.core.swap_STAR__BANG_ = (function my_mazes$core$swap_STAR__BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___25843 = arguments.length;
var i__8606__auto___25844 = (0);
while(true){
if((i__8606__auto___25844 < len__8605__auto___25843)){
args__8612__auto__.push((arguments[i__8606__auto___25844]));

var G__25845 = (i__8606__auto___25844 + (1));
i__8606__auto___25844 = G__25845;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((2) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((2)),(0),null)):null);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8613__auto__);
});

my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
cljs.core.swap_BANG_.call(null,ref,(function (ref_val){
return cljs.core.apply.call(null,f,ref_val,args);
}));

my_mazes.core.do_paint_BANG_.call(null);

return ref;
});

my_mazes.core.swap_STAR__BANG_.cljs$lang$maxFixedArity = (2);

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq25840){
var G__25841 = cljs.core.first.call(null,seq25840);
var seq25840__$1 = cljs.core.next.call(null,seq25840);
var G__25842 = cljs.core.first.call(null,seq25840__$1);
var seq25840__$2 = cljs.core.next.call(null,seq25840__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25841,G__25842,seq25840__$2);
});

/**
 * Component displaying current error message
 */
my_mazes.core.user_error = (function my_mazes$core$user_error(){
var temp__6753__auto__ = cljs.core.deref.call(null,my_mazes.core.error_state);
if(cljs.core.truth_(temp__6753__auto__)){
var err = temp__6753__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"red",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),err], null);
} else {
return null;
}
});
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("%")].join('')], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,param,(e.target.value | (0)));
})], null)], null);
});
/**
 * Application root component
 */
my_mazes.core.main_panel = (function my_mazes$core$main_panel(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.user_error], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(2),(40),(50)], null),"cols: ",new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(2),(40),(50)], null),"rows : ",new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(10),(100),(50)], null),"size : ",new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null)], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
return my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(2),new cljs.core.Keyword(null,"rows","rows",850049680),(2),new cljs.core.Keyword(null,"size","size",1098693007),(32)], null));
});
/**
 * Application main entry point. Initializes app-state and
 *   kicks off React component lifecycle.
 */
my_mazes.core.main = (function my_mazes$core$main(){
my_mazes.core.init_app.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.main_panel], null),document.getElementById("app"));
});
my_mazes.core.main.call(null);
cljs.core.println.call(null,"main called");

//# sourceMappingURL=core.js.map