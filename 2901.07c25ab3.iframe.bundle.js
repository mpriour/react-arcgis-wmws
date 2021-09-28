"use strict";(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[2901],{62901:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{clearBoundingBoxCache:()=>a,computeIconLayerResourceSize:()=>l,computeLayerResourceSize:()=>y,computeLayerSize:()=>f,computeObjectLayerResourceSize:()=>b});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(61681),_core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70375),_request_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(40457),_core_ItemCache_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77234),_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(37116),_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(19049);let c=m();function m(){return new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_2__.Z(50)}function a(){c=m()}function y(e,o){if("icon"===e.type)return l(e,o);if("object"===e.type)return b(e,o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function f(e,o){if("icon"===e.type)return function p(e,r){return l(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}(e,o);if("object"===e.type)return async function d(e,r){const o=await b(e,r);return(0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__.$K)(o,e)}(e,o);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(o,t){if(o.resource.href)return function h(e){return(0,_request_js__WEBPACK_IMPORTED_MODULE_1__.default)(e,{responseType:"image"}).then((e=>e.data))}(o.resource.href).then((e=>[e.width,e.height]));if(o.resource.primitive)return(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.pC)(t)?[t,t]:[256,256];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function b(e,r){return async function w(o,t){if(!o.isPrimitive){const e=o.resource.href,r=c.get(e);if(void 0!==r)return Promise.resolve(r);const t=await Promise.resolve().then(__webpack_require__.bind(__webpack_require__,86232)),n=await t.fetch(e,{disableTextures:!0});return c.put(e,n.referenceBoundingBox),n.referenceBoundingBox}let n=null;if(o.resource&&o.resource.primitive&&(n=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__.Ue)((0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_4__.Uz)(o.resource.primitive)),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.pC)(t)))for(let e=0;e<n.length;e++)n[e]*=t;return n?Promise.resolve(n):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__.dp)(e)))}}}]);