import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Viewer, IViewerProps } from '../components/viewer/Viewer';

export default {
  title: 'Viewer',
  component: Viewer,
} as Meta;

const Template: Story<IViewerProps> = (args) => <Viewer {...args} />;

export const MapViewer = Template.bind({});
MapViewer.args = {
  dimension: '2d',
};

export const SceneViewer = Template.bind({});
SceneViewer.args = {
  dimension: '3d',
};
