import React from 'react'
import { Stack } from '../stack'
import { Textfield } from './textfield'

export default {
  title: 'Components/Textfield',
  component: Textfield,
  args: {
    size: 'regular',
    readOnly: false,
    defaultValue: 'Sample value'
  },
  argTypes: {
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    },
    size: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    readOnly: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    invalid: {
      options: [true, false],
      control: { type: 'inline-radio' }
    },
    iconPosition: {
      options: ['left', 'right', undefined],
      control: { type: 'inline-radio' }
    }
  }
}

const SingleTemplate = (args) => (
  <Stack rowGap="24">
    <Textfield {...args} id="empty" label="Empty" placeholder="Placeholder" />
  </Stack>
)

const MultipleTemplate = (args) => (
  <Stack rowGap="24">
    <Textfield {...args} id="filled" label="Filled" defaultValue="Sample value" />
    <Textfield {...args} label="Filled read only" defaultValue="Sample value" readOnly />
    <Textfield {...args} label="Empty disbled" placeholder="Placeholder" disabled />
    <Textfield {...args} label="Filled disabled" defaultValue="Sample value" disabled />
    <Textfield {...args} type="number" label="Type number" defaultValue={100} />
    <Textfield {...args} type="search" label="Type search" />
    <Textfield {...args} type="date" label="Type date" />
    <Textfield {...args} type="time" label="Type time" />
    <Textfield {...args} type="month" label="Type month" />
    <Textfield {...args} type="week" label="Type week" />
    <Textfield {...args} type="datetime-local" label="Type datetime-local" />
  </Stack>
)

export const Single = SingleTemplate.bind({})
Single.args = {
  disabled: false
}
Single.argTypes = {
  textarea: {
    table: {
      disable: true
    }
  }
}

export const Types = MultipleTemplate.bind({})
Types.args = {
  disabled: false
}
Types.argTypes = {
  textarea: {
    table: {
      disable: true
    }
  }
}

export const Textarea = SingleTemplate.bind({})
Textarea.args = {
  disabled: false,
  textarea: true,
  rows: 8
}
Textarea.argTypes = {
  textarea: {
    table: {
      disable: true
    }
  }
}

export const WithIcon = SingleTemplate.bind({})
WithIcon.args = {
  icon: 'calendar',
  type: 'date'
}
