import React, { HTMLAttributes, forwardRef } from 'react'
import styles from './icon-button.module.css'
import { Button } from '../button'
import clsx from 'clsx'

export const IconButton = forwardRef<HTMLButtonElement | HTMLAnchorElement>(({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLOrSVGElement>, ref) => (
  <Button ref={ref} className={clsx(styles.IconButton, className)} {...props} />
))

IconButton.displayName = 'IconBUtton'
