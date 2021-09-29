import React, { useState } from 'react'
import { Modal } from './modal'
import { Button } from '../button'
import { AnimatePresence } from 'framer-motion'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
  },
  args: {
  }
}

const TemplateVisible = (args) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <Modal
        key="default-modal"
        visible={visible}
        onClose={() => setVisible(false)}
        onOverlayClick={() => setVisible(false)}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, unde neque facilis temporibus corporis
          <img src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
        </Modal.Content>
      </Modal>
    </>
  )
}

export const Default = TemplateVisible.bind({})

const TemplateDynamic = (args) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>
      <AnimatePresence>
        {visible && (
        <Modal
          key="dynamic-modal"
          onClose={() => setVisible(false)}
          onOverlayClick={() => setVisible(false)}
          {...args}
        >
          <Modal.Content title="Modal title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus et magnam distinctio qui quod ducimus libero magni earum perspiciatis.
            <img src="https://images.unsplash.com/photo-1579332649290-10b7da0cd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
          </Modal.Content>
        </Modal>
        )}
      </AnimatePresence>
    </>
  )
}

export const Dynamic = TemplateDynamic.bind({})
