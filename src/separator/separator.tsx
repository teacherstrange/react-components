import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Separator as SeparatorClass } from './separator.module.css'

export const Separator = ({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr className={clsx(SeparatorClass, className)} {...props} />
  )
}
