import React, { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react'
import { IconNames } from '../icons/types'
import { Stack, Text, Icon } from '../'
import { Range as RangeClass, Input, Value } from './range.module.css'
import clsx from 'clsx'

export type RangeProps = InputHTMLAttributes<HTMLInputElement> & {
  min?: number;
  max?: number;
  step?: number;
  onInput?(value: number): void;
  defaultValue?: number;
  showValues?: boolean;
  iconMin?: IconNames;
  iconMax?: IconNames;
  dimension?: 'small' | 'regular';
}

export const Range = forwardRef<HTMLInputElement, RangeProps>(({
  min = 0,
  max = 100,
  step,
  onInput,
  className,
  defaultValue = 0,
  dimension = 'regular',
  showValues,
  iconMin,
  iconMax,
  ...props
}, forwardedRef) => {
  const [value, setValue] = useState<number>(defaultValue)
  const isSmall = dimension === 'small'
  const handleInput = useCallback(
    ({ currentTarget }) => {
      onInput && onInput(currentTarget.valueAsNumber)
      setValue(currentTarget.valueAsNumber)
    },
    [onInput]
  )

  return (
    <Stack
      direction="row"
      verticalAlign="center"
      columnGap={8}
      className={clsx(RangeClass, className)}
      data-range-dimension={dimension}
    >
      {showValues && <Text as="span" size={isSmall ? 14 : 16} weight="bold" textAlign="end" className={Value}>{value}</Text>}
      {(iconMin && !showValues) && <Icon name={iconMin} dimension={isSmall ? 16 : 24} />}

      <input
        ref={forwardedRef}
        className={Input}
        type="range"
        min={min}
        max={max}
        defaultValue={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        step={step}
        onInput={handleInput}
        {...props}
      />

      {showValues && <Text as="span" size={isSmall ? 14 : 16} weight="bold" className={Value}>{max}</Text>}
      {(iconMax && !showValues) && <Icon name={iconMax} dimension={isSmall ? 16 : 24} />}
    </Stack>
  )
})

Range.displayName = 'Range'
