import React, { Children, forwardRef, ReactElement, useMemo } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { List as ListClass, Marker } from './list.module.css'
import clsx from 'clsx'
import { IconNames } from 'src/icons/types'
import { Icon, IconProps } from '../icon'
import { Text, TextProps } from '../text'

export type ListProps = PropsWithClass & {
  dimension?: 'small' | 'regular' | 'big';
  marker?: IconNames;
  markerColor?: string;
}

type PolymorphicList = Polymorphic.ForwardRefComponent<'ul', ListProps>;

// eslint-disable-next-line react/display-name
export const List = forwardRef(({
  as: Wrapper = 'ul',
  children,
  marker = 'circle',
  dimension = 'regular',
  className,
  markerColor,
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
      role="list"
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

List.displayName = 'List'
