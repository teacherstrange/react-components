import clsx from 'clsx'
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import { Radio as RadioClass } from './selection-controls.module.css'

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  dimension?: 'regular' | 'small',
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  className,
  disabled,
  dimension = 'regular',
  onChange,
  ...otherProps
}, forwardedRef) => {
  return (
    <input
      type="radio"
      disabled={disabled}
      aria-disabled={disabled}
      data-control-dimension={dimension}
      onChange={onChange}
      className={clsx(RadioClass, className)}
      ref={forwardedRef}
      {...otherProps}
    />
  )
})

Radio.displayName = 'Radio'
