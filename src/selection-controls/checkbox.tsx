import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { Checkbox as CheckboxClass } from './selection-controls.module.css'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  dimension?: 'regular' | 'small',
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  disabled,
  dimension = 'regular',
  onChange,
  ...props
}: CheckboxProps, forwardedRef) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-dimension={dimension}
      onChange={onChange}
      className={clsx(CheckboxClass, className)}
      ref={forwardedRef}
      {...props}
    />
  )
})

Checkbox.displayName = 'Checkbox'
