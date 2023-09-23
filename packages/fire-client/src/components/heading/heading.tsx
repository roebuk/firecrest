import { FC, PropsWithChildren, createElement, useMemo } from 'react'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const sizeMap: Record<NonNullable<HeadingProps['as']>, string> = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-1xl',
  h5: 'text-xl',
  h6: 'text-md',
} as const

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  as = 'h1',
  children,
}) => {
  const textSize = useMemo(() => sizeMap[as], [as])

  return createElement(as, {
    children,
    className: `${textSize} m-0 p-0`,
  })
}
