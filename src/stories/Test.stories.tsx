import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputTest } from '../test/InputTest'
import { Search } from '../components/icon'

export default {
  title: 'Components/Test/Input',
  component: InputTest,
} as ComponentMeta<typeof InputTest>

const Template: ComponentStory<typeof InputTest> = (args) => <InputTest />

export const Playground = Template.bind({})
Playground.args = {}
