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

thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11559,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11561 = (((k11559 instanceof cljs.core.Keyword))?k11559.fqn:null);
switch (G__11561) {
case "vertices":
return self__.vertices;

break;
case "edges":
return self__.edges;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11559,else__8062__auto__);

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

thi.ng.geom.types.Graph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11558){
var self__ = this;
var G__11558__$1 = this;
return (new cljs.core.RecordIter((0),G__11558__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11558){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11562 = cljs.core.keyword_identical_QMARK_;
var expr__11563 = k__8067__auto__;
if(cljs.core.truth_(pred__11562.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11563))){
return (new thi.ng.geom.types.Graph(G__11558,self__.edges,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11562.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11563))){
return (new thi.ng.geom.types.Graph(self__.vertices,G__11558,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11558),null));
}
}
});

thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",-694791395),self__.edges],null))], null),self__.__extmap));
});

thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11558){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__11558,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Graph = (function thi$ng$geom$types$map__GT_Graph(G__11560){
return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11560),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11560),null,cljs.core.dissoc.call(null,G__11560,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"edges","edges",-694791395)),null));
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11567,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11569 = (((k11567 instanceof cljs.core.Keyword))?k11567.fqn:null);
switch (G__11569) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11567,else__8062__auto__);

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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11566){
var self__ = this;
var G__11566__$1 = this;
return (new cljs.core.RecordIter((0),G__11566__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11566){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11570 = cljs.core.keyword_identical_QMARK_;
var expr__11571 = k__8067__auto__;
if(cljs.core.truth_(pred__11570.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11571))){
return (new thi.ng.geom.types.Bezier2(G__11566,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11566),null));
}
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11566){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Bezier2(self__.points,G__11566,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Bezier2 = (function thi$ng$geom$types$map__GT_Bezier2(G__11568){
return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11568),null,cljs.core.dissoc.call(null,G__11568,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11575,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11577 = (((k11575 instanceof cljs.core.Keyword))?k11575.fqn:null);
switch (G__11577) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11575,else__8062__auto__);

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

thi.ng.geom.types.Circle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11574){
var self__ = this;
var G__11574__$1 = this;
return (new cljs.core.RecordIter((0),G__11574__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11574){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11578 = cljs.core.keyword_identical_QMARK_;
var expr__11579 = k__8067__auto__;
if(cljs.core.truth_(pred__11578.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11579))){
return (new thi.ng.geom.types.Circle2(G__11574,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11578.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__11579))){
return (new thi.ng.geom.types.Circle2(self__.p,G__11574,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11574),null));
}
}
});

thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11574){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__11574,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Circle2 = (function thi$ng$geom$types$map__GT_Circle2(G__11576){
return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11576),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__11576),null,cljs.core.dissoc.call(null,G__11576,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11583,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11585 = (((k11583 instanceof cljs.core.Keyword))?k11583.fqn:null);
switch (G__11585) {
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
return cljs.core.get.call(null,self__.__extmap,k11583,else__8062__auto__);

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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11582){
var self__ = this;
var G__11582__$1 = this;
return (new cljs.core.RecordIter((0),G__11582__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11582){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11586 = cljs.core.keyword_identical_QMARK_;
var expr__11587 = k__8067__auto__;
if(cljs.core.truth_(pred__11586.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11587))){
return (new thi.ng.geom.types.Ellipse2(G__11582,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11586.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482),expr__11587))){
return (new thi.ng.geom.types.Ellipse2(self__.p,G__11582,self__.ry,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11586.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563),expr__11587))){
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__11582,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11582),null));
}
}
}
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1627208482),self__.rx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",-334598563),self__.ry],null))], null),self__.__extmap));
});

thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11582){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__11582,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Ellipse2 = (function thi$ng$geom$types$map__GT_Ellipse2(G__11584){
return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11584),new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(G__11584),new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(G__11584),null,cljs.core.dissoc.call(null,G__11584,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)),null));
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

thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11591,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11593 = (((k11591 instanceof cljs.core.Keyword))?k11591.fqn:null);
switch (G__11593) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11591,else__8062__auto__);

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

thi.ng.geom.types.Line2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11590){
var self__ = this;
var G__11590__$1 = this;
return (new cljs.core.RecordIter((0),G__11590__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11590){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11594 = cljs.core.keyword_identical_QMARK_;
var expr__11595 = k__8067__auto__;
if(cljs.core.truth_(pred__11594.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11595))){
return (new thi.ng.geom.types.Line2(G__11590,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11590),null));
}
});

thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11590){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Line2(self__.points,G__11590,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Line2 = (function thi$ng$geom$types$map__GT_Line2(G__11592){
return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11592),null,cljs.core.dissoc.call(null,G__11592,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11599,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11601 = (((k11599 instanceof cljs.core.Keyword))?k11599.fqn:null);
switch (G__11601) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11599,else__8062__auto__);

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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11598){
var self__ = this;
var G__11598__$1 = this;
return (new cljs.core.RecordIter((0),G__11598__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11598){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11602 = cljs.core.keyword_identical_QMARK_;
var expr__11603 = k__8067__auto__;
if(cljs.core.truth_(pred__11602.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11603))){
return (new thi.ng.geom.types.LineStrip2(G__11598,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11598),null));
}
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11598){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip2(self__.points,G__11598,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_LineStrip2 = (function thi$ng$geom$types$map__GT_LineStrip2(G__11600){
return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11600),null,cljs.core.dissoc.call(null,G__11600,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11607,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11609 = (((k11607 instanceof cljs.core.Keyword))?k11607.fqn:null);
switch (G__11609) {
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
return cljs.core.get.call(null,self__.__extmap,k11607,else__8062__auto__);

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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11606){
var self__ = this;
var G__11606__$1 = this;
return (new cljs.core.RecordIter((0),G__11606__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11606){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11610 = cljs.core.keyword_identical_QMARK_;
var expr__11611 = k__8067__auto__;
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11611))){
return (new thi.ng.geom.types.Mesh2(G__11606,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,G__11606,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__11606,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__11606,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11606,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11606,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11610.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__11611))){
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11606,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11606),null));
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

thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11606){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__11606,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Mesh2 = (function thi$ng$geom$types$map__GT_Mesh2(G__11608){
return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11608),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__11608),null,cljs.core.dissoc.call(null,G__11608,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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

thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11615,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11617 = (((k11615 instanceof cljs.core.Keyword))?k11615.fqn:null);
switch (G__11617) {
case "segments":
return self__.segments;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11615,else__8062__auto__);

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

thi.ng.geom.types.Path2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11614){
var self__ = this;
var G__11614__$1 = this;
return (new cljs.core.RecordIter((0),G__11614__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segments","segments",1937535949)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11614){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11618 = cljs.core.keyword_identical_QMARK_;
var expr__11619 = k__8067__auto__;
if(cljs.core.truth_(pred__11618.call(null,new cljs.core.Keyword(null,"segments","segments",1937535949),expr__11619))){
return (new thi.ng.geom.types.Path2(G__11614,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11614),null));
}
});

thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",1937535949),self__.segments],null))], null),self__.__extmap));
});

thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11614){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Path2(self__.segments,G__11614,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Path2 = (function thi$ng$geom$types$map__GT_Path2(G__11616){
return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",1937535949).cljs$core$IFn$_invoke$arity$1(G__11616),null,cljs.core.dissoc.call(null,G__11616,new cljs.core.Keyword(null,"segments","segments",1937535949)),null));
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11623,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11625 = (((k11623 instanceof cljs.core.Keyword))?k11623.fqn:null);
switch (G__11625) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11623,else__8062__auto__);

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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11622){
var self__ = this;
var G__11622__$1 = this;
return (new cljs.core.RecordIter((0),G__11622__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11622){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11626 = cljs.core.keyword_identical_QMARK_;
var expr__11627 = k__8067__auto__;
if(cljs.core.truth_(pred__11626.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11627))){
return (new thi.ng.geom.types.Polygon2(G__11622,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11622),null));
}
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11622){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Polygon2(self__.points,G__11622,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Polygon2 = (function thi$ng$geom$types$map__GT_Polygon2(G__11624){
return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11624),null,cljs.core.dissoc.call(null,G__11624,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11631,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11633 = (((k11631 instanceof cljs.core.Keyword))?k11631.fqn:null);
switch (G__11633) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11631,else__8062__auto__);

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

thi.ng.geom.types.Rect2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11630){
var self__ = this;
var G__11630__$1 = this;
return (new cljs.core.RecordIter((0),G__11630__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11630){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11634 = cljs.core.keyword_identical_QMARK_;
var expr__11635 = k__8067__auto__;
if(cljs.core.truth_(pred__11634.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11635))){
return (new thi.ng.geom.types.Rect2(G__11630,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11634.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__11635))){
return (new thi.ng.geom.types.Rect2(self__.p,G__11630,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11630),null));
}
}
});

thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11630){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__11630,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Rect2 = (function thi$ng$geom$types$map__GT_Rect2(G__11632){
return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11632),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__11632),null,cljs.core.dissoc.call(null,G__11632,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11639,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11641 = (((k11639 instanceof cljs.core.Keyword))?k11639.fqn:null);
switch (G__11641) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11639,else__8062__auto__);

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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11638){
var self__ = this;
var G__11638__$1 = this;
return (new cljs.core.RecordIter((0),G__11638__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11638){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11642 = cljs.core.keyword_identical_QMARK_;
var expr__11643 = k__8067__auto__;
if(cljs.core.truth_(pred__11642.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11643))){
return (new thi.ng.geom.types.Triangle2(G__11638,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11638),null));
}
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11638){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Triangle2(self__.points,G__11638,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Triangle2 = (function thi$ng$geom$types$map__GT_Triangle2(G__11640){
return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11640),null,cljs.core.dissoc.call(null,G__11640,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11647,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11649 = (((k11647 instanceof cljs.core.Keyword))?k11647.fqn:null);
switch (G__11649) {
case "p":
return self__.p;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11647,else__8062__auto__);

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

thi.ng.geom.types.AABB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11646){
var self__ = this;
var G__11646__$1 = this;
return (new cljs.core.RecordIter((0),G__11646__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11646){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11650 = cljs.core.keyword_identical_QMARK_;
var expr__11651 = k__8067__auto__;
if(cljs.core.truth_(pred__11650.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11651))){
return (new thi.ng.geom.types.AABB(G__11646,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11650.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__11651))){
return (new thi.ng.geom.types.AABB(self__.p,G__11646,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11646),null));
}
}
});

thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11646){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__11646,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_AABB = (function thi$ng$geom$types$map__GT_AABB(G__11648){
return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11648),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__11648),null,cljs.core.dissoc.call(null,G__11648,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"size","size",1098693007)),null));
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11655,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11657 = (((k11655 instanceof cljs.core.Keyword))?k11655.fqn:null);
switch (G__11657) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11655,else__8062__auto__);

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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11654){
var self__ = this;
var G__11654__$1 = this;
return (new cljs.core.RecordIter((0),G__11654__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11654){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11658 = cljs.core.keyword_identical_QMARK_;
var expr__11659 = k__8067__auto__;
if(cljs.core.truth_(pred__11658.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11659))){
return (new thi.ng.geom.types.Cuboid(G__11654,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11654),null));
}
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11654){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Cuboid(self__.points,G__11654,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Cuboid = (function thi$ng$geom$types$map__GT_Cuboid(G__11656){
return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11656),null,cljs.core.dissoc.call(null,G__11656,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11663,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11665 = (((k11663 instanceof cljs.core.Keyword))?k11663.fqn:null);
switch (G__11665) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11663,else__8062__auto__);

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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11662){
var self__ = this;
var G__11662__$1 = this;
return (new cljs.core.RecordIter((0),G__11662__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11662){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11666 = cljs.core.keyword_identical_QMARK_;
var expr__11667 = k__8067__auto__;
if(cljs.core.truth_(pred__11666.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11667))){
return (new thi.ng.geom.types.Bezier3(G__11662,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11662),null));
}
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11662){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Bezier3(self__.points,G__11662,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Bezier3 = (function thi$ng$geom$types$map__GT_Bezier3(G__11664){
return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11664),null,cljs.core.dissoc.call(null,G__11664,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11671,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11673 = (((k11671 instanceof cljs.core.Keyword))?k11671.fqn:null);
switch (G__11673) {
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
return cljs.core.get.call(null,self__.__extmap,k11671,else__8062__auto__);

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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11670){
var self__ = this;
var G__11670__$1 = this;
return (new cljs.core.RecordIter((0),G__11670__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11670){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11674 = cljs.core.keyword_identical_QMARK_;
var expr__11675 = k__8067__auto__;
if(cljs.core.truth_(pred__11674.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11675))){
return (new thi.ng.geom.types.BasicMesh(G__11670,self__.faces,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11674.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11675))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,G__11670,self__.fnormals,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11674.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11675))){
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,G__11670,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11670),null));
}
}
}
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),self__.fnormals],null))], null),self__.__extmap));
});

