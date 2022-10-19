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
  title: 'Cheesy Bacon Loaded King Fries',
  image:
    'https://tb-static.uber.com/prod/image-proc/processed_images/9b529139e4f2bd112ce492ae06b838b1/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
  description:
    'New & improved recipe! A deep smokey BBQ sauce, rocket, a smoked cheddar cheese slice, bacon, crispy onions, tomato and mayo on top of a flame grilled 100% Aberdeen Angus Beef Burger. Meals are served with large fries or onion rings and a soft drink of your choice.',
  price: 45,
  weight: 200,
  ccal: 1350,
}
