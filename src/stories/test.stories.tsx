import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TestComponent } from '../components/TestComponent'

export default {
  title: 'Components/TestComponents/TestComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>

const Template: ComponentStory<typeof TestComponent> = (args) => <TestComponent />

export const Playground = Template.bind({})
Playground.args = {}
