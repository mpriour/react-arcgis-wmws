import React from "react";
import { WebMapView } from "../webmap/WebMapView";
import { WebSceneView } from "../webscene/WebSceneView";

import "@arcgis/core/assets/esri/themes/light/main.css";

interface IViewerProps {
  dimension: '2d' | '3d';
  sampleId: string;
}

const Viewer = ({
  dimension='3d',
  sampleId='1c7a06421a314ac9b7d0fae22aa367fb',
  ...props
}:IViewerProps) => {
  return dimension == '2d' ? <WebMapView /> : <WebSceneView id={sampleId} {...props} />
}

export { Viewer, IViewerProps }
