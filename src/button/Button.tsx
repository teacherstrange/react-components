import React from 'react'
import styles from './button.module.css'

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={styles.Button}
      {...props}
    >
      <span>{label}</span>
    </button>
  )
}
