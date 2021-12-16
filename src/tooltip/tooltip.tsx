import React, { Children, cloneElement, CSSProperties, ReactElement, ReactNode, useState } from 'react'
import { useUIDSeed } from 'react-uid'
import { useKey } from 'react-use'
import { Elevator } from '../elevator'
import { useFocusWithin } from '@react-aria/interactions'
import { Tooltip as TooltipClass, Arrow, Trigger } from './tooltip.module.css'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'
import { usePopperTooltip } from 'react-popper-tooltip'

export type TooltipProps = PropsWithClass & {
  children: ReactNode;
  trigger: ReactNode;
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
  show?: boolean;
  delay?: number;
  maxWidth?: string;
  fill?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  trigger,
  placement = 'bottom-start',
  show,
  style,
  maxWidth = '40ch',
  fill = false,
  delay = 500
}) => {
  const seedID = useUIDSeed()
  const [controlledVisible, setControlledVisible] = useState(false)

  useKey('Escape', () => setControlledVisible(false))

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    delayShow: delay,
    delayHide: 200,
    trigger: ['hover', 'focus'],
    visible: show || controlledVisible,
    closeOnTriggerHidden: true,
    onVisibleChange: setControlledVisible,
    placement: placement,
    offset: [0, 16]
  }, {
    strategy: 'fixed'
  })

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => {
      setControlledVisible(true)
    },
    onBlurWithin: () => {
      setControlledVisible(false)
    },
    onFocusWithinChange: () => null
  })

  const dynamycStyle: CSSProperties = {
    '--maxW': maxWidth
  }

  return (
    <div data-tooltip-fill={fill} className={Trigger} {...focusWithinProps} style={{ ...style }}>
      {Children.map(trigger, (child: ReactElement) => cloneElement(
        child,
        {
          ref: setTriggerRef,
          'aria-describedby': seedID('tooltip-content')
        }
      ))}
      {visible && (
        <Elevator resting={2}>
          <div
            ref={setTooltipRef}
            role="tooltip"
            id={seedID('tooltip-content')}
            data-theme="dark"
            {...getTooltipProps({ className: TooltipClass, style: dynamycStyle })}
          >
            {children}
            <div {...getArrowProps({ className: Arrow })} />
          </div>
        </Elevator>
      )}
    </div>
  )
}
