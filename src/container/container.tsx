import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './container.module.css'
import clsx from 'clsx'

type ContainerOwnProps = {
  size?: 'full' | 'medium' | 'large';
  padding?: boolean;
}

const defaultElement = 'div'

export type ContainerProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<ContainerOwnProps, As>;

export const Container = <
  As extends ElementType = typeof defaultElement
>({
    children,
    className,
    size = 'full',
    padding = true,
    as,
    ...props
  }: ContainerProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      className={clsx(styles.Container, className)}
      data-container-size={size}
      data-container-padding={padding}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
