import React from 'react'
import { List } from './list'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => (
  <List {...args}>
    <li>List item text</li>
    <li>List item text List item textList item textList item textList item text</li>
    <li>List item text</li>
  </List>
)

export const Default = Template.bind({})
export const CustomMarker = Template.bind({})
CustomMarker.args = {
  marker: 'circle-check'
}

export const MarkerColor = Template.bind({})
MarkerColor.args = {
  marker: 'circle-check',
  markerColor: 'var(--highlight-green-foreground)'
}

export const Ordered = Template.bind({})
Ordered.args = {
  as: 'ol',
  marker: 'circle-check'
}
