import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormControl } from '../components'
import { Input } from '../components'

export default {
  title: 'Components/Controls/FormControl',
  component: FormControl,
} as ComponentMeta<typeof FormControl>

const Template: ComponentStory<typeof FormControl> = (args) => <FormControl {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: <Input error />,
  label: 'Cringe',
  hint: 'Cringe hint',
}