thi.ng.geom.types.BasicMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11670){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.BasicMesh(self__.vertices,self__.faces,self__.fnormals,G__11670,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_BasicMesh = (function thi$ng$geom$types$map__GT_BasicMesh(G__11672){
return (new thi.ng.geom.types.BasicMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11672),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11672),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11672),null,cljs.core.dissoc.call(null,G__11672,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563)),null));
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

thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11679,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11681 = (((k11679 instanceof cljs.core.Keyword))?k11679.fqn:null);
switch (G__11681) {
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
return cljs.core.get.call(null,self__.__extmap,k11679,else__8062__auto__);

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

thi.ng.geom.types.GMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11678){
var self__ = this;
var G__11678__$1 = this;
return (new cljs.core.RecordIter((0),G__11678__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11678){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11682 = cljs.core.keyword_identical_QMARK_;
var expr__11683 = k__8067__auto__;
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11683))){
return (new thi.ng.geom.types.GMesh(G__11678,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"normals","normals",-1508109067),expr__11683))){
return (new thi.ng.geom.types.GMesh(self__.vertices,G__11678,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),expr__11683))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__11678,self__.vnormals,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),expr__11683))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__11678,self__.edges,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"edges","edges",-694791395),expr__11683))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11678,self__.faces,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11682.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11683))){
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11678,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11678),null));
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

thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11678){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11678,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_GMesh = (function thi$ng$geom$types$map__GT_GMesh(G__11680){
return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11680),new cljs.core.Keyword(null,"normals","normals",-1508109067).cljs$core$IFn$_invoke$arity$1(G__11680),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(G__11680),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284).cljs$core$IFn$_invoke$arity$1(G__11680),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(G__11680),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11680),null,cljs.core.dissoc.call(null,G__11680,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"normals","normals",-1508109067),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),new cljs.core.Keyword(null,"vnormals","vnormals",-914875284),new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"faces","faces",-73909544)),null));
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

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11687,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11689 = (((k11687 instanceof cljs.core.Keyword))?k11687.fqn:null);
switch (G__11689) {
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
return cljs.core.get.call(null,self__.__extmap,k11687,else__8062__auto__);

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

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11686){
var self__ = this;
var G__11686__$1 = this;
return (new cljs.core.RecordIter((0),G__11686__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11686){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11690 = cljs.core.keyword_identical_QMARK_;
var expr__11691 = k__8067__auto__;
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"vertices","vertices",2008905731),expr__11691))){
return (new thi.ng.geom.types.IndexedMesh(G__11686,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"faces","faces",-73909544),expr__11691))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,G__11686,self__.attribs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"attribs","attribs",-137878093),expr__11691))){
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,G__11686,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11686),null));
}
}
}
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",2008905731),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",-73909544),self__.faces],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",-137878093),self__.attribs],null))], null),self__.__extmap));
});

thi.ng.geom.types.IndexedMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11686){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.IndexedMesh(self__.vertices,self__.faces,self__.attribs,G__11686,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_IndexedMesh = (function thi$ng$geom$types$map__GT_IndexedMesh(G__11688){
return (new thi.ng.geom.types.IndexedMesh(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(G__11688),new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(G__11688),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(G__11688),null,cljs.core.dissoc.call(null,G__11688,new cljs.core.Keyword(null,"vertices","vertices",2008905731),new cljs.core.Keyword(null,"faces","faces",-73909544),new cljs.core.Keyword(null,"attribs","attribs",-137878093)),null));
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

thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11695,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11697 = (((k11695 instanceof cljs.core.Keyword))?k11695.fqn:null);
switch (G__11697) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11695,else__8062__auto__);

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

thi.ng.geom.types.Line3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11694){
var self__ = this;
var G__11694__$1 = this;
return (new cljs.core.RecordIter((0),G__11694__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11694){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11698 = cljs.core.keyword_identical_QMARK_;
var expr__11699 = k__8067__auto__;
if(cljs.core.truth_(pred__11698.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11699))){
return (new thi.ng.geom.types.Line3(G__11694,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11694),null));
}
});

thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11694){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Line3(self__.points,G__11694,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Line3 = (function thi$ng$geom$types$map__GT_Line3(G__11696){
return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11696),null,cljs.core.dissoc.call(null,G__11696,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11703,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11705 = (((k11703 instanceof cljs.core.Keyword))?k11703.fqn:null);
switch (G__11705) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11703,else__8062__auto__);

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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11702){
var self__ = this;
var G__11702__$1 = this;
return (new cljs.core.RecordIter((0),G__11702__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11702){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11706 = cljs.core.keyword_identical_QMARK_;
var expr__11707 = k__8067__auto__;
if(cljs.core.truth_(pred__11706.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11707))){
return (new thi.ng.geom.types.LineStrip3(G__11702,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11702),null));
}
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11702){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.LineStrip3(self__.points,G__11702,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_LineStrip3 = (function thi$ng$geom$types$map__GT_LineStrip3(G__11704){
return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11704),null,cljs.core.dissoc.call(null,G__11704,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11711,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11713 = (((k11711 instanceof cljs.core.Keyword))?k11711.fqn:null);
switch (G__11713) {
case "n":
return self__.n;

break;
case "w":
return self__.w;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11711,else__8062__auto__);

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

thi.ng.geom.types.Plane.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11710){
var self__ = this;
var G__11710__$1 = this;
return (new cljs.core.RecordIter((0),G__11710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11710){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11714 = cljs.core.keyword_identical_QMARK_;
var expr__11715 = k__8067__auto__;
if(cljs.core.truth_(pred__11714.call(null,new cljs.core.Keyword(null,"n","n",562130025),expr__11715))){
return (new thi.ng.geom.types.Plane(G__11710,self__.w,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11714.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__11715))){
return (new thi.ng.geom.types.Plane(self__.n,G__11710,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11710),null));
}
}
});

thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",562130025),self__.n],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null))], null),self__.__extmap));
});

thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11710){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__11710,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Plane = (function thi$ng$geom$types$map__GT_Plane(G__11712){
return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(G__11712),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11712),null,cljs.core.dissoc.call(null,G__11712,new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"w","w",354169001)),null));
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

thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11719,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11721 = (((k11719 instanceof cljs.core.Keyword))?k11719.fqn:null);
switch (G__11721) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11719,else__8062__auto__);

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

thi.ng.geom.types.Quad3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11718){
var self__ = this;
var G__11718__$1 = this;
return (new cljs.core.RecordIter((0),G__11718__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11718){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11722 = cljs.core.keyword_identical_QMARK_;
var expr__11723 = k__8067__auto__;
if(cljs.core.truth_(pred__11722.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11723))){
return (new thi.ng.geom.types.Quad3(G__11718,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11718),null));
}
});

thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11718){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Quad3(self__.points,G__11718,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Quad3 = (function thi$ng$geom$types$map__GT_Quad3(G__11720){
return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11720),null,cljs.core.dissoc.call(null,G__11720,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11727,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11729 = (((k11727 instanceof cljs.core.Keyword))?k11727.fqn:null);
switch (G__11729) {
case "p":
return self__.p;

break;
case "r":
return self__.r;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11727,else__8062__auto__);

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

thi.ng.geom.types.Sphere.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11726){
var self__ = this;
var G__11726__$1 = this;
return (new cljs.core.RecordIter((0),G__11726__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11726){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11730 = cljs.core.keyword_identical_QMARK_;
var expr__11731 = k__8067__auto__;
if(cljs.core.truth_(pred__11730.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__11731))){
return (new thi.ng.geom.types.Sphere(G__11726,self__.r,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11730.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__11731))){
return (new thi.ng.geom.types.Sphere(self__.p,G__11726,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11726),null));
}
}
});

thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null))], null),self__.__extmap));
});

thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11726){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__11726,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Sphere = (function thi$ng$geom$types$map__GT_Sphere(G__11728){
return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__11728),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__11728),null,cljs.core.dissoc.call(null,G__11728,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"r","r",-471384190)),null));
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11735,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11737 = (((k11735 instanceof cljs.core.Keyword))?k11735.fqn:null);
switch (G__11737) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11735,else__8062__auto__);

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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11734){
var self__ = this;
var G__11734__$1 = this;
return (new cljs.core.RecordIter((0),G__11734__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11734){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11738 = cljs.core.keyword_identical_QMARK_;
var expr__11739 = k__8067__auto__;
if(cljs.core.truth_(pred__11738.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11739))){
return (new thi.ng.geom.types.Tetrahedron(G__11734,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11734),null));
}
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11734){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Tetrahedron(self__.points,G__11734,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Tetrahedron = (function thi$ng$geom$types$map__GT_Tetrahedron(G__11736){
return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11736),null,cljs.core.dissoc.call(null,G__11736,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k11743,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__11745 = (((k11743 instanceof cljs.core.Keyword))?k11743.fqn:null);
switch (G__11745) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11743,else__8062__auto__);

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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11742){
var self__ = this;
var G__11742__$1 = this;
return (new cljs.core.RecordIter((0),G__11742__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__11742){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__11746 = cljs.core.keyword_identical_QMARK_;
var expr__11747 = k__8067__auto__;
if(cljs.core.truth_(pred__11746.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__11747))){
return (new thi.ng.geom.types.Triangle3(G__11742,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__11742),null));
}
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
});

thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__11742){
var self__ = this;
var this__8058__auto____$1 = this;
return (new thi.ng.geom.types.Triangle3(self__.points,G__11742,self__.__extmap,self__.__hash));
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

thi.ng.geom.types.map__GT_Triangle3 = (function thi$ng$geom$types$map__GT_Triangle3(G__11744){
return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__11744),null,cljs.core.dissoc.call(null,G__11744,new cljs.core.Keyword(null,"points","points",-1486596883)),null));
});


//# sourceMappingURL=types.js.map