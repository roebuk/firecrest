import { Heading } from '../heading/heading'
import { Link } from '../link/Link'

export const Header = () => (
  <div className="bg-sky-500">
    <header className="container mx-auto py-5">
      <Heading as="h2">
        <Link to="/">BEAST</Link>
      </Heading>
    </header>
  </div>
)
