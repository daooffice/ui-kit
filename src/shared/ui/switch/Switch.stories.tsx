import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Switch } from './switch'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Switch',
  component: Switch
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Story1 = Template.bind({})

Story1.args = {
  switchColor: 'bg-red-500'
}
