import React from 'react'
import { MenuButton } from './menu-button'
import { Dropdown } from '../dropdown'

export default {
  title: 'Components/Buttons/Menu button',
  component: MenuButton,
  args: {
    dimension: 'regular',
    kind: 'primary',
    label: 'Click me',
    fullWidth: false,
    disabled: false,
    loading: false
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    },
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

const Template = (args) => (
  <MenuButton {...args}>
    <Dropdown.Menu>
      <Dropdown.Item padding={false}>Option 1</Dropdown.Item>
      <Dropdown.Item padding={false}>Option 2</Dropdown.Item>
    </Dropdown.Menu>
  </MenuButton>
)

export const Default = Template.bind({})
Default.args = {
  as: 'a'
}
