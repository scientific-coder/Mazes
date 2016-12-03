// Compiled by ClojureScript 1.9.293 {}
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.vector');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap,__hash){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11699,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11701 = (((k11699 instanceof cljs.core.Keyword))?k11699.fqn:null);
switch (G__11701) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11699,else__8062__auto__);

}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11698){
var self__ = this;
var G__11698__$1 = this;
return (new cljs.core.RecordIter((0),G__11698__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11698){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11702 = cljs.core.keyword_identical_QMARK_;
var expr__11703 = k__8067__auto__;
if(cljs.core.truth_(pred__11702.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11703))){
return (new thi.ng.geom.types.Graph(G__11698,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11702.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11703))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__11698,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11698),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11698){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__11698,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Graph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"edges","edges",945740132,null)], null);
});

thi.ng.geom.types.Graph.cljs$lang$type = true;

thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Graph");
});

thi.ng.geom.types.__GT_Graph = (function thi$ng$geom$types$__GT_Graph(vertices,edges){
return (new thi.ng.geom.types.Graph(vertices,edges,null,null,null));
});

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__11700){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11700),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11700),null,cljs.core.dissoc.call(null,G__11700,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11707,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11709 = (((k11707 instanceof cljs.core.Keyword))?k11707.fqn:null);
switch (G__11709) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11707,else__8062__auto__);

}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11706){
var self__ = this;
var G__11706__$1 = this;
return (new cljs.core.RecordIter((0),G__11706__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11706){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11710 = cljs.core.keyword_identical_QMARK_;
var expr__11711 = k__8067__auto__;
if(cljs.core.truth_(pred__11710.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11711))){
return (new thi.ng.geom.types.Bezier2(G__11706,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11706),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11706){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__11706,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Bezier2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier2.cljs$lang$type = true;

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Bezier2");
});

thi.ng.geom.types.__GT_Bezier2 = (function thi$ng$geom$types$__GT_Bezier2(points){
return (new thi.ng.geom.types.Bezier2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__11708){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11708),null,cljs.core.dissoc.call(null,G__11708,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11715,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11717 = (((k11715 instanceof cljs.core.Keyword))?k11715.fqn:null);
switch (G__11717) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11715,else__8062__auto__);

}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11714){
var self__ = this;
var G__11714__$1 = this;
return (new cljs.core.RecordIter((0),G__11714__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11714){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11718 = cljs.core.keyword_identical_QMARK_;
var expr__11719 = k__8067__auto__;
if(cljs.core.truth_(pred__11718.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11719))){
return (new thi.ng.geom.types.Circle2(G__11714,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11718.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__11719))){
return (new thi.ng.geom.types.Circle2(self__.p,G__11714,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11714),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11714){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__11714,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Circle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Circle2.cljs$lang$type = true;

thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Circle2");
});

thi.ng.geom.types.__GT_Circle2 = (function thi$ng$geom$types$__GT_Circle2(p,r){
return (new thi.ng.geom.types.Circle2(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__11716){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11716),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__11716),null,cljs.core.dissoc.call(null,G__11716,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap,__hash){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11723,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11725 = (((k11723 instanceof cljs.core.Keyword))?k11723.fqn:null);
switch (G__11725) {
case "p":
return self__.p;

break;
case "rx":
return self__.rx;

break;
case "ry":
return self__.ry;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11723,else__8062__auto__);

}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11722){
var self__ = this;
var G__11722__$1 = this;
return (new cljs.core.RecordIter((0),G__11722__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"p","p",151049309),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11722){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11726 = cljs.core.keyword_identical_QMARK_;
var expr__11727 = k__8067__auto__;
if(cljs.core.truth_(pred__11726.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11727))){
return (new thi.ng.geom.types.Ellipse2(G__11722,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11726.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__11727))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__11722,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11726.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__11727))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__11722,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11722),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11722){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__11722,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Ellipse2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"rx","rx",-1027227287,null),new cljs.core.Symbol(null,"ry","ry",1305932964,null)], null);
});

thi.ng.geom.types.Ellipse2.cljs$lang$type = true;

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Ellipse2");
});

