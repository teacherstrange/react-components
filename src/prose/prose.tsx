import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './prose.module.css'
import clsx from 'clsx'

type ProseOwnProps = {}

const defaultElement = 'div'

export type ProseProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<ProseOwnProps, As>;

export const Prose = <
  As extends ElementType = typeof defaultElement
>({
    children,
    className,
    as,
    ...props
  }: ProseProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      className={clsx(styles.Prose, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
