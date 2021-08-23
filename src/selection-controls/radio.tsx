import clsx from 'clsx'
import React, { ChangeEvent, forwardRef, HTMLAttributes } from 'react'
import { Radio as RadioClass } from './selection-controls.module.css'

export type RadioProps = {
  disabled?: boolean;
  size?: 'regular' | 'small',
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  className,
  disabled,
  size = 'regular',
  onChange,
  ...props
}: RadioProps, ref: any) => {
  return (
    <input
      type="radio"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-size={size}
      onChange={onChange}
      className={clsx(RadioClass, className)}
      ref={ref}
      {...props}
    />
  )
})

Radio.displayName = 'Radio'
