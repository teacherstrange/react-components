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
import { usePopper } from 'react-popper'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'

export type DropdownProps = PropsWithClass & {
  children: ReactNode;
  trigger: ReactNode;
  offset?: number,
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
}

export const Dropdown = ({
  className,
  children,
  trigger,
  offset = 8,
  placement = 'auto-start',
  ...props
}: DropdownProps) => {
  const DropDownRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const seedID = useUIDSeed()
  const [triggerRef, setTriggerRef] = useState(null)
  const [popUpElement, setPopUpElement] = useState<any>(null)

  const { styles: popUpStyles, attributes: popUpAttributes } = usePopper(triggerRef, popUpElement, {
    placement: placement,
    modifiers: [
      {
        name: 'flip',
        enabled: true,
        options: {
          fallbackPlacements: ['bottom', 'top']
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, offset]
        }
      }
    ]
  })

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
            ref: setTriggerRef,
            'aria-haspopup': 'true',
            'aria-controls': seedID('dropdown-menu'),
            'aria-expanded': isOpen
          }
        ))}
      </div>
      {isOpen && (
      <div
        className={PopUp}
        ref={setPopUpElement}
        style={popUpStyles.popper}
        {...popUpAttributes.popper}
      >
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
