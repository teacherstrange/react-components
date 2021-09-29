import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Content, Header, CloseButton } from './modal-content.module.css'
import { Title } from '../title'
import { IconButton } from '../icon-button'

export type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({
  children,
  className,
  id,
  title,
  ...props
}, forwardedRef) => {
  return (
    <div
      className={clsx(Content, className)}
      ref={forwardedRef}
      {...props}
    >
      <header className={Header}>
        <IconButton className={CloseButton} icon="xmark" kind="flat" />
        <Title level="5" id={id}>{title}</Title>
      </header>
      {children}
    </div>
  )
})

ModalContent.displayName = 'Modal.Content'
