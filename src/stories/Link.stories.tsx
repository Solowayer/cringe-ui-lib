import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Link } from '../components'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
  href: '#',
}
