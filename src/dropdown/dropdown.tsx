import clsx from 'clsx'
import {
  ReactNode,
  useState,
  Children,
  cloneElement,
  ReactElement,
  useRef,
  forwardRef,
  ForwardRefExoticComponent
} from 'react'
import { useKey, useClickAway } from 'react-use'
import { Dropdown as DropdownClass, PopUp } from './dropdown.module.css'
import { useUIDSeed } from 'react-uid'
import { useFocusWithin } from '@react-aria/interactions'
import { DropdownMenu, DropdownMenuProps } from './menu/dropdown-menu'
import { DropdownItem, DropdownItemProps } from './item/dropdown-item'
import { DropdownItemCheckbox, DropdownItemCheckboxProps } from './item-checkbox/dropdown-item-checkbox'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core'
import { usePopperTooltip } from 'react-popper-tooltip'
import { AnimatePresence, motion } from 'framer-motion'

export type DropdownProps = PropsWithClass & {
  /**
   * The content of the dropdown to display when the dropdown is open.
   */
  children: ReactNode;
  /**
   * The element to use as the trigger for the dropdown.
   */
  trigger: ReactNode;
  /**
   * The distance from the trigger to the dropdown.
   */
  offset?: number,
  /**
   * The placement of the dropdown. This is automatically handled based on
   * scroll and viewport edges. By default the dropdown is anchored at
   * the beginning of the trigger.
   */
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
}

type DropdownComponent = ForwardRefExoticComponent<DropdownProps> & {
  Menu: ForwardRefExoticComponent<DropdownMenuProps>;
  Item: ForwardRefExoticComponent<DropdownItemProps>;
  ItemCheckbox: ForwardRefExoticComponent<DropdownItemCheckboxProps>;
}

export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(({
  className,
  children,
  trigger,
  offset = 8,
  placement = 'auto-start'
}, forwardedRef) => {
  const renderedChildren = Children.toArray(children).filter(Boolean)
  const seedID = useUIDSeed()
  const popupRef = useRef<any>(forwardedRef)
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
    offset: [0, offset],
    closeOnOutsideClick: false
  })

  useClickAway(popupRef, () => {
    setIsOpen(false)
  })

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => null,
    onBlurWithin: (e) => e.relatedTarget && setIsOpen(false),
    onFocusWithinChange: () => null
  })

  useKey('Escape', () => setIsOpen(false))

  return (
    <div
      ref={popupRef}
      className={clsx(DropdownClass, className)}
      {...focusWithinProps}
    >
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
              style={{ y: -5 }}
              animate={visible ? { y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            >

              {Children.map(renderedChildren, (child: ReactElement) => cloneElement(
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
}) as DropdownComponent

Dropdown.displayName = 'Dropdown'

Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem
Dropdown.ItemCheckbox = DropdownItemCheckbox
