import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { Checkbox as CheckboxClass } from './selection-controls.module.css'

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  indeterminate?: boolean;
  dimension?: 'regular' | 'small',
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  disabled,
  dimension = 'regular',
  onChange,
  indeterminate,
  ...otherProps
}, forwardedRef) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-dimension={dimension}
      data-control-indeterminate={indeterminate}
      onChange={onChange}
      className={clsx(CheckboxClass, className)}
      ref={forwardedRef}
      {...otherProps}
    />
  )
})

Checkbox.displayName = 'Checkbox'
