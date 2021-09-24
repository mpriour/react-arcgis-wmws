var e,t=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,l=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&o(e,i,t[i]);if(s)for(var i of s(t))n.call(t,i)&&o(e,i,t[i]);return e},h=(e,t)=>i(e,r(t));import{F as u,G as d,H as c,D as p,bq as y,bY as f,nQ as g,ah as _,ag as m,hN as v,ng as b,bW as w,dB as R,nR as S,B as x,bb as I,J as F,dC as O,bt as T,z as C,b1 as U,A as E,b4 as q,P,hG as k,jf as j,K as V,x as N,eQ as L,bv as A,M as J,dc as H,hO as z,hJ as M,ih as B}from"./vendor.7103ff48.js";import{u as G}from"./Container.f525a10f.js";import{s as D}from"./clickToleranceUtils.85f9bed9.js";import{N as Q}from"./definitions.e5e12ce7.js";import{l as $}from"./LayerView2D.3bec42c6.js";import{e as K,u as W,f as Y,g as X,m as Z,h as ee,M as te}from"./schemaUtils.c28cd36f.js";import{P as ie,l as re}from"./FeatureLayerView.fa33e3fb.js";import{a as se}from"./RefreshableLayerView.7b9ab281.js";import{y as ae}from"./FeatureFilter.92b7d1aa.js";import{a as ne}from"./drapedUtils.fabca730.js";import"./Utils.8f00ae04.js";import"./MaterialKey.8df623c8.js";import"./visualVariablesUtils.f42dea16.js";import"./CIMSymbolHelper.da5834c9.js";import"./Rect.db562a93.js";import"./BidiEngine.af5bfcbd.js";import"./MD5.86afbcc5.js";import"./popupUtils.99eeb504.js";let oe=e=class extends p{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null}getObjectId(){return this.objectId}clone(){return new e(l({objectId:this.objectId},this.cloneProperties()))}};u([d({type:Boolean})],oe.prototype,"isAggregate",void 0),u([d({type:Number,json:{read:!0}})],oe.prototype,"objectId",void 0),oe=e=u([c("esri.AggregateGraphic")],oe);var le=oe;function he(e){return e.some((e=>e.globalId))}function ue(e){return e.filter((e=>!e.error)).map((e=>{var t;return null!=(t=e.objectId)?t:e.globalId}))}function de(e,t){const i=new Set(e);for(const r of t.values())i.add(r);return i}function ce(e,t){const i=new Set(e);for(const r of t.values())i.delete(r);return i}let pe=class extends y{constructor(e){super(),this._hasGlobalIds=!1,this._queueProcessor=new f({concurrency:1,process:e.process})}destroy(){this._queueProcessor.clear()}get updating(){return this._queueProcessor.length>0}push(e){const t=this._queueProcessor,i=t.last();switch(e.type){case"update":case"refresh":if((null==i?void 0:i.type)===e.type)return;t.push(e).finally((()=>this.notifyChange("updating")));break;case"edit":{const r="processed-edit"===(null==i?void 0:i.type)?i:null;r&&t.popLast();const s=this._mergeEdits(r,e);for(const e of s)t.push(e).finally((()=>this.notifyChange("updating")));break}}this.notifyChange("updating")}_mergeEdits(e,t){var i,r;const{addedFeatures:s,deletedFeatures:a,updatedFeatures:n}=t.edits;if(this._hasGlobalIds=this._hasGlobalIds||he(s)||he(n)||he(a),this._hasGlobalIds)return[e,{type:"processed-edit",edits:{addOrModified:[...s,...n],removed:a}}];const o=new Set(ue(null!=(i=null==e?void 0:e.edits.addOrModified)?i:[])),l=new Set(ue(null!=(r=null==e?void 0:e.edits.removed)?r:[])),h=new Set([...ue(s),...ue(n)]),u=new Set(ue(a));return[{type:"processed-edit",edits:{addOrModified:Array.from(de(ce(o,u),h)).map((e=>({objectId:e}))),removed:Array.from(de(ce(l,h),u)).map((e=>({objectId:e})))}}]}};u([d({readOnly:!0})],pe.prototype,"updating",null),pe=u([c("esri.views.2d.layers.support.FeatureCommandQueue")],pe);var ye=pe;let fe=class extends g{constructor(e){super(e),this._startupResolver=_(),this.isReady=!1}initialize(){this._controller=m(),this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,i,r){await this.when();const s=this._controller.signal,a=function(e){return Array.isArray(e)}(i.source)?{transferList:i.source,signal:s}:void 0,n={service:i,config:t,tileInfo:e.tileInfo.toJSON(),tiles:r};await this._connection.invoke("startup",n,a),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,v(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,v(this._connection.invoke("controller.setHighlight",e))}async refresh(){return await this._startupResolver.promise,v(this._connection.invoke("controller.refresh"))}async querySummaryStatistics(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},i)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeature(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeature",e)}async getAggregate(e){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregate",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,v(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,v(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async _startWorker(e){try{this._connection=await b("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){w(t)}}};u([d()],fe.prototype,"isReady",void 0),u([d()],fe.prototype,"client",void 0),u([d()],fe.prototype,"tileRenderer",null),fe=u([c("esri.views.2d.layers.support.FeatureLayerProxy")],fe);var ge=fe;class _e{constructor(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}destroy(){}clear(){this._tiles.forEach((e=>this._releaseTile(e)))}tileKeys(){const e=[];return this._tiles.forEach(((t,i)=>e.push(i))),e}update(e){const t=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),{spans:i,lodInfo:r}=t,{level:s}=r,a=[],n=[],o=new Set,l=new Set;for(const{row:h,colFrom:u,colTo:d}of i)for(let e=u;e<=d;e++){const t=R.getId(s,h,r.normalizeCol(e),r.getWorldForColumn(e)),i=this._getOrAcquireTile(a,t);o.add(t),i.isReady?i.visible=!0:l.add(i.key)}return l.forEach((e=>this._addPlaceholders(o,e))),this._tiles.forEach((e=>{o.has(e.key.id)||(n.push(e.key.id),this._releaseTile(e))})),S.pool.release(t),{hasMissingTiles:l.size>0,added:a,removed:n}}_getOrAcquireTile(e,t){if(!this._tiles.has(t)){const i=this.acquireTile(new R(t));e.push(t),this._tiles.set(t,i),i.visible=!1}return this._tiles.get(t)}_getTile(e){return this._tiles.get(e)}_releaseTile(e){this._tiles.delete(e.key.id),this.releaseTile(e)}_addPlaceholders(e,t){const i=this._addPlaceholderChildren(e,t);Math.abs(1-i)<1e-6||this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0)}_addPlaceholderChildren(e,t){let i=0;return this._tiles.forEach((r=>{i+=this._addPlaceholderChild(e,r,t)})),i}_addPlaceholderChild(e,t,i){return t.key.level<=i.level||!t.hasData||!i.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-i.level)))}_addPlaceholderParent(e,t){let i=t.getParentKey(),r=0,s=null;for(;x(i);){if(e.has(i.id))return!0;const t=this._getTile(i.id);if(null!=t&&t.isReady)return t.visible=!0,e.add(t.key.id),!0;null!=t&&t.hasData&&t.patchCount>r&&(r=t.patchCount,s=t),i=i.getParentKey()}return!!s&&(s.visible=!0,e.add(s.key.id),!0)}}function me(e){return e&&"openPorts"in e}const ve=I.getLogger("esri.views.2d.layers.FeatureLayerView2D");let be=class extends(ie(se($(B)))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new ye({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh();case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._effect=null,this._highlightIds=new Map,this._lastPixelBuffer=0,this._updateHighlight=F((async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys())))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.filter=null,this.effectLists={included:new G,excluded:new G}}destroy(){var e,t;O(this._updateClusterSizeTask,(e=>e.remove())),null==(e=this._proxy)||e.destroy(),null==(t=this.tileRenderer)||t.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.handles.add([this.on("valueRangesChanged",(e=>{this._set("_aggregateValueRanges",e.valueRanges)})),T(this,"effect",(e=>{this.effectLists.included.effect=null==e?void 0:e.includedEffect})),T(this,"effect",(e=>{this.effectLists.excluded.effect=null==e?void 0:e.excludedEffect}))])}async _initProxy(){if("isTable"in this.layer&&this.layer.isTable)throw new C("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});this._proxy&&this._proxy.destroy();const e=this._createClientOptions();return this._set("_proxy",new ge({client:e})),this._proxy.when()}async _initServiceOptions(){this._set("_serviceOptions",await this._createServiceOptions())}get orderByFields(){return"stream"!==this._serviceOptions.type&&this._serviceOptions.orderByFields}get labelsVisible(){const e="subtype-group"===this.layer.type?this.layer.sublayers.items:[this.layer];return!this.suspended&&e.some((e=>e.labelingInfo&&e.labelsVisible))}get effect(){return U(this._effect,null)}set effect(e){const t=this._effect;x(t)&&x(t.filter)&&t.filter.enabled&&x(e)&&x(e.filter)&&e.filter.enable(),this._effect=e,this.notifyChange("effect")}get effects(){return this.effect&&[this.effect]||[]}get queryMode(){return this._serviceOptions.type}get renderingConfigHash(){if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s="subtype-group"!==this.layer.type&&this.layer.labelsVisible&&this.layer.labelingInfo,a="renderer"in t&&t.renderer,n="feature"===t.type?t.gdbVersion:void 0,o="feature"===t.type&&t.historicMoment?t.historicMoment.getTime():void 0,{timeExtent:l}=this,h="stream"===t.type?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,u=JSON.stringify(this.clips),d=t.featureReduction&&t.featureReduction.toJSON(),c="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),p="sublayers"in this.layer&&this.layer.sublayers.items.reduce(((e,t)=>e+`${t.visible?1:0}.${JSON.stringify(t.renderer)}.${t.labelsVisible}\n.${JSON.stringify(t.labelingInfo)}`),"");return JSON.stringify({orderBy:c,sublayerHash:p,filterHash:x(this.filter)&&this.filter.toJSON(),effectHash:x(this.effect)&&this.effect.toJSON(),streamFilter:h,gdbVersion:n,definitionExpression:r,historicMoment:o,availableFields:e,renderer:a,labelingInfo:s,timeExtent:l,floors:i,clipsHash:u,featureReduction:d})}get hasEffects(){return this.effectLists.included.hasEffects||this.effectLists.excluded.hasEffects}highlight(e){let t;return e instanceof p?t=[e.getObjectId()]:"number"==typeof e||"string"==typeof e?t=[e]:E.isCollection(e)?t=e.map((e=>e&&e.getAttribute(this.layer.objectIdField))).toArray():Array.isArray(e)&&e.length>0&&(t="number"==typeof e[0]||"string"==typeof e[0]?e:e.map((e=>e&&e.getAttribute(this.layer.objectIdField)))),t&&t.length?(t=t.filter((e=>null!=e)),this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}hitTest(e,t){return this._hitTest(e,t)}async queryAggregates(){return(await this._proxy.getAggregates()).map((e=>le.fromJSON(e)))}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r=l({},t);var s;return t.valueExpression&&(r.viewInfoParams={viewingMode:"map",scale:this.view.scale,spatialReference:null==(s=this.view.spatialReference)?void 0:s.toJSON()}),this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then((e=>{const t=q.fromJSON(e);return t.features.forEach((e=>this._setLayersForFeature(e))),t}))}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then((e=>({count:e.count,extent:P.fromJSON(e.extent)})))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new _e({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.handles.add(T(this,"renderingConfigHash",(()=>this._update())),"attach"),"stream"!==this.layer.type&&this.handles.add(this.layer.on("edits",(e=>this._edit(e))),"attach")}detach(){this.container.removeAllChildren(),this.handles.remove("attach"),this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}async fetchPopupFeatures(e,t){if(x(t)&&t.clientGraphics.length){const e=t.clientGraphics[0];if(e instanceof le)return[e];t.clientGraphics=t.clientGraphics.filter((e=>{const{layer:t}=e,i="popupEnabled"in t&&t.popupEnabled,r="popupTemplate"in t&&t.popupTemplate,s=this.view.popup.defaultPopupTemplateEnabled;return i&&(r||s)}))}const i=this.validateFetchPopupFeatures(t);if(i)throw i;if(x(t)&&0===t.clientGraphics.length)return[];const r=this.fetchClientPopupFeatures(t);if(!e)return r;const s=this._fetchServicePopupFeatures(e,t);return k([r,s]).then(j)}async _fetchServicePopupFeatures(e,t){if("stream"===this.layer.type||"ogc-feature"===this.layer.type)return[];const i=await this.createPopupQuery(t),{layer:r}=this,s="renderer"in r&&r.renderer,a=x(t)?t.event:null,n=D({renderer:s,event:a});i.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n);const o=new Set,{objectIdField:l}=r,h=x(t)?t.clientGraphics:null;if(h)for(const u of h)o.add(u.attributes[l]);return r.queryFeatures(i).then((e=>e.features.filter((e=>!o.has(e.attributes[l])))))}createFetchPopupFeaturesQueryGeometry(e,t){return ne(e,t,this.view)}isUpdating(){var e;const t="renderer"in this.layer&&null!=this.layer.renderer,i=this._commandsQueue.updating,r=null!=this._updatingRequiredFieldsPromise,s=!this._proxy||!this._proxy.isReady,a=this._pipelineIsUpdating,n=null===this.tileRenderer||(null==(e=this.tileRenderer)?void 0:e.updating),o=t&&(i||r||s||a||n);return V("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${t}\n  -> hasPendingCommand ${i}\n  -> updatingRequiredFields ${r}\n  -> updatingProxy ${s}\n  -> updatingPipeline ${a}\n  -> updatingTileRenderer ${n}\n`),o}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){if("path"in e&&("feature"===this.layer.type||"subtype-group"===this.layer.type)&&"point"===this.layer.geometryType&&this.layer.capabilities.query.supportsPagination&&!this.layer.capabilities.operations.supportsEditing&&V("featurelayer-snapshot-enabled"))try{const e=await this.layer.queryFeatureCount();if(e<=V("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:e};const t=V("featurelayer-snapshot-point-max-threshold"),i=V("featurelayer-snapshot-point-coverage"),r=this.view.extent,s=this.layer.fullExtent,a=null==s?void 0:s.clone().intersection(r),n=x(a)?a.width*a.height:0,o=(null==s?void 0:s.width)*(null==s?void 0:s.height),l=0===o?0:n/o;if(e<=t&&l>=i)return{mode:"snapshot",featureCount:e}}catch(t){ve.warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:t})}return{mode:"on-demand"}}async _createServiceOptions(){var e;const t=this.layer;if("stream"===t.type)return null;const{capabilities:i,objectIdField:r}=t,s=t.fields.map((e=>e.toJSON())),a=t.fullExtent&&t.fullExtent.toJSON(),n=K(t.geometryType),o=t.timeInfo&&t.timeInfo.toJSON()||null,u=t.spatialReference?t.spatialReference.toJSON():null,d=h(l({},"customParameters"in t?t.customParameters:void 0),{token:"apiKey"in t?t.apiKey:void 0}),c="feature"===t.type?t.globalIdField:null;let p;"ogc-feature"===t.type?p=t.source.getFeatureDefinition():me(t.source)?p=await t.source.openPorts():t.parsedUrl&&(p=N(t.parsedUrl),"dynamicDataSource"in t&&t.dynamicDataSource&&(p.query={layer:JSON.stringify({source:t.dynamicDataSource})}));const y="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,f=null!=(e="subtypeField"in this.layer&&this.layer.subtypeField)?e:null,{mode:g,featureCount:_}=await this._detectQueryMode(p);let m=this.layer.objectIdField;if("feature"===this.layer.type&&x(this.layer.orderBy)&&this.layer.orderBy.length){const e=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;e&&(m=e)}return{type:g,timeReferenceUnknownClient:y,subtypeField:f,featureCount:_,globalIdField:c,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,fields:s,fullExtent:a,geometryType:n,objectIdField:r,source:p,timeInfo:o,spatialReference:u,customParameters:d,orderByFields:m}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return h(l({},this._createServiceOptions()),{type:"memory",source:t})}_cleanUpQuery(e){const t=L.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){if(this._validateEdit(e))return this._commandsQueue.push({type:"edit",edits:e})}async doRefresh(){return this._commandsQueue.push({type:"refresh"})}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some((e=>-1===e.objectId||!e.objectId)),r=t&&this.availableFields.includes(t);return i&&!r?(ve.error(new C("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{effect:t,filter:i}=this;await this._updateRequiredFields();const{renderer:r}=this._getEffectiveRenderer();this._set("_effectiveRenderer",r);const s=this._createSchemaConfig(),a=K(this.layer.geometryType),n=await W(r,a,this.layer.featureReduction),o=this._createConfiguration(s,i,t);this._lastPixelBuffer=0===n?0:Math.max(n,this._lastPixelBuffer),o.schema.source.pixelBuffer=this._lastPixelBuffer;const l=this._createTileRendererHash(r);if(l!==this._tileRendererHash){await this._initTileRenderer(r);const e=this._serviceOptions;this.effects.forEach((e=>x(e)&&x(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r);const t={added:this._tileStrategy.tileKeys(),removed:[]},i=this.layer;"stream"!==i.type&&me(i.source)&&(e.source=await i.source.openPorts()),"stream"===i.type&&await this._initServiceOptions(),await this._proxy.startup(this.view.featuresTilingScheme,o,e,t),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(r)}else{const t=await this._proxy.update(o);(t.mesh||t.targets.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(t)}catch(e){A(e)||ve.error(e)}(t.mesh||t.targets.aggregate)&&this._unlockGPUUploads(),this.effects.forEach((e=>x(e)&&x(e.filter)&&e.filter.enable())),this.tileRenderer.onConfigUpdate(r),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=l,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch(e){}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(t){A(t)}}async _doRefresh(){this._lockGPUUploads();try{await this._proxy.refresh()}catch(e){A(e)}this._unlockGPUUploads()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return this.watch("_aggregateValueRanges",(async i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()}))}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=Y(e.visualVariables);if(x(r)&&"cluster_count"===r.field){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=X(t,i);const a=e.clone();a.dynamicClusterSize=!0,this._set("_effectiveRenderer",a)}}}_getEffectiveRenderer(){const e="renderer"in this.layer&&this.layer.renderer,t=this.layer.featureReduction;if(x(this._updateClusterSizeTask)&&(this._updateClusterSizeTask.remove(),this._updateClusterSizeTask=null),t&&"cluster"===t.type&&Z(e)){const i=t,r=[],s=ee(r,e,i,this._aggregateValueRanges);return O(this._updateClusterSizeTask,(e=>e.remove())),this._updateClusterSizeTask=this._createUpdateClusterSizeTask(s,i),{renderer:s,aggregateFields:r,featureReduction:t}}return{renderer:e,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",(()=>{this.requestUpdate()})),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e){const t=await async function(e,t){if(!e)return null;switch(e.type){case"class-breaks":case"simple":case"unique-value":case"dot-density":case"dictionary":return new((await import("./SymbolTileRenderer.1cf0709e.js")).default)(t);case"heatmap":return new((await import("./HeatmapTileRenderer.2dcfd05b.js")).default)(t)}}(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer.destroy(),this.tileRenderer=null),this.destroyed?null:(this._proxy.tileRenderer=t,this._set("tileRenderer",t),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(e),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return`${"heatmap"===e.type?"heatmap":"symbol"}.${"dot-density"===e.type}`}_createFeatureDataHash(e,t,i){const r=e.getAttributeHash(),s=JSON.stringify(t),a=x(i)&&JSON.stringify(i.filter),n=JSON.stringify(this.timeExtent);let o="";return this._visibilityOverrides.forEach((e=>o+=e)),`${r}.${s}.${a}.${n}.${o}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=x(e)?e.timeExtent:null,i=x(this.timeExtent)&&x(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const t=x(e)&&e.where;r=this._addFloorFilterClause(t)}if(!this._visibilityOverrides.size&&!i&&!s)return e;const a=x(e)&&e.clone()||new ae;return a.hiddenIds=this._visibilityOverrides,a.timeExtent=i,r&&(a.where=r),a}_addFloorFilterClause(e){const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){var r;let e=this.view.floors;if(!e||!e.length)return i;null!=(r=t.floorInfo.viewAllLevelIds)&&r.length&&(e=t.floorInfo.viewAllLevelIds);const s=e.filter((e=>""!==e)).map((e=>"'"+e+"'"));s.push("''");const a=t.floorInfo.floorField;let n="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(n=n.replace("{ids}",s.join(", ")),x(i)&&i.includes(a)){let e=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(e,""),e=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(e,""),i=i.replace(/\s+/g," ").trim()}i=""!==i?"("+i+") AND "+n:n}return""!==i?i:null}_createConfiguration(e,t,i){const r="feature"===this.layer.type&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s="feature"===this.layer.type?this.layer.gdbVersion:void 0,a=new Array(Q),n=this._injectOverrides(t);a[0]=x(n)?n.toJSON():null,a[1]=x(i)&&i.filter?i.filter.toJSON():null;const o=te(e);if(J(o))return null;const l=H();return{definitionExpression:this.layer.definitionExpression,availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:a,schema:o,supportsTextureFloat:l.supportsTextureFloat,maxTextureSize:l.maxTextureSize}}_hasRequiredSupport(e){var t;return!("renderer"in e&&"dot-density"===(null==(t=e.renderer)?void 0:t.type)&&!H().supportsTextureFloat&&(ve.error(new C("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),1))}_onceTilesUpdated(){return this.requestUpdate(),z(this,"_pipelineIsUpdating",!1)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const e="feature"===this.layer.type?this.layer.historicMoment:null,t="feature"===this.layer.type?this.layer.gdbVersion:null;return{renderer:"renderer"in this.layer&&this.layer.renderer,spatialReference:this.layer.spatialReference,timeExtent:this.layer.timeExtent,definitionExpression:this.layer.definitionExpression,featureReduction:this.layer.featureReduction,fields:this.layer.fields,geometryType:this.layer.geometryType,historicMoment:e,labelsVisible:"labelsVisible"in this.layer&&this.layer.labelsVisible,labelingInfo:"labelingInfo"in this.layer&&this.layer.labelingInfo,availableFields:this.availableFields,effect:this.effect,filter:this.filter,gdbVersion:t,pixelBuffer:0,orderBy:"orderBy"in this.layer&&this.layer.orderBy?this.layer.orderBy:null}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch((e=>{A(e)||ve.error(e)}))}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight().catch((e=>{A(e)||ve.error(e)}))}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t}_createHittestResult(e){return this._setLayersForFeature(e),x(e.geometry)&&(e.geometry.spatialReference=this.view.spatialReference),e}async _hitTest(e,t){if(this.suspended||!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(e,t);if(0===i.length)return await M(1),null;const r=i[0];if(!(e=>(2147483648&e)>>>31==1)(r)){const e=await this._proxy.getFeature(r);return O(e,(e=>this._createHittestResult(p.fromJSON(e))))}const s=await this._proxy.getAggregate(r);if(J(s))return null;if(x(s.referenceId)){const e=await this._proxy.getFeature(s.referenceId);return O(e,(e=>this._createHittestResult(p.fromJSON(e))))}return this._createHittestResult(le.fromJSON(s))}};u([d()],be.prototype,"_serviceOptions",void 0),u([d()],be.prototype,"_proxy",void 0),u([d()],be.prototype,"_pipelineIsUpdating",void 0),u([d()],be.prototype,"_effectiveRenderer",void 0),u([d()],be.prototype,"_aggregateValueRanges",void 0),u([d()],be.prototype,"_commandsQueue",void 0),u([d()],be.prototype,"labelsVisible",null),u([d({type:ae})],be.prototype,"filter",void 0),u([d({type:re})],be.prototype,"effect",null),u([d({readOnly:!0})],be.prototype,"effects",null),u([d({readOnly:!0})],be.prototype,"queryMode",null),u([d()],be.prototype,"renderingConfigHash",null),u([d()],be.prototype,"tileRenderer",void 0),u([d()],be.prototype,"updating",void 0),be=u([c("esri.views.2d.layers.FeatureLayerView2D")],be);var we=be;export{we as default};
//# sourceMappingURL=FeatureLayerView2D.7c87a48e.js.map