import React, { ReactNode, useCallback, forwardRef, useRef, useMemo } from 'react'
import { Icon } from '../icon'
import { Stack } from '../stack'
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex'
import { IconNames } from 'src/icons/types'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { DropdownItem as DropdownItemClass, Icon as IconClass } from './dropdown-item.module.css'
import { Tooltip } from '../tooltip'
import clsx from 'clsx'

export type DropdownItemProps = PropsWithClass & {
  children: ReactNode;
  icon?: IconNames;
  dimension?: 'small' | 'regular'
  onClick?: () => void;
  iconPosition: 'left' | 'right';
  description?: ReactNode;
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
  description,
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
      style={{ inlineSize: '100%' }}
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
  ), [children, dimension, icon, isIconRight])

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
