import React, { useRef } from "react";
import WebScene from "@arcgis/core/WebScene"
import SceneView from "@arcgis/core/views/SceneView"

interface IWebSceneProps {
  id: string;
  portalUrl: string;
}

const WebSceneView = ({
  id,
  portalUrl = 'https://www.arcgis.com',
  ...props
}:IWebSceneProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewRef} {...props} />;
  const scene = new WebScene({
    portalItem: {
      id,
      portal:{
        url: portalUrl
      }
    }
  })
  const View = new SceneView({
    map: scene,
    container: viewRef.current as HTMLDivElement
  })
  return ViewContainer
}

export { WebSceneView }