thi.ng.geom.types.__GT_Ellipse2 = (function thi$ng$geom$types$__GT_Ellipse2(p,rx,ry){
return (new thi.ng.geom.types.Ellipse2(p,rx,ry,null,null,null));
});

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__11724){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11724),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__11724),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__11724),null,cljs.core.dissoc.call(null,G__11724,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11731,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11733 = (((k11731 instanceof cljs.core.Keyword))?k11731.fqn:null);
switch (G__11733) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11731,else__8062__auto__);

}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11730){
var self__ = this;
var G__11730__$1 = this;
return (new cljs.core.RecordIter((0),G__11730__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11730){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11734 = cljs.core.keyword_identical_QMARK_;
var expr__11735 = k__8067__auto__;
if(cljs.core.truth_(pred__11734.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11735))){
return (new thi.ng.geom.types.Line2(G__11730,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11730),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11730){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__11730,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Line2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line2.cljs$lang$type = true;

thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Line2");
});

thi.ng.geom.types.__GT_Line2 = (function thi$ng$geom$types$__GT_Line2(points){
return (new thi.ng.geom.types.Line2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__11732){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11732),null,cljs.core.dissoc.call(null,G__11732,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11739,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11741 = (((k11739 instanceof cljs.core.Keyword))?k11739.fqn:null);
switch (G__11741) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11739,else__8062__auto__);

}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11738){
var self__ = this;
var G__11738__$1 = this;
return (new cljs.core.RecordIter((0),G__11738__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11738){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11742 = cljs.core.keyword_identical_QMARK_;
var expr__11743 = k__8067__auto__;
if(cljs.core.truth_(pred__11742.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11743))){
return (new thi.ng.geom.types.LineStrip2(G__11738,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11738),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11738){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__11738,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.LineStrip2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip2.cljs$lang$type = true;

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/LineStrip2");
});

thi.ng.geom.types.__GT_LineStrip2 = (function thi$ng$geom$types$__GT_LineStrip2(points){
return (new thi.ng.geom.types.LineStrip2(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__11740){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11740),null,cljs.core.dissoc.call(null,G__11740,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11747,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11749 = (((k11747 instanceof cljs.core.Keyword))?k11747.fqn:null);
switch (G__11749) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11747,else__8062__auto__);

}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11746){
var self__ = this;
var G__11746__$1 = this;
return (new cljs.core.RecordIter((0),G__11746__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11746){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11750 = cljs.core.keyword_identical_QMARK_;
var expr__11751 = k__8067__auto__;
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11751))){
return (new thi.ng.geom.types.Mesh2(G__11746,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__11746,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__11746,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__11746,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11746,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11746,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11750.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__11751))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11746,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11746),null));
}
}
}
}
}
}
}
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11746){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__11746,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Mesh2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.Mesh2.cljs$lang$type = true;

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Mesh2");
});

thi.ng.geom.types.__GT_Mesh2 = (function thi$ng$geom$types$__GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){
return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__11748){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11748),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__11748),null,cljs.core.dissoc.call(null,G__11748,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap,__hash){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11755,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11757 = (((k11755 instanceof cljs.core.Keyword))?k11755.fqn:null);
switch (G__11757) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11755,else__8062__auto__);

}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11754){
var self__ = this;
var G__11754__$1 = this;
return (new cljs.core.RecordIter((0),G__11754__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",1937535949),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11754){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11758 = cljs.core.keyword_identical_QMARK_;
var expr__11759 = k__8067__auto__;
if(cljs.core.truth_(pred__11758.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__11759))){
return (new thi.ng.geom.types.Path2(G__11754,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11754),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11754){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__11754,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Path2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"segments","segments",-716899820,null)], null);
});

thi.ng.geom.types.Path2.cljs$lang$type = true;

thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Path2");
});

