import React, { HTMLAttributes, ComponentType } from 'react'
import styles from './title.module.css'
import clsx from 'clsx'

export interface ITitleProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ComponentType | keyof JSX.IntrinsicElements;
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
}

export const Title = ({
  children,
  className,
  tag: Tag = 'span',
  lineHeignt = 'small',
  level = '1',
  ...props
}: ITitleProps) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <Tag
      data-title-line-height={lineHeignt}
      className={clsx(styles.Title, styles[computedLevel], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
