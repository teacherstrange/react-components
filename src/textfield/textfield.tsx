import React, { ChangeEvent, forwardRef, Ref, InputHTMLAttributes } from 'react'
import { Icon, IconProps } from '../icon'
import { IconNames } from '../icons/types'
import { Stack } from '../stack'
import { Text } from '../text'
import { BaseField } from './base-field'
import { Textfield as TextfieldClass, FieldContainer, InputField, Icon as IconClass } from './textfield.module.css'
import clsx from 'clsx'

export type TextfieldProps = InputHTMLAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLTextAreaElement> & {
  icon?: IconNames;
  label?: string;
  textarea?: boolean;
  dimension?: 'regular' | 'small' | 'big';
  readOnly?: boolean;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  invalid?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const Textfield = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(({
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
  dimension = 'regular',
  onChange,
  ...props
}: TextfieldProps, forwardedRef) => {
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
      data-textfield-dimension={dimension}
      data-textfield-invalid={invalid}
      aria-disabled={disabled}
      horizontalAlign="stretch"
      verticalAlign="start"
      tabIndex={disabled ? 0 : undefined}
    >
      {label && <Text as="label" size={dimension === 'small' ? 14 : 16} htmlFor={id}>{label}</Text>}
      <div className={FieldContainer}>

        {textarea
          ? (
            <BaseField
              ref={forwardedRef as Ref<HTMLTextAreaElement>}
              as="textarea"
              {...commonProps}
              {...props}
            />
            )
          : (
            <BaseField
              className={InputField}
              ref={forwardedRef as Ref<HTMLInputElement>}
              {...commonProps}
              {...props}
            />
            )
          }

        { !textarea && icon && (
          <Icon
            className={IconClass}
            name={icon}
            dimension={iconSizes[dimension] as IconProps['dimension']}
          />
        )}
      </div>
    </Stack>
  )
})

Textfield.displayName = 'Textfield'
