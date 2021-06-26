(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[9610],{4688:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _maybe_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59472);const __WEBPACK_DEFAULT_EXPORT__=class s{constructor(t=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const i of this._buffer)if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.pC)(i)&&s(i))return i;return null}clear(s){let i=this.dequeue();for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.pC)(i);)s&&s(i),i=this.dequeue()}}},22127:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>l,g:()=>n});const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1},81129:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(56140),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(77204));let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_8__.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],i.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],i.prototype,"layerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],i.prototype,"tileInfoView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],i.prototype,"updating",null),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);const __WEBPACK_DEFAULT_EXPORT__=i},55938:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>SymbolTileRenderer});var tslib_es6=__webpack_require__(56140),subclass=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881),__webpack_require__(87566)),aaBoundingRect=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(50897)),visualVariablesUtils=__webpack_require__(5358),rendererUtils=__webpack_require__(80717),maybe=__webpack_require__(59472),CircularArray=__webpack_require__(4688),vec2=__webpack_require__(14286),mat2d=__webpack_require__(42738),mat2df32=__webpack_require__(87561),vec2f32=__webpack_require__(27851),enums=__webpack_require__(31514),Utils=__webpack_require__(83302),WGLTile=__webpack_require__(7544);const r=4294967296;class o{constructor(t){this._head=t,this._cursor=t}static from(t){const s=i.from(new Float32Array(t));return new o(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get hasVV(){return this._cursor.hasVV}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsCenterX(t){return this._cursor.boundsCenterX(t)}boundsCenterY(t){return this._cursor.boundsCenterY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if((0,maybe.pC)(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&(0,maybe.pC)(r)&&(r._link=e._link),!0;r=e,e=e._link}return!1}}class i{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new i(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get hasVV(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+6*t+0]=s}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+6*t+1]=s}boundsCenterX(t){return this._buffer[this._offset+10+6*t+2]}boundsCenterY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t}getCursor(){return this.copy()}copy(){const t=new i(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t){const e=this._offset;if((0,maybe.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}class Geometry_e{constructor(e,s){this._buffers=[],this.geometryType=e,this._stage=s}destroy(){this._buffers.forEach((e=>e.release()))}insert(e,s){if(!s.records.byteLength)return;"update"===e&&this._buffers.forEach((e=>e.free(s)));const r={done:!1,offset:0,vertexData:s};this._buffers.forEach((e=>e.insert(r)));let t=1e3;for(;!r.done&&--t;){const e=this._stage.pools.bufferData.acquire(s,this.geometryType,r.offset);e.insert(r),this._buffers.push(e)}}remove(e){this._buffers.forEach((s=>s.freeIds(e)))}upload(e){this._buffers.forEach((s=>s.upload(e)))}forEachCommand(e){this._buffers.forEach((s=>s.displayList.forEach(e)))}}let w=0;class g extends WGLTile.o{constructor(e,t,r){super(e,t),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new CircularArray.Z(100),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=(0,mat2df32.c)(),this._store=r}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()))}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),o=(0,vec2f32.c)();(0,vec2.t)(o,this.coords,s),(0,mat2d.i)(r),(0,mat2d.t)(r,r,o),(0,mat2d.m)(r,e.viewMat2d,r)}patch(e){this.patchCount++,e.clear&&this._lastMessageWasClear||(this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=50&&this._dropPatches(),this._patches.enqueue(e),this.requestRender())}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<4;e++)this._updateMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=8,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,(0,maybe.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null))}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap()}_updateMesh(){const t=this._patches.peek();if((0,maybe.pC)(t)&&t.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if((0,maybe.pC)(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates())}}_patch(e){(0,Utils.Z_)((t=>{this._remove(t,e.remove),this._insert(e.type,t,e.addOrUpdate,e.clear)}))}_insert(e,s,i,a){try{const n=(0,maybe.Pt)(this._renderState.next,this._renderState.current),h=null==i?void 0:i.data[s],o=n.geometry;if((0,maybe.Wi)(h))return;o.has(s)||o.set(s,new Geometry_e(s,this.stage)),o.get(s).insert(e,h),s===enums.LW.LABEL&&this._insertLabelMetrics(e,h.metrics,a)}catch(n){}}_insertLabelMetrics(e,s,i){const a=(0,maybe.Pt)(this._renderState.next,this._renderState.current);if((0,maybe.Wi)(s))return;const n=o.from(s);if((0,maybe.Wi)(a.metrics))a.metrics=n;else{if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id)}a.metrics.link(n)}}_remove(e,r){const s=(0,maybe.Pt)(this._renderState.next,this._renderState.current).geometry.get(e);r&&r.length&&s&&(s.remove(r),this._removeLabelMetrics(r))}_removeLabelMetrics(e){const{metrics:s}=(0,maybe.Pt)(this._renderState.next,this._renderState.current);if(!(0,maybe.Wi)(s)&&e.length)for(const t of e)for(;s.delete(t););}_dropPatches(){const e=new Array;let t=!1;for(;this._patches.size;){const s=this._patches.dequeue();if((0,maybe.Wi)(s))break;if(s.clear){if(t)break;t=!0}e.push(s)}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)))}}var BaseTileRenderer=__webpack_require__(81129),promiseUtils=__webpack_require__(39105),brushes=__webpack_require__(32825),FeatureContainer=__webpack_require__(41571);class a extends FeatureContainer.T{constructor(e,s,t){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s}renderChildren(e){this.attributeView.update(),this.hasAnimation&&e.painter.effects.integrate.draw(e,e.attributeView),super.renderChildren(e)}hitTest(s,t){const i=[s,t],a=(0,promiseUtils.hh)();return this._pointToCallbacks.set(i,a),this.requestRender(),a.promise}onTileData(e,s){e.patch(s),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){this.contains(e)||this.addChild(e)}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate()}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const i=e.registerRenderPass({name:"label",brushes:[brushes.U.label],target:()=>this.hasLabels?this.children:null,drawPhase:enums.jx.LABEL|enums.jx.LABEL_ALPHA}),a=e.registerRenderPass({name:"geometry",brushes:[brushes.U.fill,brushes.U.line,brushes.U.marker,brushes.U.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[brushes.U.fill,brushes.U.line,brushes.U.marker,brushes.U.text],target:()=>this.children,drawPhase:enums.jx.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),a,r,i]}}let SymbolTileRenderer_u=class extends BaseTileRenderer.Z{install(e){const t=new a(this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const r=((0,rendererUtils.a)(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=(0,visualVariablesUtils.I)(r)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(e){const t=this.tileInfoView.getTileBounds((0,aaBoundingRect.Ue)(),e);return new g(e,t,this.featuresView.attributeView)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};SymbolTileRenderer_u=(0,tslib_es6._)([(0,subclass.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],SymbolTileRenderer_u);const SymbolTileRenderer=SymbolTileRenderer_u},5358:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>m,qc:()=>r});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(59472),_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(96071),_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71286),_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(31514),_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51482),_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(50682);function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function u(e){return e.map((e=>function a(e){return{value:e.value,size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.t_)(e.size)}}(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.t_)(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}const f=e=>{const t=[],o=[],i=u(e),l=i.length;for(let r=0;r<6;r++){const e=i[Math.min(r,l-1)];t.push(e.value),o.push(null==e.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_0__.AI:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.F2)(e.size))}return{values:new Float32Array(t),sizes:new Float32Array(o)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch((0,_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_3__.a)(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.X.SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.X.SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.X.SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.X.SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.Wi)(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)(0,_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_2__.pr)(s.colors,e,!0);return s}}}]);
//# sourceMappingURL=9610.0d7a45f3.iframe.bundle.js.map