import { FC } from 'react'
import { GetRacesQuery, useGetRacesQuery } from '../../graphql/types'
import { LinkBox, LinkOverlay } from '../../components/link/Link'

type Race = GetRacesQuery['races'][number]

const RacePreview: FC<{ race: Race }> = ({ race }) => (
  <LinkBox>
    <div className="border border-slate-500 rounded-md">
      <img
        width="256"
        height="156"
        src="https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
      />

      <div className="flex flex-col px-3 py-2">
        <LinkOverlay to={`/event/${race.slug}`}>{race.title}</LinkOverlay>
        <span>Lincoln</span>
        <span>£26</span>
      </div>
    </div>
  </LinkBox>
)

export const Home = () => {
  const { loading, error, data } = useGetRacesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <div className="grid gap-6 grid-cols-4">
      {/* <Link to="/admin/event/name">Admin</Link> */}
      {data?.races.map((race) => (
        <RacePreview key={race.id} race={race} />
      ))}
    </div>
  )
}
