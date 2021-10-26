import React, { CSSProperties, forwardRef, useCallback } from 'react'
import clsx from 'clsx'
import { CircularProgress as CircularProgressClass } from './circular-progress.module.css'

export type CircularProgressProps = PropsWithClass & {
  value: number;
  max?: number;
  dimension?: 'small' | 'regular' | 'big';
  showProgress?: boolean;
}

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(({
  className,
  value,
  max = 100,
  dimension = 'regular',
  showProgress,
  style,
  ...props
}, forwardedRef) => {
  const getPercentage = useCallback(
    () => value ? (100 * value) / max : 0,
    [max, value]
  )

  const dynamicStyle: CSSProperties = {
    '--progress': `${getPercentage()}%`
  }

  return (
    <div
      ref={forwardedRef}
      role="progressbar"
      aria-valuenow={Math.round(getPercentage())}
      aria-valuemin={0}
      aria-valuemax={max}
      className={clsx(CircularProgressClass, className)}
      data-circular-progress-dimension={dimension}
      data-circular-progress-show-progress={showProgress && !!value}
      style={{ ...dynamicStyle, style }}
      {...props}
    />
  )
})

CircularProgress.displayName = 'CircularProgress'