thi.ng.geom.types.__GT_Path2 = (function thi$ng$geom$types$__GT_Path2(segments){
return (new thi.ng.geom.types.Path2(segments,null,null,null));
});

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__11756){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__11756),null,cljs.core.dissoc.call(null,G__11756,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11763,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11765 = (((k11763 instanceof cljs.core.Keyword))?k11763.fqn:null);
switch (G__11765) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11763,else__8062__auto__);

}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11762){
var self__ = this;
var G__11762__$1 = this;
return (new cljs.core.RecordIter((0),G__11762__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11762){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11766 = cljs.core.keyword_identical_QMARK_;
var expr__11767 = k__8067__auto__;
if(cljs.core.truth_(pred__11766.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11767))){
return (new thi.ng.geom.types.Polygon2(G__11762,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11762),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11762){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__11762,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Polygon2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Polygon2.cljs$lang$type = true;

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Polygon2");
});

thi.ng.geom.types.__GT_Polygon2 = (function thi$ng$geom$types$__GT_Polygon2(points){
return (new thi.ng.geom.types.Polygon2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__11764){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11764),null,cljs.core.dissoc.call(null,G__11764,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11771,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11773 = (((k11771 instanceof cljs.core.Keyword))?k11771.fqn:null);
switch (G__11773) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11771,else__8062__auto__);

}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11770){
var self__ = this;
var G__11770__$1 = this;
return (new cljs.core.RecordIter((0),G__11770__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11770){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11774 = cljs.core.keyword_identical_QMARK_;
var expr__11775 = k__8067__auto__;
if(cljs.core.truth_(pred__11774.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11775))){
return (new thi.ng.geom.types.Rect2(G__11770,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11774.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__11775))){
return (new thi.ng.geom.types.Rect2(self__.p,G__11770,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11770),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11770){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__11770,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Rect2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.Rect2.cljs$lang$type = true;

thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Rect2");
});

thi.ng.geom.types.__GT_Rect2 = (function thi$ng$geom$types$__GT_Rect2(p,size){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__11772){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11772),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__11772),null,cljs.core.dissoc.call(null,G__11772,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11779,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11781 = (((k11779 instanceof cljs.core.Keyword))?k11779.fqn:null);
switch (G__11781) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11779,else__8062__auto__);

}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11778){
var self__ = this;
var G__11778__$1 = this;
return (new cljs.core.RecordIter((0),G__11778__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11778){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11782 = cljs.core.keyword_identical_QMARK_;
var expr__11783 = k__8067__auto__;
if(cljs.core.truth_(pred__11782.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11783))){
return (new thi.ng.geom.types.Triangle2(G__11778,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11778),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11778){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__11778,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Triangle2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle2.cljs$lang$type = true;

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Triangle2");
});

thi.ng.geom.types.__GT_Triangle2 = (function thi$ng$geom$types$__GT_Triangle2(points){
return (new thi.ng.geom.types.Triangle2(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__11780){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11780),null,cljs.core.dissoc.call(null,G__11780,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap,__hash){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11787,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11789 = (((k11787 instanceof cljs.core.Keyword))?k11787.fqn:null);
switch (G__11789) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11787,else__8062__auto__);

}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11786){
var self__ = this;
var G__11786__$1 = this;
return (new cljs.core.RecordIter((0),G__11786__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11786){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11790 = cljs.core.keyword_identical_QMARK_;
var expr__11791 = k__8067__auto__;
if(cljs.core.truth_(pred__11790.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11791))){
return (new thi.ng.geom.types.AABB(G__11786,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11790.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__11791))){
return (new thi.ng.geom.types.AABB(self__.p,G__11786,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11786),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11786){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__11786,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.AABB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Vec3","Vec3",429395803,null)], null)),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

thi.ng.geom.types.AABB.cljs$lang$type = true;

thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/AABB");
});

thi.ng.geom.types.__GT_AABB = (function thi$ng$geom$types$__GT_AABB(p,size){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
});

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__11788){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11788),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__11788),null,cljs.core.dissoc.call(null,G__11788,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11795,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11797 = (((k11795 instanceof cljs.core.Keyword))?k11795.fqn:null);
switch (G__11797) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11795,else__8062__auto__);

}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11794){
var self__ = this;
var G__11794__$1 = this;
return (new cljs.core.RecordIter((0),G__11794__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11794){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11798 = cljs.core.keyword_identical_QMARK_;
var expr__11799 = k__8067__auto__;
if(cljs.core.truth_(pred__11798.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11799))){
return (new thi.ng.geom.types.Cuboid(G__11794,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11794),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11794){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__11794,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Cuboid.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Cuboid.cljs$lang$type = true;

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Cuboid");
});

thi.ng.geom.types.__GT_Cuboid = (function thi$ng$geom$types$__GT_Cuboid(points){
return (new thi.ng.geom.types.Cuboid(points,null,null,null));
});

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__11796){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11796),null,cljs.core.dissoc.call(null,G__11796,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11803,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11805 = (((k11803 instanceof cljs.core.Keyword))?k11803.fqn:null);
switch (G__11805) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11803,else__8062__auto__);

}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11802){
var self__ = this;
var G__11802__$1 = this;
return (new cljs.core.RecordIter((0),G__11802__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11802){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11806 = cljs.core.keyword_identical_QMARK_;
var expr__11807 = k__8067__auto__;
if(cljs.core.truth_(pred__11806.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11807))){
return (new thi.ng.geom.types.Bezier3(G__11802,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11802),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11802){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__11802,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Bezier3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Bezier3.cljs$lang$type = true;

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Bezier3");
});

thi.ng.geom.types.__GT_Bezier3 = (function thi$ng$geom$types$__GT_Bezier3(points){
return (new thi.ng.geom.types.Bezier3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__11804){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11804),null,cljs.core.dissoc.call(null,G__11804,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.BasicMesh = (function (vertices,faces,fnormals,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.fnormals = fnormals;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11811,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11813 = (((k11811 instanceof cljs.core.Keyword))?k11811.fqn:null);
switch (G__11813) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "fnormals":
return self__.fnormals;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11811,else__8062__auto__);

}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.BasicMesh{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11810){
var self__ = this;
var G__11810__$1 = this;
return (new cljs.core.RecordIter((0),G__11810__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11810){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11814 = cljs.core.keyword_identical_QMARK_;
var expr__11815 = k__8067__auto__;
if(cljs.core.truth_(pred__11814.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11815))){
return (new thi.ng.geom.types.BasicMesh(G__11810,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11814.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11815))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__11810,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11814.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11815))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__11810,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11810),null));
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11810){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__11810,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.BasicMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null)], null);
});

