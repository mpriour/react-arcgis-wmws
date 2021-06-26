(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[8280],{8280:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(56140),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_Collection_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(28293)),_Graphic_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15988),_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(48164),_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(97422),_graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(24989),_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(81558);const c={remove(){},pause(){},resume(){}};let n=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__.y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__.Z)){initialize(){this.graphicsView=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_12__.Z(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(e,i){return this.suspended||!this.graphicsView?Promise.resolve(null):this.graphicsView.hitTest(e,i)}async fetchPopupFeatures(e){if(this.graphicsView)return this.graphicsView.searchFeatures(e).then((e=>e.filter((e=>!!e.popupTemplate))))}update(e){this.graphicsView.processUpdate(e)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let i;return"number"==typeof e?i=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_9__.Z?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_8__.Z.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray()),i=i.filter((e=>null!=e)),i.length?(this.graphicsView.addHighlight(i),{remove:()=>this.graphicsView.removeHighlight(i)}):c}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],n.prototype,"graphicsView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],n.prototype,"updating",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.2d.layers.GraphicsLayerView2D")],n);const __WEBPACK_DEFAULT_EXPORT__=n},81558:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>LayerView2D_l});var tslib_es6=__webpack_require__(56140),property=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),subclass=__webpack_require__(87566),Collection=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(28293)),collectionUtils=__webpack_require__(32105),watchUtils=__webpack_require__(80621),JSONSupport=__webpack_require__(58385);let e=class extends JSONSupport.wq{};e=(0,tslib_es6._)([(0,subclass.j)("esri.views.layers.support.ClipArea")],e);const ClipArea=e;var s;let i=s=class extends ClipArea{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,tslib_es6._)([(0,property.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],i.prototype,"version",null),i=s=(0,tslib_es6._)([(0,subclass.j)("esri.views.layers.support.ClipRect")],i);const ClipRect=i;var y,Container=__webpack_require__(17149),Geometry=__webpack_require__(39718),Extent=__webpack_require__(52937),Polygon=__webpack_require__(53817),jsonUtils=__webpack_require__(56885);__webpack_require__(36348);const c={base:Geometry.Z,key:"type",typeMap:{extent:Extent.Z,polygon:Polygon.Z}};let n=y=class extends ClipArea{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};(0,tslib_es6._)([(0,property.Cb)({types:c,json:{read:jsonUtils.im,write:!0}})],n.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],n.prototype,"version",null),n=y=(0,tslib_es6._)([(0,subclass.j)("esri.views.layers.support.Geometry")],n);const support_Geometry=n;let Path_e=class extends ClipArea{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,tslib_es6._)([(0,property.Cb)({type:[[[Number]]],json:{write:!0}})],Path_e.prototype,"path",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],Path_e.prototype,"version",null),Path_e=(0,tslib_es6._)([(0,subclass.j)("esri.views.layers.support.Path")],Path_e);const Path=Path_e,LayerView2D_c=Collection.Z.ofType({key:"type",base:ClipArea,typeMap:{rect:ClipRect,path:Path,geometry:support_Geometry}}),LayerView2D_l=i=>{let a=class extends i{constructor(){super(...arguments),this.clips=new LayerView2D_c,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var t;this.container||(this.container=new Container.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,watchUtils.S1)(this,"suspended",(t=>{this.container&&(this.container.visible=!t),this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),!0),(0,watchUtils.S1)(this,["layer.opacity","container"],(()=>{var t,e;this.container&&(this.container.opacity=null!=(t=null==(e=this.layer)?void 0:e.opacity)?t:1)}),!0),(0,watchUtils.S1)(this,["layer.blendMode"],(t=>{this.container&&(this.container.blendMode=t)}),!0),(0,watchUtils.S1)(this,["layer.effect"],(t=>{this.container&&(this.container.effect=t)}),!0),this.clips.on("change",(()=>{this.container.clips=this.clips,this.notifyChange("clips")}))]),null!=(t=this.view)&&t.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{})):this.when().then((()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)}),(()=>{}))}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(t){let e=!0;const s=this.layer,i=s.minScale,r=s.maxScale;if(null!=i&&null!=r){let s=!i,o=!r;!s&&t<=i&&(s=!0),!o&&t>=r&&(o=!0),e=s&&o}return e}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,tslib_es6._)([(0,property.Cb)({type:LayerView2D_c,set(t){const e=(0,collectionUtils.Z)(t,this._get("clips"),LayerView2D_c);this._set("clips",e)}})],a.prototype,"clips",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"moving",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"attached",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"container",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],a.prototype,"updateParameters",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"updating",null),(0,tslib_es6._)([(0,property.Cb)()],a.prototype,"view",void 0),a=(0,tslib_es6._)([(0,subclass.j)("esri.views.2d.layers.LayerView2D")],a),a}},24989:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31514),_BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61343);class i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__.Z{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.jx.MAP&&this._renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.jx.HIGHLIGHT&&this._renderHighlight(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}const __WEBPACK_DEFAULT_EXPORT__=i}}]);
//# sourceMappingURL=8280.c3efa884.iframe.bundle.js.map