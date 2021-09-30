import { createContext } from 'react'
import { ModalProps } from '../modal'

type ModalContextProps = Pick<ModalProps, 'onClose' | 'visible'> & {
  titleId: string
  setTitleId?(): void
}

export const ModalContext = createContext<ModalContextProps>({
  titleId: '',
  onClose: () => {}
})

ModalContext.displayName = 'ModalContext'
