import React from 'react'
import { Container } from './container'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    padding: {
      options: [true, false],
      control: { type: 'radio' }
    },
    className: {
      table: {
        disable: true
      }
    }
  },
  args: {
    size: 'full'
  }
}

const Template = (args) => <Container {...args} />

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  className: 'ContainerEx'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  className: 'ContainerEx'
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  className: 'ContainerEx'
}

export const NoPadding = Template.bind({})
NoPadding.args = {
  padding: false,
  className: 'ContainerEx'
}
