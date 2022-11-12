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
      <ListItem>Cringe</ListItem>
    </DnDList>
  )
}

export const Playground = Template.bind({})
