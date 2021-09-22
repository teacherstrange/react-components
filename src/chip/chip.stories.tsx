import React from 'react'
import { Chip } from './chip'

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    onDismissClick: {
      action: 'dismissed',
      table: {
        disable: true
      }
    },
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    color: {
      options: ['gray', 'cyan', 'green', 'purple', 'yellow', 'red', 'blue'],
      control: { type: 'select' }
    }
  },
  args: {
    dimension: 'regular',
    interactive: false,
    color: 'gray'
  }
}

const Template = (args) => <Chip {...args}>Chip text</Chip>

export const Default = Template.bind({})
Default.args = {
}
