import React, { ElementType } from 'react'
import styles from './container.module.css'
import clsx from 'clsx'

type IContainerProps<As extends keyof JSX.IntrinsicElements> = {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Container = <As extends keyof JSX.IntrinsicElements = 'div'>({
  children,
  className,
  size = 'full',
  padding = true,
  as: Wrapper = 'div',
  ...props
}: IContainerProps<As>) => (
  <Wrapper
    className={clsx(styles.Container, className)}
    data-container-size={size}
    data-container-padding={padding}
    {...props}
  >
    {children}
  </Wrapper>
  )
