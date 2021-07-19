import React, { ChangeEvent, forwardRef, HTMLAttributes } from 'react'
import { Icon, IIconProps } from '../icon'
import { IconNames } from '../icons/types'
import { Stack } from '../stack'
import { Text } from '../text'
import styles from './select.module.css'
import clsx from 'clsx'

type SelectProps = {
  icon?: IconNames;
  label?: string;
  type?: 'single' | 'multiple';
  size?: 'regular' | 'small' | 'big';
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
} & HTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  children,
  className,
  disabled = false,
  icon = 'sort-alt',
  id,
  label,
  type = 'single',
  size = 'regular',
  onChange,
  ...props
}: SelectProps, ref) => {
  const iconSizes = {
    small: 14,
    regular: 16,
    big: 24
  }

  return (
    <Stack
      as="fieldset"
      rowGap="4"
      className={clsx(styles.Select, className)}
      data-select-is-multiple={type === 'multiple'}
      data-select-has-label={Boolean(label)}
      data-select-size={size}
      aria-disabled={disabled}
      tabIndex={disabled ? 0 : undefined}
    >
      {label && <Text as="label" size={size === 'small' ? 14 : 16} htmlFor={id}>{label}</Text>}
      <div className={styles.FieldContainer}>

        { type === 'single' && (
          <Icon
            className={styles.Icon}
            name={icon}
            size={iconSizes[size] as IIconProps['size']}
          />
        ) }

        <select
          disabled={disabled}
          className={styles.Field}
          id={id}
          multiple={type === 'multiple'}
          onChange={onChange}
          ref={ref}
          {...props}
        >
          {children}
        </select>
      </div>
    </Stack>
  )
})

Select.displayName = 'Select'
