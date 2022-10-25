import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card, Typo, Button } from '../components'
import { backgroundColors } from '../config/themes/light-theme/background-colors'
import { StyledCardAction } from '../components/card/styled'

export default {
  title: 'Components/Surface/Card',
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [{ name: 'primary', value: backgroundColors.backgroundSecondary }],
    },
  },
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = () => {
  return (
    <Card
      title="Breakfast Muffin Meal Deal"
      // headerImage="https://plus.unsplash.com/premium_photo-1664551734513-7c7e0dd24fac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
      thumbnail="https://plus.unsplash.com/premium_photo-1664551734513-7c7e0dd24fac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    >
      <Typo variant="paragraphMedium" line={2} color="secondary">
        Any LEON Sourdough Muffin with Organic Coffee and a revitalising MOJU shot. It's the
        breakfast of champions.
      </Typo>
    </Card>
  )
}

export const Playground = Template.bind({})
