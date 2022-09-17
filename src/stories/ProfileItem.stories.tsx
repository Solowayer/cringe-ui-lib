import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ItemProfile } from '../components'

export default {
  title: 'Components/Menu/ItemProfile',
  component: ItemProfile,
} as ComponentMeta<typeof ItemProfile>

const Template: ComponentStory<typeof ItemProfile> = (args) => <ItemProfile {...args} />

export const Playground = Template.bind({})
Playground.args = {
  title: 'Ліза',
  subTitle: 'Розробник',
  imgUrl:
    'https://image.winudf.com/v2/image1/Y29tLmxhdWdoLnRhbGtpbmcuZG9nc19pY29uXzE2NTMzNTk4MThfMDE0/icon.png?w=&fakeurl=1',
}
