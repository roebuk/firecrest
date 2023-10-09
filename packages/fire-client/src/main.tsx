import { StrictMode } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { createRoot } from 'react-dom/client'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

const link = createHttpLink({
  uri: 'https://localhost:4000/graphql',
  credentials: 'include',
})

const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  link,
})

/** @ts-expect-error - help */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ApolloProvider>
  </StrictMode>,
)
