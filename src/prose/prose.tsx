import React, { ElementType } from 'react'
import styles from './prose.module.css'
import clsx from 'clsx'

type IProseProps<As extends keyof JSX.IntrinsicElements> = {
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Prose = <As extends keyof JSX.IntrinsicElements = 'div'>({
  children,
  className,
  as: Wrapper = 'div',
  ...props
}: IProseProps<As>) => (
  <Wrapper
    className={clsx(styles.Prose, className)}
    {...props}
  >
    {children}
  </Wrapper>
  )
