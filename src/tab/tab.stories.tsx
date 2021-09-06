import React, { useRef, useState } from 'react'
import { Tab } from './'
import { UIDReset, useUIDSeed } from 'react-uid'

export default {
  title: 'Components/Tab',
  component: Tab
}

const Template = (args) => {
  const seed = useUIDSeed()

  return (
    <>
      <UIDReset>
        <>
          <Tab.Root {...args}>
            <Tab.List>
              <Tab.Item id={seed('tab-1')} aria-controls={seed('panel-1')}>Tab 1</Tab.Item>
              <Tab.Item id={seed('tab-2')} aria-controls={seed('panel-2')}>Tab 2</Tab.Item>
              <Tab.Item id={seed('tab-3')} aria-controls={seed('panel-3')}>Tab 3</Tab.Item>
              <Tab.Item id={seed('tab-4')} aria-controls={seed('panel-4')}>Tab 4</Tab.Item>
              <Tab.Item id={seed('tab-5')} aria-controls={seed('panel-5')}>Tab 5</Tab.Item>
              <Tab.Item id={seed('tab-6')} aria-controls={seed('panel-6')}>Tab 6</Tab.Item>
              <Tab.Item id={seed('tab-7')} aria-controls={seed('panel-7')}>Tab 7</Tab.Item>
            </Tab.List>

            <Tab.Panel aria-labelledby={seed('tab-1')} id={seed('panel-1')}>Panel 1</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-2')} id={seed('panel-2')}>Panel 2</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-3')} id={seed('panel-3')}>Panel 3</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-4')} id={seed('panel-4')}>Panel 4</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-5')} id={seed('panel-5')}>Panel 5</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-6')} id={seed('panel-6')}>Panel 6</Tab.Panel>
            <Tab.Panel aria-labelledby={seed('tab-7')} id={seed('panel-7')}>Panel 7</Tab.Panel>
          </Tab.Root>
        </>
      </UIDReset>
    </>
  )
}

export const Default = Template.bind({})
export const InitialTab = Template.bind({})
InitialTab.args = {
  initialState: 3
}

export const ProgrammaticTab = () => {
  const tabRef = useRef(null)
  const seed = useUIDSeed()

  return (
    <Tab.Root ref={tabRef}>
      <Tab.List>
        <Tab.Item id={seed('tab-1')} aria-controls={seed('panel-1')}>Tab 1</Tab.Item>
        <Tab.Item id={seed('tab-2')} aria-controls={seed('panel-2')}>Tab 2</Tab.Item>
        <Tab.Item id={seed('tab-3')} aria-controls={seed('panel-3')}>Tab 3</Tab.Item>
      </Tab.List>

      <Tab.Panel aria-labelledby={seed('tab-1')} id={seed('panel-1')}>
        <button
          type="button"
          onClick={() => console.log(tabRef.current.setCurrent(2))}
        >
          Go to 3
        </button>
      </Tab.Panel>
      <Tab.Panel aria-labelledby={seed('tab-2')} id={seed('panel-2')}>Panel 2</Tab.Panel>
      <Tab.Panel aria-labelledby={seed('tab-3')} id={seed('panel-3')}>Panel 3</Tab.Panel>
    </Tab.Root>
  )
}

export const ChangeEvent = () => {
  const state = useState(0)
  return (
    <Template state={state} onChange={index => alert(`${index} is selected`)} />
  )
}
