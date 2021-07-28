import React from 'react'
import styles from './icon-button.module.css'
import { Button, ButtonProps } from '../button'
import clsx from 'clsx'
import { IconNames } from 'src/icons/types'

export type IconButtonProps = {
  type?: ButtonProps['type'];
  size?: ButtonProps['size'];
  icon: IconNames,
  disabled?: ButtonProps['disabled'];
  onClick?: ButtonProps['onClick'];
} & PropsWithClass

export const IconButton = ({
  className,
  ...props
}: IconButtonProps) => (
  <Button className={clsx(styles.IconButton, className)} {...props} />
)
