import React, {
  useCallback,
  useEffect,
  useMemo,
  useImperativeHandle,
  useState,
  forwardRef,
  createRef
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

const KEYCODES = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
}

type TabProps = PropsWithClass & {
  initialState?: number;
  onChange?: (index: number) => void;
}

type PolymorphicTabItem = Polymorphic.ForwardRefComponent<'button', {}>;

export const Tab: {
  Root: React.FC<TabProps>;
  TabList: React.FC<PropsWithClass>
  TabPanel: React.FC<PropsWithClass>
  TabItem: PolymorphicTabItem;
} = {
  Root: forwardRef(({
    children,
    className,
    initialState = 0,
    onChange,
    ...props
  }, forwardedRef) => {
    const [current, setCurrent] = useState(initialState)
    const tabsCount = useMemo(() => React.Children.count(children) - 1, [children])

    const onKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      // @ts-ignore
      const { target: { dataset } } = event

      if (!dataset.tabitem) {
        return
      }

      switch (event.key) {
        case KEYCODES.RIGHT:
          event.preventDefault()
          setCurrent(current === tabsCount - 1 ? current : current + 1)
          break
        case KEYCODES.LEFT:
          event.preventDefault()
          setCurrent(current === 0 ? current : current - 1)
          break
        default:
          break
      }
    }, [current, tabsCount, setCurrent])

    useEffect(() => {
      if (typeof onChange === 'function') {
        onChange(current)
      }
    }, [current, onChange])

    useImperativeHandle(forwardedRef, () => ({ setCurrent }))

    return (
      <div onKeyDown={onKeyDown} className={clsx(TabClass, className)} {...props}>
        <TabsWrapper state={[current, setCurrent]}>{children}</TabsWrapper>
      </div>
    )
  }),

  TabList: ({ children, className, ...props }) => (
    <div role="tablist" tabIndex={-1} className={clsx(TabListClass, className)} {...props}>
      <RovingTabIndexProvider>
        {children}
      </RovingTabIndexProvider>
    </div>
  ),

  TabPanel: ({ children, className, ...props }) => {
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

  TabItem: forwardRef(({
    children,
    className,
    as: Wrapper = 'button',
    ...props
  }, forwardedRef) => {
    const { onClick, isActive } = useTabState()
    const internalRef = createRef<Polymorphic.IntrinsicElement<typeof Wrapper>>()
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
        data-tab-active={isActive}
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
Tab.TabList.displayName = 'Tab.TabList'
Tab.TabPanel.displayName = 'Tab.TabPanel'
Tab.TabItem.displayName = 'Tab.TabItem'
