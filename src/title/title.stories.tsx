import React from 'react'
import { Title } from '../title'
import { Container } from '../container'

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    controls: { hideNoControlsWarning: true }
  },
  argTypes: {
    tag: {
      table: {
        disable: true
      }
    }
  }
}

export const Default = () => (
  <Container>
    <Title tag="h1" level="display">Sample title</Title>
    <Title tag="h1" level="1">Sample title</Title>
    <Title tag="h2" level="2">Sample title</Title>
    <Title tag="h3" level="3">Sample title</Title>
    <Title tag="h4" level="4">Sample title</Title>
    <Title tag="h5" level="5">Sample title</Title>
    <Title tag="h6" level="6">Sample title</Title>
  </Container>
)

const Template = (args) => <Container size="medium"><Title {...args}>Sample title</Title></Container>

export const Single = Template.bind({})
Single.args = {
  tag: 'h1',
  level: '1'
}
