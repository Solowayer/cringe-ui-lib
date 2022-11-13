import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack, Button } from '../components'

export default {
  title: 'Components/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = () => {
  return (
    <Stack horizontal spacing={2}>
      <Button>Cringe</Button>
      <Button>Cringe</Button>
      <Button>Cringe</Button>
      <Button>Cringe</Button>
    </Stack>
  )
}

export const Playground = Template.bind({})
