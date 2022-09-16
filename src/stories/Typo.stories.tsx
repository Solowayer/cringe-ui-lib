import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Typo } from '../components'

export default {
  title: 'Components/Typo/Typo',
  component: Typo,
} as ComponentMeta<typeof Typo>

const Template: ComponentStory<typeof Typo> = (args) => <Typo {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
}
