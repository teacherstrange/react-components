import React from 'react'
import { StarMeter } from '../star-meter'

export default {
  title: 'Components/Widgets/Star meter',
  component: StarMeter,
  args: {
    dimension: 'regular'
  },
  argTypes: {
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <StarMeter value={3.76} {...args} />

export const Default = Template.bind({})

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  label: 'Hello there 👋'
}
