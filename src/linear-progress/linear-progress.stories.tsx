import React from 'react'
import { LinearProgress } from './linear-progress'

export default {
  title: 'Components/Linear progress',
  component: LinearProgress,
  args: {
    max: 100,
    showProgress: true,
    dimension: 'regular'
  },
  argTypes: {
    value: {
      control: { type: 'range' }
    },
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
