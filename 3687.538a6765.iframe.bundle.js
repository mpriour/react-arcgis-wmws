(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[3687],{93687:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>SceneLayer});var tslib_es6=__webpack_require__(56140),maybe=(__webpack_require__(95830),__webpack_require__(59472)),Logger=__webpack_require__(36544),utils=(__webpack_require__(68055),__webpack_require__(65575)),property=__webpack_require__(79881),reader=__webpack_require__(30590),subclass=__webpack_require__(87566),Error=__webpack_require__(32656),urlUtils=__webpack_require__(10923),promiseUtils=(__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(39105)),fieldUtils=__webpack_require__(4665),PopupTemplate=__webpack_require__(58484),request=__webpack_require__(36654),Layer=__webpack_require__(56700),MultiOriginJSONSupport=__webpack_require__(43072),watchUtils=__webpack_require__(80621),commonProperties=__webpack_require__(18152),OperationalLayer=__webpack_require__(78910),types=(__webpack_require__(34341),__webpack_require__(38474),__webpack_require__(42952),__webpack_require__(43925),__webpack_require__(3642),__webpack_require__(57415),__webpack_require__(4037),__webpack_require__(89772)),FieldsIndex=(__webpack_require__(142),__webpack_require__(61121)),ArcGISService=__webpack_require__(48899),PortalLayer=__webpack_require__(33716),ScaleRangeLayer=__webpack_require__(10113),FeatureReduction=__webpack_require__(59386),LabelClass=__webpack_require__(26360),FeatureReductionSelection=__webpack_require__(52794),fieldProperties=__webpack_require__(83236),labelingInfo=__webpack_require__(68510),LayerFloorInfo=__webpack_require__(10083),styleUtils=__webpack_require__(79663),popupUtils=__webpack_require__(43551),Query=__webpack_require__(31518),capabilities=__webpack_require__(81421),I3SLayerDefinitions=__webpack_require__(54209),SceneService=__webpack_require__(54213),FetchAssociatedFeatureLayer=__webpack_require__(59930),JSONSupport=__webpack_require__(58385);let s=class extends JSONSupport.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=(0,tslib_es6._)([(0,subclass.j)("esri.layers.support.RangeInfo")],s);const RangeInfo=s,z=["3DObject","Point"],Z=Logger.Z.getLogger("esri.layers.SceneLayer"),B=(0,fieldProperties.v)();let J=class extends((0,SceneService.V)((0,ArcGISService.Y)((0,OperationalLayer.q)((0,PortalLayer.I)((0,ScaleRangeLayer.M)((0,MultiOriginJSONSupport.R)(Layer.Z))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.editingEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get fieldsIndex(){return new FieldsIndex.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:I3SLayerDefinitions.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return X[this.profile]||"mesh"}set renderer(e){(0,fieldUtils.YN)(e,this.fields),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,maybe.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:capabilities.C,{query:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsUploadWithItemId:i},data:{supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsEditing:l,supportsUpdate:d}}=e,y=e.operations.supportsChangeTracking;return{query:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:s,supportsGeometryUpdate:!1,supportsUploadWithItemId:i},data:{supportsZ:a,supportsM:n,isVersioned:p},operations:{supportsEditing:l&&y,supportsAdd:!1,supportsDelete:!1,supportsUpdate:d&&y}}}get defaultPopupTemplate(){return(0,maybe.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,maybe.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&H[r]?H[r]:(Z.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const r=(0,maybe.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils.r9).then((()=>this._fetchService(r))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,r),this._setAssociatedFeatureLayer(r)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,styleUtils.y)(this,{origin:"service"},r))).then((()=>(0,fieldUtils.YN)(this.renderer,this.fields)));return this.addResolvingPromise(o),Promise.resolve(this)}createQuery(){const e=new Query.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(Z.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,popupUtils.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,maybe.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,maybe.Wi)(this.associatedLayer))throw new Error.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new Error.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new Error.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new Error.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const e=(0,urlUtils.v_)(this.parsedUrl.path,o.href);return(0,request.default)(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new Error.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const o=await __webpack_require__.e(791).then(__webpack_require__.bind(__webpack_require__,20791));if(await this.load(),(0,maybe.Wi)(this.associatedLayer))throw new Error.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),o.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===z.indexOf(e.layerType))throw new Error.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new Error.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function t(e,t){let r=!1,o=!1;if(null==e)r=!0,o=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,o=s;break;case"vertex-reference-frame":r=!0,o=!s;break;default:r=!1}}if(!r)throw new Error.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!o)throw new Error.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new Error.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const r=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),o=!!((0,maybe.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),s={supportsLabelingInfo:r,supportsRenderer:r,supportsPopupTemplate:r||o,supportsLayerQuery:o};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,maybe.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,maybe.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,utils.vw)(this);for(let r=0;r<e.length;r++){const o=e[r];this._buddyIsMoreImportant(o)&&(t.setDefaultOrigin(this.associatedLayer.originOf(o)),t.set(o,this.associatedLayer[o]),t.setDefaultOrigin("user"))}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new FetchAssociatedFeatureLayer.W(this.parsedUrl,this.portalItem,e);try{this.associatedLayer=await t.fetch()}catch(r){(0,promiseUtils.D_)(r)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){(0,watchUtils.tH)(this,["popupTemplate","popupEnabled"],(()=>this.popupEnabled&&null!=this.popupTemplate)).then((()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?Z.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):Z.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}))}_buddyIsMoreImportant(e){if((0,maybe.Wi)(this.associatedLayer))return!1;const t=this.originIdOf(e),o=this.associatedLayer.originIdOf(e);return null!=o&&o<=2?null==t||t<2:null!=o&&o<=3&&(null==t||t<3)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&Z.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&Z.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,tslib_es6._)([(0,property.Cb)({types:{key:"type",base:FeatureReduction.Z,typeMap:{selection:FeatureReductionSelection.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],J.prototype,"featureReduction",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[RangeInfo],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],J.prototype,"rangeInfos",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1}})],J.prototype,"associatedLayer",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["show","hide"]})],J.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["ArcGISSceneServiceLayer"]})],J.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1},readOnly:!0})],J.prototype,"type",void 0),(0,tslib_es6._)([(0,property.Cb)({...B.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],J.prototype,"fields",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property.Cb)({type:LayerFloorInfo.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],J.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property.Cb)(B.outFields)],J.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property.Cb)({type:I3SLayerDefinitions.U4,readOnly:!0,json:{read:!1}})],J.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,reader.r)("service","nodePages",["nodePages","pointNodePages"])],J.prototype,"readNodePages",null),(0,tslib_es6._)([(0,property.Cb)({type:[I3SLayerDefinitions.QI],readOnly:!0})],J.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[I3SLayerDefinitions.Yh],readOnly:!0})],J.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[I3SLayerDefinitions.H3],readOnly:!0})],J.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0})],J.prototype,"statisticsInfo",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:!0}})],J.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],J.prototype,"path",void 0),(0,tslib_es6._)([(0,property.Cb)(commonProperties.PV)],J.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property.Cb)({type:String})],J.prototype,"geometryType",null),(0,tslib_es6._)([(0,property.Cb)(commonProperties.iR)],J.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[LabelClass.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:labelingInfo.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo.r},write:!0}})],J.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property.Cb)(commonProperties.rn)],J.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property.Cb)(commonProperties.bT)],J.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property.Cb)({types:types.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],J.prototype,"renderer",null),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1}})],J.prototype,"cachedDrawingInfo",void 0),(0,tslib_es6._)([(0,reader.r)("service","cachedDrawingInfo")],J.prototype,"readCachedDrawingInfo",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),(0,tslib_es6._)([(0,property.Cb)({type:Boolean,json:{read:!1}})],J.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property.Cb)(commonProperties.C_)],J.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property.Cb)({type:PopupTemplate.Z,json:{name:"popupInfo",write:!0}})],J.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,json:{read:!1}})],J.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:!1}})],J.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader.r)("service","objectIdField",["objectIdField","fields"])],J.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:!1}})],J.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader.r)("service","globalIdField",["globalIdField","fields"])],J.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,type:String,json:{read:!1}})],J.prototype,"displayField",null),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:!1}})],J.prototype,"profile",void 0),(0,tslib_es6._)([(0,reader.r)("service","profile",["store.profile"])],J.prototype,"readProfile",null),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],J.prototype,"normalReferenceFrame",void 0),(0,tslib_es6._)([(0,property.Cb)(commonProperties.YI)],J.prototype,"screenSizePerspectiveEnabled",void 0),J=(0,tslib_es6._)([(0,subclass.j)("esri.layers.SceneLayer")],J);const H={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},X={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};const SceneLayer=J}}]);
//# sourceMappingURL=3687.538a6765.iframe.bundle.js.map