import { AnimatePresence } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

export type OverlayContainerProps = {
  /**
   * The children to render inside the overlay container. This content
   * will be rendered in a React `portal`, which means that it will be
   * rendered outside of the DOM hierarchy of the parent component.
   */
  children: ReactNode
  /**
   * Set the root element to render the overlay container into.
   */
  root?: HTMLElement
  /**
   * Set the css `z-index` of the overlay container. This must be used only
   * if necessary.
   */
  index?: number;
}

export const OverlayContainer: React.FC<OverlayContainerProps> = ({
  children,
  root = document.body,
  index = 4
}) => {
  useEffect(() => {
    if (root.closest('[data-overlay-container]')) {
      throw new Error('An OverlayContainer must not be inside another container. Please change the root prop.')
    }
  }, [root])

  const content = (
    <div data-overlay-container style={{ position: 'relative', zIndex: index }}>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </div>
  )
  return createPortal(content, root)
}
