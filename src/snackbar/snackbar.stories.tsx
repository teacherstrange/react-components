import React from 'react'
import { Snackbar } from './snackbar'

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    kind: {
      options: ['info', 'warning', 'neutral', 'positive', 'danger'],
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => (
  <Snackbar {...args}>
    Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a mollis.
  </Snackbar>
)

export const Single = Template.bind({})
Single.args = {
  title: 'Sample title'
}
