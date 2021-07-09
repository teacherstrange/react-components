import React, { HTMLAttributes } from 'react'
import styles from './container.module.css'
import clsx from 'clsx'

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
}

export const Container = ({
  children,
  className,
  size = 'full',
  padding = true,
  ...props
}: IContainerProps) => (
  <div
    className={clsx(styles.Container, className)}
    data-container-size={size}
    data-container-padding={padding}
    {...props}
  >
    {children}
  </div>
)
