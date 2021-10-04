import React, { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../'
import * as styles from './title.module.css'
import clsx from 'clsx'

export type TitleProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeignt?: 'none' | 'small' | 'large';
  maxWidth?: string;
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
  maxWidth,
  style,
  ...props
}, forwardedRef) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  const dynamicStyle: CSSProperties = {
    '--maxW': maxWidth
  }

  return (
    <Wrapper
      ref={forwardedRef}
      data-title-line-height={lineHeignt}
      data-title-is-fluid={fluid}
      className={clsx(styles.Title, styles[computedLevel], className)}
      style={{ ...dynamicStyle, style }}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicTitle

Title.displayName = 'Title'
