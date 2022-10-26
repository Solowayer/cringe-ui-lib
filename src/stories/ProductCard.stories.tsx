import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductCard } from '../components'
import { backgroundColors } from '../config/themes/light-theme/background-colors'

export default {
  title: 'Components/Card/ProductCard',
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [{ name: 'primary', value: backgroundColors.backgroundSecondary }],
    },
  },
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = () => {
  const items = Array.from({ length: 11 }, () => ({
    title: 'Cheesesteak',
    description:
      'New & improved recipe! A deep smokey BBQ sauce, rocket, a smoked cheddar cheese slice, bacon, crispy onions, tomato and mayo on top of a flame grilled 100% Aberdeen Angus Beef Burger. Meals are served with large fries or onion rings and a soft drink of your choice.',
    price: 222,
    weight: 350,
    calories: 1200,
    thumbnail: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
    headerImage: 'https://burgerburger.co.nz/wp-content/uploads/2020/01/BC.jpg',
  }))
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {items.map((item) => (
        <ProductCard
          title={item.title}
          description={item.description}
          price={item.price}
          weight={item.weight}
          calories={item.calories}
          thumbnail={item.thumbnail}
          headerImage={item.headerImage}
        />
      ))}
    </div>
  )
}

export const Playground = Template.bind({})

// Playground.args = {
//   title: 'Cheesy Bacon Loaded King Fries',
//   image:
//     'https://tb-static.uber.com/prod/image-proc/processed_images/9b529139e4f2bd112ce492ae06b838b1/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
//   description:
//     'New & improved recipe! A deep smokey BBQ sauce, rocket, a smoked cheddar cheese slice, bacon, crispy onions, tomato and mayo on top of a flame grilled 100% Aberdeen Angus Beef Burger. Meals are served with large fries or onion rings and a soft drink of your choice.',
//   price: 45,
//   weight: 0.2,
//   calories: 1350,
// }
