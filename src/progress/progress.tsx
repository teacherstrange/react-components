import React, { forwardRef, ProgressHTMLAttributes } from 'react'
import clsx from 'clsx'

import { Progress as ProgressClass } from './progress.module.css'

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  value?: number;
  max?: number;
  dimension?: 'regular' | 'big';
}

export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(({
  className,
  value,
  max = 100,
  dimension,
  ...props
}, forwardedRef) => {
  return (
    <progress
      role="progressbar"
      ref={forwardedRef}
      className={clsx(ProgressClass, className)}
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

Progress.displayName = 'Progress'
