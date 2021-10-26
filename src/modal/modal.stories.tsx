import React, { useState } from 'react'
import { Modal } from './modal'
import { Button } from '../button'
import { IconButton } from '../icon-button'
import { Card } from '../card'
import { Presence } from '../'

export default {
  title: 'Components/Dialogs/Modal',
  component: Modal,
  argTypes: {
  },
  args: {
  }
}

const DefaultTemplate = (args) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        key="default-modal"
        visible={visible}
        onClose={() => setVisible(false)}
        {...args}
      >
        <Modal.Content title="Modal title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          <img width="100%" height="auto" src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=1600&q=80" />
        </Modal.Content>
      </Modal>
    </>
  )
}

export const Default = DefaultTemplate.bind({})

const TemplateDynamic = (args) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Presence>
        {visible && (
        <Modal
          key="dynamic-modal"
          onClose={() => setVisible(false)}
          {...args}
        >
          <Modal.Content title="Modal title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et magnam distinctio qui quod ducimus libero magni earum perspiciatis.
            <img width="100%" height="auto" src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=1600&q=80" />
          </Modal.Content>
        </Modal>
        )}
      </Presence>
    </>
  )
}

export const Dynamic = TemplateDynamic.bind({})

const CustomTemplate = (args) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        visible={visible}
        key="dynamic-modal"
        onClose={() => setVisible(false)}
        closeOnClickOutside={false}
        {...args}
      >
        <Card>
          <IconButton onClick={() => setVisible(false)} icon="xmark" kind="flat" aria-label="Close modal" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et magnam distinctio qui quod ducimus libero magni earum perspiciatis.
          <img width="100%" height="auto" src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=1600&q=80" />
        </Card>
      </Modal>
    </>
  )
}

export const Custom = CustomTemplate.bind({})
