import {
  forwardRef,
  ReactNode
} from 'react'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { usePanelState } from './primitive-tab'

import {
  TabPanel as TabPanelClass
} from './tab.module.css'

/**
 * Tab.Panel
 * Public api
 */
export type TabPanelProps = PropsWithClass & {
  /**
   * Set the tab panel name and accessible label
   */
  label: ReactNode;
  /**
   * Add an additional icon to the tab panel label, enforcing
   * the meaning of the name and context.
   */
  icon?: IconNames;
}

/**
 * Tab.Panel
 * Component
 */
export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({
  children,
  className,
  ...otherProps
}, forwardedRef) => {
  const isActive = usePanelState(children)
  return isActive
    ? (
      <div
        ref={forwardedRef}
        tabIndex={0}
        className={clsx(TabPanelClass, className)}
        {...otherProps}
      >
        {children}
      </div>
      )
    : null
})

TabPanel.displayName = 'Tab.Panel'
