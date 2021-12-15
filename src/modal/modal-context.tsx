import { createContext, useContext } from 'react'
import { ModalProps } from '../modal'

type ModalContextProps = Pick<ModalProps, 'onClose'> & {
  titleId: string
}

export const ModalContext = createContext<ModalContextProps>({
  titleId: '',
  onClose: () => {}
})

ModalContext.displayName = 'ModalContext'

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error(
      'Modal component must be used inside ModalContext to access context data.'
    )
  }
  return context
}
