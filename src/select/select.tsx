import { ChangeEvent, forwardRef, SelectHTMLAttributes, ReactNode } from 'react'
import { Text, Stack, Icon, IconProps } from '../'
import { IconNames } from '../icons/types'
import { Select as SelectClass, FieldContainer, Icon as IconClass, Field } from './select.module.css'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /**
   * Pass the children `option` elements. This is required.
   */
  children: ReactNode;
  /**
   * Change the default icon displayed on the side of the select.
   */
  icon?: IconNames;
  /**
   * Set the accessible label for the select.
   */
  label?: ReactNode;
  /**
   * Set how many options can be selected at once.
   */
  kind?: 'single' | 'multiple';
  /**
   * Set the size of the select. This affects alsosize and style of the icon.
   */
  dimension?: 'regular' | 'small' | 'big';
  /**
   * Set disabled state. The select is not interactive and grayed out.
   */
  disabled?: boolean;
  /**
   * Callback function to be called when a new value is selected.
   */
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
  ...otherProps
}, forwardedRef) => {
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
          {...otherProps}
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
