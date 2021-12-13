import React, { ChangeEvent, forwardRef, Ref, useCallback, useState } from 'react'
import { Text, Stack, Icon, IconProps, IconButton, IconButtonProps } from '../'
import { IconNames } from '../icons/types'
import { BaseField, BaseFieldProps, PrimitiveInputType } from './base-field'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'
import { Textfield as TextfieldClass, FieldContainer, InputField, Icon as IconClass, IconButton as IconButtonClass } from './textfield.module.css'

export type TextfieldProps = BaseFieldProps & {
  icon?: IconNames;
  label?: string;
  type?: string;
  textarea?: boolean;
  dimension?: 'regular' | 'small' | 'big';
  readOnly?: boolean;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  onChange?: (event: ChangeEvent<PrimitiveInputType>) => void
}

export const Textfield = forwardRef<PrimitiveInputType, TextfieldProps>(({
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
  type,
  onChange,
  ...otherProps
}: TextfieldProps, forwardedRef) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const uid = useUIDSeed()
  const isPassword = type === 'password'

  const handlePasswordVisibility = useCallback(
    () => {
      setPasswordVisible(visibility => !visibility)
    },
    []
  )

  const iconSizes = {
    small: 14,
    regular: 16,
    big: 24
  }

  const actionSizes = {
    small: 'small',
    regular: 'small',
    big: 'big'
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
      data-textfield-has-icon={isPassword || Boolean(icon)}
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
              {...otherProps}
            />
            )
          : (
            <BaseField
              className={InputField}
              id={uid('field')}
              ref={forwardedRef as Ref<HTMLInputElement>}
              type={passwordVisible ? 'text' : type}
              {...commonProps}
              {...otherProps}
            />
            )
          }
        {isPassword && (
          <IconButton
            className={IconButtonClass}
            dimension={actionSizes[dimension] as IconButtonProps['dimension']}
            onClick={handlePasswordVisibility}
            kind="flat"
            aria-label="Reveal password"
            icon={passwordVisible ? 'eye-slash' : 'eye'}
          />
        )}

        { !textarea && icon && type !== 'password' && (
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
