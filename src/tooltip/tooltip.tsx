import { FC, Children, cloneElement, CSSProperties, ReactElement, ReactNode, useState } from 'react'
import { useUIDSeed } from 'react-uid'
import { useKeyPress } from 'ahooks'
import { Elevator } from '../'
import { useFocusWithin } from '../hooks'
import { Tooltip as TooltipClass, Arrow, Trigger } from './tooltip.module.css'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'
import { usePopperTooltip } from 'react-popper-tooltip'

export type TooltipProps = PropsWithClass & {
  /**
   * Pass the content of the tooltip. It can be any valid React node.
   */
  children: ReactNode;
  /**
   * Set the element that will be used as the trigger of the tooltip.
   */
  trigger: ReactNode;
  /**
   * The placement of the tooltip. This is automatically handled based on
   * scroll and viewport edges.
   *
   * The first key refers to the X axis, the second key refers to the Y axis.
   * Eg: `auto-start` means the dropdown will be placed automatically on left or right
   * based on the available space, and anchored at the top (start) of the trigger.
   */
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
  /**
   * Set if the tooltip should be shown or hidden.
   */
  show?: boolean;
  /**
   * Define a delay time before the tooltip is shown.
   */
  delay?: number;
  /**
   * Set the max width of the tooltip. This prevents the tooltip content
   * from filling the whole screen.
   */
  maxWidth?: string;
  /**
   * Make the tooltip interactive.
   * This will allow the user to interact with the tooltip content.
   */
  interactive?: boolean;
  /**
   * Set the trigger container to behave like inline or block element
   */
  fill?: boolean;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  trigger,
  placement = 'bottom-start',
  show,
  style,
  maxWidth = '40ch',
  fill = false,
  interactive = false,
  delay = 500
}) => {
  const seedID = useUIDSeed()
  const [controlledVisible, setControlledVisible] = useState(false)

  useKeyPress('esc', () => setControlledVisible(false))

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    delayShow: delay,
    delayHide: 300,
    trigger: ['hover', 'focus'],
    visible: show || controlledVisible,
    closeOnTriggerHidden: true,
    interactive: interactive,
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
