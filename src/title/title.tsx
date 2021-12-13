import React, { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../'
import * as styles from './title.module.css'
import clsx from 'clsx'

export type TitleProps = {
  level?: '1' | '2' | '3' | '4' | '5' | '6' | 'display';
  lineHeight?: 'none' | 'small' | 'large';
  textAlign?: 'start' | 'center' | 'end';
  maxWidth?: string;
  fluid?: boolean;
}

type PolymorphicTitle = Polymorphic.ForwardRefComponent<'span', TitleProps>;

export const Title = forwardRef(({
  children,
  className,
  as: Wrapper = 'span',
  lineHeight = 'small',
  level = '1',
  fluid = true,
  textAlign = 'start',
  maxWidth,
  style,
  ...props
}, forwardedRef) => {
  const computedLevel = level.match(/\d/g) ? `H${level}` : level.charAt(0).toUpperCase() + level.slice(1)

  const dynamicStyle: CSSProperties = {
    '--maxW': maxWidth,
    '--tAlign': textAlign
  }

  return (
    <Wrapper
      ref={forwardedRef}
      data-title-line-height={lineHeight}
      data-title-is-fluid={fluid}
      className={clsx(styles.Title, styles[computedLevel], className)}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicTitle
