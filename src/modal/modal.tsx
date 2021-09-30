import React, { Children, cloneElement, forwardRef, ReactElement } from 'react'
import { useUIDSeed } from 'react-uid'
import { LazyMotion, AnimatePresence as Presence, domAnimation, m } from 'framer-motion'
import clsx from 'clsx'
import { FocusOn } from 'react-focus-on'
import { ModalContent } from './modal-content'
import { Modal as ModalClass, Backdrop, Container } from './modal.module.css'

export type ModalProps = PropsWithClass & {
  visible?: boolean | React.Dispatch<React.SetStateAction<boolean>>;
  overlayColor?: 'light' | 'dark' | 'auto';
  closeOnClickOutside?: boolean;
  onClose: () => void;
}

const ModalElement: React.FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  className,
  overlayColor = 'dark',
  closeOnClickOutside = true,
  onClose,
  ...props
}, forwardedRef) => {
  const seedID = useUIDSeed()

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={seedID('modal-title')}
      className={clsx(ModalClass, className)}
      ref={forwardedRef}
      {...props}
    >
      <LazyMotion features={domAnimation}>
        <m.span
          key={seedID('modal-backdrop')}
          className={Backdrop}
          data-overlay-color={overlayColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.95 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </LazyMotion>
      <FocusOn
        onClickOutside={() => closeOnClickOutside && onClose()}
        onEscapeKey={() => onClose()}
      >
        <LazyMotion features={domAnimation}>
          <m.div
            key={seedID('modal-container')}
            className={Container}
            data-theme="light"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          >
            {Children.map(children, (child: ReactElement) => cloneElement(
              child,
              {
                id: seedID('modal-title'),
                onClose: onClose
              }
            ))}
          </m.div>
        </LazyMotion>
      </FocusOn>
    </div>
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
