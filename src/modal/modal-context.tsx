import React, { createContext, useContext, PropsWithChildren } from 'react'
import { useUIDSeed } from 'react-uid'
import { ModalProps } from '../modal'

type ModalContextProps = Partial<ModalProps> & {
  titleId?: string
}

export const ModalContext = createContext<ModalContextProps>({
  titleId: '',
  onClose: () => {}
})

ModalContext.displayName = 'ModalContext'

export const ModalProvider = (props: PropsWithChildren<ModalContextProps>) => {
  const seedID = useUIDSeed()
  const { children, titleId = seedID('modal-title'), onClose } = props

  return (
    <ModalContext.Provider value={{
      titleId,
      onClose
    }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error(
      'Modal component must be used inside ModalContext to access context data.'
    )
  }
  return context
}
