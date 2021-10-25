import React from 'react'
import { LinearProgress } from './linear-progress'

export default {
  title: 'Components/Progress',
  component: LinearProgress,
  args: {
    min: 0,
    max: 100,
    dimension: 'regular'
  },
  argTypes: {
    dimension: {
      options: ['regular', 'big'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <LinearProgress {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  value: 40
}
export const Indeterminate = Template.bind({})
