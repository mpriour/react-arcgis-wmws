import{bb as t,bv as e,F as i,G as a,H as r,ih as s}from"./vendor.7103ff48.js";import{t as o}from"./BitmapContainer.f66ff0c9.js";import{l as n}from"./LayerView2D.3bec42c6.js";import{S as p}from"./ExportStrategy.b9685efa.js";import{a as h}from"./RefreshableLayerView.7b9ab281.js";import"./brushes.b64b90a9.js";import"./definitions.e5e12ce7.js";import"./Utils.8f00ae04.js";import"./ShaderCompiler.6905b522.js";import"./GeometryUtils.1bcb906c.js";import"./MaterialKey.8df623c8.js";import"./pixelUtils.5eddfa69.js";import"./WGLContainer.6f073475.js";import"./Container.f525a10f.js";import"./Bitmap.8c3290a1.js";const m=t.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let d=class extends(h(n(s))){hitTest(){return null}update(t){this.strategy.update(t).catch((t=>{e(t)||m.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new o,this.container.addChild(this._bitmapContainer),this.strategy=new p({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,i){return this.layer.fetchImage(t,e,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};i([a()],d.prototype,"strategy",void 0),i([a()],d.prototype,"updating",void 0),d=i([r("esri.views.2d.layers.BaseDynamicLayerView2D")],d);var f=d;export{f as default};
//# sourceMappingURL=BaseDynamicLayerView2D.d3b900e8.js.map