var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,s=(e,s)=>{for(var c in s||(s={}))t.call(s,c)&&n(e,c,s[c]);if(r)for(var c of r(s))o.call(s,c)&&n(e,c,s[c]);return e},c=(e,n)=>{var s={};for(var c in e)t.call(e,c)&&n.indexOf(c)<0&&(s[c]=e[c]);if(null!=e&&r)for(var c of r(e))n.indexOf(c)<0&&o.call(e,c)&&(s[c]=e[c]);return s};import{t as a,r as l,R as u,b as i,y as d,k as p,g as f,W as m,L as g,Y as y,a as w,c as v,d as h,e as b,f as E,h as x,l as I,i as k,j as O,m as L,n as S,o as _,p as P,q as T,s as V,u as R,v as j,w as F}from"./vendor.7103ff48.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Viewer"]}}}});function q(e){return new Promise(((r,t)=>{"feature"==e.type||"scene"==e.type?r(e):t(`Layer ${e.title} of ${e.type} is not allowed to be shown in a feature table`)}))}a.request.useIdentity=!1;const M=e=>{var r=e,{itemId:t,url:o,layer:n,env:a="prod"}=r,p=c(r,["itemId","url","layer","env"]);const f=l.exports.useRef(null),m=u.createElement("div",s({ref:f},p)),[g,y]=l.exports.useState(),w=l.exports.useRef();function v(){w.current&&f.current&&(f.current.innerHTML="",w.current=void 0)}return l.exports.useEffect((()=>{if(n)y(n);else if(t){let e="www";"dev"==a?e="devext":"qa"!=a&&"uat"!=a||(e="qaext");(function(e,r="https://www.arcgis.com"){return i.fromPortalItem({portalItem:{id:e,portal:{url:r}}}).then(q)})(t,`https://${e}.arcgis.com`).then((e=>{y(e)}))}else o&&function(e){return i.fromArcGISServerUrl({url:e}).then(q)}(o).then((e=>{y(e)}))}),[t,o,n,a]),l.exports.useEffect((()=>(v(),g&&(w.current=new d({layer:g,container:f.current,visibleElements:{selectionColumn:!1}})),()=>{v()})),[g]),m};var N={title:"TableView (Experimental)",component:M};const $={height:"30rem"},z={render:e=>u.createElement(M,s({style:$},e)),args:{itemId:"6aa49be79248400ebd28f1d0c6af3f9f",env:"prod"},argTypes:{env:{control:"select"},url:{control:""},layer:{control:""}}},Z={render:e=>u.createElement(M,s({style:$},e)),args:{url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CollegesUniversities/FeatureServer/0"},argTypes:{env:{control:""},itemId:{control:""},layer:{control:""}}},H={render:e=>u.createElement(M,s({style:$},e)),args:{layer:new p({url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Mexico_demographics/FeatureServer/0"})},argTypes:{env:{control:""},url:{control:""},itemId:{control:""}}};var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N,FromId:z,FromURL:Z,FromLayer:H,__namedExportsOrder:["FromId","FromURL","FromLayer"]});const G=e=>{var r=e,{itemId:t,dockPopup:o,showLegend:n,portalUrl:a="https://www.arcgis.com"}=r,i=c(r,["itemId","dockPopup","showLegend","portalUrl"]);const d=l.exports.useRef(null),p=u.createElement("div",s({ref:d},i)),y=l.exports.useRef(null),w=l.exports.useRef(null);return l.exports.useEffect((()=>{const e=new f({portalItem:{id:t,portal:{url:a}}}),r=new m({map:e,container:d.current});return w.current=r,()=>{y.current&&y.current.destroy(),e.destroy(),r.destroy(),y.current=null,w.current=null}}),[t,a]),l.exports.useEffect((()=>{if(w.current){const e=w.current;o?(e.popup.dockOptions.breakpoint={width:2400,height:2400},e.popup.dockEnabled=!0):(e.popup.dockOptions.breakpoint=!1,e.popup.dockEnabled=!1)}}),[o]),l.exports.useEffect((()=>{if(w.current){const e=w.current;if(y.current&&(e.ui.remove(y.current),y.current.destroy(),y.current=null),n){const r=new g({view:e,style:"card"});y.current=r,e.ui.add(r,"bottom-left")}}}),[n,w.current]),p},C=e=>{var r=e,{itemId:t,portalUrl:o="https://www.arcgis.com",dockPopup:n,showLegend:a}=r,i=c(r,["itemId","portalUrl","dockPopup","showLegend"]);const d=l.exports.useRef(null),p=u.createElement("div",s({ref:d},i)),f=l.exports.useRef(null),m=l.exports.useRef(null);return l.exports.useEffect((()=>{const e=new y({portalItem:{id:t,portal:{url:o}}}),r=new w({map:e,container:d.current});return f.current=r,()=>{m.current&&m.current.destroy(),e.destroy(),r.destroy(),m.current=null,f.current=null}}),[t,o]),l.exports.useEffect((()=>{if(f.current){const e=f.current;n?(e.popup.dockOptions.breakpoint={width:2400,height:2400},e.popup.dockEnabled=!0):(e.popup.dockOptions.breakpoint=!1,e.popup.dockEnabled=!1)}}),[n]),l.exports.useEffect((()=>{if(f.current){const e=f.current;if(m.current&&(e.ui.remove(m.current),m.current.destroy(),m.current=null),a){const r=new g({view:e,style:"card"});m.current=r,e.ui.add(r,"bottom-left")}}}),[a,f.current]),p};a.request.useIdentity=!1;const D=e=>{var r=e,{dimension:t,itemId:o,dockPopup:n=!0,showLegend:a=!1,env:l="prod"}=r,i=c(r,["dimension","itemId","dockPopup","showLegend","env"]);let d="www";"dev"==l?d="devext":"qa"!=l&&"uat"!=l||(d="qaext");const p=`https://${d}.arcgis.com`;return"3d"==t?u.createElement(C,s({itemId:o,portalUrl:p,dockPopup:n,showLegend:a},i)):u.createElement(G,s({itemId:o,portalUrl:p,dockPopup:n,showLegend:a},i))};var J={title:"Viewer",component:D,argTypes:{itemId:{},dimension:{},dockPopup:{defaultValue:!0,control:"boolean"},showLegend:{defaultValue:!1,control:"boolean"},env:{defaultValue:"prod",control:"select"}}};const K=e=>u.createElement(D,s({style:{minHeight:"90vh"}},e)),B={render:K,args:{dimension:"2d",itemId:"f2e9b762544945f390ca4ac3671cfa72"}},Q={render:K,args:{dimension:"3d",itemId:"1c7a06421a314ac9b7d0fae22aa367fb"}};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J,MapViewer:B,SceneViewer:Q,__namedExportsOrder:["MapViewer","SceneViewer"]});[U,O,L,S,_,P,T,V,R,j,F].forEach((e=>{Object.keys(e).forEach((r=>{const t=e[r];switch(r){case"args":case"argTypes":return I.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach((e=>x(e,!1)));case"loaders":return t.forEach((e=>E(e,!1)));case"parameters":return v(s({},t),!1);case"argTypesEnhancers":return t.forEach((e=>b(e)));case"argsEnhancers":return t.forEach((e=>h(e)));case"globals":case"globalTypes":{const e={};return e[r]=t,v(e,!1)}default:return console.log(r+" was not supported :( !")}}))})),k((()=>[A,W].filter((e=>e.default))),{hot:!1},!1);
//# sourceMappingURL=iframe.09026726.js.map