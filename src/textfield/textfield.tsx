import React, { ChangeEvent, forwardRef, Ref, HTMLAttributes } from 'react'
import { Icon, IconProps } from '../icon'
import { IconNames } from '../icons/types'
import { Stack } from '../stack'
import { Text } from '../text'
import { BaseField } from './base-field'
import { Textfield as TextfieldClass, FieldContainer, InputField, Icon as IconClass } from './textfield.module.css'
import clsx from 'clsx'

export type TextfieldProps = {
  icon?: IconNames;
  label?: string;
  textarea?: boolean;
  size?: 'regular' | 'small' | 'big';
  readOnly?: boolean;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  invalid?: boolean;
  htmlSize?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
} & HTMLAttributes<HTMLInputElement | HTMLTextAreaElement>

export const Textfield = forwardRef(({
  children,
  className,
  disabled = false,
  icon,
  id,
  label,
  textarea,
  readOnly,
  invalid,
  iconPosition = 'right',
  size = 'regular',
  htmlSize,
  onChange,
  ...props
}: TextfieldProps, ref) => {
  const iconSizes = {
    small: 14,
    regular: 16,
    big: 24
  }

  const commonProps = {
    id,
    readOnly,
    invalid,
    disabled,
    onChange
  }

  return (
    <Stack
      as="fieldset"
      rowGap={4}
      className={clsx(TextfieldClass, className)}
      data-textfield-has-icon={Boolean(icon)}
      data-textfield-icon-position={iconPosition}
      data-textfield-size={size}
      data-textfield-invalid={invalid}
      aria-disabled={disabled}
      horizontalAlign="stretch"
      verticalAlign="start"
      tabIndex={disabled ? 0 : undefined}
    >
      {label && <Text as="label" size={size === 'small' ? 14 : 16} htmlFor={id}>{label}</Text>}
      <div className={FieldContainer}>

        {textarea
          ? (
            <BaseField
              ref={ref as Ref<HTMLTextAreaElement>}
              as="textarea"
              {...commonProps}
              {...props}
            />
            )
          : (
            <BaseField
              className={InputField}
              ref={ref as Ref<HTMLInputElement>}
              htmlSize={htmlSize}
              {...commonProps}
              {...props}
            />
            )
          }

        { !textarea && icon && (
          <Icon
            className={IconClass}
            name={icon}
            size={iconSizes[size] as IconProps['size']}
          />
        )}
      </div>
    </Stack>
  )
})

Textfield.displayName = 'Textfield'
