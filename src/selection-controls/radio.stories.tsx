import React from 'react'
import { Radio } from './radio'

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => (
  <Radio {...args} />
)

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  defaultChecked: true,
  disabled: true
}
