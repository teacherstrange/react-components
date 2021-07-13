import React, { HTMLAttributes, ComponentType } from 'react'
import styles from './text.module.css'
import clsx from 'clsx'

export interface ITextProps extends HTMLAttributes<HTMLOrSVGElement> {
  size?: 14 | 16 | 18 | 22 | 28;
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
  tag?: ComponentType | keyof JSX.IntrinsicElements;
}

export const Text = ({
  children,
  className,
  size,
  color,
  weight,
  tag: Tag = 'p',
  ...props
}: ITextProps) => (
  <Tag
    data-text-size={size}
    data-text-weight={weight}
    data-text-color={color}
    className={clsx(styles.Text, className)}
    {...props}
  >
    {children}
  </Tag>
)
