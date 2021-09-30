import React, { forwardRef } from 'react'
import { useUIDSeed } from 'react-uid'
import { LazyMotion, AnimatePresence as Presence, domAnimation, m } from 'framer-motion'
import clsx from 'clsx'
import { FocusOn } from 'react-focus-on'
import { ModalContent } from './modal-content'
import { Modal as ModalClass, Backdrop, Container } from './modal.module.css'
import { ModalContext } from './modal-context'

export type ModalProps = PropsWithClass & {
  visible?: boolean | React.Dispatch<React.SetStateAction<boolean>>;
  overlayColor?: 'light' | 'dark' | 'auto';
  closeOnClickOutside?: boolean;
  onClose(): void;
}

const ModalElement: React.FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  className,
  overlayColor = 'dark',
  closeOnClickOutside = true,
  onClose,
  visible,
  ...props
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
          <LazyMotion features={domAnimation}>
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={ctx.titleId}
              className={clsx(ModalClass, className)}
              ref={forwardedRef}
              {...props}
            >
              <m.span
                key={seedID('modal-backdrop')}
                className={Backdrop}
                data-overlay-color={overlayColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.95 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
              <FocusOn
                onClickOutside={() => closeOnClickOutside && ctx.onClose()}
                onEscapeKey={ctx.onClose}
              >
                <m.div
                  key={seedID('modal-container')}
                  className={Container}
                  data-theme="light"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                >
                  {children}
                </m.div>
              </FocusOn>
            </div>
          </LazyMotion>
        )}
      </ModalContext.Consumer>
    </ModalContext.Provider>
  )
})

export const Modal = ({
  visible,
  ...props
}: ModalProps) => {
  if (typeof visible === 'boolean') {
    return (
      <Presence exitBeforeEnter>
        {visible ? <ModalElement {...props} /> : null}
      </Presence>
    )
  }
  return (<ModalElement {...props} />)
}

Modal.Presence = Presence
Modal.Root = ModalElement
Modal.Content = ModalContent

Modal.displayName = 'Modal'
ModalElement.displayName = 'Modal.Element'
