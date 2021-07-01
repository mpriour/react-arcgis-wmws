import React, { useEffect, useRef } from "react";
import WebScene from "@arcgis/core/WebScene"
import SceneView from "@arcgis/core/views/SceneView"
import Legend from "@arcgis/core/widgets/Legend";

interface IWebSceneProps {
  itemId: string;
  portalUrl: string;
  dockPopup: boolean;
  showLegend: boolean;
}

const WebSceneView = ({
  itemId,
  portalUrl = 'https://www.arcgis.com',
  dockPopup,
  showLegend,
  ...props
}:IWebSceneProps) => {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewDivRef} {...props} />;
  const viewRef = useRef<SceneView | null>(null);
  const legendRef = useRef<Legend | null>(null);

  useEffect(()=>{
    const scene = new WebScene({
      portalItem: {
        id: itemId,
        portal:{
          url: portalUrl
        }
      }
    })
    const view = new SceneView({
      map: scene,
      container: viewDivRef.current as HTMLDivElement
    })
    viewRef.current = view
    return ()=>{
      legendRef.current && legendRef.current.destroy()
      scene.destroy()
      view.destroy()
      legendRef.current = null
      viewRef.current = null
    }
  }, [itemId, portalUrl])

  useEffect(()=>{
    if(viewRef.current){
      const view = viewRef.current
      if(dockPopup){
        view.popup.dockOptions.breakpoint = {width:2400, height: 2400}
        view.popup.dockEnabled = true
      } else {
        view.popup.dockOptions.breakpoint = false
        view.popup.dockEnabled = false
      }
    }
  }, [dockPopup])

  useEffect(()=>{
    if(viewRef.current){
      const view = viewRef.current
      if(legendRef.current){
        view.ui.remove(legendRef.current)
        legendRef.current.destroy()
        legendRef.current = null
      }
      if(showLegend){
        const legend = new Legend({
          view,
          style: 'card'
        })
        legendRef.current = legend
        view.ui.add(legend, 'bottom-left')
      }
    }
  }, [showLegend, viewRef.current])

  return ViewContainer
}

export { WebSceneView }
