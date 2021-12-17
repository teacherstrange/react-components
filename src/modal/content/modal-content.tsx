import clsx from 'clsx'
import { forwardRef, ReactNode } from 'react'
import { Content, Header, CloseButton } from './modal-content.module.css'
import { Title, Elevator, IconButton, Stack } from '../../'
import { useModalContext } from '../modal-context'

export type ModalContentProps = PropsWithClass & {
  title: ReactNode;
  theme?: 'dark' | 'light' | 'auto';
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({
  children,
  className,
  title,
  theme = 'light',
  ...otherProps
}, forwardedRef) => {
  const { onClose, titleId } = useModalContext()

  return (
    <Elevator resting={4}>
      <div
        className={clsx(Content, className)}
        ref={forwardedRef}
        data-theme={theme}
        {...otherProps}
      >
        <Stack verticalAlign="center" fill={false} horizontalAlign="space-between" direction="row" className={Header}>
          <Title level="5" id={titleId}>{title}</Title>
          {onClose && <IconButton onClick={onClose} className={CloseButton} icon="xmark" kind="flat" />}
        </Stack>
        {children}
      </div>
    </Elevator>
  )
})

ModalContent.displayName = 'Modal.Content'
