import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Typo, FlexBlock } from '../components'

export default {
  title: 'Components/Surface/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div style={{ height: '2000px', width: '100%' }}>
      <Button variant="tertiary" onClick={() => setIsOpen(true)}>
        Show Modal
      </Button>
      <Modal
        // size="full"
        // image="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-17.jpg"
        // imageSize="large"
        // showCloseButton={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
      >
        <ModalHeader>
          <Typo variant="headingXSmall">Діапазон цін</Typo>
          {/* <Typo color="secondary">
            Цю інформацію надав господар, і її перевірено в Cringe. Щоб ви не сумнівались, ото так!
          </Typo> */}
        </ModalHeader>
        <ModalBody>
          <Typo>
            Це заходи, які організують і проводять місцеві мешканці, і вони геть не схожі на
            звичайні екскурсії або майстер-класи. Продемонструйте іншим власне місто, ремесло,
            культуру або ідею, організовуючи враження.
          </Typo>
        </ModalBody>
        <ModalFooter>
          <FlexBlock justifyContent="flex-end" gap="8px">
            <Button>Submit</Button>
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              Cancel
            </Button>
          </FlexBlock>
        </ModalFooter>
      </Modal>
    </div>
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
