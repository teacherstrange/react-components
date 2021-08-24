import React, { forwardRef } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Prose as ProseClass } from './prose.module.css'
import clsx from 'clsx'

export type ProseProps = {}

type PolymorphicProse = Polymorphic.ForwardRefComponent<'div', ProseProps>;

// eslint-disable-next-line react/display-name
export const Prose = forwardRef(({
  children,
  className,
  as: Wrapper = 'div',
  ...props
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(ProseClass, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicProse

Prose.displayName = 'Prose'
