import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useRef
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
  TabPanel as TabPanelClass,
  TabItem as TabItemClass
} from './tab.module.css'

type TabProps = PropsWithClass & {
  initialState?: number;
  onChange?: (index: number) => void;
}

type PolymorphicTabItem = Polymorphic.ForwardRefComponent<'button', {}>;

export const Tab: {
  Root: React.FC<TabProps>;
  List: React.FC<PropsWithClass>
  Panel: React.FC<PropsWithClass>
  Item: PolymorphicTabItem;
} = {
  Root: forwardRef(({
    children,
    className,
    initialState = 0,
    onChange,
    ...props
  }, forwardedRef) => {
    const [current, setCurrent] = useState(initialState)

    useEffect(() => {
      if (typeof onChange === 'function') {
        onChange(current)
      }
    }, [current, onChange])

    useImperativeHandle(forwardedRef, () => ({ setCurrent }))

    return (
      <TabsWrapper
        className={clsx(TabClass, className)}
        state={[current, setCurrent]}
        {...props}
      >
        {children}
      </TabsWrapper>
    )
  }),

  List: ({ children, className, ...props }) => (
    <div role="tablist" tabIndex={-1} className={clsx(TabListClass, className)} {...props}>
      <RovingTabIndexProvider>
        {children}
      </RovingTabIndexProvider>
    </div>
  ),

  Panel: ({ children, className, ...props }) => {
    const isActive = usePanelState()
    return isActive
      ? (
        <div
          tabIndex={0}
          className={clsx(TabPanelClass, className)}
          {...props}
        >
          {children}
        </div>
        )
      : null
  },

  Item: forwardRef(({
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
        ref={forwardedRef || internalRef}
        className={clsx(TabItemClass, className)}
        aria-selected={isActive}
        onClick={fireClick}
        onKeyDown={handleKeyDown}
        onFocus={fireClick}
        type={Wrapper === 'button' ? 'button' : undefined}
        role="tab"
        tabIndex={isActive ? 0 : -1}
        {...props}
      >
        {children}
      </Wrapper>
    )
  })
}

Tab.Root.displayName = 'Tab.Root'
Tab.List.displayName = 'Tab.TabList'
Tab.Panel.displayName = 'Tab.TabPanel'
Tab.Item.displayName = 'Tab.TabItem'
