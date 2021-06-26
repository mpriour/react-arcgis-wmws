(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[4479],{54479:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CSVLayer});var tslib_es6=__webpack_require__(56140),has=__webpack_require__(95830),property=(__webpack_require__(36544),__webpack_require__(68055),__webpack_require__(79881)),reader=__webpack_require__(30590),subclass=__webpack_require__(87566),persistableUrlUtils=(__webpack_require__(10923),__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(37704)),SpatialReference=__webpack_require__(73032),Query=(__webpack_require__(36348),__webpack_require__(31518)),FeatureLayer=__webpack_require__(8809),QueryEngineCapabilities=__webpack_require__(12850),maybe=__webpack_require__(59472),Extent=__webpack_require__(52937),Loadable=__webpack_require__(809),workers=__webpack_require__(21562),FeatureSet=__webpack_require__(76194);let u=class extends Loadable.Z{constructor(e){super(e),this.type="csv"}load(e){const t=(0,maybe.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>FeatureSet.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent.Z.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async _startWorker(e){this._connection=await(0,workers.bA)("CSVSourceWorker",{strategy:(0,has.Z)("feature-layers-workers")?"dedicated":"local",signal:e});const o=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter}};(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"url",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"delimiter",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"fields",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"latitudeField",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"longitudeField",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"locationInfo",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property.Cb)()],u.prototype,"columnDelimiter",void 0),u=(0,tslib_es6._)([(0,subclass.j)("esri.layers.graphics.sources.CSVSource")],u);const CSVSource=u;let d=class extends FeatureLayer.default{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=SpatialReference.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:QueryEngineCapabilities.g,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new CSVSource({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Query.Z.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Query.Z.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Query.Z.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Query.Z.from(e)||this.createQuery())))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],d.prototype,"capabilities",null),(0,tslib_es6._)([(0,property.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],d.prototype,"delimiter",void 0),(0,tslib_es6._)([(0,property.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],d.prototype,"fields",void 0),(0,tslib_es6._)([(0,property.Cb)({type:Boolean,readOnly:!0})],d.prototype,"isTable",null),(0,tslib_es6._)([(0,reader.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],d.prototype,"readWebMapLabelsVisible",null),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"latitudeField",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"locationType",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],d.prototype,"longitudeField",void 0),(0,tslib_es6._)([(0,property.Cb)({type:["CSV"]})],d.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property.Cb)()],d.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],d.prototype,"path",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1},cast:null,type:CSVSource,readOnly:!0})],d.prototype,"source",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:!1},value:"csv",readOnly:!0})],d.prototype,"type",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:persistableUrlUtils.r,write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}})],d.prototype,"url",null),d=(0,tslib_es6._)([(0,subclass.j)("esri.layers.CSVLayer")],d);const CSVLayer=d},12850:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>t});const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=4479.0f976bde.iframe.bundle.js.map