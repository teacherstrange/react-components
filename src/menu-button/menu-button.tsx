import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Button, Dropdown, DropdownProps, Stack, Polymorphic } from '../'
import { MenuButton as MenuButtonClass } from './menu-button.module.css'

export type MenuButtonProps = Pick<DropdownProps, 'placement'
> & {
  label: string;
  dropdownOffset?: DropdownProps['offset'];
}

type PolymorphicMenuButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Button>,
  Polymorphic.OwnProps<typeof Button> & MenuButtonProps
>;

// eslint-disable-next-line react/display-name
export const MenuButton = forwardRef(({
  className,
  label,
  icon = 'chevron-down',
  kind,
  dimension,
  fullWidth,
  disabled,
  loading,
  children,
  placement,
  dropdownOffset,
  onClick,
  pressed = false,
  iconPosition = 'left',
  ...props
}, forwardedRef) => {
  const commonProps = {
    kind,
    dimension
  }

  return (
    <Stack
      className={clsx(MenuButtonClass, className)}
      direction="row"
      columnGap={0}
      inline={!fullWidth}
    >
      <Button
        loading={loading}
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={onClick}
        pressed={pressed}
        iconPosition={iconPosition}
        ref={forwardedRef}
        {...commonProps}
        {...props}
      >
        {label}
      </Button>
      <Dropdown
        placement={placement}
        offset={dropdownOffset}
        trigger={<Button icon={icon} {...commonProps} />}
      >
        {children}
      </Dropdown>
    </Stack>
  )
}) as PolymorphicMenuButton

MenuButton.displayName = 'MenuButton'