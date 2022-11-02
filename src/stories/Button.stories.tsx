import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components'
import { Close } from '../components/icon/close'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
  // iconLeft: <Close />,
  // iconRight: <Close />,
}
