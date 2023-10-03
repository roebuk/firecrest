import { FC } from 'react'
import { GetEventsQuery, useGetEventsQuery } from '../../graphql/types'
import { LinkBox, LinkOverlay } from '../../components/link/Link'
import { Heading } from '../../components/heading/heading'
import { Helmet } from 'react-helmet-async'
import { getPageTitleSuffix } from '../../constants'

const currency = (amount: number) => {
  const pounds = Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  })

  return pounds.format(amount / 100)
}

type Event = GetEventsQuery['events'][number]

const RacePreview: FC<{ event: Event }> = ({ event }) => (
  <LinkBox>
    <div>
      <img
        className="rounded-xl"
        width="256"
        height="156"
        src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
      />

      <div className="flex flex-col px-3 py-2">
        <Heading as="h3">
          <LinkOverlay to={`/event/${event.slug}`}>{event.title}</LinkOverlay>
        </Heading>

        {event.races.at(0) && (
          <span>{currency(event.races.at(0)?.price ?? 0)}</span>
        )}

        <span>10km</span>

        <span>Sunday, 4th May, 2024</span>
      </div>
    </div>
  </LinkBox>
)

export const Home = () => {
  const { loading, error, data } = useGetEventsQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <Helmet>
        <title>{getPageTitleSuffix('Home')}</title>
      </Helmet>
      {/* <Link to="/admin/event/name">Admin</Link> */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {data?.events.map((event) => (
          <RacePreview key={event.id} event={event} />
        ))}
      </div>
    </>
  )
}
