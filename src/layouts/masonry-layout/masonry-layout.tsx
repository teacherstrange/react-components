import clsx from 'clsx'
import React, { Children, cloneElement, CSSProperties, ReactElement } from 'react'
import Masonry from 'react-masonry-css'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'
import { MasonryLayout as MasonryLayoutClass, Column } from './masonry-layout.module.css'

export type MasonryLayoutProps = PropsWithClass & {
  gutter?: 0 | TokensTypes['space'];
  columns?: number | {
    default: number,
    extraSmall?: number,
    small?: number,
    medium?: number,
    large?: number
    extraLarge?: number
  };
}

export const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  className,
  children,
  columns = 3,
  gutter = 16,
  style,
  ...props
}) => {
  const dynamicStyle: CSSProperties = {
    '--gutter': gutter && tksn.space[gutter]
  }

  return (
    <Masonry
      role="list"
      className={clsx(MasonryLayoutClass, className)}
      columnClassName={Column}
      breakpointCols={typeof columns === 'number'
        ? columns
        : {
            default: columns.default,
            480: columns.extraSmall || columns.default,
            768: columns.small || columns.default,
            960: columns.medium || columns.default,
            1280: columns.large || columns.default,
            1600: columns.extraLarge || columns.default
          }}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {Children.map(children, (child: ReactElement) => cloneElement(
        child,
        {
          role: 'listitem'
        }
      ))}
    </Masonry>
  )
}
