import { ButtonHTMLAttributes, ReactNode } from 'react'

type BP = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'disabled' | 'type' | 'onClick'
>

type ButtonProps = {
  children: ReactNode
  loading?: boolean
  fullWidth?: boolean
} & BP

const baseStyles = ({ fullWidth }: { fullWidth?: boolean }) =>
  `rounded-md px-4 py-2 leading-5 cursor-pointer text-base font-semibold focus-visible:ring ${
    fullWidth ? `w-full` : ``
  }`

export const PrimaryButton = ({
  children,
  fullWidth,
  ...buttonProps
}: ButtonProps) => (
  <button
    className={`${baseStyles({ fullWidth })} bg-sky-600 text-white`}
    type="button"
    {...buttonProps}
  >
    {children}
  </button>
)

export const SecondaryButton = ({
  children,
  fullWidth,
  ...buttonProps
}: ButtonProps) => (
  <button
    className={`${baseStyles({
      fullWidth,
    })} border border-sky-600 text-sky-600`}
    type="button"
    {...buttonProps}
  >
    {children}
  </button>
)
