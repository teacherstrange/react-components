import React, { ElementType } from 'react'
import styles from './text.module.css'
import clsx from 'clsx'

type Props<As extends ElementType> = {
  as?: As
  size?: 14 | 16 | 18 | 22 | 28;
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
}

type ITextProps<As extends ElementType> = Props<As> &
  Omit<React.ComponentPropsWithRef<As>, keyof Props<As>>

export const Text = <As extends ElementType = 'p'>({
  children,
  className,
  size,
  color,
  weight,
  as,
  ...props
}: ITextProps<As>) => {
  const Wrapper = as || 'span'
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
