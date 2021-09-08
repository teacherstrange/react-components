/* eslint-disable react/display-name */
import React, {
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useRef,
  Ref,
  ReactNode,
  cloneElement,
  Children
} from 'react'
import { Tabs as TabsWrapper, useTabState, usePanelState } from '@bumaga/tabs'
import {
  useRovingTabIndex,
  useFocusEffect,
  RovingTabIndexProvider
} from 'react-roving-tabindex'
import clsx from 'clsx'
import type * as Polymorphic from '@radix-ui/react-polymorphic'

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
type TabProps = PropsWithClass & {
  children: ReactNode;
  state?: [number, React.Dispatch<React.SetStateAction<number>>];
  onChange?: (index: number) => void;
}

/**
 * Tab.Root
 * Component
 */
const TabRoot: React.FC<TabProps> = forwardRef(({
  children,
  className,
  state,
  onChange,
  ...props
}, forwardedRef: Ref<HTMLDivElement>) => {
  const innerState = useState(0)
  const tabState = state || innerState
  const [currentTab] = tabState

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
        <TabList>
          {Children.map(children, (child: any) => <Tab.Item>{child.props.label}</Tab.Item>)}
        </TabList>
        {children}
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
const TabList: React.FC<PropsWithClass> = forwardRef(({
  children,
  className,
  ...props
}, forwardedRef: Ref<HTMLDivElement>) => (
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
}

/**
 * Tab.Panel
 * Component
 */
const TabPanel: React.FC<TabPanelProps> = forwardRef(({
  children,
  className,
  ...props
}, forwardedRef: Ref<HTMLDivElement>) => {
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
type PolymorphicTabItem = Polymorphic.ForwardRefComponent<'button', {}>;

/**
 * Tab.Item
 * Component
 */
const TabItem = forwardRef(({
  children,
  className,
  as: Wrapper = 'button',
  ...props
}, forwardedRef) => {
  const { onClick, isActive } = useTabState()
  const internalRef = useRef<Polymorphic.IntrinsicElement<typeof Wrapper>>(null)
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
    <Wrapper
      role="tab"
      ref={forwardedRef || internalRef}
      className={clsx(TabItemClass, className)}
      aria-selected={isActive}
      onClick={fireClick}
      onKeyDown={handleKeyDown}
      onFocus={fireClick}
      type={Wrapper === 'button' ? 'button' : undefined}
      tabIndex={isActive ? 0 : -1}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicTabItem

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
