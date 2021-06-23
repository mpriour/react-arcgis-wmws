import React, { useRef } from "react";
import WebScene from "@arcgis/core/WebScene"
import SceneView from "@arcgis/core/views/SceneView"

interface IWebSceneProps {
  id: string;
}

const WebSceneView = ({
  id,
  ...props
}:IWebSceneProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewRef} style={{minHeight:'90vh'}} {...props} />;
  const scene = new WebScene({
    portalItem: {id}
  })
  const View = new SceneView({
    map: scene,
    container: viewRef.current as HTMLDivElement
  })
  return ViewContainer
}

export { WebSceneView }