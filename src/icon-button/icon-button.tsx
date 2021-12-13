import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps, Polymorphic } from '../'
import clsx from 'clsx'

export type IconButtonProps = Pick<
ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick' | 'busy'
>

type PolymorphicIconButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Button>,
  Polymorphic.OwnProps<typeof Button> & IconButtonProps
>;

export const IconButton = forwardRef(({
  className,
  icon,
  dimension,
  kind,
  disabled,
  busy,
  ...otherProps
}, forwardedRef) => (
  <Button
    ref={forwardedRef}
    icon={icon}
    dimension={dimension}
    kind={kind}
    disabled={disabled}
    busy={busy}
    className={clsx(IconButtonClass, className)}
    {...otherProps}
  />
)) as PolymorphicIconButton
