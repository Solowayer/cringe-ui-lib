import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Spinner } from '../components'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
