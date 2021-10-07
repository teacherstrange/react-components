import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Icon, IconProps, Stack } from '../'
import { Chip as ChipClass, Action } from './chip.module.css'

export type ChipProps = PropsWithClass & {
  dimension?: 'small' | 'regular' | 'big';
  color?: 'gray' | 'cyan' | 'green' | 'purple' | 'yellow' | 'red' | 'blue',
  interactive?: boolean;
  onDismissClick?(): void;
}

export const Chip: React.FC<ChipProps> = forwardRef<HTMLSpanElement, ChipProps>(({
  children,
  className,
  dimension = 'regular',
  color = 'gray',
  interactive,
  onDismissClick,
  ...props
}, forwardedRef) => {
  const properties = {
    small: {
      iconSize: 14
    },
    regular: {
      iconSize: 14
    },
    big: {
      iconSize: 16
    }
  }

  return (
    <Stack
      as="span"
      direction="row"
      columnGap={8}
      inline
      data-chip-color={color}
      data-chip-dimension={dimension}
      className={clsx(ChipClass, className)}
      verticalAlign="center"
      ref={forwardedRef}
      {...props}
    >
      <b>{children}</b>
      {interactive && (
        <button onClick={interactive && onDismissClick} className={Action} type="button">
          <Icon name="xmark" dimension={properties[dimension].iconSize as IconProps['dimension']} />
        </button>
      )}
    </Stack>
  )
})

Chip.displayName = 'Chip'
