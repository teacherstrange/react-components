import React, { forwardRef } from 'react'
import type * as Polymorphic from '../polymorphic'
import { Container as ContainerClass } from './container.module.css'
import clsx from 'clsx'

export type ContainerProps = {
  dimension?: 'full' | 'medium' | 'large';
  padding?: boolean;
}

type PolymorphicContainer = Polymorphic.ForwardRefComponent<'div', ContainerProps>;

// eslint-disable-next-line react/display-name
export const Container = forwardRef(({
  children,
  className,
  dimension = 'full',
  padding = true,
  as: Wrapper = 'div',
  ...props
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(ContainerClass, className)}
      data-container-dimension={dimension}
      data-container-padding={padding}
      {...props}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicContainer

Container.displayName = 'Container'
