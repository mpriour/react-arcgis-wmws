import{K as e}from"./vendor.7103ff48.js";import{I as r}from"./Utils.8f00ae04.js";import{a as s}from"./WGLContainer.6f073475.js";import{a as t,m as i}from"./brushes.b64b90a9.js";const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;class o extends s{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(n),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(r.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(r.scale),s}prepareRenderPasses(s){const n=super.prepareRenderPasses(s);return n.push(s.registerRenderPass({name:"stencil",brushes:[t],drawPhase:r.DEBUG|r.MAP|r.HIGHLIGHT,target:()=>this.getStencilTarget()})),e("esri-tiles-debug")&&n.push(s.registerRenderPass({name:"tileInfo",brushes:[i],drawPhase:r.DEBUG,target:()=>this.children})),n}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}}export{o};
//# sourceMappingURL=TileContainer.555234dd.js.map