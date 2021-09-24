import{iA as e,iB as a,iC as t,iD as i,iE as r,iF as s,iG as o,iH as n,iI as l,iJ as p,F as d,iK as c,iL as u,iM as g,iN as v,iO as h,iP as m,iQ as f,iR as b,iS as y,iT as T,iU as P,iV as x,iW as F,iX as E,iY as _,iZ as C,i_ as w,i$ as D,j0 as O,j1 as S}from"./vendor.7103ff48.js";function j(l){const p=new e;return p.include(a,{linearDepth:!1}),p.vertex.uniforms.add("proj","mat4").add("view","mat4"),p.attributes.add("position","vec3"),p.attributes.add("uv0","vec2"),p.varyings.add("vpos","vec3"),l.multipassTerrainEnabled&&p.varyings.add("depth","float"),p.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),p.vertex.code.add(t`
    void main(void) {
      vpos = position;
      ${l.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),p.include(i,l),l.multipassTerrainEnabled&&(p.fragment.include(r),p.include(s,l)),p.fragment.uniforms.add("tex","sampler2D"),p.fragment.uniforms.add("opacity","float"),p.varyings.add("vTexCoord","vec2"),7===l.output?p.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${l.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.float(o)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(p.fragment.include(n),p.fragment.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${l.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.float(o)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${l.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),p}var $=Object.freeze({__proto__:null,build:j});class A extends u{initializeProgram(e){const a=A.shader.get(),t=this.configuration,i=a.build({output:t.output,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===t.transparencyPassType,multipassTerrainEnabled:t.multipassTerrainEnabled,cullAboveGround:t.cullAboveGround});return new g(e.rctx,i,v)}bindPass(e,a){h(this.program,a.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),a.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),m(this.program,a))}bindDraw(e){f(this.program,e),b(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,a){const t=this.configuration,i=3===e,r=2===e;return y({blending:0!==t.output&&7!==t.output||!t.transparent?null:i?H:T(e),culling:P(t.cullFace),depthTest:{func:x(e)},depthWrite:i?t.writeDepth&&F:E(e),colorWrite:_,stencilWrite:t.sceneHasOcludees?C:null,stencilTest:t.sceneHasOcludees?a?w:D:null,polygonOffset:i||r?null:O(t.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}A.shader=new l($,(()=>import("./ImageMaterial.glsl.de8018ce.js")));const H=p(1,771);class G extends S{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}d([c({count:8})],G.prototype,"output",void 0),d([c({count:3})],G.prototype,"cullFace",void 0),d([c()],G.prototype,"slicePlaneEnabled",void 0),d([c()],G.prototype,"transparent",void 0),d([c()],G.prototype,"enableOffset",void 0),d([c()],G.prototype,"writeDepth",void 0),d([c()],G.prototype,"sceneHasOcludees",void 0),d([c({count:4})],G.prototype,"transparencyPassType",void 0),d([c()],G.prototype,"multipassTerrainEnabled",void 0),d([c()],G.prototype,"cullAboveGround",void 0);export{A as E,G as O,j as s};
//# sourceMappingURL=ImageMaterialTechnique.920f1ced.js.map
