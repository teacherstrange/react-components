import React from 'react'
import Skeleton, { SkeletonTheme, SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

export type SkeletonBlockProps = SkeletonProps & {
  borderRadius: TokensTypes['radius']
}

export const SkeletonBlock = ({
  className,
  borderRadius = 4,
  ...props
}: SkeletonBlockProps) => {
  return (
    <SkeletonTheme baseColor="var(--dimmed-1)" highlightColor="var(--dimmed-0)">
      <Skeleton
        className={className}
        borderRadius={borderRadius}
        {...props}
      />
    </SkeletonTheme>
  )
}
