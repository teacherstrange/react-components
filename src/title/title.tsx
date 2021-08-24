import React, { forwardRef } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import * as styles from './title.module.css'
import clsx from 'clsx'

export type TitleProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
  fluid?: boolean;
}

type PolymorphicTitle = Polymorphic.ForwardRefComponent<'span', TitleProps>;

// eslint-disable-next-line react/display-name
export const Title = forwardRef(({
  children,
  className,
  as: Wrapper = 'span',
  lineHeignt = 'small',
  level = '1',
  fluid = true,
  ...props
}, forwardedRef) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  return (
    <Wrapper
      ref={forwardedRef}
      data-title-line-height={lineHeignt}
      data-title-is-fluid={fluid}
      className={clsx(styles.Title, styles[computedLevel], className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicTitle

Title.displayName = 'Title'
