import { AnimatePresence } from 'framer-motion'
import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children: ReactNode,
  root?: HTMLElement
}

export const OverlayContainer: React.FC<PortalProps> = ({
  children,
  root = document.body
}) => {
  useEffect(() => {
    if (root.closest('[data-overlay-container]')) {
      throw new Error('An OverlayContainer must not be inside another container. Please change the root prop.')
    }
  }, [root])

  const content = (
    <div data-overlay-container>
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  )
  return createPortal(content, root)
}
