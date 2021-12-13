import React, { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../'
import { Text as TextClass } from './text.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type TextProps = {
  size?: TokensTypes['font']['size'];
  sentiment?: 'positive' | 'informative' | 'danger' | 'warning';
  dimmed?: 5 | 6 | 7;
  weight?: 'thin' | 'bold';
  fluid?: boolean;
  maxWidth?: string;
  textAlign?: 'start' | 'center' | 'end';
}

type PolymorphicText = Polymorphic.ForwardRefComponent<'p', TextProps>;

export const Text = forwardRef(({
  children,
  className,
  size,
  sentiment,
  dimmed,
  weight,
  maxWidth,
  textAlign = 'start',
  as: Wrapper = 'p',
  fluid = true,
  style,
  ...props
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--maxW': maxWidth,
    '--tAlign': textAlign
  }

  return (
    <Wrapper
      ref={forwardedRef}
      data-text-size={size}
      data-text-weight={weight}
      data-text-sentiment={sentiment}
      data-text-dimmed={dimmed}
      data-text-is-fluid={fluid}
      className={clsx(TextClass, className)}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicText
