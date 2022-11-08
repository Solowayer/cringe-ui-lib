import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DnDList } from '../components'
import { ListItem } from '../components'

export default {
  title: 'Components/DnDList',
  component: DnDList,
} as ComponentMeta<typeof DnDList>

const Template: ComponentStory<typeof DnDList> = () => {
  return (
    <DnDList>
      <ListItem label="Cringe" />
      <ListItem label="Cringe" />
      <ListItem divider />
      <ListItem label="Cringe" />
    </DnDList>
  )
}

export const Playground = Template.bind({})
