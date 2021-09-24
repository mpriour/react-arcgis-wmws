var e,t=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,s,r)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r;import{ab as a,pG as o,I as n,fC as u,kY as y,B as p,P as h,bz as b,A as d,F as c,G as v,bp as f,pI as m,b3 as g,H as S,oU as w,o$ as E,oV as _,bd as O,be as x,bf as k,b as L,p2 as j,X as F,aw as M,bi as I,dU as P,bl as C}from"./vendor.7103ff48.js";import{j as K,S as N,g as R,d as T}from"./kmlUtils.b528ded0.js";let H=e=class extends(a.EventedMixin(o(n))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){u(this,"networkLink").then((()=>y(this,"visible"))).then((()=>this.load()))}load(t){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const s=p(t)?t.signal:null,r=this._fetchService(this._get("networkLink").href,s).then((t=>{const s=K(t.sublayers);this.fullExtent=h.fromJSON(s),this.sourceJSON=t;const r=b(d.ofType(e),N(e,t));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(t){return b(d.ofType(e),t)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return R(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>T(e.data)))}};c([v()],H.prototype,"description",void 0),c([v()],H.prototype,"id",void 0),c([v({readOnly:!0,value:null})],H.prototype,"networkLink",void 0),c([v({json:{write:{allowNull:!0}}})],H.prototype,"parent",void 0),c([v({value:null,json:{write:{allowNull:!0}}})],H.prototype,"sublayers",null),c([f("sublayers")],H.prototype,"castSublayers",null),c([v({value:null,json:{read:{source:"name",reader:e=>m(e)}}})],H.prototype,"title",void 0),c([v({value:!0})],H.prototype,"visible",null),c([g("visible",["visibility"])],H.prototype,"readVisible",null),c([v()],H.prototype,"sourceJSON",void 0),c([v({value:null})],H.prototype,"layer",null),c([v({type:h})],H.prototype,"fullExtent",void 0),H=e=c([S("esri.layers.support.KMLSublayer")],H);var z=H;const A=["kml","xml"];let J=class extends(w(E(_(O(x(k(L))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new j({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=F.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,t){return"string"==typeof e?((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&i(e,a,t[a]);return e})({url:e},t):e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return N(z,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const e=r[0];e.networkLink||(e.visible&&s.push(e.id),e.sublayers&&r.push(...e.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?M(this.url,A)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(I).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:R(this.url,this.outSpatialReference,this.refreshInterval,e))),s=T(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};c([v({readOnly:!0})],J.prototype,"allSublayers",void 0),c([v({type:F})],J.prototype,"outSpatialReference",void 0),c([v({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),c([v({readOnly:!0,json:{read:!1,write:!1}})],J.prototype,"legendEnabled",void 0),c([v({type:["show","hide","hide-children"]})],J.prototype,"listMode",void 0),c([v({type:["KML"]})],J.prototype,"operationalLayerType",void 0),c([v({})],J.prototype,"resourceInfo",void 0),c([v({type:d.ofType(z),json:{write:{ignoreOrigin:!0}}})],J.prototype,"sublayers",void 0),c([g(["web-map","portal-item"],"sublayers",["visibleFolders"])],J.prototype,"readSublayersFromItemOrWebMap",null),c([g("service","sublayers",["sublayers"])],J.prototype,"readSublayers",null),c([P("sublayers")],J.prototype,"writeSublayers",null),c([v({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),c([v({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],J.prototype,"title",null),c([v(C)],J.prototype,"url",void 0),c([v({readOnly:!0})],J.prototype,"visibleSublayers",null),c([v({type:h})],J.prototype,"extent",void 0),c([v()],J.prototype,"fullExtent",null),J=c([S("esri.layers.KMLLayer")],J);var G=J;export{G as default};
//# sourceMappingURL=KMLLayer.36e68fd0.js.map