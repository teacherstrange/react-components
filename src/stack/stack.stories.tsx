import React from 'react'
import { Stack } from './stack'

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    inline: {
      options: [true],
      control: { type: 'check' }
    },
    wrap: {
      options: [true],
      control: { type: 'check' }
    },
    fill: {
      options: [true],
      control: { type: 'check' }
    }
  }
}

const Template = (args) => (
  <Stack rowGap="80" {...args}>
    <div className="DivEx">01</div>
    <div className="DivEx">02</div>
    <div className="DivEx">03</div>
    <div className="DivEx">04</div>
    <div className="DivEx">05</div>
    <div className="DivEx">06</div>
    <div className="DivEx">07</div>
    <div className="DivEx">08</div>
    <div className="DivEx">09</div>
  </Stack>
)

export const Default = Template.bind({})
Default.args = {}
