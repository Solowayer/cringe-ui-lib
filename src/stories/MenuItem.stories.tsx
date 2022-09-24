import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem } from '../components'
import { Search } from '../components/icon'

export default {
  title: 'Components/Dropdown/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const Playground = Template.bind({})
Playground.args = { label: 'Одяг', icon: <Search /> }
