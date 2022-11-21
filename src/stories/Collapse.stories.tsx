import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Collapse } from '../components'

export default {
  title: 'Components/Collapse',
  component: Collapse,
} as ComponentMeta<typeof Collapse>

const content =
  'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.'

const Template: ComponentStory<typeof Collapse> = () => {
  const [isExpanded, setExpanded] = React.useState(false)
  return (
    <>
      <Collapse
        onClick={() => setExpanded(!isExpanded)}
        expanded={isExpanded}
        title="Cringe"
        subTitle="SubCringe"
        content={content}
      />
    </>
  )
}

export const Playground = Template.bind({})
Playground.args = {}
