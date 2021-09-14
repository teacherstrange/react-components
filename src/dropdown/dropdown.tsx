import clsx from 'clsx'
import React, {
  ReactNode,
  useState,
  useRef,
  useCallback,
  Children,
  cloneElement,
  ReactElement
} from 'react'
import { useClickAway, useKey } from 'react-use'
import { Dropdown as DropdownClass, Trigger, PopUp } from './dropdown.module.css'
import { useUIDSeed } from 'react-uid'
import { useFocusWithin } from '@react-aria/interactions'
import { DropdownMenu } from './dropdown-menu'
import { DropdownItem } from './dropdown-item'

export type DropdownProps = PropsWithClass & {
  children: ReactNode;
  trigger: ReactNode;
  fullWidth?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const Dropdown = ({
  className,
  children,
  trigger,
  fullWidth,
  align = 'left',
  ...props
}: DropdownProps) => {
  const DropDownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const seedID = useUIDSeed()

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => null,
    onBlurWithin: () => setIsOpen(false),
    onFocusWithinChange: () => null
  })

  const handleOpen = useCallback(
    (action: boolean) => () => {
      setIsOpen(action)
    },
    []
  )

  useKey('Escape', handleOpen(false))
  useClickAway(DropDownRef, handleOpen(false))

  return (
    <div
      className={clsx(DropdownClass, className)}
      data-dropdown-align={align}
      data-dropdown-fullwidth={fullWidth}
      ref={DropDownRef}
      {...focusWithinProps}
      {...props}
    >
      <div className={Trigger}>
        {Children.map(trigger, (child: ReactElement) => cloneElement(
          child,
          {
            onClick: handleOpen(!isOpen),
            id: seedID('dropdown-trigger'),
            'aria-haspopup': 'true',
            'aria-controls': seedID('dropdown-menu'),
            'aria-expanded': isOpen
          }
        ))}
      </div>
      {isOpen && (
      <div className={PopUp}>
        {Children.map(children, (child: ReactElement) => cloneElement(
          child,
          {
            id: seedID('dropdown-menu'),
            'aria-labelledby': seedID('dropdown-trigger')
          }
        ))}
      </div>
      )}
    </div>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem
