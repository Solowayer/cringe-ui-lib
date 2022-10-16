import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drawer } from '../components'

export default {
  title: 'Components/Surface/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Playground = Template.bind({})
Playground.args = {
  side: 'right',
}
