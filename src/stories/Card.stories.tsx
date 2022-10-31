import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card, Typo, CardContent, CardActionArea } from '../components'
import { backgroundColors } from '../components/themes/light-theme/background-colors'
import { baseColors } from '../components/tokens/colors'

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
    <Card style={{ width: '300px' }} hoverShadow>
      <CardActionArea>
        <CardContent>
          <Typo variant="paragraphMedium" line={2}>
            Any LEON Sourdough Muffin with Organic Coffee and a revitalising MOJU shot. It's the
            breakfast of champions.
          </Typo>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export const Playground = Template.bind({})
