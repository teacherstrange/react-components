import React, { ElementType, CSSProperties } from 'react'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './stack.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

type StackOwnProps = {
  rowGap?: 0 | TokensTypes['space'];
  columnGap?: 0 | TokensTypes['space'];
  inline?: boolean;
  wrap?: boolean;
  fill?: boolean;
  verticalAlign?: string;
  horizontalAlign?: string;
  direction?: 'row' | 'column';
}

const defaultElement = 'div'

export type StackProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<StackOwnProps, As>;

export const Stack = <
  As extends ElementType = typeof defaultElement
>({
    children,
    className,
    rowGap = 0,
    columnGap = 0,
    as,
    inline = false,
    direction = 'column',
    wrap = false,
    fill = true,
    verticalAlign,
    horizontalAlign,
    style,
    ...props
  }: StackProps<As>) => {
  const Wrapper: ElementType = as || defaultElement
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
    '--hAlign': horizontalAlign && alignmentTemplate(horizontalAlign)
  }

  return (
    <Wrapper
      style={{ ...computedStyle, ...style }}
      data-stack-inline={inline}
      data-stack-wrap={wrap}
      data-stack-direction={direction}
      data-stack-fill={fill}
      className={clsx(styles.Stack, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
