import React from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type SkeletonBlockProps = SkeletonProps & {
  borderRadius?: TokensTypes['radius']
}

export const SkeletonBlock = ({
  className,
  borderRadius = 4,
  ...props
}: SkeletonBlockProps) => {
  return (
    <Skeleton
      className={className}
      borderRadius={borderRadius}
      baseColor="var(--dimmed-1)"
      highlightColor="var(--dimmed-0)"
      {...props}
    />
  )
}