thi.ng.geom.types.BasicMesh.cljs$lang$type = true;

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.BasicMesh.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/BasicMesh");
});

thi.ng.geom.types.__GT_BasicMesh = (function thi$ng$geom$types$__GT_BasicMesh(vertices,faces,fnormals){
return (new thi.ng.geom.types.BasicMesh(vertices,faces,fnormals,null,null,null));
});

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__11812){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11812),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11812),null,cljs.core.dissoc.call(null,G__11812,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,__meta,__extmap,__hash){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11819,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11821 = (((k11819 instanceof cljs.core.Keyword))?k11819.fqn:null);
switch (G__11821) {
case "vertices":
return self__.vertices;

break;
case "normals":
return self__.normals;

break;
case "fnormals":
return self__.fnormals;

break;
case "vnormals":
return self__.vnormals;

break;
case "edges":
return self__.edges;

break;
case "faces":
return self__.faces;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11819,else__8062__auto__);

}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11818){
var self__ = this;
var G__11818__$1 = this;
return (new cljs.core.RecordIter((0),G__11818__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),null,new cljs.core.Keyword(null,"normals","normals",-1508109067),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null,new cljs.core.Keyword(null,"edges","edges",-694791395),null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11818){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11822 = cljs.core.keyword_identical_QMARK_;
var expr__11823 = k__8067__auto__;
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11823))){
return (new thi.ng.geom.types.GMesh(G__11818,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__11823))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__11818,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11823))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__11818,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__11823))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__11818,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11823))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11818,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11822.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11823))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11818,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11818),null));
}
}
}
}
}
}
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",-1508109067),self__.normals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null))], null),self__.__extmap));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11818){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11818,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.GMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"normals","normals",132422460,null),new cljs.core.Symbol(null,"fnormals","fnormals",-143467036,null),new cljs.core.Symbol(null,"vnormals","vnormals",725656243,null),new cljs.core.Symbol(null,"edges","edges",945740132,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null)], null);
});

thi.ng.geom.types.GMesh.cljs$lang$type = true;

thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/GMesh");
});

thi.ng.geom.types.__GT_GMesh = (function thi$ng$geom$types$__GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces){
return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,null,null,null));
});

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__11820){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11820),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__11820),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11820),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__11820),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11820),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11820),null,cljs.core.dissoc.call(null,G__11820,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.IndexedMesh = (function (vertices,faces,attribs,__meta,__extmap,__hash){
this.vertices = vertices;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11827,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11829 = (((k11827 instanceof cljs.core.Keyword))?k11827.fqn:null);
switch (G__11829) {
case "vertices":
return self__.vertices;

break;
case "faces":
return self__.faces;

break;
case "attribs":
return self__.attribs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11827,else__8062__auto__);

}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.IndexedMesh{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11826){
var self__ = this;
var G__11826__$1 = this;
return (new cljs.core.RecordIter((0),G__11826__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),null,new cljs.core.Keyword(null,"faces","faces",-73909544),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11826){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11830 = cljs.core.keyword_identical_QMARK_;
var expr__11831 = k__8067__auto__;
if(cljs.core.truth_(pred__11830.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11831))){
return (new thi.ng.geom.types.IndexedMesh(G__11826,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11830.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11831))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,G__11826,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11830.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__11831))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,G__11826,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11826),null));
}
}
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11826){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,G__11826,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.IndexedMesh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"faces","faces",1566621983,null),new cljs.core.Symbol(null,"attribs","attribs",1502653434,null)], null);
});

