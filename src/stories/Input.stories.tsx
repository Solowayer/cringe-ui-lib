import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components'
import { Search } from '../components/icon'

export default {
  title: 'Components/Controls/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Playground = Template.bind({})
Playground.args = {
  icon: <Search />,
}
