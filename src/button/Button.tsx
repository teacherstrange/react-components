import React from 'react'
import styles from './button.module.css'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }) => {
  return (
    <button
      type="button"
      className={styles.Button}
      {...props}
    >
      <span>BUTTON</span>
    </button>
  )
}
