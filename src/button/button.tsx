import clsx from 'clsx'
import React, { forwardRef, MouseEvent, useCallback } from 'react'
import { IconNames } from '../icons/types'
import { Icon, IconProps, Polymorphic, Spinner } from '../'
import { Button as ButtonClass, SpinnerIndicator } from './button.module.css'

export type ButtonProps = PropsWithClass & {
  kind?: 'primary' | 'secondary' | 'flat';
  dimension?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames,
  iconPosition?: 'left' | 'right',
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
}

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', ButtonProps>;

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
    loading,
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

  const iconSize = {
    big: 24,
    regular: 16,
    small: 16
  }

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
      data-button-is-loading={loading}
      aria-disabled={disabled}
      aria-busy={loading}
      aria-live={loading ? 'polite' : undefined}
      onClick={handleClick()}
      {...props}
    >
      {icon && (
        <Icon
          name={icon}
          dimension={iconSize[dimension] as IconProps['dimension']}
        />
      )}
      {children && <span>{children}</span>}
      {loading && (
        <span className={SpinnerIndicator}>
          <Spinner dimension={dimension} />
        </span>
      )}
    </Wrapper>
  )
}) as PolymorphicButton

Button.displayName = 'Button'
