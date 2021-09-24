import React from "react";
import config from "@arcgis/core/config";
import { WebMapView } from "../webmap/WebMapView";
import { WebSceneView } from "../webscene/WebSceneView";

import "@arcgis/core/assets/esri/themes/light/main.css";

interface IViewerProps {
  [key:string]: any;
  dimension: '2d' | '3d';
  itemId: string;
  dockPopup?: boolean;
  showLegend?: boolean;
  env?: 'prod' | 'qa' | 'uat' | 'dev';
}

config.request.useIdentity = false;

const Viewer = ({
  dimension,
  itemId,
  dockPopup = true,
  showLegend = false,
  env = 'prod',
  ...props
}:IViewerProps) => {
  let portalSub = 'www';
  if(env == 'dev'){ portalSub = 'devext' }
  else if(env == 'qa' || env == 'uat'){ portalSub = 'qaext' }
  const portal = `https://${portalSub}.arcgis.com`
  return dimension == '3d' ?
  <WebSceneView itemId={itemId} portalUrl={portal} dockPopup={dockPopup} showLegend={showLegend} {...props}></WebSceneView> :
  <WebMapView itemId={itemId} portalUrl={portal} dockPopup={dockPopup} showLegend={showLegend} {...props}></WebMapView>
}

export { Viewer }
export type { IViewerProps }

