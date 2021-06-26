(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[3150],{12405:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{validate:()=>m});var Error=__webpack_require__(32656),validationUtilsAjv=__webpack_require__(44944),ajv_bundle=__webpack_require__(21379),definitions=__webpack_require__(99307);const i={title:"Building Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{activeFilterId:{type:"string",description:"specifies the id of the currently active filter"},filters:{type:"array",description:"A list of filters available for this layer. Overrides filters defined on the service.",items:{type:"object",$ref:"#/definitions/buildingSceneLayer_filter_schema.json"},uniqueItems:!0},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"Additional properties that can define an elevation offset for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},minScale:{},maxScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.",enum:["hide","hide-children","show"]},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},popupInfo:{type:"object",description:"A popupInfo object defining the content of pop-up windows when you click or query a feature.",$ref:"#/definitions/popupInfo_schema.json"},sublayers:{type:"array",description:"An array of objects specifying overrides for building scene layer sublayers",items:{type:"object",$ref:"#/definitions/buildingSceneLayer_sublayer_schema.json"},uniqueItems:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:definitions.F},integratedMeshLayerItem_i={title:"Integrated Mesh Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{elevationInfo:{},minScale:{},maxScale:{}},additionalProperties:!1}]},listMode:{type:"string",enum:["hide","show"]},modifications:{type:"string",description:"URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json)."},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene.",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:definitions.F},pointCloudLayerItem_i={title:"PointCloud Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{drawingInfo:{allOf:[{$ref:"#/definitions/drawingInfo_schema.json"},{properties:{renderer:{},transparency:{}},additionalProperties:!1}]},elevationInfo:{},filters:{},minScale:{},maxScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the layer in the layer list",enum:["hide","show"]},popupInfo:{type:"object",description:"A popupInfo object defining the content of pop-up windows when you click a point.",$ref:"#/definitions/popupInfo_schema.json"},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:definitions.F},sceneLayerItem_i={title:"Scene Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{definitionExpression:{},drawingInfo:{},elevationInfo:{},featureReduction:{},minScale:{},maxScale:{},rangeInfos:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide layers in the layer list",enum:["hide","show"]},opacity:{type:"number",description:"The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.",minimum:0,maximum:1,default:1},popupInfo:{type:"object",description:"A popupInfo object defining the content of pop-up windows when you click or query a feature.",$ref:"#/definitions/popupInfo_schema.json"},screenSizePerspective:{type:"boolean",description:"Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.",default:!1},showLabels:{type:"boolean",description:"If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.",default:!1},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible in the web scene",default:!0}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:definitions.F},schemaValidator_i=new ajv_bundle.A({allErrors:!0,extendRefs:!0});function m(e,t){return schemaValidator_i.validate(e,function c(r){switch(r){case"building-scene":return i;case"integrated-mesh":return integratedMeshLayerItem_i;case"point-cloud":return pointCloudLayerItem_i;case"scene":return sceneLayerItem_i;default:throw new Error.Z("portalitemlayertype:unknown","Can not validate against unknown PortalItemLayerType.")}}(t))?[]:(0,validationUtilsAjv.E)(schemaValidator_i.errors)}}}]);
//# sourceMappingURL=3150.4fcf16bf.iframe.bundle.js.map