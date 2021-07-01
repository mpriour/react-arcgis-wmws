(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[9677],{4688:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _maybe_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59472);const __WEBPACK_DEFAULT_EXPORT__=class s{constructor(t=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(s){if(0===this.size)return null;for(const i of this._buffer)if((0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.pC)(i)&&s(i))return i;return null}clear(s){let i=this.dequeue();for(;(0,_maybe_js__WEBPACK_IMPORTED_MODULE_0__.pC)(i);)s&&s(i),i=this.dequeue()}}},84653:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59472),_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33655),_core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4688);const d="__esri_timestamp__";const __WEBPACK_DEFAULT_EXPORT__=class h{constructor(t,e,s,i,r=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=i,this.store=t,this.objectIdField=e,this.purgeInterval=r,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}add(s){if(this._useGeneratedIds){const t=this._nextId();s.attributes[this.objectIdField]=t,s.objectId=t}else s.objectId=s.attributes[this.objectIdField];if(this._addOrUpdated.set(s.objectId,s),this._maxAge=Math.max(this._maxAge,s.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.Wi)(this._trackIdLessObservations)&&(this._trackIdLessObservations=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__.Z(1e5)),void this._trackIdLessObservations.enqueue(s.objectId);const o=s.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(o)){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.uZ)(t,0,1e3);this._trackIdToObservations.set(o,new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__.Z(s))}const d=this._trackIdToObservations.get(o).enqueue(s.objectId);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(d)&&(this._addOrUpdated.has(d)?this._addOrUpdated.delete(d):this._removed.push(d))}checkForUpdates(){const t=this._getToAdd(),s=this._getToRemove(),i=performance.now();i-this._lastPurge>=this.purgeInterval&&(this._purge(i),this._lastPurge=i);const r=[];if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(s))for(const o of s){const t=this.store.removeById(o);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(t)&&r.push(t)}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(t))for(const e of t)e.attributes[d]=i,this.store.add(e);(t||r)&&this.store.update(t,r)}_getToAdd(){if(!this._addOrUpdated.size)return null;const t=new Array(this._addOrUpdated.size);let e=0;return this._addOrUpdated.forEach((s=>t[e++]=s)),this._addOrUpdated.clear(),t}_getToRemove(){const t=this._removed;return this._removed.length?(this._removed=[],t):null}_nextId(){const t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t}_purge(t){const s=this._purgeOptions;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(s)&&(this._purgeSomeByDisplayCount(s),this._purgeByAge(s),this._purgeByAgeReceived(t,s),this._purgeTracks())}_purgeSomeByDisplayCount(t){if(!t.displayCount)return;let i=this.store.size;if(i>t.displayCount){if(this._timeInfo.trackIdField)for(const e of this._trackIdToObservations.values())if(i>t.displayCount&&e.size){const t=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.Wg)(e.dequeue());this._removed.push(t),i--}if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(this._trackIdLessObservations)){let s=i-t.displayCount;for(;s-- >0;){const t=this._trackIdLessObservations.dequeue();(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(t)&&this._removed.push(t)}}}}_purgeByAge(t){var e;if(!t.age||null==(e=this._timeInfo)||!e.startTimeField)return;const s=60*t.age*1e3,i=this._maxAge-s;this.store.forEach((t=>{t.attributes[this._timeInfo.startTimeField]<i&&this._removed.push(t.objectId)}))}_purgeByAgeReceived(t,e){if(!e.ageReceived)return;const s=t+60*e.ageReceived*1e3;this.store.forEach((t=>{t.attributes[d]<s&&this._removed.push(t.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((t,e)=>{0===t.size&&this._trackIdToObservations.delete(e)}))}}},68480:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>createConnection_t});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),Logger=__webpack_require__(36544),property=(__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),Error=__webpack_require__(32656),promiseUtils=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(39105)),zscale=__webpack_require__(98863),Evented=__webpack_require__(35470),HandleOwner=__webpack_require__(77204);let t=class extends(Evented.Z.EventedMixin(HandleOwner.r)){onFeature(r){this.emit("feature",r)}};t=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.sources.connections.StreamConnection")],t);const StreamConnection=t,p=Logger.Z.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var h,e;(e=h||(h={}))[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";let u=class extends StreamConnection{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:r}=e;this._config=e,this._featureZScaler=(0,zscale.k)(t,r,o),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){(0,maybe.pC)(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if((0,maybe.Wi)(this._websocket))return"disconnected";switch(this._websocket.readyState){case h.CONNECTING:case h.OPEN:return"connected";case h.CLOSING:case h.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,o=0){try{if(this.destroyed)return;this._websocket=await this._createWebSocket(e),this.notifyChange("connectionStatus")}catch(r){const s=t/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(p.error(new Error.Z("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(p.error(new Error.Z("websocket-connection",`Failed to connect. Attempting to reconnect in ${s}s`,r)),await(0,promiseUtils.e4)(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),o+1))}}_createWebSocket(e){const t=new WebSocket(e),o=new Promise(((e,o)=>{t.onopen=()=>e(t),t.onclose=e=>o(e)}));return o.then((()=>{if(this.destroyed)return t.onclose=()=>{},void t.close();t.onclose=e=>this._onClose(e),t.onerror=e=>this._onError(e),t.onmessage=e=>this._onMessage(e)})),o}async _handshake(e=1e4){const t=this._websocket;if((0,maybe.Wi)(t))return;const r=(0,promiseUtils.hh)(),s=t.onmessage,{filter:n,outFields:i,spatialReference:l}=this._config;return r.timeout(e),t.onmessage=e=>{var o;let a=null;try{a=JSON.parse(e.data)}catch(d){}a&&"object"==typeof a||(p.error(new Error.Z("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),(null==(o=a.spatialReference)?void 0:o.wkid)!==(null==l?void 0:l.wkid)&&(p.error(new Error.Z("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==a.format&&(p.error(new Error.Z("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),n&&a.filter!==n&&p.error(new Error.Z("websocket-connection","Tried to set filter, but server doesn't support it")),i&&a.outFields!==i&&p.error(new Error.Z("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s,r.resolve()},t.send(JSON.stringify({filter:n,outFields:i,format:"json",spatialReference:{wkid:l.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new Error.Z("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)this._featureZScaler&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(t){return p.error(new Error.Z("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),p.error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&p.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"connectionStatus",null),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"errorString",void 0),u=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.sources.connections.WebSocketConnection")],u);var SpatialReference=__webpack_require__(73032),jsonUtils=__webpack_require__(56885),request=(__webpack_require__(36348),__webpack_require__(36654)),Query=__webpack_require__(31518),query=__webpack_require__(899);const GeoEventConnection_p=Logger.Z.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),g={maxQueryDepth:5,maxRecordCountFactor:3};let _=class extends u{constructor(e){super({...g,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||GeoEventConnection_p.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=await this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),this._featureZScaler&&this._featureZScaler(t.geometry)}catch(r){return void GeoEventConnection_p.error(new Error.Z("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}async _fetchServiceDefinition(e){const r=(0,request.default)(e.path,{query:{f:"json"},responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}async _fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r;return`${this._inferWebSocketBaseUrl(o)}/subscribe?outSR=${t.wkid}${s?"&token="+s:""}`}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(-1!==t.indexOf("wss"))return t;return GeoEventConnection_p.error(new Error.Z("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,r){const o=this._websocket;if((0,maybe.Wi)(o)||(0,maybe.Wi)(e)&&(0,maybe.Wi)(r))return;const s=JSON.stringify({filter:this._serializeFilter(e,r)});let i=!1;const n=(0,promiseUtils.hh)();return o.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(GeoEventConnection_p.error(new Error.Z("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),n.reject(t.error)),o.onmessage=this._onMessage.bind(this),i=!0,n.resolve())},o.send(s),setTimeout((()=>{i||(this.destroyed||this._websocket!==o||GeoEventConnection_p.error(new Error.Z("geoevent-connection","Server timed out when setting filter")),n.reject())}),1e4),n.promise}_serializeFilter(e,o){const s={};if((0,maybe.Wi)(e)&&(0,maybe.Wi)(o))return s;if((0,maybe.pC)(e)&&e.geometry)try{const t=(0,jsonUtils.im)(e.geometry);if("extent"!==t.type)throw new Error.Z(`Expected extent but found type ${t.type}`);s.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(i){GeoEventConnection_p.error(new Error.Z("geoevent-connection","Encountered an error when setting connection geometryDefinition",i))}return(0,maybe.pC)(e)&&e.where&&"1 = 1"!==e.where&&(s.where=e.where),(0,maybe.pC)(o)&&(s.outFields=o.join(",")),s}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return GeoEventConnection_p.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:s}=this._relatedFeatures.get(r);for(const i in o)e.attributes[i]=o[i];return s&&(e.geometry=s),e.geometry||e.centroid||GeoEventConnection_p.error(new Error.Z("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const i of s.features)this.onFeature(this._enrich(i))}catch(e){GeoEventConnection_p.error(new Error.Z("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,8809))).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,n=r.query.supportsPagination,a=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,f=t.capabilities.query.maxRecordCount,d=i?f*c:f,y=new Query.Z;if(y.outFields=(0,maybe.Pt)(this._config.outFields,["*"]),y.where=(0,maybe.Pt)((0,maybe.U2)(this._config.filter,"where"),"1=1"),y.returnGeometry=!0,y.returnExceededLimitFeatures=!0,y.outSpatialReference=SpatialReference.Z.fromJSON(this._config.spatialReference),a&&(y.returnCentroid=!0),i&&(y.maxRecordCountFactor=c),n)return y.num=d,t.destroy(),this._queryPages(e,y);const p=await(0,query.executeQuery)(e,y,this._config.sourceSpatialReference);return t.destroy(),p.data}async _queryPages(e,t,o=[],s=0){t.start=(0,maybe.pC)(t.num)?s*t.num:null;const{data:i}=await(0,query.executeQuery)(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&s<this._config.maxQueryDepth?(i.features.forEach((e=>o.push(e))),this._queryPages(e,t,o,s+1)):(o.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const e=s.attributes[o];t.set(e,s)}this._relatedFeatures=t}};_=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.sources.connections.GeoEventConnection")],_);const GeoEventConnection=_;function createConnection_t(t,o,r,c,i,s,a){const p=0===t.path.indexOf("wss://")||0===t.path.indexOf("ws://"),f={source:t,sourceSpatialReference:o,spatialReference:r,geometryType:c,filter:i,maxReconnectionAttempts:s,maxReconnectionInterval:a};return p?new u(f):new GeoEventConnection(f)}},99677:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>StreamLayerView3D});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),property=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),Error=__webpack_require__(32656),Query=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(31518)),LayerView3D=__webpack_require__(9355),LayerView=__webpack_require__(48164),FeatureFilter=__webpack_require__(44119);const s=s=>{let c=class extends s{constructor(...o){super(...o),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null}};return(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],c.prototype,"connectionError",void 0),(0,tslib_es6._)([(0,property.Cb)({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],c.prototype,"connectionStatus",void 0),(0,tslib_es6._)([(0,property.Cb)({type:FeatureFilter.Z})],c.prototype,"filter",void 0),c=(0,tslib_es6._)([(0,subclass.j)("esri.layers.mixins.StreamLayerView")],c),c};var l,Accessor=__webpack_require__(82677),typeUtils=__webpack_require__(6635),Promise=(__webpack_require__(36348),__webpack_require__(75044)),Graphic=__webpack_require__(15988),HandleOwner=__webpack_require__(77204),StreamFeatureManager=__webpack_require__(84653),createConnection=__webpack_require__(68480),EventedSet=__webpack_require__(69725);let m=l=class extends Graphic.Z{getObjectId(){return this.objectId}clone(){return new l({objectId:this.objectId,...this.cloneProperties()})}};(0,tslib_es6._)([(0,property.Cb)({type:Number,json:{read:!0}})],m.prototype,"objectId",void 0),m=l=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.controllers.StreamGraphic")],m);class y{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const t=this._idToGraphic.get(e);return t?(t.sourceLayer=t.layer=null,this._idToGraphic.delete(e),t):null}update(e,t){this.onUpdate(e,t)}get size(){return this._idToGraphic.size}}let f=class extends((0,HandleOwner.p)((0,Promise.v)(Accessor.Z))){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new EventedSet.g}initialize(){this.addResolvingPromise(this.layer.when((()=>this._startup())))}destroy(){this.clear()}clear(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||"connected"===this.connection.connectionStatus}_startup(){const{parsedUrl:e,spatialReference:t,definitionExpression:r,geometryDefinition:o,objectIdField:s,timeInfo:a,purgeOptions:n,maxReconnectionAttempts:c,maxReconnectionInterval:d,updateInterval:l}=this.layer,m=typeUtils.Mk.toJSON(this.layer.geometryType),f=t,g=this.layerView.view.spatialReference,_={geometry:o,where:r};this.clear(),this._set("connection",(0,createConnection.I)(e,f,g,m,_,c,d)),this._outSpatialReference=g.toJSON(),this.store=new y(this._onUpdate.bind(this)),this.featuresManager=new StreamFeatureManager.ZP(this.store,s,a.toJSON(),n),this.handles.add([this.connection.on("feature",(e=>this._onFeature(e))),this.layer.watch("definitionExpression",(()=>this._startup())),this.layer.watch("geometryDefinition",(()=>this._startup())),this.layer.watch("purgeOptions",(()=>this._startup()))]);let I=performance.now();this._updateIntervalId=setInterval((()=>{const e=performance.now(),t=e-I;if(t>2500){I=e;const r=Math.round(this._updateInfo.client/(t/1e3)),o=Math.round(this._updateInfo.websocket/(t/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:r,websocket:o})}this.featuresManager.checkForUpdates()}),l)}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference),this.featuresManager.add(m.fromJSON(e))}catch{}}_onUpdate(e,r){(0,maybe.pC)(r)&&this.graphics.removeMany(r),(0,maybe.pC)(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}};(0,tslib_es6._)([(0,property.Cb)()],f.prototype,"connection",void 0),(0,tslib_es6._)([(0,property.Cb)()],f.prototype,"layer",void 0),(0,tslib_es6._)([(0,property.Cb)()],f.prototype,"layerView",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],f.prototype,"updating",null),f=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.controllers.StreamController")],f);const StreamController=f;var FeatureLikeLayerView3D=__webpack_require__(35065);let StreamLayerView3D_m=class extends(s((0,FeatureLikeLayerView3D.R)((0,LayerView3D.A)(LayerView.Z)))){constructor(){super(...arguments),this.asyncGraphicsUpdates=!0,this.hasZ=!0,this.hasM=!1}get connectionError(){const r=this.get("controller.connection.errorString");if(r)return new Error.Z("stream-controller",r)}createQuery(){return new Query.Z({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(r,o){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(r),(0,maybe.U2)(o,"signal"))}createController(){return new StreamController({layer:this.layer,layerView:this})}beforeSetController(){}};(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],StreamLayerView3D_m.prototype,"asyncGraphicsUpdates",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],StreamLayerView3D_m.prototype,"connectionError",null),(0,tslib_es6._)([(0,property.Cb)()],StreamLayerView3D_m.prototype,"controller",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],StreamLayerView3D_m.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],StreamLayerView3D_m.prototype,"hasM",void 0),StreamLayerView3D_m=(0,tslib_es6._)([(0,subclass.j)("esri.views.3d.layers.StreamLayerView3D")],StreamLayerView3D_m);const StreamLayerView3D=StreamLayerView3D_m}}]);
//# sourceMappingURL=9677.20936855.iframe.bundle.js.map