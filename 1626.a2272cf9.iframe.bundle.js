(self.webpackChunkreact_arcgis_wmws=self.webpackChunkreact_arcgis_wmws||[]).push([[1626],{91626:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>GeometryService});var tslib_es6=__webpack_require__(56140),ensureType=(__webpack_require__(95830),__webpack_require__(36544),__webpack_require__(68055)),property=__webpack_require__(79881),subclass=__webpack_require__(87566),urlUtils=__webpack_require__(10923),Task=(__webpack_require__(57002),__webpack_require__(86035),__webpack_require__(95986)),request=__webpack_require__(36654),utils=__webpack_require__(66849);var Polygon=__webpack_require__(53817),jsonUtils=(__webpack_require__(36348),__webpack_require__(56885));function r(t){return{geometryType:(0,jsonUtils.Ji)(t[0]),geometries:t.map((e=>e.toJSON()))}}function utils_o(e,r,o){const n=(0,jsonUtils.q9)(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}async function i(i,n,m,p){const g=n[0].spatialReference,f=(0,utils.en)(i),a={...f.query,f:"json",sr:JSON.stringify(g.toJSON()),polygons:JSON.stringify(r(n).geometries),polylines:JSON.stringify(r(m).geometries)},y=(0,utils.lA)(a,p);return(0,request.default)(f.path+"/autoComplete",y).then((({data:t})=>(t.geometries||[]).map((({rings:t})=>new Polygon.Z({spatialReference:g,rings:t})))))}async function convexHull_i(i,n,m){const f=n[0].spatialReference,p=(0,utils.en)(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r(n))},u=(0,utils.lA)(a,m);return(0,request.default)(p.path+"/convexHull",u).then((({data:e})=>(0,jsonUtils.im)(e.geometry).set({spatialReference:f})))}async function difference_i(i,m,n,f){const p=m[0].spatialReference,y=(0,utils.en)(i);let a={query:{...y.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(r(m)),geometry:JSON.stringify({geometryType:(0,jsonUtils.Ji)(n),geometry:n.toJSON()})}};return f&&(a={...f,...a}),(0,request.default)(y.path+"/difference",a).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils.im)(e).set({spatialReference:p})))))}var jsonMap=__webpack_require__(56274);const _=new jsonMap.Xn({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});const generalize_i=new jsonMap.Xn({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});var JSONSupport=__webpack_require__(58385);let p=class extends JSONSupport.wq{constructor(r){super(r),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],p.prototype,"deviationUnit",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils.im)(r))):null},write:{writer:(r,o)=>{o.geometries=r.map((r=>r.toJSON()))}}}})],p.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property.Cb)({type:Number,json:{write:!0}})],p.prototype,"maxDeviation",void 0),p=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.support.GeneralizeParameters")],p),p.from=(0,ensureType.se)(p);const GeneralizeParameters=p;async function geometryService_generalize_i(i,m,p){const n=(m=GeneralizeParameters.from(m)).toJSON(),f=function generalize_r(e){const{geometries:r,deviationUnit:s,maxDeviation:o}=e.toJSON(),n={maxDeviation:o};return r&&r.length&&(n.geometries=JSON.stringify({geometryType:(0,jsonUtils.Ji)(r[0]),geometries:r}),n.sr=JSON.stringify(r[0].spatialReference)),generalize_i.write(s,n,"deviationUnit"),n}(m),j=(0,utils.en)(i),l={...j.query,f:"json",...f},u=n.geometries[0].spatialReference,c=(0,utils.lA)(l,p);return(0,request.default)(j.path+"/generalize",c).then((({data:r})=>(r.geometries||[]).map((r=>(0,jsonUtils.im)(r).set({spatialReference:u})))))}async function intersect_m(m,n,p,f){const y=n[0].spatialReference,a=(0,utils.en)(m),g={...a.query,f:"json",sr:JSON.stringify(y.toJSON()),geometries:JSON.stringify(r(n)),geometry:JSON.stringify({geometryType:(0,jsonUtils.Ji)(p),geometry:p.toJSON()})},u=(0,utils.lA)(g,f);return(0,request.default)(a.path+"/intersect",u).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils.im)(e).set({spatialReference:y})))))}const n=new jsonMap.Xn({preserveShape:"preserve-shape"});function lengths_o(e){const{polylines:o,lengthUnit:t,geodesic:i,calculationType:s}=e.toJSON(),r={};r.polylines=JSON.stringify(o);const l=e.polylines[0].spatialReference;return r.sr=l.wkid?l.wkid:JSON.stringify(l.toJSON()),t&&(r.lengthUnit=t),i&&(r.geodesic=i),s&&(r.calculationType=n.toJSON(s)),r}var Polyline=__webpack_require__(93833);let l=class extends JSONSupport.wq{constructor(o){super(o),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],l.prototype,"calculationType",void 0),(0,tslib_es6._)([(0,property.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"geodesic",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{write:!0}})],l.prototype,"lengthUnit",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Polyline.Z],json:{read:{reader:o=>o?o.map((o=>(0,jsonUtils.im)(o))):null},write:{writer:(o,r)=>{r.polylines=o.map((o=>o.toJSON()))}}}})],l.prototype,"polylines",void 0),l=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.support.LengthsParameters")],l),l.from=(0,ensureType.se)(l);const LengthsParameters=l;const offset_o=new jsonMap.Xn({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),offset_s=new jsonMap.Xn({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let OffsetParameters_i=class extends JSONSupport.wq{constructor(o){super(o),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,tslib_es6._)([(0,property.Cb)({type:Number,json:{write:!0}})],OffsetParameters_i.prototype,"bevelRatio",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:{reader:o=>o?o.map((o=>(0,jsonUtils.im)(o))):null},write:{writer:(o,r)=>{r.geometries=o.map((o=>o.toJSON()))}}}})],OffsetParameters_i.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property.Cb)({type:Number,json:{write:!0}})],OffsetParameters_i.prototype,"offsetDistance",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],OffsetParameters_i.prototype,"offsetHow",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],OffsetParameters_i.prototype,"offsetUnit",void 0),OffsetParameters_i=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.support.OffsetParameters")],OffsetParameters_i),OffsetParameters_i.from=(0,ensureType.se)(OffsetParameters_i);const OffsetParameters=OffsetParameters_i;async function offset_m(m,p,a){const i=function offset_r(e){const{geometries:r,bevelRatio:i,offsetDistance:f,offsetHow:n,offsetUnit:m}=e.toJSON(),l={bevelRatio:i,offsetDistance:f};return r&&r.length&&(l.geometries=JSON.stringify({geometryType:(0,jsonUtils.Ji)(r[0]),geometries:r}),l.sr=JSON.stringify(r[0].spatialReference)),n&&(l.offsetHow=offset_o.toJSON(n)),m&&(l.offsetUnit=offset_s.toJSON(m)),l}(p=OffsetParameters.from(p)),n=(0,utils.en)(m),j={...n.query,f:"json",...i},u=p.geometries[0].spatialReference,c=(0,utils.lA)(j,a);return(0,request.default)(n.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>(0,jsonUtils.im)(e).set({spatialReference:u})))))}var ProjectParameters=__webpack_require__(52411);const project_i=(0,ensureType.se)(ProjectParameters.Z);const relation_t=new jsonMap.Xn({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});let RelationParameters_i=class extends JSONSupport.wq{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,tslib_es6._)([(0,property.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils.im)(r))):null},write:{writer:(r,o)=>{o.geometries1=r.map((r=>r.toJSON()))}}}})],RelationParameters_i.prototype,"geometries1",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils.im)(r))):null},write:{writer:(r,o)=>{o.geometries2=r.map((r=>r.toJSON()))}}}})],RelationParameters_i.prototype,"geometries2",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],RelationParameters_i.prototype,"relation",void 0),(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],RelationParameters_i.prototype,"relationParameter",void 0),RelationParameters_i=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.support.RelationParameters")],RelationParameters_i),RelationParameters_i.from=(0,ensureType.se)(RelationParameters_i);const RelationParameters=RelationParameters_i;async function relation_e(e,n,i){const m=function relation_o(e){const{geometries1:o,geometries2:r,relation:n,relationParameter:s}=e.toJSON(),a={};if(o&&o.length){a.geometries1=JSON.stringify({geometryType:(0,jsonUtils.Ji)(o[0]),geometries:o});const e=o[0].spatialReference;a.sr=e.wkid?e.wkid:JSON.stringify(e)}return r&&r.length>0&&(a.geometries2=JSON.stringify({geometryType:(0,jsonUtils.Ji)(r[0]),geometries:r})),n&&(a.relation=relation_t.toJSON(n)),s&&(a.relationParam=s),a}(n=RelationParameters.from(n)),p=(0,utils.en)(e),f={...p.query,f:"json",...m},u=(0,utils.lA)(f,i);return(0,request.default)(p.path+"/relation",u).then((({data:t})=>t.relations))}async function simplify_o(o,m,f){const n="string"==typeof o?(0,urlUtils.mN)(o):o,p=m[0].spatialReference,a=(0,jsonUtils.Ji)(m[0]),u={...f,query:{...n.query,f:"json",sr:p.wkid?p.wkid:JSON.stringify(p),geometries:JSON.stringify(r(m))}},{data:y}=await(0,request.default)(n.path+"/simplify",u);return utils_o(y.geometries,a,p)}const trimExtend_t=new jsonMap.Xn({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});let TrimExtendParameters_m=class extends JSONSupport.wq{constructor(r){super(r),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,tslib_es6._)([(0,property.Cb)({type:String,json:{write:!0}})],TrimExtendParameters_m.prototype,"extendHow",void 0),(0,tslib_es6._)([(0,property.Cb)({type:[Polyline.Z],json:{read:{reader:r=>r?r.map((r=>(0,jsonUtils.im)(r))):null},write:{writer:(r,o)=>{o.polylines=r.map((r=>r.toJSON()))}}}})],TrimExtendParameters_m.prototype,"polylines",void 0),(0,tslib_es6._)([(0,property.Cb)({json:{read:{reader:r=>r?(0,jsonUtils.im)(r):null},write:{writer:(r,o)=>{o.trimExtendTo=r.toJSON()}}}})],TrimExtendParameters_m.prototype,"trimExtendTo",void 0),TrimExtendParameters_m=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.support.TrimExtendParameters")],TrimExtendParameters_m),TrimExtendParameters_m.from=(0,ensureType.se)(TrimExtendParameters_m);const TrimExtendParameters=TrimExtendParameters_m;async function trimExtend_i(i,p,a){const n=function trimExtend_n(e){const{extendHow:n,polylines:o,trimExtendTo:r}=e.toJSON(),i={};return i.extendHow=trimExtend_t.toJSON(n),o&&o.length&&(i.polylines=JSON.stringify(o),i.sr=JSON.stringify(o[0].spatialReference)),r&&(i.trimExtendTo=JSON.stringify(r)),i}(p=TrimExtendParameters.from(p)),f=(0,utils.en)(i),j={...f.query,f:"json",...n},u=p.sr,y=(0,utils.lA)(j,a);return(0,request.default)(f.path+"/trimExtend",y).then((({data:r})=>(r.geometries||[]).map((({paths:r})=>new Polyline.Z({spatialReference:u,paths:r})))))}async function union_i(i,n,m){const f=n[0].spatialReference,p=(0,utils.en)(i),a={...p.query,f:"json",sr:JSON.stringify(f.toJSON()),geometries:JSON.stringify(r(n))},u=(0,utils.lA)(a,m);return(0,request.default)(p.path+"/union",u).then((({data:e})=>(0,jsonUtils.im)(e.geometry).set({spatialReference:f})))}let C=class extends Task.Z{constructor(r){super(r),this.url=null}areasAndLengths(r,e){return async function o(o,s,e){const a=(0,utils.en)(o),u={...a.query,f:"json",...s.toJSON()},f=(0,utils.lA)(u,e);return(0,request.default)(a.path+"/areasAndLengths",f).then((t=>t.data))}(this.url,r,e)}autoComplete(r,e,t){return i(this.url,r,e,t)}buffer(r,e){return async function s(s,n,i){const m=(0,utils.en)(s),a={...m.query,f:"json",...n.toJSON()},f=n.outSpatialReference||n.geometries[0].spatialReference,p=(0,utils.lA)(a,i);return(0,request.default)(m.path+"/buffer",p).then((r=>(r.data.geometries||[]).map((({rings:r})=>new Polygon.Z({spatialReference:f,rings:r})))))}(this.url,r,e)}convexHull(r,e){return convexHull_i(this.url,r,e)}cut(r,e,t){return async function cut_o(o,i,n,m){const a=(0,utils.en)(o),p=i[0].spatialReference,u={...m,query:{...a.query,f:"json",sr:JSON.stringify(p),target:JSON.stringify({geometryType:(0,jsonUtils.Ji)(i[0]),geometries:i}),cutter:JSON.stringify(n)}},c=await(0,request.default)(a.path+"/cut",u),{cutIndexes:f,geometries:g=[]}=c.data;return{cutIndexes:f,geometries:g.map((e=>{const r=(0,jsonUtils.im)(e);return r.spatialReference=p,r}))}}(this.url,r,e,t)}densify(r,e){return async function densify_o(o,i,n){const m=i.geometries[0].spatialReference,p=(0,utils.en)(o),a={...p.query,f:"json",...i.toJSON()},f=(0,utils.lA)(a,n);return(0,request.default)(p.path+"/densify",f).then((({data:t})=>(t.geometries||[]).map((t=>(0,jsonUtils.im)(t).set({spatialReference:m})))))}(this.url,r,e)}difference(r,e,t){return difference_i(this.url,r,e,t)}distance(r,e){return async function distance_r(r,s,e){const a=(0,utils.en)(r),i={...a.query,f:"json",...s.toJSON()},c=(0,utils.lA)(i,e);return(0,request.default)(a.path+"/distance",c).then((({data:t})=>t&&t.distance))}(this.url,r,e)}fromGeoCoordinateString(r,e){return async function t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.strings=JSON.stringify(i.strings);const f=i.conversionType||"mgrs";c.conversionType=_.toJSON(f),c.conversionMode=i.conversionMode;const m=(0,utils.en)(t),p={...m.query,f:"json",...c},u=(0,utils.lA)(p,e);return(0,request.default)(m.path+"/fromGeoCoordinateString",u).then((({data:o})=>o.coordinates))}(this.url,r,e)}generalize(r,e){return geometryService_generalize_i(this.url,r,e)}intersect(r,e,t){return intersect_m(this.url,r,e,t)}labelPoints(r,e){return function labelPoints_r(r,i,n){const p=i.map((t=>t.toJSON())),a=i[0].spatialReference,f=(0,utils.en)(r),l={...f.query,f:"json",sr:a.wkid?a.wkid:JSON.stringify(a.toJSON()),polygons:JSON.stringify(p)},m=(0,utils.lA)(l,n);return(0,request.default)(f.path+"/labelPoints",m).then((({data:e})=>(e.labelPoints||[]).map((e=>(0,jsonUtils.im)(e).set({spatialReference:a})))))}(this.url,r,e)}lengths(r,e){return async function lengths_n(n,m,a){const p=lengths_o(m=LengthsParameters.from(m)),f=(0,utils.en)(n),i={...f.query,f:"json",...p},u=(0,utils.lA)(i,a);return(0,request.default)(f.path+"/lengths",u).then((({data:t})=>t))}(this.url,r,e)}offset(r,e){return offset_m(this.url,r,e)}project(r,e){return async function project_n(r,e,n){e=project_i(e);const u=(0,utils.en)(r),a={...u.query,f:"json",...e.toJSON()},c=e.outSpatialReference,j=(0,jsonUtils.Ji)(e.geometries[0]),f=(0,utils.lA)(a,n);return(0,request.default)(u.path+"/project",f).then((({data:{geometries:r}})=>utils_o(r,j,c)))}(this.url,r,e)}relation(r,e){return relation_e(this.url,r,e)}reshape(r,e,t){return async function reshape_i(i,n,p,a){const f=n.spatialReference,m=(0,utils.en)(i),y={...m.query,f:"json",sr:JSON.stringify(f.toJSON()),target:JSON.stringify({geometryType:(0,jsonUtils.Ji)(n),geometry:n.toJSON()}),reshaper:JSON.stringify(p.toJSON())},g=(0,utils.lA)(y,a);return(0,request.default)(m.path+"/reshape",g).then((({data:e})=>(0,jsonUtils.im)(e.geometry).set({spatialReference:f})))}(this.url,r,e,t)}simplify(r,e){return simplify_o(this.url,r,e)}toGeoCoordinateString(r,e){return async function toGeoCoordinateString_t(t,i,e){const c={};null!=i.sr&&"object"==typeof i.sr?c.sr=i.sr.wkid||JSON.stringify(i.sr):c.sr=i.sr,c.coordinates=JSON.stringify(i.coordinates);const d=i.conversionType||"mgrs";c.conversionType=_.toJSON(d),c.conversionMode=i.conversionMode,c.numOfDigits=i.numOfDigits,c.rounding=i.rounding,c.addSpaces=i.addSpaces;const a=(0,utils.en)(t),u={...a.query,f:"json",...c},f=(0,utils.lA)(u,e);return(0,request.default)(a.path+"/toGeoCoordinateString",f).then((({data:o})=>o.strings))}(this.url,r,e)}trimExtend(r,e){return trimExtend_i(this.url,r,e)}union(r,e){return union_i(this.url,r,e)}};C.UNIT_METER=9001,C.UNIT_GERMAN_METER=9031,C.UNIT_FOOT=9002,C.UNIT_SURVEY_FOOT=9003,C.UNIT_CLARKE_FOOT=9005,C.UNIT_FATHOM=9014,C.UNIT_NAUTICAL_MILE=9030,C.UNIT_SURVEY_CHAIN=9033,C.UNIT_SURVEY_LINK=9034,C.UNIT_SURVEY_MILE=9035,C.UNIT_KILOMETER=9036,C.UNIT_CLARKE_YARD=9037,C.UNIT_CLARKE_CHAIN=9038,C.UNIT_CLARKE_LINK=9039,C.UNIT_SEARS_YARD=9040,C.UNIT_SEARS_FOOT=9041,C.UNIT_SEARS_CHAIN=9042,C.UNIT_SEARS_LINK=9043,C.UNIT_BENOIT_1895A_YARD=9050,C.UNIT_BENOIT_1895A_FOOT=9051,C.UNIT_BENOIT_1895A_CHAIN=9052,C.UNIT_BENOIT_1895A_LINK=9053,C.UNIT_BENOIT_1895B_YARD=9060,C.UNIT_BENOIT_1895B_FOOT=9061,C.UNIT_BENOIT_1895B_CHAIN=9062,C.UNIT_BENOIT_1895B_LINK=9063,C.UNIT_INDIAN_FOOT=9080,C.UNIT_INDIAN_1937_FOOT=9081,C.UNIT_INDIAN_1962_FOOT=9082,C.UNIT_INDIAN_1975_FOOT=9083,C.UNIT_INDIAN_YARD=9084,C.UNIT_INDIAN_1937_YARD=9085,C.UNIT_INDIAN_1962_YARD=9086,C.UNIT_INDIAN_1975_YARD=9087,C.UNIT_FOOT_1865=9070,C.UNIT_RADIAN=9101,C.UNIT_DEGREE=9102,C.UNIT_ARCMINUTE=9103,C.UNIT_ARCSECOND=9104,C.UNIT_GRAD=9105,C.UNIT_GON=9106,C.UNIT_MICRORADIAN=9109,C.UNIT_ARCMINUTE_CENTESIMAL=9112,C.UNIT_ARCSECOND_CENTESIMAL=9113,C.UNIT_MIL6400=9114,C.UNIT_BRITISH_1936_FOOT=9095,C.UNIT_GOLDCOAST_FOOT=9094,C.UNIT_INTERNATIONAL_CHAIN=109003,C.UNIT_INTERNATIONAL_LINK=109004,C.UNIT_INTERNATIONAL_YARD=109001,C.UNIT_STATUTE_MILE=9093,C.UNIT_SURVEY_YARD=109002,C.UNIT_50KILOMETER_LENGTH=109030,C.UNIT_150KILOMETER_LENGTH=109031,C.UNIT_DECIMETER=109005,C.UNIT_CENTIMETER=109006,C.UNIT_MILLIMETER=109007,C.UNIT_INTERNATIONAL_INCH=109008,C.UNIT_US_SURVEY_INCH=109009,C.UNIT_INTERNATIONAL_ROD=109010,C.UNIT_US_SURVEY_ROD=109011,C.UNIT_US_NAUTICAL_MILE=109012,C.UNIT_UK_NAUTICAL_MILE=109013,C.UNIT_SQUARE_INCHES="esriSquareInches",C.UNIT_SQUARE_FEET="esriSquareFeet",C.UNIT_SQUARE_YARDS="esriSquareYards",C.UNIT_ACRES="esriAcres",C.UNIT_SQUARE_MILES="esriSquareMiles",C.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",C.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",C.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",C.UNIT_SQUARE_METERS="esriSquareMeters",C.UNIT_ARES="esriAres",C.UNIT_HECTARES="esriHectares",C.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,tslib_es6._)([(0,property.Cb)()],C.prototype,"url",void 0),C=(0,tslib_es6._)([(0,subclass.j)("esri.tasks.GeometryService")],C);const GeometryService=C}}]);
//# sourceMappingURL=1626.a2272cf9.iframe.bundle.js.map