// Compiled by ClojureScript 1.9.293 {}
goog.provide('kdtree');
goog.require('cljs.core');

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
kdtree.Node = (function (left,right,value,__meta,__extmap,__hash){
this.left = left;
this.right = right;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
kdtree.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

kdtree.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k16008,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__16010 = (((k16008 instanceof cljs.core.Keyword))?k16008.fqn:null);
switch (G__16010) {
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16008,else__8062__auto__);

}
});

kdtree.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#kdtree.Node{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

kdtree.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16007){
var self__ = this;
var G__16007__$1 = this;
return (new cljs.core.RecordIter((0),G__16007__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

kdtree.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

kdtree.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

kdtree.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
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

kdtree.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
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

kdtree.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

kdtree.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__16007){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__16011 = cljs.core.keyword_identical_QMARK_;
var expr__16012 = k__8067__auto__;
if(cljs.core.truth_(pred__16011.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__16012))){
return (new kdtree.Node(G__16007,self__.right,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16011.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__16012))){
return (new kdtree.Node(self__.left,G__16007,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16011.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__16012))){
return (new kdtree.Node(self__.left,self__.right,G__16007,self__.__meta,self__.__extmap,null));
} else {
return (new kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__16007),null));
}
}
}
});

kdtree.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__16007){
var self__ = this;
var this__8058__auto____$1 = this;
return (new kdtree.Node(self__.left,self__.right,self__.value,G__16007,self__.__extmap,self__.__hash));
});

kdtree.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

kdtree.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

kdtree.Node.cljs$lang$type = true;

kdtree.Node.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"kdtree/Node");
});

kdtree.Node.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"kdtree/Node");
});

kdtree.__GT_Node = (function kdtree$__GT_Node(left,right,value){
return (new kdtree.Node(left,right,value,null,null,null));
});

kdtree.map__GT_Node = (function kdtree$map__GT_Node(G__16009){
return (new kdtree.Node(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__16009),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__16009),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__16009),null,cljs.core.dissoc.call(null,G__16009,new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"value","value",305978217)),null));
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
kdtree.Result = (function (point,dist_squared,__meta,__extmap,__hash){
this.point = point;
this.dist_squared = dist_squared;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
kdtree.Result.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8059__auto__,k__8060__auto__){
var self__ = this;
var this__8059__auto____$1 = this;
return cljs.core._lookup.call(null,this__8059__auto____$1,k__8060__auto__,null);
});

kdtree.Result.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k16016,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__16018 = (((k16016 instanceof cljs.core.Keyword))?k16016.fqn:null);
switch (G__16018) {
case "point":
return self__.point;

break;
case "dist-squared":
return self__.dist_squared;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16016,else__8062__auto__);

}
});

kdtree.Result.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8074__auto__,pr_pair__8076__auto__,"#kdtree.Result{",", ","}",opts__8075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1813198264),self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),self__.dist_squared],null))], null),self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

kdtree.Result.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16015){
var self__ = this;
var G__16015__$1 = this;
return (new cljs.core.RecordIter((0),G__16015__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

kdtree.Result.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8057__auto__){
var self__ = this;
var this__8057__auto____$1 = this;
return self__.__meta;
});

kdtree.Result.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new kdtree.Result(self__.point,self__.dist_squared,self__.__meta,self__.__extmap,self__.__hash));
});

kdtree.Result.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8063__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
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

kdtree.Result.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8055__auto__,other__8056__auto__){
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

kdtree.Result.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8068__auto__,k__8069__auto__){
var self__ = this;
var this__8068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),null,new cljs.core.Keyword(null,"point","point",1813198264),null], null), null),k__8069__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8069__auto__)),null));
}
});

kdtree.Result.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__16015){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__16019 = cljs.core.keyword_identical_QMARK_;
var expr__16020 = k__8067__auto__;
if(cljs.core.truth_(pred__16019.call(null,new cljs.core.Keyword(null,"point","point",1813198264),expr__16020))){
return (new kdtree.Result(G__16015,self__.dist_squared,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16019.call(null,new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),expr__16020))){
return (new kdtree.Result(self__.point,G__16015,self__.__meta,self__.__extmap,null));
} else {
return (new kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8067__auto__,G__16015),null));
}
}
});

kdtree.Result.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"point","point",1813198264),self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989),self__.dist_squared],null))], null),self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__16015){
var self__ = this;
var this__8058__auto____$1 = this;
return (new kdtree.Result(self__.point,self__.dist_squared,G__16015,self__.__extmap,self__.__hash));
});

