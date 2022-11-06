import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Artwork } from '../components'

export default {
  title: 'Components/Artwork',
  component: Artwork,
} as ComponentMeta<typeof Artwork>

const Template: ComponentStory<typeof Artwork> = (args) => <Artwork {...args} />

export const Playground = Template.bind({})
Playground.args = {
  src: 'https://i.pinimg.com/564x/80/c5/07/80c507085440abc20521aa35fb506f31.jpg',
  alt: 'wtf',
}
