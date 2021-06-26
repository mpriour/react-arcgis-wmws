import React, { useEffect, useRef, useState } from "react";
import WebScene from "@arcgis/core/WebScene"
import SceneView from "@arcgis/core/views/SceneView"

interface IWebSceneProps {
  itemId: string;
  portalUrl: string;
}

const WebSceneView = ({
  itemId,
  portalUrl = 'https://www.arcgis.com',
  ...props
}:IWebSceneProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewRef} {...props} />;

  useEffect(()=>{
    const scene = new WebScene({
      portalItem: {
        id: itemId,
        portal:{
          url: portalUrl
        }
      }
    })
    const View = new SceneView({
      map: scene,
      container: viewRef.current as HTMLDivElement
    })
    return ()=>{
      scene.destroy()
      View.destroy()
    }
  }, [itemId, portalUrl])
  return ViewContainer
}

export { WebSceneView }
