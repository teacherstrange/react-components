import React from 'react'
import { ThemeSwitch } from './index'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
}

const Template = (args) => (
  <ThemeSwitch currentTheme="system" dimension="small" {...args} />
)

export const Default = Template.bind({})
