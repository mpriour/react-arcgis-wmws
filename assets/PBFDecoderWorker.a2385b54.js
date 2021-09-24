var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{ht as a,hu as h,X as l,aT as u,e2 as c,aW as p,hv as d,hw as f,hx as y,hy as m}from"./vendor.7103ff48.js";function g(e,t){return t}function P(e,t,r,s){switch(r){case 0:return G(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?G(e,t+s,1):function({translate:e,scale:t},r,s){return e[s]-r*t[s]}(e,t+s,1)}}function b(e,t,r,s){return 2===r?G(e,t,2):P(e,t,r,s)}function C(e,t,r,s){return 2===r?G(e,t,3):P(e,t,r,s)}function v(e,t,r,s){return 3===r?G(e,t,3):b(e,t,r,s)}function G({translate:e,scale:t},r,s){return e[s]+r*t[s]}class w{constructor(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=g,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new a}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const t=h(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(t)for(const r of e.features)t(r.geometry)}createSpatialReference(){return new l}addField(e,t){e.fields.push(u.fromJSON(t));const r=e.fields.map((e=>e.name));this.AttributesConstructor=function(){for(const e of r)this[e]=null}}addFeature(e,t){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const s in t.attributes){const e=t.attributes[s];"string"==typeof e&&e.length>r&&(t.attributes[s]="")}e.features.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,o=c(r.clone(),r,!1,!1,this.transform),n=p(o,s,!1,!1);let i=null;switch(s){case"esriGeometryPoint":i="point";break;case"esriGeometryPolygon":i="polygon";break;case"esriGeometryPolyline":i="polyline";break;case"esriGeometryMultipoint":i="multipoint"}n.type=i,e.queryGeometryType=s,e.queryGeometry=n}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,t,r)=>this.addCoordinatePolygon(e,t,r),this.createGeometry=e=>this.createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,t,r)=>this.addCoordinatePolyline(e,t,r),this.createGeometry=e=>this.createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,t,r)=>this.addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this.createMultipointGeometry(e);break;case"mesh":case"extent":break;default:d(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new f(y(),null,new this.AttributesConstructor)}allocateCoordinates(){const e=this.lengths.reduce(((e,t)=>e+t),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}addLength(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}createPointGeometry(e){const t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}transformPathLikeValue(e,t){let r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}addCoordinatePolyline(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}addCoordinatePolygon(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}createPolygonGeometry(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createPolylineGeometry(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}createMultipointGeometry(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(t,r),o=e[e.length-1];0===r&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?v:t?b:r?C:P}}class A{_parseFeatureQuery(e){const a=m(e.buffer,new w(e.options)),h=(l=((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))n.call(t,r)&&i(e,r,t[r]);return e})({},a),u={spatialReference:a.spatialReference.toJSON(),fields:a.fields?a.fields.map((e=>e.toJSON())):void 0},t(l,r(u)));var l,u;return Promise.resolve(h)}}function M(){return new A}export{M as default};
//# sourceMappingURL=PBFDecoderWorker.a2385b54.js.map