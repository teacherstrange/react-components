import clsx from 'clsx'
import React, { Children, cloneElement, ReactElement, ReactNode, useState } from 'react'
import { useUIDSeed } from 'react-uid'
import { Tooltip as TooltipClass, Arrow } from './tooltip.module.css'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'
import { usePopper } from 'react-popper'

export type TooltipProps = PropsWithClass & {
  trigger: ReactNode;
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  trigger,
  placement = 'bottom-start',
  ...props
}) => {
  const seedID = useUIDSeed()
  const [triggerRef, setTriggerRef] = useState(null)
  const [arrowRef, setArrowRef] = useState<any>(null)
  const [popUpElement, setPopUpElement] = useState<any>(null)

  const { styles, attributes } = usePopper(triggerRef, popUpElement, {
    placement: placement,
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowRef,
          padding: 16
        }
      },
      {
        name: 'flip',
        enabled: true,
        options: {
          fallbackPlacements: ['right-start', 'left-start', 'top', 'bottom']
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 16]
        }
      }
    ]
  })

  return (
    <>
      {
        Children.only(trigger) &&
        Children.map(trigger, (child: ReactElement) => cloneElement(
          child,
          {
            ref: setTriggerRef,
            'aria-describedby': seedID('tooltip-content')
          }
        ))
      }
      <div
        role="tooltip"
        id={seedID('tooltip-content')}
        className={clsx(TooltipClass, className)}
        style={styles.popper}
        ref={setPopUpElement}
        data-theme="dark"
        {...attributes.popper}
        {...props}
      >
        {children}
        <div className={Arrow} style={styles.arrow} ref={setArrowRef} />
      </div>
    </>
  )
}
