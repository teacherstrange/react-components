/* eslint-disable react/display-name */
import React, {
  forwardRef
} from 'react'
import {
  RovingTabIndexProvider
} from 'react-roving-tabindex'
import clsx from 'clsx'

import {
  TabList as TabListClass
} from './tab.module.css'

/**
 * Tab.List
 * Component
 */
export const TabList: React.FC<PropsWithClass> = forwardRef<HTMLDivElement, PropsWithClass>(({
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
