var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{kw as a,kx as p,B as c,ky as u,kz as l,M as f,kA as g,kB as m,kC as y,kD as v,kE as h,kF as d,kG as b,kH as w,fA as j,kI as k}from"./vendor.7103ff48.js";function O(t){return I[function(t){return t instanceof Blob?t.type:function(t){const e=a(t);return U[e]||x}(t.url)}(t)]||P}const I={},x="text/plain",P=I[x],U={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const B in U)I[U[B]]=B;function S(t){const b=c(t)&&t.origins?t.origins:[void 0];return(w,j)=>{const I=function(t,p,b){if(c(t)&&"resource"===t.type)return function(t,p,b){const w=d(p,b);return{type:String,read:(t,e,r)=>{const n=u(t,e,r);return w.type===String?n:"function"==typeof w.type?new w.type({url:n}):void 0},write:{writer(p,u,d,j){if(!j||!j.resources)return"string"==typeof p?void(u[d]=l(p,j)):void(u[d]=p.write({},j));const k=function(t){return f(t)?null:"string"==typeof t?t:t.url}(p),I=k?l(k,((t,n)=>e(t,r(n)))(((t,e)=>{for(var r in e||(e={}))o.call(e,r)&&s(t,r,e[r]);if(n)for(var r of n(e))i.call(e,r)&&s(t,r,e[r]);return t})({},j),{verifyItemRelativeUrls:j&&j.verifyItemRelativeUrls?{writtenUrls:j.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,x=w.type!==String&&(!g(this)||j&&j.origin&&this.originIdOf(b)>m(j.origin));j&&j.portalItem&&c(I)&&!y(I)?x?function(t,e,r,n,o,i,s,p){const c=s.portalItem.resourceFromPath(n),u=$(r,n,s);O(u)===a(c.path)?(R(t,e,c,u,s.resources.toUpdate),o[i]=n):z(t,e,r,n,o,i,s,p)}(this,b,p,I,u,d,j,t):function(t,e,r,n){n.resources.toKeep.push({resource:n.portalItem.resourceFromPath(t)}),e[r]=t}(I,u,d,j):j&&j.portalItem&&(f(I)||c(v(I))||h(I)||x)?z(this,b,p,I,u,d,j,t):u[d]=I}}}}(t,p,b);switch(c(t)&&t.type?t.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:e}=k;return{read:t,write:e}}}}(t,w,j);for(const t of b){const e=p(w,t,j);for(const t in I)e[t]=I[t]}}}function z(t,e,r,n,o,i,s,a){const p=b(),c=$(r,n,s),u=w(j(a,"prefix"),p),l=`${u}.${O(c)}`,f=s.portalItem.resourceFromPath(l);h(n)&&s.resources.pendingOperations.push(async function(t){const e=(await import("./vendor.7103ff48.js").then((function(t){return t.q$}))).default,{data:r}=await e(t,{responseType:"blob"});return r}(n).then((t=>{f.path=`${u}.${O(t)}`,o[i]=f.itemRelativeUrl})).catch((()=>{}))),R(t,e,f,c,s.resources.toAdd),o[i]=f.itemRelativeUrl}function R(t,e,r,n,o){o.push({resource:r,content:n,finish:r=>{!function(t,e,r){"string"==typeof t[e]?t[e]=r.url:t[e].url=r.url}(t,e,r)}})}function $(t,e,r){return"string"==typeof t?{url:e}:new Blob([JSON.stringify(t.toJSON(r))],{type:"application/json"})}export{S as g};
//# sourceMappingURL=persistable.2e27d0f9.js.map