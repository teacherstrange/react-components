import { forwardRef, InputHTMLAttributes } from 'react'
import { Polymorphic } from '../../'
import { BaseField as BaseFieldClass } from './base-field.module.css'
import clsx from 'clsx'

/**
 * @internal
 */
export type PrimitiveInputType = HTMLInputElement | HTMLTextAreaElement

/**
 * @internal
 */
export type BaseFieldProps = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
}

/**
 * @internal
 */
type PolymorphicBaseField = Polymorphic.ForwardRefComponent<'input', BaseFieldProps>;

export const BaseField = forwardRef(({
  as: Wrapper = 'input',
  invalid,
  className,
  ...otherProps
}, forwardedRef) => {
  return (
    <Wrapper
      ref={forwardedRef}
      data-basefield-invalid={invalid}
      className={clsx(BaseFieldClass, className)}
      {...otherProps}
    />
  )
}) as PolymorphicBaseField

BaseField.displayName = 'BaseField'
