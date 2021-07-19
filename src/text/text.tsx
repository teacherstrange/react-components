import React, { ElementType } from 'react'
import styles from './text.module.css'
import clsx from 'clsx'

type ITextProps<As extends keyof JSX.IntrinsicElements> = {
  size?: 14 | 16 | 18 | 22 | 28;
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Text = <As extends keyof JSX.IntrinsicElements = 'p'>({
  children,
  className,
  size,
  color,
  weight,
  as: Wrapper = 'p',
  ...props
}: ITextProps<As>) => (
  <Wrapper
    data-text-size={size}
    data-text-weight={weight}
    data-text-color={color}
    className={clsx(styles.Text, className)}
    {...props}
  >
    {children}
  </Wrapper>
  )
