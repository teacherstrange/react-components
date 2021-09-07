import React, {
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useRef,
  Ref,
  useImperativeHandle,
  ReactNode
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
  children: ReactNode;
  initialTab?: number;
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
    initialTab = 0,
    onChange,
    ...props
  }, forwardedRef) => {
    const [current, setCurrent] = useState(initialTab)

    useEffect(() => {
      if (typeof onChange === 'function') {
        onChange(current)
      }
    }, [current, onChange])

    useImperativeHandle(forwardedRef, () => ({ setCurrent }))

    return (
      <div
        className={clsx(TabClass, className)}
        {...props}
      >
        <TabsWrapper state={[current, setCurrent]}>
          {children}
        </TabsWrapper>
      </div>
    )
  }),

  List: forwardRef(({ children, className, ...props }, forwardedRef: Ref<HTMLDivElement>) => (
    <div ref={forwardedRef} role="tablist" tabIndex={-1} className={clsx(TabListClass, className)} {...props}>
      <RovingTabIndexProvider>
        {children}
      </RovingTabIndexProvider>
    </div>
  )),

  Panel: forwardRef(({ children, className, ...props }, forwardedRef: Ref<HTMLDivElement>) => {
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
  }),

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
  })
}

Tab.Root.displayName = 'Tab.Root'
Tab.List.displayName = 'Tab.List'
Tab.Panel.displayName = 'Tab.Panel'
Tab.Item.displayName = 'Tab.Item'
