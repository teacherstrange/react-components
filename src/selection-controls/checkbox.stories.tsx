import React from 'react'
import { Checkbox } from './checkbox'

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
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

export const Default = (args) => <Checkbox {...args} />
export const Checked = (args) => <Checkbox defaultChecked {...args} />
export const DisabledChecked = (args) => <Checkbox defaultChecked disabled {...args} />
