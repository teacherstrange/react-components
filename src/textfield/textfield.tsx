import { ChangeEvent, forwardRef, Ref, useCallback, useState } from 'react'
import { Text, Stack, Icon, IconProps, IconButton, IconButtonProps } from '../'
import { IconNames } from '../icons/types'
import { BaseField, BaseFieldProps, PrimitiveInputType } from './base-field'
import clsx from 'clsx'
import { useUIDSeed } from 'react-uid'
import { Textfield as TextfieldClass, FieldContainer, InputField, Icon as IconClass, IconButton as IconButtonClass } from './textfield.module.css'

export type TextfieldProps = BaseFieldProps & {
  /**
   * Set the icon to show on the left or right side of the input.
   */
  icon?: IconNames;
  /**
   * Set in which side of the field the icon should be displayed.
   */
   iconPosition?: 'left' | 'right';
  /**
   * Define the accessible label of the input. While this is not
   * mandatory, an input should always have a label. If not using this property
   * you can bind a custom label to the input by using an id.
   */
  label?: string;
  /**
   * Set the input type. The value can be anything that
   * is supported by the HTML input element.
   *
   * Read more: https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
   */
  type?: string;
  /**
   * Set the input to be a textarea instead of a single line field.
   * This property completely changes the rendered element from an input to a textarea.
   */
  textarea?: boolean;
  /**
   * Set the size of the field
   */
  dimension?: 'regular' | 'small' | 'big';
  /**
   * Set the field into a readonly state. When readonly, the field value
   * cannot be edited but it can still be selected and copied.
   */
  readOnly?: boolean;
  /**
   * Set the field into a disabled state. When disabled, the field value cannot be
   * edited, selected or copied, but it can still be focused and navigated by AT.
   */
  disabled?: boolean;
  /**
   * The callback function that is called when the input value changes.
   */
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

Textfield.displayName = 'Textfield'
