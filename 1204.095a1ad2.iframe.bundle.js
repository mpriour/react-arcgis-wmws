(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[1204],{6357:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>a});const a={BingMapsLayer:async()=>(await __webpack_require__.e(2081).then(__webpack_require__.bind(__webpack_require__,42081))).default,BuildingSceneLayer:async()=>(await Promise.all([__webpack_require__.e(8340),__webpack_require__.e(1260)]).then(__webpack_require__.bind(__webpack_require__,21260))).default,CSVLayer:async()=>(await __webpack_require__.e(4479).then(__webpack_require__.bind(__webpack_require__,54479))).default,ElevationLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,29403))).default,FeatureLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,8809))).default,GroupLayer:async()=>(await __webpack_require__.e(9647).then(__webpack_require__.bind(__webpack_require__,19647))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(2303).then(__webpack_require__.bind(__webpack_require__,32303))).default,ImageryLayer:async()=>(await Promise.all([__webpack_require__.e(4464),__webpack_require__.e(6399),__webpack_require__.e(2803),__webpack_require__.e(3194)]).then(__webpack_require__.bind(__webpack_require__,53194))).default,ImageryTileLayer:async()=>(await Promise.all([__webpack_require__.e(4464),__webpack_require__.e(6399),__webpack_require__.e(2803),__webpack_require__.e(8967)]).then(__webpack_require__.bind(__webpack_require__,28967))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(6603).then(__webpack_require__.bind(__webpack_require__,96603))).default,KMLLayer:async()=>(await __webpack_require__.e(6184).then(__webpack_require__.bind(__webpack_require__,66184))).default,MapImageLayer:async()=>(await __webpack_require__.e(2933).then(__webpack_require__.bind(__webpack_require__,62933))).default,MapNotesLayer:async()=>(await __webpack_require__.e(3204).then(__webpack_require__.bind(__webpack_require__,73204))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(8742).then(__webpack_require__.bind(__webpack_require__,68742))).default,PointCloudLayer:async()=>(await __webpack_require__.e(8342).then(__webpack_require__.bind(__webpack_require__,78342))).default,RouteLayer:async()=>(await __webpack_require__.e(3504).then(__webpack_require__.bind(__webpack_require__,53504))).default,SceneLayer:async()=>(await Promise.all([__webpack_require__.e(8340),__webpack_require__.e(3687)]).then(__webpack_require__.bind(__webpack_require__,93687))).default,StreamLayer:async()=>(await __webpack_require__.e(5034).then(__webpack_require__.bind(__webpack_require__,65034))).default,TileLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,66416))).default,UnknownLayer:async()=>(await __webpack_require__.e(2095).then(__webpack_require__.bind(__webpack_require__,32095))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(1983).then(__webpack_require__.bind(__webpack_require__,51983))).default,VectorTileLayer:async()=>(await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,47263))).default,WebTileLayer:async()=>(await __webpack_require__.e(6601).then(__webpack_require__.bind(__webpack_require__,16601))).default,WMSLayer:async()=>(await __webpack_require__.e(6230).then(__webpack_require__.bind(__webpack_require__,96230))).default,WMTSLayer:async()=>(await __webpack_require__.e(5155).then(__webpack_require__.bind(__webpack_require__,65155))).default}},1204:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{fromItem:()=>l,selectLayerClassPath:()=>u});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(59472),_core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32656),_request_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36654),_PortalItem_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(80192),_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(62646),_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6357);function l(e){return!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__.default||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_2__.default(e.portalItem)}),function s(e){return e.load().then(u).then(i)}(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function u(e){switch(e.type){case"Map Service":return function c(e){return function S(e){return j(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function y(e){return g(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function p(e){return await e.load(),(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__._$)(e,"Map Notes")?{className:"MapNotesLayer"}:(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_4__._$)(e,"Route Layer")?{className:"RouteLayer"}:1===T(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function m(e){return g(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return{className:r[t]}}return j(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function f(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),l=null==o?void 0:o.layerType;return"ArcGISTiledImageServiceLayer"===l?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===l?{className:"ImageryLayer"}:"map"===(null==(a=(await j(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function i(e){return(0,_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.T[e.className])().then((r=>({constructor:r,properties:e.properties})))}function g(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((r=>T(r)>0?v(r):j(e.url).then(v)))}function v(r){return 1===T(r)&&{id:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.Wg)(w(r))}}function w(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function T(e){var r,t,a,n;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function j(e){return(0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}}}]);
//# sourceMappingURL=1204.095a1ad2.iframe.bundle.js.map