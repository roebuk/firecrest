import { FC } from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { Outlet } from 'react-router-dom'

export const Scaffold: FC = () => (
  <>
    <Header />

    <main className="container mx-auto xl my-10">
      <Outlet />
    </main>

    <Footer />
  </>
)
