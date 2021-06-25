import React, { useRef } from "react";
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"

interface IWebMapProps {
  itemId: string;
  portalUrl: string;
}

const WebMapView = ({
  itemId,
  portalUrl = 'https://www.arcgis.com',
  ...props
}:IWebMapProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewRef} {...props} />;
  const map = new WebMap({
    portalItem: {
      id: itemId,
      portal:{
        url: portalUrl
      }
    }
  })
  const View = new MapView({
    map,
    container: viewRef.current as HTMLDivElement
  })
  return ViewContainer
}

export { WebMapView }