kdtree.Result.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8065__auto__)){
return cljs.core._assoc.call(null,this__8064__auto____$1,cljs.core._nth.call(null,entry__8065__auto__,(0)),cljs.core._nth.call(null,entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

kdtree.Result.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dist-squared","dist-squared",-764623780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
});

kdtree.Result.cljs$lang$type = true;

kdtree.Result.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"kdtree/Result");
});

kdtree.Result.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write.call(null,writer__8096__auto__,"kdtree/Result");
});

kdtree.__GT_Result = (function kdtree$__GT_Result(point,dist_squared){
return (new kdtree.Result(point,dist_squared,null,null,null));
});

kdtree.map__GT_Result = (function kdtree$map__GT_Result(G__16017){
return (new kdtree.Result(new cljs.core.Keyword(null,"point","point",1813198264).cljs$core$IFn$_invoke$arity$1(G__16017),new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(G__16017),null,cljs.core.dissoc.call(null,G__16017,new cljs.core.Keyword(null,"point","point",1813198264),new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989)),null));
});

/**
 * Compute the K-dimensional distance between two points
 */
kdtree.dist_squared = (function kdtree$dist_squared(a,b){
var res = 0.0;
var ind = cljs.core.long$.call(null,(0));
while(true){
if((ind === a.length)){
return res;
} else {
var v = ((a[ind]) - (b[ind]));
var G__16023 = (res + (v * v));
var G__16024 = (ind + (1));
res = G__16023;
ind = G__16024;
continue;
}
break;
}
});
kdtree.build_tree_internal = (function kdtree$build_tree_internal(points,depth){
if(cljs.core.empty_QMARK_.call(null,points)){
return null;
} else {
var point_count = cljs.core.count.call(null,points);
var k = cljs.core.count.call(null,cljs.core.nth.call(null,points,(0)));
var dimension = cljs.core.mod.call(null,depth,k);
var points__$1 = cljs.core.vec.call(null,cljs.core.sort_by.call(null,((function (point_count,k,dimension){
return (function (p1__16025_SHARP_){
return cljs.core.nth.call(null,p1__16025_SHARP_,dimension);
});})(point_count,k,dimension))
,points));
var median = cljs.core.quot.call(null,point_count,(2));
var split_point = (function (){var n = median;
while(true){
if(cljs.core._EQ_.call(null,(0),n)){
return n;
} else {
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,points__$1.call(null,n),dimension),cljs.core.nth.call(null,points__$1.call(null,(n - (1))),dimension))){
var G__16026 = (n - (1));
n = G__16026;
continue;
} else {
return n;

}
}
break;
}
})();
var left_tree = kdtree.build_tree_internal.call(null,cljs.core.subvec.call(null,points__$1,(0),split_point),(depth + (1)));
var right_tree = kdtree.build_tree_internal.call(null,cljs.core.subvec.call(null,points__$1,(split_point + (1))),(depth + (1)));
return cljs.core.with_meta.call(null,(new kdtree.Node(left_tree,right_tree,cljs.core.double_array.call(null,cljs.core.nth.call(null,points__$1,split_point)),null,null,null)),cljs.core.meta.call(null,cljs.core.nth.call(null,points__$1,split_point)));
}
});
/**
 * Construct a Kd-tree from points. Assumes all
 * points are of the same dimension.
 */
kdtree.build_tree = (function kdtree$build_tree(points){
return kdtree.build_tree_internal.call(null,points,(0));
});
kdtree.insert_internal = (function kdtree$insert_internal(tree,point,depth,point_meta){
var k = point.length;
var dimension = cljs.core.mod.call(null,depth,k);
if((tree == null)){
return cljs.core.with_meta.call(null,(new kdtree.Node(null,null,point,null,null,null)),point_meta);
} else {
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?kdtree.insert_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1)),point_meta):new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?kdtree.insert_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1)),point_meta):new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree));
return cljs.core.with_meta.call(null,(new kdtree.Node(left,right,value,null,null,null)),cljs.core.meta.call(null,tree));
}
});
/**
 * Adds a point to an existing tree.
 */
