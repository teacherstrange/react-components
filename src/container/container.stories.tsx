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
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  args: {
    size: 'full',
    padding: true,
    className: 'ContainerEx'
  }
}

const Template = (args) => <Container {...args} />

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const FullWidth = Template.bind({})

export const NoPadding = Template.bind({})
NoPadding.args = {
  padding: false,
  children: 'No Padding'
}
