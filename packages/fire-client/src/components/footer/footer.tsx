import { Heading } from '../heading/heading'
import { Link } from '../link/Link'

export const Footer = () => (
  <div className="bg-black">
    <footer className="container mx-auto py-20 text-white">
      <Heading as="h2">FitNotes</Heading>
      <Link to="/contact">Contact Us</Link>
      {/*<Link to="/contact">FAQs</Link> */}
    </footer>
  </div>
)
