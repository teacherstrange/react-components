import React, { ElementType } from 'react'
import styles from './prose.module.css'
import clsx from 'clsx'

export interface IProseProps<T> {
  as?: T | keyof JSX.IntrinsicElements;
}

export const Prose = <T extends ElementType>({
  children,
  className,
  as: As = 'div',
  ...props
}: OverwritableType<IProseProps<T>, T>) => (
  <As
    className={clsx(styles.Prose, className)}
    {...props}
  >
    {children}
  </As>
  )
