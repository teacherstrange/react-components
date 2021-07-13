import React, { HTMLAttributes, ComponentType } from 'react'
import styles from './prose.module.css'
import clsx from 'clsx'

export interface IProseProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ComponentType | keyof JSX.IntrinsicElements;
}

export const Prose = ({
  children,
  className,
  tag: Tag = 'div',
  ...props
}: IProseProps) => (
  <Tag
    className={clsx(styles.Prose, className)}
    {...props}
  >
    {children}
  </Tag>
)
