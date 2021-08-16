import React, { forwardRef, HTMLAttributes } from 'react'

export type CheckboxProps = {
  checked: boolean;
} & HTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef(({
  className,
  ...props
}: CheckboxProps, ref: any) => {
  return (
    <input ref={ref} type="checkbox" {...props} />
  )
})

Checkbox.displayName = 'Checkbox'
