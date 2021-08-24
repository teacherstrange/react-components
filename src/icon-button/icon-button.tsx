import React, { forwardRef } from 'react'
import { IconButton as IconButtonClass } from './icon-button.module.css'
import { Button, ButtonProps } from '../button'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import clsx from 'clsx'

export type IconButtonOwnProps = PropsWithClass & Pick<
  ButtonProps,
  'kind' | 'dimension' | 'icon' | 'disabled' | 'onClick'
>

type PolymorphicIconButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Button>,
  Polymorphic.OwnProps<typeof Button> & IconButtonOwnProps
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
