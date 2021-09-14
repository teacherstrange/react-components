
import React, { Children, cloneElement, forwardRef, ReactElement, ReactNode } from 'react'
import { RovingTabIndexProvider } from 'react-roving-tabindex'
import { Elevator } from '../elevator'
import { Stack } from '../stack'
import clsx from 'clsx'

import { DropdownMenu as DropdownMenuClass } from './dropdown-menu.module.css'

export type DropdownMenuProps = PropsWithClass & {
  children: ReactNode;
}

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(({
  className,
  children,
  ...props
}, forwardedRef) => (
  <Elevator resting={2}>
    <Stack
      as="ul"
      ref={forwardedRef}
      rowGap={4}
      className={clsx(DropdownMenuClass, className)}
      role="menu"
      {...props}
    >
      <RovingTabIndexProvider options={{ direction: 'vertical', loopAround: true }}>
        {Children.map(children, (child: ReactElement, index) => (
          <li role="menuitem">
            {cloneElement(
              child,
              {
                autoFocus: index === 0 && true
              }
            )}
          </li>
        ))}
      </RovingTabIndexProvider>
    </Stack>
  </Elevator>
))

DropdownMenu.displayName = 'Dropdown.Menu'
