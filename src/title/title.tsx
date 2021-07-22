import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './title.module.css'
import clsx from 'clsx'

type TitleOwnProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
  fluid?: boolean;
}

const defaultElement = 'span'

export type TitleProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<TitleOwnProps, As>;

export const Title = <
As extends ElementType = typeof defaultElement
>({
    children,
    className,
    as,
    lineHeignt = 'small',
    level = '1',
    fluid = true,
    ...props
  }: TitleProps<As>) => {
  const Wrapper: ElementType = as || defaultElement
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <Wrapper
      data-title-line-height={lineHeignt}
      data-title-is-fluid={fluid}
      className={clsx(styles.Title, styles[computedLevel], className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
