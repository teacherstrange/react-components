import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useUIDSeed } from 'react-uid'
import { OverlayProvider } from './overlay-context'
import { OverlayContainer as OverlayContainerClass } from './overlay-container.module.css'

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
  /**
   * Set the overlay style. This is used to obscure the page content
   * behind the content of the overlay, while it is open. If set to `auto`, the overlay
   * color is determined by the global active theme (light or dark).
   */
  overlayColor?: 'light' | 'dark' | 'auto';
  /**
   * The callback function that is called when the overlay is closed.
   */
  onClose?(): void;
  /**
   * Set the overlay to be obscuring the page content behind it.
   */
  obfuscate?: boolean;
}

export const OverlayContainer: React.FC<OverlayContainerProps> = ({
  children,
  root = document.body,
  overlayColor = 'auto',
  index = 4,
  obfuscate = true,
  onClose
}) => {
  const seedID = useUIDSeed()

  useEffect(() => {
    if (root.closest('[data-overlay-container]')) {
      throw new Error('An OverlayContainer must not be inside another container. Please change the root prop.')
    }
  }, [root])

  const content = (
    <OverlayProvider onClose={onClose}>
      <AnimatePresence>
        {children && (
          <motion.div
            key={seedID('modal-backdrop')}
            data-overlay-container
            className={OverlayContainerClass}
            data-overlay-color={overlayColor}
            data-overlay-obfuscate={obfuscate}
            style={{ zIndex: index }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </OverlayProvider>
  )
  return createPortal(content, root)
}
