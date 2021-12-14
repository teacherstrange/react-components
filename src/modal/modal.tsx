import React, { forwardRef, PropsWithChildren } from 'react'
import { useUIDSeed } from 'react-uid'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { FocusOn } from 'react-focus-on'
import { ModalContent, ModalContentProps } from './modal-content'
import { Modal as ModalClass, Backdrop, Container } from './modal.module.css'
import { ModalContext } from './modal-context'
import { Presence } from '../'

export type ModalProps = PropsWithChildren<PropsWithClass> & {
  visible?: boolean;
  overlayColor?: 'light' | 'dark' | 'auto';
  closeOnClickOutside?: boolean;
  onClose(): void;
}

const ModalElement = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  className,
  overlayColor = 'dark',
  closeOnClickOutside = true,
  onClose,
  visible,
  ...otherProps
}, forwardedRef) => {
  const seedID = useUIDSeed()

  return (
    <ModalContext.Provider value={{
      onClose,
      visible,
      titleId: seedID('modal-title')
    }}
    >
      <ModalContext.Consumer>
        {(ctx) => (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={ctx.titleId}
            className={clsx(ModalClass, className)}
            ref={forwardedRef}
            {...otherProps}
          >
            <motion.span
              key={seedID('modal-backdrop')}
              className={Backdrop}
              data-overlay-color={overlayColor}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <FocusOn
              onClickOutside={() => ctx.onClose()}
              onEscapeKey={ctx.onClose}
            >
              <motion.div
                key={seedID('modal-container')}
                className={Container}
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              >
                {children}
              </motion.div>
            </FocusOn>
          </div>
        )}
      </ModalContext.Consumer>
    </ModalContext.Provider>
  )
})

type ModalComponent = React.ForwardRefExoticComponent<ModalProps> & {
  Content: React.ForwardRefExoticComponent<ModalContentProps>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  visible,
  ...otherProps
}, forwardedRef) => {
  if (typeof visible === 'boolean') {
    return (
      <Presence exitBeforeEnter>
        {visible ? <ModalElement ref={forwardedRef} {...otherProps} /> : null}
      </Presence>
    )
  }
  return (<ModalElement ref={forwardedRef} {...otherProps} />)
}) as ModalComponent

Modal.displayName = 'Modal'

Modal.Content = ModalContent
