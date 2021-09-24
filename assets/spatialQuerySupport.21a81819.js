import{E as e,b2 as t,gj as r,C as i,Z as n,M as s,gk as l,gl as o,dx as a,g6 as u,B as c,cZ as f,c_ as p,gm as m,gn as g,c$ as y,go as R,gp as S,gq as d,gr as h,cO as w,eE as N,cN as I,gs as v,gt as G,z as P,d3 as b,bx as M}from"./vendor.7103ff48.js";import{f as A,g as E}from"./projectionSupport.c5c55ada.js";function F(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach((e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(l=Math.max(l,o))}));else{const e=i||n;t.forEach((t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),l=Math.max(l,i))}))}return{start:s,end:l}}function O(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:s,end:l}=t;return null===s&&null===l?null:void 0===s&&void 0===l?()=>!1:i&&n?function(e,t,r,i,n){return null!=i&&null!=n?s=>{const l=e.getAttribute(s,t),o=e.getAttribute(s,r);return(null==l||l<=n)&&(null==o||o>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}(r,i,n,s,l):function(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}(r,i||n,s,l)}const j=new e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),T=Object.freeze({}),U=new t,_=new t,C=new t,x={esriGeometryPoint:g,esriGeometryPolyline:y,esriGeometryPolygon:R,esriGeometryMultipoint:S};function q(e,t,r,i=e.hasZ,n=e.hasM){if(s(t))return null;const l=e.hasZ&&i,o=e.hasM&&n;if(r){const s=p(C,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return g(s,l,o)}return g(t,l,o)}function J(e,t,r,i,n,l,o=t,a=r){const u=t&&o,g=r&&a,y=c(i)?"coords"in i?i:i.geometry:null;if(s(y))return null;if(n){let i=f(_,y,t,r,e,n,o,a);return l&&(i=p(C,i,u,g,e,l)),x[e](i,u,g)}if(l){const i=p(C,y,t,r,e,l,o,a);return x[e](i,u,g)}return m(U,y,t,r,o,a),x[e](U,u,g)}async function Z(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:l}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(l)for(let o=0;o<l.length;o++)l[o].onStatisticField&&(l[o].onStatisticField=l[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),B(e,t,r)}async function B(e,t,c){if(!e)return null;let{where:f}=e;if(e.where=f=f&&f.trim(),(!f||/^1 *= *1$/.test(f)||t&&t===f)&&(e.where=null),!e.geometry)return e;let p=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,s=i?j.fromJSON(i):l(n),c=n&&(o(n)||a(n))?t:await A(n,u).then((()=>E(t,u)));return(await async function(){return(await import("./geometryEngineJSON.02a68760.js")).geodesicBuffer}())(c.spatialReference,c,r,s)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;p=r(p),p.spatialReference=t}e.geometry=p,await A(p.spatialReference,c);const m=(await i(n(p)))[0];if(s(m))throw T;const g=m.toJSON(),y=await E(g,g.spatialReference,c);if(!y)throw T;return y.spatialReference=c,e.geometry=y,e}function V(e){return e&&k in e?JSON.parse(JSON.stringify(e,z)):e}const k="_geVersion",z=(e,t)=>e!==k?t:void 0;function D(e,t){return e?t?4:3:t?3:2}function W(e,t,r,i,n){if(!e)return!1;const s=D(t,r),{coords:l,lengths:o}=e;let a=!1,u=0;for(const c of o)a=Y(a,l,s,u,c,i,n),u+=c*s;return a}function Y(e,t,r,i,n,s,l){let o=e,a=i;for(let u=i,c=i+n*r;u<c;u+=r){a=u+r,a===c&&(a=i);const e=t[u],n=t[u+1],f=t[a],p=t[a+1];(n<l&&p>=l||p<l&&n>=l)&&e+(l-n)/(p-n)*(f-e)<s&&(o=!o)}return o}const $="feature-store:unsupported-query",K={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},H={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},L={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},Q={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function X(e,r,i,n,s){if(w(r)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=N(new t,r,!1,!1);return Promise.resolve((t=>function(e,t,r,i){return W(e,t,r,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if(w(r)&&"esriGeometryMultipoint"===i){const i=N(new t,r,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>function(e,t,r,i,n,s){const l=D(n,s),{coords:o,lengths:a}=i;if(!a)return!1;for(let u=0,c=0;u<a.length;u++,c+=l)if(!W(e,t,r,o[c],o[c+1]))return!1;return!0}(i,!1,!1,e,n,s)))}if(I(r)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>v(r,J(i,n,s,e))));if(I(r)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>G(r,J(i,n,s,e))));if(I(r)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?d:h(e)}(i);return Promise.resolve((t=>e(r,J(i,n,s,t))))}return import("./geometryEngineJSON.02a68760.js").then((t=>{const l=t[K[e]].bind(null,r.spatialReference,r);return e=>l(J(i,n,s,e))}))}async function ee(e,t,r){const{spatialRel:i,geometry:n}=e;if(n){if(!0!==H[i])throw new P($,"Unsupported query spatial relationship",{query:e});if(b(n.spatialReference)&&b(r)){if(!function(e){return!0===L[M(e)]}(n))throw new P($,"Unsupported query geometry type",{query:e});if(!function(e){return!0===Q[e]}(t))throw new P($,"Unsupported layer geometry type",{query:e});if(e.outSR)return A(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function te(e){if(I(e))return!0;if(w(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}export{te as I,J,q as O,Z as P,T as U,B as Z,ee as a,O as n,F as t,X as v,V as z};
//# sourceMappingURL=spatialQuerySupport.21a81819.js.map