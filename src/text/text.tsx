import React, { ElementType } from 'react'
import styles from './text.module.css'
import clsx from 'clsx'

export interface ITextProps<T> {
  size?: 14 | 16 | 18 | 22 | 28;
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
  as?: T | keyof JSX.IntrinsicElements;
}

export const Text = <T extends ElementType>({
  children,
  className,
  size,
  color,
  weight,
  as: As = 'p',
  ...props
}: OverwritableType<ITextProps<T>, T>) => (
  <As
    data-text-size={size}
    data-text-weight={weight}
    data-text-color={color}
    className={clsx(styles.Text, className)}
    {...props}
  >
    {children}
  </As>
  )
