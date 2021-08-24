import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps } from '../button'
import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export type IconButtonProps = PropsWithClass & {
  type?: ButtonProps['type'];
  dimension?: ButtonProps['dimension'];
  icon: IconNames,
  disabled?: ButtonProps['disabled'];
  onClick?: ButtonProps['onClick'];
}

export const IconButton = forwardRef(({
  className,
  icon,
  dimension,
  type,
  disabled,
  ...props
}: IconButtonProps, ref: any) => (
  <Button
    ref={ref}
    icon={icon}
    dimension={dimension}
    type={type}
    disabled={disabled}
    className={clsx(IconButtonClass, className)}
    {...props}
  />
))

IconButton.displayName = 'IconButton'
