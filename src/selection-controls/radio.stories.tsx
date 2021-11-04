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

export const Default = (args) => <Radio {...args} />
export const Checked = (args) => <Radio defaultChecked {...args} />
export const DisabledChecked = (args) => <Radio defaultChecked disabled {...args} />
