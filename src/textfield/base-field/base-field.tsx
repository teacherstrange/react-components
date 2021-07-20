import React, { forwardRef, ElementType, ForwardedRef } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'
import styles from './base-field.module.css'
import clsx from 'clsx'

type BaseFieldOwnProps = {
  invalid?: boolean;
  size?: 'small' | 'regular' | 'big'
}

const defaultElement = 'input'

export type BaseFieldProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<BaseFieldOwnProps, As>;

export const BaseField: PolymorphicForwardRefExoticComponent<
  BaseFieldOwnProps,
  typeof defaultElement
> = forwardRef(<
  As extends ElementType = typeof defaultElement
>({
    as,
    invalid,
    className,
    ...props
  }:
  PolymorphicPropsWithoutRef<BaseFieldOwnProps, As>,
    ref: ForwardedRef<Element>
  ) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      ref={ref}
      data-basefield-invalid={invalid}
      className={clsx(styles.BaseField, className)}
      {...props}
    />
  )
})

BaseField.displayName = 'BaseField'
