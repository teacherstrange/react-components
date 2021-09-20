import clsx from 'clsx'
import React, { Children, cloneElement, CSSProperties, ReactElement, ReactNode, useEffect, useState } from 'react'
import { useUIDSeed } from 'react-uid'
import { useDebounce } from 'react-use'
import { useFocusWithin } from '@react-aria/interactions'
import { Tooltip as TooltipClass, Arrow, Trigger as TriggerClass, Content as ContentClass } from './tooltip.module.css'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'
import { Popper, Target, Content } from 'react-nested-popper'

export type TooltipProps = PropsWithClass & {
  children: ReactNode;
  trigger: ReactNode;
  placement?: AutoPlacement | BasePlacement | VariationPlacement;
  show?: boolean;
  delay?: number;
  maxWidth?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  trigger,
  placement = 'bottom-start',
  style,
  show,
  maxWidth = '40ch',
  delay = 700
}) => {
  const seedID = useUIDSeed()
  const [visible, setVisible] = useState(false)
  const [internalDelay, setInternalDelay] = useState(delay)
  const [debouncedVisible, setDebouncedVisible] = useState(visible)

  const [, cancel] = useDebounce(
    () => {
      setDebouncedVisible(visible)
    },
    internalDelay,
    [visible]
  )

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => {
      setInternalDelay(0)
      setVisible(true)
    },
    onBlurWithin: () => {
      setInternalDelay(delay)
      setVisible(false)
    },
    onFocusWithinChange: () => null
  })

  useEffect(() => {
    cancel()
  }, [cancel])

  const dynamycStyle: CSSProperties = {
    '--maxW': maxWidth
  }

  return (
    <Popper
      show={show || debouncedVisible}
      onClick={() => null}
      outsideClickType="all"
      shouldCloseOnOutsideClick={() => true}
    >
      <Target
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => null}
        style={{ ...style }}
        className={TriggerClass}
        {...focusWithinProps}
      >
        {Children.map(trigger, (child: ReactElement) => cloneElement(
          child,
          {
            'aria-describedby': seedID('tooltip-content')
          }
        ))}
      </Target>
      <Content
        className={clsx(TooltipClass, className)}
        includeArrow
        arrowClassName={Arrow}
        innerRef={(el: HTMLElement) => {
          if (el) {
            el.dataset.elevation = '2'
            el.dataset.theme = 'dark'
          }
        }}
        popperOptions={{
          placement: placement,
          modifiers: [
            {
              name: 'flip',
              enabled: true,
              options: {
                fallbackPlacements: ['right-start', 'left-start', 'bottom', 'top']
              }
            },
            {
              name: 'offset',
              options: {
                offset: [0, 16]
              }
            }
          ]
        }}
      >
        <div
          role="tooltip"
          style={dynamycStyle}
          className={ContentClass}
          id={seedID('tooltip-content')}
        >
          {children}
        </div>
      </Content>
    </Popper>
  )
}
