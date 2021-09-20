import React from 'react'
import { Button } from '../button'
import { Dropdown } from './dropdown'
import { Separator } from '../separator'
import { Title } from '../title'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    dimension: 'regular',
    iconPosition: 'left'
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    },
    dimension: {
      options: ['small', 'regular'],
      control: { type: 'radio' }
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    }
  }
}

const DefaultTemplate = ({ dimension, iconPosition, onClick, ...props }) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="arrow-right"
          dimension={dimension}
          description={<>Description for this item</>}
        >
          Sample long menu item
        </Dropdown.Item>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="user"
          dimension={dimension}
          description={(
            <>
              <Title as="h2" level="2">Sample H2 Title</Title>
              <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1593963171957-d87a6279226d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </>
          )}
        >
          Short menu label
        </Dropdown.Item>
        <Separator />
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} icon="arrow-down-to-bracket" dimension={dimension}>Even shorter</Dropdown.Item>
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} dimension={dimension}>Really?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="arrow-right"
          dimension={dimension}
          description={<>Description for this item</>}
        >
          Sample long menu item
        </Dropdown.Item>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="user"
          dimension={dimension}
          description={(
            <>
              <Title as="h2" level="2">Sample H2 Title</Title>
              <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1593963171957-d87a6279226d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </>
          )}
        >
          Short menu label
        </Dropdown.Item>
        <Separator />
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} icon="arrow-down-to-bracket" dimension={dimension}>Even shorter</Dropdown.Item>
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} dimension={dimension}>Really?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="arrow-right"
          dimension={dimension}
          description={<>Description for this item</>}
        >
          Sample long menu item
        </Dropdown.Item>
        <Dropdown.Item
          onClick={onClick}
          iconPosition={iconPosition}
          icon="user"
          dimension={dimension}
          description={(
            <>
              <Title as="h2" level="2">Sample H2 Title</Title>
              <img style={{ width: '100%' }} src="https://images.unsplash.com/photo-1593963171957-d87a6279226d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            </>
          )}
        >
          Short menu label
        </Dropdown.Item>
        <Separator />
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} icon="arrow-down-to-bracket" dimension={dimension}>Even shorter</Dropdown.Item>
        <Dropdown.Item onClick={onClick} iconPosition={iconPosition} dimension={dimension}>Really?</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
)

export const Default = DefaultTemplate.bind({})

const CustomTemplate = ({ dimension, iconPosition, ...props }) => (
  <>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <div style={{ border: '2px solid black', maxInlineSize: '30ch', padding: 24 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Magni error unde sapiente beatae! Nostrum praesentium similique
        veniam non ut nulla, incidunt velit et, placeat cupiditate, aliquid saepe. Atque, provident perferendis?
      </div>
    </Dropdown>
    <Dropdown trigger={<Button>Open Dropdown</Button>} {...props}>
      <div style={{ border: '2px solid black', maxInlineSize: '30ch', padding: 24 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Magni error unde sapiente beatae! Nostrum praesentium similique
        veniam non ut nulla, incidunt velit et, placeat cupiditate, aliquid saepe. Atque, provident perferendis?
      </div>
    </Dropdown>
  </>
)

export const CustomElement = CustomTemplate.bind({})
