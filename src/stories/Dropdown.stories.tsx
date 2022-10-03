import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from '../components'
import { Delete } from '../components/icon'

export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

const ITEMS = [
  { icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete', danger: true },
  { icon: <Delete />, label: 'Delete' },
  { divider: true },
  { icon: <Delete />, label: 'Delete', disabled: true },
]

export const Playground = Template.bind({})
Playground.args = { items: ITEMS, maxHeight: '400px' }
