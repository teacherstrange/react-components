/* eslint-disable react/display-name */
import React, {
  useCallback,
  useRef,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'
import {
  useRovingTabIndex,
  useFocusEffect
} from 'react-roving-tabindex'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { Stack, Icon } from '../'
import { useTabState } from './primitive-tab'

import {
  TabItem as TabItemClass
} from './tab.module.css'

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
export const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(({
  children,
  className,
  icon,
  ...props
}, forwardedRef) => {
  const { onClick, isActive } = useTabState(children)
  const internalRef = useRef<any>(forwardedRef)
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
})

TabItem.displayName = 'Tab.Item'
