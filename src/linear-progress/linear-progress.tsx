import { forwardRef, ProgressHTMLAttributes, useCallback } from 'react'
import { Text } from '../'
import clsx from 'clsx'

import { LinearProgress as LinearProgressClass, Progress, Percentage } from './linear-progress.module.css'

export type LinearProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & {
  value?: number;
  max?: number;
  dimension?: 'regular' | 'big';
  showProgress?: boolean;
}

export const LinearProgress = forwardRef<HTMLProgressElement, LinearProgressProps>(({
  className,
  value,
  max = 100,
  dimension = 'regular',
  showProgress,
  ...otherProps
}, forwardedRef) => {
  const getPercentage = useCallback(
    () => value ? Math.round((100 * value) / max) : 0,
    [max, value]
  )

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

  return (
    <div
      className={clsx(LinearProgressClass, className)}
    >
      <progress
        role="progressbar"
        ref={forwardedRef}
        className={Progress}
        data-progress-dimension={dimension}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuemax={max}
        value={value}
        max={max}
        {...otherProps}
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
