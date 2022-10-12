import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components'

export default {
  title: 'Components/Controls/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState<string | undefined>('Cringe text')

  return (
    <Input
      placeholder="Type some cringe"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      clearButtonClick={() => setValue('')}
      clearable
    />
  )
}

export const Playground: ComponentStory<typeof Input> = Template.bind({})
// Playground.args = {
//   startIcon: <Search />,
// }
