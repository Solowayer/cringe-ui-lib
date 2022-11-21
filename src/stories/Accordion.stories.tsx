import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Accordion } from '../components'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

const content1 =
  'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.'

const items = [
  { title: 'Cringe', subTitle: 'SubCringe', content: content1 },
  { title: 'Cringe', subTitle: 'SubCringe', content: content1 },
  { title: 'Cringe', subTitle: 'SubCringe', content: content1 },
  { title: 'Cringe', subTitle: 'SubCringe', content: content1 },
]

export const Playground = Template.bind({})
Playground.args = { items: items }
