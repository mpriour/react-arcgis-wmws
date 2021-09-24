var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{F as l,G as p,k_ as n,H as u,mI as m,z as c,B as y,bN as d,fR as f}from"./vendor.7103ff48.js";import{s as h}from"./clickToleranceUtils.85f9bed9.js";import{t as b,d as v}from"./popupUtils.99eeb504.js";const g=e=>{let g=class extends e{initialize(){this.exportImageParameters=new m({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,l){const{layer:p}=this;if(!e)return Promise.reject(new c("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p}));const n=this.get("view.scale"),u=[],m=async e=>{const p=0===e.minScale||n<=e.minScale,c=0===e.maxScale||n>=e.maxScale;if(e.visible&&p&&c)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const p=v(e,((e,a)=>t(e,r(a)))(((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&i(e,r,t[r]);return e})({},l),{defaultPopupTemplateEnabled:!1}));y(p)&&u.unshift({sublayer:e,popupTemplate:p})}},f=p.sublayers.toArray().reverse().map(m);await Promise.all(f);const g=u.map((async({sublayer:t,popupTemplate:r})=>{await t.load().catch((()=>{}));const a=t.createQuery(),s=y(l)?l.event:null,o=h({renderer:t.renderer,event:s}),i=this.createFetchPopupFeaturesQueryGeometry(e,o);a.geometry=i,a.outFields=await b(t,r);const p=await this._loadArcadeModules(r);return p&&p.arcadeUtils.hasGeometryOperations(r)||(a.maxAllowableOffset=i.width/o),(await t.queryFeatures(a)).features}));return(await d(g)).reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!(!super.canResume()||null!=(e=this.timeExtent)&&e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return f()}};return l([p()],g.prototype,"exportImageParameters",void 0),l([p({readOnly:!0})],g.prototype,"exportImageVersion",null),l([p()],g.prototype,"layer",void 0),l([p()],g.prototype,"suspended",void 0),l([p(n)],g.prototype,"timeExtent",void 0),g=l([u("esri.views.layers.MapImageLayerView")],g),g};export{g as c};
//# sourceMappingURL=MapImageLayerView.db6681ad.js.map