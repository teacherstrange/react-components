import React, { ReactNode, useCallback, forwardRef, useRef } from 'react'
import { Icon } from '../icon'
import { Stack } from '../stack'
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex'
import { IconNames } from 'src/icons/types'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { DropdownItem as DropdownItemClass, Icon as IconClass } from './dropdown-item.module.css'
import clsx from 'clsx'

export type DropdownItemProps = PropsWithClass & {
  children: ReactNode;
  icon?: IconNames;
  dimension?: 'small' | 'regular'
  onClick?: () => void;
  iconPosition: 'left' | 'right';
}

type PolymorphicDropdownItem = Polymorphic.ForwardRefComponent<'button', DropdownItemProps>;

// eslint-disable-next-line react/display-name
export const DropdownItem = forwardRef(({
  className,
  children,
  onClick,
  icon,
  dimension = 'regular',
  as: Wrapper = 'button',
  iconPosition = 'left',
  ...props
}, forwardedRef) => {
  const itemRef = useRef<any>(forwardedRef)
  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(itemRef, false)
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

  return (
    <Wrapper
      ref={itemRef}
      className={clsx(DropdownItemClass, className)}
      onClick={triggerClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
      type={Wrapper === 'button' ? 'button' : undefined}
      data-dropdown-item-dimension={dimension}
      {...props}
    >
      <Stack
        direction="row"
        as="span"
        fill={false}
        horizontalAlign={isIconRight ? 'space-between' : 'start'}
        verticalAlign="center"
        columnGap={8}
        horizontalPadding={16}
        verticalPadding={8}
      >
        {icon && (
          <Icon
            data-dropdown-icon-right={isIconRight}
            className={IconClass}
            name={icon}
            dimension={dimension === 'small' ? 14 : 16}
          />
        )}
        {children}
      </Stack>
    </Wrapper>
  )
}) as PolymorphicDropdownItem

DropdownItem.displayName = 'Dropdown.Item'
