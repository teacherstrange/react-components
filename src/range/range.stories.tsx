import React from 'react'
import { Range } from './range'

export default {
  title: 'Components/Inputs/Range',
  component: Range,
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

const Template = (args) => <Range {...args} />

export const Default = Template.bind({})
export const WithValues = Template.bind({})
WithValues.args = {
  showValues: true
}
export const WithIcons = Template.bind({})
WithIcons.args = {
  iconLeft: 'moon',
  iconRight: 'sun-bright'
}
