import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../components'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox
      // disabled
      checkmarkType="toggle"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      label="When used as a toggle they allow the user to make a binary choice usually (but not limited) in the form of a yes/no or on/off suggestion. Toggles are often used in product settings or as filter options. When engaged (on), Base Web toggles are colored and when disengaged (off) they’re grey."
    />
  )
}

export const Playground = Template.bind({})
Playground.args = {}
