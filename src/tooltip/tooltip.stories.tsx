import React from 'react'
import { Tooltip } from './tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
  }
}

const Template = (args) => (
  <Tooltip
    trigger={<abbr>HTML</abbr>}
    {...args}
  >
    HTML stands for HyperText Markup Language
  </Tooltip>
)

export const Default = Template.bind({})
