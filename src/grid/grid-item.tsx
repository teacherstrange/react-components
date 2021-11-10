import React, { CSSProperties } from 'react'
import clsx from 'clsx'
import { GridItem as GridItemClass } from './grid.module.css'

export type GridItemProps = PropsWithClass & {
  fullWidth?: boolean;
  column?: string;
  row?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  style,
  className,
  fullWidth = false,
  column,
  row,
  ...props
}) => {
  const dynamicStyle: CSSProperties = {
    '--column': column,
    '--row': row
  }

  return (
    <div
      role="listitem"
      className={clsx(GridItemClass, className)}
      style={{ ...dynamicStyle, ...style }}
      data-grid-item-fullwidth={fullWidth}
      {...props}
    >
      {children}
    </div>
  )
}
