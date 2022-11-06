import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GridLayout, Cell, Box } from '../components'

export default {
  title: 'Components/GridLayout',
  component: GridLayout,
} as ComponentMeta<typeof GridLayout>

const Template: ComponentStory<typeof GridLayout> = () => {
  return (
    <GridLayout>
      <Cell skip={2} span={3}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="500px"
          width="100%"
          backgroundColor="green"
          color="white"
        >
          Cringe
        </Box>
      </Cell>
      <Cell skip={5} span={7}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="500px"
          width="100%"
          backgroundColor="green"
          color="white"
        >
          Cringe
        </Box>
      </Cell>
    </GridLayout>
  )
}

export const Playground: ComponentStory<typeof GridLayout> = Template.bind({})
