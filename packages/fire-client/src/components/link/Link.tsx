import { FC, PropsWithChildren } from 'react'
import { LinkProps, Link as ReactRouterLink } from 'react-router-dom'

export const Link: FC<PropsWithChildren<LinkProps>> = ({
  children,
  to,
  ...props
}) => (
  <ReactRouterLink
    className="hover:underline focus-visible:ring"
    to={to}
    {...props}
  >
    {children}
  </ReactRouterLink>
)

export const LinkButton: FC<PropsWithChildren<LinkProps>> = ({
  children,
  to,
  ...props
}) => (
  <ReactRouterLink
    className="border border-sky-600 text-sky-600 rounded-md px-4 py-2 leading-5 cursor-pointer text-base font-semibold focus-visible:ring"
    to={to}
    {...props}
  >
    {children}
  </ReactRouterLink>
)

/**
 * Use this to wrap around the large area
 */
export const LinkBox: FC<PropsWithChildren> = ({ children }) => (
  <div className="relative">{children}</div>
)

/**
 *
 */
export const LinkOverlay: FC<PropsWithChildren<LinkProps>> = ({
  children,
  to,
  ...props
}) => (
  <ReactRouterLink
    className="static z-0 before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full"
    to={to}
    {...props}
  >
    {children}
  </ReactRouterLink>
)
