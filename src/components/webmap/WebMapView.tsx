import React, { useRef } from "react";
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"

interface IWebMapProps {
  id: string;
}

const WebMapView = ({
  id,
  ...props
}:IWebMapProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewRef} style={{minHeight:'90vh'}} {...props} />;
  const map = new WebMap({
    portalItem: {id}
  })
  const View = new MapView({
    map,
    container: viewRef.current
  })
  return ViewContainer
}

export { WebMapView }
