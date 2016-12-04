// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
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
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

kdtree.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k22886,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__22888 = (((k22886 instanceof cljs.core.Keyword))?k22886.fqn:null);
switch (G__22888) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22886,else__8062__auto__);

}
});

kdtree.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#kdtree.Node{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$left,self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$right,self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

kdtree.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22885){
var self__ = this;
var G__22885__$1 = this;
return (new cljs.core.RecordIter((0),G__22885__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$left,cljs.core.cst$kw$right,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (3 + cljs.core.count(self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
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
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$right,null,cljs.core.cst$kw$left,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

kdtree.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__22885){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__22889 = cljs.core.keyword_identical_QMARK_;
var expr__22890 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__22892 = cljs.core.cst$kw$left;
var G__22893 = expr__22890;
return (pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(G__22892,G__22893) : pred__22889.call(null,G__22892,G__22893));
})())){
return (new kdtree.Node(G__22885,self__.right,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22894 = cljs.core.cst$kw$right;
var G__22895 = expr__22890;
return (pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(G__22894,G__22895) : pred__22889.call(null,G__22894,G__22895));
})())){
return (new kdtree.Node(self__.left,G__22885,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22896 = cljs.core.cst$kw$value;
var G__22897 = expr__22890;
return (pred__22889.cljs$core$IFn$_invoke$arity$2 ? pred__22889.cljs$core$IFn$_invoke$arity$2(G__22896,G__22897) : pred__22889.call(null,G__22896,G__22897));
})())){
return (new kdtree.Node(self__.left,self__.right,G__22885,self__.__meta,self__.__extmap,null));
} else {
return (new kdtree.Node(self__.left,self__.right,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__22885),null));
}
}
}
});

kdtree.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$left,self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$right,self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

kdtree.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__22885){
var self__ = this;
var this__8058__auto____$1 = this;
return (new kdtree.Node(self__.left,self__.right,self__.value,G__22885,self__.__extmap,self__.__hash));
});

kdtree.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

kdtree.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$left,cljs.core.cst$sym$right,cljs.core.cst$sym$value], null);
});

kdtree.Node.cljs$lang$type = true;

kdtree.Node.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"kdtree/Node");
});

kdtree.Node.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"kdtree/Node");
});

kdtree.__GT_Node = (function kdtree$__GT_Node(left,right,value){
return (new kdtree.Node(left,right,value,null,null,null));
});

kdtree.map__GT_Node = (function kdtree$map__GT_Node(G__22887){
return (new kdtree.Node(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(G__22887),cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(G__22887),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__22887),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22887,cljs.core.cst$kw$left,cljs.core.array_seq([cljs.core.cst$kw$right,cljs.core.cst$kw$value], 0)),null));
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
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__8059__auto____$1,k__8060__auto__,null);
});

kdtree.Result.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8061__auto__,k22900,else__8062__auto__){
var self__ = this;
var this__8061__auto____$1 = this;
var G__22902 = (((k22900 instanceof cljs.core.Keyword))?k22900.fqn:null);
switch (G__22902) {
case "point":
return self__.point;

break;
case "dist-squared":
return self__.dist_squared;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22900,else__8062__auto__);

}
});

kdtree.Result.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8073__auto__,writer__8074__auto__,opts__8075__auto__){
var self__ = this;
var this__8073__auto____$1 = this;
var pr_pair__8076__auto__ = ((function (this__8073__auto____$1){
return (function (keyval__8077__auto__){
return cljs.core.pr_sequential_writer(writer__8074__auto__,cljs.core.pr_writer,""," ","",opts__8075__auto__,keyval__8077__auto__);
});})(this__8073__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8074__auto__,pr_pair__8076__auto__,"#kdtree.Result{",", ","}",opts__8075__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$point,self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dist_DASH_squared,self__.dist_squared],null))], null),self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

kdtree.Result.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22899){
var self__ = this;
var G__22899__$1 = this;
return (new cljs.core.RecordIter((0),G__22899__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point,cljs.core.cst$kw$dist_DASH_squared], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7826__auto__ = self__.__hash;
if(!((h__7826__auto__ == null))){
return h__7826__auto__;
} else {
var h__7826__auto____$1 = cljs.core.hash_imap(this__8054__auto____$1);
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
return cljs.core.equiv_map(this__8055__auto____$1,other__8056__auto__);
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dist_DASH_squared,null,cljs.core.cst$kw$point,null], null), null),k__8069__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8068__auto____$1),self__.__meta),k__8069__auto__);
} else {
return (new kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8069__auto__)),null));
}
});

