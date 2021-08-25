import React, { CSSProperties, forwardRef, ReactNode } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'

import { ClampText as ClampTextClass } from './clamp-text.module.css'

export type ClampTextProps = PropsWithClass & {
  children: ReactNode;
  rows?: number;
}

type PolymorphicClampText = Polymorphic.ForwardRefComponent<'span', ClampTextProps>;

// eslint-disable-next-line react/display-name
export const ClampText = forwardRef(({
  className,
  children,
  rows = 1,
  style,
  as: Wrapper = 'span',
  ...props
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--r': rows
  }

  return (
    <Wrapper
      ref={forwardedRef}
      style={{ ...dynamicStyle, ...style }}
      className={clsx(ClampTextClass, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicClampText

ClampText.displayName = 'ClampText'
