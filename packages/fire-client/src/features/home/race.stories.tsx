import type { Meta, StoryObj } from '@storybook/react'
import { Race } from './race'

const meta: Meta<typeof Race> = {
  component: Race,
}

export default meta
type Story = StoryObj<typeof Race>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Rac: Story = {
  render: () => <Race />,
}
