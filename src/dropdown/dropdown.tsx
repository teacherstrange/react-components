import clsx from 'clsx'
import React, {
  ReactNode,
  useState,
  Children,
  cloneElement,
  ReactElement
} from 'react'
import { useKey } from 'react-use'
import { Dropdown as DropdownClass, PopUp } from './dropdown.module.css'
import { useUIDSeed } from 'react-uid'
import { useFocusWithin } from '@react-aria/interactions'
import { DropdownMenu } from './dropdown-menu'
import { DropdownItem } from './dropdown-item'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core'
import { usePopperTooltip } from 'react-popper-tooltip'
import { AnimatePresence, motion } from 'framer-motion'

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
  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    delayShow: 0,
    delayHide: 200,
    trigger: ['click'],
    visible: isOpen,
    closeOnTriggerHidden: true,
    onVisibleChange: setIsOpen,
    placement: placement,
    offset: [0, offset]
  }, {
    strategy: 'fixed'
  })

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => null,
    onBlurWithin: (e) => e.relatedTarget && setIsOpen(false),
    onFocusWithinChange: () => null
  })

  useKey('Escape', () => setIsOpen(false))

  return (
    <div className={clsx(DropdownClass, className)} {...focusWithinProps}>
      {Children.map(trigger, (child: ReactElement) => cloneElement(
        child,
        {
          ref: setTriggerRef,
          id: seedID('dropdown-trigger'),
          'aria-haspopup': 'true',
          'aria-controls': seedID('dropdown-menu'),
          'aria-expanded': isOpen
        }
      ))}
      <AnimatePresence>
        {visible && (
          <div
            ref={setTooltipRef}
            role="tooltip"
            id={seedID('tooltip-content')}
            className={PopUp}
            {...getTooltipProps({ className: PopUp })}
          >
            <motion.div
              animate={visible ? { y: 5, opacity: 1 } : { y: 0, opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            >

              {Children.map(children, (child: ReactElement) => cloneElement(
                child,
                {
                  id: seedID('dropdown-menu'),
                  'aria-labelledby': seedID('dropdown-trigger')
                }
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem
