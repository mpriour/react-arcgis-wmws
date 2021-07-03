import React from 'react';
import { Story, Meta } from '@storybook/react';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import { TableView, TableViewProps } from '../src/components/tableview/TableView';

import '@arcgis/core/assets/esri/themes/light/main.css';
import './style.css';

export default {
  title: 'TableView (Experimental)',
  component: TableView
} as Meta

const tableStyle = {
  height: '30rem'
}

const Template : Story<TableViewProps> = (args) => <TableView style={tableStyle} {...args} />

export const FromId = Template.bind({})
FromId.args = {
  itemId: '6aa49be79248400ebd28f1d0c6af3f9f'
} as TableViewProps

export const FromURL = Template.bind({})
FromURL.args = {
  url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CollegesUniversities/FeatureServer/0'
} as TableViewProps

export const FromLayer = Template.bind({})
FromLayer.args = {
  layer: new FeatureLayer({
    url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Mexico_demographics/FeatureServer/0'
  })
} as TableViewProps