kdtree.insert = (function kdtree$insert(tree,point){
return kdtree.insert_internal.call(null,tree,cljs.core.double_array.call(null,point),(0),cljs.core.meta.call(null,point));
});
kdtree.find_min_internal = (function kdtree$find_min_internal(tree,dimension,depth){
while(true){
if(cljs.core.truth_(tree)){
var k = cljs.core.count.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree));
var min_node = ((function (tree,dimension,depth,k){
return (function (node1,node2){
var value1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node1);
var value2 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node2);
if(((value2 == null)) || (((value1[dimension]) < (value2[dimension])))){
return node1;
} else {
return node2;
}
});})(tree,dimension,depth,k))
;
if(cljs.core._EQ_.call(null,dimension,cljs.core.mod.call(null,depth,k))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree))){
var G__16027 = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree);
var G__16028 = dimension;
var G__16029 = (depth + (1));
tree = G__16027;
dimension = G__16028;
depth = G__16029;
continue;
} else {
return tree;
}
} else {
return min_node.call(null,min_node.call(null,tree,kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)))),kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1))));
}
} else {
return null;
}
break;
}
});
/**
 * Locate the point with the smallest value in a given dimension.
 * Used internally by the delete function. Runs in O(√n) time for a
 * balanced tree.
 */
kdtree.find_min = (function kdtree$find_min(tree,dimension){
var res = kdtree.find_min_internal.call(null,tree,dimension,(0));
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)),cljs.core.meta.call(null,res));
});
/**
 * Compares 2 points represented by arrays of doubles and return true if they are equal
 */
kdtree.points_EQ_ = (function kdtree$points_EQ_(a,b){
var i = (0);
while(true){
if((i === a.length)){
return true;
} else {
if(((a[i]) === (b[i]))){
var G__16030 = (i + (1));
i = G__16030;
continue;
} else {
return false;

}
}
break;
}
});
kdtree.delete_internal = (function kdtree$delete_internal(tree,point,depth){
if(cljs.core.truth_(tree)){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var k = value.length;
var dimension = cljs.core.mod.call(null,depth,k);
if(cljs.core.not.call(null,kdtree.points_EQ_.call(null,point,value))){
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?kdtree.delete_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1))):new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?kdtree.delete_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),point,(depth + (1))):new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree));
return cljs.core.with_meta.call(null,(new kdtree.Node(left,right,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree),null,null,null)),cljs.core.meta.call(null,tree));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree))){
var min = kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return cljs.core.with_meta.call(null,(new kdtree.Node(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),kdtree.delete_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),(depth + (1))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),null,null,null)),cljs.core.meta.call(null,min));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree))){
var min = kdtree.find_min_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return cljs.core.with_meta.call(null,(new kdtree.Node(null,kdtree.delete_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),(depth + (1))),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(min),null,null,null)),cljs.core.meta.call(null,min));
} else {
return null;

}
}
}
} else {
return null;
}
});
/**
 * Delete value at the given point. Runs in O(log n) time for a balanced tree.
 */
kdtree.delete$ = (function kdtree$delete(tree,point){
return kdtree.delete_internal.call(null,tree,cljs.core.double_array.call(null,point),(0));
});
/**
 * Inserts value to sorted transient vector. Vector will not grow
 * bigger than n elements.
 */
kdtree.insert_sorted_BANG_ = (function kdtree$insert_sorted_BANG_(vec,value,n){
if(((cljs.core.count.call(null,vec) === n)) && ((new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(value) > new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,vec,(n - (1))))))){
return vec;
} else {
var ind = cljs.core.long$.call(null,(0));
var value__$1 = value;
var vec__$1 = vec;
while(true){
if(cljs.core._EQ_.call(null,ind,n)){
return vec__$1;
} else {
if(cljs.core._EQ_.call(null,ind,cljs.core.count.call(null,vec__$1))){
return cljs.core.conj_BANG_.call(null,vec__$1,value__$1);
} else {
var existing = cljs.core.nth.call(null,vec__$1,ind);
if((new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(value__$1) < new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(existing))){
var G__16031 = (ind + (1));
var G__16032 = existing;
var G__16033 = cljs.core.assoc_BANG_.call(null,vec__$1,ind,value__$1);
ind = G__16031;
value__$1 = G__16032;
vec__$1 = G__16033;
continue;
} else {
var G__16034 = (ind + (1));
var G__16035 = value__$1;
var G__16036 = vec__$1;
ind = G__16034;
value__$1 = G__16035;
vec__$1 = G__16036;
continue;
}

}
}
break;
}
}
});
kdtree.nearest_neighbor_internal = (function kdtree$nearest_neighbor_internal(tree,point,n,dimension,best){
while(true){
if((tree == null)){
return best;
} else {
var dimension__$1 = cljs.core.long$.call(null,dimension);
var next_dimension = cljs.core.mod.call(null,(dimension__$1 + (1)),point.length);
var v = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var dim_dist = ((point[dimension__$1]) - (v[dimension__$1]));
var closest_semiplane = (((dim_dist > 0.0))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)).call(null,tree);
var farthest_semiplane = (((dim_dist > 0.0))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)).call(null,tree);
var best_with_cur = kdtree.insert_sorted_BANG_.call(null,best,cljs.core.with_meta.call(null,(new kdtree.Result(v,kdtree.dist_squared.call(null,v,point),null,null,null)),cljs.core.meta.call(null,tree)),n);
var best_near = kdtree.nearest_neighbor_internal.call(null,closest_semiplane,point,n,next_dimension,best_with_cur);
var worst_nearest = new cljs.core.Keyword(null,"dist-squared","dist-squared",1889811989).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,best_near,(cljs.core.count.call(null,best_near) - (1))));
if(((dim_dist * dim_dist) < worst_nearest)){
var G__16037 = farthest_semiplane;
var G__16038 = point;
var G__16039 = n;
var G__16040 = next_dimension;
var G__16041 = best_near;
tree = G__16037;
point = G__16038;
n = G__16039;
dimension = G__16040;
best = G__16041;
continue;
} else {
return best_near;
}
}
break;
}
});
/**
 * Compute n nearest neighbors for a point. If n is
 * omitted, the result is the nearest neighbor;
 * otherwise, the result is a list of length n.
 */
