/* eslint-disable react/display-name */
import React, {
  useEffect,
  useState,
  forwardRef,
  ReactNode,
  Children,
  cloneElement
} from 'react'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'
import { TabItem } from './tab-item'
import { TabList } from './tab-list'
import { TabPanel } from './tab-panel'
import { Tabs as TabsWrapper } from './primitive-tab'

import {
  Tab as TabClass
} from './tab.module.css'

/* -------------------------------------------------------------------------- */
/*                                  Tab.Root                                  */
/* -------------------------------------------------------------------------- */

/**
 * Tab.Root
 * Public api
 */
export type TabProps = PropsWithClass & {
  children: ReactNode;
  state?: [number, React.Dispatch<React.SetStateAction<number>>];
  onChange?(index: number): void;
}

/**
 * Tab.Root
 * Component
 */
const TabRoot: React.FC<TabProps> = forwardRef<HTMLDivElement, TabProps>(({
  children,
  className,
  state,
  onChange,
  ...props
}, forwardedRef) => {
  const renderedChildren = Children.toArray(children).filter(Boolean)

  const innerState = useState(0)
  const tabState = state || innerState
  const [currentTab] = tabState
  const seedID = useUIDSeed()

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(currentTab)
    }
  }, [currentTab, onChange])

  return (
    <div
      ref={forwardedRef}
      className={clsx(TabClass, className)}
      {...props}
    >
      <TabsWrapper state={tabState}>

        {/**
         * Auto generate the list of triggers based on
         * children. Assign required ARIA attributes and ID's
         */}
        <TabList>
          {Children.map(renderedChildren, (child: any, index) => (
            <Tab.Item
              id={seedID(`tab-item-${index}`)}
              aria-controls={seedID(`tab-panel-${index}`)}
              icon={child.props.icon}
            >
              {child.props.label}
            </Tab.Item>
          ))}
        </TabList>

        {/**
         * Loop children to assign required ARIA attributes and ID's
         */}
        {Children.map(renderedChildren, (child: any, index) => cloneElement(
          child,
          {
            id: seedID(`tab-panel-${index}`),
            'aria-labelledby': seedID(`tab-item-${index}`)
          }
        ))}

      </TabsWrapper>
    </div>
  )
})

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const Tab = {
  Root: TabRoot,
  List: TabList,
  Item: TabItem,
  Panel: TabPanel
}

Tab.Root.displayName = 'Tab.Root'
Tab.List.displayName = 'Tab.List'
Tab.Panel.displayName = 'Tab.Panel'
