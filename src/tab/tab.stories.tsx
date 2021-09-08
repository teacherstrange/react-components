import React, { useState } from 'react'
import { Tab } from './tab'

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    onChange: {
      action: 'changed',
      table: {
        disable: true
      }
    }
  }
}

const Template = (args) => {
  return (
    <>
      <Tab.Root {...args}>
        <Tab.Panel label="Tab 1">Panel 1</Tab.Panel>
        <Tab.Panel label="Tab 2">Panel 2</Tab.Panel>
        <Tab.Panel label="Tab 3">Panel 3</Tab.Panel>
        <Tab.Panel label="Tab 4">Panel 4</Tab.Panel>
        <Tab.Panel label="Tab 5">Panel 5</Tab.Panel>
        <Tab.Panel label="Tab 6">Panel 6</Tab.Panel>
        <Tab.Panel label="Tab 7">Panel 7</Tab.Panel>
      </Tab.Root>
    </>
  )
}

export const Default = Template.bind({})

export const InitialTab = () => {
  const state = useState(2)

  return (
    <Tab.Root state={state}>
      <Tab.Panel label="Tab 1">Panel 1</Tab.Panel>
      <Tab.Panel label="Tab 2">Panel 2</Tab.Panel>
      <Tab.Panel label="Tab 3">Panel 3</Tab.Panel>
      <Tab.Panel label="Tab 4">Panel 4</Tab.Panel>
      <Tab.Panel label="Tab 5">Panel 5</Tab.Panel>
      <Tab.Panel label="Tab 6">Panel 6</Tab.Panel>
      <Tab.Panel label="Tab 7">Panel 7</Tab.Panel>
    </Tab.Root>
  )
}

export const ProgrammaticTab = () => {
  const state = useState(0)
  const [, setState] = state

  return (
    <Tab.Root state={state}>
      <Tab.Panel label="Tab 1"><button type="button" onClick={() => setState(4)}>Go to 5</button></Tab.Panel>
      <Tab.Panel label="Tab 2">Panel 2</Tab.Panel>
      <Tab.Panel label="Tab 3">Panel 3</Tab.Panel>
      <Tab.Panel label="Tab 4">Panel 4</Tab.Panel>
      <Tab.Panel label="Tab 5">Panel 5</Tab.Panel>
      <Tab.Panel label="Tab 6">Panel 6</Tab.Panel>
      <Tab.Panel label="Tab 7">Panel 7</Tab.Panel>
    </Tab.Root>
  )
}

export const ChangeEvent = Template.bind({})

ChangeEvent.args = {
  onChange: (current) => alert(`current is ${current}`)
}
