import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItemProfile } from '../components'

export default {
  title: 'Components/Dropdown/MenuItemProfile',
  component: MenuItemProfile,
} as ComponentMeta<typeof MenuItemProfile>

const Template: ComponentStory<typeof MenuItemProfile> = (args) => <MenuItemProfile {...args} />

export const Playground = Template.bind({})
Playground.args = {
  title: 'Ліза',
  subTitle: 'Розробник',
  imgUrl:
    'https://image.winudf.com/v2/image1/Y29tLmxhdWdoLnRhbGtpbmcuZG9nc19pY29uXzE2NTMzNTk4MThfMDE0/icon.png?w=&fakeurl=1',
}
