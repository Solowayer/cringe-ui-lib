import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListItem, ListItemText, ListItemLink } from '../components'
import { Search } from '../components/icon'

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = () => {
  return (
    <ListItem>
      <ListItemLink href="/sasi">
        <Search />
        <ListItemText title="Cringe" subTitle="SubCringe" />
      </ListItemLink>
    </ListItem>
  )
}

export const Playground: ComponentStory<typeof ListItem> = Template.bind({})
