import React, { forwardRef, useCallback, useState } from 'react'
import { ToggleButton as ToggleButtonClass } from './toggle-button.module.css'
import { IconButton, IconButtonProps, Polymorphic } from '../'
import clsx from 'clsx'
import { Except } from 'type-fest'

export type ToggleButtonProps = Except<IconButtonProps, 'icon'> & {
  restingIcon: IconButtonProps['icon'];
  pressedIcon?: IconButtonProps['icon'];
  pressed?: boolean;
}

type PolymorphicToggleButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof IconButton>,
  Polymorphic.OwnProps<typeof IconButton> & ToggleButtonProps
>;

// eslint-disable-next-line react/display-name
export const ToggleButton = forwardRef(({
  className,
  restingIcon,
  pressedIcon,
  dimension,
  kind,
  disabled,
  pressed = false,
  onClick,
  ...props
}, forwardedRef) => {
  const [isPressed, setIsPressed] = useState<boolean>(pressed)

  const handleClick = useCallback(
    (event) => {
      setIsPressed(!isPressed)
      onClick && onClick(event)
    },
    [onClick, isPressed]
  )

  return (
    <IconButton
      as="button"
      ref={forwardedRef}
      icon={(isPressed && pressedIcon) ? pressedIcon : restingIcon}
      dimension={dimension}
      aria-pressed={isPressed}
      kind={kind}
      disabled={disabled}
      onClick={handleClick}
      className={clsx(ToggleButtonClass, className)}
      {...props}
    />
  )
}) as PolymorphicToggleButton

ToggleButton.displayName = 'ToggleButton'
