import { CSSProperties, forwardRef, ReactNode } from 'react'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { Stack, StackProps, Polymorphic } from '../'
import clsx from 'clsx'

import { Card as CardClass, Left, Content, Right } from './card.module.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type CardProps = Pick<
StackProps,
  'wrap' | 'columnGap' | 'rowGap' | 'verticalAlign' | 'horizontalAlign'> & {
  padding?: false | TokensTypes['space'];
  left?: ReactNode;
  right?: ReactNode;
  bordered?: boolean
  radius?: false | TokensTypes['radius'];
  dimmed?: 1 | 2 | 3;
  vibrant?: boolean;
  highlightOnHover?: boolean;
}

type PolymorphicCard = Polymorphic.ForwardRefComponent<'div', CardProps>;

export const Card = forwardRef(({
  as: Wrapper = 'div',
  children,
  className,
  padding = 24,
  radius = 8,
  left,
  right,
  dimmed,
  bordered,
  columnGap = 24,
  rowGap = 24,
  verticalAlign = 'start',
  horizontalAlign = 'space-between',
  vibrant = false,
  highlightOnHover = false,
  wrap,
  style,
  ...otherProps
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--padding': padding && tkns.space[padding],
    '--radius': radius && tkns.radius[radius]
  }

  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(CardClass, className)}
      style={{ ...dynamicStyle, ...style }}
      data-card-dimmed={dimmed}
      data-card-bordered={bordered}
      data-card-vibrant={vibrant}
      data-card-highlight-hover={highlightOnHover}
      {...otherProps}
    >
      <Stack
        direction="row"
        fill={false}
        verticalAlign={verticalAlign}
        horizontalAlign={horizontalAlign}
        columnGap={columnGap}
        rowGap={rowGap}
        wrap={wrap}
      >
        {left && <div className={Left}>{left}</div>}

        {children && (
          <div className={Content}>
            {children}
          </div>
        )}

        {right && (
          <Stack className={Right}>
            {right}
          </Stack>
        )}
      </Stack>
    </Wrapper>
  )
}) as PolymorphicCard
