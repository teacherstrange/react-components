import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps } from '../'
import clsx from 'clsx'

export type IconButtonProps = PropsWithClass & Pick<
ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick'
>

type IconButtonElement = React.ElementRef<typeof Button>;

// eslint-disable-next-line react/display-name
export const IconButton = forwardRef<IconButtonElement, IconButtonProps>(({
  className,
  icon,
  dimension,
  kind,
  disabled,
  ...props
}, forwardedRef) => (
  <Button
    ref={forwardedRef}
    icon={icon}
    dimension={dimension}
    kind={kind}
    disabled={disabled}
    className={clsx(IconButtonClass, className)}
    {...props}
  />
))

IconButton.displayName = 'IconButton'
