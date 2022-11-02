import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, Button, Typo } from '../components'

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div style={{ height: '2000px', width: '100%' }}>
      <Button variant="tertiary" onClick={() => setIsOpen(true)}>
        Show Drawer
      </Button>
      <Drawer size="default" side="left" isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <DrawerHeader>
          <Typo variant="headingXSmall">Корзина</Typo>
        </DrawerHeader>
        <DrawerBody>
          <Typo>Замовлення...</Typo>
        </DrawerBody>
        <DrawerFooter>
          <Button fullWidth>Замовити за 350 грн</Button>
        </DrawerFooter>
      </Drawer>
    </div>
  )
}

export const Playground: ComponentStory<typeof Drawer> = Template.bind({})

// Playground.args = {
//   side: 'right',
// }
