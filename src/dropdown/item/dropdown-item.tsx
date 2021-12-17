import { ReactNode, useCallback, forwardRef, useRef, useMemo } from 'react'
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex'
import { DropdownItem as DropdownItemClass, Icon as IconClass } from './dropdown-item.module.css'
import { IconNames } from '../../icons/types'
import { Tooltip, Stack, Icon, Polymorphic } from '../..'
import clsx from 'clsx'

export type DropdownItemProps = {
  /**
   * Content to display in the dropdown item.
   */
  children: ReactNode;
  /**
   * Whether the dropdown item should have an icon
   */
  icon?: IconNames;
  /**
   * Set the position of the icon. Used only when icon is defined.
   */
  iconPosition?: 'left' | 'right';
  /**
   * Set the size of the menu item.
   * Font size and icon style will be adjusted to match the size.
   */
  dimension?: 'small' | 'regular'
  /**
   * Callback function to be called when the menu item is pressed.
   */
  onClick?(): void;
  /**
   * Add an extra description to the dropdown item.
   * This uses the `<Tooltip>` component internally.
   */
  description?: ReactNode;
  /**
   * Set disabled state. The item is not interactive and grayed out.
   */
  disabled?: boolean;
  /**
   * Add or remove the padding from the dropdown item.
   * This space is used to keep the content aligned across items with or without icons.
   * We suggest to not remove the padding if you have items with icons in the same menu to
   * keep a good readability.
   *
   * Read more: https://design.wonderflow.ai/design/recipes/dropdown/#items-with-icons
   */
  padding?: boolean;
}

type PolymorphicDropdownItem = Polymorphic.ForwardRefComponent<'button', DropdownItemProps>;

export const DropdownItem = forwardRef(({
  className,
  children,
  onClick,
  icon,
  dimension = 'regular',
  as: Wrapper = 'button',
  iconPosition = 'left',
  description,
  padding = true,
  disabled = false,
  ...props
}, forwardedRef) => {
  const itemRef = useRef<any>(forwardedRef)
  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(itemRef, disabled)
  const isIconRight = iconPosition === 'right'

  useFocusEffect(focused, itemRef)

  const triggerClick = useCallback(
    () => {
      if (onClick) {
        handleClick()
        onClick()
      }
    },
    [handleClick, onClick]
  )

  const InnerContent = useMemo(() => (
    <Stack
      direction="row"
      as="span"
      fill={false}
      horizontalAlign={isIconRight ? 'space-between' : 'start'}
      verticalAlign="center"
      columnGap={8}
      horizontalPadding={16}
      verticalPadding={8}
      data-dropdown-icon-right={isIconRight}
      data-dropdown-has-icon={Boolean(icon)}
      data-dropdown-padding={padding}
      style={{ inlineSize: '100%' }}
    >
      {icon && (
        <Icon
          className={IconClass}
          name={icon}
          dimension={dimension === 'small' ? 14 : 16}
        />
      )}
      {children}
    </Stack>
  ), [children, dimension, icon, isIconRight, padding])

  return (
    <Wrapper
      ref={itemRef}
      role="menuitem"
      className={clsx(DropdownItemClass, className)}
      onClick={disabled ? undefined : triggerClick}
      onKeyDown={disabled ? undefined : handleKeyDown}
      tabIndex={tabIndex}
      aria-disabled={disabled}
      type={Wrapper === 'button' ? 'button' : undefined}
      data-dropdown-item-dimension={dimension}
      {...props}
    >
      {description
        ? (
          <Tooltip fill show={focused} placement="right-start" trigger={InnerContent}>
            {description}
          </Tooltip>
          )
        : InnerContent
      }
    </Wrapper>
  )
}) as PolymorphicDropdownItem

DropdownItem.displayName = 'Dropdown.Item'
