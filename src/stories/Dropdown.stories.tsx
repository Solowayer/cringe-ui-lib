import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown, ListItem, ListItemLink } from '../components'
import { Delete } from '../components/icon'
import { Typo } from '../components'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const ITEMS = [
  { path: 'https://www.youtube.com/', icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete', danger: true },
  { divider: true },
  { icon: <Delete />, label: 'Delete', disabled: true },
]

const Template: ComponentStory<typeof Dropdown> = () => {
  return (
    <Dropdown isOpen={true}>
      {ITEMS.map((item) => (
        <ListItem divider={item.divider} disabled={item.disabled}>
          <ListItemLink href={item.path}>
            {item.icon}
            <Typo color={item.disabled ? 'contentDisabled' : 'contentPrimary'}>{item.label}</Typo>
          </ListItemLink>
        </ListItem>
      ))}
    </Dropdown>
  )
}

export const Playground = Template.bind({})
