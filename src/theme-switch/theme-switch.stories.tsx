import React from 'react'
import { ThemeProvider, ThemeSwitch } from './index'

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

const Template = (args) => (
  <ThemeProvider>
    <ThemeSwitch {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  defaultTheme: 'light'
}
