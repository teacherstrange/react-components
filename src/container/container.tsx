import React, { ElementType } from 'react'
import styles from './container.module.css'
import clsx from 'clsx'

export interface IContainerProps<T> {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
  as?: T | keyof JSX.IntrinsicElements;
}

export const Container = <T extends ElementType>({
  children,
  className,
  size = 'full',
  padding = true,
  as: As = 'div',
  ...props
}: OverwritableType<IContainerProps<T>, T>) => (
  <As
    className={clsx(styles.Container, className)}
    data-container-size={size}
    data-container-padding={padding}
    {...props}
  >
    {children}
  </As>
  )
