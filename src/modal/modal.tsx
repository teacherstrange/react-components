import { forwardRef, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { FocusOn } from 'react-focus-on'
import { ModalContent, ModalContentProps } from './content/modal-content'
import { Modal as ModalClass, Container } from './modal.module.css'
import { useOverlayContext } from '../overlay-container'

export type ModalProps = PropsWithChildren<PropsWithClass> & {
  /**
   * This enable the modal to be closed by clicking on the overlay.
   * Even if this can be set to `false` we strongly recommend to leave
   * it to `true` as it ensures the accessibility of the modal.
   */
  closeOnClickOutside?: boolean;
}

type ModalComponent = React.ForwardRefExoticComponent<ModalProps> & {
  Content: React.ForwardRefExoticComponent<ModalContentProps>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  className,
  closeOnClickOutside = true,
  ...otherProps
}, forwardedRef) => {
  const { titleId, onClose } = useOverlayContext()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={clsx(ModalClass, className)}
      ref={forwardedRef}
      {...otherProps}
    >
      <FocusOn
        onClickOutside={onClose}
        onEscapeKey={onClose}
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
          exit={{ scale: 0.98, opacity: 0 }}
          className={Container}
        >
          {children}
        </motion.div>
      </FocusOn>
    </div>
  )
}) as ModalComponent

Modal.displayName = 'Modal'
Modal.Content = ModalContent
