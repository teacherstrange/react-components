import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Tooltip } from './tooltip'

const triggerText = 'Trigger'
const Trigger = <div>{triggerText}</div>
const contentText = 'Content'

describe('<Tooltip />', () => {
  it('is defined', () => {
    expect(Tooltip).toBeDefined()
  })

  it('renders tooltip content on trigger hover', async () => {
    render(
      <Tooltip trigger={Trigger}>
        {contentText}
      </Tooltip>
    )

    const trigger = screen.getByText(triggerText)
    expect(trigger).toBeVisible()

    const content = screen.queryByText(contentText)
    expect(content).not.toBeInTheDocument()

    userEvent.hover(trigger)
    expect(await screen.findByText(contentText)).toBeVisible()

    userEvent.unhover(trigger)
    expect(content).not.toBeInTheDocument()
  })
})
