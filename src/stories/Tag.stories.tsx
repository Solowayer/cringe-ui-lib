import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tag } from '../components'

export default {
  title: 'Components/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
}
