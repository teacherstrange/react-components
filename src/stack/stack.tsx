import React, { ElementType, CSSProperties } from 'react'
import styles from './stack.module.css'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import clsx from 'clsx'

type IStackProps<As extends keyof JSX.IntrinsicElements> = {
  rowGap?: keyof typeof tksn.space;
  columnGap?: keyof typeof tksn.space;
  inline?: boolean;
  wrap?: boolean;
  fill?: boolean;
  verticalAlign?: 'start' | 'center' | 'end';
  horizontalAlign?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column';
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Stack = <As extends keyof JSX.IntrinsicElements = 'div'>({
  children,
  className,
  rowGap,
  columnGap,
  as: Wrapper = 'div',
  inline = false,
  direction = 'column',
  wrap = false,
  verticalAlign,
  fill = true,
  horizontalAlign,
  style,
  ...props
}: IStackProps<As>) => {
  const computedStyle: CSSProperties = {
    '--rGap': rowGap && tksn.space[rowGap],
    '--cGap': columnGap && tksn.space[columnGap],
    '--vAlign': verticalAlign,
    '--hAlign': horizontalAlign
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
