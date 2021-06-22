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
  const ViewContainer = <div id={'mymap'} ref={viewRef} style={{minHeight:'90vh'}} />;
  const scene = new WebScene({
    portalItem: {id}
  })
  const View = new SceneView({
    map: scene,
    container: viewRef.current
  })
  return ViewContainer
}

export { WebSceneView }
