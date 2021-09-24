import{F as e,G as t,H as r,aa as i,bb as s,k_ as l,bt as a,fr as n,j5 as o,j6 as u,B as d,eQ as p,bI as f,fR as c,bN as h,k$ as y,l0 as m,l1 as F,l2 as w,l3 as b,l4 as x,l5 as v,M as E,z as g,l6 as q}from"./vendor.7103ff48.js";import{y as I}from"./FeatureFilter.92b7d1aa.js";import{d as R,t as _}from"./popupUtils.99eeb504.js";var P;let j=P=class extends i{constructor(){super(...arguments),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}clone(){return new P({filter:this.filter&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e([t({type:I,json:{write:!0}})],j.prototype,"filter",void 0),e([t({json:{write:!0}})],j.prototype,"includedEffect",void 0),e([t({json:{write:!0}})],j.prototype,"excludedEffect",void 0),e([t({type:Boolean,json:{write:!0}})],j.prototype,"excludedLabelsVisible",void 0),j=P=e([r("esri.views.layers.support.FeatureEffect")],j);var O=j;const N=s.getLogger("esri.views.layers.FeatureLayerView"),G=i=>{let s=class extends i{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.effect=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){a(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","effect","layer.timeInfo","layer.floorInfo","timeExtent"],(()=>this._handleRequiredFieldsChange()),!0),n(this,"view.floors","change",(()=>this._handleRequiredFieldsChange())),n(this,"layer.sublayer","change",(()=>this._handleRequiredFieldsChange()))}get availableFields(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?o(t,[...u(t,e.outFields),...r]):o(t,r)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){N.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=d(this.filter)?this.filter.createQuery(e):new p(e);if("feature"===this.layer.type){const e=f(this);d(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return d(this.timeExtent)&&(t.timeExtent=d(t.timeExtent)?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return c()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,l="orderBy"in t&&t.orderBy,a=t.featureReduction,n=new Set,o=await h([s?s.collectRequiredFields(n,r):null,y(n,t),e?m(n,t):null,d(this.filter)?F(n,t,this.filter):null,this.effect?F(n,t,this.effect.filter):null,a?w(n,t,a):null,l?b(n,t,l):null]);if(t.timeInfo&&this.timeExtent&&x(n,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"feature"===t.type&&t.floorInfo&&x(n,t.fieldsIndex,[t.floorInfo.floorField]),"subtype-group"===t.type){v(n,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null==(t=e.renderer)?void 0:t.collectRequiredFields(n,r),y(n,e)])}));await h(e)}for(const d of o)d.error&&N.error(d.error);v(n,r,i),e&&"displayField"in t&&t.displayField&&v(n,r,t.displayField);const u=Array.from(n).sort();this._set("requiredFields",u)}validateFetchPopupFeatures(e){if(E(e))return null;for(const t of e.clientGraphics){const r=t.layer;if("popupEnabled"in r&&!r.popupEnabled)return new g("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r});if("popupTemplate"in r&&!R(r,e))return new g("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r})}}async fetchClientPopupFeatures(e){const t=d(e)?e.clientGraphics:null;if(!t||0===t.length)return Promise.resolve([]);const r=[],i=[],s=await this.createPopupQuery(e);for(const l of t){const{layer:t}=l;if(!("popupEnabled"in t))continue;const a=u(this.layer.fieldsIndex,s.outFields),n=R(t,e);if(!d(n))continue;const o=await this._loadArcadeModules(n);o&&o.arcadeUtils.hasGeometryOperations(n)||!q(a,l)?i.push(l):r.push(l)}return"stream"===this.layer.type||0===i.length?Promise.resolve(r):(s.objectIds=i.map((e=>e.attributes[this.layer.objectIdField])),this.layer.queryFeatures(s).then((e=>r.concat(e.features))).catch((()=>i)))}async createPopupQuery(e){const t=this.layer.createQuery(),r=new Set;let i=!1;const s=d(e)&&e.clientGraphics?e.clientGraphics.map((e=>e.layer)):[this.layer];for(const l of s){if(!("popupEnabled"in l))continue;const t=R(l,e);if(!d(t))continue;const s=await this._loadArcadeModules(t),a=s&&s.arcadeUtils.hasGeometryOperations(t);i=!("point"!==this.layer.geometryType&&!a);const n=await _(this.layer,t);for(const e of n)r.add(e)}if(t.returnGeometry=i,t.returnZ=i,t.returnM=i,t.outFields=Array.from(r),t.outSpatialReference=this.view.spatialReference,"feature"===this.layer.type){const e=f(this);d(e)&&(t.where=t.where?`(${t.where}) AND (${e})`:e)}return t}canResume(){return!(!super.canResume()||d(this.timeExtent)&&this.timeExtent.isEmpty)}};return e([t()],s.prototype,"_updatingRequiredFieldsPromise",void 0),e([t({readOnly:!0})],s.prototype,"availableFields",null),e([t({type:O})],s.prototype,"effect",void 0),e([t({type:I})],s.prototype,"filter",void 0),e([t(l)],s.prototype,"timeExtent",void 0),e([t()],s.prototype,"layer",void 0),e([t({type:Number})],s.prototype,"maximumNumberOfFeatures",null),e([t({readOnly:!0,type:Boolean})],s.prototype,"maximumNumberOfFeaturesExceeded",null),e([t({readOnly:!0})],s.prototype,"requiredFields",void 0),e([t()],s.prototype,"suspended",void 0),e([t()],s.prototype,"view",void 0),s=e([r("esri.views.layers.FeatureLayerView")],s),s};export{G as P,O as l};
//# sourceMappingURL=FeatureLayerView.fa33e3fb.js.map