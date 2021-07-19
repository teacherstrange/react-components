import clsx from 'clsx'
import React, { ElementType, forwardRef, MouseEvent } from 'react'
import { IconNames } from 'src/icons/types'
import { Icon } from '../icon'
import styles from './button.module.css'

type Props<As extends ElementType> = {
  type?: 'primary' | 'secondary' | 'flat';
  size?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  as?: As;
}

type IButtonProps<As extends ElementType> = Props<As> &
  Omit<React.ComponentPropsWithRef<As>, keyof Props<As>>

export const Button = forwardRef(<As extends ElementType = 'button'>({
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
}: IButtonProps<As>, ref: any) => {
  const Wrapper = as || 'button'

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
