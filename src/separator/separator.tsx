import React, { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Separator as SeparatorClass } from './separator.module.css'

export type SeparatorProps = HTMLAttributes<HTMLHRElement>

export const Separator = forwardRef<HTMLHRElement, SeparatorProps>(({
  className,
  ...props
}, forwardedRef) => {
  return (
    <hr
      ref={forwardedRef}
      className={clsx(SeparatorClass, className)}
      {...props}
    />
  )
})
