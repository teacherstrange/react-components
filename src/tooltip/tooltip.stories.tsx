import React from 'react'
import { Tooltip } from './tooltip'
import { Button } from '../button'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
  }
}

const Template = (args) => (

  <Tooltip
    trigger={<Button>HTML</Button>}
    {...args}
  >
    HTML stands for HyperText Markup Language
  </Tooltip>

)

export const Default = Template.bind({})
