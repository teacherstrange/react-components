import React from 'react'
import { ToggleButton } from './toggle-button'

export default {
  title: 'Components/Buttons/Toggle button',
  component: ToggleButton,
  args: {
    dimension: 'regular',
    kind: 'primary',
    restingIcon: 'play'
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

const Template = (args) => <ToggleButton {...args} />

export const Default = Template.bind({})

export const MultipleIcons = Template.bind({})
MultipleIcons.args = {
  pressedIcon: 'pause'
}
