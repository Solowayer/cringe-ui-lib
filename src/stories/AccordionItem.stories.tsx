import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccordionItem } from '../components'

export default {
  title: 'Components/Accordion/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />

const content =
  'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.'

export const Playground = Template.bind({})
Playground.args = { title: 'Cringe', subTitle: 'SubCringe', content: content }
