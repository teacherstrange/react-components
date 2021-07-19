import clsx from 'clsx'
import React, { ElementType, forwardRef, MouseEvent } from 'react'
import { IconNames } from 'src/icons/types'
import { Icon } from '../icon'
import styles from './button.module.css'

type IButtonProps<As extends keyof JSX.IntrinsicElements> = {
  type?: 'primary' | 'secondary' | 'flat';
  size?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  as?: ElementType | keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements[As]

export const Button = forwardRef(<As extends keyof JSX.IntrinsicElements = 'button'>({
  type = 'primary',
  size = 'regular',
  className,
  children,
  fullWidth,
  icon,
  disabled,
  iconPosition = 'left',
  onClick,
  as: Wrapper = 'button',
  ...props
}: IButtonProps<As>, ref: any) => {
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
