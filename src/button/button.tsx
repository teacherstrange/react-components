import clsx from 'clsx'
import React, { forwardRef, MouseEvent, useCallback } from 'react'
// import type * as Polymorphic from '../polymorphic'
import { IconNames } from '../icons/types'
import { Icon, IconProps, Primitive } from '../'
import { Button as ButtonClass } from './button.module.css'

export type ButtonProps = PropsWithClass & {
  kind?: 'primary' | 'secondary' | 'flat';
  dimension?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  as?: keyof JSX.IntrinsicElements;
  onClick?(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
}

type ButtonElement = React.ElementRef<typeof Primitive.button>;

// eslint-disable-next-line react/display-name
export const Button = forwardRef<ButtonElement, ButtonProps>((
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
    as = 'button',
    onClick,
    ...props
  }, forwardedRef) => {
  const handleClick = useCallback(
    () => (event: any) => {
      if (!disabled && onClick) onClick(event)
      if (disabled) event.preventDefault()
    },
    [disabled, onClick]
  )

  const iconSize = {
    big: 24,
    regular: 16,
    small: 16
  }

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Primitive.button
      as={as}
      ref={forwardedRef}
      type={as === 'button' ? type : undefined}
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
      {icon && <Icon name={icon} dimension={iconSize[dimension] as IconProps['dimension']} />}
      {children}
    </Primitive.button>
  )
})

Button.displayName = 'Button'
