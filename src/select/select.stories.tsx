import React from 'react'
import { Select } from './select'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    },
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'regular', 'big'],
      control: { type: 'radio' }
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' }
    }
  },
  args: {
    size: 'regular'
  }
}

const SingleTemplate = (args) => (
  <Select {...args} id="SampleSelect">
    <option value="placeholder" hidden selected disabled>Pick an option</option>
    <optgroup label="Option Group One">
      <option value="1">This is a very long option selected</option>
      <option value="2">Option 2</option>
    </optgroup>
    <optgroup label="Option Group Two">
      <option value="3">Option 1</option>
      <option value="4">Option 2</option>
      <option value="5">Option 3</option>
    </optgroup>
  </Select>
)

const MultipleTemplate = (args) => (
  <Select {...args} kind="multiple">
    <optgroup label="Option Group">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </optgroup>
    <optgroup label="Option Group 2">
      <option>Option 4</option>
      <option>Option 5</option>
      <option>Option 6</option>
    </optgroup>
  </Select>
)

export const Single = SingleTemplate.bind({})
Single.args = {
  disabled: false,
  type: 'single'
}

export const WithLabel = SingleTemplate.bind({})
WithLabel.args = {
  disabled: false,
  type: 'single',
  label: 'Label'
}

export const Multiple = MultipleTemplate.bind({})
Multiple.args = {
  type: 'multiple'
}