(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[3799],{73799:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>SceneLayerGraphicsView3D});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),Logger=__webpack_require__(36544),property=(__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),contains=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(47005)),Graphic=__webpack_require__(15988),vec3f64=__webpack_require__(77625),vec3=__webpack_require__(17387),watchUtils=__webpack_require__(80621),aaBoundingRect=__webpack_require__(50897),projection=__webpack_require__(28449),Scheduler=__webpack_require__(35430),zscale=__webpack_require__(98863),Query=__webpack_require__(31518),dehydratedFeatures=__webpack_require__(45201),debugFlags=__webpack_require__(25026),hydratedFeatures=__webpack_require__(58722),renderingInfoUtils=__webpack_require__(87920),LayerView3D=__webpack_require__(9355),layerViewUpdatingProperties=__webpack_require__(2609),orientedBoundingBox=__webpack_require__(75625),FeatureFilter=__webpack_require__(44119),SceneLayerView=__webpack_require__(28835),I3SUtil=__webpack_require__(83057),I3SOnDemandController=__webpack_require__(62546),GraphicsMap=__webpack_require__(30269),I3SAttributeOverrides=__webpack_require__(82483),DefinitionExpressionSceneLayerView=__webpack_require__(97614),QueryEngine=__webpack_require__(86594),Graphics3DFeatureLikeLayerView=__webpack_require__(16157),WorkerHandle=__webpack_require__(77195);class I3SPointsWorkerHandle_e extends WorkerHandle.q{constructor(r){super("SceneLayerWorker","dracoDecompressPointCloudData",r,{hasInitialize:!0})}getTransferList(r){return[r.geometryBuffer]}}var PopupSceneLayerView=__webpack_require__(71677),attributeEditing=__webpack_require__(38026),fieldProperties=__webpack_require__(5526),SceneLayerViewRequiredFields=__webpack_require__(62824);const K=Logger.Z.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),Z=(0,fieldProperties.v)();let J=class extends((0,DefinitionExpressionSceneLayerView.l)((0,PopupSceneLayerView.i)((0,LayerView3D.A)(SceneLayerView.Z)))){constructor(){super(...arguments),this._nodesAddedToStage=new Map,this.drapeSourceType=1,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new GraphicsMap.f,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){var e;const t=this.layer;this.addResolvingPromise(t.indexInfo),this._attributeOverrides=new I3SAttributeOverrides.l(this.layer,null==(e=this.view.resourceController)?void 0:e.memoryController),(0,I3SUtil.OJ)(t,this.view.spatialReference,this.view.viewingMode),this.fieldsHelper=new SceneLayerViewRequiredFields.K({layerView:this}),this.updatingHandles.add(t,"rangeInfos",(e=>this._rangeInfosChanged(e)),2),this.updatingHandles.add(t,"renderer",((e,t)=>this._rendererChange(e,t))),this.updatingHandles.add(this,"parsedDefinitionExpression",(()=>this._filterChange())),this.updatingHandles.add(this,"view.floors",(()=>this.graphics3d.filterVisibility.filterChanged())),this.handles.add((0,watchUtils.S1)(debugFlags.Z,"I3S_TREE_SHOW_TILES",(e=>{if(e&&!this._treeDebugger){const e=this._controller.crsIndex;__webpack_require__.e(2273).then(__webpack_require__.bind(__webpack_require__,92273)).then((({I3STreeDebugger:t})=>{!this._treeDebugger&&debugFlags.Z.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new t({lv:this,view:this.view,nodeSR:e}))}))}else e||!this._treeDebugger||debugFlags.Z.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)}))),this._set("graphics3d",new Graphics3DFeatureLikeLayerView.Z({owner:this,layer:t,preferredUpdatePolicy:1,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:t.fullExtent,updateClippingExtent:e=>this._updateClippingExtent(e)})),this.graphics3d.elevationAlignment&&this.graphics3d.elevationAlignment.events.on("invalidate-elevation",(e=>this._invalidateElevation(e))),this.supportsHeightUnitConversion&&(this._verticalScale=(0,zscale.k)("point",t.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.graphics3d.setup()),this._memCache=this.view.resourceController.memoryController.getMemCache(t.uid),this._controller=new I3SOnDemandController.Z({layerView:this,scaleVisibilityEnabled:!1}),(0,I3SUtil.X5)(this.layer.geometryDefinitions)&&(this._worker=new I3SPointsWorkerHandle_e(this.view.resourceController.scheduler)),this.handles.add(this.layer.on("apply-edits",(e=>this.updatingHandles.addPromise(e.result)))),this.handles.add(this.layer.on("edits",(e=>this._handleEdits(e)))),this.when((()=>{this._queryEngine=new QueryEngine.Z({layerView:this,task:Scheduler.iQ.FEATURE_QUERY_ENGINE}),this.updatingHandles.add(this,"maximumNumberOfFeatures",(e=>this._controller.featureTarget=e),2),this.updatingHandles.add(this,"suspended",(e=>{e&&this._removeAllNodeData()}))}))}destroy(){this._treeDebugger=(0,maybe.SC)(this._treeDebugger),this._attributeOverrides=(0,maybe.SC)(this._attributeOverrides),this._set("graphics3d",(0,maybe.SC)(this.graphics3d)),this._controller=(0,maybe.SC)(this._controller),this._queryEngine=(0,maybe.SC)(this._queryEngine),this._worker=(0,maybe.SC)(this._worker),this._memCache=(0,maybe.SC)(this._memCache),this._nodesAddedToStage.clear(),this.fieldsHelper=(0,maybe.SC)(this.fieldsHelper)}get requiredFields(){var e,t;return null!=(e=null==(t=this.fieldsHelper)?void 0:t.requiredFields)?e:[]}get maximumNumberOfFeatures(){const e=this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;return e?e.maximumNumberOfFeatures:0}set maximumNumberOfFeatures(e){null!=e?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){return!this.suspended&&!!this._controller&&!this._controller.leavesReached}get hasM(){return!1}get hasZ(){return!0}notifyGraphicGeometryChanged(e){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(e)}async whenGraphicAttributes(e,t){return(0,I3SUtil.bf)(this.layer,e,this._getObjectIdField(),t,(()=>[...this._nodesAddedToStage.values()]))}getGraphicFromGraphicUid(e){if(!this.loadedGraphics)return null;const t=(0,hydratedFeatures.mW)(this.loadedGraphics.find((t=>t.uid===e)),this.layer),r=this._getObjectIdField();return t&&t.attributes&&t.attributes[r]?(t.layer=this.layer,t.sourceLayer=this.layer,t):null}whenGraphicBounds(e,t){return this.graphics3d.graphicsCore.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.graphics3d.graphicsCore.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){return!!(this._controller&&this._controller.updating||this.graphics3d&&this.graphics3d.updating)}getRenderingInfo(e,t,i){const s=(0,renderingInfoUtils.Kb)(e,{renderer:t,arcade:i});if((0,maybe.pC)(s)&&s.color){const e=s.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return s}async getRenderingInfoAsync(e,t,r,i){return(0,renderingInfoUtils.xn)(e,{renderer:t,arcade:r,...i})}get symbolUpdateType(){return this.graphics3d.graphicsCore.symbolUpdateType}highlight(e){return this.graphics3d.highlight(e,this.layer.objectIdField)}createInteractiveEditSession(e){return(0,attributeEditing.s)(this.attributeEditingContext,e)}async extractBinaryPointData(e,t){const s={geometryBuffer:e.geometryBuffer};return(0,maybe.Wi)(this._worker)&&(this._worker=new I3SPointsWorkerHandle_e(this.view.resourceController.scheduler)),this._worker.invoke(s,t).then((e=>{if((0,maybe.pC)(e))return{positionData:e.positions,featureIds:e.featureIds};throw new Error("Failed to decompress Draco point data")}))}checkExtent(e,t){e&&!(0,contains.Qg)(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&K.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&K.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,r){if(!X(t)&&!$(t))return Promise.reject();if(this._nodesAddedToStage.has(e.index))return void K.error("I3S node "+e.id+" already added");const i=this.layer.fullExtent&&function te(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.hasZ&&(e.zmin-=t,e.zmax+=t),e.hasM&&(e.mmin-=t,e.mmax+=t),e}(this.layer.fullExtent.clone(),.5),s=this._controller.crsVertex,o=[],a={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};if(X(t)?await this._addNodeBinaryPointData(e,a,t,i,o,r):$(t)&&this._addNodeLegacyPointData(e,a,t,i,o),await this._attributeOverrides.apply(a.featureIds,t.attributeDataInfo,r),e.numFeatures=a.graphics.length,this._updateNodeMemory(e),ee(a),o.length>0&&(this.computeObb(e,o,s),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return this._cacheNodeData(a),Promise.resolve();if(this._verticalScale)for(const n of a.graphics)this._verticalScale(n.geometry);return this._nodesAddedToStage.set(e.index,a),this.loadedGraphics.addMany(a.graphics),this._filterNode(a),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve()}computeObb(e,t,r){const i=this._controller.crsIndex,s=i.isGeographic?this.view.renderSpatialReference:i;(0,projection.CM)(t,r,0,t,s,0,t.length/3);const o={data:t,size:3};e.serviceObb=(0,orientedBoundingBox.Qb)(o),i.isGeographic&&(0,projection.SH)(e.serviceObb.center,s,e.serviceObb.center,i)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,t,i,o,a,n){const d=await this.extractBinaryPointData(i,n);if(null==d)return Promise.reject();const u=this._getObjectIdField(),p=this._controller.crsVertex,g=this.view.spatialReference,y=this.graphics3d.graphicsCore,{positionData:f,featureIds:_}=d,v=f.length/3,E=new Array;for(let I=0;I<v;I++){const t=(0,maybe.pC)(e.serviceObb)?e.serviceObb.center:[0,0,0],i=3*I,n=(0,vec3f64.f)(f[i+0],f[i+1],f[i+2]);(0,vec3.b)(n,n,t),e.serviceObb||a.push(n[0],n[1],n[2]),o&&this.checkExtent(o,n);const d=_[I],v={};null!=d&&(v[u]=d);const w=null==d?Graphic.Z.generateUID():d;(0,projection.CM)(n,p,0,ie,g,0,1);const S=(0,dehydratedFeatures.Tx)(ie[0],ie[1],ie[2],g),C=this.loadedGraphics.get(w);if((0,maybe.pC)(C))C.level<e.level&&(se.property="geometry",se.graphic=C,se.oldValue=(0,maybe.Wg)(C.geometry),se.newValue=S,C.geometry=S,y.graphicUpdateHandler(se)),E.push(C);else{const t=Graphic.Z.generateUID();E.push({objectId:w,uid:t,geometry:S,attributes:v,visible:!0,level:e.level})}}t.graphics=E,t.featureIds=_}_addNodeLegacyPointData(e,t,i,s,o){const a=this._getObjectIdField(),n=this._controller.crsVertex,d=this.view.spatialReference,l=[0,0,0],u=new Array,c=new Array;for(const p of i.pointData){const t=p.featureDataPosition,i=t.length,g=p.geometries&&p.geometries[0]||re[i],y=p.featureIds[0];if("points"!==g.params.type)continue;s&&this.checkExtent(s,t);const f={};null!=y&&(f[a]=y);const _=null==y?Graphic.Z.generateUID():y;let b;"Embedded"===g.type&&(b=g.params.vertexAttributes.position);for(let s=0;s<b.length;s+=i){for(let e=0;e<i;e++)l[e]=t[e]+b[s+e];const a=3===i;e.serviceObb||o.push(l[0],l[1],a?l[2]:0),(0,projection.CM)(l,n,0,ie,d,0,1);const u=(0,dehydratedFeatures.Tx)(ie[0],ie[1],a?ie[2]:void 0,d),p=this.loadedGraphics.get(_);(0,maybe.pC)(p)?c.push(p):c.push({objectId:_,uid:Graphic.Z.generateUID(),geometry:u,attributes:f,visible:!0})}u.push(y)}t.graphics=c,t.featureIds=u}_updateNodeMemory(e){e.memory=4096+((0,maybe.pC)(e.numFeatures)?e.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce(((e,t)=>(0,dehydratedFeatures.Xw)(t)+e),512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach((e=>{if(e){const t=e.node;this._updateNodeMemory(t),this._cacheNodeData(e)}})),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,r,i){if(!this._nodesAddedToStage.has(e.index))return this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._updateNodeMemory(e),await this.updateAttributes(e.index,r,i),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update(),Promise.resolve();K.error("I3S node "+e.id+" already added")}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach((t=>e.push(t.node.id))),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach((t=>e.push(t.node))),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach(((t,r)=>e.push(r)))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&(0,maybe.pC)(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&(0,maybe.pC)(t.attributeInfo))return t.attributeInfo.attributeData}setAttributeData(e,t){const r=this._nodesAddedToStage.get(e);r&&!(0,maybe.Wi)(r.attributeInfo)&&(r.attributeInfo.attributeData=t,this._attributeValuesChanged(r))}async updateAttributes(e,t,r){const i=this._nodesAddedToStage.get(e);i&&(await this._attributeOverrides.apply(i.featureIds,t,r),i.attributeInfo=t,this._attributeValuesChanged(i))}_attributeValuesChanged(e){if(ee(e),this._filterNode(e),this.graphics3d.graphicsCore.labelsEnabled){const t=e.graphics.map((e=>e.uid));this.graphics3d.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||"OBJECTID"}async _rendererChange(e,t){const{layer:{fields:r}}=this,i=new Set;let s,o;e?(await e.collectRequiredFields(i,r),s=Array.from(i).sort()):s=[],i.clear(),t?(await t.collectRequiredFields(i,r),o=Array.from(i).sort()):o=[],s.length===o.length&&s.every(((e,t)=>s[t]===o[t]))||this._reloadAllNodes()}_rangeInfosChanged(e){null!=e&&e.length>0&&K.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach((e=>this._filterNode(e)))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression;for(const r of e.graphics){const e=r.visible;r.visible=!t||this._evaluateClause(t,r),e!==r.visible&&(se.graphic=r,se.property="visible",se.oldValue=e,se.newValue=r.visible,this.graphics3d.graphicsCore.graphicUpdateHandler(se))}}_invalidateElevation(e){const t=this._controller.crsIndex;(0,projection.dH)(e.extent,e.spatialReference,oe,t),this._controller.updateElevationChanged(oe,t)}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return(0,maybe.pC)(this.filter)?this.filter.createQuery(e):new Query.Z(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),null==t?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),null==t?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),null==t?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),null==t?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery((0,maybe.Wi)(e)?this.createQuery():Query.Z.from(e))}getUsedMemory(){const e=this.graphics3d&&this.graphics3d.graphicsCore;return e?e.usedMemory:0}getUnloadedMemory(){const e=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?this._controller.unloadedMemoryEstimate:0)+(e?e.unprocessedMemoryEstimate:0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){(0,attributeEditing.Z)(this.attributeEditingContext,e)}get attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:e=>this._nodesAddedToStage.forEach((t=>e(t.node,t.featureIds))),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(t,i,s)=>{this.setAttributeData(t,i);const o=this._nodesAddedToStage.get(t);if((0,maybe.pC)(s)){const t=this.loadedGraphics.get(s.attributes[e]);(0,maybe.pC)(t)&&this.graphics3d.graphicsCore.recreateGraphics([t])}else(0,maybe.pC)(o)&&this.graphics3d.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.graphics3d.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,numFeatures:this.loadedGraphics.length}}};(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"graphics3d",void 0),(0,tslib_es6._)([(0,property.Cb)({type:FeatureFilter.Z})],J.prototype,"filter",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"loadedGraphics",void 0),(0,tslib_es6._)([(0,property.Cb)({aliasOf:"layer"})],J.prototype,"i3slayer",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"_controller",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"updating",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"holeFilling",void 0),(0,tslib_es6._)([(0,property.Cb)(layerViewUpdatingProperties.q)],J.prototype,"updatingProgress",void 0),(0,tslib_es6._)([(0,property.Cb)({aliasOf:"_controller.updatingProgress"})],J.prototype,"updatingProgressValue",void 0),(0,tslib_es6._)([(0,property.Cb)(Z.requiredFields)],J.prototype,"requiredFields",null),(0,tslib_es6._)([(0,property.Cb)(Z.availableFields)],J.prototype,"availableFields",void 0),(0,tslib_es6._)([(0,property.Cb)()],J.prototype,"fieldsHelper",void 0),(0,tslib_es6._)([(0,property.Cb)({type:Number})],J.prototype,"maximumNumberOfFeatures",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"maximumNumberOfFeaturesExceeded",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],J.prototype,"lodFactor",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"hasM",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"hasZ",null),J=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.SceneLayerGraphicsView3D")],J);var Y=J;function $(e){return"pointData"in e}function X(e){return"geometryBuffer"in e&&null!==e.geometryBuffer}function ee(e){const t=e.attributeInfo;for(let i=0;i<e.graphics.length;i++){const s=e.graphics[i];if(s.attributes||(s.attributes={}),(0,maybe.pC)(t)&&(0,maybe.pC)(t.loadedAttributes))for(const{name:e}of t.loadedAttributes)t.attributeData[e]&&(s.attributes[e]=(0,I3SUtil.Jx)(t.attributeData[e],i))}}const re={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},ie=(0,vec3f64.c)(),se={graphic:null,property:null,oldValue:null,newValue:null},oe=(0,aaBoundingRect.Ue)(),SceneLayerGraphicsView3D=Y},38026:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>s,Z:()=>i});var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(82550),_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59472),_support_attributeUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80969);const o={setAttribute(){},rollback(){},commit(){}};function s(e,r){const s=r.attributes[e.objectIdField],i=e.sessions.get(s);if(i)return i;const a=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__.d9)(r.attributes),u=new Set;if(null==s)return o;const c=e.attributeOverrides.createInteractiveEditSession(s),f=new Map,l=(t,e)=>{const n=f.get(t);if(null==n){const n=e.indexOf(s);return f.set(t,n),n}return n};let d=0;const b={setAttribute(t,o){if(0!==d)return;const s=e.fieldsIndex.get(t);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.Wi)(s))return;const i=e.attributeStorageInfo.findIndex((t=>t.name===s.name));if(i<0)return;c.set(i,o);const a=e.attributeStorageInfo[i];let f=!1;u.add(t),e.forEachNode(((t,n)=>{const s=l(t,n);if(-1===s)return;const i=e.getAttributeData(t.index);if(i){const n=i[a.name];n&&(n[s]=o,e.setAttributeData(t.index,i,r),f=!0)}})),f&&e.clearMemCache()},rollback(){if(0===d){for(const t of u)this.setAttribute(t,a[t]);c.rollback(),d=1,e.sessions.delete(s)}},commit(){0===d&&(c.commit(),d=2,e.sessions.delete(s))}};return e.sessions.set(s,b),b}function i(t,n){const r=function a(t,e){const n=e.edits.updateFeatures;if(!n||0===n.length)return new d;const o=function f(t){const e=new Set;if(!t.updatedFeatures)return e;for(const n of t.updatedFeatures)null!=n.objectId&&null==n.error&&e.add(n.objectId);return e}(e),s=new d,i=new Map;for(let r=0;r<t.attributeStorageInfo.length;r++)i.set(t.attributeStorageInfo[r].name,r);const a=t.fieldsIndex,c=t.objectIdField,l=n.filter((t=>{const e=(0,_support_attributeUtils_js__WEBPACK_IMPORTED_MODULE_2__.g)(a,t.attributes,c);return o.has(e)}));return t.forEachNode(((e,n)=>{const o=new Set(n);for(const i of l){const f=(0,_support_attributeUtils_js__WEBPACK_IMPORTED_MODULE_2__.g)(a,i.attributes,c);if(!o.has(f))continue;const l=n.indexOf(f);for(const n in i.attributes){const r=t.fieldsIndex.normalizeFieldName(n),o=u(s,e.index,r),a=i.attributes[n];o.push({featureIndex:l,featureId:f,value:a})}}})),s}(t,n);if(0===r.size)return;const o=new Map;for(let e=0;e<t.attributeStorageInfo.length;e++)o.set(t.attributeStorageInfo[e].name,e);let s=!1;r.forEach(((n,r)=>{const i=t.getAttributeData(r);let a=!1;n.forEach(((n,r)=>{const u=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(i)?i[r]:null,c=o.get(r);for(const{featureIndex:e,value:o,featureId:i}of n)u&&(u[e]=o,a=!0,s=!0),t.attributeOverrides.updateValue(i,c,o)})),a&&t.setAttributeData(r,i,null)})),s&&t.clearMemCache()}function u(t,e,n){const r=function c(t,e){const n=t.get(e);if(n)return n;const r=new l;return t.set(e,r),r}(t,e),o=r.get(n);if(o)return o;const s=new Array;return r.set(n,s),s}const l=Map,d=Map},97614:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>p});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(56140),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__(95830),__webpack_require__(36544)),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(71063)),_i3s_I3SUtil_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(83057);const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.Z.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),p=e=>{let p=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=r=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.error("Error while evaluating definitionExpression: "+r),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const r=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_8__.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!r.isStandardized)return t.error("definitionExpression is using non standard function"),null;const e=[],i=r.fieldNames;return(0,_i3s_I3SUtil_js__WEBPACK_IMPORTED_MODULE_9__.e8)(i,this.i3slayer.fields,{missingFields:e}),e.length>0?(t.error(`definitionExpression references unknown fields: ${e.join(", ")}`),null):(this._definitionExpressionErrors=0,r)}catch(r){return t.error("Failed to parse definitionExpression: "+r),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null}_evaluateClause(r,e){try{return r.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(r){if(!this.parsedDefinitionExpression)return r;const e=this.i3slayer.definitionExpression,i=r.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],p.prototype,"i3slayer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"parsedDefinitionExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"definitionExpressionFields",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],p),p}},71677:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>c});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(56140),_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__=(__webpack_require__(95830),__webpack_require__(59472)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881),__webpack_require__(87566)),_core_Error_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32656),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(4665)),_layers_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(21707);const c=c=>{let u=class extends c{_validateFetchPopupFeatures(e){const{layer:r}=this,{popupEnabled:s}=r;return s?(0,_layers_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__.V)(r,e)?void 0:new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:r}):new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:r})}async prepareFetchPopupFeatures(e){}async fetchPopupFeatures(e,s){const t=this._validateFetchPopupFeatures(s);if(t)return Promise.reject(t);const c=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__.pC)(s)?s.clientGraphics:null;if(!c||0===c.length)return Promise.resolve([]);const u=[],l=[],n="scene"===this.layer.type&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__.pC)(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,h=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__.Lk)(this.layer.fields,await(0,_layers_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__.e)(n,(0,_layers_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__.V)(this.layer,s)));await this.prepareFetchPopupFeatures(h);const m=new Set;for(const r of c)(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__.Gm)(h,r,m)?l.push(r):u.push(r);return 0===l.length?Promise.resolve(u):this.whenGraphicAttributes(l,[...m]).catch((()=>l)).then((e=>u.concat(e)))}};return u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.3d.layers.support.PopupSceneLayerView")],u),u}},62824:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>SceneLayerViewRequiredFields_c});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),Logger=__webpack_require__(36544),property=(__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),fieldUtils=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(4665)),tracking=__webpack_require__(59415),SimpleTrackingTarget=__webpack_require__(12906),Accessor=__webpack_require__(82677);const c=a=>{let r=class extends a{constructor(){super(...arguments),this.asyncUpdateState=new Map}autoUpdateAsync(t,s){return function o(t,s){const e=()=>{o&&!p&&t(n)},n=()=>{if(!o||p)return s();o.clear(),p=!0;const t=(0,tracking.LJ)(o,s);return p=!1,t},c=()=>{o&&(o.destroy(),o=null)};let o=new SimpleTrackingTarget.M(e),p=!1;return t(n),{remove:c}}((s=>this.updateAsync(t,s)),s)}async updateAsync(t,e){if(!this.startAsyncUpdate(t)){try{const s=await e();this._set(t,s)}catch(a){Logger.Z.getLogger(this.declaredClass).warn(`Async update of "${t}" failed. Async update functions should not throw exceptions.`)}this.endAsyncUpdate(t)&&this.updateAsync(t,e)}}startAsyncUpdate(t){var s;const e=null!=(s=this.asyncUpdateState.get(t))?s:0;return 1&e?(this.asyncUpdateState.set(t,2|e),!0):(this.asyncUpdateState.set(t,1|e),!1)}endAsyncUpdate(t){var s;const e=-2&(null!=(s=this.asyncUpdateState.get(t))?s:0);return 2&e?(this.asyncUpdateState.set(t,-3&e),!0):(this.asyncUpdateState.set(t,e),!1)}};return r=(0,tslib_es6._)([(0,subclass.j)("esri.core.AsyncUpdate")],r),r};let p=class extends(c(Accessor.Z)){};p=(0,tslib_es6._)([(0,subclass.j)("esri.core.AsyncUpdate")],p);var HandleOwner=__webpack_require__(77204);const n=Logger.Z.getLogger("esri.views.3d.layers.support.SceneLayerViewRequiredFields");let SceneLayerViewRequiredFields_c=class extends(c(HandleOwner.r)){constructor(e){super(e)}get requiredFields(){const{layerView:{layer:{fields:e},definitionExpressionFields:s},rendererFields:t,labelingFields:i,viewFilterFields:l}=this;return(0,fieldUtils.Q0)(e,[...(0,maybe.Pt)(s,[]),...(0,maybe.Pt)(t,[]),...(0,maybe.Pt)(i,[]),...(0,maybe.Pt)(l,[])])}initialize(){const e=this.layerView.layer;this.layer=e,this.handles.add([this.autoUpdateAsync("rendererFields",(()=>{const{fields:e,renderer:r}=this.layer;return r?u((s=>r.collectRequiredFields(s,e))):null})),this.autoUpdateAsync("labelingFields",(()=>{const{layer:e}=this;return e.labelsVisible?u((r=>(0,fieldUtils.Mu)(r,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:r}=this.layerView;return u((s=>(0,fieldUtils.Ll)(s,e,r)))}))])}};async function u(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(s){return n.error(s),null}}(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"layerView",void 0),(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"layer",void 0),(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"requiredFields",null),(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"rendererFields",void 0),(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"labelingFields",void 0),(0,tslib_es6._)([(0,property.Cb)()],SceneLayerViewRequiredFields_c.prototype,"viewFilterFields",void 0),SceneLayerViewRequiredFields_c=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],SceneLayerViewRequiredFields_c)},5526:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>i});var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4665);function i(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:i,layer:{fields:t},requiredFields:l}=this;return i.outFields?(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.Q0)(t,[...(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.Lk)(t,i.outFields),...l]):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.Q0)(t,l)}}}}},28835:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(56140),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_LayerView_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(84300),__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(48164));class o extends _LayerView_js__WEBPACK_IMPORTED_MODULE_8__.Z{constructor(){super(...arguments),this.layer=null,this.filter=null}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],o.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],o.prototype,"availableFields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],o.prototype,"maximumNumberOfFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],o.prototype,"filter",void 0);const __WEBPACK_DEFAULT_EXPORT__=o},21707:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>d,e:()=>i});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59472),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4665);async function i(i,d=i.popupTemplate){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(d))return[];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return["*"];const r=s?await(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.CH)(i):[],m=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.Q0)(i.fields,[...o,...r]);return a&&m.push(a),m&&u&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,p)&&-1===m.indexOf(p)&&m.push(p)})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(l)&&l.defaultPopupTemplateEnabled&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=3799.8dc81a49.iframe.bundle.js.map