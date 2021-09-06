import React from 'react'
import { Tab } from './'

export default {
  title: 'Components/Tab',
  component: Tab
}

const Template = (args) => (
  <>
    <Tab.Root {...args}>
      <Tab.List>
        <Tab.Item>Tab 1</Tab.Item>
        <Tab.Item>Tab 2</Tab.Item>
        <Tab.Item>Tab 3</Tab.Item>
        <Tab.Item>Tab 4</Tab.Item>
        <Tab.Item>Tab 5</Tab.Item>
        <Tab.Item>Tab 6</Tab.Item>
        <Tab.Item>Tab 7</Tab.Item>
      </Tab.List>

      <Tab.Panel>Panel 1</Tab.Panel>
      <Tab.Panel>Panel 2</Tab.Panel>
      <Tab.Panel>Panel 3</Tab.Panel>
      <Tab.Panel>Panel 4</Tab.Panel>
      <Tab.Panel>Panel 5</Tab.Panel>
      <Tab.Panel>Panel 6</Tab.Panel>
      <Tab.Panel>Panel 7</Tab.Panel>
    </Tab.Root>
  </>
)

export const Default = Template.bind({})
