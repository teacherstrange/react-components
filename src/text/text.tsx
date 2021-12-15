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
  maxWidth?: string;
  textAlign?: 'start' | 'center' | 'end';
  responsive?: boolean;
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
  responsive = true,
  style,
  ...otherProps
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
      data-text-responsive={responsive}
      className={clsx(TextClass, className)}
      style={{ ...dynamicStyle, ...style }}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicText
