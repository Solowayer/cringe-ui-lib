import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from '../components'
import { Box, BoxProps } from '../components/box/box'

export default {
  title: 'Components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = () => {
  const styles: BoxProps = {
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '40px',
  }

  return (
    <Grid rowGap="8px" columnGap="8px" columnCount={[1, 2, 3, 6]}>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
      <Box {...styles}>Cringe</Box>
    </Grid>
  )
}

export const Playground: ComponentStory<typeof Grid> = Template.bind({})
