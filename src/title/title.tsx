import React, { ElementType } from 'react'
import styles from './title.module.css'
import clsx from 'clsx'

type ITitleProps<As extends keyof JSX.IntrinsicElements> = {
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Title = <As extends keyof JSX.IntrinsicElements = 'span'>({
  children,
  className,
  as: Wrapper = 'span',
  lineHeignt = 'small',
  level = '1',
  ...props
}: ITitleProps<As>) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <Wrapper
      data-title-line-height={lineHeignt}
      className={clsx(styles.Title, styles[computedLevel], className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
