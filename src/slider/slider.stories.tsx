import React from 'react'
import { Slider } from './slider'

export default {
  title: 'Components/Inputs/Slider',
  component: Slider,
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
    showValues: false,
    dimension: 'regular',
    disabled: false
  },
  argTypes: {
    onInput: {
      action: 'changed',
      table: {
        disable: true
      }
    },
    showValues: {
      options: [true, false],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Slider {...args} />

export const Default = Template.bind({})
export const WithValues = Template.bind({})
WithValues.args = {
  showValues: true
}
export const WithIcons = Template.bind({})
WithIcons.args = {
  iconMin: 'moon',
  iconMax: 'sun-bright'
}
