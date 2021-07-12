import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './separator.module.css'

export const Separator = ({
  className,
  ...props
}: HTMLAttributes<HTMLHRElement>) => {
  return (
    <hr className={clsx(styles.Separator, className)} {...props} />
  )
}
