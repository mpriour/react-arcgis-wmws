(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[1342],{51342:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Opacity:()=>t});__webpack_require__(95830),__webpack_require__(9037),__webpack_require__(23660);var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8634);__webpack_require__(84570);class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:l}=e,{amount:o}=r,h=a.gl,n=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,n),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(h.COLOR_BUFFER_BIT),l.blitTexture(a,n,9728,o)}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__.Z(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}))}}}}]);
//# sourceMappingURL=1342.53ade6aa.iframe.bundle.js.map