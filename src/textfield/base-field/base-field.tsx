import React, { forwardRef, InputHTMLAttributes } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { BaseField as BaseFieldClass } from './base-field.module.css'
import clsx from 'clsx'

export type BaseFieldProps = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
}

type PolymorphicBaseField = Polymorphic.ForwardRefComponent<'input', BaseFieldProps>;

// eslint-disable-next-line react/display-name
export const BaseField = forwardRef(({
  as: Wrapper = 'input',
  invalid,
  className,
  ...props
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      data-basefield-invalid={invalid}
      className={clsx(BaseFieldClass, className)}
      {...props}
    />
  )
}) as PolymorphicBaseField

BaseField.displayName = 'BaseField'
