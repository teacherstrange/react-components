import React from 'react'
import { Disclosure } from './disclosure'

export default {
  title: 'Components/Disclosure',
  component: Disclosure,
  args: {
    padding: true,
    expandable: true,
    dimension: 'regular'
  },
  argTypes: {
    expandable: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    padding: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    dimension: {
      options: ['small', 'regular', 'big'],
      control: { type: 'inline-radio' }
    }
  }
}

const Template = (args) => (
  <Disclosure summary="Lorem ipsum dolor sit amet consectetur adipisicing elit." {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Doloribus corporis nobis ipsum natus laudantium dolorem sapiente,
    sint adipisci at asperiores quia ex voluptatum veniam! Quos rerum natus eos excepturi atque!
  </Disclosure>
)

export const Default = Template.bind({})
