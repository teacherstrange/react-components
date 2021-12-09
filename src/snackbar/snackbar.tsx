import React, { forwardRef, ReactNode } from 'react'
import { Snackbar as SnackbarClass, Icon as IconClass, Action } from './snackbar.module.css'
import clsx from 'clsx'
import { IconNames } from '../icons/types'
import { Title, Stack, Icon, Polymorphic, Button } from '../'

export type SnackbarProps = {
  icon?: IconNames;
  title?: string;
  children: ReactNode;
  kind?: 'info' | 'warning' | 'neutral' | 'positive' | 'danger';
  dismissable?: boolean;
  dismissLabel?: string;
  onDismiss?(): void;
}

type PolymorphicSnackbar = Polymorphic.ForwardRefComponent<'div', SnackbarProps>;

export const Snackbar = forwardRef(({
  children,
  className,
  title,
  icon,
  kind = 'neutral',
  as: Wrapper = 'div',
  dismissable,
  dismissLabel = 'Dismiss',
  onDismiss,
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
      role="alert"
      {...props}
    >
      <Stack verticalAlign="start" horizontalAlign="start" direction="row" columnGap={16} fill={false}>
        <Icon className={IconClass} name={icon || defaultIcons[kind] as IconNames} dimension={24} />
        <Stack rowGap={16}>
          <Stack rowGap={8}>
            {title && <Title level="5">{title}</Title>}
            <p>{children}</p>
          </Stack>
          {dismissable && (
            <Stack horizontalAlign="end">
              <Button onClick={onDismiss} className={Action}>{dismissLabel}</Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Wrapper>
  )
}) as PolymorphicSnackbar

Snackbar.displayName = 'Snackbar'
