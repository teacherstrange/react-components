import React, { ChangeEvent, forwardRef, Ref } from 'react'
import { Text, Stack, IconNames, Icon, IconProps } from '../'
import { BaseField, BaseFieldProps } from './base-field'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'
import { Textfield as TextfieldClass, FieldContainer, InputField, Icon as IconClass } from './textfield.module.css'

export type TextfieldProps = BaseFieldProps & {
  icon?: IconNames;
  label?: string;
  textarea?: boolean;
  dimension?: 'regular' | 'small' | 'big';
  readOnly?: boolean;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const Textfield = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextfieldProps>(({
  children,
  className,
  disabled = false,
  icon,
  label,
  textarea,
  readOnly,
  invalid,
  iconPosition = 'right',
  dimension = 'regular',
  onChange,
  ...props
}: TextfieldProps, forwardedRef) => {
  const uid = useUIDSeed()

  const iconSizes = {
    small: 14,
    regular: 16,
    big: 24
  }

  const commonProps = {
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
      {label && <Text as="label" size={dimension === 'small' ? 14 : 16} htmlFor={uid('field')}>{label}</Text>}
      <div className={FieldContainer}>

        {textarea
          ? (
            <BaseField
              ref={forwardedRef as Ref<HTMLTextAreaElement>}
              as="textarea"
              id={uid('field')}
              {...commonProps}
              {...props}
            />
            )
          : (
            <BaseField
              className={InputField}
              id={uid('field')}
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
