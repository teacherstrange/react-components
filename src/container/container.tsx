import React, { HTMLAttributes, ComponentType } from 'react'
import styles from './container.module.css'
import clsx from 'clsx'

export interface IContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
  tag?: ComponentType | keyof JSX.IntrinsicElements;
}

export const Container = ({
  children,
  className,
  size = 'full',
  padding = true,
  tag: Tag = 'div',
  ...props
}: IContainerProps) => (
  <Tag
    className={clsx(styles.Container, className)}
    data-container-size={size}
    data-container-padding={padding}
    {...props}
  >
    {children}
  </Tag>
)
