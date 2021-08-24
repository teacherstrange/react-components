import clsx from 'clsx'
import React, { ElementType, forwardRef, ForwardedRef, MouseEvent, useCallback } from 'react'
import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
  PolymorphicPropsWithRef
} from 'react-polymorphic-types'
import { IconNames } from '../icons/types'
import { Icon } from '../icon'
import { Button as ButtonClass } from './button.module.css'

type ButtonOwnProps = {
  kind?: 'primary' | 'secondary' | 'flat';
  dimension?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
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
      kind = 'primary',
      dimension = 'regular',
      className,
      children,
      fullWidth,
      icon,
      disabled,
      iconPosition = 'left',
      type = 'button',
      onClick,
      as,
      ...props
    }:
  PolymorphicPropsWithoutRef<ButtonOwnProps, As>,
    ref: ForwardedRef<Element>
  ) => {
  const Wrapper: ElementType = as || defaultElement

  const handleClick = useCallback(
    () => (event: any) => {
      if (!disabled && onClick) onClick(event)
      if (disabled) event.preventDefault()
    },
    [disabled, onClick]
  )

  return (
    <Wrapper
      ref={ref}
      type={Wrapper === 'button' ? type : undefined}
      className={clsx(ButtonClass, className)}
      data-button-icon-position={iconPosition}
      data-button-dimension={dimension}
      data-button-kind={kind}
      data-button-fullwidth={fullWidth}
      data-button-disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick()}
      {...props}
    >
      {icon && <Icon name={icon} dimension={dimension === 'small' ? 16 : 24} />}
      {children}
    </Wrapper>
  )
})

Button.displayName = 'Button'
