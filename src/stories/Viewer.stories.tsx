import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Viewer, IViewerProps } from '../components/viewer/Viewer';

import '@arcgis/core/assets/esri/themes/light/main.css';
import './style.css';

export default {
  title: 'Viewer',
  component: Viewer,
} as Meta;

const Template: Story<IViewerProps> = (args) => <Viewer style={{ minHeight: '90vh' }} {...args} />


export const MapViewer = Template.bind({});
MapViewer.args = {
  dimension: '2d',
  env: 'prod',
  itemId: 'f2e9b762544945f390ca4ac3671cfa72'
};

export const SceneViewer = Template.bind({});
SceneViewer.args = {
  dimension: '3d',
  env: 'prod',
  itemId: '1c7a06421a314ac9b7d0fae22aa367fb'
};
