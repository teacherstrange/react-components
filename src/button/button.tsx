import clsx from 'clsx'
import React, { ElementType, forwardRef, MouseEvent, ReactNode } from 'react'
import { IconNames } from 'src/icons/types'
import { Icon } from '../icon'
import styles from './button.module.css'
export interface IButtonProps<T> {
  type?: 'primary' | 'secondary' | 'flat';
  size?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: ReactNode;
  as?: T | keyof JSX.IntrinsicElements;
}

export const Button = forwardRef(<T extends ElementType>({
  type = 'primary',
  size = 'regular',
  className,
  children,
  fullWidth,
  icon,
  disabled,
  iconPosition = 'left',
  onClick,
  as: As = 'button',
  ...props
}: OverwritableType<IButtonProps<T>, T>, ref: any) => (
  <As
    ref={ref}
    type={As === 'button' ? 'button' : undefined}
    className={clsx(styles.Button,
      className,
      type === 'secondary' && 'Vibrancy VibrancyHover',
      type === 'flat' && 'VibrancyHover'
    )}
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
  </As>
  ))
Button.displayName = 'Button'
