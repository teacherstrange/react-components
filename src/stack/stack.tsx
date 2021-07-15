import React, { ElementType, CSSProperties } from 'react'
import styles from './stack.module.css'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import clsx from 'clsx'

export interface IStackProps<T> {
  as?: T | keyof JSX.IntrinsicElements;
  rowGap?: keyof typeof tksn.space;
  columnGap?: keyof typeof tksn.space;
  inline?: boolean;
  wrap?: boolean;
  fill?: boolean;
  verticalAlign?: 'start' | 'center' | 'end';
  horizontalAlign?: 'start' | 'center' | 'end';
  direction?: 'row' | 'column';
}

export const Stack = <T extends ElementType>({
  children,
  className,
  rowGap = '24',
  columnGap = '24',
  as: As = 'div',
  inline = false,
  direction = 'column',
  wrap = false,
  verticalAlign,
  fill = true,
  horizontalAlign,
  style,
  ...props
}: OverwritableType<IStackProps<T>, T>) => {
  const computedStyle: CSSProperties = {
    '--rGap': tksn.space[rowGap],
    '--cGap': tksn.space[columnGap],
    '--vAlign': verticalAlign,
    '--hAlign': horizontalAlign
  }

  return (
    <As
      style={{ ...computedStyle, ...style }}
      data-stack-inline={inline}
      data-stack-wrap={wrap}
      data-stack-direction={direction}
      data-stack-fill={fill}
      className={clsx(styles.Stack, className)}
      {...props}
    >
      {children}
    </As>
  )
}
