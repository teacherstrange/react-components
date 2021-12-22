import { useState } from 'react'
import { Modal } from './modal'
import { useOverlayContext, OverlayContainer } from '../overlay-container'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Card } from '../card'
import { Title } from '../title'
import { Stack } from '../stack'

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
      <OverlayContainer onClose={() => setVisible(false)}>
        {visible && (
          <Modal
            key="dynamic-modal"
            {...otherProps}
          >
            {children}
          </Modal>
        )}
      </OverlayContainer>
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
  const { onClose, titleId } = useOverlayContext()

  return (
    <Card>
      <Stack direction="row" fill={false} verticalAlign="center" horizontalAlign="space-between">
        <Title level="5" id={titleId}>{titleId}</Title>
        <IconButton onClick={() => onClose()} icon="xmark" kind="flat" aria-label="Close modal" />
      </Stack>
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
