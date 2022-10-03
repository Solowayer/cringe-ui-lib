import React from 'react'
import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from '../components'

export default {
  title: 'Components/Controls/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

const options = [
  { label: 'az', value: 'Cringe' },
  { label: 'Cringe', value: 'Cringe' },
  { label: 'Cringe', value: 'Cringe' },
  { label: 'Cringe', value: 'Cringe' },
  { label: 'Cringe', value: 'Cringe' },
]

export const Playground = Template.bind({})
Playground.args = { options: options }
