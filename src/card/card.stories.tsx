import React from 'react'
import { Card } from './card'
import { Text } from '../text'
import { Title } from '../title'
import { Icon } from '../icon'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

const Template = (args) => <Card dimmed={1} {...args} />

export const WithChildren = Template.bind({})
/* eslint-disable */
WithChildren.args = {
  children: <>
    <Title level="3">Card title</Title>
    <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
  </>
}

export const WithLeftSlot = Template.bind({})
WithLeftSlot.args = {
  left: <Icon name="bell" dimension={32} />,
  lineOne: <Title level="5">Title</Title>,
  lineTwo: <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
}

export const WithRightSlot = Template.bind({})
WithRightSlot.args = {
  right: <Icon name="bell" dimension={32} />,
  lineOne: <Title level="5">Title</Title>,
  lineTwo: <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
}

export const WithSlots = Template.bind({})
WithSlots.args = {
  left: <Icon name="bell" dimension={32} />,
  lineOne: <Title level="5">Title</Title>,
  lineTwo: <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>,
  right: <Icon name="calendar" dimension={32} />
}
