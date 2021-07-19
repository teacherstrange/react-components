import React from 'react'
import { Title } from '../title'
import { Container } from '../container'

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const Default = () => (
  <Container>
    <Title as="h1" level="display">Sample title</Title>
    <Title as="h1" level="1">Sample title</Title>
    <Title as="h2" level="2">Sample title</Title>
    <Title as="h3" level="3">Sample title</Title>
    <Title as="h4" level="4">Sample title</Title>
    <Title as="h5" level="5">Sample title</Title>
    <Title as="h6" level="6">Sample title</Title>
  </Container>
)

const Template = (args) => <Container size="medium"><Title {...args}>Sample title</Title></Container>

export const Single = Template.bind({})
Single.args = {
  as: 'span',
  level: '1'
}
