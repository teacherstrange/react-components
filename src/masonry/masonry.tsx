import clsx from 'clsx'
import React, { Children, cloneElement, CSSProperties, ReactElement } from 'react'
import MasonryLayout from 'react-masonry-css'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'
import { Masonry as MasonryClass, Column } from './masonry.module.css'

export type MasonryProps = PropsWithClass & {
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

export const Masonry: React.FC<MasonryProps> = ({
  className,
  children,
  columns = 3,
  gutter = 16,
  style,
  ...props
}) => {
  const breakpoints = {
    extraSmall: 480,
    small: 768,
    medium: 960,
    large: 1280,
    extraLarge: 1600
  }

  const dynamicStyle: CSSProperties = {
    '--gutter': gutter && tksn.space[gutter]
  }

  const computedColumns = typeof columns === 'object' && Object.keys(columns).reduce((prev, current) => current !== 'default' && ({
    ...prev,
    default: columns.default,
    [breakpoints[current]]: columns[current]
  }), {})

  return (
    <MasonryLayout
      role="list"
      className={clsx(MasonryClass, className)}
      columnClassName={Column}
      breakpointCols={typeof columns === 'number' ? columns : computedColumns}
      style={{ ...dynamicStyle, ...style }}
      {...props}
    >
      {Children.map(children, (child: ReactElement) => cloneElement(
        child,
        {
          role: 'listitem'
        }
      ))}
    </MasonryLayout>
  )
}
