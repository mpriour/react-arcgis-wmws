import React from "react";
import { WebMapView } from "../webmap/WebMapView";
import { WebSceneView } from "../webscene/WebSceneView";

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
  return dimension == '2d' ?
  <WebMapView id={sampleId} {...props}></WebMapView> :
  <WebSceneView id={sampleId} {...props}></WebSceneView>
}

export { Viewer }
export type { IViewerProps }

