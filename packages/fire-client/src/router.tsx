import { Home } from './features/home/home'
import ErrorPage from './features/error/error'
import { RaceDetail } from './features/race-detail/race-detail'
import { createBrowserRouter } from 'react-router-dom'
import { Scaffold } from './components/scaffold/scaffold'

export const router = createBrowserRouter([
  {
    element: <Scaffold />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/event/:slug', element: <RaceDetail /> },
      {
        path: '/admin/event/:slug',
        lazy: async () => {
          const { Admin } = await import('./features/admin')

          return { Component: Admin }
        },
      },
    ],
  },
])
