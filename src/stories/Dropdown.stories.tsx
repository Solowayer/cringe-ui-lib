import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Dropdown } from '../components'
import { Delete } from '../components/icon'

export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

const PROFILE_ITEMS = Array.from({ length: 14 }, () => ({
  imgUrl:
    'https://static.posters.cz/image/1300/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/the-big-lebowski-the-dude-i75968.jpg',
  title: 'Jack Walsch',
  subTitle: 'Cringe',
}))

const ITEMS = Array.from({ length: 14 }, () => ({
  icon: <Delete />,
  label: 'Delete',
}))

export const Playground = Template.bind({})
Playground.args = { itemsProfile: PROFILE_ITEMS, maxHeight: '400px' }
