import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, Button, Typo } from '../components'

export default {
  title: 'Components/Surface/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <React.Fragment>
      <Button variant="tertiary" onClick={() => setIsOpen(true)}>
        Show Drawer
      </Button>
      <Drawer size="default" side="bottom" isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DrawerHeader>
          <Typo type="headingXSmall">Корзина</Typo>
        </DrawerHeader>
        <DrawerBody>
          <Typo>Замовлення...</Typo>
        </DrawerBody>
        {/* <DrawerFooter>
          <Button fullWidth>Замовити за 350 грн</Button>
        </DrawerFooter> */}
      </Drawer>
    </React.Fragment>
  )
}

export const Playground: ComponentStory<typeof Drawer> = Template.bind({})

// Playground.args = {
//   side: 'right',
// }
