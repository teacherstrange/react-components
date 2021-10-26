import React, { forwardRef, useCallback } from 'react'
import { Text } from '../'
import clsx from 'clsx'

import { LinearProgress as LinearProgressClass, Progress, Percentage } from './linear-progress.module.css'

export type LinearProgressProps = PropsWithClass & {
  value?: number;
  max?: number;
  dimension?: 'regular' | 'big';
  showProgress?: boolean;
}

export const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(({
  className,
  value,
  max = 100,
  dimension = 'regular',
  showProgress,
  ...props
}, forwardedRef) => {
  const getPercentage = useCallback(
    () => value ? (100 * value) / max : 0,
    [max, value]
  )

  return (
    <div
      ref={forwardedRef}
      className={clsx(LinearProgressClass, className)}
    >
      <progress
        role="progressbar"
        className={Progress}
        data-progress-dimension={dimension}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuemax={max}
        value={value}
        max={max}
        {...props}
      />
      {(value && showProgress) && (
      <Text
        as="span"
        className={Percentage}
        style={{ '--offset': `${Math.round(getPercentage())}%` }}
        weight="bold"
        size={dimension === 'regular' ? 16 : 18}
      >
        {Math.round(getPercentage())}
      </Text>
      )}
    </div>
  )
})

LinearProgress.displayName = 'LinearProgress'
