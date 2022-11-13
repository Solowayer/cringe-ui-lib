import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DndList, DndItem } from '../components'
import { Drag } from '../components/icon'

export default {
  title: 'Components/DndList',
  component: DndList,
} as ComponentMeta<typeof DndList>

const Template: ComponentStory<typeof DndList> = () => {
  return (
    <DndList>
      <DndItem>
        <Drag />
        Cringe
      </DndItem>
    </DndList>
  )
}

export const Playground = Template.bind({})
