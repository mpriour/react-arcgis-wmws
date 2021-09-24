var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,a=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&c(e,n,t[n]);return e},u=(e,r)=>t(e,n(r));import{z as s,bb as l,x as f}from"./vendor.7103ff48.js";const d=!0,g=0,w=10,b=10,y=12,p=16;function h(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+g,w)),version:t.getUint16(n+b,d),checksum:t.getUint32(n+y,d)}}const v=0,U=4,m=8,C=16,A=24,I=32,O=40,B=48,F=56,L=64,M=72,T=80,x=84,z=88;function k(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=h(e,t,n);if(n+=p,"LEPCC     "!==r)throw new s("lepcc-decode-error","Bad identifier");if(o>1)throw new s("lepcc-decode-error","Unknown version");const i=(a=n,{sizeLo:(c=t).getUint32(a+v,d),sizeHi:c.getUint32(a+U,d),minX:c.getFloat64(a+m,d),minY:c.getFloat64(a+C,d),minZ:c.getFloat64(a+A,d),maxX:c.getFloat64(a+I,d),maxY:c.getFloat64(a+O,d),maxZ:c.getFloat64(a+B,d),errorX:c.getFloat64(a+F,d),errorY:c.getFloat64(a+L,d),errorZ:c.getFloat64(a+M,d),count:c.getUint32(a+T,d),reserved:c.getUint32(a+x,d)});var c,a;if(n+=z,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new s("lepcc-decode-error","Bad size");const u=new Float64Array(3*i.count),l=[],f=[],g=[],w=[];if(n=D(e,n,l),n=D(e,n,f),n=D(e,n,g),n=D(e,n,w),n!==e.byteLength)throw new s("lepcc-decode-error","Bad length");let b=0,y=0;for(let s=0;s<l.length;s++){y+=l[s];let e=0;for(let t=0;t<f[s];t++){e+=g[b];const t=w[b];u[3*b]=Math.min(i.maxX,i.minX+2*i.errorX*e),u[3*b+1]=Math.min(i.maxY,i.minY+2*i.errorY*y),u[3*b+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),b++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:u}}function D(e,t,n){const r=[];t=P(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=P(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function P(e,t,n){const r=new DataView(e,t),o=r.getUint8(0),i=31&o,c=!!(32&o),a=(192&o)>>6;let u=0;if(0===a)u=r.getUint32(1,d),t+=5;else if(1===a)u=r.getUint16(1,d),t+=3;else{if(2!==a)throw new s("lepcc-decode-error","Bad count type");u=r.getUint8(1),t+=2}if(c)throw new s("lepcc-decode-error","LUT not implemented");const l=Math.ceil(u*i/8),f=new Uint8Array(e,t,l);let g=0,w=0,b=0;const y=-1>>>32-i;for(let s=0;s<u;s++){for(;w<i;)g|=f[b]<<w,w+=8,b+=1;n[s]=g&y,g>>>=i,w-=i,w+i>32&&(g|=f[b-1]>>8-w)}return t+b}const E=0,S=4,j=8,V=12,R=14,Y=15,X=16;function Z(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=h(e,t,n);if(n+=p,"ClusterRGB"!==r)throw new s("lepcc-decode-error","Bad identifier");if(o>1)throw new s("lepcc-decode-error","Unknown version");const i=(a=n,{sizeLo:(c=t).getUint32(a+E,d),sizeHi:c.getUint32(a+S,d),count:c.getUint32(a+j,d),colorMapCount:c.getUint16(a+V,d),lookupMethod:c.getUint8(a+R),compressionMethod:c.getUint8(a+Y)});var c,a;if(n+=X,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new s("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new s("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),r=new Uint8Array(e,n+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=r[e];o[3*e]=t[3*n],o[3*e+1]=t[3*n+1],o[3*e+2]=t[3*n+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new s("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new s("lepcc-decode-error","Bad count");const r=t.getUint8(n),o=t.getUint8(n+1),c=t.getUint8(n+2),a=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)a[3*e]=r,a[3*e+1]=o,a[3*e+2]=c;return a}throw new s("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const H=0,_=4,$=8,N=12,W=14,q=15,G=16;function J(e){const t=new DataView(e,0);let n=0;const{identifier:r,version:o}=h(e,t,n);if(n+=p,"Intensity "!==r)throw new s("lepcc-decode-error","Bad identifier");if(o>1)throw new s("lepcc-decode-error","Unknown version");const i=(a=n,{sizeLo:(c=t).getUint32(a+H,d),sizeHi:c.getUint32(a+_,d),count:c.getUint32(a+$,d),scaleFactor:c.getUint16(a+N,d),bitsPerPoint:c.getUint8(a+W),reserved:c.getUint8(a+q)});var c,a;if(n+=G,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new s("lepcc-decode-error","Bad size");const u=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new s("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)u[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new s("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)u[e]=t[e]*i.scaleFactor}else{const t=[];if(P(e,n,t)!==e.byteLength)throw new s("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)u[e]=t[e]*i.scaleFactor}return u}const K=l.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function Q(e,t,n){let r="",o=0;for(;o<n;){const i=e[t+o];if(i<128)r+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=n)throw new s("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const c=(31&i)<<6|63&e[t+o+1];r+=String.fromCharCode(c),o+=2}else if(i>=224&&i<240){if(o+2>=n)throw new s("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const c=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];r+=String.fromCharCode(c),o+=3}else{if(!(i>=240&&i<248))throw new s("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new s("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const c=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(c>=65536){const e=55296+(c-65536>>10),t=56320+(1023&c);r+=String.fromCharCode(e,t)}else r+=String.fromCharCode(c);o+=4}}}return r}function ee(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],c=i.valueType||i.type,a=ue[c];n.fields[i.property]=a(e,r),r+=ae[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function te(e,t){return new ae[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function ne(e,t,n){if(t!==e&&K.error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new s("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function re(e,t){const n=ee(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const f of t.ordering){if(!t.vertexAttributes[f])continue;const e=u(a({},t.vertexAttributes[f]),{byteOffset:r,count:c}),n=ie[f]?ie[f]:"_"+f;o.vertexAttributes[n]=e,r+=le(e.valueType)*e.valuesPerElement*c}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n=u(a({},t.faces[e]),{byteOffset:r,count:s});o.faces[e]=n,r+=le(n.valueType)*n.valuesPerElement*s}}const l=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&l){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n=u(a({},t.featureAttributes[e]),{byteOffset:r,count:l});o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:le(n.valueType))*n.valuesPerElement*l}}return ne(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function oe(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}(t)}const ie={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function ce(e,t,n){if("lepcc-rgb"===e.encoding)return Z(t);if("lepcc-intensity"===e.encoding)return J(t);if(null!=e.encoding&&""!==e.encoding)throw new s("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(K.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(K.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const r=function(e,t,n){const r=null!=t.header?ee(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},o={header:r,byteOffset:r.byteCount,byteCount:0,entries:Object.create(null)};let i=r.byteCount;for(let c=0;c<t.ordering.length;c++){const e=t.ordering[c],n=f(t[e]);if(n.count=r.fields.count,"String"===n.valueType){if(n.byteOffset=i,n.byteCount=r.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new s("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!se(n.valueType))throw new s("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=le(n.valueType);i+=i%e!=0?e-i%e:0,n.byteOffset=i,n.byteCount=e*n.valuesPerElement*n.count}}i+=n.byteCount,o.entries[e]=n}return o.byteCount=i-o.byteOffset,o}(t,e,n);ne(r.byteOffset+r.byteCount,t.byteLength,"attribute");const o=r.entries.attributeValues||r.entries.objectIds;if(o){if("String"===o.valueType){const e=r.entries.attributeByteCounts,n=te(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,n){const r=[];let o,i,c=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(r.push(Q(n,c,o-1)),0!==n[c+o-1])throw new s("string-array-error","Invalid string array: missing null termination.")}else r.push(null);c+=o}return r}(e.count,n,i)}return te(t,o)}throw new s("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const ae={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},ue={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function se(e){return ae.hasOwnProperty(e)}function le(e){return se(e)?ae[e].BYTES_PER_ELEMENT:0}export{ce as C,k as a,te as c,oe as g,re as y};
//# sourceMappingURL=I3SBinaryReader.da331753.js.map