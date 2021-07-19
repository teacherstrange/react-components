import React, { HTMLAttributes } from 'react'
import styles from './icon-button.module.css'
import { Button } from '../button'
import clsx from 'clsx'

export const IconButton = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLOrSVGElement>) => (
  <Button className={clsx(styles.IconButton, className)} {...props} />
)
