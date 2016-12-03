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
cljs.core.enable_console_print_BANG_.call(null);
my_mazes.core.abs = (function my_mazes$core$abs(n){
if(((0) <= n)){
return n;
} else {
return (- n);
}
});
my_mazes.core.flip_2 = (function my_mazes$core$flip_2(f){
return (function (p1__69030_SHARP_,p2__69029_SHARP_){
return f.call(null,p2__69029_SHARP_,p1__69030_SHARP_);
});
});
my_mazes.core.rotate = my_mazes.core.flip_2.call(null,thi.ng.geom.core.rotate);
my_mazes.core.regular_polygon = (function my_mazes$core$regular_polygon(n){
return cljs.core.take.call(null,(n + (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.TWO_PI / n)),thi.ng.geom.vector.vec2.call(null,1.0,(0))));
});
my_mazes.core.square = (function my_mazes$core$square(p__69032,r){
var vec__69036 = p__69032;
var x = cljs.core.nth.call(null,vec__69036,(0),null);
var y = cljs.core.nth.call(null,vec__69036,(1),null);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.call(null,x,y)),((function (vec__69036,x,y){
return (function (p1__69031_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__69031_SHARP_,r);
});})(vec__69036,x,y))
,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.PI / (4)))),my_mazes.core.regular_polygon.call(null,(4)));
});
my_mazes.core.square_grid = (function my_mazes$core$square_grid(n_rows,n_cols,cell_size){
var iter__8246__auto__ = (function my_mazes$core$square_grid_$_iter__69045(s__69046){
return (new cljs.core.LazySeq(null,(function (){
var s__69046__$1 = s__69046;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__69046__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__69046__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function my_mazes$core$square_grid_$_iter__69045_$_iter__69047(s__69048){
return (new cljs.core.LazySeq(null,((function (s__69046__$1,r,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__69048__$1 = s__69048;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__69048__$1);
if(temp__6753__auto____$1){
var s__69048__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69048__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__69048__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__69050 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__69049 = (0);
while(true){
if((i__69049 < size__8245__auto__)){
var c = cljs.core._nth.call(null,c__8244__auto__,i__69049);
cljs.core.chunk_append.call(null,b__69050,(function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2));
})());

var G__69051 = (i__69049 + (1));
i__69049 = G__69051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69050),my_mazes$core$square_grid_$_iter__69045_$_iter__69047.call(null,cljs.core.chunk_rest.call(null,s__69048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69050),null);
}
} else {
var c = cljs.core.first.call(null,s__69048__$2);
return cljs.core.cons.call(null,(function (){var x = ((c * cell_size) + (cell_size / (2)));
return my_mazes.core.square.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(cell_size / (2))),cljs.core.partial.call(null,cljs.core._STAR_,cell_size)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),(cell_size / thi.ng.math.core.SQRT2));
})(),my_mazes$core$square_grid_$_iter__69045_$_iter__69047.call(null,cljs.core.rest.call(null,s__69048__$2)));
}
} else {
return null;
}
break;
}
});})(s__69046__$1,r,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__69046__$1,r,xs__7309__auto__,temp__6753__auto__))
;
var fs__8243__auto__ = cljs.core.seq.call(null,iterys__8242__auto__.call(null,cljs.core.range.call(null,n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.call(null,fs__8243__auto__,my_mazes$core$square_grid_$_iter__69045.call(null,cljs.core.rest.call(null,s__69046__$1)));
} else {
var G__69052 = cljs.core.rest.call(null,s__69046__$1);
s__69046__$1 = G__69052;
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
my_mazes.core.hexagon = (function my_mazes$core$hexagon(p__69054,r){
var vec__69058 = p__69054;
var x = cljs.core.nth.call(null,vec__69058,(0),null);
var y = cljs.core.nth.call(null,vec__69058,(1),null);
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.geom.vector.vec2.call(null,x,y)),((function (vec__69058,x,y){
return (function (p1__69053_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__69053_SHARP_,r);
});})(vec__69058,x,y))
,cljs.core.partial.call(null,my_mazes.core.rotate,(thi.ng.math.core.PI / (6)))),my_mazes.core.regular_polygon.call(null,(6)));
});
my_mazes.core.sqrt = (function my_mazes$core$sqrt(x){
return Math.sqrt(x);
});
my_mazes.core.hexagon_grid = (function my_mazes$core$hexagon_grid(n_rows,n_cols,cell_size){
var v0 = my_mazes.core.rotate.call(null,(thi.ng.math.core.PI / (6)),thi.ng.geom.vector.vec2.call(null,cell_size,0.0));
var vec__69070 = v0;
var x0 = cljs.core.nth.call(null,vec__69070,(0),null);
var y0 = cljs.core.nth.call(null,vec__69070,(1),null);
var d_odd = thi.ng.geom.vector.vec2.call(null,x0,((2) * y0));
var d_even = thi.ng.geom.vector.vec2.call(null,(0),(1));
var iter__8246__auto__ = ((function (v0,vec__69070,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__69073(s__69074){
return (new cljs.core.LazySeq(null,((function (v0,vec__69070,x0,y0,d_odd,d_even){
return (function (){
var s__69074__$1 = s__69074;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__69074__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var r = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8242__auto__ = ((function (s__69074__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__69070,x0,y0,d_odd,d_even){
return (function my_mazes$core$hexagon_grid_$_iter__69073_$_iter__69075(s__69076){
return (new cljs.core.LazySeq(null,((function (s__69074__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__69070,x0,y0,d_odd,d_even){
return (function (){
var s__69076__$1 = s__69076;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__69076__$1);
if(temp__6753__auto____$1){
var s__69076__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69076__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__69076__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__69078 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__69077 = (0);
while(true){
if((i__69077 < size__8245__auto__)){
var c = cljs.core._nth.call(null,c__8244__auto__,i__69077);
cljs.core.chunk_append.call(null,b__69078,(function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.call(null,x,y);
return my_mazes.core.hexagon.call(null,thi.ng.math.core._PLUS_.call(null,((cljs.core.odd_QMARK_.call(null,r))?d_odd:d_even),center),cell_size);
})());

var G__69079 = (i__69077 + (1));
i__69077 = G__69079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69078),my_mazes$core$hexagon_grid_$_iter__69073_$_iter__69075.call(null,cljs.core.chunk_rest.call(null,s__69076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69078),null);
}
} else {
var c = cljs.core.first.call(null,s__69076__$2);
return cljs.core.cons.call(null,(function (){var x = ((2.0 * x0) * c);
var y = (1.5 * r);
var center = thi.ng.geom.vector.vec2.call(null,x,y);
return my_mazes.core.hexagon.call(null,thi.ng.math.core._PLUS_.call(null,((cljs.core.odd_QMARK_.call(null,r))?d_odd:d_even),center),cell_size);
})(),my_mazes$core$hexagon_grid_$_iter__69073_$_iter__69075.call(null,cljs.core.rest.call(null,s__69076__$2)));
}
} else {
return null;
}
break;
}
});})(s__69074__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__69070,x0,y0,d_odd,d_even))
,null,null));
});})(s__69074__$1,r,xs__7309__auto__,temp__6753__auto__,v0,vec__69070,x0,y0,d_odd,d_even))
;
var fs__8243__auto__ = cljs.core.seq.call(null,iterys__8242__auto__.call(null,cljs.core.range.call(null,n_cols)));
if(fs__8243__auto__){
return cljs.core.concat.call(null,fs__8243__auto__,my_mazes$core$hexagon_grid_$_iter__69073.call(null,cljs.core.rest.call(null,s__69074__$1)));
} else {
var G__69080 = cljs.core.rest.call(null,s__69074__$1);
s__69074__$1 = G__69080;
continue;
}
} else {
return null;
}
break;
}
});})(v0,vec__69070,x0,y0,d_odd,d_even))
,null,null));
});})(v0,vec__69070,x0,y0,d_odd,d_even))
;
return iter__8246__auto__.call(null,cljs.core.range.call(null,n_rows));
});
my_mazes.core.barycenter = (function my_mazes$core$barycenter(xys){
return thi.ng.geom.core.scale.call(null,cljs.core.reduce.call(null,thi.ng.math.core._PLUS_,xys),(1.0 / cljs.core.count.call(null,xys)));
});
my_mazes.core.cell__GT_barys_id = (function my_mazes$core$cell__GT_barys_id(c){
return cljs.core.map.call(null,(function (p1__69081_SHARP_){
return cljs.core.with_meta.call(null,my_mazes.core.barycenter.call(null,p1__69081_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(c)));
});
my_mazes.core.index_cells = (function my_mazes$core$index_cells(cells){
return kdtree.build_tree.call(null,cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,my_mazes.core.cell__GT_barys_id,cells)));
});
my_mazes.core.my_eps = 0.001;
my_mazes.core.rel_EQ_ = (function my_mazes$core$rel_EQ_(v0,v1){
var abs0 = my_mazes.core.abs.call(null,v0);
var abs1 = my_mazes.core.abs.call(null,v1);
var diff = my_mazes.core.abs.call(null,(v1 - v0));
if(cljs.core._EQ_.call(null,v0,v1)){
return true;
} else {
if(((v0 === (0))) || ((v1 === (0)))){
return (diff < my_mazes.core.my_eps);
} else {
return ((diff / (abs0 + abs1)) < my_mazes.core.my_eps);

}
}
});
my_mazes.core.delta_EQ_ = (function my_mazes$core$delta_EQ_(p__69082,p__69083){
var vec__69090 = p__69082;
var x0 = cljs.core.nth.call(null,vec__69090,(0),null);
var y0 = cljs.core.nth.call(null,vec__69090,(1),null);
var vec__69093 = p__69083;
var x1 = cljs.core.nth.call(null,vec__69093,(0),null);
var y1 = cljs.core.nth.call(null,vec__69093,(1),null);
var and__7377__auto__ = my_mazes.core.rel_EQ_.call(null,x0,x1);
if(cljs.core.truth_(and__7377__auto__)){
return my_mazes.core.rel_EQ_.call(null,y0,y1);
} else {
return and__7377__auto__;
}
});
my_mazes.core.matching_seg = (function my_mazes$core$matching_seg(t,id,seg){
var b = my_mazes.core.barycenter.call(null,seg);
return cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (b){
return (function (p__69101){
var vec__69102 = p__69101;
var id_t = cljs.core.nth.call(null,vec__69102,(0),null);
var b_t = cljs.core.nth.call(null,vec__69102,(1),null);
var and__7377__auto__ = cljs.core.not_EQ_.call(null,id_t,id);
if(and__7377__auto__){
return my_mazes.core.delta_EQ_.call(null,b_t,b);
} else {
return and__7377__auto__;
}
});})(b))
,cljs.core.map.call(null,((function (b){
return (function (p1__69096_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.meta.call(null,p1__69096_SHARP_),new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(p1__69096_SHARP_)],null));
});})(b))
,kdtree.nearest_neighbor.call(null,t,b,(2))))));
});
my_mazes.core.scene__GT_graph = (function my_mazes$core$scene__GT_graph(polys){
var cells = cljs.core.map_indexed.call(null,(function (p1__69105_SHARP_,p2__69106_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"borders","borders",-2120100848)],[p1__69105_SHARP_,p2__69106_SHARP_]);
}),polys);
var t = my_mazes.core.index_cells.call(null,cells);
var indexed = cljs.core.zipmap.call(null,cljs.core.iterate.call(null,cljs.core.inc,(0)),cells);
var neighbors = ((function (cells,t,indexed){
return (function (p1__69107_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p1__69107_SHARP_))));
});})(cells,t,indexed))
;
return cljs.core.reduce_kv.call(null,((function (cells,t,indexed,neighbors){
return (function (p1__69108_SHARP_,p2__69109_SHARP_,p3__69110_SHARP_){
return cljs.core.assoc.call(null,p1__69108_SHARP_,p2__69109_SHARP_,cljs.core.assoc.call(null,p3__69110_SHARP_,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.matching_seg,t,p2__69109_SHARP_),cljs.core.partition.call(null,(2),(1),new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(p3__69110_SHARP_)))));
});})(cells,t,indexed,neighbors))
,cljs.core.PersistentArrayMap.EMPTY,indexed);
});
my_mazes.core.pick_random_non_nil = (function my_mazes$core$pick_random_non_nil(bias,xs){
if(cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,xs))){
var bias_s = bias.call(null,cljs.core.count.call(null,xs));
var vec__69124 = cljs.core.reduce.call(null,((function (bias_s){
return (function (p__69127,p__69128){
var vec__69129 = p__69127;
var bias_non_nil = cljs.core.nth.call(null,vec__69129,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__69129,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__69129,(2),null);
var delta = cljs.core.nth.call(null,vec__69129,(3),null);
var last_b = cljs.core.nth.call(null,vec__69129,(4),null);
var vec__69132 = p__69128;
var bias_b = cljs.core.nth.call(null,vec__69132,(0),null);
var v = cljs.core.nth.call(null,vec__69132,(1),null);
if(cljs.core.truth_(v)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,bias_non_nil,(bias_b - delta)),cljs.core.conj.call(null,xs_non_nil,v),nb_nils,delta,bias_b], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias_non_nil,xs_non_nil,(nb_nils + (1)),(delta + (bias_b - last_b)),bias_b], null);
}
});})(bias_s))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),0.0,0.0], null),cljs.core.map.call(null,cljs.core.vector,bias_s,xs));
var bias_non_nil = cljs.core.nth.call(null,vec__69124,(0),null);
var xs_non_nil = cljs.core.nth.call(null,vec__69124,(1),null);
var nb_nils = cljs.core.nth.call(null,vec__69124,(2),null);
var delta = cljs.core.nth.call(null,vec__69124,(3),null);
var bias_rescaled = cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(1.0 / cljs.core.peek.call(null,bias_non_nil))),bias_non_nil);
var rnd = cljs.core.rand.call(null);
return cljs.core.nth.call(null,xs_non_nil,cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (bias_s,vec__69124,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd){
return (function (p1__69112_SHARP_,p2__69111_SHARP_){
if((p2__69111_SHARP_ > rnd)){
return p1__69112_SHARP_;
} else {
return null;
}
});})(bias_s,vec__69124,bias_non_nil,xs_non_nil,nb_nils,delta,bias_rescaled,rnd))
,bias_rescaled)));
} else {
return null;
}
});
my_mazes.core.no_bias = (function my_mazes$core$no_bias(p__69136){
var vec__69140 = p__69136;
var x = cljs.core.nth.call(null,vec__69140,(0),null);
var y = cljs.core.nth.call(null,vec__69140,(1),null);
return ((function (vec__69140,x,y){
return (function (p1__69135_SHARP_){
var delta = (1.0 / p1__69135_SHARP_);
return cljs.core.take.call(null,p1__69135_SHARP_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,delta),delta));
});
;})(vec__69140,x,y))
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
my_mazes.core.make_horizontal_bias = (function my_mazes$core$make_horizontal_bias(p__69143){
var vec__69157 = p__69143;
var vec__69160 = cljs.core.nth.call(null,vec__69157,(0),null);
var x_min = cljs.core.nth.call(null,vec__69160,(0),null);
var y_min = cljs.core.nth.call(null,vec__69160,(1),null);
var vec__69163 = cljs.core.nth.call(null,vec__69157,(1),null);
var x_max = cljs.core.nth.call(null,vec__69163,(0),null);
var y_max = cljs.core.nth.call(null,vec__69163,(1),null);
var w = (x_max - x_min);
return my_mazes.core.alternate_bias.call(null,((function (w,vec__69157,vec__69160,x_min,y_min,vec__69163,x_max,y_max){
return (function (p__69166){
var vec__69167 = p__69166;
var x = cljs.core.nth.call(null,vec__69167,(0),null);
var y = cljs.core.nth.call(null,vec__69167,(1),null);
return (x / w);
});})(w,vec__69157,vec__69160,x_min,y_min,vec__69163,x_max,y_max))
);
});
my_mazes.core.make_vertical_bias = (function my_mazes$core$make_vertical_bias(p__69170){
var vec__69184 = p__69170;
var vec__69187 = cljs.core.nth.call(null,vec__69184,(0),null);
var x_min = cljs.core.nth.call(null,vec__69187,(0),null);
var y_min = cljs.core.nth.call(null,vec__69187,(1),null);
var vec__69190 = cljs.core.nth.call(null,vec__69184,(1),null);
var x_max = cljs.core.nth.call(null,vec__69190,(0),null);
var y_max = cljs.core.nth.call(null,vec__69190,(1),null);
var h = (y_max - y_min);
return my_mazes.core.alternate_bias.call(null,((function (h,vec__69184,vec__69187,x_min,y_min,vec__69190,x_max,y_max){
return (function (p__69193){
var vec__69194 = p__69193;
var x = cljs.core.nth.call(null,vec__69194,(0),null);
var y = cljs.core.nth.call(null,vec__69194,(1),null);
return (y / h);
});})(h,vec__69184,vec__69187,x_min,y_min,vec__69190,x_max,y_max))
);
});
my_mazes.core.make_T_bias = (function my_mazes$core$make_T_bias(p__69197){
var vec__69211 = p__69197;
var vec__69214 = cljs.core.nth.call(null,vec__69211,(0),null);
var x_min = cljs.core.nth.call(null,vec__69214,(0),null);
var y_min = cljs.core.nth.call(null,vec__69214,(1),null);
var vec__69217 = cljs.core.nth.call(null,vec__69211,(1),null);
var x_max = cljs.core.nth.call(null,vec__69217,(0),null);
var y_max = cljs.core.nth.call(null,vec__69217,(1),null);
var y_T = (y_min + ((y_max - y_min) / (4)));
var x_d = ((x_max - x_min) / (8));
var x_center = ((x_min + x_max) / (2));
return my_mazes.core.alternate_bias.call(null,((function (y_T,x_d,x_center,vec__69211,vec__69214,x_min,y_min,vec__69217,x_max,y_max){
return (function (p__69220){
var vec__69221 = p__69220;
var x = cljs.core.nth.call(null,vec__69221,(0),null);
var y = cljs.core.nth.call(null,vec__69221,(1),null);
if(((y < y_T)) || ((my_mazes.core.abs.call(null,(x - x_center)) < x_d))){
return 0.1;
} else {
return 0.9;
}
});})(y_T,x_d,x_center,vec__69211,vec__69214,x_min,y_min,vec__69217,x_max,y_max))
);
});
my_mazes.core.remove_walls = (function my_mazes$core$remove_walls(id_start,bias_f,indexed_cells){
var visited = cljs.core.PersistentHashSet.EMPTY;
var G__69238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_start], null),cljs.core.PersistentHashSet.EMPTY], null);
var vec__69239 = G__69238;
var to_visit = cljs.core.nth.call(null,vec__69239,(0),null);
var connections = cljs.core.nth.call(null,vec__69239,(1),null);
var visited__$1 = visited;
var G__69238__$1 = G__69238;
while(true){
var visited__$2 = visited__$1;
var vec__69242 = G__69238__$1;
var to_visit__$1 = cljs.core.nth.call(null,vec__69242,(0),null);
var connections__$1 = cljs.core.nth.call(null,vec__69242,(1),null);
if(cljs.core.empty_QMARK_.call(null,to_visit__$1)){
return connections__$1;
} else {
var visiting = cljs.core.peek.call(null,to_visit__$1);
var visiting_cell = cljs.core.get.call(null,indexed_cells,visiting);
var to_visit__$2 = cljs.core.pop.call(null,to_visit__$1);
var visited__$3 = cljs.core.conj.call(null,visited__$2,visiting);
var next_visit = my_mazes.core.pick_random_non_nil.call(null,bias_f.call(null,my_mazes.core.barycenter.call(null,new cljs.core.Keyword(null,"borders","borders",-2120100848).cljs$core$IFn$_invoke$arity$1(visiting_cell))),cljs.core.map.call(null,((function (visited__$1,G__69238__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__69242,to_visit__$1,connections__$1,visited,G__69238,vec__69239,to_visit,connections){
return (function (p1__69224_SHARP_){
if(cljs.core.not.call(null,visited__$3.call(null,p1__69224_SHARP_))){
return p1__69224_SHARP_;
} else {
return null;
}
});})(visited__$1,G__69238__$1,visiting,visiting_cell,to_visit__$2,visited__$3,visited__$2,vec__69242,to_visit__$1,connections__$1,visited,G__69238,vec__69239,to_visit,connections))
,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473).cljs$core$IFn$_invoke$arity$1(visiting_cell)));
var G__69245 = visited__$3;
var G__69246 = (cljs.core.truth_(next_visit)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,to_visit__$2,visiting,next_visit),cljs.core.conj.call(null,connections__$1,cljs.core.PersistentHashSet.fromArray([visiting,next_visit], true))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_visit__$2,connections__$1], null));
visited__$1 = G__69245;
G__69238__$1 = G__69246;
continue;
}
break;
}
});
my_mazes.core.maze__GT_polylines = (function my_mazes$core$maze__GT_polylines(cells,removed_walls){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__69250){
var map__69251 = p__69250;
var map__69251__$1 = ((((!((map__69251 == null)))?((((map__69251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69251):map__69251);
var id = cljs.core.get.call(null,map__69251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var borders = cljs.core.get.call(null,map__69251__$1,new cljs.core.Keyword(null,"borders","borders",-2120100848));
var neighbors = cljs.core.get.call(null,map__69251__$1,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473));
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (map__69251,map__69251__$1,id,borders,neighbors){
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
});})(map__69251,map__69251__$1,id,borders,neighbors))
,neighbors,cljs.core.partition.call(null,(2),(1),borders)));
}),cells));
});
my_mazes.core.bounding_box = (function my_mazes$core$bounding_box(polylines){
return cljs.core.reduce.call(null,(function (p__69267,p__69268){
var vec__69269 = p__69267;
var vec__69272 = cljs.core.nth.call(null,vec__69269,(0),null);
var x_min = cljs.core.nth.call(null,vec__69272,(0),null);
var y_min = cljs.core.nth.call(null,vec__69272,(1),null);
var vec__69275 = cljs.core.nth.call(null,vec__69269,(1),null);
var x_max = cljs.core.nth.call(null,vec__69275,(0),null);
var y_max = cljs.core.nth.call(null,vec__69275,(1),null);
var vec__69278 = p__69268;
var x = cljs.core.nth.call(null,vec__69278,(0),null);
var y = cljs.core.nth.call(null,vec__69278,(1),null);
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
my_mazes.core.less_than_xy_QMARK_ = (function my_mazes$core$less_than_xy_QMARK_(p__69281,p__69282){
var vec__69289 = p__69281;
var x0 = cljs.core.nth.call(null,vec__69289,(0),null);
var y0 = cljs.core.nth.call(null,vec__69289,(1),null);
var vec__69292 = p__69282;
var x1 = cljs.core.nth.call(null,vec__69292,(0),null);
var y1 = cljs.core.nth.call(null,vec__69292,(1),null);
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
var vec__69301 = cljs.core.apply.call(null,my_mazes.core.order_seg,s0);
var xy0_0 = cljs.core.nth.call(null,vec__69301,(0),null);
var xy0_1 = cljs.core.nth.call(null,vec__69301,(1),null);
var vec__69304 = cljs.core.apply.call(null,my_mazes.core.order_seg,s1);
var xy1_0 = cljs.core.nth.call(null,vec__69304,(0),null);
var xy1_1 = cljs.core.nth.call(null,vec__69304,(1),null);
return my_mazes.core.less_than_xy_QMARK_.call(null,xy0_0,xy1_0);
});
my_mazes.core.remove_min = (function my_mazes$core$remove_min(lt,vs){
if(cljs.core.seq.call(null,vs)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__69311,v){
var vec__69312 = p__69311;
var res = cljs.core.nth.call(null,vec__69312,(0),null);
var v_min = cljs.core.nth.call(null,vec__69312,(1),null);
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
if(typeof my_mazes.core.app_state !== 'undefined'){
} else {
my_mazes.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Similar to clojure.core/swap!, but records history and returns atom.
 */
my_mazes.core.swap_STAR__BANG_ = (function my_mazes$core$swap_STAR__BANG_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___69318 = arguments.length;
var i__8606__auto___69319 = (0);
while(true){
if((i__8606__auto___69319 < len__8605__auto___69318)){
args__8612__auto__.push((arguments[i__8606__auto___69319]));

var G__69320 = (i__8606__auto___69319 + (1));
i__8606__auto___69319 = G__69320;
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

return ref;
});

my_mazes.core.swap_STAR__BANG_.cljs$lang$maxFixedArity = (2);

my_mazes.core.swap_STAR__BANG_.cljs$lang$applyTo = (function (seq69315){
var G__69316 = cljs.core.first.call(null,seq69315);
var seq69315__$1 = cljs.core.next.call(null,seq69315);
var G__69317 = cljs.core.first.call(null,seq69315__$1);
var seq69315__$2 = cljs.core.next.call(null,seq69315__$1);
return my_mazes.core.swap_STAR__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69316,G__69317,seq69315__$2);
});

my_mazes.core.update_maze_display_BANG_ = (function my_mazes$core$update_maze_display_BANG_(){
var map__69333 = cljs.core.deref.call(null,my_mazes.core.app_state);
var map__69333__$1 = ((((!((map__69333 == null)))?((((map__69333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69333):map__69333);
var maze = cljs.core.get.call(null,map__69333__$1,new cljs.core.Keyword(null,"maze","maze",1753749814));
var size = cljs.core.get.call(null,map__69333__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var line_width = cljs.core.get.call(null,map__69333__$1,new cljs.core.Keyword(null,"line-width","line-width",-906934988));
var zoomed_maze = my_mazes.core.transform_polylines.call(null,((function (map__69333,map__69333__$1,maze,size,line_width){
return (function (p1__69321_SHARP_){
return thi.ng.geom.core.scale.call(null,p1__69321_SHARP_,size);
});})(map__69333,map__69333__$1,maze,size,line_width))
,maze);
var scene_bb = my_mazes.core.bounding_box.call(null,zoomed_maze);
var vec__69334 = scene_bb;
var vec__69337 = cljs.core.nth.call(null,vec__69334,(0),null);
var x_min = cljs.core.nth.call(null,vec__69337,(0),null);
var y_min = cljs.core.nth.call(null,vec__69337,(1),null);
var vec__69340 = cljs.core.nth.call(null,vec__69334,(1),null);
var x_max = cljs.core.nth.call(null,vec__69340,(0),null);
var y_max = cljs.core.nth.call(null,vec__69340,(1),null);
var w = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((x_max - x_min) + line_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var h = (function (){var x__7722__auto__ = (64);
var y__7723__auto__ = ((y_max - y_min) + line_width);
return ((x__7722__auto__ > y__7723__auto__) ? x__7722__auto__ : y__7723__auto__);
})();
var paint_BANG_ = cljs.core.partial.call(null,my_mazes.core.draw_scene_BANG_,thi.ng.domus.core.by_id.call(null,"maze"),w,h);
var _ = my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dummy","dummy",2059765854),null);
return paint_BANG_.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,my_mazes.core.svg_polyline,"#00F",line_width),my_mazes.core.transform_polylines.call(null,cljs.core.partial.call(null,thi.ng.math.core._PLUS_,thi.ng.math.core._.call(null,my_mazes.core.barycenter.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.vector.vec2.call(null,(0),(0)),thi.ng.geom.vector.vec2.call(null,w,h)], null)),my_mazes.core.barycenter.call(null,scene_bb))),zoomed_maze)));
});
my_mazes.core.compute_maze = (function my_mazes$core$compute_maze(indexed_cells,bias_f){
var cells = cljs.core.vals.call(null,indexed_cells);
var bias = bias_f.call(null,my_mazes.core.bounding_box.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"borders","borders",-2120100848),cells)));
return my_mazes.core.remove_min.call(null,cljs.core.complement.call(null,my_mazes.core.less_than_seg_QMARK_),my_mazes.core.remove_min.call(null,my_mazes.core.less_than_seg_QMARK_,my_mazes.core.maze__GT_polylines.call(null,cells,my_mazes.core.remove_walls.call(null,(0),bias,indexed_cells))));
});
my_mazes.core.update_maze_BANG_ = (function my_mazes$core$update_maze_BANG_(){
var map__69349 = cljs.core.deref.call(null,my_mazes.core.app_state);
var map__69349__$1 = ((((!((map__69349 == null)))?((((map__69349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69349):map__69349);
var indexed_cells = cljs.core.get.call(null,map__69349__$1,new cljs.core.Keyword(null,"indexed-cells","indexed-cells",-298930545));
var bias = cljs.core.get.call(null,map__69349__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));
var bias_f = (function (){var pred__69351 = cljs.core._EQ_;
var expr__69352 = bias;
if(cljs.core.truth_(pred__69351.call(null,"vertical",expr__69352))){
return my_mazes.core.make_vertical_bias;
} else {
if(cljs.core.truth_(pred__69351.call(null,"horizontal",expr__69352))){
return my_mazes.core.make_horizontal_bias;
} else {
if(cljs.core.truth_(pred__69351.call(null,"T",expr__69352))){
return my_mazes.core.make_T_bias;
} else {
return ((function (pred__69351,expr__69352,map__69349,map__69349__$1,indexed_cells,bias){
return (function (_){
return my_mazes.core.no_bias;
});
;})(pred__69351,expr__69352,map__69349,map__69349__$1,indexed_cells,bias))
}
}
}
})();
my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"maze","maze",1753749814),my_mazes.core.compute_maze.call(null,indexed_cells,bias_f));

return my_mazes.core.update_maze_display_BANG_.call(null);
});
my_mazes.core.compute_cells = (function my_mazes$core$compute_cells(shape_f,rows,cols){
return my_mazes.core.scene__GT_graph.call(null,shape_f.call(null,rows,cols,1.0));
});
my_mazes.core.update_cells_BANG_ = (function my_mazes$core$update_cells_BANG_(){
var map__69359 = cljs.core.deref.call(null,my_mazes.core.app_state);
var map__69359__$1 = ((((!((map__69359 == null)))?((((map__69359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69359):map__69359);
var shape = cljs.core.get.call(null,map__69359__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var rows = cljs.core.get.call(null,map__69359__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var cols = cljs.core.get.call(null,map__69359__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var shape_f = (function (){var pred__69361 = cljs.core._EQ_;
var expr__69362 = shape;
if(cljs.core.truth_(pred__69361.call(null,"hexagon",expr__69362))){
return my_mazes.core.hexagon_grid;
} else {
if(cljs.core.truth_(pred__69361.call(null,"square",expr__69362))){
return my_mazes.core.square_grid;
} else {
return my_mazes.core.square_grid;
}
}
})();
my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"indexed-cells","indexed-cells",-298930545),my_mazes.core.compute_cells.call(null,shape_f,rows,cols));

return my_mazes.core.update_maze_BANG_.call(null);
});
my_mazes.core.callbacks = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cols","cols",-1914801295),my_mazes.core.update_cells_BANG_,new cljs.core.Keyword(null,"rows","rows",850049680),my_mazes.core.update_cells_BANG_,new cljs.core.Keyword(null,"size","size",1098693007),my_mazes.core.update_maze_display_BANG_,new cljs.core.Keyword(null,"line-width","line-width",-906934988),my_mazes.core.update_maze_display_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),my_mazes.core.update_cells_BANG_,new cljs.core.Keyword(null,"bias","bias",-315297926),my_mazes.core.update_maze_BANG_], null);
my_mazes.core.slider = (function my_mazes$core$slider(param,value,min,max,width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(width),cljs.core.str("%")].join('')], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,param,(e.target.value | (0)));

return param.call(null,my_mazes.core.callbacks).call(null);
})], null)], null);
});
my_mazes.core.menu = (function my_mazes$core$menu(id,param,values){
var current = param.call(null,cljs.core.deref.call(null,my_mazes.core.app_state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),current,new cljs.core.Keyword(null,"name","name",1843675177),current,new cljs.core.Keyword(null,"value","value",305978217),current,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current){
return (function (p1__69364_SHARP_){
my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.assoc,param,p1__69364_SHARP_.target.value);

return param.call(null,my_mazes.core.callbacks).call(null);
});})(current))
], null),(function (){var iter__8246__auto__ = ((function (current){
return (function my_mazes$core$menu_$_iter__69369(s__69370){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__69370__$1 = s__69370;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__69370__$1);
if(temp__6753__auto__){
var s__69370__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69370__$2)){
var c__8244__auto__ = cljs.core.chunk_first.call(null,s__69370__$2);
var size__8245__auto__ = cljs.core.count.call(null,c__8244__auto__);
var b__69372 = cljs.core.chunk_buffer.call(null,size__8245__auto__);
if((function (){var i__69371 = (0);
while(true){
if((i__69371 < size__8245__auto__)){
var v = cljs.core._nth.call(null,c__8244__auto__,i__69371);
cljs.core.chunk_append.call(null,b__69372,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__69373 = (i__69371 + (1));
i__69371 = G__69373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69372),my_mazes$core$menu_$_iter__69369.call(null,cljs.core.chunk_rest.call(null,s__69370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69372),null);
}
} else {
var v = cljs.core.first.call(null,s__69370__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),my_mazes$core$menu_$_iter__69369.call(null,cljs.core.rest.call(null,s__69370__$2)));
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
return iter__8246__auto__.call(null,values);
})()], null);
});
/**
 * Application root component
 */
my_mazes.core.main_panel = (function my_mazes$core$main_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(1),(100),(50)], null),"cols: ",new cljs.core.Keyword(null,"cols","cols",-1914801295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(1),(100),(50)], null),"rows : ",new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(10),(100),(50)], null),"size : ",new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_mazes.core.slider,new cljs.core.Keyword(null,"line-width","line-width",-906934988),new cljs.core.Keyword(null,"line-width","line-width",-906934988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state)),(1),(10),(20)], null),"line width : ",new cljs.core.Keyword(null,"line-width","line-width",-906934988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,my_mazes.core.app_state))], null),my_mazes.core.menu.call(null,"shape",new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["square","hexagon"], null)),my_mazes.core.menu.call(null,"Bias",new cljs.core.Keyword(null,"bias","bias",-315297926),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unbiased","vertical","horizontal","T"], null))], null);
});
/**
 * Initializes app-state atom with default state
 */
my_mazes.core.init_app = (function my_mazes$core$init_app(){
my_mazes.core.swap_STAR__BANG_.call(null,my_mazes.core.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cols","cols",-1914801295),(2),new cljs.core.Keyword(null,"rows","rows",850049680),(2),new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"line-width","line-width",-906934988),(5),new cljs.core.Keyword(null,"shape","shape",1190694006),"square",new cljs.core.Keyword(null,"bias","bias",-315297926),"unbiased"], null));

return my_mazes.core.update_cells_BANG_.call(null);
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