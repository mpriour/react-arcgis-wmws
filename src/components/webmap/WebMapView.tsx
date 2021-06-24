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
  const ViewContainer = <div ref={viewRef} {...props} />;
  debugger;
  const map = new WebMap({
    portalItem: {id, portal:{
      url:'https://devext.arcgis.com'
    }}
  })
  const View = new MapView({
    map,
    container: viewRef.current as HTMLDivElement
  })
  return ViewContainer
}

export { WebMapView }
