import React, { CSSProperties, ElementType, ReactNode } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import clsx from 'clsx'

import style from './clamp-text.module.css'

type ClampTextOwnProps = {
  children: ReactNode;
  rows?: number;
}

const defaultElement = 'span'

export type ClampTextProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<ClampTextOwnProps, As>;

export const ClampText = <
As extends ElementType = typeof defaultElement
>({
    className,
    children,
    rows = 1,
    as,
    ...props
  }: ClampTextProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  const dynamicStyle: CSSProperties = {
    '--r': rows
  }

  return (
    <Wrapper
      style={dynamicStyle}
      className={clsx(style.ClampText, className)}
      {...props}
    >
      {children}
    </Wrapper>
  )
}
