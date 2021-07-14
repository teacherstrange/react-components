import React from 'react'
import { Icon } from '../icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    size: 16
  }
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 16,
  name: 'comment'
}
