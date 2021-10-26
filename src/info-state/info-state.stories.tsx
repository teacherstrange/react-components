/* eslint-disable */
import React from 'react'
import { InfoState } from './info-state'
import { Button } from '../button'

export default {
  title: 'Components/Dialogs/InfoState',
  component: InfoState,
  args: {
    title: 'Sample very long title'
  },
  argTypes: {
    iconColor: {
      options: ['gray', 'cyan', 'green', 'purple', 'yellow', 'red', 'blue'],
      control: { type: 'select' }
    }
  }
}

const Template = (args) => (
  <InfoState {...args}>
    Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem.
  </InfoState>
)

export const Default = Template.bind({})
Default.args = {
  icon: 'compass'
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: 'row',
  icon: 'compass'
}

export const WithImage = Template.bind({})
WithImage.args = {
  image: 'https://svgshare.com/i/b5f.svg'
}

export const WithImageHorizontal = Template.bind({})
WithImageHorizontal.args = {
  direction: 'row',
  image: 'https://svgshare.com/i/b5f.svg'
}

export const WithActions = Template.bind({})
WithActions.args = {
  actions: <>
    <Button>Primary</Button>
    <Button kind="flat">Secondary</Button>
  </>
}
