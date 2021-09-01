import React from 'react'
import { ThemeSwitch } from './index'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    defaultTheme: {
      options: ['light', 'dark', 'auto'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <ThemeSwitch {...args} />

export const Default = Template.bind({})
