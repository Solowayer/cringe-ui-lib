import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '../components'

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />

export const Playground = Template.bind({})
Playground.args = {}
