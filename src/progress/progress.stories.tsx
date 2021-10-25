import React from 'react'
import { Progress } from './progress'

export default {
  title: 'Components/Progress',
  component: Progress,
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

const Template = (args) => <Progress {...args} />

export const Determinate = Template.bind({})
Determinate.args = {
  value: 40
}
export const Indeterminate = Template.bind({})
