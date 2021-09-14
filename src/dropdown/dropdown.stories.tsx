import React from 'react'
import { Button } from '../button'
import { Dropdown } from './dropdown'
import { Separator } from '../separator'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
  },
  argTypes: {
  }
}

const Template = ({ dimension, ...props }) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <Dropdown.Menu>
        <Dropdown.Item icon="arrow-right" dimension={dimension}>Sample long menu item</Dropdown.Item>
        <Dropdown.Item icon="user" dimension={dimension}>Short menu label</Dropdown.Item>
        <Separator />
        <Dropdown.Item icon="arrow-down-to-bracket" dimension={dimension}>Even shorter</Dropdown.Item>
        <Dropdown.Item dimension={dimension}>Really?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
)

export const Default = Template.bind({})
export const SmallItems = Template.bind({})
SmallItems.args = {
  dimension: 'small'
}
