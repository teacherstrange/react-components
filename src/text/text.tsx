import React, { forwardRef } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Text as TextClass } from './text.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type TextProps = {
  size?: TokensTypes['font']['size'];
  sentiment?: 'positive' | 'informative' | 'danger' | 'warning';
  dimmed?: 5 | 6 | 7;
  weight?: 'thin' | 'bold';
  fluid?: boolean;
}

type PolymorphicText = Polymorphic.ForwardRefComponent<'p', TextProps>;

// eslint-disable-next-line react/display-name
export const Text = forwardRef(({
  children,
  className,
  size,
  sentiment,
  dimmed,
  weight,
  as: Wrapper = 'p',
  fluid = true,
  ...props
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      data-text-size={size}
      data-text-weight={weight}
      data-text-sentiment={sentiment}
      data-text-dimmed={dimmed}
      data-text-is-fluid={fluid}
      className={clsx(TextClass, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicText

Text.displayName = 'Text'
