import { IconNames } from '../icons/types'
import React, {
  SVGAttributes
} from 'react'
import sprite from '../icons/all.svg'

export interface IIconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  size: 14 | 16 | 24 | 32 | 40 | 48 | 56;
}

export const Icon = ({
  className,
  name,
  size = 16,
  fill,
  ...props
}: IIconProps) => {
  const computedSize = size < 24 ? 16 : 24

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      fill={fill}
      className={className}
      {...props}
    >
      <use href={`${sprite}#${computedSize}/${name}`} />
    </svg>
  )
}
