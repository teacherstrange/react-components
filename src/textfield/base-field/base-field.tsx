import React, { forwardRef, ElementType, ForwardedRef } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'
import { BaseField as BaseFieldClass } from './base-field.module.css'
import clsx from 'clsx'

type BaseFieldOwnProps = {
  invalid?: boolean;
  htmlSize?: number;
}

const defaultElement = 'input'

export type BaseFieldProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<BaseFieldOwnProps, As>;

export const BaseField: PolymorphicForwardRefExoticComponent<
  BaseFieldOwnProps,
  typeof defaultElement
> = forwardRef(<
  As extends ElementType = typeof defaultElement
>({
    as,
    invalid,
    className,
    htmlSize,
    ...props
  }:
  PolymorphicPropsWithoutRef<BaseFieldOwnProps, As>,
    ref: ForwardedRef<Element>
  ) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      ref={ref}
      size={htmlSize}
      data-basefield-invalid={invalid}
      className={clsx(BaseFieldClass, className)}
      {...props}
    />
  )
})

BaseField.displayName = 'BaseField'
