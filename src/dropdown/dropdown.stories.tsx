import React from 'react'
import { Button } from '../button'
import { Dropdown } from './dropdown'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
  },
  argTypes: {
  }
}

const Template = (args) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...args}>
      <div data-elevation="2" style={{ maxWidth: 400, padding: 24 }}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button type="button">inside</button>
      </div>
    </Dropdown>
    <Button>diocane</Button>
  </>
)

export const Default = Template.bind({})