thi.ng.geom.types.IndexedMesh.cljs$lang$type = true;

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.IndexedMesh.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/IndexedMesh");
});

thi.ng.geom.types.__GT_IndexedMesh = (function thi$ng$geom$types$__GT_IndexedMesh(vertices,faces,attribs){
return (new thi.ng.geom.types.IndexedMesh(vertices,faces,attribs,null,null,null));
});

thi.ng.geom.types.map__GT_IndexedMesh = (function thi$ng$geom$types$map__GT_IndexedMesh(G__11828){
return (new thi.ng.geom.types.IndexedMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11828),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11828),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__11828),null,cljs.core.dissoc.call(null,G__11828,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11835,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11837 = (((k11835 instanceof cljs.core.Keyword))?k11835.fqn:null);
switch (G__11837) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11835,else__8062__auto__);

}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11834){
var self__ = this;
var G__11834__$1 = this;
return (new cljs.core.RecordIter((0),G__11834__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11834){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11838 = cljs.core.keyword_identical_QMARK_;
var expr__11839 = k__8067__auto__;
if(cljs.core.truth_(pred__11838.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11839))){
return (new thi.ng.geom.types.Line3(G__11834,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11834),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11834){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__11834,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Line3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Line3.cljs$lang$type = true;

thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Line3");
});

thi.ng.geom.types.__GT_Line3 = (function thi$ng$geom$types$__GT_Line3(points){
return (new thi.ng.geom.types.Line3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__11836){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11836),null,cljs.core.dissoc.call(null,G__11836,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11843,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11845 = (((k11843 instanceof cljs.core.Keyword))?k11843.fqn:null);
switch (G__11845) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11843,else__8062__auto__);

}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11842){
var self__ = this;
var G__11842__$1 = this;
return (new cljs.core.RecordIter((0),G__11842__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11842){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11846 = cljs.core.keyword_identical_QMARK_;
var expr__11847 = k__8067__auto__;
if(cljs.core.truth_(pred__11846.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11847))){
return (new thi.ng.geom.types.LineStrip3(G__11842,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11842),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11842){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__11842,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.LineStrip3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.LineStrip3.cljs$lang$type = true;

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/LineStrip3");
});

thi.ng.geom.types.__GT_LineStrip3 = (function thi$ng$geom$types$__GT_LineStrip3(points){
return (new thi.ng.geom.types.LineStrip3(points,null,null,null));
});

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__11844){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11844),null,cljs.core.dissoc.call(null,G__11844,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap,__hash){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11851,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11853 = (((k11851 instanceof cljs.core.Keyword))?k11851.fqn:null);
switch (G__11853) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11851,else__8062__auto__);

}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11850){
var self__ = this;
var G__11850__$1 = this;
return (new cljs.core.RecordIter((0),G__11850__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11850){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11854 = cljs.core.keyword_identical_QMARK_;
var expr__11855 = k__8067__auto__;
if(cljs.core.truth_(pred__11854.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__11855))){
return (new thi.ng.geom.types.Plane(G__11850,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11854.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__11855))){
return (new thi.ng.geom.types.Plane(self__.n,G__11850,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11850),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11850){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__11850,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Plane.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"w","w",1994700528,null)], null);
});

thi.ng.geom.types.Plane.cljs$lang$type = true;

thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Plane");
});

