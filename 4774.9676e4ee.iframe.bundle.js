(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[4774],{52606:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vF:()=>b,_D:()=>y,Qp:()=>R,zD:()=>h,tB:()=>g,nF:()=>d,VO:()=>M,kr:()=>j});var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32656),_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27780),_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41241),_geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(61106),_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(52937),_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(36348),__webpack_require__(93533)),_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(28449);const u=5e-4,m=function(e,n){const t=(e.isWGS84||e.isWebMercator)&&(n.isWGS84||n.isWebMercator);return!(e.equals(n)||t)};async function h(){if((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)()||!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.Gb)())return null;await(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.zD)()}function y(n,t,o){if(!m(n.spatialReference,t))return null;if(!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");return o?(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.rS)(t,n.spatialReference,n):(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.rS)(n.spatialReference,t,n)}function M(n,o,r,s=null){if(n.spatialReference.equals(o))return n;const l=m(n.spatialReference,o);if(l&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const c=r.center,u=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__.Z({xmin:c.x-n.x/2,xmax:c.x+n.x/2,ymin:c.y-n.y/2,ymax:c.y+n.y/2,spatialReference:n.spatialReference}),p=l?(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.iV)(u,o,s):(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.iV)(u,o);return null==p?null:{x:p.xmax-p.xmin,y:p.ymax-p.ymin}}function w(e,n=.01){return(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__.c9)(e)?n/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__.c9)(e):0}function d(o,i,r=null,s=!0){const l=o.spatialReference;if(l.equals(i))return o;const c=m(l,i);if(c&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");const p=c?(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.iV)(o,i,r):(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.iV)(o,i);if(p&&s&&i.isGeographic){var f,h;const[e,t]=l.isWebMercator?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(l).origin:null!=(f=null==(h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(l))?void 0:h.valid)?f:[],i=w(l);i&&null!=e&&null!=t&&(Math.abs(o.x-e)<i&&Math.abs(180-p.x)<u?p.x-=360:Math.abs(o.x-t)<i&&Math.abs(180+p.x)<u&&(p.x+=360))}return p}function g(i,r,s=null,l=!0){var c,p,f,h;const y=i.spatialReference;if(y.equals(r))return i;const M=m(y,r);if(M&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("rasterprojectionhelper-projectExtent","projection engine is not loaded");const g=M?(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.iV)(i,r,s):(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.iV)(i,r);let[R,j]=null!=(c=null==(p=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(y))?void 0:p.origin)?c:[];if(g&&l&&y.isWebMercator&&r.isGeographic&&null!=R&&null!=j){const e=.001,n=1e3;if(Math.abs(i.xmin-R)<e&&Math.abs(j-i.xmax)>n&&Math.abs(180-g.xmax)<u){g.xmin=-180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmax,i.ymin,y)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmax,(i.ymin+i.ymax)/2,y)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmax,i.ymax,y));const n=e.map((e=>d(e,r,s))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));g.xmax=Math.max.apply(null,n)}if(Math.abs(i.xmax-j)<e&&Math.abs(R-i.xmin)>n&&Math.abs(180+g.xmin)<u){g.xmax=180;const e=[];e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmin,i.ymin,y)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmin,(i.ymin+i.ymax)/2,y)),e.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z(i.xmin,i.ymax,y));const n=e.map((e=>d(e,r,s))).filter((e=>!isNaN(null==e?void 0:e.x))).map((e=>e.x));g.xmin=Math.min.apply(null,n)}}[R,j]=r.isWebMercator?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(r).origin:null!=(f=null==(h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(r))?void 0:h.valid)?f:[];const b=w(r);return b&&null!=R&&null!=j&&(Math.abs(g.xmin-R)<b&&(g.xmin=R),Math.abs(g.xmax-j)<b&&(g.xmax=j)),g}function R(t,i,r,s=null,l=null,c=!1,x=[32,32]){var u,h;if(m(t.spatialReference,i.spatialReference)&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.kR)())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__.Z("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(t&&i&&r))return null;const{xmin:y,ymin:M,xmax:w,ymax:g}=t,R=t.spatialReference,j=i.spatialReference,[b,v]=null!=(u=null==(h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.C5)(R))?void 0:h.valid)?u:[],N={x:x[0]*r.x,y:x[1]*r.y},S={cols:Math.ceil((w-y)/N.x-.1)+1,rows:Math.ceil((g-M)/N.y-.1)+1},z=N.x,W=N.y,G=[];let P,L=!1;for(let e=0;e<S.cols;e++){const n=[];for(let t=0;t<S.rows;t++){let r=d(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z({x:y+z*e,y:g-W*t,spatialReference:R}),j,s);l&&(r=l.inverseTransform(r)),n.push(r),e>0&&c&&r&&P[t]&&null!=b&&r.x<P[t].x&&(r.x+=v-b),r?(G.push((r.x-i.xmin)/(i.xmax-i.xmin)),G.push((i.ymax-r.y)/(i.ymax-i.ymin))):(G.push(NaN),G.push(NaN),L=!0)}P=n}const q=function(e,n){const t=(e[0]+e[4]+e[4*n.cols]+e[4*n.cols+4])/4,o=(e[1]+e[5]+e[4*n.rows+1]+e[4*n.rows+5])/4;return[Math.abs(t-e[2*n.rows+2]),Math.abs(o-e[2*n.rows+3])]}(G,S),A=new Float32Array((S.cols-1)*(S.rows-1)*2*6),E=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),F=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<S.cols-1;e++){for(let n=0;n<S.rows-1;n++){let t=e*S.rows*2+2*n;const o=G[t],i=G[t+1],r=G[t+2],a=G[t+3];t+=2*S.rows;const s=G[t],l=G[t+1],c=G[t+2],x=G[t+3];let u=0,m=12*(n*(S.cols-1)+e);for(let e=0;e<3;e++)A[m++]=E[u++]*o+E[u++]*r+E[u++]*c;u=0;for(let e=0;e<3;e++)A[m++]=E[u++]*i+E[u++]*a+E[u++]*x;u=0;for(let e=0;e<3;e++)A[m++]=F[u++]*o+F[u++]*s+F[u++]*c;u=0;for(let e=0;e<3;e++)A[m++]=F[u++]*i+F[u++]*l+F[u++]*x}if(L)for(let e=0;e<A.length;e++)isNaN(A[e])&&(A[e]=-1)}return{offsets:G,error:q,coefficients:A,spacing:x,size:[S.cols-1,S.rows-1]}}function j(e,n,t){const i=Math.log(e.x/n.pixelSize.x)/Math.LN2,r=Math.log(e.y/n.pixelSize.y)/Math.LN2,a=n.storageInfo.maximumPyramidLevel||0;let s="down"===t?Math.floor(Math.min(i,r)):"up"===t?Math.ceil(Math.max(i,r)):Math.round((i+r)/2),l=!1;s<0?s=0:s>a&&(l=s>a+3,s=a);const c=2**s;return{pyramidLevel:s,pyramidResolution:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z({x:c*n.nativePixelSize.x,y:c*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:l}}function b(e,n,t=512,i=!0){const{extent:a,spatialReference:s,pixelSize:l}=e,c=M(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z({x:l.x,y:l.y,spatialReference:s}),n,a);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const x=(c.x+c.y)/2,u=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__.c9)(n),m=x*u*96*39.37,p=n.isGeographic?512/t*295828763.7958547:512/t*591657527.591555;let f=!1;const h=g(a,n);i&&(n.isGeographic||n.isWebMercator)&&(f=h.xmin*h.xmax<0);let y,w=m;const d=1.001;if(f){w=p;const e=.29858214164761665,n=e*(96*u*39.37);y=M(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__.Z({x:e,y:e,spatialReference:{wkid:3857}}),s,h),y.x*=w/n,y.y*=w/n}else{y={x:l.x,y:l.y};const n=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let t=0;for(;w<p*(d/2)&&t<n;)t++,w*=2,y.x*=2,y.y*=2;Math.max(w,p)/Math.min(w,p)<=d&&(w=p)}const R=[w],j=[{x:y.x,y:y.y}],v=Math.min(70.5310735,m)/d;for(;w>=v;)w/=2,y.x/=2,y.y/=2,R.push(w),j.push({x:y.x,y:y.y});return{projectedPixelSize:c,scales:R,srcResolutions:j,isCustomTilingScheme:!f}}},84774:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(56140),_core_maybe_js__WEBPACK_IMPORTED_MODULE_16__=(__webpack_require__(95830),__webpack_require__(59472)),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(80621)),_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12421),_terrain_RasterTile_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(40418),_LayerView3D_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9355),_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(19131),_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(48164),_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(37694),_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(43835);let p=class extends((0,_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_15__.R)((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_9__.yc)((0,_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_12__.r)((0,_LayerView3D_js__WEBPACK_IMPORTED_MODULE_11__.A)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__.Z))))){constructor(){super(...arguments),this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage();const e=this.updateFullExtent();this.addResolvingPromise(e);const r=(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_8__.LR)(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this.view.basemapTerrain.tilingScheme,{tileInfo:r}=this.layer,t=["png","png24","png32","jpg","mixed"].indexOf(r.format)>-1&&e.compatibleWith(r);this.isAlignedMapTile=t;const i=t?r:e.toTileInfo();this._set("tileInfo",i),this.updatingHandles.add(this,"layer.renderer",(()=>this.refresh())),this.updatingHandles.add(this,"layer.interpolation",(()=>this.refresh())),this.updatingHandles.add(this,"layer.bandIds",(()=>this.refresh())),this.updatingHandles.add(this,"layer.multidimensionalDefinition",(()=>this.refresh()))}));this.addResolvingPromise(r)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),r=e.getContext("2d"),[t,i]=this.tileInfo.size;return e.width=t,e.height=i,r.clearRect(0,0,t,i),r.getImageData(0,0,t,i)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,r=this.layer.tileInfo.lods,t=e[0].scale,i=r[r.length-1].scale;return this.levelRangeFromScaleRange(t,i)}async fetchTile(e,t,i,s){const a=this.tileInfo,l=this.layer.symbolizer.canRenderInWebGL,n={tileInfo:a,requestRawData:l,signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_16__.Wg)(s.signal),requestAsImageElement:this.isAlignedMapTile},m=await this.layer.fetchTile(e,t,i,n);if(m instanceof HTMLImageElement)return m;let d=m&&m.pixelBlock;if(!d)return this._blankTile;if(!l&&(d=await this.layer.applyRenderer(m),null==d))return this._blankTile;const h=new _terrain_RasterTile_js__WEBPACK_IMPORTED_MODULE_10__.Z([e,t,i],d,a.size[0],a.size[1]);return l&&(h.symbolizerRenderer=this.layer.symbolizer.rendererJSON,h.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),h.transformGrid=m.transformGrid),h.bandIds=this.layer.bandIds,h}_getSymbolizerOptions(e){const r=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:r,y:r},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,r){return(0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__.K)(e,r,this.view)}refresh(){this.emit("data-changed")}async doRefresh(e){this.suspended||this.emit("data-changed")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"_blankTile",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"imageFormatIsOpaque",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"hasMixedImageFormats",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],p.prototype,"dataLevelRange",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.3d.layers.ImageryTileLayerView3D")],p);const __WEBPACK_DEFAULT_EXPORT__=p},43835:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>p});var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(56140),_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__(95830),__webpack_require__(59472)),_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(87566),_core_Error_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32656),_Graphic_js__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(15988)),_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(52606),_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(21707);const p=p=>{let u=class extends p{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,r){const{layer:i}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:a}=i,n=(0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_11__.V)(i,r);if(!a||!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__.pC)(n))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const p=[],{value:u}=await i.identify(e);if(u){var f,m;const e=u.join(", "),t={ObjectId:0},r="Raster.ServicePixelValue";t[r]=this._formatAttributeValue(e,r);const o=null==(f=i.rasterInfo)||null==(m=f.attributeTable)?void 0:m.features;if(o&&o.length>0){const r=o.filter((t=>{const r=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(r)===e}));if(r.length>0){const e=r[0];if(e)for(const r in e.attributes)if(e.attributes.hasOwnProperty(r)){const i=this._rasterFieldPrefix+r;t[i]=this._formatAttributeValue(e.attributes[r],i)}}}const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_9__.Z(this.fullExtent.clone(),null,t);a.layer=i,a.sourceLayer=a.layer,p.push(a)}return p}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const r=(0,_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__._D)(this.layer.fullExtent,this.view.spatialReference,!1),i=(0,_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__.tB)(this.layer.fullExtent,this.view.spatialReference,r);return null==i&&(t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__.Z("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=(0,_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_10__._D)(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_")||(i=e,0)))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],u.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],u.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)()],u.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.Cb)({readOnly:!0})],u.prototype,"hasTilingEffects",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.j)("esri.views.layers.ImageryTileLayerView")],u),u}},21707:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>d,e:()=>i});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59472),_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4665);async function i(i,d=i.popupTemplate){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(d))return[];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return["*"];const r=s?await(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.CH)(i):[],m=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.Q0)(i.fields,[...o,...r]);return a&&m.push(a),m&&u&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__.cT)(i.fields,p)&&-1===m.indexOf(p)&&m.push(p)})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(l)&&l.defaultPopupTemplateEnabled&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}},37694:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>a});var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(59472),_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52937),_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(36348),__webpack_require__(93533));function a(t,i,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__.Z){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.pC)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.c9)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.c9)(a.spatialReference):i*r}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_0__.Z}}]);
//# sourceMappingURL=4774.9676e4ee.iframe.bundle.js.map