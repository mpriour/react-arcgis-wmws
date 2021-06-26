(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[3057],{34947:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Es:()=>g,W7:()=>y,I_:()=>c,qM:()=>C});var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(82550),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36544),_core_Error_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32656),_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(78975);const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,r){let o="",i=0;for(;i<r;){const u=e[t+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&e[t+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function a(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=I[u];n.fields[i.property]=a(e,r),r+=m[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function s(e,t,r){const o=[];let i,a,s=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(o.push(u(r,s,i-1)),0!==r[s+i-1])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function c(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function l(t,r,o){const i=null!=r.header?a(t,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let a=0;a<r.ordering.length;a++){const t=r.ordering[a],o=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__.d9)(r[t]);if(o.count=i.fields.count,"String"===o.valueType){if(o.byteOffset=s,o.byteCount=i.fields[t+"ByteCount"],"UTF-8"!==o.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else{if(!h(o.valueType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=A(o.valueType);s+=s%e!=0?e-s%e:0,o.byteOffset=s,o.byteCount=e*o.valuesPerElement*o.count}}s+=o.byteCount,u.entries[t]=o}return u.byteCount=s-u.byteOffset,u}function b(e,t,r){if(t!==e&&i.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e,t){const n=a(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const a of t.ordering){if(!t.vertexAttributes[a])continue;const e={...t.vertexAttributes[a],byteOffset:r,count:u},n=p[a]?p[a]:"_"+a;o.vertexAttributes[n]=e,r+=A(e.valueType)*e.valuesPerElement*u}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=A(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*c}}return b(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function g(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?function d(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function w(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}(t)}const p={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function C(e,t,u){if("lepcc-rgb"===e.encoding)return(0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__.IT)(t);if("lepcc-intensity"===e.encoding)return(0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(i.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(i.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const a=l(t,e,u);b(a.byteOffset+a.byteCount,t.byteLength,"attribute");const d=a.entries.attributeValues||a.entries.objectIds;if(d){if("String"===d.valueType){const e=a.entries.attributeByteCounts,n=c(t,e),r=function f(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,d);return s(e.count,n,r)}return c(t,d)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},I={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function h(e){return m.hasOwnProperty(e)}function A(e){return h(e)?m[e].BYTES_PER_ELEMENT:0}},42159:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>n,n:()=>h});var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77625),_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(89333),_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28449),_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12811);function n(t,o,n,s){const c=h(t,o,n),i=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)();return(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.P_)(n,c,i,s),i}function h(r,a,n){const h=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),i=r[3],e=2**(4*Math.ceil(Math.log(i)*Math.LOG2E/4)+1);if(n.isGeographic){const t=e/(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_1__.Iu)(n).radius*180/Math.PI,a=Math.round(r[1]/t),s=Math.max(-90,Math.min(90,a*t)),c=t/Math.cos((Math.abs(s)-t/2)/180*Math.PI),i=Math.round(r[0]/c)*c;h[0]=i,h[1]=s}else{const t=Math.round(r[0]/e),o=Math.round(r[1]/e);h[0]=t*e,h[1]=o*e}const M=r[2]+a,m=Math.round(M/e);return h[2]=m*e,h}},83057:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{HV:()=>Ce,yS:()=>ke,zW:()=>Re,gn:()=>ve,p8:()=>Me,Jf:()=>we,OJ:()=>Se,Cx:()=>Ke,X5:()=>X,cz:()=>J,hv:()=>ee,e8:()=>ie,tS:()=>Y,ei:()=>be,Jx:()=>de,Dt:()=>oe,tp:()=>ye,K0:()=>Z,ix:()=>Fe,T2:()=>ge,lj:()=>se,Yb:()=>te,a7:()=>Ie,nn:()=>H,jv:()=>Be,uC:()=>ze,bf:()=>ce});var _core_has_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(95830),_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(6962),_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(59472),_core_Error_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32656),_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19677),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39105),_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(73032),_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(41241),_request_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(36654),_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(17387),_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(89333),_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(67128),_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(50897),_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(28449),_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(31518),_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(12811),_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(38256),_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(97902),_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(69996),_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(39721),_webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(43446),_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(71484),_chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(67135),_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(75625),_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(34947),_I3SProjectionUtil_js__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(42159);function Q(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function Z(t){const r=t._stage.renderView.has(1),o=t._stage.renderView.has(0),n=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__.Z)("disable-feature:i3s-basis")?0:1;return 12|(r?2|n:0)|(o?n:0)}function H(e,t){return e.find((e=>0!=(e.encoding&t)))}function J(e){switch(e){case 1:return _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__.x.BASIS_ENCODING;case 2:return _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_18__.x.DDS_ENCODING;case 4:return"image/png";case 8:return"image/jpeg";case 16:return"image/ktx";default:return""}}function X(t){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__.Z)("disable-feature:i3s-draco")||!t)return!1;for(const e of t)for(const t of e.geometryBuffers)if("draco"===t.compressedAttributes.encoding)return!0;return!1}function Y(e,t,r,o,n,a){n.traverse(r,(r=>{let n=r.mbs;t!==o&&(n=ne,(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.st)(r.mbs,o,n,t));const s=function ae(e,t){const r=t[0],o=t[1],n=t[3],a=e[0]-r,s=r-e[2],i=e[1]-o,c=o-e[3],l=Math.max(a,s,0),u=Math.max(i,c,0),f=l*l+u*u;return f>n*n?0:f>0?1:-Math.max(a,s,i,c)>n?3:2}(e,n);return 0!==s&&(a(r,s),!0)}))}function ee(e,t,r){let o=0,n=0;for(let a=0;a<t.length&&o<e.length;a++)e[o]===t[a]&&(r(a)&&(e[n]=e[o],n++),o++);e.length=n}function te(e,t,r){let o=0,n=0;for(;o<r.length;)(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.$A)(e,r[o])>=0===t&&(r[n]=r[o],n++),o++;r.length=n}const re=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__.Ue)();function oe(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return re[0]=(e[0]-t.position[0])/t.rotationScale[0],re[1]=(e[1]-t.position[1])/t.rotationScale[4],re[2]=(e[2]-t.position[2])/t.rotationScale[8],re[3]=(e[3]-t.position[0])/t.rotationScale[0],re[4]=(e[4]-t.position[1])/t.rotationScale[4],re[5]=(e[5]-t.position[2])/t.rotationScale[8],re}const ne=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_14__.a)();function se(e,t){const r=t[0],o=t[1],n=t[2],a=t[3],s=e[0]-r,i=r-e[3],c=e[1]-o,l=o-e[4],u=e[2]-n,f=n-e[5],p=Math.max(s,i,0),m=Math.max(c,l,0),h=Math.max(u,f,0),d=p*p+m*m+h*h;return d>a*a?0:d>0?1:-Math.max(s,i,c,l,u,f)>a?3:2}function ie(e,t,r){const o=[],n=r&&r.missingFields,a=r&&r.originalFields;for(const s of e){const e=s.toLowerCase();let r=!1;for(const n of t)if(e===n.name.toLowerCase()){o.push(n.name),r=!0,a&&a.push(s);break}!r&&n&&n.push(s)}return o}async function ce(e,t,r,s,c){if(0===t.length)return[];const l=e.attributeStorageInfo;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.pC)(e.associatedLayer))try{return await async function ue(e,t,r,o){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const n=t.map((e=>e.attributes[r])),a=[],s=ie(o,e.fields,{originalFields:a}),i=await fe(e,n,s);for(let c=0;c<t.length;c++){const e=t[c],r=i[c],o={};if(e.attributes)for(const t in e.attributes)o[t]=e.attributes[t];for(let t=0;t<a.length;t++)o[a[t]]=r[s[t]];e.attributes=o}return t}(e.associatedLayer,t,r,s)}catch(u){if(e.associatedLayer.loaded)throw u}if(l){const o=function le(e,t,r){const o=new Map,n=[],a=r();for(const s of e){const e=s.attributes[t];for(let t=0;t<a.length;t++){const r=a[t],i=r.featureIds.indexOf(e);if(i>=0){let e=o.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},n.push(e),o.set(r.node,e)),e.indices.push(i),e.graphics.push(s);for(let r=t;r>0;r--)a[r]=a[r-1];a[0]=r;break}}}return n}(t,r,c);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.Wi)(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const u=e.parsedUrl.path,f=await Promise.all(o.map((e=>function pe(e,t,r,o,n){const a=[];for(const s of t)if(s&&-1!==n.indexOf(s.name)){const t=`${e}/nodes/${r.resources.attributes}/attributes/${s.key}/0`;a.push({url:t,storageInfo:s})}return(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.as)(a.map((e=>(0,_request_js__WEBPACK_IMPORTED_MODULE_6__.default)(e.url,{responseType:"array-buffer"}).then((t=>(0,_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_22__.qM)(e.storageInfo,t.data)))))).then((e=>{const t=[];for(const r of o){const o={};for(let t=0;t<e.length;t++)null!=e[t].value&&(o[a[t].storageInfo.name]=de(e[t].value,r));t.push(o)}return t}))}(u,l,e.node,e.indices,s).then((t=>{for(let r=0;r<e.graphics.length;r++){const o=e.graphics[r],n=t[r];if(o.attributes)for(const e in o.attributes)e in n||(n[e]=o.attributes[e]);o.attributes=n}return e.graphics})))));return(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.xH)(f)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function fe(e,t,r){const o=e.capabilities.query.maxRecordCount;if(null!=o&&t.length>o){const n=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.vr)(t,o);return Promise.all(n.map((t=>fe(e,t,r)))).then(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.xH)}const n=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_12__.Z({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(n).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function de(e,o){if(!e)return null;const n=e[o];return(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_25__.z3)(e)?-32768===n?null:n:(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_25__.Hx)(e)?-2147483648===n?null:n:n!=n?null:n}function ye(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=t?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__.Z(Q(t)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function ge(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=t?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__.Z(Q(t)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function be(e,t){return(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.Wi)(t)?"@null":t===(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.rS)(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function we(e,t,r){if(!(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.Q8)(e,t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&e.isGeographic)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{})}function Se(e,t,r){const o=ye(e),n=ge(e);we(o,t,r),we(n,t,r)}function Me(e){if(null==e.store||null==e.store.defaultGeometrySchema||!function xe(e){return!(null!=e.geometryType&&"triangles"!==e.geometryType||null!=e.topology&&"PerAttributeArray"!==e.topology||null==e.vertexAttributes||null==e.vertexAttributes.position)}(e.store.defaultGeometrySchema))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function ve(e,t){Se(e,t.spatialReference,t.viewingMode)}function Re(e){if(null==e.store||null==e.store.defaultGeometrySchema||!function je(e){return!(null==e.geometryType||"points"!==e.geometryType||null!=e.topology&&"PerAttributeArray"!==e.topology||null!=e.encoding&&""!==e.encoding&&"lepcc-xyz"!==e.encoding||null==e.vertexAttributes||null==e.vertexAttributes.position)}(e.store.defaultGeometrySchema))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__.Z("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function ke(e,t){we(e.spatialReference,t.spatialReference,t.viewingMode)}function Te(e){return"mesh-3d"===e.type}function Ie(e){if(null==e||!function qe(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!Te(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.Wi)(e.material)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.Wi)(e.material.color)||"replace"!==e.material.colorMixMode)return!0}return!1}const ze=(0,_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__.$s)({color:[0,0,0,0],opacity:0});class Ae{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Fe(e){const t=new Ae;let r=!1,n=!1;for(const a of e.symbolLayers.items)if("fill"===a.type&&a.enabled){const e=a.material,s=a.edges;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.pC)(e)&&!r){const n=e.color,s=(0,_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_19__.F)(e.colorMixMode);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.pC)(n)?t.material={color:[n.r/255,n.g/255,n.b/255],alpha:n.a,colorMixMode:s}:t.material={color:[1,1,1],alpha:1,colorMixMode:1},t.castShadows=a.castShadows,r=!0}(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.pC)(s)&&!n&&(t.edgeMaterial=(0,_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__.C8)(s,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:1}),t}function Ce(e,t){return(0|e)+(0|t)|0}function Be(e,t,r,o,n=0){o===(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.rS)(o)?t.isGeographic?function Ue(e,t,r,o){const n=(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.Iu)(r),a=1+Math.max(0,o)/(n.radius+e.center[2]);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(t.center,e.center[0],e.center[1],e.center[2]+o),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.CM)(t.center,r,0,t.center,(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.rS)(r),0,1),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__.a)(t.quaternion,e.quaternion),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__.c)(We,e.quaternion),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(Ne,0,0,1),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.q)(Ne,Ne,We),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(Ne,e.halfSize[0]*Math.abs(Ne[0]),e.halfSize[1]*Math.abs(Ne[1]),e.halfSize[2]*Math.abs(Ne[2])),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.a)(Ne,Ne,n.inverseFlattening),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.b)(t.halfSize,e.halfSize,Ne),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.a)(t.halfSize,t.halfSize,a)}(e,r,t,n):function Ge(e,t,r,o){(0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_21__.$e)(e,Ee),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(t.center,e.center[0],e.center[1],e.center[2]+o),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.P_)(r,t.center,Le,(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.rS)(r)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(t.center,Le[12],Le[13],Le[14]);const n=2*Math.sqrt(1+Le[0]+Le[5]+Le[10]);We[0]=(Le[6]-Le[9])/n,We[1]=(Le[8]-Le[2])/n,We[2]=(Le[1]-Le[4])/n,We[3]=.25*n,(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__.m)(t.quaternion,We,e.quaternion),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__.c)(We,t.quaternion);let a=0,s=0,i=0;for(const c of Ee)c[2]+=o,(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.CM)(c,r,0,c,(0,_geometry_projectionEllipsoid_js__WEBPACK_IMPORTED_MODULE_8__.rS)(r),0,1),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.r)(Ne,c,t.center),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.q)(Ne,Ne,We),a=Math.max(a,Math.abs(Ne[0])),s=Math.max(s,Math.abs(Ne[1])),i=Math.max(i,Math.abs(Ne[2]));(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(t.halfSize,a,s,i)}(e,r,t,n):e===r?(r.center[2]+=n,(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.CM)(r.center,t,0,r.center,o,0,1)):((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.s)(r.center,e.center[0],e.center[1],e.center[2]+n),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.CM)(r.center,t,0,r.center,o,0,1),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_15__.a)(r.quaternion,e.quaternion),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.g)(r.halfSize,e.halfSize))}function Ke(e,t,r,a,s,i){if(!i||0===i.length||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.Wi)(t))return null;const c=(0,_I3SProjectionUtil_js__WEBPACK_IMPORTED_MODULE_23__.c)(e.mbs,s,r,t);let l;(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_9__.a)($e,c);const u=()=>{if(!l)if(l=Ee,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.cS)(Pe),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_24__.pC)(e.serviceObb)){Be(e.serviceObb,r,De,t,s),(0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_21__.$e)(De,l);for(const e of l)(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(e,e,$e),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.Ho)(Pe,e)}else{const o=e.mbs,n=o[3];(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.SH)(o,r,Ne,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(Ne,Ne,$e),Ne[2]+=s;for(let e=0;e<8;++e){const t=1&e?n:-n,r=2&e?n:-n,o=4&e?n:-n,a=l[e];(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.g)(a,[Ne[0]+t,Ne[1]+r,Ne[2]+o]),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.Ho)(Pe,a)}}};let f=1/0,p=-1/0;if(i.forEach((e=>(e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r.hasZ)return;(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.cS)(Oe);const o=r.spatialReference||a,n=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.SH)(r,o,Ne,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(Ne,Ne,$e),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.Ho)(Oe,Ne),Math.min(Ne[2],e))),e)),1/0);u(),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.kK)(Pe,Oe)&&(f=Math.min(f,n),p=Math.max(p,n))})(e))),f===1/0)return null;const d=(e,t,r)=>{(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(Ne,r,c),e[t+0]=Ne[0],e[t+1]=Ne[1],e[t+2]=Ne[2],t+=24,r[2]=f,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(Ne,r,c),e[t+0]=Ne[0],e[t+1]=Ne[1],e[t+2]=Ne[2],t+=24,r[2]=p,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_7__.i)(Ne,r,c),e[t+0]=Ne[0],e[t+1]=Ne[1],e[t+2]=Ne[2]};for(let o=0;o<8;++o)d(_e.data,3*o,l[o]);return(0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_21__.Qb)(_e)}const Le=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_13__.a)(),We=(0,_chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_20__.b)(),Ee=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Oe=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.Ue)(),Pe=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_10__.Ue)(),De=(0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_21__.Ue)(),Ne=[0,0,0],_e={data:new Array(72),size:3},$e=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_13__.a)()},78975:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{ti:()=>w,IT:()=>u,Gi:()=>c});var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32656);const t=!0,o_identifierOffset=0,o_identifierLength=10,o_versionOffset=10,o_checksumOffset=12,o_byteCount=16;function r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o_identifierOffset,o_identifierLength)),version:r.getUint16(n+o_versionOffset,t),checksum:r.getUint32(n+o_checksumOffset,t)}}const n_sizeLo=0,n_sizeHi=4,n_minX=8,n_minY=16,n_minZ=24,n_maxX=32,n_maxY=40,n_maxZ=48,n_errorX=56,n_errorY=64,n_errorZ=72,n_count=80,n_reserved=84,n_byteCount=88;function i(e,o){return{sizeLo:e.getUint32(o+n_sizeLo,t),sizeHi:e.getUint32(o+n_sizeHi,t),minX:e.getFloat64(o+n_minX,t),minY:e.getFloat64(o+n_minY,t),minZ:e.getFloat64(o+n_minZ,t),maxX:e.getFloat64(o+n_maxX,t),maxY:e.getFloat64(o+n_maxY,t),maxZ:e.getFloat64(o+n_maxZ,t),errorX:e.getFloat64(o+n_errorX,t),errorY:e.getFloat64(o+n_errorY,t),errorZ:e.getFloat64(o+n_errorZ,t),count:e.getUint32(o+n_count,t),reserved:e.getUint32(o+n_reserved,t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o_byteCount,"LEPCC     "!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Unknown version");const u=i(c,d);if(d+=n_byteCount,u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l_sizeLo=0,l_sizeHi=4,l_count=8,l_colorMapCount=12,l_lookupMethod=14,l_compressionMethod=15,l_byteCount=16;function a(e,o){return{sizeLo:e.getUint32(o+l_sizeLo,t),sizeHi:e.getUint32(o+l_sizeHi,t),count:e.getUint32(o+l_count,t),colorMapCount:e.getUint16(o+l_colorMapCount,t),lookupMethod:e.getUint8(o+l_lookupMethod),compressionMethod:e.getUint8(o+l_compressionMethod)}}function u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o_byteCount,"ClusterRGB"!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Unknown version");const d=a(n,i);if(i+=l_byteCount,d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f_sizeLo=0,f_sizeHi=4,f_count=8,f_scaleFactor=12,f_bitsPerPoint=14,f_reserved=15,f_byteCount=16;function h(e,o){return{sizeLo:e.getUint32(o+f_sizeLo,t),sizeHi:e.getUint32(o+f_sizeHi,t),count:e.getUint32(o+f_count,t),scaleFactor:e.getUint16(o+f_scaleFactor,t),bitsPerPoint:e.getUint8(o+f_bitsPerPoint),reserved:e.getUint8(o+f_reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o_byteCount,"Intensity "!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Unknown version");const l=h(n,i);if(i+=f_byteCount,l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}}}]);
//# sourceMappingURL=3057.4a476dc1.iframe.bundle.js.map