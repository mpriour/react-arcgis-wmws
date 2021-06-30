import React, { useEffect, useRef } from "react";
import WebMap from "@arcgis/core/WebMap"
import MapView from "@arcgis/core/views/MapView"
import Legend from "@arcgis/core/widgets/Legend"

interface IWebMapProps {
  itemId: string;
  portalUrl: string;
  dockPopup: boolean;
  showLegend: boolean;
}

const WebMapView = ({
  itemId,
  dockPopup,
  showLegend,
  portalUrl = 'https://www.arcgis.com',
  ...props
}:IWebMapProps) => {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const ViewContainer = <div ref={viewDivRef} {...props} />;
  const legendRef = useRef<Legend | null>(null);
  const viewRef = useRef<MapView | null>(null);

  useEffect(()=>{
    const map = new WebMap({
      portalItem: {
        id: itemId,
        portal:{
          url: portalUrl
        }
      }
    })
    const view = new MapView({
      map,
      container: viewDivRef.current as HTMLDivElement
    })
    viewRef.current = view
    return ()=>{
      map.destroy()
      view.destroy()
      viewRef.current = null
    }
  },[itemId, portalUrl])

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

export { WebMapView }
