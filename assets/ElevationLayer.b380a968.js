var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&o(e,r,t[r]);return e};import{bb as n,bc as p,bd as c,be as d,bf as h,bg as y,bh as u,B as v,z as m,bi as g,ag as b,N as f,ar as w,bj as S,F as T,G as j,bk as O,bl as I,b3 as _,H as x,b as D}from"./vendor.7103ff48.js";import{s as E}from"./ArcGISCachedService.88a6694b.js";import"./serviceTileInfoProperty.6e3cc1cd.js";import"./TilemapCache.59c5ee62.js";const V=n.getLogger("esri.layers.ElevationLayer");let P=class extends(E(p(c(d(h(D)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=y()}normalizeCtorArgs(e,t){return"string"==typeof e?l({url:e},t):e}destroy(){this._lercDecoder=u(this._lercDecoder)}set minScale(e){this.constructed&&V.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&V.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=v(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new m("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(g).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,r,a){const i=v((a=a||{signal:null}).signal)?a.signal:a.signal=b().signal,s={responseType:"array-buffer",signal:i},o={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,r,a))).then((()=>f(this.getTileUrl(e,t,r),s))).then((e=>this._lercDecoder.decode(e.data,o,i))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,a,i){const s=!this.tilemapCache&&this.supportsBlankTile,o=w((n=l({},this.parsedUrl.query),t(n,r({blankTile:!s&&null}))));var n;return`${this.parsedUrl.path}/tile/${e}/${a}/${i}${o?"?"+o:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.d277c3a2.js");return S(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.d277c3a2.js");return S(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,r,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:l({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},r=await f(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};T([j({json:{read:{source:"copyrightText"}}})],P.prototype,"copyright",void 0),T([j({readOnly:!0,type:O})],P.prototype,"heightModelInfo",void 0),T([j({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),T([j({type:["show","hide"]})],P.prototype,"listMode",void 0),T([j({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],P.prototype,"minScale",null),T([j({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],P.prototype,"maxScale",null),T([j({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],P.prototype,"opacity",void 0),T([j({type:["ArcGISTiledElevationServiceLayer"]})],P.prototype,"operationalLayerType",void 0),T([j()],P.prototype,"sourceJSON",void 0),T([j({json:{read:!1},value:"elevation",readOnly:!0})],P.prototype,"type",void 0),T([j(I)],P.prototype,"url",void 0),T([j()],P.prototype,"version",void 0),T([_("version",["currentVersion"])],P.prototype,"readVersion",null),P=T([x("esri.layers.ElevationLayer")],P),P.prototype.fetchTile.__isDefault__=!0;var C=P;export{C as default};
//# sourceMappingURL=ElevationLayer.b380a968.js.map