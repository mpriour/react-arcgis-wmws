var e,t=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,p=(e,t)=>{for(var i in t||(t={}))s.call(t,i)&&n(e,i,t[i]);if(o)for(var i of o(t))a.call(t,i)&&n(e,i,t[i]);return e},d=(e,t)=>i(e,r(t));import{pG as y,A as l,af as c,N as h,fA as f,F as m,G as u,H as v,bc as g,bd as S,be as w,oV as b,bf as O,p1 as T,b as _,br as j,fr as I,pH as M,bi as x,B as L,M as N,z as P,b3 as D,p4 as A}from"./vendor.7103ff48.js";import{g as J}from"./persistable.2e27d0f9.js";import{N as K}from"./SceneService.80256ad0.js";import{s as U,l as V,u as z,m as R}from"./I3SLayerDefinitions.348b7ecc.js";import{f as E}from"./SceneModification.76e9eced.js";import"./I3SIndexInfo.27dc4373.js";let F=e=class extends(y(l.ofType(E))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new e({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(E.fromJSON(i,t))}static fromJSON(t,i){const r=new e;return r._readModifications(t,i),r}static async fromUrl(t,i,r){const o={url:c(t),origin:"service"},s=await h(t,{responseType:"json",signal:f(r,"signal")}),a=i.toJSON(),n=[];for(const e of s.data)n.push(E.fromJSON(d(p({},e),{geometry:d(p({},e.geometry),{spatialReference:a})}),o));return new e({url:t,items:n})}};m([u({type:String})],F.prototype,"url",void 0),F=e=m([v("esri.layers.support.SceneModifications")],F);var G=F;let H=class extends(K(g(S(w(b(O(T(_)))))))){constructor(...e){super(...e),this.handles=new j,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(I(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?p({url:e},t):e}readModifications(e,t,i){this._modificationsSource={url:M(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=f(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(i){x(i)}if(await this._fetchService(t),L(this._modificationsSource)){const t=await G.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!N(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,d(p({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new P("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new P("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new P("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};m([u({type:String,readOnly:!0})],H.prototype,"geometryType",void 0),m([u({type:["show","hide"]})],H.prototype,"listMode",void 0),m([u({type:["IntegratedMeshLayer"]})],H.prototype,"operationalLayerType",void 0),m([u({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),m([u({type:U,readOnly:!0})],H.prototype,"nodePages",void 0),m([u({type:[V],readOnly:!0})],H.prototype,"materialDefinitions",void 0),m([u({type:[z],readOnly:!0})],H.prototype,"textureSetDefinitions",void 0),m([u({type:[R],readOnly:!0})],H.prototype,"geometryDefinitions",void 0),m([u({readOnly:!0})],H.prototype,"serviceUpdateTimeStamp",void 0),m([u({type:G}),J({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],H.prototype,"modifications",void 0),m([D(["web-scene","portal-item"],"modifications")],H.prototype,"readModifications",null),m([u(A)],H.prototype,"elevationInfo",void 0),m([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],H.prototype,"path",void 0),H=m([v("esri.layers.IntegratedMeshLayer")],H);var B=H;export{B as default};
//# sourceMappingURL=IntegratedMeshLayer.74cc90e6.js.map