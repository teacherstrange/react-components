import { IconNames } from '../icons/types'
import React, {
  forwardRef,
  SVGAttributes
} from 'react'
import sprite from '../icons/all.svg'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type IconProps = SVGAttributes<SVGElement | SVGSVGElement> & {
  name: IconNames;
  dimension?: TokensTypes['icon']['size'] | 32 | 40 | 48 | 56;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(({
  className,
  name,
  dimension = 16,
  fill,
  ...props
}: IconProps, forwardedRef) => {
  const computedSize = dimension < 24 ? 16 : 24

  return (
    <svg
      aria-hidden="true"
      width={dimension}
      height={dimension}
      fill={fill}
      className={className}
      ref={forwardedRef}
      {...props}
    >
      <use href={`${sprite}#${computedSize}/${name}`} />
    </svg>
  )
})

Icon.displayName = 'Icon'
