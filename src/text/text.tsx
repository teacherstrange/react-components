import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import { Text as TextClass } from './text.module.css'
import clsx from 'clsx'
import { TokensTypes } from '@wonderflow/tokens/platforms/web/types'

type TextOwnProps = {
  size?: TokensTypes['font']['size'];
  color?: 'positive' | 'informative' | 'danger' | 'warning';
  weight?: 'thin' | 'bold';
  fluid?: boolean;
}

const defaultElement = 'p'

export type TextProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<TextOwnProps, As>;

export const Text = <
As extends ElementType = typeof defaultElement
> ({
    children,
    className,
    size,
    color,
    weight,
    as,
    fluid = true,
    ...props
  }: TextProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  return (
    <Wrapper
      data-text-size={size}
      data-text-weight={weight}
      data-text-color={color}
      data-text-is-fluid={fluid}
      className={clsx(TextClass, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
