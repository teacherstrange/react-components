import React, { ElementType } from 'react'
import styles from './title.module.css'
import clsx from 'clsx'

export interface ITitleProps<T> {
  as: T | keyof JSX.IntrinsicElements;
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
}

export const Title = <T extends ElementType>({
  children,
  className,
  as: As,
  lineHeignt = 'small',
  level = '1',
  ...props
}: OverwritableType<ITitleProps<T>, T>) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <As
      data-title-line-height={lineHeignt}
      className={clsx(styles.Title, styles[computedLevel], className)}
      {...props}
    >
      {children}
    </As>
  )
}
