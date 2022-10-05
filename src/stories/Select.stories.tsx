import React from 'react'
import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select, Value } from '../components'

export default {
  title: 'Components/Controls/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = () => {
  const [value, setValue] = useState<Value | undefined>({ label: '', value: '' })
  return (
    <Select
      value={value}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Green', value: 'green' },
        { label: 'Violette', value: 'violette' },
      ]}
      onChange={(value) => setValue(value)}
    />
  )
}

export const Playground: ComponentStory<typeof Select> = Template.bind({})
// Playground.args = { options: options }
