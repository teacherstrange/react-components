import React, { forwardRef, ReactNode } from 'react'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Snackbar as SnackbarClass, Icon as IconClass } from './snackbar.module.css'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { Icon } from '../icon'
import { Stack } from '../stack'
import { Title } from '../title'

export type SnackbarProps = {
  icon?: IconNames;
  title?: string;
  elevated?: boolean;
  children: ReactNode;
  kind?: 'info' | 'warning' | 'neutral' | 'positive' | 'danger';
}

type PolymorphicSnackbar = Polymorphic.ForwardRefComponent<'div', SnackbarProps>;

// eslint-disable-next-line react/display-name
export const Snackbar = forwardRef(({
  children,
  className,
  title,
  icon,
  kind = 'neutral',
  elevated,
  as: Wrapper = 'div',
  ...props
}, forwardedRef) => {
  const defaultIcons = {
    info: 'circle-info',
    warning: 'triangle-exclamation',
    neutral: 'compass',
    positive: 'check',
    danger: 'circle-x'
  }

  return (
    <Wrapper
      ref={forwardedRef}
      className={clsx(SnackbarClass, className)}
      data-snackbar-kind={kind}
      data-snackbar-elevated={elevated}
      role="alert"
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
}) as PolymorphicSnackbar

Snackbar.displayName = 'Snackbar'
