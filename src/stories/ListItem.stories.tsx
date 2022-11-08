import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListItem } from '../components'
import { Search } from '../components/icon'

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />

export const Playground = Template.bind({})
Playground.args = { label: 'Одяг', icon: <Search /> }
