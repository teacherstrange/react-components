import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { useUIDSeed } from 'react-uid'
import { Text, TextProps, Stack, Icon } from '../'

import { StarMeter as StarMeterClass, Gradient, Icon as IconClass } from './star-meter.module.css'

export type StarMeterProps = PropsWithClass & {
  value: number;
  starCount?: number;
  label?: ReactNode;
  dimension?: 'small' | 'regular' | 'big';
}

type PolymorphicStarMeter = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Stack>,
  Polymorphic.OwnProps<typeof Stack> & StarMeterProps
>;

// eslint-disable-next-line react/display-name
export const StarMeter = forwardRef(({
  className,
  value = 0,
  starCount = 5,
  label,
  dimension = 'regular',
  ...props
}, forwardedRef) => {
  const uid = useUIDSeed()

  const labelSize = {
    small: 14,
    regular: 16,
    big: 18
  }

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

  const roundValue = (value: number) => {
    const integer = parseInt(String(value), 10)
    const fraction = value - integer

    if (fraction >= 0.75) {
      return Math.ceil(value)
    }

    if (fraction < 0.25) {
      return Math.floor(value)
    }

    if (fraction >= 0.25 && fraction < 0.75) {
      return integer + 0.5
    }

    return 0
  }

  const starType = (maxStars: number, value: number) => {
    return new Array(maxStars).fill(0).map((_, index) => {
      const starIndex = index + 1
      let fillType = 'var(--starDimmedColor)'

      if (value >= starIndex) {
        fillType = 'var(--starColor)'
      }

      if (value < starIndex && value > starIndex - 1) {
        fillType = 'url(#HalfStar)'
      }

      return <Icon name="star" className={IconClass} dimension={16} fill={fillType} key={starIndex} />
    })
  }

  return (
    <Stack
      inline
      direction="row"
      verticalAlign="center"
      columnGap={8}
      className={clsx(StarMeterClass, className)}
      role="meter"
      aria-valuenow={clamp(value, 0, starCount)}
      aria-valuemin={0}
      aria-valuemax={starCount}
      aria-labelledby={uid('star-meter')}
      data-star-meter-dimension={dimension}
      ref={forwardedRef}
      {...props}
    >
      <svg aria-hidden="true" className={Gradient} width="100" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="HalfStar">
            <stop offset="0" style={{ stopColor: 'var(--starColor)' }} />
            <stop offset="50%" style={{ stopColor: 'var(--starColor)' }} />
            <stop offset="50.1%" style={{ stopColor: 'var(--starDimmedColor)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--starDimmedColor)' }} />
          </linearGradient>
        </defs>
      </svg>
      <Stack direction="row" columnGap={2}>
        {starType(starCount, roundValue(value))}
      </Stack>
      <Text dimmed={6} id={uid('star-meter')} size={labelSize[dimension] as TextProps['size']} weight="bold">
        {label || value.toString()}
      </Text>
    </Stack>
  )
}) as PolymorphicStarMeter

StarMeter.displayName = 'StarMeter'
