import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from '../components'
import { GridItem } from '../components/grid/grid-item'

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = () => {
  return (
    <Grid rowGap="8px" columnGap="8px" columnCount={[1, 2, 4, 8]}>
      <GridItem as="li">Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
      <GridItem>Cringe</GridItem>
    </Grid>
  )
}

export const Playground: ComponentStory<typeof Grid> = Template.bind({})
