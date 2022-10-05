import React, { useRef, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from '../components'
import { Search } from '../components/icon'

export default {
  title: 'Components/Controls/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = () => {
  const [value, setValue] = useState('Hello')

  return (
    <Input
      placeholder="Type some cringe"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      clearable
    />
  )
}

export const Playground: ComponentStory<typeof Input> = Template.bind({})
// Playground.args = {
//   startIcon: <Search />,
// }
