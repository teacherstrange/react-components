import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { Button, Dropdown, DropdownProps, Stack, Polymorphic } from '..'
import { SplitButton as SplitButtonClass } from './split-button.module.css'

export type SplitButtonProps = Pick<DropdownProps, 'placement'> & {
  label: string;
  dropdownOffset?: DropdownProps['offset'];
}

type PolymorphicSplitButton = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Button>,
  Polymorphic.OwnProps<typeof Button> & SplitButtonProps
>;

// eslint-disable-next-line react/display-name
export const SplitButton = forwardRef(({
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
      className={clsx(SplitButtonClass, className)}
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
}) as PolymorphicSplitButton

SplitButton.displayName = 'SplitButton'
