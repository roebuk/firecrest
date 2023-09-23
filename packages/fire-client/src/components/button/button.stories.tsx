import type { Meta, StoryObj } from '@storybook/react'

import { PrimaryButton, SecondaryButton } from './button'

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
}

export default meta
type Story = StoryObj<typeof PrimaryButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <PrimaryButton>Submit</PrimaryButton>,
}

export const Secondary: Story = {
  render: () => <SecondaryButton>Hello</SecondaryButton>,
}

export const FullWidth: Story = {
  render: () => <PrimaryButton fullWidth>Full Width</PrimaryButton>,
}
