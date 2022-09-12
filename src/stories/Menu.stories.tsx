import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Menu } from '../components'
import { Delete } from '../components/icon'

export default {
  title: 'Components/Menu/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// const ITEMS = Array.from({ length: 4 }, () => ({ icon: <Delete />, label: 'Delete' }))

const ITEMS = [
  { icon: <Delete />, label: 'Delete' },
  { divider: true },
  { icon: <Delete />, label: 'Delete' },
  { icon: <Delete />, label: 'Delete' },
  { divider: true },
  { icon: <Delete />, label: 'Delete' },
]

const PROFILE_ITEMS = Array.from({ length: 4 }, () => ({
  imgUrl:
    'https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/the-big-lebowski-the-dude-i75968.jpg',
  title: 'Jack Walsch',
}))

export const Playground = Template.bind({})
Playground.args = { listItems: ITEMS, listItemsProfile: PROFILE_ITEMS }