kdtree.Result.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8066__auto__,k__8067__auto__,G__22899){
var self__ = this;
var this__8066__auto____$1 = this;
var pred__22903 = cljs.core.keyword_identical_QMARK_;
var expr__22904 = k__8067__auto__;
if(cljs.core.truth_((function (){var G__22906 = cljs.core.cst$kw$point;
var G__22907 = expr__22904;
return (pred__22903.cljs$core$IFn$_invoke$arity$2 ? pred__22903.cljs$core$IFn$_invoke$arity$2(G__22906,G__22907) : pred__22903.call(null,G__22906,G__22907));
})())){
return (new kdtree.Result(G__22899,self__.dist_squared,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22908 = cljs.core.cst$kw$dist_DASH_squared;
var G__22909 = expr__22904;
return (pred__22903.cljs$core$IFn$_invoke$arity$2 ? pred__22903.cljs$core$IFn$_invoke$arity$2(G__22908,G__22909) : pred__22903.call(null,G__22908,G__22909));
})())){
return (new kdtree.Result(self__.point,G__22899,self__.__meta,self__.__extmap,null));
} else {
return (new kdtree.Result(self__.point,self__.dist_squared,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8067__auto__,G__22899),null));
}
}
});

kdtree.Result.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8071__auto__){
var self__ = this;
var this__8071__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$point,self__.point],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$dist_DASH_squared,self__.dist_squared],null))], null),self__.__extmap));
});

kdtree.Result.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8058__auto__,G__22899){
var self__ = this;
var this__8058__auto____$1 = this;
return (new kdtree.Result(self__.point,self__.dist_squared,G__22899,self__.__extmap,self__.__hash));
});

kdtree.Result.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8064__auto__,entry__8065__auto__){
var self__ = this;
var this__8064__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8065__auto__)){
return cljs.core._assoc(this__8064__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8065__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8064__auto____$1,entry__8065__auto__);
}
});

kdtree.Result.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$point,cljs.core.with_meta(cljs.core.cst$sym$dist_DASH_squared,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$double], null))], null);
});

kdtree.Result.cljs$lang$type = true;

kdtree.Result.cljs$lang$ctorPrSeq = (function (this__8095__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"kdtree/Result");
});

kdtree.Result.cljs$lang$ctorPrWriter = (function (this__8095__auto__,writer__8096__auto__){
return cljs.core._write(writer__8096__auto__,"kdtree/Result");
});

kdtree.__GT_Result = (function kdtree$__GT_Result(point,dist_squared){
return (new kdtree.Result(point,dist_squared,null,null,null));
});

kdtree.map__GT_Result = (function kdtree$map__GT_Result(G__22901){
return (new kdtree.Result(cljs.core.cst$kw$point.cljs$core$IFn$_invoke$arity$1(G__22901),cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(G__22901),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22901,cljs.core.cst$kw$point,cljs.core.array_seq([cljs.core.cst$kw$dist_DASH_squared], 0)),null));
});

/**
 * Compute the K-dimensional distance between two points
 */