thi.ng.geom.types.__GT_Plane = (function thi$ng$geom$types$__GT_Plane(n,w){
return (new thi.ng.geom.types.Plane(n,w,null,null,null));
});

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__11852){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__11852),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11852),null,cljs.core.dissoc.call(null,G__11852,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11859,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11861 = (((k11859 instanceof cljs.core.Keyword))?k11859.fqn:null);
switch (G__11861) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11859,else__8062__auto__);

}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11858){
var self__ = this;
var G__11858__$1 = this;
return (new cljs.core.RecordIter((0),G__11858__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11858){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11862 = cljs.core.keyword_identical_QMARK_;
var expr__11863 = k__8067__auto__;
if(cljs.core.truth_(pred__11862.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11863))){
return (new thi.ng.geom.types.Quad3(G__11858,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11858),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11858){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__11858,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Quad3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Quad3.cljs$lang$type = true;

thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Quad3");
});

thi.ng.geom.types.__GT_Quad3 = (function thi$ng$geom$types$__GT_Quad3(points){
return (new thi.ng.geom.types.Quad3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__11860){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11860),null,cljs.core.dissoc.call(null,G__11860,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap,__hash){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11867,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11869 = (((k11867 instanceof cljs.core.Keyword))?k11867.fqn:null);
switch (G__11869) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11867,else__8062__auto__);

}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11866){
var self__ = this;
var G__11866__$1 = this;
return (new cljs.core.RecordIter((0),G__11866__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11866){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11870 = cljs.core.keyword_identical_QMARK_;
var expr__11871 = k__8067__auto__;
if(cljs.core.truth_(pred__11870.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11871))){
return (new thi.ng.geom.types.Sphere(G__11866,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11870.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__11871))){
return (new thi.ng.geom.types.Sphere(self__.p,G__11866,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11866),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11866){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__11866,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Sphere.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null)], null);
});

thi.ng.geom.types.Sphere.cljs$lang$type = true;

thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Sphere");
});

thi.ng.geom.types.__GT_Sphere = (function thi$ng$geom$types$__GT_Sphere(p,r){
return (new thi.ng.geom.types.Sphere(p,r,null,null,null));
});

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__11868){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11868),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__11868),null,cljs.core.dissoc.call(null,G__11868,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11875,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11877 = (((k11875 instanceof cljs.core.Keyword))?k11875.fqn:null);
switch (G__11877) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11875,else__8062__auto__);

}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11874){
var self__ = this;
var G__11874__$1 = this;
return (new cljs.core.RecordIter((0),G__11874__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11874){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11878 = cljs.core.keyword_identical_QMARK_;
var expr__11879 = k__8067__auto__;
if(cljs.core.truth_(pred__11878.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11879))){
return (new thi.ng.geom.types.Tetrahedron(G__11874,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11874),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11874){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__11874,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Tetrahedron.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Tetrahedron");
});

thi.ng.geom.types.__GT_Tetrahedron = (function thi$ng$geom$types$__GT_Tetrahedron(points){
return (new thi.ng.geom.types.Tetrahedron(points,null,null,null));
});

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__11876){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11876),null,cljs.core.dissoc.call(null,G__11876,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11883,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11885 = (((k11883 instanceof cljs.core.Keyword))?k11883.fqn:null);
switch (G__11885) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11883,else__8062__auto__);

}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11882){
var self__ = this;
var G__11882__$1 = this;
return (new cljs.core.RecordIter((0),G__11882__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap.call(null,this__8054__auto____$1);
self__.__hash = h__7826__auto____$1;

return h__7826__auto____$1;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
var self__ = this;
var this__8055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7377__auto__ = other__8056__auto__;
if(cljs.core.truth_(and__7377__auto__)){
var and__7377__auto____$1 = (this__8055__auto____$1.constructor === other__8056__auto__.constructor);
if(and__7377__auto____$1){
return cljs.core.equiv_map.call(null,this__8055__auto____$1,other__8056__auto__);
} else {
return and__7377__auto____$1;
}
} else {
return and__7377__auto__;
}
})())){
return true;
} else {
return false;
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11882){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11886 = cljs.core.keyword_identical_QMARK_;
var expr__11887 = k__8067__auto__;
if(cljs.core.truth_(pred__11886.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11887))){
return (new thi.ng.geom.types.Triangle3(G__11882,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11882),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11882){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__11882,self__.__extmap,self__.__hash));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

thi.ng.geom.types.Triangle3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
});

thi.ng.geom.types.Triangle3.cljs$lang$type = true;

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"thi.ng.geom.types/Triangle3");
});

thi.ng.geom.types.__GT_Triangle3 = (function thi$ng$geom$types$__GT_Triangle3(points){
return (new thi.ng.geom.types.Triangle3(points,null,null,null));
});

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__11884){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11884),null,cljs.core.dissoc.call(null,G__11884,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map