import clsx from 'clsx'
import { forwardRef } from 'react'
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

export const SplitButton = forwardRef(({
  className,
  label,
  icon = 'chevron-down',
  kind,
  dimension,
  fullWidth,
  disabled,
  busy,
  children,
  placement,
  dropdownOffset,
  onClick,
  pressed = false,
  iconPosition = 'left',
  ...otherProps
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
        busy={busy}
        disabled={disabled}
        fullWidth={fullWidth}
        onClick={onClick}
        pressed={pressed}
        iconPosition={iconPosition}
        ref={forwardedRef}
        {...commonProps}
        {...otherProps}
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
