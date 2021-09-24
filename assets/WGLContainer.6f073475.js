var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{bb as o,eD as c,b2 as h,z as f,eE as p,bZ as l,B as d,bO as m,eF as u,c2 as g,cD as y,M as _,bU as x,c7 as w}from"./vendor.7103ff48.js";import{G as b}from"./brushes.b64b90a9.js";import{n as v}from"./Container.f525a10f.js";import{m as B,I as P}from"./Utils.8f00ae04.js";const A=o.getLogger("esri.views.2d.engine.webgl.Mesh2D"),E=(e,t,r,s)=>{let i=0;for(let n=1;n<r;n++){const r=e[2*(t+n-1)],s=e[2*(t+n-1)+1];i+=(e[2*(t+n)]-r)*(e[2*(t+n)+1]+s)}return s?i>0:i<0},I=({coords:e,lengths:t},r)=>{const s=[];for(let i=0,n=0;i<t.length;n+=t[i],i+=1){const a=n,o=[];for(;i<t.length-1&&E(e,n+t[i],t[i+1],r);i+=1,n+=t[i])o.push(n+t[i]-a);const c=e.slice(2*a,2*(n+t[i])),h=u(c,o,2);for(const e of h)s.push(e+a)}return s};class R{constructor(e,t,r,s=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=r,this.isMapSpace=s}static fromRect({x:e,y:t,width:r,height:s}){const i=e,n=t,a=i+r,o=n+s;return R.fromScreenExtent({xmin:i,ymin:n,xmax:a,ymax:o})}static fromPath(e){const t=c(new h,e.path,!1,!1),r=t.coords,s=new Uint32Array(I(t,!0)),i=new Uint32Array(r.length/2);for(let n=0;n<i.length;n++)i[n]=B(Math.floor(r[2*n]),Math.floor(r[2*n+1]));return new R({geometry:i},s,4)}static fromGeometry(e,t){const r=t.geometry.type;switch(r){case"polygon":return R.fromPolygon(e,t.geometry);case"extent":return R.fromMapExtent(e,t.geometry);default:return A.error(new f("mapview-bad-type",`Unable to create a mesh from type ${r}`,t)),R.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const r=p(new h,t,!1,!1),s=r.coords,i=new Uint32Array(I(r,!1)),n=new Uint32Array(s.length/2),a=g(),o=g();for(let c=0;c<n.length;c++)l(a,s[2*c],s[2*c+1]),e.toScreen(o,a),n[c]=B(Math.floor(o[0]),Math.floor(o[1]));return new R({geometry:n},i,4,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:r,ymax:s}){const i={geometry:new Uint32Array([B(e,r),B(t,r),B(e,s),B(e,s),B(t,r),B(t,s)])},n=new Uint32Array([0,1,2,3,4,5]);return new R(i,n,4)}static fromMapExtent(e,t){const[r,s]=e.toScreen([0,0],[t.xmin,t.ymin]),[i,n]=e.toScreen([0,0],[t.xmax,t.ymax]),a={geometry:new Uint32Array([B(r,s),B(i,s),B(r,n),B(r,n),B(i,s),B(i,n)])},o=new Uint32Array([0,1,2,3,4,5]);return new R(a,o,4)}destroy(){d(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)d(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return(e=>{switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new f("Cannot get DataType of array")}})(this.indices)}getIndexBuffer(e,t=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=m.createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,o=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce(((c,h)=>{return f=((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&a(e,r,t[r]);if(s)for(var r of s(t))n.call(t,r)&&a(e,r,t[r]);return e})({},c),p={[h]:m.createVertex(e,o,this.vertices[h])},t(f,r(p));var f,p}),{})),this._cache.vertexBuffers}}const L=o.getLogger("esri.views.2d.engine.webgl.ClippingInfo"),O=e=>parseFloat(e)/100;class M extends y{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",(()=>this._invalidate())),this.ready()}static fromClipArea(e,t){return new M(e,t)}_destroyGL(){d(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),d(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,r,s){const[i,n]=t.size;if("geometry"!==this._clip.type&&this._lastWidth===i&&this._lastHeight===n||(this._lastWidth=i,this._lastHeight=n,this._destroyGL()),_(this._cache.vao)){const i=this._createMesh(t,this._clip),n=i.getIndexBuffer(e),a=i.getVertexBuffers(e);this._cache.mesh=i,this._cache.vao=new x(e,r,s,a,n)}return this._cache.vao}_createTransforms(){return{dvs:w()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[r,s]=e.size,i="string"==typeof t.left?O(t.left)*r:t.left,n="string"==typeof t.right?O(t.right)*r:t.right,a="string"==typeof t.top?O(t.top)*s:t.top,o="string"==typeof t.bottom?O(t.bottom)*s:t.bottom,c=i,h=a;return{x:c,y:h,width:Math.max(r-n-c,0),height:Math.max(s-o-h,0)}}_createMesh(e,t){switch(t.type){case"rect":return R.fromRect(this._createScreenRect(e,t));case"path":return R.fromPath(t);case"geometry":return R.fromGeometry(e,t);default:return L.error(new f("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),R.fromRect({x:0,y:0,width:1,height:1})}}}class C extends v{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e)),this._updateClippingInfo()}_createTransforms(){return{dvs:w()}}doRender(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:s,profiler:i,drawPhase:n}=t,a=n===P.LABEL?1:s*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,a),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,a),i.recordContainerEnd()}renderChildren(e){_(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const r of this.children)r.beforeRender(e);for(const r of this._renderPasses)try{r.render(e)}catch(t){}for(const r of this.children)r.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[b.clip],target:()=>this._clippingInfos,drawPhase:P.MAP|P.LABEL|P.LABEL_ALPHA|P.DEBUG|P.HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(d(this._clippingInfos)&&(this._clippingInfos.forEach((e=>e.destroy())),this._clippingInfos=null),!this.stage)return;const e=this._clips;d(e)&&e.length&&(this._clippingInfos=e.items.map((e=>M.fromClipArea(this.stage,e)))),this.requestRender()}}export{C as a};
//# sourceMappingURL=WGLContainer.6f073475.js.map