import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu, ListItem, ListItemLink } from '../components'
import { Delete } from '../components/icon'
import { Typo } from '../components'

export default {
  title: 'Components/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const ITEMS = [
  { path: 'https://www.youtube.com/', icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete', danger: true },
  { divider: true },
  { icon: <Delete />, label: 'Delete', disabled: true },
]

const Template: ComponentStory<typeof Menu> = () => {
  return (
    <Menu isOpen={true}>
      {ITEMS.map((item) => (
        <ListItem divider={item.divider} disabled={item.disabled}>
          <ListItemLink href={item.path}>
            {item.icon}
            <Typo color={item.disabled ? 'contentDisabled' : 'contentPrimary'}>{item.label}</Typo>
          </ListItemLink>
        </ListItem>
      ))}
    </Menu>
  )
}

export const Playground = Template.bind({})
