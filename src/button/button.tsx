import clsx from 'clsx'
import React, { forwardRef, MouseEvent, useCallback } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { IconNames } from '../icons/types'
import { Icon } from '../icon'
import { Button as ButtonClass } from './button.module.css'

type ButtonOwnProps = PropsWithClass & {
  kind?: 'primary' | 'secondary' | 'flat';
  dimension?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', ButtonOwnProps>;

// eslint-disable-next-line react/display-name
export const Button = forwardRef((
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
    as: Wrapper = 'button',
    ...props
  }, forwardedRef) => {
  const handleClick = useCallback(
    () => (event: any) => {
      if (!disabled && onClick) onClick(event)
      if (disabled) event.preventDefault()
    },
    [disabled, onClick]
  )

  return (
    <Wrapper
      ref={forwardedRef}
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
}) as PolymorphicButton

Button.displayName = 'Button'
