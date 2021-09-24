var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,i,s)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,a=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&n(e,i,t[i]);if(s)for(var i of s(t))l.call(t,i)&&n(e,i,t[i]);return e},r=(e,s)=>t(e,i(s));import{B as c,M as u,z as h,dz as p,i7 as d,id as f,h6 as m,aZ as y,hj as T,bi as v,bN as x,cI as g,f5 as w,aQ as _,aP as E,aL as R,g0 as q}from"./vendor.7103ff48.js";class I{constructor(e,t=null){if(this.tile=e,c(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}sample(e,t){if(u(this.samplerData))return;const{safeWidth:i,width:s,pixelData:o,noDataValue:l,dx:n,dy:a,y1:r,x0:c}=this.samplerData,h=A(a*(r-t),0,i),p=A(n*(e-c),0,i),d=Math.floor(h),f=Math.floor(p),m=d*s+f,y=m+s,T=o[m],v=o[y],x=o[m+1],g=o[y+1];if(T!==l&&v!==l&&x!==l&&g!==l){const e=p-f,t=T+(x-T)*e;return t+(v+(g-v)*e-t)*(h-d)}}}function A(e,t,i){return e<t?t:e>i?i:e}class D{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new h("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=b.fromGeometry(t);let o=!1;i&&i.returnSampleInfo||(o=!0);const l=r(a(a({},O),i),{returnSampleInfo:!0}),n=await this.query(e[e.length-1],s,l),c=await this._queryAllContinue(e,n,l);return c.geometry=c.geometry.export(),o&&delete c.sampleInfo,c}async query(e,t,i){if(!e)throw new h("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof b)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new h("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s=a(a({},O),i),o=new z(e,t.spatialReference,s),l=s.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(o,t,l),await this._selectTiles(o,l),await this._populateElevationTiles(o,l),this._sampleGeometryWithElevation(o),this._createQueryResult(o,l)}async createSampler(e,t,i){if(!e)throw new h("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new h("elevation-query:invalid-extent","Invalid or undefined extent");const s=a(a({},O),i);return this._createSampler(e,t,s)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new h("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new h("elevation-query:invalid-extent","Invalid or undefined extent");const s=r(a(a({},O),i),{returnSampleInfo:!0}),o=await this._createSampler(e[e.length-1],t,s);return this._createSamplerAllContinue(e,t,o,s)}async _createSampler(e,t,i,s){const o=i.signal;await e.load({signal:o});const l=t.spatialReference,n=e.tileInfo.spatialReference;l.equals(n)||(await p([{source:l,dest:n}],{signal:o}),t=d(t,n));const a=new F(e,t,i,s);return await this._selectTiles(a,o),await this._populateElevationTiles(a,o),new f(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const o=i.samplers.map((e=>m(e.extent))),l=await this._createSampler(e[e.length-1],t,s,o);if(0===l.samplers.length)return i;const n=i.samplers.concat(l.samplers),a=new f(n,s.noDataValue);return this._createSamplerAllContinue(e,t,a,s)}async _queryAllContinue(e,t,i){const s=e.pop(),o=t.geometry.coordinates,l=[],n=[];for(let c=0;c<o.length;c++){const i=t.sampleInfo[c];i.demResolution>=0?i.source||(i.source=s):e.length&&(l.push(o[c]),n.push(c))}if(!e.length||0===l.length)return t;const a=t.geometry.clone(l),r=await this.query(e[e.length-1],a,i);return n.forEach(((e,i)=>{o[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let s;const o=e.layer.tileInfo.spatialReference;if(t instanceof b?s=await t.project(o,i):(await p([{source:t.spatialReference,dest:o}],{signal:i}),s=d(t,o)),!s)throw new h("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);e.geometry=b.fromGeometry(s)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new h("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){const t=new I(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,o=e.y;(s<i.xmin||s>i.xmax||o<i.ymin||o>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/y(e.spatialReference);let s=e.lods[0],o=0;for(let l=1;l<e.lods.length;l++){const t=e.lods[l];Math.abs(t.resolution-i)<Math.abs(s.resolution-i)&&(s=t,o=l)}return o}async _selectTilesFinestContiguous(e,t){const i=M(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const o=s.tilemapCache,l=e.getTilesToFetch();try{if(o)await T(Promise.all(l.map((e=>o.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new h("elevation-query:has-unavailable-tiles")}catch(n){v(n),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},o=e.options.cache,l=e.options.noDataValue,n=i.map((async i=>{const n=`${e.layer.uid}:${i.id}:${l}`,a=c(o)?o.get(n):null,r=c(a)?a:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:l,signal:t});c(o)&&o.put(n,r),s[i.id]=new I(i,r)}));await T(x(n),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),o={},l=s.map((async e=>{const s={id:null,level:0,row:0,col:0,extent:g()},l=await w(i.fetchAvailabilityUpsample(e.level,e.row,e.col,s,{signal:t}));!1===l.ok?v(l.error):o[e.id]=s}));await T(Promise.all(l),t),e.remapTiles(o)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},o=e=>{e.id in s?s[e.id]++:(s[e.id]=1,i++)},l=e=>{const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(o,l);let n=!0;for(;n&&(n=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(l(s),t.upsampleTile(s)&&(n=!0),o(s))}),l),n););}_selectTilesAutoFinest(e){const t=M(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);c(e)?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=y(t.spatialReference);return e.geometry.coordinates.map((s=>{let o=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(o=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:o}}))}}class b{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new b;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await p([{source:this.spatialReference,dest:e}],{signal:t});const i=new _({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),s=d(i,e);if(!s)return null;const o=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),o=s.points[t];return i.x=o[0],i.y=o[1],i})),l=this.clone(o);return l.spatialReference=e,l}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new b;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof b)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?[{x:i.x,y:i.y,z:i.z,m:i.m}]:s?[{x:i.x,y:i.y,z:i.z}]:o?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new R(t[0].x,t[0].y,t[0].z,t[0].m,i):new R(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:s,hasM:o}=i;t.coordinates=s&&o?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):s?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):o?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new _({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new _(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,s=[],o=[],{hasZ:l,hasM:n}=e;let a=0;for(const e of i.paths)if(o.push([a,a+e.length]),a+=e.length,l&&n)for(const t of e)s.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(l)for(const t of e)s.push({x:t[0],y:t[1],z:t[2]});else if(n)for(const t of e)s.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)s.push({x:t[0],y:t[1]});t.coordinates=s,t._exporter=(t,i)=>{const s=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=o.map((e=>s.slice(e[0],e[1])));return new E({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class C{constructor(e,t){this.layer=e,this.options=t}}class z extends C{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;i.elevationTile||!i.tile||e[s.id]||(e[s.id]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class F extends C{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(u(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const o=t.lods[s],l=o.resolution*t.size[0],n=o.resolution*t.size[1];if(Math.ceil(i.width/l)*Math.ceil(i.height/n)<=e)return s}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const l of e)i[l.id]?t&&t(l):(i[l.id]=l,s.push(l));const o=s.sort(((e,t)=>e.level-t.level));return o.filter(((e,i)=>{for(let s=0;s<i;s++)if(q(o[s].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if(u(t))return;const i=this.layer.tileInfo,s=i.lods[e],o=i.tileAt(s.level,t.xmin,t.ymin),l=s.resolution*i.size[0],n=s.resolution*i.size[1],a=Math.ceil((t.xmax-o.extent[0])/l),r=Math.ceil((t.ymax-o.extent[1])/n);for(let c=0;c<r;c++)for(let e=0;e<a;e++){const t={id:null,level:o.level,row:o.row-c,col:o.col+e};i.updateTileInfo(t),this._tileIsMasked(t)||this.candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>q(t,e.extent)))}}function M(e,t){let i=e.lods.length-1;if(t>0){const s=e.lods.findIndex((e=>e.resolution<t));0===s?i=0:s>0&&(i=s-1)}return i}const O={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{D as ElevationQuery,b as GeometryDescriptor,D as default,M as getFinestLodIndex};
//# sourceMappingURL=ElevationQuery.d277c3a2.js.map