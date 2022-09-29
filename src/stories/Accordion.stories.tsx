import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Accordion } from '../components'

export default {
  title: 'Components/Accordion/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

const content = ''

const items = [
  { title: 'Cringe', subTitle: 'SubCringe', content: content },
  { title: 'Cringe', subTitle: 'SubCringe', content: content },
  { title: 'Cringe', subTitle: 'SubCringe', content: content },
  { title: 'Cringe', subTitle: 'SubCringe', content: content },
]

export const Playground = Template.bind({})
Playground.args = { items: items }
