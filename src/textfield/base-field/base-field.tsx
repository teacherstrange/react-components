import React, { forwardRef, InputHTMLAttributes } from 'react'
import { Polymorphic } from '../../'
import { BaseField as BaseFieldClass } from './base-field.module.css'
import clsx from 'clsx'

export type BaseFieldProps = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
}

type PolymorphicBaseField = Polymorphic.ForwardRefComponent<'input', BaseFieldProps>;

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
