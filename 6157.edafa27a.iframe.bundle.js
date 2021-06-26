(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[6157],{65437:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Graphics3DElevationAlignment});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),property=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),Accessor=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(82677)),Evented=__webpack_require__(35470),Handles=__webpack_require__(59691),Scheduler=__webpack_require__(35430),PooledArray=__webpack_require__(62698),aaBoundingRect=__webpack_require__(50897);class c{constructor(){this.extents=new PooledArray.Z({allocator:t=>t||(0,aaBoundingRect.Ue)()}),this.tempExtent=(0,aaBoundingRect.Ue)(),this.dirty=!1}get empty(){return 0===this.extents.length}clear(){this.extents.clear()}add(t){this.contains(t)||(this.removeContained(t),(0,aaBoundingRect.t8)(this.extents.pushNew(),t),this.dirty=!0)}pop(){return this.dirty&&this.mergeTight(),this.extents.pop()}merge(t){return this.mergeTight(t),t.hasProgressed}mergeTight(t=Scheduler.G5){const e=this.extents,o=new Set;let i=0;for(;i!==e.length;){e.sort(((t,e)=>t[0]-e[0])),i=e.length,o.clear();for(let i=0;i<e.length;++i){if(t.done)return;const h=e.getItemAt(i);for(let t=i+1;t<e.length;++t){const r=e.getItemAt(t);if(r[0]>=h[2])break;o.add(r)}o.forEach((i=>{if(h===i)return;if(i[2]<=h[0])return void o.delete(i);const c=(0,aaBoundingRect.SO)(h),m=(0,aaBoundingRect.SO)(i),d=this.tempExtent;(0,aaBoundingRect.jn)(h,i,d);const g=c+m;((0,aaBoundingRect.SO)(d)-g)/g<.05&&((0,aaBoundingRect.t8)(h,d),o.delete(i),e.remove(i),t.madeProgress())})),o.add(h)}}this.dirty=!1}contains(t){return this.extents.some((e=>(0,aaBoundingRect.r3)(e,t)))}removeContained(t){this.extents.filterInPlace((e=>!(0,aaBoundingRect.r3)(t,e)))}get test(){const t=this;return{containsPoint:e=>t.extents.some((t=>(0,aaBoundingRect.BD)(t,e)))}}}let p=class extends Accessor.Z{constructor(){super(...arguments),this.dirtyExtents=new c,this.globalDirty=!1,this.dirtyGraphicsSet=new Set,this.handles=new Handles.Z,this.updateElevation=!1,this.layerView=null,this.graphicsCore=null,this.events=new Evented.Z}get updating(){return this.needsUpdate()}setup(e,t,i,s){this.layerView=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=s;const r=this.layerView.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",(e=>this._elevationChanged(e))),this.layerView.watch("suspended",(()=>this.suspendedChange())),r.registerTask(Scheduler.iQ.ELEVATION_ALIGNMENT,(e=>this.update(e)),(()=>this.needsUpdate()))])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.layerView=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}suspendedChange(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}needsUpdate(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}update(e){for(this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run((()=>this.dirtyExtents.merge(e)));this.needsUpdate()&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.layerView.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(e){const i=this.layerView.view.renderCoordsHelper,s=this.graphicsCore.asyncUpdates;for(const r of this.dirtyGraphicsSet.keys()){const a=this.graphicsCore.getGraphics3DGraphicById(r);if(this.dirtyGraphicsSet.delete(r),(0,maybe.pC)(a)&&(a.alignWithElevation(this.elevationProvider,i,s),e.madeProgress()),e.done)return}}_updateDirtyExtents(e){for(;!this.dirtyExtents.empty&&!e.done;){const i=this.dirtyExtents.pop(),s=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:i,spatialReference:s}),this.queryGraphicUIDsInExtent(i,s,(e=>{const i=this.graphicsCore.getGraphics3DGraphicById(e);(0,maybe.pC)(i)&&i.needsElevationUpdates()&&this.dirtyGraphicsSet.add(e)})),e.madeProgress()}}markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach(((e,t)=>this.dirtyGraphicsSet.add(t)))}_elevationChanged(e){if("scene"===e.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const{extent:t,spatialReference:i}=e;if(this.layerView.suspended){if(!this.updateElevation){const e=this.graphicsCore.computedExtent;e&&t[2]>e.xmin&&t[0]<e.xmax&&t[3]>e.ymin&&t[1]<e.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],p.prototype,"updating",null),p=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],p);const Graphics3DElevationAlignment=p},16157:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Graphics3DFeatureLikeLayerView});var tslib_es6=__webpack_require__(56140),compilerUtils=(__webpack_require__(95830),__webpack_require__(94588)),Logger=__webpack_require__(36544),property=(__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),promiseUtils=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(39105)),Accessor=__webpack_require__(82677),webMercatorUtils=__webpack_require__(41241),Graphic=__webpack_require__(15988),Handles=__webpack_require__(59691),watchUtils=__webpack_require__(80621),diffUtils=__webpack_require__(23229),Query=__webpack_require__(31518),WatchUpdatingTracking=__webpack_require__(45671),graphicUtils=__webpack_require__(74218),constants=__webpack_require__(93293),Graphics3DCore=__webpack_require__(56656),Graphics3DScaleVisibility=__webpack_require__(16861),attributeUtils=__webpack_require__(80969),Graphics3DElevationAlignment=__webpack_require__(65437),maybe=__webpack_require__(59472),Scheduler=__webpack_require__(35430),FeatureFilter=__webpack_require__(44119),QueryEngine=__webpack_require__(86594),floorFilterUtils=__webpack_require__(85686);const y=Logger.Z.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility");let _=class extends Accessor.Z{constructor(...e){super(...e),this.filter=null,this._dirty=!1,this._querying=!1,this._handles=new Handles.Z}get updating(){return this._dirty||this._querying||null!=this._queryResult}setup(e,t){this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new QueryEngine.Z({layerView:this._layerView,task:Scheduler.iQ.FILTER_VISIBILITY});const i=this._layerView.view.resourceController.scheduler;this._handles.add(i.registerTask(Scheduler.iQ.FILTER_VISIBILITY,(e=>this._update(e)),(()=>this._needsUpdate()))),this._handles.add((0,watchUtils.on)(t.owner,"loadedGraphics","after-changes",(e=>this._graphicsChanged(e)),(()=>this.dirty=!0))),this.filterChanged()}destroy(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null}clear(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities((e=>e.clearVisibilityFlag(2))),this._queryResult=null,this._querying=!1),this.dirty=!1,this.notifyChange("updating")}_graphicsChanged(e){this._queryEngine&&0==(1&e.type)||(this.dirty=!0)}updateVisibility(e){this.active&&(e.hasVisibilityFlag(2,0)||e.setVisibilityFlag(2,!1,0),this.dirty=!0)}filterChanged(){const e=this.recomputeFilter();e!==this.filter&&(this.filter=e,this.dirty=!0)}get active(){return this.filter&&this._core.graphics3DGraphics.size>0}recomputeFilter(){const e="filter"in this._layerView?this._layerView.filter:null,r="timeExtent"in this._layerView?this._layerView.timeExtent:null,s=(0,floorFilterUtils.c)(this._layerView);if((0,maybe.Wi)(r)&&(0,maybe.Wi)(s))return e;const h=(0,maybe.pC)(e)?e.clone():new FeatureFilter.Z;if((0,maybe.pC)(r)&&(h.timeExtent=(0,maybe.pC)(h.timeExtent)?h.timeExtent.intersection(r):r),(0,maybe.pC)(s)){const e=null==h.where||""===h.where;h.where=e?s:`(${h.where}) AND (${s})`}return h}_needsUpdate(){return this._dirty&&!this._querying||null!=this._queryResult}_update(e){this.active?(!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this.filter).then((e=>{this._queryResult=e,this._querying=!1})).catch((e=>{(0,promiseUtils.D_)(e)||(y.warn("FeatureFilter query failed: "+e,{error:e}),this._queryResult=new Set,this._core.graphics3DGraphics.forEach((e=>this._queryResult.add(this._getFeatureId(e.graphic)))),this._querying=!1)})),e.madeProgress()),this._queryResult&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities((t=>{if(e.done)return!1;const i=this._queryResult.has(this._getFeatureId(t.graphic));return!!t.setVisibilityFlag(2,i,0)&&(e.madeProgress(),!0)})),e.done||(this._queryResult=null)),this.notifyChange("updating")):this.clear()}_getFeatureId(e){return null==e.objectId?e.attributes[this._objectIdField]:e.objectId}set dirty(e){this._dirty!==e&&(this._dirty=e,this.notifyChange("updating"))}};(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],_.prototype,"updating",null),_=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],_);var Graphics3DFrustumVisibility=__webpack_require__(84208),Graphics3DObjectStates=__webpack_require__(36871);let V=class extends Accessor.Z{constructor(t){super(t),this._handles=new Handles.Z,this.watchUpdatingTracking=new WatchUpdatingTracking.t,this.suspendResumeExtentMode="computed",this.dataExtent=null,this.suspendResumeExtent=null}get suspended(){var t;return null==(t=this.scaleVisibility)?void 0:t.suspended}get suspendInfo(){var t,e;const i={};return null!=(t=this.scaleVisibility)&&t.suspended&&(i.outsideScaleRange=!0),null!=(e=this.frustumVisibility)&&e.suspended&&(i.outsideOfView=!0),i}get updating(){var t,e,i;return!!(null!=(t=this.graphicsCore)&&t.updating||null!=(e=this.frustumVisibility)&&e.updating||null!=(i=this.watchUpdatingTracking)&&i.updating)}normalizeCtorArgs(t){const e=t.frustumVisibilityEnabled?new Graphics3DFrustumVisibility.Z:null,i=t.scaleVisibilityEnabled?new Graphics3DScaleVisibility.Z:null,s=(t.filterVisibilityEnabled||t.timeExtentVisibilityEnabled)&&"multipatch"!==t.layer.geometryType?new _:null,r=t.elevationAlignmentEnabled?new Graphics3DElevationAlignment.Z:null,n=new Graphics3DCore.w({owner:t.owner,layer:t.layer,preferredUpdatePolicy:t.preferredUpdatePolicy,elevationFeatureExpressionEnabled:t.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:t.owner.hasZ,hasM:t.owner.hasM}),{updateClippingExtent:a,suspendResumeExtentMode:o,dataExtent:l}=t;return{graphicsCore:n,frustumVisibility:e,scaleVisibility:i,filterVisibility:s,elevationAlignment:r,updateClippingExtent:a,suspendResumeExtentMode:o,dataExtent:l}}initialize(){this.scaleVisibility&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(()=>this.scaleVisibility.layerMinMaxScaleChangeHandler())),this.filterVisibility&&(this.watchUpdatingTracking.add(this.owner,"filter",(()=>this.filterVisibility.filterChanged())),this.watchUpdatingTracking.add(this.owner,"timeExtent",(()=>this.filterVisibility.filterChanged()))),this.elevationAlignment&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",((t,e)=>{(0,diffUtils.Hg)(t,e)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})),this.watchUpdatingTracking.add(this.layer,"labelsVisible",(()=>this.graphicsCore.updateVisibilityInfo())),this.watchUpdatingTracking.add(this.layer,"labelingInfo",((t,e)=>{(0,diffUtils.Hg)(t,e)&&this.graphicsCore.updateLabelingInfo()}))}async setup(){this.frustumVisibility&&this.frustumVisibility.setup(this.owner);const t=this.owner,e=this.owner.view.basemapTerrain,i=(t,e,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i);if(this.scaleVisibility&&this.scaleVisibility.setup(t,this.layer,i,this.graphicsCore,e),this.filterVisibility&&("filter"in t||"timeExtent"in t)&&this.filterVisibility.setup(t,this.graphicsCore),this.elevationAlignment){const e=t.view.elevationProvider;this.elevationAlignment.setup(t,i,this.graphicsCore,e)}this._set("objectStates",new Graphics3DObjectStates.d(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",t.view.deconflictor.addGraphicsOwner(this.graphicsCore)),await(0,promiseUtils.U3)(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates})),this.watchUpdatingTracking.add(this.layer,"renderer",(t=>this.watchUpdatingTracking.addPromise(this.graphicsCore.rendererChange(t)))),this.watchUpdatingTracking.add(t,"fullOpacity",(()=>this.graphicsCore.opacityChange())),this.setupSuspendResumeExtent(),this.updateClippingExtent&&(this.watchUpdatingTracking.add(t.view,"clippingArea",(()=>this._updateClippingExtent())),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&await(0,promiseUtils.U3)(this.graphicsCore.updateLabelingInfo())}destroy(){this._handles&&(this._handles.destroy(),this._handles=null);const t=["watchUpdatingTracking","frustumVisibility","scaleVisibility","filterVisibility","elevationAlignment","objectStates","graphicsCore"];for(const e of t){const t=this[e];t&&(t.destroy(),this._set(e,null))}this._set("layer",null),this._set("owner",null)}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(e,t.uid),i}highlight(t,e){if(t instanceof Query.Z){const{set:i,handle:s}=this.objectStates.acquireSet(0,e);return this.owner.queryObjectIds(t).then((t=>this.objectStates.setObjectIds(i,t))),s}if("number"==typeof t||"string"==typeof t)return this.highlight([t],e);if(t instanceof Graphic.Z)return this.highlight([t],e);if("toArray"in t&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof Graphic.Z){const i=t;if(null==(0,attributeUtils.g)(this.layer.fieldsIndex,i[0].attributes,e)){const t=i.map((t=>t.uid)),{set:e,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(e,t),s}t=i.map((t=>(0,attributeUtils.g)(this.layer.fieldsIndex,t.attributes,e)))}if("number"==typeof t[0]||"string"==typeof t[0]){const i=t,{set:s,handle:r}=this.objectStates.acquireSet(0,e);return this.objectStates.setObjectIds(s,i),r}}return S}_updateClippingExtent(){const t=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.owner.view.spatialReference)&&(this.updateClippingExtent(t)||this.graphicsCore.recreateAllGraphics())}setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this._handles.add((0,watchUtils.S1)(this,"suspendResumeExtentMode",(()=>{switch(this._handles.remove(j),this.suspendResumeExtentMode){case"computed":this._handles.add([(0,watchUtils.S1)(this.graphicsCore,"computedExtent",(t=>this.updateSuspendResumeExtent(t))),this.graphicsCore.watch("extentPadding",(()=>this.updateSuspendResumeExtent(this.graphicsCore.computedExtent)))],j);break;case"data":this._handles.add([(0,watchUtils.S1)(this,"dataExtent",(t=>this.updateSuspendResumeExtent(t))),this.graphicsCore.watch("extentPadding",(()=>this.updateSuspendResumeExtent(this.dataExtent)))],j);break;default:(0,compilerUtils.Bg)(this.suspendResumeExtentMode)}})))}updateSuspendResumeExtent(t){t?this.suspendResumeExtentChanged(this.extentToSuspendResumeRect(t,this.suspendResumeExtent)):this.suspendResumeExtentChanged(null)}extentToSuspendResumeRect(t,e){const i=this.owner.view.spatialReference;if(!t.spatialReference.equals(i)){if(!(0,webMercatorUtils.Q8)(t,i))return;t=(0,webMercatorUtils.iV)(t,i)}return(0,graphicUtils.Go)(t,e,constants.ZF,this.graphicsCore.extentPadding)}suspendResumeExtentChanged(t){this.frustumVisibility&&this.frustumVisibility.setExtent(t),this.scaleVisibility&&this.scaleVisibility.setExtent(t)}};(0,tslib_es6._)([(0,property.Cb)({aliasOf:"graphicsCore.layer"})],V.prototype,"layer",void 0),(0,tslib_es6._)([(0,property.Cb)({aliasOf:"graphicsCore.owner"})],V.prototype,"owner",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"updateClippingExtent",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"graphicsCore",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"scaleVisibility",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"filterVisibility",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"elevationAlignment",void 0),(0,tslib_es6._)([(0,property.Cb)({constructOnly:!0})],V.prototype,"frustumVisibility",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"deconfliction",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"labeling",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"objectStates",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"watchUpdatingTracking",void 0),(0,tslib_es6._)([(0,property.Cb)()],V.prototype,"suspendResumeExtentMode",void 0),(0,tslib_es6._)([(0,property.Cb)()],V.prototype,"dataExtent",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"suspended",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],V.prototype,"suspendInfo",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,dependsOn:["graphicsCore.updating","frustumVisibility.updating","watchUpdatingTracking.updating"]})],V.prototype,"updating",null),V=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView")],V);const j="suspendResumeExtentMode",S={remove(){},pause(){},resume(){}},Graphics3DFeatureLikeLayerView=V},84208:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(56140),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_Accessor_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(82677)),_core_Handles_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(59691),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(80621),_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(89333),_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(35430),_support_FrustumExtentIntersection_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1372);let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_8__.Z{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_9__.Z,this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new _support_FrustumExtentIntersection_js__WEBPACK_IMPORTED_MODULE_13__.q({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,s=t.basemapTerrain,i=t.resourceController.scheduler;this.handles.add([t.on("resize",(()=>this.viewChange())),t.state.watch("camera",(()=>this.viewChange()),!0),i.registerTask(_support_Scheduler_js__WEBPACK_IMPORTED_MODULE_12__.iQ.FRUSTUM_VISIBILITY,(()=>this.update()),(()=>this.updating)),s.on("elevation-bounds-change",(()=>this.elevationBoundsChange()))]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__.S1)(s,["opacity","wireframe"],(()=>this.updateIsVisibleBelowSurface())),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__.S1)(t,"map.ground.navigationConstraint.type",(()=>this.updateIsVisibleBelowSurface()))])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,s="local"===e.viewingMode,i=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=s||!t.opaque||i}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_11__.Iu)(e.spatialReference).radius;else{const{min:s,max:i}=e.basemapTerrain.elevationBounds;t=s-Math.max(1,(i-s)*(1.2-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}update(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_11__.Iu)(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],u.prototype,"suspended",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],u.prototype,"updating",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],u);const __WEBPACK_DEFAULT_EXPORT__=u},36871:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>s});var handleUtils=__webpack_require__(5632);class Object3DStateSet_e{constructor(){this.items=[]}addObject(e,t){this.items.push({type:0,objectStateId:t,object:e})}addRenderGeometry(e,t,s){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:s})}addExternal(e,t){this.items.push({type:2,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];s.objectStateId===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];0===s.type&&s.object===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];1===s.type&&s.renderGeometry===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeAll(){this.items.forEach((e=>{this._removeObjectStateItem(e)})),this.items=[]}_removeObjectStateItem(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}class e{constructor(e,i){this.stateType=e,this.objectIdField=i,this.objectStateSet=new Object3DStateSet_e,this.ids=new Set,this.paused=!1}hasGraphic(t){if(this.objectIdField){const e=t.graphic.attributes[this.objectIdField];return this.ids.has(e)}return this.ids.has(t.graphic.uid)}}class s{constructor(t){this._graphicsCore=t,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll())),this._stateSets=null}acquireSet(s,a){const i=new e(s,a);this._stateSets.push(i);const h=(0,handleUtils.kB)((()=>this.releaseSet(i)));return{set:i,handle:h}}releaseSet(t){t.objectStateSet.removeAll();const e=this._stateSets?this._stateSets.indexOf(t):-1;-1!==e&&this._stateSets.splice(e,1)}_addObjectStateSet(t,e){t.addObjectStateSet(e.stateType,e.objectStateSet)}_removeObjectStateSet(t,e){t.removeObjectState(e.objectStateSet)}setUid(t,e){t.ids.add(e);const s=this._graphicsCore.graphics3DGraphics.get(e);s&&this._addObjectStateSet(s,t)}setUids(t,e){e.forEach((e=>this.setUid(t,e)))}setObjectIds(t,e){e.forEach((e=>t.ids.add(e))),this.initializeSet(t)}addGraphic(t){this._stateSets.forEach((e=>{!e.paused&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)}))}removeGraphic(t){this._stateSets.forEach((e=>{e.hasGraphic(t)&&this._removeObjectStateSet(t,e)}))}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll()))}initializeSet(t){const e=this._graphicsCore.graphics3DGraphics;t.objectIdField?e.forEach((e=>{e&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)})):t.ids.forEach((s=>{const a=e.get(s);a&&this._addObjectStateSet(a,t)}))}get test(){return{states:this._stateSets}}}},86594:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(56140),_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__(95830),__webpack_require__(59472)),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_Accessor_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(82677)),_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(52937),_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(6635),_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__(36348),__webpack_require__(76194)),_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(31518);const c=__webpack_require__(21895).Z;let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_8__.Z{constructor(e){super(e),this._dataQueryEngineInstance=null}get queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_13__.Z({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this.ensureDataQueryEngine()}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}async executeQueryForIdSet(e,r){return this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e),r)}async executeQueryForCount(e,r){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:t,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:t,extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__.Z.fromJSON(s)}}async executeQueryForIds(e,r){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQueryForLatestObservations(e,r){const t=await this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),r),s=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(t);return s.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),s}async executeQuery(e,r){const t=await this.dataQueryEngine.executeQuery(this._ensureQueryJSON(e),r),s=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__.default.fromJSON(t);return s.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),s}_ensureQueryJSON(e){return(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_15__.Wi)(e)?this.defaultQueryJSON:("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),e.toJSON())}ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,r=this.layer.objectIdField,t=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_10__.Mk.toJSON(this.queryGeometryType),s=this.layer.fields.map((e=>e.toJSON())),a=this.layerView.view.resourceController.scheduler,o=this.task,i=this.spatialReference.toJSON(),u=this.layerView.graphics3d.graphicsCore.featureStore,{hasZ:y,hasM:l}=this.layerView;return this._dataQueryEngineInstance=new c({hasZ:y,hasM:l,geometryType:t,fields:s,timeInfo:e,spatialReference:i,objectIdField:r,featureStore:u,scheduler:a,task:o}),this._dataQueryEngineInstance}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({constructOnly:!0})],l.prototype,"layerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({constructOnly:!0})],l.prototype,"task",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],l.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0,aliasOf:"layerView.layer"})],l.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],l.prototype,"queryGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],l.prototype,"defaultQueryJSON",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.3d.layers.graphics.QueryEngine")],l);const __WEBPACK_DEFAULT_EXPORT__=l},80969:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,t,e){if(!e||null==t)return null;if(!n)return function r(n,r){const t=r.toLowerCase();for(const e in n)if(e.toLowerCase()===t)return n[e];return null}(t,e);const o=n.get(e);return o?t[o.name]:null}__webpack_require__.d(__webpack_exports__,{g:()=>n})},85686:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function o(o){const n=o.layer;if("floorInfo"in n&&n.floorInfo){const r=o.view.floors;if(!r||!r.length)return null;const l=r.filter((o=>""!==o)).map((o=>`'${o}'`));l.push("''");const f=n.floorInfo.floorField;return`${f} IN (${l.join(", ")}) OR ${f} IS NULL`}return null}__webpack_require__.d(__webpack_exports__,{c:()=>o})},44119:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var d,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(56140),_core_lang_js__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__(95830),__webpack_require__(82550)),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(56274),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87566),_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(60538),_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(58385)),_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(56885),_geometry_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(36348),_TimeExtent_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(87864),_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(31518);const m=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_15__.Xn({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_15__.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let h=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__.wq{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1}writeWhere(e,t){t.where=e||"1=1"}enable(){this._set("enabled",!0)}createQuery(e={}){const{where:r,geometry:i,spatialRelationship:s,timeExtent:o,objectIds:n,units:a,distance:p}=this;return new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_14__.Z({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(i),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(n),spatialRelationship:s,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(o),where:r,units:a,distance:p,...e})}clone(){const{where:e,geometry:r,spatialRelationship:i,hiddenIds:s,timeExtent:o,objectIds:n,units:a,distance:p}=this,l=new Set;return s.forEach((e=>l.add(e))),new d({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(r),hiddenIds:l,objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(n),spatialRelationship:i,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.d9)(o),where:e,units:a,distance:p})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:String})],h.prototype,"where",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.c)("where")],h.prototype,"writeWhere",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_12__.qM,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__.im,write:!0}})],h.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],h.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({json:{write:(e,t,r)=>t[r]=Array.from(e),read:e=>new Set(e)}})],h.prototype,"hiddenIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],h.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:String,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],h.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_13__.Z,json:{write:!0}})],h.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.Cb)({readOnly:!0})],h.prototype,"enabled",void 0),h=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.j)("esri.views.layers.support.FeatureFilter")],h);const __WEBPACK_DEFAULT_EXPORT__=h}}]);
//# sourceMappingURL=6157.edafa27a.iframe.bundle.js.map