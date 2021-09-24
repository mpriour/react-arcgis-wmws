var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,o=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&a(e,i,t[i]);if(s)for(var i of s(t))r.call(t,i)&&a(e,i,t[i]);return e},l=(e,s)=>t(e,i(s));import{dI as u,b_ as c,dG as f,dN as h,dH as d,dO as p,bZ as m,cb as y,c9 as g,ca as b,c8 as x,dP as v,d0 as w,cI as S,a1 as M,dQ as T,dR as z,dS as _,bL as E,dT as F,cL as V,cQ as I,d5 as C,cJ as L,bb as P,dF as R,F as O,G as B,dU as N,H as k,dV as A,b0 as j,x as D,K as H,M as W,dW as $,z as q,E as G,B as K,dX as J,b1 as U,dY as X}from"./vendor.7103ff48.js";import{m as Y,A as Z,E as Q,X as ee}from"./Utils.8f00ae04.js";import{f as te,A as ie}from"./MaterialKey.8df623c8.js";import{o as se}from"./visualVariablesUtils.f42dea16.js";import{h as ne,t as re}from"./CIMSymbolHelper.da5834c9.js";import{k as ae}from"./definitions.e5e12ce7.js";import{t as oe}from"./Rect.db562a93.js";import{C as le}from"./BidiEngine.af5bfcbd.js";import{x as ue}from"./MD5.86afbcc5.js";const ce=new le;function fe(e){if(!ce.hasBidiChar(e))return[e,!1];let t;return t="rtl"===ce.checkContextual(e)?"IDNNN":"ICNNN",[ce.bidiTransform(e,t,"VLYSN"),!0]}var he,de,pe;function me(e){switch(e){case"left":return he.Left;case"right":return he.Right;case"center":case"justify":return he.Center}}function ye(e){switch(e){case"top":return de.Top;case"middle":return de.Center;case"baseline":return de.Baseline;case"bottom":return de.Bottom}}function ge(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[he.Right,de.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[he.Center,de.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[he.Left,de.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[he.Right,de.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":return[he.Center,de.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[he.Left,de.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[he.Right,de.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[he.Center,de.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[he.Left,de.Top];case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[he.Center,de.Baseline];default:return console.debug(`Found invalid placement type ${e}`),[he.Center,de.Center]}}function be(e){switch(e){case he.Right:return-1;case he.Center:return 0;case he.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function xe(e){switch(e){case de.Top:return 1;case de.Center:return 0;case de.Bottom:case de.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function ve(e){switch(e){case"left":return he.Left;case"right":return he.Right;case"center":case"justify":return he.Center}}(pe=he||(he={}))[pe.Left=-1]="Left",pe[pe.Center=0]="Center",pe[pe.Right=1]="Right",function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(de||(de={}));class we{constructor(e,t,i,s){this.center=u(e,t),this.centerT=c(),this.halfWidth=i/2,this.halfHeight=s/2,this.width=i,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(e){this.center[0]=e}set y(e){this.center[1]=e}clone(){return new we(this.x,this.y,this.width,this.height)}serialize(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.push(this.width),e.push(this.height),e}findCollisionDelta(e,t=4){const i=Math.abs(e.centerT[0]-this.centerT[0]),s=Math.abs(e.centerT[1]-this.centerT[1]),n=(e.halfWidth+this.halfWidth+t)/i,r=(e.halfHeight+this.halfHeight+t)/s,a=Math.min(n,r);return f(a)}extend(e){const t=Math.min(this.xmin,e.xmin),i=Math.min(this.ymin,e.ymin),s=Math.max(this.xmax,e.xmax)-t,n=Math.max(this.ymax,e.ymax)-i,r=t+s/2,a=i+n/2;this.width=s,this.height=n,this.halfWidth=s/2,this.halfHeight=n/2,this.x=r,this.y=a}static deserialize(e){const t=e.readF32(),i=e.readF32(),s=e.readInt32(),n=e.readInt32();return new we(t,i,s,n)}}const Se=Math.PI/180;class Me{constructor(e,t,i,s){this._rotationT=d(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const n=i.rect,r=new Float32Array(8);e*=s,t*=s;const a=i.code?n.width*s:i.metrics.width,o=i.code?n.height*s:i.metrics.height;r[0]=e,r[1]=t,r[2]=e+a,r[3]=t,r[4]=e,r[5]=t+o,r[6]=e+a,r[7]=t+o,this._data=r,this._setTextureCoords(n),this._scale=s,this._mosaic=i,this.x=e,this.y=t,this.maxOffset=Math.max(e+a,t+o)}get width(){return this._mosaic.metrics.width*this._scale}get mosaic(){return this._mosaic}set angle(e){this._angle=e,x(this._rotationT),b(this._rotationT,this._rotationT,-e),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:e,width:t}=this._mosaic.metrics,i=t*this._scale,s=Math.abs(e)*this._scale,n=new Float32Array(8);n[0]=this.x,n[1]=this.y,n[2]=this.x+i,n[3]=this.y,n[4]=this.x,n[5]=this.y+s,n[6]=this.x+i,n[7]=this.y+s;const r=p(d(),this._rotationT,this._T);v(n,n,r);let a=1/0,o=1/0,l=0,u=0;for(let d=0;d<4;d++){const e=n[2*d],t=n[2*d+1];a=Math.min(a,e),o=Math.min(o,t),l=Math.max(l,e),u=Math.max(u,t)}const c=l-a,f=u-o,h=a+c/2,m=o+f/2;this._bounds=new we(h,m,c,f)}return this._bounds}setTransform(e){this._T=e,this._offsets=null}_setOffsets(e){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const t=this._offsets,i=new Float32Array(8),s=p(d(),this._rotationT,this._T);v(i,e,s),t.upperLeft=Y(8*i[0],8*i[1]),t.upperRight=Y(8*i[2],8*i[3]),t.lowerLeft=Y(8*i[4],8*i[5]),t.lowerRight=Y(8*i[6],8*i[7])}_setTextureCoords({x:e,y:t,width:i,height:s}){this._texcoords={upperLeft:Y(e,t),upperRight:Y(e+i,t),lowerLeft:Y(e,t+s),lowerRight:Y(e+i,t+s)}}}const Te=(e,t)=>({code:0,page:0,sdf:!0,rect:new oe(0,0,11,8),textureBinding:t,metrics:{advance:0,height:4,width:e,left:0,top:0}});class ze{constructor(e,t,i){this._rotation=0,this._decorate(e,t,i),this.glyphs=e,this.bounds=this._createBounds(e),this.isMultiline=t.length>1,this._hasRotation=0!==i.angle,this._T=this._createGlyphTransform(this.bounds,i);for(const s of e)s.setTransform(this._T)}setRotation(e){if(0===e&&0===this._rotation)return;this._rotation=e;const t=this._T,i=h(d(),e);p(t,i,t);for(const s of this.glyphs)s.setTransform(this._T)}_decorate(e,t,i){if(!i.decoration||"none"===i.decoration||!e.length)return;const s=i.scale,n="underline"===i.decoration?30:20,r=e[0].textureBinding;for(const a of t){const t=a.startX*s,i=a.startY*s,o=(a.width+a.glyphWidthEnd)*s;e.push(new Me(t,i+n*s,Te(o,r),1))}}get boundsT(){const e=this.bounds,t=m(c(),e.x,e.y);if(y(t,t,this._T),this._hasRotation){const i=Math.max(e.width,e.height);return new we(t[0],t[1],i,i)}return new we(t[0],t[1],e.width,e.height)}_createBounds(e){let t=1/0,i=1/0,s=0,n=0;for(const o of e)t=Math.min(t,o.xTopLeft),i=Math.min(i,o.yTopLeft),s=Math.max(s,o.xTopLeft+o.width),n=Math.max(n,o.yBottomRight);const r=s-t,a=n-i;return new we(t+r/2,i+a/2,r,a)}_createGlyphTransform(e,t){const i=Se*t.angle,s=d(),n=c();return g(s,s,m(n,t.xOffset,-t.yOffset)),t.isCIM?b(s,s,i):(g(s,s,m(n,e.x,e.y)),b(s,s,i),g(s,s,m(n,-e.x,-e.y))),s}}class _e{constructor(e,t,i,s,n,r){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(t,i)),this.end=Math.max(0,Math.max(t,i)),this.end<e.length&&(this.glyphWidthEnd=e[this.end].metrics.width),this.width=s,this.yMin=n,this.yMax=r}}const Ee=e=>10===e,Fe=e=>32===e;function Ve(e,t,i){const s=i.scale,n=new Array,r=function(e,t,i){const s=new Array,n=1/i.scale,r=i.maxLineWidth*n,a=t?e.length-1:0,o=t?-1:e.length,l=t?-1:1;let u=a,c=0,f=0,h=u,d=h,p=0,m=1/0,y=0;for(;u!==o;){const{code:t,metrics:i}=e[u],n=Math.abs(i.top);if(Ee(t)||Fe(t)||(m=Math.min(m,n),y=Math.max(y,n+i.height)),Ee(t))u!==a&&(s.push(new _e(e,h,u-l,c,m,y)),m=1/0,y=0),c=0,h=u+l,d=u+l,f=0;else if(Fe(t))d=u+l,f=0,p=i.advance,c+=i.advance;else if(c>r){if(d!==h){const t=d-2*l;c-=p,s.push(new _e(e,h,t,c-f,m,y)),m=1/0,y=0,h=d,c=f}else s.push(new _e(e,h,u-l,c,m,y)),m=1/0,y=0,h=u,d=u,c=0;c+=i.advance,f+=i.advance}else c+=i.advance,f+=i.advance;u+=l}const g=new _e(e,h,u-l,c,m,y);return g.start>=0&&g.end<e.length&&s.push(g),s}(e,t,i),a=function(e,t){let i=0;for(let r=0;r<e.length;r++){const{width:t}=e[r];i=Math.max(t,i)}const s="underline"===t.decoration?4:0,n=e[0].yMin;return{x:0,y:n,height:e[e.length-1].yMax+t.lineHeight*(e.length-1)+s-n,width:i}}(r,i),{vAlign:o,hAlign:l}=i,u=o===de.Baseline?1:0,c=u?0:o-1,f=(1-u)*-a.y+c*(a.height/2)+-26*(u?1:0);for(let h=0;h<r.length;h++){const{start:t,end:a,width:o}=r[h];let u=-1*(l+1)*(o/2)-3;const c=h*i.lineHeight+f-3;r[h].startX=u,r[h].startY=c;for(let i=t;i<=a;i++){const t=e[i];if(Ee(t.code))continue;const r=new Me(u+t.metrics.left,c-t.metrics.top,t,s);u+=t.metrics.advance,n.push(r)}}return new ze(n,r,i)}const Ie=Math.PI/180,Ce=d(),Le=c(),Pe=512,Re=50;function Oe(e,t){if(!t.isWrappable)return null;const[i,s]=w(t);return e[2]>s?[S([e[0],e[1],s,e[3]]),S([i,e[1],i+e[2]-s,e[3]])]:e[0]<i?[S([i,e[1],e[2],e[3]]),S([s-(i-e[0]),e[1],s,e[3]])]:null}function Be(e,t,i,s,n,r,a){if(!s||!i.symbol)return e[0]=e[1]=e[2]=e[3]=0,t[0]=t[1]=t[2]=t[3]=0,e;const o=s;if(!V(o)){I(e,o);let s=t[0];0===s&&(s=Ye(i),t[0]=s);const r=n*s/2;return e[0]-=r,e[1]-=r,e[2]+=r,e[3]+=r,e}{const s=o.x,l=o.y;"esriTS"===i.symbol.type&&0===t[2]&&0===t[3]&&Ze(t,i.symbol,i.mosaicItem),function(e,t,i,s,n,r,a,o){let l;switch(s.type){case"esriSMS":case"esriPMS":l=Je(t,i,s,r,a,0);break;case"esriTS":l=Xe(t,i,s,n,r,0);break;case"cim":case"CIMSymbolReference":case"expanded-cim":l=Ue(t,i,s,r,a,0)}let u,c,f=0;for(let p=0;p<l.rings[0].length-1;p++)c=l.rings[0][p],u=(t-c[0])*(t-c[0])+(i-c[1])*(i-c[1]),f=Math.max(f,u);f=Math.sqrt(f);let h=C(t-f,o),d=C(t+f,o);if(h>d){const e=L(o);if(e){const[t,i]=e.valid;h=t,d=i}}e[0]=h,e[1]=i-f,e[2]=d,e[3]=i+f}(e,s,l,i.symbol,t,n,r,a)}return e}function Ne(e){return"text"===e||"esriTS"===e}function ke(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function Ae(e){switch(M(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}const je=c(),De=c(),He=c(),We=c(),$e=c(),qe=c(),Ge=c();function Ke(e,t,i,s){m(He,t,i);const n=e.paths;let r,a,o,l,u,c,f,h,d,p=1/0;for(let y=0;y<n.length;y++){const e=n[y];if(!(e.length<2))for(let n=1;n<e.length;n++)r=e[n-1][0],o=e[n-1][1],a=e[n][0],l=e[n][1],u=Math.min(r,a)-s,c=Math.min(o,l)-s,f=Math.max(r,a)+s,h=Math.max(o,l)+s,t<u||t>f||i<c||i>h||(m(je,r,o),m(De,a,l),T(We,De,je),T($e,je,He),z(qe,We,_(We,$e)/_(We,We)),T(Ge,$e,qe),d=_(Ge,Ge),p>d&&(p=d))}return Math.sqrt(p)<=s}function Je(e,t,i,s,n,r){let a,o;const l=E(i.xoffset),u=E(i.yoffset),c=Ie*i.angle,f=Ie*r;switch(i.type){case"esriSMS":a=o=E(i.size);break;case"esriPMS":a=E(i.width),o=E(i.height)}n<.04&&(s=.04*s/n);const h=x(Ce);g(h,h,m(Le,e,t)),b(h,h,f-c),F(h,h,m(Le,s,-s)),g(h,h,m(Le,l,-u));const d=[0,0];y(d,m(Le,-.5*a,-.5*o),h);const p=[0,0];y(p,m(Le,-.5*a,.5*o),h);const v=[0,0];y(v,m(Le,.5*a,-.5*o),h);const w=[0,0];return y(w,m(Le,.5*a,.5*o),h),{rings:[[d,v,w,p,d]]}}function Ue(e,t,i,s,n,r){const a=ne.getEnvelope(i.data);if(!a)return null;n<.04&&(s=.04*s/n);const o=E(a.width),l=E(a.height),u=E(a.x),c=E(a.y),f=0*Ie,h=Ie*r,d=x(Ce);g(d,d,m(Le,e,t)),b(d,d,h-f),F(d,d,m(Le,s,s));const p=[0,0];y(p,m(Le,u,c+l),d);const v=[0,0];y(v,m(Le,u,c),d);const w=[0,0];y(w,m(Le,u+o,c+l),d);const S=[0,0];return y(S,m(Le,u+o,c),d),{rings:[[p,w,S,v,p]]}}function Xe(e,t,i,s,n,r){const a=E(i.xoffset),o=E(i.yoffset),l=Ie*i.angle,u=Ie*r,c=x(Ce);g(c,c,m(Le,e,t)),b(c,c,u),F(c,c,m(Le,n,-n));const f=s[0]+s[2]/2,h=s[1]+s[3]/2;g(c,c,m(Le,a,-o)),g(c,c,m(Le,f,h)),b(c,c,l),g(c,c,m(Le,-f,-h));const d=[0,0];y(d,m(Le,s[0],s[1]),c);const p=[0,0];y(p,m(Le,s[0],s[1]+s[3]),c);const v=[0,0];y(v,m(Le,s[0]+s[2],s[1]),c);const w=[0,0];return y(w,m(Le,s[0]+s[2],s[1]+s[3]),c),{rings:[[d,v,w,p,d]]}}function Ye(e){switch(e.symbol.type){case"esriSFS":case"esriPFS":{const t=e.symbol.outline;return t?t.width:0}case"esriSLS":return E(e.symbol.width);case"esriSMS":{const t=e.symbol,i=E(t.xoffset),s=E(t.yoffset);return E(t.size)+Math.sqrt(i*i+s*s)}case"esriPMS":{const t=e.symbol,i=E(t.xoffset),s=E(t.yoffset);return E(Math.max(t.width,t.height))+Math.sqrt(i*i+s*s)}case"esriTS":{const t=[0,0,0,0];Ze(t,e.symbol,e.mosaicItem);const i=Math.max(Math.abs(t[0]),Math.abs(t[1]));return Math.max(t[2],t[3])+i}case"expanded-cim":{const t=ne.getEnvelope(e.symbol.data);return t.width!==-1/0&&t.height!==-1/0||(t.width=10,t.height=10,t.x=0,t.y=0),E(Math.sqrt(t.width*t.width+t.height*t.height))}case"composite-symbol":{if(!e.symbol.layers.length)return 0;const t=e.symbol.layers.length-1;return Ye({symbol:e.symbol.layers[t],mosaicItem:null})}default:return 0}}function Ze(e,t,i){if(!i||0===i.glyphMosaicItems.length)return e;const s=fe(t.text)[1],n=Ve(i.glyphMosaicItems,s,{scale:E(t.font.size)/24,angle:t.angle,xOffset:t.xoffset,yOffset:t.yoffset,hAlign:me(t.horizontalAlignment||"center"),vAlign:ye(t.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(t.lineWidth||512,512)),lineHeight:30*Math.max(.25,Math.min(t.lineHeight||1,4)),decoration:t.font.decoration||"none",isCIM:!1}).bounds;return e[0]=E(n.x-n.halfWidth),e[1]=E(n.y-n.halfHeight),e[2]=E(n.width),e[3]=E(n.height),e}const Qe={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1};function et(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const i=t[0];if("stops"===i.transformationType)return i.stops.map((e=>e.size)).reduce(lt,0);if("clamped-linear"===i.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof i.maxSize?i.maxSize:i.maxSize.stops.map((e=>e.size)).reduce(lt,0),t="number"==typeof i.minSize?i.minSize:i.minSize.stops.map((e=>e.size)).reduce(lt,0),Math.max(e,t)}return"real-world-size"===i.transformationType?30:void 0}async function tt(e,t,i){if(!e||i&&"cluster"===i.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?100:200;const s=e.getSymbols(),n=et(e),r=[];for(const o of s)r.push(at(o,n));const a=await Promise.all(r);return E(a.reduce(lt,0))}const it=[0,0,0,0];function st(e,t){return null==e?t:e}const nt={sdf:!0,code:99,metrics:ae.metrics,rect:new re(0,0,24,24),page:0,textureBinding:2};async function rt(e,t){if("simple-marker"===e.type){const i=Math.max(st(e.size,12),t);return ot(e)+.707*i}if("picture-marker"===e.type){const i=Math.max(st(e.height,12),t),s=st(e.width,12)*(i/st(e.height,12))/2,n=i/2;return ot(e)+Math.sqrt(s*s+n*n)}if("text"===e.type){const t=function(e){const t=e.text&&e.text.length;if(!t)return{glyphMosaicItems:[nt]};const i=[];for(let s=0;s<t;s++)i.push(l(o({},nt),{code:e.text.charCodeAt(s)}));return{glyphMosaicItems:i}}(e);Ze(it,e.toJSON(),t);const i=Math.abs(it[0]),s=Math.abs(it[1]),n=it[2],r=it[3];return Math.max(i,s)+Math.max(n,r)}if("simple-line"===e.type){const i=e,s=Math.max(st(i.width,.75),t)/2;return i.marker?Math.max(6*i.width,2*t):s}if("simple-fill"===e.type||"picture-fill"===e.type)return Math.max(function(e,t){return null==e.outline?t:st(e.outline.width,t)}(e,0),t)/2;if("cim"===e.type){const t=ne.getEnvelope(e.data);return t?Math.sqrt(t.width*t.width+t.height*t.height):0}return"web-style"===e.type?rt(await e.fetchCIMSymbol(),t):0}async function at(e,t){return function(e){return e.type in Qe}(e)?Math.min(await rt(e,t),75):0}function ot(e){const t=st(e.xoffset,0),i=st(e.yoffset,0);return Math.sqrt(t*t+i*i)}function lt(e,t){return Math.max(e,t)}const ut=P.getLogger("esri.renderers.visualVariables.support.utils"),ct=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),i=t.visualVariables.map((e=>ht(e)?dt(e):e));return t.visualVariables=i,t};function ft(e){return e.map((e=>ht(e)?dt(e.clone()):e))}function ht(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function dt(e){return e.stops=function(e,t){return t.length<=8?t:(ut.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[i,...s]=t,n=s.pop(),r=s[0].value,a=s[s.length-1].value,o=(a-r)/6,l=[];for(let u=r;u<a;u+=o){let i=0;for(;u>=s[i].value;)i++;const n=s[i],r=t[i-1],a=u-r.value,o=n.value===r.value?1:a/(n.value-r.value);if("color"===e){const e=s[i],n=t[i-1],r=e.color.clone();r.r=pt(n.color.r,r.r,o),r.g=pt(n.color.g,r.g,o),r.b=pt(n.color.b,r.b,o),r.a=pt(n.color.a,r.a,o),l.push({value:u,color:r,label:e.label})}else if("size"===e){const e=s[i],n=t[i-1],r=R(e.size),a=pt(R(n.size),r,o);l.push({value:u,size:a,label:e.label})}else{const e=s[i],n=pt(t[i-1].opacity,e.opacity,o);l.push({value:u,opacity:n,label:e.label})}}return[i,...l,n]}(e,t):function(e){const[t,...i]=e,s=i.pop();for(;i.length>6;){let e=0,t=0;for(let s=1;s<i.length;s++){const n=i[s-1],r=i[s],a=Math.abs(r.value-n.value);a>t&&(t=a,e=s)}i.splice(e,1)}return[t,...i,s]}(t))}(e.type,e.stops),e}function pt(e,t,i){return(1-i)*e+i*t}var mt;let yt=mt=class extends A{writeLevels(e,t,i){for(const s in e){const e=this.levels[s];return void(t.stops=e)}}clone(){return new mt({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:j(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:j(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:D(this.levels)})}};O([B()],yt.prototype,"levels",void 0),O([N("levels")],yt.prototype,"writeLevels",null),yt=mt=O([k("esri.views.2d.engine.LevelDependentSizeVariable")],yt);const gt=P.getLogger("esri.views.2d.layers.support.clusterUtils");H.add("esri-cluster-arcade-enabled",!0);const bt=H("esri-cluster-arcade-enabled"),xt=(e,t,i,s)=>{const n=t.clone();if(!Mt(n))return n;if(i.fields)for(const r of i.fields)Tt(e,r);if("visualVariables"in n){const t=(n.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),r=vt(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=_t(e,t.field,"avg_angle"):t.valueExpression&&(t.field=zt(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=_t(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=_t(e,t.field,"avg"):(t.field=zt(e,t.valueExpression,"avg"),t.valueExpression=null)})),W(r)&&!wt(t)&&(t.push(St(i,s)),n.dynamicClusterSize=!0),n.visualVariables=t}switch(n.type){case"simple":break;case"unique-value":n.field?n.field=_t(e,n.field,"mode"):n.valueExpression&&(n.field=zt(e,n.valueExpression,"mode"),n.valueExpression=null);break;case"class-breaks":n.normalizationField?(n.field=_t(e,n.field,"norm",n.normalizationField),n.normalizationField=null):n.field?n.field=_t(e,n.field,"avg"):(n.field=zt(e,n.valueExpression,"avg"),n.valueExpression=null)}return n},vt=e=>{for(const t of e)if("size"===t.type)return t;return null},wt=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},St=(e,t)=>{const i=[new $({value:0,size:0}),new $({value:1})];if(W(t))return new A({field:"cluster_count",stops:[...i,new $({value:2,size:0})]});const s=Object.keys(t).reduce(((s,n)=>l(o({},s),{[n]:[...i,new $({value:Math.max(2,t[n].minValue),size:e.clusterMinSize}),new $({value:Math.max(3,t[n].maxValue),size:e.clusterMaxSize})]})),{});return new yt({field:"cluster_count",levels:s})},Mt=e=>{const t=t=>gt.error(new q("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const i=e.normalizationType;if("field"!==i)return t(`FeatureReductionCluster does not support a normalizationType of ${i}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!bt){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function Tt(e,t){const{name:i,outStatistic:s}=t,{onStatisticField:n,onStatisticValueExpression:r,statisticType:a}=s;if(r){const t=ue(r.toLowerCase());e.push({name:i,outStatistic:{onStatisticField:t,onStatisticValueExpression:r,statisticType:a}})}else n?e.push({name:i,outStatistic:{onStatisticField:n,statisticType:a}}):gt.error(new q("mapview-unsupported-field","Unable to handle field",{field:t}))}function zt(e,t,i){const s=ue(t),n="mode"===i?`cluster_type_${s}`:`cluster_avg_${s}`;return e.some((e=>e.name===n))||e.push({name:n,outStatistic:{onStatisticField:s,onStatisticValueExpression:t,statisticType:i}}),n}function _t(e,t,i,s){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const n=function(e,t,i){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=i,s="field",n=t.toLowerCase()+",norm:"+s+","+e.toLowerCase();return"cluster_avg_"+ue(n)}}}(i,t,s);return e.some((e=>e.name===n))||("norm"===i?e.push({name:n,outStatistic:{onStatisticField:t,onStatisticNormalizationField:s,statisticType:i}}):e.push({name:n,outStatistic:{onStatisticField:t,statisticType:i}})),n}const Et=new G({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function Ft(e){return Et.toJSON(e)}const Vt=P.getLogger("esri.views.2d.layers.features.schemaUtils"),It="ValidationError",Ct={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function Lt(e){return te(e)}function Pt(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}:X(e.toJSON()).toJSON()}function Rt(e,t,i){if(!e)return null;let s=0,n=!1,r=0;switch(K(t)&&(r=et(t),"visualVariables"in t&&(s=function(e){if(!e)return Z.NONE;let t=0;for(const i of e)if("size"===i.type){const e=se(i);t|=e,"outline"===i.target&&(t|=e<<4)}else"color"===i.type?t|=Z.COLOR:"opacity"===i.type?t|=Z.OPACITY:"rotation"===i.type&&(t|=Z.ROTATION);return t}(t.visualVariables||[]),n="dot-density"===t.type)),e.type){case"simple-fill":case"picture-fill":return function(e,t,i,s){const n=ie(Q.FILL,t,!1,i),r=s?Lt(n):n,a=e.clone(),l=a.outline;a.outline=null;const u=[],c=o({materialKey:r,hash:a.hash()},Pt(a));if(u.push(c),l){const e=ie(Q.LINE,t,!0,!1),i=o({materialKey:s?Lt(e):e,hash:l.hash()},Pt(l));u.push(i)}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,s,n,i);case"simple-marker":case"picture-marker":return function(e,t,i,s){const n=ie(Q.MARKER,t,!1,!1),r=s?Lt(n):n,a=Pt(e);return l(o({materialKey:r,hash:e.hash()},a),{angle:e.angle,maxVVSize:i})}(e,s,r,i);case"simple-line":return function(e,t,i){const s=ie(Q.LINE,t,!1,!1),n=i?Lt(s):s,r=e.clone(),a=r.marker;r.marker=null;const l=[];if(l.push(o({materialKey:n,hash:r.hash()},Pt(r))),a){var u;const e=ie(Q.MARKER,t,!1,!1),s=i?Lt(e):e;a.color=null!=(u=a.color)?u:r.color,l.push(o({materialKey:s,hash:a.hash(),lineWidth:r.width},Pt(a)))}return{type:"composite-symbol",layers:l,hash:l.reduce(((e,t)=>t.hash+e),"")}}(e,s,i);case"text":return function(e,t,i,s){const n=ie(Q.TEXT,t,!1,!1),r=s?Lt(n):n,a=Pt(e);return l(o({materialKey:r,hash:e.hash()},a),{angle:e.angle,maxVVSize:i})}(e,s,r,i);case"label":return function(e,t,i){const s=e.toJSON(),n=ie(Q.LABEL,t,!1,!1,s.labelPlacement);return l(o({materialKey:i?Lt(n):n,hash:e.hash()},s),{labelPlacement:s.labelPlacement})}(e,s,i);case"cim":return{type:"cim",rendererKey:s,data:e.data,maxVVSize:r};case"web-style":return l(o({},Pt(e)),{type:"web-style",hash:e.hash(),rendererKey:s,maxVVSize:r});default:throw new Error(`symbol not supported ${e.type}`)}}function Ot(e,t){const i=D(e);return i.some((e=>function(e,t){const i=e.labelPlacement,s=Ct[t];if(!e.symbol)return Vt.warn("No ILabelClass symbol specified."),!0;if(!s)return Vt.error(new q("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!s.some((e=>e===i))){const n=s[0];i&&Vt.warn(`Found invalid label placement type ${i} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:i}function Bt(e){return H("esri-2d-update-debug")&&console.debug("Created new schema",Nt(e,!0)),Nt(e)}function Nt(e,t=!1){try{var i,s;const n=function(e,t=!1){const i=new Array;return i.push(function(e,t,i=!1){const s={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,r=n?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{}},n={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},o={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:n,mesh:{matcher:t,aggregateMatcher:null,labels:a,sortKey:null}},l=new Set;let u=0;for(const{renderer:c,subtypeCode:f,labelingInfo:h,labelsVisible:d}of e.sublayers){const e=qt(s,r,c,i),o=$t(s,r,c),p=d&&h;if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new q(It,"Visual variables are currently not supported for subtype layers");if("dictionary"===e.type)throw new q(It,"Dictionary renderer is not supported in subtype layers");if("subtype"===e.type)throw new q(It,"Nested subtype renderers is not supported");if(K(o)&&"subtype"===o.type)throw new q(It,"Nested subtype storage is not supported");if(K(o)&&"dot-density"===o.type)throw new q(It,"Dot density attributes are not supported in subtype layers");if(l.has(f))throw new q(It,"Subtype codes for sublayers must be unique");l.add(f),t.renderers[f]=e,n.mapping[f]=o,p&&(a.classes[f]=p.map((e=>Wt(c,s,e,"feature",u++,i))))}return o}if("heatmap"===e.renderer.type){const{blurRadius:t,fieldOffset:i,field:n}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:r,storage:null,mesh:{blurRadius:t,fieldOffset:i,field:Dt(s,{target:r,field:n,resultType:"numeric"}).field}}}{const t=[],a="aggregate"===r?xt(t,e.renderer,n,null):e.renderer;!function(e,t){const i={mesh:!0,storage:!0};for(const s of t){const{name:t,outStatistic:n}=s,{statisticType:r,onStatisticField:a}=n;let o=null,l=null,u=null;const c="numeric",f="feature";"onStatisticValueExpression"in n?l=Ht(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in n?(o=Ht(e,{type:"field",target:f,field:a,resultType:c}).field,u=n.onStatisticNormalizationField):o=Ht(e,{type:"field",target:f,field:a,resultType:c}).field,Ht(e,{type:"statistic",target:"aggregate",name:t,context:i,inField:o,inNormalizationField:u,inFieldIndex:l,statisticType:r})}}(s,t);const o=qt(s,r,a,i);let l=null;const u=$t(s,r,a),c=Ft(e.geometryType);let f=e.labelsVisible&&e.labelingInfo||[],h=[];if(n){if("selection"===n.type)throw new q(It,"Mapview does not support `selection` reduction type",n);if(n.symbol){const e=new J({symbol:n.symbol,visualVariables:"visualVariables"in a?a.visualVariables:null});l=qt(s,r,e,i)}h=n&&n.labelsVisible&&n.labelingInfo||[]}f=Ot(f,c),h=Ot(h,c);let d=0;const p=[...f.map((e=>Wt(a,s,e,"feature",d++,i))),...h.map((e=>Wt(a,s,e,"aggregate",d++,i)))],m=function(e,t){if(W(t)||!t.length)return null;t.length>1&&Vt.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const i=t[0],s="ascending"===i.order?"asc":"desc";if(i.field)return{field:i.field,order:s};if(i.valueExpression)return{fieldIndex:Ht(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:s};return Vt.error(new q(It,"Expected to find a field or valueExpression for OrderByInfo",i)),null}(s,e.orderBy);return{type:"symbol",target:r,attributes:s,aggregateFields:t,storage:u,mesh:{matcher:o,labels:{type:"simple",classes:p},aggregateMatcher:l,sortKey:m}}}}(e,t)),i}(e,t),r={};return n.map((t=>function(e,t,i){switch(i.target){case"feature":return void jt(e,At(t),i);case"aggregate":{if(!("featureReduction"in t))return;const s=t.featureReduction;if("selection"===s.type)throw new q(It,"Mapview does not support `selection` reduction type",s);return jt(e,At(t),i),void function(e,t,i){e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:E(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(E(t.clusterMaxSize)/64),fields:i.aggregateFields}}),kt(e.aggregate,i.attributes.fields)}(e,s,i)}}}(r,e,t))),{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(i=e.historicMoment)?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(s=e.timeExtent)?void 0:s.toJSON()},attributes:{fields:{},indexCount:0},processors:n,targets:r}}catch(n){if(n.fieldName===It)return Vt.error(n),null;throw n}}function kt(e,t){for(const i in t){const s=t[i];if(s.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||s.context.mesh,n.context.storage=n.context.storage||s.context.storage):e.attributes[i]=s}return e}function At(e){var t,i,s,n,r;return[null!=(t=null==(i=e.filter)?void 0:i.toJSON())?t:null,null!=(s=null==(n=e.effect)||null==(r=n.filter)?void 0:r.toJSON())?s:null]}function jt(e,t,i){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),kt(e.feature,i.attributes.fields),e}function Dt(e,t){return t.field?Ht(e,l(o({},t),{type:"field",field:t.field})):t.valueExpression?Ht(e,l(o({},t),{type:"expression",valueExpression:t.valueExpression})):{field:null,fieldIndex:null}}function Ht(e,t){switch(t.type){case"expression":{const i=t.valueExpression;if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=l(o({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(t.label);if(!e.fields[i]){const s=e.indexCount++;e.fields[i]=l(o({},t),{name:i,fieldIndex:s})}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=t.field;return"aggregate"===t.target&&e.fields[i]||(e.fields[i]=l(o({},t),{name:i})),{field:i}}case"statistic":return e.fields[t.name]=o({},t),{field:t.name}}}function Wt(e,t,i,s,n,r=!1){const a=Ht(t,{type:"label-expression",target:s,context:{mesh:!0},resultType:"string",label:{labelExpression:i.labelExpression,labelExpressionInfo:i.labelExpressionInfo?{expression:i.labelExpressionInfo.expression}:null,symbol:!!i.symbol,where:i.where}}),{fieldIndex:u}=a;return l(o({},Rt(i,e,r)),{fieldIndex:u,target:s,index:n})}function $t(e,t,i){switch(i.type){case"dot-density":return function(e,t,i){return i&&i.length?{type:"dot-density",mapping:i.map(((i,s)=>{const{field:n,fieldIndex:r}=Dt(e,{valueExpression:i.valueExpression,field:i.field,resultType:"numeric",target:t});return{binding:s,field:n,fieldIndex:r}})),target:t}:{type:"dot-density",mapping:[],target:t}}(e,t,i.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return function(e,t,i){if(!i||!i.length)return{type:"visual-variable",mapping:[],target:t};const s={storage:!0},n="numeric";return{type:"visual-variable",mapping:ft(i).map((i=>{var r;const a=ee(i.type),{field:o,fieldIndex:l}=Dt(e,{target:t,valueExpression:i.valueExpression,field:i.field,context:s,resultType:n});switch(i.type){case"size":return"$view.scale"===i.valueExpression?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:Dt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field,valueRepresentation:null!=(r=i.valueRepresentation)?r:null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:Dt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:Dt(e,{target:t,field:i.normalizationField,context:s,resultType:n}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}})).filter((e=>e)),target:t}}(e,t,i.visualVariables);case"heatmap":return null}}function qt(e,t,i,s=!1){const n=U(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return function(e,t,i,s=!1){const n=t.getSymbols();return{type:"simple",symbol:Rt(n.length?n[0]:null,t,s),isDotDensity:i}}(0,i,"dot-density"===i.type,s);case"class-breaks":return function(e,t,i,s=!1){const n={mesh:!0,use:"renderer.field"},r=i.backgroundFillSymbol,{field:a,fieldIndex:o}=Dt(e,{target:t,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),l=i.normalizationType,u="log"===l?"esriNormalizeByLog":"percent-of-total"===l?"esriNormalizeByPercentOfTotal":"field"===l?"esriNormalizeByField":null,c=i.classBreakInfos.map((e=>({symbol:Rt(e.symbol,i,s),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:a,fieldIndex:o,backgroundFillSymbol:Rt(r,i,s),defaultSymbol:Rt(i.defaultSymbol,i,s),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:u,isMaxInclusive:i.isMaxInclusive}}(n,t,i,s);case"unique-value":return function(e,t,i,s=!1){const n=[],r=i.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new q(It,"Expected renderer.field to be a string",i);const{field:u,fieldIndex:c}=Dt(e,l(o({},a),{field:i.field,valueExpression:i.valueExpression}));for(const o of i.uniqueValueInfos)n.push({value:""+o.value,symbol:Rt(o.symbol,i,s)});return{type:"map",attributes:e.fields,field:u,fieldIndex:c,field2:Dt(e,l(o({},a),{field:i.field2})).field,field3:Dt(e,l(o({},a),{field:i.field3})).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:Rt(r,i),defaultSymbol:Rt(i.defaultSymbol,i),map:n}}(n,t,i,s);case"dictionary":return function(e,t,i=!1){return{type:"dictionary",renderer:t.toJSON()}}(0,i,s)}}export{Ne as A,ke as C,Ke as D,Rt as F,Je as G,Ae as H,Ue as J,Xe as K,Bt as M,Re as P,qt as Q,Be as T,Ve as a,ye as b,ge as c,be as d,Ft as e,vt as f,St as g,xt as h,ct as i,Mt as m,fe as n,xe as o,Oe as q,me as r,ve as s,tt as u,Pe as z};
//# sourceMappingURL=schemaUtils.c28cd36f.js.map