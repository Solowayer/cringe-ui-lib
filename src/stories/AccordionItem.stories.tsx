import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccordionItem } from '../components'

export default {
  title: 'Components/Accordion/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />

export const Playground = Template.bind({})
Playground.args = { title: 'Пісюн' }
