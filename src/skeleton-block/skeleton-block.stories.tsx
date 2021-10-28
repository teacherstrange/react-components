import React from 'react'
import { SkeletonBlock } from './skeleton-block'

export default {
  title: 'Components/Loading/Skeleton',
  component: SkeletonBlock,
  args: {
  },
  argTypes: {
  }
}

const Template = (args) => <SkeletonBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  width: 400,
  count: 4
}

export const Circle = Template.bind({})
Circle.args = {
  circle: true,
  width: 80,
  height: 80
}

export const Rounded = Template.bind({})
Rounded.args = {
  width: 400,
  height: 48,
  borderRadius: 16
}
