import React from 'react'
import { Text } from '../text'
import { Container } from '../container'

export default {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    maxWidth: 'auto',
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores, tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!',
    textAlign: 'start',
    responsive: true
  },
  argTypes: {
    sentiment: {
      options: ['positive', 'informative', 'danger', 'warning'],
      control: { type: 'select' }
    },
    dimmed: {
      options: [5, 6, 7],
      control: { type: 'select' }
    },
    textAlign: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => <Container dimension="medium"><Text {...args} /></Container>

export const Default = Template.bind({})
export const Weight = Template.bind({})
Weight.args = {
  weight: 'bold'
}
export const Align = Template.bind({})
Align.args = {
  textAlign: 'end'
}