kdtree.nearest_neighbor = (function kdtree$nearest_neighbor(var_args){
var args16043 = [];
var len__8605__auto___16046 = arguments.length;
var i__8606__auto___16047 = (0);
while(true){
if((i__8606__auto___16047 < len__8605__auto___16046)){
args16043.push((arguments[i__8606__auto___16047]));

var G__16048 = (i__8606__auto___16047 + (1));
i__8606__auto___16047 = G__16048;
continue;
} else {
}
break;
}

var G__16045 = args16043.length;
switch (G__16045) {
case 2:
return kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16043.length)].join('')));

}
});

kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$2 = (function (tree,point){
return cljs.core.first.call(null,kdtree.nearest_neighbor.call(null,tree,point,(1)));
});

kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3 = (function (tree,point,n){
return cljs.core.map.call(null,(function (p1__16042_SHARP_){
return cljs.core.update_in.call(null,p1__16042_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point","point",1813198264)], null),cljs.core.vec);
}),cljs.core.persistent_BANG_.call(null,kdtree.nearest_neighbor_internal.call(null,tree,cljs.core.double_array.call(null,point),n,(0),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY))));
});

kdtree.nearest_neighbor.cljs$lang$maxFixedArity = 3;

kdtree.inside_interval_QMARK_ = (function kdtree$inside_interval_QMARK_(interval,point){
var n = point.length;
var ind = (0);
while(true){
if((ind === n)){
return true;
} else {
var axis_intv = cljs.core.nth.call(null,interval,ind);
var left = (axis_intv[(0)]);
var right = (axis_intv[(1)]);
var value = (point[ind]);
if(((left <= value)) && ((value <= right))){
var G__16050 = (ind + (1));
ind = G__16050;
continue;
} else {
return false;
}
}
break;
}
});
kdtree.interval_search_internal = (function kdtree$interval_search_internal(tree,interval,depth,accum){
if((tree == null)){
return accum;
} else {
var point = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);
var accum__$1 = (cljs.core.truth_(kdtree.inside_interval_QMARK_.call(null,interval,point))?cljs.core.conj_BANG_.call(null,accum,cljs.core.with_meta.call(null,cljs.core.vec.call(null,point),cljs.core.meta.call(null,tree))):accum);
var k = cljs.core.mod.call(null,depth,point.length);
var dim_value = (point[k]);
var dim_boundaries = cljs.core.nth.call(null,interval,k);
var left_boundary = (dim_boundaries[(0)]);
var right_boundary = (dim_boundaries[(1)]);
var accum__$2 = (((dim_value <= right_boundary))?kdtree.interval_search_internal.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(tree),interval,(depth + (1)),accum__$1):accum__$1);
var accum__$3 = (((dim_value > left_boundary))?kdtree.interval_search_internal.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(tree),interval,(depth + (1)),accum__$2):accum__$2);
return accum__$3;
}
});
/**
 * Find all points inside given interval.
 * Interval is a sequence of boundaries for each dimension.
 * Example: interval 0≤x≤10, 5≤y≤20 represented as [[0 10] [5 20]]
 */
kdtree.interval_search = (function kdtree$interval_search(tree,interval){
return cljs.core.persistent_BANG_.call(null,kdtree.interval_search_internal.call(null,tree,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.double_array,interval)),(0),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

//# sourceMappingURL=kdtree.js.map