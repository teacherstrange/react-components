import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps, Polymorphic } from '../'
import clsx from 'clsx'

export type IconButtonProps = PropsWithClass & Pick<
ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick'
>

type PolymorphicIconButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Button>,
  Polymorphic.OwnProps<typeof Button> & IconButtonProps
>;

// eslint-disable-next-line react/display-name
export const IconButton = forwardRef(({
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
)) as PolymorphicIconButton

IconButton.displayName = 'IconButton'
