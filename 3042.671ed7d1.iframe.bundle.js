(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[3042],{63042:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{previewWebStyleSymbol:()=>i});var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(96071),_request_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36654);function i(t,i,h){const s=t.thumbnail&&t.thumbnail.url;return s?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__.default)(s,{responseType:"image"}).then((t=>{const e=function n(e,i){const n=!/\\.svg$/i.test(e.src)&&i&&i.disableUpsampling,h=Math.max(e.width,e.height);let s=i&&null!=i.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.F2)(i.maxSize):120;n&&(s=Math.min(h,s));const o=Math.min(s,i&&null!=i.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.F2)(i.size):h);if(o!==h){const t=0!==e.width&&0!==e.height?e.width/e.height:1;t>=1?(e.width=o,e.height=o/t):(e.width=o*t,e.height=o)}return e}(t.data,h);return h&&h.node?(h.node.appendChild(e),h.node):e})):t.fetchSymbol().then((t=>i(t,h)))}}}]);
//# sourceMappingURL=3042.671ed7d1.iframe.bundle.js.map