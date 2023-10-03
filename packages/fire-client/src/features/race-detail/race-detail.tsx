import { useParams } from 'react-router-dom'
import { Heading } from '../../components/heading/heading'
import { LinkButton } from '../../components/link/Link'
import { useGetEventBySlugQuery } from '../../graphql/types'
import { Helmet } from 'react-helmet-async'
import { getPageTitleSuffix } from '../../constants'

export const RaceDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const { loading, data, error } = useGetEventBySlugQuery({
    variables: { slug: slug ?? '' },
  })

  if (loading) return <h1>Loading</h1>
  if (error || !data?.getEventBySlug) return <h1>Error</h1>

  const { title } = data.getEventBySlug

  return (
    <>
      <Helmet>
        <title>{getPageTitleSuffix(title)}</title>
      </Helmet>

      <div className="flex gap-6">
        <div className="basis-3/4">
          <Heading>{title}</Heading>

          <img src="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3272&q=80" />
        </div>
        <div className=" basis-1/4">
          <span className="font-bold text-4xl">£29</span>
          <LinkButton fullWidth to={''}>
            Enter
          </LinkButton>
        </div>
      </div>
    </>
  )
}
