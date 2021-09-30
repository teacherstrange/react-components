import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Content, Header, CloseButton } from './modal-content.module.css'
import { Title } from '../title'
import { Elevator } from '../elevator'
import { IconButton } from '../icon-button'

export type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  onClose?: () => void;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({
  children,
  className,
  id,
  title,
  onClose,
  ...props
}, forwardedRef) => {
  return (
    <Elevator resting={4}>
      <div
        className={clsx(Content, className)}
        ref={forwardedRef}
        {...props}
      >
        <header className={Header}>
          <IconButton onClick={onClose} className={CloseButton} icon="xmark" kind="flat" />
          <Title level="5" id={id}>{title}</Title>
        </header>
        {children}
      </div>
    </Elevator>
  )
})

ModalContent.displayName = 'Modal.Content'
