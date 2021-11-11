import React, { CSSProperties, ReactNode } from 'react'
import clsx from 'clsx'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'
import { GridItem } from './grid-item'
import { Grid as GridClass } from './grid.module.css'

export type GridProps = PropsWithClass & {
  children: ReactNode;
  columns?: number;
  rows?: number;
  rowGap?: 0 | TokensTypes['space'];
  columnGap?: 0 | TokensTypes['space'];
  filling?: 'fit' | 'fill';
  colMinWidth?: string;
  rowMinHeight?: string;
}

export const Grid = ({
  className,
  children,
  columns,
  rows,
  rowGap = 8,
  columnGap = 8,
  style,
  filling = 'fill',
  colMinWidth = '5rem',
  rowMinHeight = '1fr',
  ...props
}: GridProps) => {
  const computedStyle: CSSProperties = {
    '--rGap': rowGap && tksn.space[rowGap],
    '--cGap': columnGap && tksn.space[columnGap],
    '--columns': columns,
    '--column-min-w': colMinWidth,
    '--rows': rows,
    '--row-min-h': rowMinHeight
  }

  return (
    <div
      role="list"
      className={clsx(GridClass, className)}
      style={{ ...computedStyle, ...style }}
      data-grid-filling-type={filling}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.Item = GridItem
