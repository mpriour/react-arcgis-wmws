import{e7 as e,jt as t,F as r,G as i,b3 as s,h_ as a,ju as o,H as n,bb as l,I as p,j2 as y,e6 as d,B as u,k as c,jv as h,N as f,eQ as g,M as m,z as v,P as b,X as L,jw as O,jx as j,jy as F,jz as I,b8 as w,E as S,jA as x}from"./vendor.7103ff48.js";import{s as T}from"./capabilities.56d3f1fc.js";import{n as q}from"./I3SIndexInfo.27dc4373.js";import{s as Q,l as P,u as D,m as E}from"./I3SLayerDefinitions.348b7ecc.js";let A=class extends(e(t)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};r([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],A.prototype,"title",void 0),r([s("service","title",["alias","name"])],A.prototype,"readTitle",null),r([i()],A.prototype,"layer",void 0),r([i({type:a,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],A.prototype,"id",void 0),r([s("service","id")],A.prototype,"readIdOnlyOnce",null),r([i(o(String))],A.prototype,"modelName",void 0),r([i(o(Boolean))],A.prototype,"isEmpty",void 0),r([i({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),r([i({type:Number,json:{write:!0}})],A.prototype,"opacity",void 0),A=r([n("esri.layers.buildingSublayers.BuildingSublayer")],A);var N=A;const U=l.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),_=x();let B=class extends(p.LoadableMixin(y(N))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new d(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return u(r)&&"number"==typeof i?new c({portalItem:r,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return u(this.associatedLayer)?this.associatedLayer.displayField:null}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=u(e)?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=q(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,U,t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return h(this,e)}async _fetchService(e){const t=(await f(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r,i,s,a;const o=null==(r=this.getFeatureType(null==t?void 0:t.feature))||null==(i=r.domains)?void 0:i[e];return o&&"inherited"!==o.type?o:null!=(s=null==(a=this.getField(e))?void 0:a.domain)?s:null}getFeatureType(e){return e&&u(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return u(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return u(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=u(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:T,{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}=e;return{query:t,data:{supportsZ:r,supportsM:i,isVersioned:s}}}createQuery(){const e=new g;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(null!=e&&e.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:u(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return u(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),m(this.associatedLayer))throw new v("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new v("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};r([i({readOnly:!0})],B.prototype,"parsedUrl",null),r([i({type:Q,readOnly:!0})],B.prototype,"nodePages",void 0),r([i({type:[P],readOnly:!0})],B.prototype,"materialDefinitions",void 0),r([i({type:[D],readOnly:!0})],B.prototype,"textureSetDefinitions",void 0),r([i({type:[E],readOnly:!0})],B.prototype,"geometryDefinitions",void 0),r([i({readOnly:!0})],B.prototype,"serviceUpdateTimeStamp",void 0),r([i({readOnly:!0})],B.prototype,"store",void 0),r([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],B.prototype,"rootNode",void 0),r([i({readOnly:!0})],B.prototype,"attributeStorageInfo",void 0),r([i(_.fields)],B.prototype,"fields",void 0),r([i({readOnly:!0})],B.prototype,"fieldsIndex",null),r([i({readOnly:!0,type:c})],B.prototype,"associatedLayer",void 0),r([s("service","associatedLayer",["associatedLayerID"])],B.prototype,"readAssociatedLayer",null),r([i(_.outFields)],B.prototype,"outFields",void 0),r([i({type:String,readOnly:!0})],B.prototype,"objectIdField",null),r([i({readOnly:!0,type:String,json:{read:!1}})],B.prototype,"displayField",null),r([i({readOnly:!0,type:String,aliasOf:"layer.apiKey"})],B.prototype,"apiKey",void 0),r([i({readOnly:!0,type:b,aliasOf:"layer.fullExtent"})],B.prototype,"fullExtent",void 0),r([i({readOnly:!0,type:L,aliasOf:"layer.spatialReference"})],B.prototype,"spatialReference",void 0),r([i({readOnly:!0,aliasOf:"layer.version"})],B.prototype,"version",void 0),r([i({readOnly:!0,type:O,aliasOf:"layer.elevationInfo"})],B.prototype,"elevationInfo",void 0),r([i({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],B.prototype,"minScale",void 0),r([i({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],B.prototype,"maxScale",void 0),r([i({type:["hide","show"],json:{write:!0}})],B.prototype,"listMode",void 0),r([i({types:j,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],B.prototype,"renderer",void 0),r([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),r([i(F)],B.prototype,"popupEnabled",void 0),r([i({type:I,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],B.prototype,"normalReferenceFrame",void 0),r([i({readOnly:!0,json:{read:!1}})],B.prototype,"defaultPopupTemplate",null),r([i()],B.prototype,"types",null),r([i()],B.prototype,"typeIdField",null),r([i({json:{write:!1}}),w(new S({"3DObject":"3d-object",Point:"point"}))],B.prototype,"layerType",void 0),r([i()],B.prototype,"geometryType",null),r([i()],B.prototype,"profile",null),r([i({readOnly:!0,json:{read:!1}})],B.prototype,"capabilities",null),B=r([n("esri.layers.buildingSublayers.BuildingComponentSublayer")],B);var R=B;export{R as E,N as n};
//# sourceMappingURL=BuildingComponentSublayer.0363077d.js.map