import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

import { AiOutlineArrowLeft as ArrowIcon } from 'react-icons/ai'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Story: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Story.bind({})
Primary.args = {
  children: 'Primary',
  primary: true
}

export const Secondary = Story.bind({})
Secondary.args = {
  children: 'Secondary'
}

export const Small = Story.bind({})
Small.args = {
  children: 'Small',
  size: 'small'
}

export const Medium = Story.bind({})
Medium.args = {
  children: 'Medium',
  size: 'medium'
}

export const Large = Story.bind({})
Large.args = {
  children: 'Large',
  size: 'large'
}

export const WithIcon = Story.bind({})
WithIcon.args = {
  children: 'WithIcon',
  primary: true,
  icon: <ArrowIcon />
}
