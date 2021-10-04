import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps, ComponentPropsWithoutRef } from '../'
// import type * as Polymorphic from '../polymorphic'
import clsx from 'clsx'

type IconButtonElement = React.ElementRef<typeof Button>;
type PrimitiveIconButtonProps = ComponentPropsWithoutRef<typeof Button>;

export type IconButtonProps = PrimitiveIconButtonProps & Pick<
ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick'
>

// type PolymorphicIconButton = Polymorphic.ForwardRefComponent<
//   Polymorphic.IntrinsicElement<typeof Button>,
//   Polymorphic.OwnProps<typeof Button> & IconButtonProps
// >;

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
