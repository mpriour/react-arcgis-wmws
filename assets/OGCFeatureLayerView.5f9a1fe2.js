import{F as e,G as a,H as r,z as i}from"./vendor.7103ff48.js";const s=s=>{let t=class extends s{initialize(){const{layer:e,view:a}=this;e.source.supportsSpatialReference(a.spatialReference)||this.addResolvingPromise(Promise.reject(new i("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:e})))}get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([a()],t.prototype,"layer",void 0),e([a({readOnly:!0})],t.prototype,"availableFields",null),t=e([r("esri.views.layers.OGCFeatureLayerView")],t),t};export{s as t};
//# sourceMappingURL=OGCFeatureLayerView.5f9a1fe2.js.map