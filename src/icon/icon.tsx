import { IconNames } from '../icons/types'
import React, {
  SVGAttributes
} from 'react'
import sprite from '../icons/all.svg'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type IconProps = SVGAttributes<SVGElement> & {
  name: IconNames;
  dimension?: TokensTypes['icon']['size'] | 32 | 40 | 48 | 56;
}

export const Icon = ({
  className,
  name,
  dimension = 16,
  fill,
  ...props
}: IconProps) => {
  const computedSize = dimension < 24 ? 16 : 24

  return (
    <svg
      aria-hidden="true"
      width={dimension}
      height={dimension}
      fill={fill}
      className={className}
      {...props}
    >
      <use href={`${sprite}#${computedSize}/${name}`} />
    </svg>
  )
}
