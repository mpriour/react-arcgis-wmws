import React from "react";
import { WebMap } from "../webmap/WebMap";
import { WebScene } from "../webscene/WebScene";

interface IViewerProps {
  dimension: '2d' | '3d';
}

const Viewer = (props:IViewerProps) => {
  const {dimension} = props
  return dimension == '2d' ? <WebMap /> : <WebScene />
}

export { Viewer, IViewerProps }
