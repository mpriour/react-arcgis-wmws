import React, { useEffect } from "react";
import esriConfig from "@arcgis/core/config";
import { WebMapView } from "../webmap/WebMapView";
import { WebSceneView } from "../webscene/WebSceneView";

import "@arcgis/core/assets/esri/themes/light/main.css";

interface IViewerProps {
  [key:string]: any;
  dimension: '2d' | '3d';
  sampleId: string;
}

const Viewer = ({
  dimension,
  sampleId,
  ...props
}:IViewerProps) => {
  useEffect(()=>{
    esriConfig.assetsPath = "./"
  }, [])
  return dimension == '2d' ?
  <WebMapView id={sampleId} {...props}></WebMapView> :
  <WebSceneView id={sampleId} {...props}></WebSceneView>
}

export { Viewer }
export type { IViewerProps }

