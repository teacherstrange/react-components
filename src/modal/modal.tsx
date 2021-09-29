import React, { Children, cloneElement, forwardRef, ReactElement } from 'react'
import { useUIDSeed } from 'react-uid'
import { LazyMotion, AnimatePresence, domAnimation, m } from 'framer-motion'
import { Elevator } from '../elevator'
import clsx from 'clsx'
import { FocusOn } from 'react-focus-on'
import { ModalContent } from './modal-content'
import { Modal as ModalClass, Backdrop, Container } from './modal.module.css'

export type ModalProps = PropsWithClass & {
  visible?: boolean | React.Dispatch<React.SetStateAction<boolean>>;
  overlayColor?: 'light' | 'dark' | 'auto';
  onOverlayClick?: () => void;
  onClose?: () => void;
}

// eslint-disable-next-line react/display-name
const ModalElement: React.FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(({
  children,
  className,
  overlayColor = 'dark',
  onOverlayClick,
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
        onClickOutside={() => onOverlayClick && onOverlayClick()}
        onEscapeKey={() => onClose && onClose()}
      >
        <LazyMotion features={domAnimation}>
          <Elevator resting={4}>
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
                  id: seedID('modal-title')
                }
              ))}
            </m.div>
          </Elevator>
        </LazyMotion>
      </FocusOn>
    </div>
  )
})

export const Modal = ({
  visible,
  ...props
}: ModalProps) => {
  return typeof visible === 'boolean'
    ? (
      <AnimatePresence>
        {visible ? <ModalElement {...props} /> : null}
      </AnimatePresence>
      )
    : <ModalElement {...props} />
}

Modal.Content = ModalContent

Modal.displayName = 'Modal'
ModalElement.displayName = 'ModalElement'
