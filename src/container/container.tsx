import { forwardRef } from 'react'
import { Polymorphic } from '../'
import { Container as ContainerClass } from './container.module.css'
import clsx from 'clsx'

export type ContainerProps = {
  /**
   * Set the horizontal max-width of the container.
   */
  dimension?: 'full' | 'medium' | 'large';
  /**
   * Set or remove the container's predefined horizontal padding.
   */
  padding?: boolean;
}

type PolymorphicContainer = Polymorphic.ForwardRefComponent<'div', ContainerProps>;

export const Container = forwardRef(({
  children,
  className,
  dimension = 'full',
  padding = true,
  as: Wrapper = 'div',
  ...otherProps
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(ContainerClass, className)}
      data-container-dimension={dimension}
      data-container-padding={padding}
      {...otherProps}
    >
      {children}
    </Wrapper>
  )
}) as PolymorphicContainer
