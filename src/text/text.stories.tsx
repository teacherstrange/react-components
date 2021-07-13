import React from 'react'
import { Text } from '../text'
import { Container } from '../container'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    tag: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius dolores, tempore quas labore officiis praesentium. Porro sed dolorem, numquam temporibus consequuntur quam doloremque ducimus error tempora illo aliquam nesciunt nostrum!'
  }
}

const Template = (args) => <Container size="medium"><Text {...args} /></Container>

export const Default = Template.bind({})
export const Weight = Template.bind({})
Weight.args = {
  weight: 'bold'
}
