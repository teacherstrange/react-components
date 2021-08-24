import React, { forwardRef, ElementType, ForwardedRef, InputHTMLAttributes } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'
import { BaseField as BaseFieldClass } from './base-field.module.css'
import clsx from 'clsx'

type BaseFieldOwnProps = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
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
    ...props
  }:
  PolymorphicPropsWithoutRef<BaseFieldOwnProps, As>,
    ref: ForwardedRef<Element>
  ) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      ref={ref}
      data-basefield-invalid={invalid}
      className={clsx(BaseFieldClass, className)}
      {...props}
    />
  )
})

BaseField.displayName = 'BaseField'
