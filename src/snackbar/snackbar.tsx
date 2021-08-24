import React, { ElementType, ReactNode } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import { Snackbar as SnackbarClass, Icon as IconClass } from './snackbar.module.css'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { Icon } from '../icon'
import { Stack } from '../stack'
import { Title } from '../title'

type SnackbarOwnProps = {
  icon?: IconNames;
  title?: string;
  elevated?: boolean;
  children: ReactNode;
  kind?: 'info' | 'warning' | 'neutral' | 'positive' | 'danger';
}

const defaultElement = 'div'

export type SnackbarProps<
  As extends ElementType = typeof defaultElement
> = PolymorphicPropsWithoutRef<SnackbarOwnProps, As>;

export const Snackbar = <
As extends ElementType = typeof defaultElement
>({
    children,
    className,
    title,
    icon,
    kind = 'neutral',
    elevated,
    as,
    ...props
  }: SnackbarProps<As>) => {
  const Wrapper: ElementType = as || defaultElement

  const defaultIcons = {
    info: 'circle-info',
    warning: 'triangle-exclamation',
    neutral: 'compass',
    positive: 'check',
    danger: 'circle-x'
  }

  return (
    <Wrapper
      className={clsx(SnackbarClass, className)}
      data-snackbar-kind={kind}
      data-snackbar-elevated={elevated}
      aria-live="polite"
      role="region"
      {...props}
    >
      <Stack verticalAlign="start" horizontalAlign="start" direction="row" columnGap={16} fill={false}>
        <Icon className={IconClass} name={icon || defaultIcons[kind] as IconNames} dimension={24} />
        <Stack rowGap={8}>
          {title && <Title level="5">{title}</Title>}
          <p>{children}</p>
        </Stack>
      </Stack>
    </Wrapper>
  )
}
