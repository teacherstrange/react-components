/* eslint-disable react/display-name */
import React, { forwardRef, HTMLAttributes } from 'react'
import { RovingTabIndexProvider } from 'react-roving-tabindex'
import clsx from 'clsx'

import {
  TabList as TabListClass
} from './tab.module.css'

export type TabListProps = HTMLAttributes<HTMLDivElement>

/**
 * Tab.List
 * Component
 */
export const TabList = forwardRef<HTMLDivElement, TabListProps>(({
  children,
  className,
  ...otherProps
}, forwardedRef) => (
  <div
    ref={forwardedRef}
    role="tablist"
    tabIndex={-1}
    className={clsx(TabListClass, className)}
    {...otherProps}
  >
    <RovingTabIndexProvider>
      {children}
    </RovingTabIndexProvider>
  </div>
))

TabList.displayName = 'Tab.List'
