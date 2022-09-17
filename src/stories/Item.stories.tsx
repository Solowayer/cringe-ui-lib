import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Item } from '../components'

export default {
  title: 'Components/Menu/Item',
  component: Item,
} as ComponentMeta<typeof Item>

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />

export const Playground = Template.bind({})
Playground.args = { label: 'Одяг' }
