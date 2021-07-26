import React, { ElementType } from 'react'
import type { PolymorphicPropsWithoutRef } from 'react-polymorphic-types'
import styles from './snackbar.module.css'
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
  type?: 'info' | 'warning' | 'neutral' | 'positive' | 'danger';
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
    type = 'neutral',
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
      className={clsx(styles.Snackbar, className)}
      data-snackbar-type={type}
      data-snackbar-elevated={elevated}
      aria-live="polite"
      role="region"
      {...props}
    >
      <Stack direction="row" columnGap={16} fill={false}>
        <Icon className={styles.Icon} name={icon || defaultIcons[type] as IconNames} size={24} />
        <Stack rowGap={8}>
          {title && <Title level="5">{title}</Title>}
          <p>{children}</p>
        </Stack>
      </Stack>
    </Wrapper>
  )
}
