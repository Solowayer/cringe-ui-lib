import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '../components'
import { FavoriteFilled, FavoriteOutlined } from '../components/icon'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <>
      <Checkbox
        // disabled
        checkmarkType="toggle"
        alignItems="center"
        // isIndeterminate
        id="cringe"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        // label="Cringe"
        // icon={<FavoriteOutlined size="24" />}
        // checkedIcon={<FavoriteFilled size="24" />}
      />
    </>
  )
}

export const Playground = Template.bind({})
Playground.args = {}
