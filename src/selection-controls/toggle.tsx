import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, HTMLAttributes } from 'react'
import { Toggle as ToggleClass } from './selection-controls.module.css'

export type ToggleProps = {
  disabled?: boolean;
  size?: 'regular' | 'small',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(({
  className,
  disabled,
  size = 'regular',
  onChange,
  ...props
}: ToggleProps, ref: any) => {
  return (
    <input
      type="checkbox"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-size={size}
      onChange={onChange}
      className={clsx(ToggleClass, className)}
      ref={ref}
      {...props}
    />
  )
})

Toggle.displayName = 'Toggle'
