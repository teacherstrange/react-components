import React, { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Separator as SeparatorClass } from './separator.module.css'

export const Separator = forwardRef<HTMLHRElement>(({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>, forwardedRef) => {
  return (
    <hr
      ref={forwardedRef}
      className={clsx(SeparatorClass, className)}
      {...props}
    />
  )
})

Separator.displayName = 'Separator'
