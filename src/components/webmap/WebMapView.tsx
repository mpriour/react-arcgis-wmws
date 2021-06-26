import React, { useEffect, useRef } from "react";
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

  useEffect(()=>{
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
    return ()=>{
      map.destroy()
      View.destroy()
    }
  },[itemId, portalUrl])
  return ViewContainer
}

export { WebMapView }
