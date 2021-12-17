import { CSSProperties, forwardRef } from 'react'
import clsx from 'clsx'
import { GridItem as GridItemClass } from './grid.module.css'

export type GridItemProps = PropsWithClass & {
  fullWidth?: boolean;
  column?: string;
  row?: string;
}

export const GridItem = forwardRef<HTMLLIElement, GridItemProps>(({
  children,
  style,
  className,
  fullWidth = false,
  column,
  row,
  ...otherProps
}, forwardedRef) => {
  const dynamicStyle: CSSProperties = {
    '--column': column,
    '--row': row
  }

  return (
    <li
      ref={forwardedRef}
      className={clsx(GridItemClass, className)}
      style={{ ...dynamicStyle, ...style }}
      data-grid-item-fullwidth={fullWidth}
      {...otherProps}
    >
      {children}
    </li>
  )
})

GridItem.displayName = 'Grid.Item'
