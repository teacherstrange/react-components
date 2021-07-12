import React, { HTMLAttributes } from 'react'
import styles from './container.module.css'
import clsx from 'clsx'

export interface IContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export const Container = ({
  children,
  className,
  size = 'full',
  padding = true,
  as: Tag = 'div',
  ...props
}: IContainerProps) => {
  return (
    <Tag
      className={clsx(styles.Container, className)}
      data-container-size={size}
      data-container-padding={padding}
      {...props}
    >
      {children}
    </Tag>
  )
}
