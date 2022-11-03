import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from '../components'
import { Box } from '../components'
import { BoxProps } from '../components/box/box'

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = () => {
  const styles: BoxProps = {
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '40px',
  }

  return (
    <React.Fragment>
      <Box {...styles}>
        <Container maxWidth="100%" paddingLeft="40px" paddingRight="40px">
          Cringe
        </Container>
      </Box>
      <Container maxWidth="100%" paddingLeft="40px" paddingRight="40px">
        <Box {...styles}>Cringe</Box>
      </Container>
    </React.Fragment>
  )
}

export const Playground: ComponentStory<typeof Container> = Template.bind({})
