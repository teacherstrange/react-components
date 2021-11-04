import clsx from 'clsx'
import React from 'react'
import { Except } from 'type-fest'
import { Button, ButtonProps, Dropdown, DropdownProps, Stack } from '../'
import { MenuButton as MenuButtonClass } from './menu-button.module.css'

export type MenuButtonProps = Except<
  ButtonProps, 'iconPosition' | 'pressed'> & Pick<DropdownProps, 'placement'
> & {
  label: string;
  dropdownOffset?: DropdownProps['offset'];
}

export const MenuButton: React.FC<MenuButtonProps> = ({
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
  onClick
}) => {
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
        {...commonProps}
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
}
