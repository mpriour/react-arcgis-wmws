var e,t=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(e,r,i)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))n.call(t,r)&&a(e,r,t[r]);return e};import{F as p,G as d,H as y,aa as u,bb as c,oU as f,pq as h,oV as m,o$ as b,bc as v,bd as g,be as w,bf as S,b as I,X as j,a2 as R,z as x,B as O,bi as F,qe as P,p_ as T,p$ as D,qf as q,fS as N,dX as E,q5 as _,jv as k,eQ as L,N as U,q0 as A,az as W,jw as z,b3 as G,dU as J,q2 as C,P as V,i8 as Q,q4 as X,pR as $,q3 as B,pd as H,h_ as M,qg as K,qh as Y,jy as Z,jz as ee,pS as te,jx as re,qd as ie,bl as oe,qi as se,qj as ne,jA as ae}from"./vendor.7103ff48.js";let le=e=class extends u{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new e({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};p([d({type:Number,json:{write:!0}})],le.prototype,"age",void 0),p([d({type:Number,json:{write:!0}})],le.prototype,"ageReceived",void 0),p([d({type:Number,json:{write:!0}})],le.prototype,"displayCount",void 0),p([d({type:Number,json:{write:!0}})],le.prototype,"maxObservations",void 0),le=e=p([y("esri.layers.support.PurgeOptions")],le);var pe=le;const de=c.getLogger("esri.layers.StreamLayer"),ye=ae();let ue=class extends(f(h(m(b(v(g(w(S(I))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new pe,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=j.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?l({url:e},t):e}load(e){if(!("WebSocket"in R))return this.addResolvingPromise(Promise.reject(new x("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=O(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(F).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return P(e,t)}writeWebSceneFeatureReduction(e,t,r,i){T(e,t,"layerDefinition.featureReduction",i)}set renderer(e){D(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=q(i,t,r)||void 0;return e||de.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new N({defaultSymbol:ce(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:ce(e.symbol,e,r)})))}):new E({symbol:ce(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){_(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){_(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return k(this,e)}createQuery(){const e=new L;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t,o;if(this.webSocketUrl){var s;if(null==(s=this.timeInfo)||!s.trackIdField)throw new x("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new x("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new x("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new x("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await U(this.parsedUrl.path,{query:l({f:"json"},this.parsedUrl.query),responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON=(o=l({},null!=(t=this.sourceJSON)?t:{}),r(o,i({objectIdField:"__esri_stream_id__"}))),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),D(this.renderer,this.fieldsIndex),A(this.timeInfo,this.fieldsIndex),W(this,{origin:"service"})}};p([d({type:String})],ue.prototype,"copyright",void 0),p([d({readOnly:!0})],ue.prototype,"defaultPopupTemplate",null),p([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ue.prototype,"definitionExpression",void 0),p([d({type:String})],ue.prototype,"displayField",void 0),p([d({type:z})],ue.prototype,"elevationInfo",void 0),p([G("featureReduction",["layerDefinition.featureReduction"])],ue.prototype,"readFeatureReduction",null),p([J("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:C}})],ue.prototype,"writeWebSceneFeatureReduction",null),p([d(ye.fields)],ue.prototype,"fields",void 0),p([d(ye.fieldsIndex)],ue.prototype,"fieldsIndex",void 0),p([d({type:V})],ue.prototype,"geometryDefinition",void 0),p([d({type:Q.apiValues,json:{read:{reader:Q.read}}})],ue.prototype,"geometryType",void 0),p([d(X)],ue.prototype,"labelsVisible",void 0),p([d({type:[$],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:B},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],ue.prototype,"labelingInfo",void 0),p([d(H)],ue.prototype,"legendEnabled",void 0),p([d({type:["show","hide"]})],ue.prototype,"listMode",void 0),p([d({type:M})],ue.prototype,"maxReconnectionAttempts",void 0),p([d({type:M})],ue.prototype,"maxReconnectionInterval",void 0),p([d(K)],ue.prototype,"maxScale",void 0),p([d(Y)],ue.prototype,"minScale",void 0),p([d({type:String})],ue.prototype,"objectIdField",void 0),p([d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ue.prototype,"operationalLayerType",void 0),p([d(Z)],ue.prototype,"popupEnabled",void 0),p([d({type:ee,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ue.prototype,"popupTemplate",void 0),p([d({type:pe})],ue.prototype,"purgeOptions",void 0),p([d({types:te,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ue.prototype,"renderer",null),p([G("service","renderer",["drawingInfo.renderer","defaultSymbol"]),G("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ue.prototype,"readRenderer",null),p([J("renderer")],ue.prototype,"writeRenderer",null),p([J("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:re}})],ue.prototype,"writeWebSceneRenderer",null),p([d(ie)],ue.prototype,"screenSizePerspectiveEnabled",void 0),p([d({type:j,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ue.prototype,"spatialReference",void 0),p([d({json:{read:!1}})],ue.prototype,"type",void 0),p([d(oe)],ue.prototype,"url",void 0),p([d({type:Number})],ue.prototype,"updateInterval",void 0),p([d({type:String})],ue.prototype,"webSocketUrl",void 0),ue=p([y("esri.layers.StreamLayer")],ue);const ce=se({types:ne});var fe=ue;export{fe as default};
//# sourceMappingURL=StreamLayer.f751c135.js.map