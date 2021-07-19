import React, { HTMLAttributes } from 'react'
import styles from './icon-button.module.css'
import { Button } from '../button'
import clsx from 'clsx'

export const IconButton = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>) => (
  <Button className={clsx(styles.IconButton, className)} {...props} />
)
