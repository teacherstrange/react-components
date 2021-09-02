import React from 'react'
import { ThemeSwitch } from './index'

export default {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch
}

const Template = (args) => <ThemeSwitch dimension="big" {...args} />

export const Default = Template.bind({})
