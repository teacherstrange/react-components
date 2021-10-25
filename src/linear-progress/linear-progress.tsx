import React, { forwardRef, ProgressHTMLAttributes } from 'react'
import clsx from 'clsx'

import { LinearProgress as LinearProgressClass } from './linear-progress.module.css'

export type LinearProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  value?: number;
  max?: number;
  dimension?: 'regular' | 'big';
}

export const LinearProgress = forwardRef<HTMLProgressElement, LinearProgressProps>(({
  className,
  value,
  max = 100,
  dimension = 'regular',
  ...props
}, forwardedRef) => {
  return (
    <progress
      role="progressbar"
      ref={forwardedRef}
      className={clsx(LinearProgressClass, className)}
      data-progress-dimension={dimension}
      aria-valuemin={0}
      aria-valuenow={value}
      aria-valuemax={max}
      value={value}
      max={max}
      {...props}
    />
  )
})

LinearProgress.displayName = 'LinearProgress'
