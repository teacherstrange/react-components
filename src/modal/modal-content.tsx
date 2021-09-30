import clsx from 'clsx'
import React, { forwardRef, HTMLAttributes, ReactNode, useContext } from 'react'
import { Content, Header, CloseButton } from './modal-content.module.css'
import { Title } from '../title'
import { Elevator } from '../elevator'
import { IconButton } from '../icon-button'
import { ModalContext } from './modal-context'

export type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({
  children,
  className,
  title,
  ...props
}, forwardedRef) => {
  const { onClose, titleId } = useContext(ModalContext)

  return (
    <Elevator resting={4}>
      <div
        className={clsx(Content, className)}
        ref={forwardedRef}
        {...props}
      >
        <header className={Header}>
          {onClose && <IconButton onClick={onClose} className={CloseButton} icon="xmark" kind="flat" />}
          <Title level="5" id={titleId}>{title}</Title>
        </header>
        {children}
      </div>
    </Elevator>
  )
})

ModalContent.displayName = 'Modal.Content'
