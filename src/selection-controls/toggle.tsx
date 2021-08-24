import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { Toggle as ToggleClass } from './selection-controls.module.css'

export type ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  dimension?: 'regular' | 'small',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({
  className,
  disabled,
  dimension = 'regular',
  onChange,
  ...props
}: ToggleProps, ref: any) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-dimension={dimension}
      onChange={onChange}
      className={clsx(ToggleClass, className)}
      ref={ref}
      {...props}
    />
  )
})

Toggle.displayName = 'Toggle'
