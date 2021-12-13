import clsx from 'clsx'
import React, { FC, Children, cloneElement, forwardRef, MouseEvent, ReactElement, useCallback } from 'react'
import { IconNames } from '../icons/types'
import { Icon, IconProps, Polymorphic, Spinner } from '../'
import { Button as ButtonClass, SpinnerIndicator, ButtonsGroup as ButtonsGroupClass } from './button.module.css'

export type ButtonProps = PropsWithClass & {
  kind?: 'primary' | 'secondary' | 'flat';
  dimension?: 'regular' | 'small' | 'big';
  fullWidth?: boolean;
  icon?: IconNames;
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  busy?: boolean;
  pressed?: boolean;
  onClick?(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void;
}

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', ButtonProps>;

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
    iconColor,
    type = 'button',
    pressed,
    onClick,
    busy,
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
      aria-disabled={disabled}
      aria-busy={busy}
      aria-pressed={Wrapper === 'button' ? pressed : undefined}
      aria-live={busy ? 'polite' : undefined}
      onClick={handleClick()}
      {...props}
    >
      {icon && (
        <Icon
          name={icon}
          fill={iconColor}
          dimension={iconSize[dimension] as IconProps['dimension']}
        />
      )}
      {(children && busy) ? <span>{children}</span> : children}
      {busy && (
        <span className={SpinnerIndicator}>
          <Spinner dimension={dimension} />
        </span>
      )}
    </Wrapper>
  )
}) as PolymorphicButton

export type ButtonsGroupProps = PropsWithClass & Pick<ButtonProps, 'dimension' | 'kind'>

export const ButtonsGroup: FC<ButtonsGroupProps> = ({
  children,
  className,
  kind,
  dimension = 'regular'
}) => (
  <div className={clsx(ButtonsGroupClass, className)}>
    {Children.map(children, (child: ReactElement) => cloneElement(
      child,
      {
        kind,
        dimension
      }
    ))}
  </div>
)
