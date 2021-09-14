import React from 'react'
import { Button } from '../button'
import { Dropdown } from './dropdown'
import { Separator } from '../separator'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    dimension: 'regular',
    iconPosition: 'left'
  },
  argTypes: {
    dimension: {
      options: ['small', 'regular'],
      control: { type: 'radio' }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

const DefaultTemplate = ({ dimension, iconPosition, ...props }) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} placement="bottom-start" {...props}>
      <Dropdown.Menu>
        <Dropdown.Item iconPosition={iconPosition} icon="arrow-right" dimension={dimension}>Sample long menu item</Dropdown.Item>
        <Dropdown.Item iconPosition={iconPosition} icon="user" dimension={dimension}>Short menu label</Dropdown.Item>
        <Separator />
        <Dropdown.Item iconPosition={iconPosition} icon="arrow-down-to-bracket" dimension={dimension}>Even shorter</Dropdown.Item>
        <Dropdown.Item iconPosition={iconPosition} dimension={dimension}>Really?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
)

export const Default = DefaultTemplate.bind({})

const CustomTemplate = ({ dimension, iconPosition, ...props }) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} placement="bottom-start" {...props}>
      <div style={{ border: '2px solid black' }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Magni error unde sapiente beatae! Nostrum praesentium similique
        veniam non ut nulla, incidunt velit et, placeat cupiditate, aliquid saepe. Atque, provident perferendis?
      </div>
    </Dropdown>
  </>
)

export const CustomElement = CustomTemplate.bind({})
