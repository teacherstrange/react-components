
import React, { Children, cloneElement, forwardRef, ReactElement, ReactChildren, HTMLAttributes } from 'react'
import { RovingTabIndexProvider } from 'react-roving-tabindex'
import { Stack, Elevator } from '../'
import clsx from 'clsx'

import { DropdownMenu as DropdownMenuClass } from './dropdown-menu.module.css'

export type DropdownMenuProps = HTMLAttributes<HTMLUListElement> & {
  children: ReactChildren;
}

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(({
  className,
  children,
  ...props
}, forwardedRef) => {
  const renderedChildren = Children.toArray(children).filter(Boolean)

  return (
    <Elevator resting={2}>
      <Stack
        as="ul"
        ref={forwardedRef}
        className={clsx(DropdownMenuClass, className)}
        role="menu"
        {...props}
      >
        <RovingTabIndexProvider options={{ direction: 'vertical', loopAround: true }}>
          {Children.map(renderedChildren, (child: ReactElement | JSX.Element, index) => (
            <Stack as="li" role="none" verticalPadding={child.type?.displayName === 'Separator' ? 8 : undefined}>
              {cloneElement(
                child,
                {
                  autoFocus: index === 0 && true
                }
              )}
            </Stack>
          ))}
        </RovingTabIndexProvider>
      </Stack>
    </Elevator>
  )
})
