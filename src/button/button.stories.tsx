import React from 'react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    size: 'regular',
    type: 'primary',
    children: 'Click me',
    fullWidth: false
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    },
    size: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    type: {
      options: ['primary', 'secondary', 'flat'],
      control: { type: 'radio' }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Button {...args} />

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

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: 'bookmark',
  iconPosition: 'left'
}
