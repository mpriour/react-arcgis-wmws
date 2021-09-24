var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,i=(e,i)=>{for(var n in i||(i={}))r.call(i,n)&&o(e,n,i[n]);if(t)for(var n of t(i))s.call(i,n)&&o(e,n,i[n]);return e};import{s as n}from"./CircularArray.2b56c9c7.js";import{M as a,B as c,a1 as d,ch as u,ab as h,h7 as l,F as f,H as _,bb as p,G as y,hu as g,z as m,hJ as b,ah as w,N as v,Z as k,eQ as S,b1 as O,fA as F,X as I,hd as C}from"./vendor.7103ff48.js";const x="__esri_timestamp__";class R{constructor(e,t,r,s,o=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=r,this._purgeOptions=s,this.store=e,this.objectIdField=t,this.purgeInterval=o,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}add(e){if(this._useGeneratedIds){const t=this._nextId();e.attributes[this.objectIdField]=t,e.objectId=t}else e.objectId=e.attributes[this.objectIdField];if(this._addOrUpdated.set(e.objectId,e),this._maxAge=Math.max(this._maxAge,e.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return a(this._trackIdLessObservations)&&(this._trackIdLessObservations=new n(1e5)),void this._trackIdLessObservations.enqueue(e.objectId);const t=e.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(t)){const e=c(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,r=u(e,0,1e3);this._trackIdToObservations.set(t,new n(r))}const r=this._trackIdToObservations.get(t).enqueue(e.objectId);c(r)&&(this._addOrUpdated.has(r)?this._addOrUpdated.delete(r):this._removed.push(r))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);const s=[];if(c(t))for(const o of t){const e=this.store.removeById(o);c(e)&&s.push(e)}if(c(e))for(const o of e)o.attributes[x]=r,this.store.add(o);(e||s)&&this.store.update(e,s)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((r=>e[t++]=r)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;c(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const r of this._trackIdToObservations.values())if(t>e.displayCount&&r.size){const e=d(r.dequeue());this._removed.push(e),t--}if(c(this._trackIdLessObservations)){let r=t-e.displayCount;for(;r-- >0;){const e=this._trackIdLessObservations.dequeue();c(e)&&this._removed.push(e)}}}}_purgeByAge(e){var t;if(!e.age||null==(t=this._timeInfo)||!t.startTimeField)return;const r=60*e.age*1e3,s=this._maxAge-r;this.store.forEach((e=>{e.attributes[this._timeInfo.startTimeField]<s&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const r=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes[x]<r&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}let j=class extends(h.EventedMixin(l)){onFeature(e){this.emit("feature",e)}};j=f([_("esri.layers.graphics.sources.connections.StreamConnection")],j);var E=j;const T=p.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var N,q;(q=N||(N={}))[q.CONNECTING=0]="CONNECTING",q[q.OPEN=1]="OPEN",q[q.CLOSING=2]="CLOSING",q[q.CLOSED=3]="CLOSED";let A=class extends E{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=g(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){c(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(a(this._websocket))return"disconnected";switch(this._websocket.readyState){case N.CONNECTING:case N.OPEN:return"connected";case N.CLOSING:case N.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;this._websocket=await this._createWebSocket(e),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(T.error(new m("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(T.error(new m("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await b(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){const t=new WebSocket(e),r=new Promise(((e,r)=>{t.onopen=()=>e(t),t.onclose=e=>r(e)}));return r.then((()=>{if(this.destroyed)return t.onclose=()=>{},void t.close();t.onclose=e=>this._onClose(e),t.onerror=e=>this._onError(e),t.onmessage=e=>this._onMessage(e)})),r}async _handshake(e=1e4){const t=this._websocket;if(a(t))return;const r=w(),s=t.onmessage,{filter:o,outFields:i,spatialReference:n}=this._config;return r.timeout(e),t.onmessage=e=>{var a;let c=null;try{c=JSON.parse(e.data)}catch(d){}c&&"object"==typeof c||(T.error(new m("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),r.reject(),this.destroy()),(null==(a=c.spatialReference)?void 0:a.wkid)!==(null==n?void 0:n.wkid)&&(T.error(new m("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${n.wkid}`,e.data)),r.reject(),this.destroy()),"json"!==c.format&&(T.error(new m("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),r.reject(),this.destroy()),o&&c.filter!==o&&T.error(new m("websocket-connection","Tried to set filter, but server doesn't support it")),i&&c.outFields!==i&&T.error(new m("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s,r.resolve()},t.send(JSON.stringify({filter:o,outFields:i,format:"json",spatialReference:{wkid:n.wkid}})),r.promise}_onMessage(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new m("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)this._featureZScaler&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(t){return T.error(new m("websocket-connection","Failed to parse message",t)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),T.error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&T.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};f([y()],A.prototype,"connectionStatus",null),f([y()],A.prototype,"errorString",void 0),A=f([_("esri.layers.graphics.sources.connections.WebSocketConnection")],A);const P=p.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),U={maxQueryDepth:5,maxRecordCountFactor:3};let L=class extends A{constructor(e){super(i(i({},U),e))}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||P.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=await this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),this._featureZScaler&&this._featureZScaler(t.geometry)}catch(r){return void P.error(new m("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}async _fetchServiceDefinition(e){const t=v(e.path,{query:{f:"json"},responseType:"json"}),r=(await t).data;return this._serviceDefinition=r,r}async _fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r;return`${this._inferWebSocketBaseUrl(s)}/subscribe?outSR=${t.wkid}${o?"&token="+o:""}`}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(-1!==t.indexOf("wss"))return t;return P.error(new m("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(a(r)||a(e)&&a(t))return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const i=w();return r.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(P.error(new m("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),i.reject(t.error)),r.onmessage=this._onMessage.bind(this),o=!0,i.resolve())},r.send(s),setTimeout((()=>{o||(this.destroyed||this._websocket!==r||P.error(new m("geoevent-connection","Server timed out when setting filter")),i.reject())}),1e4),i.promise}_serializeFilter(e,t){const r={};if(a(e)&&a(t))return r;if(c(e)&&e.geometry)try{const t=k(e.geometry);if("extent"!==t.type)throw new m(`Expected extent but found type ${t.type}`);r.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(s){P.error(new m("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return c(e)&&e.where&&"1 = 1"!==e.where&&(r.where=e.where),c(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return P.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:o}=this._relatedFeatures.get(r);for(const i in s)e.attributes[i]=s[i];return o&&(e.geometry=o),e.geometry||e.centroid||P.error(new m("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const i of o.features)this.onFeature(this._enrich(i))}catch(q){P.error(new m("geoevent-connection","Encountered an error when querying buddy services",{error:q}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import("./vendor.7103ff48.js").then((function(e){return e.r2}))).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,i=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,c=s?a*n:a,d=new S;if(d.outFields=O(this._config.outFields,["*"]),d.where=O(F(this._config.filter,"where"),"1=1"),d.returnGeometry=!0,d.returnExceededLimitFeatures=!0,d.outSpatialReference=I.fromJSON(this._config.spatialReference),i&&(d.returnCentroid=!0),s&&(d.maxRecordCountFactor=n),o)return d.num=c,t.destroy(),this._queryPages(e,d);const u=await C(e,d,this._config.sourceSpatialReference);return t.destroy(),u.data}async _queryPages(e,t,r=[],s=0){t.start=c(t.num)?s*t.num:null;const{data:o}=await C(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<this._config.maxQueryDepth?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o)}this._relatedFeatures=t}};L=f([_("esri.layers.graphics.sources.connections.GeoEventConnection")],L);var W=L;function B(e,t,r,s,o,i,n){const a=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),c={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:i,maxReconnectionInterval:n};return a?new A(c):new W(c)}export{R as h,B as t};
//# sourceMappingURL=createConnection.eda2f8f2.js.map