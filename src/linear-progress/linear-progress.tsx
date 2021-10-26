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
    () => value ? Math.round((100 * value) / max) : 0,
    [max, value]
  )

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

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
      {(showProgress) && (
        <Text
          as="span"
          className={Percentage}
          style={{
            '--offset': `${getPercentage()}%`,
            '--translation': value !== 0 ? '-100%' : '-50%'
          }}
          weight="bold"
          size={dimension === 'regular' ? 16 : 18}
        >
          {value && clamp(getPercentage(), 0, 100)}
        </Text>
      )}
    </div>
  )
})

LinearProgress.displayName = 'LinearProgress'
