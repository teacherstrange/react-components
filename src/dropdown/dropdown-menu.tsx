
import React, {
  ReactNode,
  HTMLAttributes
} from 'react'

import {
  RovingTabIndexProvider
} from 'react-roving-tabindex'

import style from './dropdown-menu.module.css'

export interface IDropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const DropdownMenu = ({
  className,
  children,
  ...attributes
}: IDropdownMenuProps) => (
  <ul
    role="menu"
    className={`${style.DropdownMenu} ${className || ''}`}
    {...attributes}
  >
    <RovingTabIndexProvider options={{
      direction: 'vertical',
      loopAround: true
    }}
    >
      {children}
    </RovingTabIndexProvider>
  </ul>
)
