import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, HTMLAttributes } from 'react'
import { Checkbox as CheckboxClass } from './selection-controls.module.css'

export type CheckboxProps = {
  disabled?: boolean;
  size?: 'regular' | 'small',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  disabled,
  size = 'regular',
  onChange,
  ...props
}: CheckboxProps, ref: any) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-size={size}
      onChange={onChange}
      className={clsx(CheckboxClass, className)}
      ref={ref}
      {...props}
    />
  )
})

Checkbox.displayName = 'Checkbox'
