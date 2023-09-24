import { Heading } from '../heading/heading'
import { Link } from '../link/Link'

export const Footer = () => (
  <div className="bg-black">
    <footer className="container mx-auto py-20 text-white">
      <Heading as="h2">FitNotes</Heading>
      <div className="flex flex-col gap-2">
        <Link to="/contact">Contact Us</Link>
        <Link to="/contact">FAQs</Link>
        <Link to="/contact">Accessibility</Link>
        <Link to="/contact">Terms</Link>
        <Link to="/contact">Privacy Policy</Link>
      </div>
    </footer>
  </div>
)
