import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductCard } from '../components'

export default {
  title: 'Components/ProductCard/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />

export const Playground = Template.bind({})
Playground.args = {
  children: 'Cringe',
}
