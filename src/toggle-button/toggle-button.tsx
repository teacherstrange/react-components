import { forwardRef, useCallback, useEffect, useState } from 'react'
import { ToggleButton as ToggleButtonClass } from './toggle-button.module.css'
import { IconButton, IconButtonProps, Polymorphic, Icon, IconProps } from '../'
import clsx from 'clsx'
import { Except } from 'type-fest'
import { motion } from 'framer-motion'

export type ToggleButtonProps = Except<IconButtonProps, 'icon'> & {
  /**
   * Set the icon to show when the button is resting.
   */
  restingIcon: IconButtonProps['icon'];
  /**
   * Set the icon to show when the button is pressed/active.
   */
  pressedIcon?: IconButtonProps['icon'];
  /**
   * Set the pressed state of the button. If `pressedIcon` is set,
   * the icon will be shown instead of the resting icon.
   */
  pressed?: boolean;
}

type PolymorphicToggleButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof IconButton>,
  Polymorphic.OwnProps<typeof IconButton> & ToggleButtonProps
>;

const scaleAnimation = {
  scaleIn: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0, 0, 0.34, 1],
      delay: 0
    }
  },
  scaleOut: {
    scale: 0,
    transition: {
      duration: 0.2,
      ease: [0.3, 0.07, 1, 1],
      delay: 0
    }
  }
}

export const ToggleButton = forwardRef(({
  className,
  restingIcon,
  pressedIcon,
  dimension,
  kind,
  disabled,
  iconColor,
  pressed = false,
  onClick,
  ...otherProps
}, forwardedRef) => {
  const [isPressed, setIsPressed] = useState<boolean>(pressed)
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    setFirstRender(false)
  }, [pressed])

  const handleClick = useCallback(
    (event) => {
      setIsPressed(!isPressed)
      onClick && onClick(event)
    },
    [onClick, isPressed]
  )

  const renderIcon = useCallback(
    (icon, dimension) => {
      const iconSize = {
        big: 24,
        regular: 16,
        small: 16
      }

      return (<Icon name={icon} dimension={iconSize[dimension] as IconProps['dimension']} />)
    },
    []
  )

  return (
    <IconButton
      as="button"
      ref={forwardedRef}
      dimension={dimension}
      aria-pressed={isPressed}
      kind={kind}
      disabled={disabled}
      onClick={handleClick}
      className={clsx(ToggleButtonClass, className)}
      {...otherProps}
    >
      {isPressed && pressedIcon
        ? (
          <motion.span
            key="pressedIcon"
            variants={scaleAnimation}
            initial={firstRender && isPressed ? false : 'scaleOut'}
            animate="scaleIn"
          >
            {renderIcon(pressedIcon, dimension)}
          </motion.span>
          )
        : restingIcon && (
          <motion.span
            key="restingIcon"
            variants={scaleAnimation}
            initial={firstRender && !isPressed ? false : 'scaleOut'}
            animate="scaleIn"
          >
            {renderIcon(restingIcon, dimension)}
          </motion.span>
        )
      }
    </IconButton>
  )
}) as PolymorphicToggleButton
