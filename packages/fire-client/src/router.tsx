import { Home } from './features/home/home'
import ErrorPage from './features/error/error'
import { RaceDetail } from './features/race-detail/race-detail'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: '/event/:slug', element: <RaceDetail /> },
  {
    path: '/admin/event/:slug',
    lazy: async () => {
      const { Admin } = await import('./features/admin')

      return { Component: Admin }
    },
  },
])
