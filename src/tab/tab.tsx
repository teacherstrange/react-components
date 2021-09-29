/* eslint-disable react/display-name */
import React, {
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useRef,
  ReactNode,
  Children,
  cloneElement,
  ButtonHTMLAttributes
} from 'react'
import { Tabs as TabsWrapper, useTabState, usePanelState } from '@bumaga/tabs'
import {
  useRovingTabIndex,
  useFocusEffect,
  RovingTabIndexProvider
} from 'react-roving-tabindex'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'
import { Icon } from '../icon'
import { Stack } from '../stack'
import { IconNames } from 'src/icons/types'

import {
  Tab as TabClass,
  TabList as TabListClass,
  TabItem as TabItemClass,
  TabPanel as TabPanelClass
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
  onChange?: (index: number) => void;
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
          {Children.map(children, (child: any, index) => (
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
        {Children.map(children, (child: any, index) => cloneElement(
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
/*                                  Tab.List                                  */
/* -------------------------------------------------------------------------- */

/**
 * Tab.List
 * Component
 */
const TabList: React.FC<PropsWithClass> = forwardRef<HTMLDivElement, PropsWithClass>(({
  children,
  className,
  ...props
}, forwardedRef) => (
  <div
    ref={forwardedRef}
    role="tablist"
    tabIndex={-1}
    className={clsx(TabListClass, className)}
    {...props}
  >
    <RovingTabIndexProvider>
      {children}
    </RovingTabIndexProvider>
  </div>
))

/* -------------------------------------------------------------------------- */
/*                                  Tab.Panel                                 */
/* -------------------------------------------------------------------------- */

/**
 * Tab.Panel
 * Public api
 */
export type TabPanelProps = PropsWithClass & {
  label: ReactNode;
  icon?: IconNames;
}

/**
 * Tab.Panel
 * Component
 */
const TabPanel: React.FC<TabPanelProps> = forwardRef<HTMLDivElement, TabPanelProps>(({
  children,
  className,
  ...props
}, forwardedRef) => {
  const isActive = usePanelState()
  return isActive
    ? (
      <div
        ref={forwardedRef}
        tabIndex={0}
        className={clsx(TabPanelClass, className)}
        {...props}
      >
        {children}
      </div>
      )
    : null
})

/* -------------------------------------------------------------------------- */
/*                                  Tab.Item                                  */
/* -------------------------------------------------------------------------- */

/**
 * Tab.Item
 * Public api
 */
export type TabItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: IconNames;
}

/**
 * Tab.Item
 * Component
 */
const TabItem: React.FC<TabItemProps> = ({
  children,
  className,
  icon,
  ...props
}) => {
  const { onClick, isActive } = useTabState()
  const internalRef = useRef<HTMLButtonElement>(null)
  const [, focused, handleKeyDown, handleClick] = useRovingTabIndex(internalRef, false)

  useFocusEffect(focused, internalRef)

  const fireClick = useCallback(
    () => {
      onClick()
      handleClick()
    },
    [handleClick, onClick]
  )

  return (
    <Stack
      as="button"
      direction="row"
      verticalAlign="center"
      horizontalAlign="start"
      fill={false}
      columnGap={8}
      role="tab"
      ref={internalRef}
      className={clsx(TabItemClass, className)}
      aria-selected={isActive}
      onClick={fireClick}
      onKeyDown={handleKeyDown}
      onFocus={fireClick}
      type="button"
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {icon && <Icon name={icon} dimension={16} />}
      {children}
    </Stack>
  )
}

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
Tab.Item.displayName = 'Tab.Item'
