import { CSSProperties, forwardRef, ReactNode } from 'react'
import { Polymorphic } from '../'
import clsx from 'clsx'

import { ClampText as ClampTextClass } from './clamp-text.module.css'

export type ClampTextProps = {
  children: ReactNode;
  rows?: number;
}

type PolymorphicClampText = Polymorphic.ForwardRefComponent<'span', ClampTextProps>;

export const ClampText = forwardRef(({
  className,
  children,
  rows = 1,
  style,
  as: Wrapper = 'span',
  ...otherProps
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--r': rows
  }

  return (
    <Wrapper
      ref={forwardedRef}
      style={{ ...dynamicStyle, ...style }}
      className={clsx(ClampTextClass, className)}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicClampText
