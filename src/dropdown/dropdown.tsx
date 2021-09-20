import clsx from 'clsx'
import React, {
  ReactNode,
  useState,
  Children,
  cloneElement,
  ReactElement,
  useCallback
} from 'react'
import { useKey } from 'react-use'
import { Dropdown as DropdownClass, PopUp } from './dropdown.module.css'
import { useUIDSeed } from 'react-uid'
import { useFocusWithin } from '@react-aria/interactions'
import { DropdownMenu } from './dropdown-menu'
import { DropdownItem } from './dropdown-item'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core'
import { Popper, Target, Content } from 'react-nested-popper'
import { motion } from 'framer-motion'

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
  placement = 'auto-start'
}: DropdownProps) => {
  const seedID = useUIDSeed()
  const [isOpen, setIsOpen] = useState(false)

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => null,
    onBlurWithin: (e) => e.relatedTarget && setIsOpen(false),
    onFocusWithinChange: () => null
  })

  const handleOpen = useCallback(
    (action: boolean) => () => {
      setIsOpen(action)
    },
    []
  )
  useKey('Escape', () => handleOpen(false))

  return (
    <Popper
      show={isOpen}
      outsideClickType="all"
      onOutsideClick={handleOpen(false)}
      onTargetClick={handleOpen(!isOpen)}
      usePortal={false}
    >
      <Target
        className={clsx(DropdownClass, className)}
      >
        {Children.map(trigger, (child: ReactElement) => cloneElement(
          child,
          {
            id: seedID('dropdown-trigger'),
            'aria-haspopup': 'true',
            'aria-controls': seedID('dropdown-menu'),
            'aria-expanded': isOpen
          }
        ))}
      </Target>
      <Content
        className={PopUp}
        popperOptions={{
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
        }}
      >
        <motion.div
          animate={isOpen ? { y: 5, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        >
          <div {...focusWithinProps}>
            {Children.map(children, (child: ReactElement) => cloneElement(
              child,
              {
                id: seedID('dropdown-menu'),
                'aria-labelledby': seedID('dropdown-trigger')
              }
            ))}
          </div>
        </motion.div>
      </Content>
    </Popper>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem
