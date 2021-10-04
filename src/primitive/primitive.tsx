import clsx from 'clsx'
import React, { forwardRef } from 'react'
import type * as Polymorphic from '../polymorphic'

export type PrimitiveProps = PropsWithClass

type PolymorphicPrimitive = Polymorphic.ForwardRefComponent<'button', PrimitiveProps>;

// eslint-disable-next-line react/display-name
export const Primitive = forwardRef((
  {
    className,
    children,
    as: Component = 'button',
    ...props
  }, forwardedRef) => {
  return (
    <Component
      className={clsx(className)}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </Component>
  )
}) as PolymorphicPrimitive

Primitive.displayName = 'Primitive'
