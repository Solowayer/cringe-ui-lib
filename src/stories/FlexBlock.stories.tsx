import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FlexBlock } from '../components'

export default {
  title: 'Components/Block/FlexBlock',
  component: FlexBlock,
} as ComponentMeta<typeof FlexBlock>

const Template: ComponentStory<typeof FlexBlock> = (args) => <FlexBlock {...args} />

export const Playground = Template.bind({})
Playground.args = {}
