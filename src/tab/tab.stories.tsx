import React from 'react'
import { Tab } from './'

export default {
  title: 'Components/Tab',
  component: Tab
}

const Template = (args) => (
  <Tab.Root {...args}>
    <Tab.TabList>
      <Tab.TabItem>Tab 1</Tab.TabItem>
      <Tab.TabItem>Tab 2</Tab.TabItem>
      <Tab.TabItem>Tab 3</Tab.TabItem>
      <Tab.TabItem>Tab 4</Tab.TabItem>
      <Tab.TabItem>Tab 5</Tab.TabItem>
      <Tab.TabItem>Tab 6</Tab.TabItem>
      <Tab.TabItem>Tab 7</Tab.TabItem>
    </Tab.TabList>

    <Tab.TabPanel>Panel 1</Tab.TabPanel>
    <Tab.TabPanel>Panel 2</Tab.TabPanel>
    <Tab.TabPanel>Panel 3</Tab.TabPanel>
    <Tab.TabPanel>Panel 4</Tab.TabPanel>
    <Tab.TabPanel>Panel 5</Tab.TabPanel>
    <Tab.TabPanel>Panel 6</Tab.TabPanel>
    <Tab.TabPanel>Panel 7</Tab.TabPanel>
  </Tab.Root>
)

export const Default = Template.bind({})
