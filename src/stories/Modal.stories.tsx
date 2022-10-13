import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Modal } from '../components'

export default {
  title: 'Components/Surface/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Show Modal</Button>
      <Modal
        heading="Cringe"
        subHeading="Sub-Cringe"
        image="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-17.jpg"
        children="A new day brings a new dose of inspiration for illustrators and digital artists, and this time it’s devoted to nature motifs. No doubt, nature is one of the most powerful inspiration sources for art of all kinds. Today we invite you to review the collection of digital illustrations by Brian Edward Miller, the artist famous for his atmospheric and picturesque artworks featuring landscapes of all kinds and in different seasons."
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      />
    </React.Fragment>
  )
}

export const Playground: ComponentStory<typeof Modal> = Template.bind({})

// Playground.args = {
//   children:
//     'A new day brings a new dose of inspiration for illustrators and digital artists, and this time it’s devoted to nature motifs. No doubt, nature is one of the most powerful inspiration sources for art of all kinds. Today we invite you to review the collection of digital illustrations by Brian Edward Miller, the artist famous for his atmospheric and picturesque artworks featuring landscapes of all kinds and in different seasons.',
//   image:
//     'https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-17.jpg',
//   heading: 'Cringe',
//   subHeading: 'Sub-Cringe',
// }
