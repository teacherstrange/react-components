import React from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps } from '../'
import { PrimitivePropsWithRef } from '../primitive'
import clsx from 'clsx'

export type IconButtonProps = PrimitivePropsWithRef<typeof Button> & PropsWithClass & Pick<
ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick'
>

// eslint-disable-next-line react/display-name
export const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  dimension,
  kind,
  disabled,
  ...props
}) => (
  <Button
    icon={icon}
    dimension={dimension}
    kind={kind}
    disabled={disabled}
    className={clsx(IconButtonClass, className)}
    {...props}
  />
)

IconButton.displayName = 'IconButton'
