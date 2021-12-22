import { useState } from 'react'
import { Modal } from './modal'
import { useModalContext } from './modal-context'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Card } from '../card'
import { OverlayContainer } from '../overlay-container'
import { AnimatePresence } from 'framer-motion'

export default {
  title: 'Components/Dialogs/Modal',
  component: Modal,
  argTypes: {
  },
  args: {
  }
}

const ModalShell = ({ children, ...otherProps }) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <AnimatePresence>
        {visible && (
        <OverlayContainer>
          <Modal
            key="dynamic-modal"
            onClose={() => setVisible(false)}
            {...otherProps}
          >
            {children}
          </Modal>
        </OverlayContainer>
        )}
      </AnimatePresence>
    </>
  )
}

const DefaultTemplate = (args) => {
  return (
    <ModalShell {...args}>
      <Modal.Content title="Modal title" theme="auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et magnam distinctio qui quod ducimus libero magni earum perspiciatis.
        <img width="100%" height="auto" src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=1600&q=80" />
      </Modal.Content>
    </ModalShell>
  )
}

export const Default = DefaultTemplate.bind({})

const CustomContentModal = (...args) => {
  const { onClose, titleId } = useModalContext()

  return (
    <Card>
      {titleId}
      <IconButton onClick={() => onClose()} icon="xmark" kind="flat" aria-label="Close modal" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et magnam distinctio qui quod ducimus libero magni earum perspiciatis.
      <img width="100%" height="auto" src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=1600&q=80" />
    </Card>
  )
}

const CustomTemplate = (args) => {
  return (
    <ModalShell {...args}>
      <CustomContentModal />
    </ModalShell>
  )
}
export const Custom = CustomTemplate.bind({})
