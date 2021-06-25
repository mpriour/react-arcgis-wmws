import React from "react";
import { WebMapView } from "../webmap/WebMapView";
import { WebSceneView } from "../webscene/WebSceneView";

import "@arcgis/core/assets/esri/themes/light/main.css";

interface IViewerProps {
  [key:string]: any;
  dimension: '2d' | '3d';
  itemId: string;
  env: 'prod' | 'qa' | 'uat' | 'dev';
}

const Viewer = ({
  dimension,
  itemId,
  env = 'prod',
  ...props
}:IViewerProps) => {
  let portalSub = 'www';
  if(env == 'dev'){ portalSub = 'devext' }
  else if(env == 'qa' || env == 'uat'){ portalSub = 'qaext' }
  const portal = `https://${portalSub}.arcgis.com`
  return dimension == '3d' ?
  <WebSceneView itemId={itemId} portalUrl={portal} {...props}></WebSceneView> :
  <WebMapView itemId={itemId} portalUrl={portal} {...props}></WebMapView>
}

export { Viewer }
export type { IViewerProps }

