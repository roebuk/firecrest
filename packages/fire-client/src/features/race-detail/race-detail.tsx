import { useParams } from 'react-router-dom'
import { Heading } from '../../components/heading/heading'
import { useGetRaceQuery } from '../../graphql/types'
import { LinkButton } from '../../components/link/Link'

export const RaceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const { loading, data, error } = useGetRaceQuery({
    variables: { getRaceId: slug ?? '' },
  })

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-black">
        <Heading>{data?.getRace.title}</Heading>
      </div>
      <div className="bg-black">
        Price
        <LinkButton to={''}>Buy</LinkButton>
      </div>
    </div>
  )
}
