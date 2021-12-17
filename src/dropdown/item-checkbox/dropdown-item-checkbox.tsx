import { forwardRef } from 'react'
import { DropdownItem, DropdownItemProps } from '../item/dropdown-item'
import { Polymorphic } from '../..'

export type DropdownItemCheckboxProps = DropdownItemProps & {
  /**
   * Set the default checked state of the checkbox item
   */
  checked?: boolean;
}

type PolymorphicDropdownItemCheckbox = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof DropdownItem>,
  Polymorphic.OwnProps<typeof DropdownItem> & DropdownItemCheckboxProps
>;

export const DropdownItemCheckbox = forwardRef(({
  children,
  checked,
  ...props
}, forwardedRef) =>
  <DropdownItem role="menuitemcheckbox" aria-checked={checked} ref={forwardedRef} {...props}>{children}</DropdownItem>
) as PolymorphicDropdownItemCheckbox

DropdownItemCheckbox.displayName = 'Dropdown.ItemCheckbox'
