import React from 'react'
import { ThemeProvider, ThemeSwitch } from './index'
import { Text } from '../text'

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
    <Text data-theme="light">
      This text should use always the white theme because is using the data-theme override
    </Text>
  </ThemeProvider>
)

export const Default = Template.bind({})

export const DefaultTheme = Template.bind({})
DefaultTheme.args = {
  defaultTheme: 'light'
}
