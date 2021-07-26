import clsx from 'clsx'
import React, { ElementType, forwardRef, ForwardedRef, MouseEvent } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'
import { IconNames } from '../icons/types'
import { Icon } from '../icon'
import styles from './button.module.css'

type ButtonOwnProps = {
  type?: 'primary' | 'secondary' | 'flat';
  size?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const defaultElement = 'button'

export type ButtonProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithRef<ButtonOwnProps, As>;

export const Button: PolymorphicForwardRefExoticComponent<
  ButtonOwnProps,
  typeof defaultElement
> = forwardRef(<
  As extends ElementType = typeof defaultElement
>(
    {
      type = 'primary',
      size = 'regular',
      className,
      children,
      fullWidth,
      icon,
      disabled,
      iconPosition = 'left',
      onClick,
      as,
      ...props
    }:
  PolymorphicPropsWithoutRef<ButtonOwnProps, As>,
    ref: ForwardedRef<Element>
  ) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      ref={ref}
      type={Wrapper === 'button' ? 'button' : undefined}
      className={clsx(styles.Button, className)}
      data-button-icon-position={iconPosition}
      data-button-size={size}
      data-button-type={type}
      data-button-fullwidth={fullWidth}
      data-button-disabled={disabled}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {icon && <Icon name={icon} size={size === 'small' ? 16 : 24} />}
      {children}
    </Wrapper>
  )
})

Button.displayName = 'Button'
