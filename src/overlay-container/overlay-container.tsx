import React, { ReactNode, useEffect } from 'react'
import { ModalProvider } from '../modal'
import { createPortal } from 'react-dom'

export type OverlayContainerProps = {
  children: ReactNode
  root?: HTMLElement
}

export const OverlayContainer: React.FC<OverlayContainerProps> = ({
  children,
  root = document.body
}) => {
  useEffect(() => {
    if (root.closest('[data-overlay-container]')) {
      throw new Error('An OverlayContainer must not be inside another container. Please change the root prop.')
    }
  }, [root])

  const content = (
    <ModalProvider>
      <div data-overlay-container>
        {children}
      </div>
    </ModalProvider>
  )
  return createPortal(content, root)
}
