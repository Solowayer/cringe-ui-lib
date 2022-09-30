import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Panel } from '../components'

export default {
  title: 'Components/Accordion/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

const content =
  'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.'

export const Playground = Template.bind({})
Playground.args = { title: 'Cringe', subTitle: 'SubCringe', content: content }
