import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { useUIDSeed } from 'react-uid'
import { Tooltip as TooltipClass, Arrow } from './tooltip.module.css'
import { AutoPlacement, BasePlacement, VariationPlacement } from '@popperjs/core/lib'
// import { usePopper } from 'react-popper'
import { Popper, Target, Content } from 'react-nested-popper'

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

  return (
    <Popper>
      <Target style={{ display: 'inline-flex' }}>
        {trigger}
      </Target>
      <Content
        {...props}
        role="tooltip"
        id={seedID('tooltip-content')}
        className={clsx(TooltipClass, className)}
        data-theme="dark"
        includeArrow
        arrowClassName={Arrow}
        popperOptions={{
          placement: placement,
          modifiers: [
            {
              name: 'flip',
              enabled: true
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
        {children}
      </Content>
    </Popper>
  )
}
