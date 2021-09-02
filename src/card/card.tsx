import React, { CSSProperties, forwardRef, ReactNode, isValidElement } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import tkns from '@wonderflow/tokens/platforms/web/tokens.json'
import { Stack, StackProps } from '../stack'
import clsx from 'clsx'

import { Card as CardClass, Left, Content, Right } from './card.module.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type CardProps = PropsWithClass & Pick<
StackProps,
  'wrap' | 'columnGap' | 'verticalAlign' | 'horizontalAlign'> & {
  padding?: false | TokensTypes['space'];
  left?: ReactNode;
  lineOne?: ReactNode;
  lineTwo?: ReactNode;
  right?: ReactNode;
  radius?: false | TokensTypes['radius'];
  dimmed?: 1 | 2 | 3;
}

type PolymorphicCard = Polymorphic.ForwardRefComponent<'div', CardProps>;

// eslint-disable-next-line react/display-name
export const Card = forwardRef(({
  as: Wrapper = 'div',
  children,
  className,
  padding = 24,
  radius = 8,
  left,
  lineOne,
  lineTwo,
  right,
  dimmed,
  columnGap = 24,
  verticalAlign = 'start',
  horizontalAlign = 'space-between',
  wrap,
  style,
  ...props
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--padding': padding ? tkns.space[padding] : '0',
    '--radius': radius ? tkns.radius[radius] : '0'
  }

  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(CardClass, className)}
      style={{ ...dynamicStyle, ...style }}
      data-card-dimmed={dimmed}
      {...props}
    >
      {children || (
        <Stack
          direction="row"
          fill={false}
          verticalAlign={verticalAlign}
          horizontalAlign={horizontalAlign}
          columnGap={columnGap}
          wrap={wrap}
        >
          {left && <div className={Left}>{left}</div>}

          <Stack className={Content}>
            {lineOne && isValidElement(lineOne) ? lineOne : <span>{lineOne}</span>}
            {lineTwo && isValidElement(lineTwo) ? lineTwo : <span>{lineTwo}</span>}
          </Stack>

          {right && (
          <Stack className={Right}>
            {right}
          </Stack>
          )}
        </Stack>
      )}
    </Wrapper>
  )
}) as PolymorphicCard
