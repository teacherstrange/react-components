import React from 'react'
import { Container } from './container'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    padding: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    className: {
      table: {
        disable: true
      }
    },
    dimension: {
      options: ['full', 'medium', 'large']
    }
  },
  args: {
    dimension: 'full'
  }
}

const Template = (args) => <Container {...args} />

export const Medium = Template.bind({})
Medium.args = {
  dimension: 'medium',
  className: 'ContainerEx'
}

export const Large = Template.bind({})
Large.args = {
  dimension: 'large',
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

export const AsSection = Template.bind({})
AsSection.args = {
  as: 'section',
  className: 'ContainerEx'
}
