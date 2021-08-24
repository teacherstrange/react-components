import React from 'react'
import { IconButton } from './icon-button'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    dimension: 'regular',
    kind: 'primary',
    icon: 'bell'
  },
  argTypes: {
    onClick: { action: 'clicked' },
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    kind: {
      options: ['primary', 'secondary', 'flat'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <IconButton {...args} />

export const Default = Template.bind({})
Default.args = {
  disabled: false
}

export const Link = Template.bind({})
Link.args = {
  as: 'a',
  href: 'https://equinusocio.dev',
  target: '_blank'
}
