import { FC, PropsWithChildren } from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

const skipId = 'main'

export const Scaffold: FC<PropsWithChildren> = ({ children }) => (
  <>
    {/* <SkipNavLink id={skipId}>Skip to content</SkipNavLink> */}
    <Header />
    {/* <SkipNavContent id={skipId} /> */}

    <main className="container mx-auto xl my-10">{children}</main>

    <Footer />
  </>
)
