import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card, Typo, CardContent, CardActionArea } from '../components'
import { backgroundColorTokens } from '../components/themes/light-theme/background-color-tokens'
import { colorTokens } from '../components/themes/shared/color-tokens'

export default {
  title: 'Components/Card',
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [{ name: 'primary', value: backgroundColorTokens.backgroundSecondary }],
    },
  },
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = () => {
  return (
    <Card style={{ width: '300px' }} backgroundColor={colorTokens.blue500}>
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
