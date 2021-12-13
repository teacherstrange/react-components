import React, { ReactNode, useCallback, forwardRef, useRef, useMemo } from 'react'
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex'
import { DropdownItem as DropdownItemClass, Icon as IconClass } from './dropdown-item.module.css'
import { IconNames } from '../icons/types'
import { Tooltip, Stack, Icon, Polymorphic } from '../'
import clsx from 'clsx'

export type DropdownItemProps = {
  children: ReactNode;
  icon?: IconNames;
  dimension?: 'small' | 'regular'
  onClick?(): void;
  iconPosition?: 'left' | 'right';
  description?: ReactNode;
  disabled?: boolean;
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

export type DropdownItemCheckboxProps = DropdownItemProps & {
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
