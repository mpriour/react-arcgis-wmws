import{G as e}from"./brushes.b64b90a9.js";import{I as r}from"./Utils.8f00ae04.js";import{a as s}from"./WGLContainer.6f073475.js";class t extends s{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.blendFunction))}prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[e.bitmap],target:()=>this.children,drawPhase:r.MAP});return[...super.prepareRenderPasses(s),t]}}export{t};
//# sourceMappingURL=BitmapContainer.f66ff0c9.js.map