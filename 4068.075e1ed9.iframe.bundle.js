(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[4068],{74068:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{getPatternDescriptor:()=>N,getSymbolLayerFill:()=>H,previewSymbol3D:()=>X});__webpack_require__(95830);var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(59472),_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36544),_core_Error_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32656),_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39105),_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(96071),_IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(76609),_assets_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(12973),_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(60471),_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(43019),_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(41328),_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(26252),_utils_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(53302),_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(59126),_renderUtils_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(53714);const U=22,D=120,E=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__.Z.getLogger("esri.symbols.support.previewSymbol3D");function C(s){const r=s.outline,o=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.pC)(s.material)?s.material.color:null,l=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.pC)(o)?o.toHex():null;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.Wi)(r))return"fill"===s.type&&"#ffffff"===l?{color:"#bdc3c7",width:.75}:null;const n=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(r.size)||0;return{color:"rgba("+((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.pC)(r.color)?r.color.toRgba():"255,255,255,1")+")",width:Math.min(n,80)}}function q(e,t=1){const s=e.a,r=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__._Y)(e),o=r.h,a=r.s/t,l=100-(100-r.v)/t,{r:n,g:i,b:u}=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__.xr)({h:o,s:a,v:l});return[n,i,u,s]}function A(t){return"water"===t.type?(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.Wi)(t.color)?null:t.color:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.Wi)(t.material)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.Wi)(t.material.color)?null:t.material.color}function H(e,t=0){const s=A(e);if(!s){if("fill"===e.type)return null;const s=_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__.Ne.r,r=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.uH)(s,t);return[r,r,r,100]}const r=s.toRgba();for(let o=0;o<3;o++)r[o]=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.uH)(r[o],t);return r}async function N(e,t){const s=e.style;return"none"===s?null:{type:"pattern",x:0,y:0,src:await(0,_gfxUtils_js__WEBPACK_IMPORTED_MODULE_8__.Od)((0,_assets_js__WEBPACK_IMPORTED_MODULE_5__.V)(`esri/symbols/patterns/${s}.png`),t.toCss(!0)),width:5,height:5}}function T(e){return e.outline?C(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function $(e,t){const s=A(e);if(!s)return null;let r="rgba(";return r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.uH)(s.r,t)+",",r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.uH)(s.g,t)+",",r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.uH)(s.b,t)+",",r+s.a+");"}function B(e,t){const s=$(e,t);return s?{color:s,width:Math.min(e.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(e.size):.75,80)}:{}}function F(e,t,s){const r=.75*s;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function Q(e,t){const s=t&&t.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(t.size):null,r=t&&t.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(t.maxSize):null,l=t&&t.disableUpsampling,n=e.symbolLayers,i=[];let c=0,h=0;const u=n.getItemAt(n.length-1);let p;return u&&"icon"===u.type&&(p=u.size&&(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(u.size)),n.forEach((o=>{if("icon"!==o.type&&"object"!==o.type)return;const n="icon"===o.type?o.size&&(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(o.size):0,u=s||n?Math.ceil(Math.min(s||n,r||D)):U;if(o&&o.resource&&o.resource.href){const t=function Z(e,t){const s=t&&t.resource,r=s&&s.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(r&&"object"!==t.type)return Promise.resolve((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.nf)(e,t));const o=(0,_assets_js__WEBPACK_IMPORTED_MODULE_5__.V)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||o})):Promise.resolve(o)}(e,o).then((function(e){const t=o.get("material.color"),s=function K(e){return"icon"===e.type?"multiply":"tint"}(o);return(0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_11__.r)(e,u,t,s,l)})).then((function(e){const t=e.width,s=e.height;return c=Math.max(c,t),h=Math.max(h,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));i.push(t)}else{var m;let e=u;"icon"===o.type&&p&&s&&(e=u*(n/p));const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(m=t.symbolConfig)?void 0:m.isTall)||"object"===o.type&&function G(e){const t=e.depth,s=e.height,r=e.width;return r&&t&&s&&r===t&&r<s}(o);c=Math.max(c,r?20:e),h=Math.max(h,e),i.push(Promise.resolve(function J(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,o=0,a=t,n=t;switch(e.resource&&e.resource.primitive||_IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_4__.SI){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:H(e,0),stroke:C(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[s,o]},{command:"L",values:[a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,n]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*a,o]},{command:"L",values:[.5*a,n]},{command:"M",values:[s,.5*n]},{command:"L",values:[a,.5*n]}]},stroke:T(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,o]},{command:"L",values:[a,n]},{command:"M",values:[a,o]},{command:"L",values:[s,n]}]},stroke:T(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*n]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,.5*n]},{command:"L",values:[.5*a,n]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)})}break}case"object":switch(e.resource&&e.resource.primitive||_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_6__.SI){case"cone":{const o=F(H(e,0),H(e,-.6),s?20:t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.TE)(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o});break}case"inverted-cone":{const s=H(e,0),o=F(s,H(e,-.6),t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.DY)(t);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:s});break}case"cube":{const o=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.Pc)(t,s);r.push({shape:o[0],fill:H(e,0)}),r.push({shape:o[1],fill:H(e,-.3)}),r.push({shape:o[2],fill:H(e,-.5)});break}case"cylinder":{const o=F(H(e,0),H(e,-.6),s?20:t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.EB)(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o}),r.push({shape:a[2],fill:H(e,0)});break}case"diamond":{const s=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.XX)(t);r.push({shape:s[0],fill:H(e,-.3)}),r.push({shape:s[1],fill:H(e,0)}),r.push({shape:s[2],fill:H(e,-.3)}),r.push({shape:s[3],fill:H(e,-.7)});break}case"sphere":{const s=F(H(e,0),H(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.tp)(t);r.push({shape:s[0],fill:H(e,-.3)}),r.push({shape:s[1],fill:H(e,0)}),r.push({shape:s[2],fill:H(e,-.6)});break}}}return r}(o,e,r)))}})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.as)(i).then((function(e){const s=[];return e.forEach((function(e){e.value?s.push(e.value):e.error&&E.warn("error while building swatchInfo!",e.error)})),(0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_11__.w)(s,[c,h],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function X(e,t){if(0===e.symbolLayers.length)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));let s=null;switch(e.type){case"point-3d":s=Q(e,t);break;case"line-3d":s=function V(e,t){const s=e.symbolLayers,r=[],o=(0,_utils_js__WEBPACK_IMPORTED_MODULE_9__.YW)(e),l=t&&t.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(t.size):null,n=(t&&t.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(t.maxSize):null)||80;let i,c=0,h=0;return s.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const s=[];switch(e.type){case"line":{const r=B(e,0),o=r&&r.width||0;0===t&&(i=o);const a=Math.min(l||o,n),u=0===t?a:l?a*(o/i):a,p=u>20?2*u:40;h=Math.max(h,u),c=Math.max(c,p),r.width=u,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*h]},{command:"L",values:[c,.5*h]}]},stroke:r});break}case"path":{const t=Math.min(l||U,n),r=H(e,0),i=H(e,-.2),u=$(e,-.4),p=u?{color:u,width:1}:{};if("quad"===e.profile){var o,a;const t=null!=(o=e.width)?o:e.size,l=null!=(a=e.height)?a:e.size,n=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.eb)(t&&l?t/l:1,0===l,0===t),c={...p,join:"bevel"};s.push({shape:n[0],fill:i,stroke:c}),s.push({shape:n[1],fill:i,stroke:c}),s.push({shape:n[2],fill:r,stroke:c})}else s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.JZ.pathSymbol3DLayer[0],fill:i,stroke:p}),s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.JZ.pathSymbol3DLayer[1],fill:r,stroke:p});h=Math.max(h,t),c=h}}r.push(s)})),Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_11__.w)(r,[c,h],{node:t&&t.node,scale:o,opacity:t&&t.opacity}))}(e,t);break;case"polygon-3d":case"mesh-3d":s=async function W(e,s){const r="mesh-3d"===e.type,o=e.symbolLayers,l=s&&s.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(s.size):null,n=s&&s.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__.F2)(s.maxSize):null,i=l||U,c=[];let h=0,u=0,p=!1;for(let a=0;a<o.length;a++){const e=o.getItemAt(a),s=[];if(r&&"fill"!==e.type)continue;const l=_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.JZ.fill[0];switch(e.type){case"fill":{const o=C(e),a=Math.min(i,n||D);h=Math.max(h,a),u=Math.max(u,a),p=!0;let c=H(e,0);const m="pattern"in e&&e.pattern,f=A(e);!r&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.pC)(m)&&"style"===m.type&&"solid"!==m.style&&f&&(c=await N(m,f)),s.push({shape:l,fill:c,stroke:o});break}case"line":{const t={stroke:B(e,0),shape:l};h=Math.max(h,U),u=Math.max(u,U),s.push(t);break}case"extrude":{const t={join:"round",...B(e,-.4)},r=H(e,0),o=H(e,-.2),a=Math.min(i,n||D),l=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.EV)(a);t.width=1,s.push({shape:l[0],fill:o,stroke:t}),s.push({shape:l[1],fill:o,stroke:t}),s.push({shape:l[2],fill:r,stroke:t});const c=U,p=.7*U+.5*a;h=Math.max(h,c),u=Math.max(u,p);break}case"water":{const t=A(e),r=q(t),o=q(t,2),a=q(t,3),l=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_10__.ht)();p=!0,s.push({shape:l[0],fill:r}),s.push({shape:l[1],fill:o}),s.push({shape:l[2],fill:a});const c=Math.min(i,n||D);h=Math.max(h,c),u=Math.max(u,c);break}}c.push(s)}return Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_11__.w)(c,[h,u],{node:s&&s.node,scale:p,opacity:s&&s.opacity}))}(e,t)}return s||Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__.Z("symbolPreview: swatchInfo3D","symbol not supported."))}},59126:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{dc:()=>h,uH:()=>u,TE:()=>n,Pc:()=>p,EB:()=>L,XX:()=>s,EV:()=>m,DY:()=>o,eb:()=>e,tp:()=>l,ht:()=>c,JZ:()=>t});var _Color_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(78745);const t={fill:[{type:"path",path:"M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"}],squareFill:[{type:"path",path:"M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z"}],pathSymbol3DLayer:[{type:"path",path:"M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z"},{type:"circle",cx:-2,cy:10,r:5}],extrudeSymbol3DLayer:[{type:"path",path:"M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z"},{type:"path",path:"M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z"},{type:"path",path:"M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z"}],cone:[{type:"path",path:"M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z"}],tallCone:[{type:"path",path:"M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z"}],invertedCone:[{type:"path",path:"M 0,7 L -8,-8 L 8,-8 Z"},{type:"path",path:"M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z"}],cube:[{type:"path",path:"M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z"},{type:"path",path:"M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z"},{type:"path",path:"M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z"}],tallCube:[{type:"path",path:"M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z"},{type:"path",path:"M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z"},{type:"path",path:"M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z"}],cylinder:[{type:"path",path:"M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:8,ry:2}],tallCylinder:[{type:"path",path:"M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z"},{type:"ellipse",cx:0,cy:-9,rx:3.5,ry:1}],diamond:[{type:"path",path:"M 0,-10 L 10,-1 L -1,1 L 0,-10 Z"},{type:"path",path:"M 0,-10 L -1,1 L -8,-1 L 0,-10 Z"},{type:"path",path:"M -1,1 L 0,10 L -8,-1 L -1,1 Z"},{type:"path",path:"M -1,0 L 0,10 L 10,-1 L -1,1 Z"}],tetrahedron:[{type:"path",path:"M 0,-10 L 10,7 L 0,0 L 0,-10 Z"},{type:"path",path:"M 0,-10 L 0,0 L -8,7 L 0,-10 Z"},{type:"path",path:"M 10,7 L 0,0 L -8,7 L 10,7 Z"}]};function e(a,t,e){let c=22,p=22;a<1?c*=.75:a>1&&(p*=1.25);let o=22,s=22;return t&&e&&(c=p=o=s=0),[{type:"path",path:[{command:"M",values:[o,0]},{command:"L",values:[e?o:.875*o,0]},{command:"L",values:[e?c-.5*o:0,p-.5*s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[o,0]},{command:"L",values:[o,t?0:.125*s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"L",values:[c-.5*o,p-.5*s]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[c-.5*o,p-.5*s]},{command:"L",values:[e?c-.5*o:0,p-.5*s]},{command:"L",values:[e?c-.5*o:0,t?p-.5*s:s]},{command:"L",values:[c-.5*o,t?p-.5*s:s]},{command:"Z",values:[]}]}]}function m(a){const t=22,e=.5*a;return[{type:"path",path:[{command:"M",values:[0,.7*t*.5]},{command:"L",values:[6.6,.7*t]},{command:"L",values:[6.6,.7*t+e]},{command:"L",values:[0,.7*t+e-.7*t*.5]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,.7*t]},{command:"L",values:[6.6,.7*t+e]},{command:"L",values:[t,e]},{command:"L",values:[t,0]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[6.6,0]},{command:"L",values:[t,0]},{command:"L",values:[6.6,.7*t]},{command:"L",values:[0,.7*t*.5]},{command:"Z",values:[]}]}]}function c(){return[{type:"path",path:"M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27"},{type:"path",path:"M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z"},{type:"path",path:"M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z"}]}function p(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const L=t?.35*e:.5*e;return[{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[0,.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[0,a-.5*L]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.5*e,L]},{command:"L",values:[.5*e,a]},{command:"L",values:[e,a-.5*L]},{command:"L",values:[e,.5*L]},{command:"Z",values:[]}]}]}function L(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.5*e,p=.15*e,n=a-p;return[{type:"ellipse",cx:.5*e,cy:n,rx:c,ry:p},{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[0,n]},{command:"L",values:[e,n]},{command:"L",values:[e,p]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*e,cy:p,rx:c,ry:p}]}function n(a,t){let e=t?20:a;const m=t?4:6;e-=e<=22?.5*m:m;const c=.15*e,p=a-c;return[{type:"ellipse",cx:.5*e,cy:p,rx:.5*e,ry:c},{type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,p]},{command:"L",values:[0,p]},{command:"Z",values:[]}]}]}function o(a){let t=a;t-=t<22?3:6;const m=.15*t;return[{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[t,0]},{command:"L",values:[.5*t,a-m]},{command:"Z",values:[]}]},{type:"ellipse",cx:.5*t,cy:0,rx:.5*t,ry:m}]}function s(a){let t=a;const e=a;t-=t<22?2:4;const L=t,n=e,o=Math.floor(a/10)-1||1;return[{type:"path",path:[{command:"M",values:[.45*L,0]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,0]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[0,.5*n-o]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"L",values:[.45*L,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*L,e]},{command:"L",values:[L,.5*n-o]},{command:"L",values:[.45*L-o,.5*n+o]},{command:"Z",values:[]}]}]}function l(a){let e=a;e-=e<22?1:2;return[{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[a,e]},{command:"L",values:[.45*a,.6*e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[.45*a,0]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[0,e]},{command:"Z",values:[]}]},{type:"path",path:[{command:"M",values:[0,e]},{command:"L",values:[.45*a,.6*e]},{command:"L",values:[a,e]},{command:"Z",values:[]}]}]}function u(a,t){return Math.round(Math.min(Math.max(a+255*t*.75,0),255))}function h(t,e){if("type"in t&&("linear"===t.type||"pattern"===t.type))return t;const m=new _Color_js__WEBPACK_IMPORTED_MODULE_0__.Z(t);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__.Z([u(m.r,e),u(m.g,e),u(m.b,e),m.a])}},53714:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>renderUtils_h,r:()=>renderUtils_d});var has=__webpack_require__(95830),Error=__webpack_require__(32656),kernel=__webpack_require__(23838),request=__webpack_require__(36654),colorUtils=__webpack_require__(43019),projector=(__webpack_require__(38836),__webpack_require__(79618)),Color=(__webpack_require__(36544),__webpack_require__(78745)),chunks=(__webpack_require__(40450),__webpack_require__(19401)),mat2d=__webpack_require__(42738),mat2df32=__webpack_require__(87561);let c=0,f=0;const d=(0,has.Z)("android"),y=(0,has.Z)("chrome")||d&&d>=4?"auto":"optimizeLegibility",u={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},p=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let g={},x={};const m={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},w=Math.PI;function k(t,e){const i=t*(w/180);return Math.abs(e*Math.sin(i))+Math.abs(e*Math.cos(i))}function j(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function b(t,e,o,r){if(t){if("circle"===t.type)return(0,chunks.j)("circle",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,chunks.j)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,chunks.j)("rect",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,chunks.j)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const r="string"!=typeof t.path?j(t.path):t.path;return(0,chunks.j)("path",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4",d:r})}if("text"===t.type)return(0,chunks.j)("text",{fill:e,"fill-rule":"evenodd",stroke:o.color,"stroke-width":o.width,"stroke-linecap":o.cap,"stroke-linejoin":o.join,"stroke-dasharray":o.dashArray,"stroke-miterlimit":"4","text-anchor":r.align,"text-decoration":r.decoration,kerning:r.kerning,rotate:r.rotate,"text-rendering":y,"font-style":r.font.style,"font-variant":r.font.variant,"font-weight":r.font.weight,"font-size":r.font.size,"font-family":r.font.family,x:t.x,y:t.y},t.text)}return null}function v(t){const i={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const e="patternId-"+ ++c;i.fill=`url(#${e})`,i.pattern={id:e,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const o="linearGradientId-"+ ++f;i.fill=`url(#${o})`,i.linearGradient={id:o,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new Color.Z(t.color).toString()})))}}else if(t){const o=new Color.Z(t);i.fill=o.toString()}return i}function A(t){const i={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(i.width=t.width),t.cap&&(i.cap=t.cap),t.join&&(i.join=t.join.toString()),t.color&&(i.color=new Color.Z(t.color).toString()),t.style)){let e=null;if(t.style in m&&(e=m[t.style]),Array.isArray(e)){e=e.slice(0);for(let i=0;i<e.length;++i)e[i]*=t.width;if("butt"!==t.cap){for(let i=0;i<e.length;i+=2)e[i]-=t.width,e[i]<1&&(e[i]=1);for(let i=1;i<e.length;i+=2)e[i]+=t.width}e=e.join(",")}i.dashArray=e}return i}function M(t,e){const i={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(i.align=t.align,i.decoration=t.decoration,i.kerning=t.kerning?"auto":"0",i.rotate=t.rotated?"90":"0",i.font.style=e.style||"normal",i.font.variant=e.variant||"normal",i.font.weight=e.weight||"normal",i.font.size=e.size&&e.size.toString()||"10pt",i.font.family=e.family||"serif"),i}function I(t){const{pattern:e,linearGradient:o}=t;if(e)return(0,chunks.j)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,chunks.j)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(o){const t=o.stops.map(((t,e)=>(0,chunks.j)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return(0,chunks.j)("linearGradient",{id:o.id,gradientUnits:"userSpaceOnUse",x1:o.x1,y1:o.y1,x2:o.x2,y2:o.y2},t)}return null}function N(t,e,i){return(0,mat2d.t)(t,(0,mat2d.i)(t),[e,i])}function z(t,e,i,o,r){return(0,mat2d.s)(t,(0,mat2d.i)(t),[e,i]),t[4]=t[4]*e-o*e+o,t[5]=t[5]*i-r*i+r,t}function S(t,e){g&&"left"in g?(g.left>t&&(g.left=t),g.right<t&&(g.right=t),g.top>e&&(g.top=e),g.bottom<e&&(g.bottom=e)):g={left:t,bottom:e,right:t,top:e}}function G(t){const e=t.args,i=e.length;let o;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(o=0;o<i;o+=2)S(e[o],e[o+1]);x.x=e[i-2],x.y=e[i-1];break;case"H":for(o=0;o<i;++o)S(e[o],x.y);x.x=e[i-1];break;case"V":for(o=0;o<i;++o)S(x.x,e[o]);x.y=e[i-1];break;case"m":{let t=0;"x"in x||(S(x.x=e[0],x.y=e[1]),t=2);for(o=t;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break}case"l":case"t":for(o=0;o<i;o+=2)S(x.x+=e[o],x.y+=e[o+1]);break;case"h":for(o=0;o<i;++o)S(x.x+=e[o],x.y);break;case"v":for(o=0;o<i;++o)S(x.x,x.y+=e[o]);break;case"c":for(o=0;o<i;o+=6)S(x.x+e[o],x.y+e[o+1]),S(x.x+e[o+2],x.y+e[o+3]),S(x.x+=e[o+4],x.y+=e[o+5]);break;case"s":case"q":for(o=0;o<i;o+=4)S(x.x+e[o],x.y+e[o+1]),S(x.x+=e[o+2],x.y+=e[o+3]);break;case"A":for(o=0;o<i;o+=7)S(e[o+5],e[o+6]);x.x=e[i-2],x.y=e[i-1];break;case"a":for(o=0;o<i;o+=7)S(x.x+=e[o+5],x.y+=e[o+6])}}function E(t,e,i){const o=u[t.toLowerCase()];let r;"number"==typeof o&&(o?e.length>=o&&(r={action:t,args:e.slice(0,e.length-e.length%o)},i.push(r),G(r)):(r={action:t,args:[]},i.push(r),G(r)))}function U(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const i=function T(t){const e=("string"!=typeof t.path?j(t.path):t.path).match(p),i=[];if(g={},x={},!e)return null;let o="",r=[];const n=e.length;for(let a=0;a<n;++a){const t=e[a],n=parseFloat(t);isNaN(n)?(o&&E(o,r,i),r=[],o=t):r.push(n)}E(o,r,i);const s={x:0,y:0,width:0,height:0};return g&&"left"in g&&(s.x=g.left,s.y=g.top,s.width=g.right-g.left,s.height=g.bottom-g.top),s}(t);e.x=i.x,e.y=i.y,e.width=i.width,e.height=i.height}return e}function F(t){const e={x:0,y:0,width:0,height:0};let i=null,o=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const n of t)i?(i.x=Math.min(i.x,n.x),i.y=Math.min(i.y,n.y),o=Math.max(o,n.x+n.width),r=Math.max(r,n.y+n.height)):(i=e,i.x=n.x,i.y=n.y,o=n.x+n.width,r=n.y+n.height);return i&&(i.width=o-i.x,i.height=r-i.y),i}function L(t,e,i,r,n,s,a,h){const c=(a&&s?k(s,e):e)/2,f=(a&&s?k(s,i):i)/2,d=t.width+r,y=t.height+r,u=(0,mat2df32.c)(),p=(0,mat2df32.c)();let g=!1;if(n&&0!==d&&0!==y){const t=d/y,r=e>i?e:i;let n=1,s=1;isNaN(r)||(t>1?(n=r/d,s=r/t/y):(s=r/y,n=r*t/d)),(0,mat2d.m)(p,p,z(u,n,s,c,f)),g=!0}const x=t.x+(d-r)/2,m=t.y+(y-r)/2;if((0,mat2d.m)(p,p,N(u,c-x,f-m)),!g&&(d>e||y>i)){const t=d/e>y/i,r=(t?e:i)/(t?d:y);(0,mat2d.m)(p,p,z(u,r,r,x,m))}return s&&(0,mat2d.m)(p,p,function $(t,e,i,o){const r=e%360*Math.PI/180;(0,mat2d.r)(t,(0,mat2d.i)(t),r);const s=Math.cos(r),l=Math.sin(r),h=t[4],c=t[5];return t[4]=h*s-c*l+o*l-i*s+i,t[5]=c*s+h*l-i*l-o*s+o,t}(u,s,x,m)),h&&(0,mat2d.m)(p,p,N(u,h[0],h[1])),`matrix(${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]})`}function C(t,e,o,r){const n=[],s=[];for(const a of t){const t=[],l=[];let h=0,c=0,f=0;for(const e of a){const{shape:i,fill:o,stroke:r,font:s,offset:a}=e;h+=r&&r.width||0;const d=v(o),y=A(r),u="text"===i.type?M(i,s):null;n.push(I(d)),t.push(b(i,d.fill,y,u)),l.push(U(i)),a&&(c+=a[0],f+=a[1])}const d=L(F(l),e,o,h,null==r?void 0:r.scale,null==r?void 0:r.rotation,null==r?void 0:r.useRotationSize,[c,f]);s.push((0,chunks.j)("g",{transform:d},t))}return null!=r&&r.useRotationSize&&null!=r&&r.rotation&&(e=k(null==r?void 0:r.rotation,e),o=k(null==r?void 0:r.rotation,o)),(0,chunks.j)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:o},(0,chunks.j)("defs",null,n),s)}const s=(0,projector.E)();function renderUtils_h(t,e,i){const n=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=i&&i.node||document.createElement("div");return null!=i.opacity&&(o.style.opacity=i.opacity.toString()),s.append(o,C.bind(null,t,n,r,i)),o}function renderUtils_u(t,e,i,n,a){switch(a){case"multiply":t[e+0]*=i[0],t[e+1]*=i[1],t[e+2]*=i[2],t[e+3]*=i[3];break;default:{const a=(0,colorUtils._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});a.h=n.h,a.s=n.s,a.v=a.v/100*n.v;const c=(0,colorUtils.xr)(a);t[e+0]=c.r,t[e+1]=c.g,t[e+2]=c.b,t[e+3]*=i[3];break}}}function renderUtils_d(e,n,o,a,c){return function renderUtils_m(t,i,r){return t?(0,request.default)(t,{responseType:"image"}).then((t=>{const e=t.data,n=e.width,o=e.height,a=n/o;let c=i;if(r){const t=Math.max(n,o);c=Math.min(c,t)}return{image:e,width:a<=1?Math.ceil(c*a):c,height:a<=1?c:Math.ceil(c/a)}})):Promise.reject(new Error.Z("renderUtils: imageDataSize","href not provided."))}(e,n,c).then((c=>{const s=c.width?c.width:n,h=c.height?c.height:n;if(c.image&&function renderUtils_g(t,e){return!(!t||"ignore"===e||"multiply"===e&&255===t.r&&255===t.g&&255===t.b&&1===t.a)}(o,a)){let i=c.image.width,n=c.image.height;((0,has.Z)("edge")||(0,has.Z)("ie"))&&/\.svg$/i.test(e)&&(i-=1,n-=1);const m=function l(t,e){t=Math.ceil(t),e=Math.ceil(e);const i=document.createElement("canvas");i.width=t,i.height=e,i.style.width=t+"px",i.style.height=e+"px";const n=i.getContext("2d");return n.clearRect(0,0,t,e),n}(s,h);m.drawImage(c.image,0,0,i,n,0,0,s,h);const g=m.getImageData(0,0,s,h),d=[o.r/255,o.g/255,o.b/255,o.a],p=(0,colorUtils._Y)(o);for(let t=0;t<g.data.length;t+=4)renderUtils_u(g.data,t,d,p,a);m.putImageData(g,0,0),e=m.canvas.toDataURL("image/png")}else{const t=kernel.id&&kernel.id.findCredential(e);if(t&&t.token){const i=-1===e.indexOf("?")?"?":"&";e=`${e}${i}token=${t.token}`}}return{url:e,width:s,height:h}})).catch((function(){return{url:e,width:n,height:n}}))}}}]);
//# sourceMappingURL=4068.075e1ed9.iframe.bundle.js.map