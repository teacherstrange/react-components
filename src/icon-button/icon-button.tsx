import React from 'react'
import styles from './icon-button.module.css'
import { Button, ButtonProps } from '../button'
import clsx from 'clsx'

export const IconButton = ({
  className,
  ...props
}: ButtonProps) => (
  <Button className={clsx(styles.IconButton, className)} {...props} />
)
