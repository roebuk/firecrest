import { FC, PropsWithChildren } from 'react'

export const Heading: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-4xl m-0 p-0">{children}</h1>
)
