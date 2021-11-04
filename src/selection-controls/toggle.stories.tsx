import React from 'react'
import { Toggle } from './toggle'

export default {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
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

export const Default = (args) => <Toggle {...args} />
export const Checked = (args) => <Toggle defaultChecked {...args} />
export const DisabledChecked = (args) => <Toggle defaultChecked disabled {...args} />
