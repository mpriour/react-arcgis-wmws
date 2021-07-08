import React, { useEffect, useRef, useState } from "react";
import Layer from "@arcgis/core/layers/Layer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import Portal from "@arcgis/core/portal/Portal";
import PortalItem from "@arcgis/core/portal/PortalItem";

 export type TableViewProps =
 {[key:string] : any} &
 (
  | {itemId: string, url?: never, layer?: never, env?: 'prod' | 'qa' | 'uat' | 'dev'}
  | {itemId?: never, url: string, layer?: never, env?: never}
  | {itemId?: never, url?: never, layer: FeatureLayer | SceneLayer, env?: never}
)

function resolveLayer(lyr:Layer){
  return new Promise<FeatureLayer|SceneLayer>((resolve, reject) => {
    if(lyr.type == 'feature'){
      resolve(lyr as FeatureLayer)
    }
    else if(lyr.type == 'scene'){
      resolve(lyr as SceneLayer)
    }
    else {
      reject(`Layer ${lyr.title} of ${lyr.type} is not allowed to be shown in a feature table`)
    }
  })
}

function layerFromId(id: string, portalUrl:string = 'https://www.arcgis.com'){
  return Layer.fromPortalItem({
    portalItem: ({
      id,
      portal: ({
        url: portalUrl
      }) as Portal
    }) as PortalItem
  }).then(resolveLayer)
}

function layerFromUrl(url: string){
  return Layer.fromArcGISServerUrl({ url }).then(resolveLayer)
}


export const TableView = ({
  itemId, url, layer, env='prod', ...props
}:TableViewProps)=>{
  const tableDivRef = useRef<HTMLDivElement>(null)
  const TableContainer = <div ref={tableDivRef} {...props} />
  const [tableLayer, setTableLayer] = useState<FeatureLayer|SceneLayer>()
  const tableRef = useRef<FeatureTable>()

  function tableCleanUp(){
    if(tableRef.current && tableDivRef.current){
      tableDivRef.current.innerHTML = ''
      tableRef.current = undefined
    }
  }

  useEffect(() => {
    if(layer){
      setTableLayer(layer)
    }
    else if(itemId){
      let portalSub = 'www'
      if(env == 'dev'){ portalSub = 'devext' }
      else if(env == 'qa' || env == 'uat'){ portalSub = 'qaext' }
      const portal = `https://${portalSub}.arcgis.com`
      layerFromId(itemId, portal).then((lyr)=>{setTableLayer(lyr)})
    }
    else if(url){
      layerFromUrl(url).then((lyr)=>{setTableLayer(lyr)})
    }
  }, [itemId, url, layer, env])

  useEffect(() => {
    tableCleanUp()
    if(tableLayer){
      tableRef.current = new FeatureTable({
        layer: tableLayer,
        container: tableDivRef.current as HTMLDivElement,
        visibleElements: {
          selectionColumn: false
        }
      })
    }
    return ()=>{
      tableCleanUp()
    }
  }, [tableLayer])

  return TableContainer
}
