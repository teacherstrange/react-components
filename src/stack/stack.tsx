import React, { CSSProperties, forwardRef } from 'react'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Stack as StackClass } from './stack.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type StackProps = {
  rowGap?: 0 | TokensTypes['space'];
  columnGap?: 0 | TokensTypes['space'];
  inline?: boolean;
  wrap?: boolean;
  fill?: boolean;
  verticalAlign?: string;
  horizontalAlign?: string;
  horizontalPadding?: TokensTypes['space'];
  verticalPadding?: TokensTypes['space'];
  direction?: 'row' | 'column';
}

type PolymorphicStack = Polymorphic.ForwardRefComponent<'div', StackProps>;

// eslint-disable-next-line react/display-name
export const Stack = forwardRef(({
  children,
  className,
  rowGap = 0,
  columnGap = 0,
  as: Wrapper = 'div',
  inline = false,
  direction = 'column',
  wrap = false,
  fill = true,
  verticalAlign = 'initial',
  horizontalAlign = 'initial',
  horizontalPadding = 0,
  verticalPadding = 0,
  style,
  ...props
}, forwardedRef) => {
  const alignmentTemplate = (prop: string) => {
    if (prop.includes('start') || prop.includes('end')) {
      return `flex-${prop}`
    }
    return prop
  }

  const computedStyle: CSSProperties = {
    '--rGap': rowGap && tksn.space[rowGap],
    '--cGap': columnGap && tksn.space[columnGap],
    '--vAlign': verticalAlign && alignmentTemplate(verticalAlign),
    '--hAlign': horizontalAlign && alignmentTemplate(horizontalAlign),
    '--vPadding': verticalPadding && tksn.space[verticalPadding],
    '--hPadding': horizontalPadding && tksn.space[horizontalPadding]
  }

  return (
    <Wrapper
      ref={forwardedRef}
      style={{ ...computedStyle, ...style }}
      data-stack-inline={inline}
      data-stack-wrap={wrap}
      data-stack-direction={direction}
      data-stack-fill={fill}
      className={clsx(StackClass, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicStack

Stack.displayName = 'Stack'
