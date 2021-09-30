import React, { ChangeEvent, forwardRef, SelectHTMLAttributes, ReactNode } from 'react'
import { Text, IconNames, Stack, Icon, IconProps } from '../'
import { Select as SelectClass, FieldContainer, Icon as IconClass, Field } from './select.module.css'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
  icon?: IconNames;
  label?: ReactNode;
  kind?: 'single' | 'multiple';
  dimension?: 'regular' | 'small' | 'big';
  disabled?: boolean;
  onChange?(event: ChangeEvent<HTMLSelectElement>): void
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  children,
  className,
  disabled = false,
  icon = 'sort-alt',
  label,
  kind = 'single',
  dimension = 'regular',
  onChange,
  ...props
}: SelectProps, forwardedRef) => {
  const uid = useUIDSeed()

  const iconSizes = {
    small: 14,
    regular: 16,
    big: 24
  }

  return (
    <Stack
      as="fieldset"
      rowGap={4}
      className={clsx(SelectClass, className)}
      data-select-is-multiple={kind === 'multiple'}
      data-select-has-label={Boolean(label)}
      data-select-dimension={dimension}
      aria-disabled={disabled}
      horizontalAlign="start"
      verticalAlign="start"
      inline
      tabIndex={disabled ? 0 : undefined}
    >
      {label && <Text as="label" size={dimension === 'small' ? 14 : 16} htmlFor={uid('select')}>{label}</Text>}
      <div className={FieldContainer}>
        <select
          disabled={disabled}
          className={Field}
          id={uid('select')}
          multiple={kind === 'multiple'}
          onChange={onChange}
          ref={forwardedRef}
          {...props}
        >
          {children}
        </select>

        { kind === 'single' && (
          <Icon
            className={IconClass}
            name={icon}
            dimension={iconSizes[dimension] as IconProps['dimension']}
          />
        ) }
      </div>
    </Stack>
  )
})

Select.displayName = 'Select'
