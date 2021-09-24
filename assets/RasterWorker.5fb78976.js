import{B as e,P as r}from"./vendor.7103ff48.js";import{u as o,s,v as t,y as i,S as l}from"./pixelUtils.5eddfa69.js";import{T as m,N as n}from"./RasterSymbolizer.fba0606b.js";import{f as c}from"./vectorFieldUtils.7ace4039.js";import"./LercCodec.1de5a3c5.js";class a{convertVectorFieldData(r){const s=o.fromJSON(r.pixelBlock),t=c(s,r.type);return Promise.resolve(e(t)&&t.toJSON())}async decode(e){const r=await m(e.data,e.options);return r&&r.toJSON()}symbolize(s){s.pixelBlock=o.fromJSON(s.pixelBlock),s.extent=s.extent?r.fromJSON(s.extent):null;const t=this.symbolizer.symbolize(s);return Promise.resolve(e(t)&&t.toJSON())}async updateSymbolizer(e){var r;this.symbolizer=n.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null==(r=this.symbolizer)?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}stretch(r){const s=this.symbolizer.simpleStretch(o.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(e(s)&&s.toJSON())}estimateStatisticsHistograms(e){const r=s(o.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=t(o.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach(((e,o)=>{r.set(o,null==e?void 0:e.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(e){const r=e.srcPixelBlocks.map((e=>e?new o(e):null)),s=i(r,e.srcMosaicSize,null,null,e.alignmentInfo);if(!e.coefs)return s&&s.toJSON();const t=l(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation);return t&&t.toJSON()}}export{a as default};
//# sourceMappingURL=RasterWorker.5fb78976.js.map