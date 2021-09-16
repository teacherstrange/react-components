import React from 'react'
import { ThemeSwitch, ThemeProvider } from './index'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch
}

const Template = (args) => <ThemeProvider><ThemeSwitch dimension="big" {...args} /></ThemeProvider>

export const Default = Template.bind({})
