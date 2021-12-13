import React, { CSSProperties, ReactNode, forwardRef } from 'react'
import clsx from 'clsx'
import tksn from '@wonderflow/tokens/platforms/web/tokens.json'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'
import { GridItem, GridItemProps } from './grid-item'
import { Grid as GridClass } from './grid.module.css'

export type GridProps = PropsWithClass & {
  children: ReactNode;
  columns?: number;
  rows?: number;
  rowGap?: 0 | TokensTypes['space'];
  columnGap?: 0 | TokensTypes['space'];
  filling?: 'fit' | 'fill' | false;
  colMinWidth?: string;
  rowMinHeight?: string;
}

type GridComponent = React.ForwardRefExoticComponent<GridProps> & {
  Item: React.ForwardRefExoticComponent<GridItemProps>;
}

export const Grid = forwardRef<HTMLUListElement, GridProps>(({
  className,
  children,
  columns,
  rows,
  rowGap = 8,
  columnGap = 8,
  style,
  filling = 'fill',
  colMinWidth = '10rem',
  rowMinHeight = '1fr',
  ...props
}, forwardedRef) => {
  const computedStyle: CSSProperties = {
    '--rGap': rowGap && tksn.space[rowGap],
    '--cGap': columnGap && tksn.space[columnGap],
    '--columns': columns,
    '--column-min-w': colMinWidth,
    '--rows': rows,
    '--row-min-h': rowMinHeight
  }

  return (
    <ul
      className={clsx(GridClass, className)}
      style={{ ...computedStyle, ...style }}
      data-grid-filling-type={filling}
      ref={forwardedRef}
      {...props}
    >
      {children}
    </ul>
  )
}) as GridComponent

Grid.Item = GridItem
