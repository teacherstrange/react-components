import { CSSProperties, forwardRef, ReactNode } from 'react'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { Stack, StackProps, Polymorphic } from '../'
import clsx from 'clsx'

import { Card as CardClass, Left, Content, Right } from './card.module.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type CardProps = Pick<
StackProps,
  'wrap' | 'columnGap' | 'rowGap' | 'verticalAlign' | 'horizontalAlign'>
  & {
  /**
   * Set the padding on each side of the card.
   */
  padding?: false | TokensTypes['space'];
  /**
   * Content rendered inside the card on the left side, before children.
   */
  left?: ReactNode;
  /**
   * Content rendered inside the card on the right side, after children.
   */
  right?: ReactNode;
  /**
   * Add a border to the card to increase its visual weight and contrast.
   */
  bordered?: boolean
  /**
   * Define the edge radius of the card.
   */
  radius?: false | TokensTypes['radius'];
  /**
   * Change the background color of the card.
   */
  dimmed?: 1 | 2 | 3;
  /**
   * Make the card vibrant. Add tranlucent background.
   */
  vibrant?: boolean;
  /**
   * Make the card vibrant. Add tranlucent background.
   */
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
