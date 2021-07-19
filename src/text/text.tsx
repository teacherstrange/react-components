import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './text.module.css'
import clsx from 'clsx'

type TextOwnProps = {
  size?: 14 | 16 | 18 | 22 | 28;
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
}

const defaultElement = 'p'

export type TextProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<TextOwnProps, As>;

export const Text = <
As extends ElementType = typeof defaultElement
> ({
    children,
    className,
    size,
    color,
    weight,
    as,
    ...props
  }: TextProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  return (
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
}