kdtree.dist_squared = (function kdtree$dist_squared(a,b){
var res = 0.0;
var ind = cljs.core.long$((0));
while(true){
if((ind === a.length)){
return res;
} else {
var v = ((a[ind]) - (b[ind]));
var G__22911 = (res + (v * v));
var G__22912 = (ind + (1));
res = G__22911;
ind = G__22912;
continue;
}
break;
}
});
kdtree.build_tree_internal = (function kdtree$build_tree_internal(points,depth){
if(cljs.core.empty_QMARK_(points)){
return null;
} else {
var point_count = cljs.core.count(points);
var k = cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,(0)));
var dimension = cljs.core.mod(depth,k);
var points__$1 = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (point_count,k,dimension){
return (function (p1__22913_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22913_SHARP_,dimension);
});})(point_count,k,dimension))
,points));
var median = cljs.core.quot(point_count,(2));
var split_point = (function (){var n = median;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return n;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(n) : points__$1.call(null,n)),dimension),cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__22919 = (n - (1));
return (points__$1.cljs$core$IFn$_invoke$arity$1 ? points__$1.cljs$core$IFn$_invoke$arity$1(G__22919) : points__$1.call(null,G__22919));
})(),dimension))){
var G__22924 = (n - (1));
n = G__22924;
continue;
} else {
return n;

}
}
break;
}
})();
var left_tree = (function (){var G__22920 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(points__$1,(0),split_point);
var G__22921 = (depth + (1));
return (kdtree.build_tree_internal.cljs$core$IFn$_invoke$arity$2 ? kdtree.build_tree_internal.cljs$core$IFn$_invoke$arity$2(G__22920,G__22921) : kdtree.build_tree_internal.call(null,G__22920,G__22921));
})();
var right_tree = (function (){var G__22922 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(points__$1,(split_point + (1)));
var G__22923 = (depth + (1));
return (kdtree.build_tree_internal.cljs$core$IFn$_invoke$arity$2 ? kdtree.build_tree_internal.cljs$core$IFn$_invoke$arity$2(G__22922,G__22923) : kdtree.build_tree_internal.call(null,G__22922,G__22923));
})();
return cljs.core.with_meta((new kdtree.Node(left_tree,right_tree,cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,split_point)),null,null,null)),cljs.core.meta(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points__$1,split_point)));
}
});
/**
 * Construct a Kd-tree from points. Assumes all
 * points are of the same dimension.
 */
kdtree.build_tree = (function kdtree$build_tree(points){
return kdtree.build_tree_internal(points,(0));
});
kdtree.insert_internal = (function kdtree$insert_internal(tree,point,depth,point_meta){
var k = point.length;
var dimension = cljs.core.mod(depth,k);
if((tree == null)){
return cljs.core.with_meta((new kdtree.Node(null,null,point,null,null,null)),point_meta);
} else {
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree);
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?(function (){var G__22933 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__22934 = point;
var G__22935 = (depth + (1));
var G__22936 = point_meta;
return (kdtree.insert_internal.cljs$core$IFn$_invoke$arity$4 ? kdtree.insert_internal.cljs$core$IFn$_invoke$arity$4(G__22933,G__22934,G__22935,G__22936) : kdtree.insert_internal.call(null,G__22933,G__22934,G__22935,G__22936));
})():cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?(function (){var G__22937 = cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree);
var G__22938 = point;
var G__22939 = (depth + (1));
var G__22940 = point_meta;
return (kdtree.insert_internal.cljs$core$IFn$_invoke$arity$4 ? kdtree.insert_internal.cljs$core$IFn$_invoke$arity$4(G__22937,G__22938,G__22939,G__22940) : kdtree.insert_internal.call(null,G__22937,G__22938,G__22939,G__22940));
})():cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree));
return cljs.core.with_meta((new kdtree.Node(left,right,value,null,null,null)),cljs.core.meta(tree));
}
});
/**
 * Adds a point to an existing tree.
 */
