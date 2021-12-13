import React, { Children, forwardRef, ReactElement, useMemo } from 'react'
import { List as ListClass, Marker } from './list.module.css'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { Text, TextProps, Icon, IconProps, Polymorphic } from '../'

export type ListProps = {
  dimension?: 'small' | 'regular' | 'big';
  marker?: IconNames;
  markerColor?: string;
  hideMarker?: boolean;
}

type PolymorphicList = Polymorphic.ForwardRefComponent<'ul', ListProps>;

export const List = forwardRef(({
  as: Wrapper = 'ul',
  children,
  marker = 'circle',
  dimension = 'regular',
  className,
  markerColor,
  hideMarker = false,
  ...props
}, forwardedRef) => {
  const sizes = {
    small: {
      text: 16,
      icon: 16
    },
    regular: {
      text: 18,
      icon: 16
    },
    big: {
      text: 22,
      icon: 24
    }
  }

  const isUnordered = useMemo(() => Wrapper === 'ul', [Wrapper])

  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(ListClass, className)}
      data-list-size={dimension}
      data-list-ordered={!isUnordered}
      data-list-no-marker={hideMarker}
      {...props}
    >
      {Children.map(children, (child: ReactElement) => (
        <Text
          as="li"
          size={sizes[dimension].text as TextProps['size']}
        >
          {isUnordered && (
            <Icon
              name={marker}
              className={Marker}
              fill={markerColor}
              dimension={marker !== 'circle' ? sizes[dimension].icon as IconProps['dimension'] : 16}
            />
          )}
          {child.props.children}
        </Text>
      ))}
    </Wrapper>
  )
}) as PolymorphicList