kdtree.insert = (function kdtree$insert(tree,point){
return kdtree.insert_internal(tree,cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(point),(0),cljs.core.meta(point));
});
kdtree.find_min_internal = (function kdtree$find_min_internal(tree,dimension,depth){
while(true){
if(cljs.core.truth_(tree)){
var k = cljs.core.count(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree));
var min_node = ((function (tree,dimension,depth,k){
return (function (node1,node2){
var value1 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node1);
var value2 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(node2);
if(((value2 == null)) || (((value1[dimension]) < (value2[dimension])))){
return node1;
} else {
return node2;
}
});})(tree,dimension,depth,k))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dimension,cljs.core.mod(depth,k))){
if(cljs.core.truth_(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree))){
var G__22953 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__22954 = dimension;
var G__22955 = (depth + (1));
tree = G__22953;
dimension = G__22954;
depth = G__22955;
continue;
} else {
return tree;
}
} else {
return min_node(min_node(tree,(function (){var G__22947 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__22948 = dimension;
var G__22949 = (depth + (1));
return (kdtree.find_min_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.find_min_internal.cljs$core$IFn$_invoke$arity$3(G__22947,G__22948,G__22949) : kdtree.find_min_internal.call(null,G__22947,G__22948,G__22949));
})()),(function (){var G__22950 = cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree);
var G__22951 = dimension;
var G__22952 = (depth + (1));
return (kdtree.find_min_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.find_min_internal.cljs$core$IFn$_invoke$arity$3(G__22950,G__22951,G__22952) : kdtree.find_min_internal.call(null,G__22950,G__22951,G__22952));
})());
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
var res = kdtree.find_min_internal(tree,dimension,(0));
return cljs.core.with_meta(cljs.core.vec(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res)),cljs.core.meta(res));
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
var G__22956 = (i + (1));
i = G__22956;
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
var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree);
var k = value.length;
var dimension = cljs.core.mod(depth,k);
if(cljs.core.not(kdtree.points_EQ_(point,value))){
var go_to_left_QMARK_ = ((point[dimension]) < (value[dimension]));
var left = ((go_to_left_QMARK_)?(function (){var G__22969 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__22970 = point;
var G__22971 = (depth + (1));
return (kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3(G__22969,G__22970,G__22971) : kdtree.delete_internal.call(null,G__22969,G__22970,G__22971));
})():cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree));
var right = ((!(go_to_left_QMARK_))?(function (){var G__22972 = cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree);
var G__22973 = point;
var G__22974 = (depth + (1));
return (kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3(G__22972,G__22973,G__22974) : kdtree.delete_internal.call(null,G__22972,G__22973,G__22974));
})():cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree));
return cljs.core.with_meta((new kdtree.Node(left,right,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree),null,null,null)),cljs.core.meta(tree));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree))){
var min = kdtree.find_min_internal(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return cljs.core.with_meta((new kdtree.Node(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree),(function (){var G__22975 = cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree);
var G__22976 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(min);
var G__22977 = (depth + (1));
return (kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3(G__22975,G__22976,G__22977) : kdtree.delete_internal.call(null,G__22975,G__22976,G__22977));
})(),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(min),null,null,null)),cljs.core.meta(min));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree))){
var min = kdtree.find_min_internal(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree),dimension,(depth + (1)));
return cljs.core.with_meta((new kdtree.Node(null,(function (){var G__22978 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__22979 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(min);
var G__22980 = (depth + (1));
return (kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3 ? kdtree.delete_internal.cljs$core$IFn$_invoke$arity$3(G__22978,G__22979,G__22980) : kdtree.delete_internal.call(null,G__22978,G__22979,G__22980));
})(),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(min),null,null,null)),cljs.core.meta(min));
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
return kdtree.delete_internal(tree,cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(point),(0));
});
/**
 * Inserts value to sorted transient vector. Vector will not grow
 * bigger than n elements.
 */
kdtree.insert_sorted_BANG_ = (function kdtree$insert_sorted_BANG_(vec,value,n){
if(((cljs.core.count(vec) === n)) && ((cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(value) > cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vec,(n - (1))))))){
return vec;
} else {
var ind = cljs.core.long$((0));
var value__$1 = value;
var vec__$1 = vec;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ind,n)){
return vec__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ind,cljs.core.count(vec__$1))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vec__$1,value__$1);
} else {
var existing = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vec__$1,ind);
if((cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(value__$1) < cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(existing))){
var G__22981 = (ind + (1));
var G__22982 = existing;
var G__22983 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(vec__$1,ind,value__$1);
ind = G__22981;
value__$1 = G__22982;
vec__$1 = G__22983;
continue;
} else {
var G__22984 = (ind + (1));
var G__22985 = value__$1;
var G__22986 = vec__$1;
ind = G__22984;
value__$1 = G__22985;
vec__$1 = G__22986;
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
var dimension__$1 = cljs.core.long$(dimension);
var next_dimension = cljs.core.mod((dimension__$1 + (1)),point.length);
var v = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree);
var dim_dist = ((point[dimension__$1]) - (v[dimension__$1]));
var closest_semiplane = (((dim_dist > 0.0))?cljs.core.cst$kw$right:cljs.core.cst$kw$left).call(null,tree);
var farthest_semiplane = (((dim_dist > 0.0))?cljs.core.cst$kw$left:cljs.core.cst$kw$right).call(null,tree);
var best_with_cur = kdtree.insert_sorted_BANG_(best,cljs.core.with_meta((new kdtree.Result(v,kdtree.dist_squared(v,point),null,null,null)),cljs.core.meta(tree)),n);
var best_near = (kdtree.nearest_neighbor_internal.cljs$core$IFn$_invoke$arity$5 ? kdtree.nearest_neighbor_internal.cljs$core$IFn$_invoke$arity$5(closest_semiplane,point,n,next_dimension,best_with_cur) : kdtree.nearest_neighbor_internal.call(null,closest_semiplane,point,n,next_dimension,best_with_cur));
var worst_nearest = cljs.core.cst$kw$dist_DASH_squared.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(best_near,(cljs.core.count(best_near) - (1))));
if(((dim_dist * dim_dist) < worst_nearest)){
var G__22987 = farthest_semiplane;
var G__22988 = point;
var G__22989 = n;
var G__22990 = next_dimension;
var G__22991 = best_near;
tree = G__22987;
point = G__22988;
n = G__22989;
dimension = G__22990;
best = G__22991;
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
var args22993 = [];
var len__8605__auto___22996 = arguments.length;
var i__8606__auto___22997 = (0);
while(true){
if((i__8606__auto___22997 < len__8605__auto___22996)){
args22993.push((arguments[i__8606__auto___22997]));

var G__22998 = (i__8606__auto___22997 + (1));
i__8606__auto___22997 = G__22998;
continue;
} else {
}
break;
}

var G__22995 = args22993.length;
switch (G__22995) {
case 2:
return kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22993.length)].join('')));

}
});

kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$2 = (function (tree,point){
return cljs.core.first(kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3(tree,point,(1)));
});

kdtree.nearest_neighbor.cljs$core$IFn$_invoke$arity$3 = (function (tree,point,n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22992_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__22992_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$point], null),cljs.core.vec);
}),cljs.core.persistent_BANG_(kdtree.nearest_neighbor_internal(tree,cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(point),n,(0),cljs.core.transient$(cljs.core.PersistentVector.EMPTY))));
});

kdtree.nearest_neighbor.cljs$lang$maxFixedArity = 3;

kdtree.inside_interval_QMARK_ = (function kdtree$inside_interval_QMARK_(interval,point){
var n = point.length;
var ind = (0);
while(true){
if((ind === n)){
return true;
} else {
var axis_intv = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(interval,ind);
var left = (axis_intv[(0)]);
var right = (axis_intv[(1)]);
var value = (point[ind]);
if(((left <= value)) && ((value <= right))){
var G__23000 = (ind + (1));
ind = G__23000;
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
var point = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(tree);
var accum__$1 = (cljs.core.truth_(kdtree.inside_interval_QMARK_(interval,point))?cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(accum,cljs.core.with_meta(cljs.core.vec(point),cljs.core.meta(tree))):accum);
var k = cljs.core.mod(depth,point.length);
var dim_value = (point[k]);
var dim_boundaries = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(interval,k);
var left_boundary = (dim_boundaries[(0)]);
var right_boundary = (dim_boundaries[(1)]);
var accum__$2 = (((dim_value <= right_boundary))?(function (){var G__23009 = cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(tree);
var G__23010 = interval;
var G__23011 = (depth + (1));
var G__23012 = accum__$1;
return (kdtree.interval_search_internal.cljs$core$IFn$_invoke$arity$4 ? kdtree.interval_search_internal.cljs$core$IFn$_invoke$arity$4(G__23009,G__23010,G__23011,G__23012) : kdtree.interval_search_internal.call(null,G__23009,G__23010,G__23011,G__23012));
})():accum__$1);
var accum__$3 = (((dim_value > left_boundary))?(function (){var G__23013 = cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(tree);
var G__23014 = interval;
var G__23015 = (depth + (1));
var G__23016 = accum__$2;
return (kdtree.interval_search_internal.cljs$core$IFn$_invoke$arity$4 ? kdtree.interval_search_internal.cljs$core$IFn$_invoke$arity$4(G__23013,G__23014,G__23015,G__23016) : kdtree.interval_search_internal.call(null,G__23013,G__23014,G__23015,G__23016));
})():accum__$2);
return accum__$3;
}
});
/**
 * Find all points inside given interval.
 * Interval is a sequence of boundaries for each dimension.
 * Example: interval 0≤x≤10, 5≤y≤20 represented as [[0 10] [5 20]]
 */
kdtree.interval_search = (function kdtree$interval_search(tree,interval){
return cljs.core.persistent_BANG_(kdtree.interval_search_internal(tree,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.double_array,interval)),(0),cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});
