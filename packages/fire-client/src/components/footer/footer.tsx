import { Heading } from '../heading/heading'
import { Link } from '../link/Link'

export const Footer = () => (
  <div className="">
    <footer className="container mx-auto py-10 border-t border-gray-400">
      <div className="flex justify-between">
        <div>
          <Heading as="h2">FitNotes</Heading>
          <div className="flex flex-col gap-2">
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">FAQs</Link>
            <Link to="/contact">Accessibility</Link>
            <Link to="/contact">Terms</Link>
            <Link to="/contact">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex gap-5">
          <span>Instragram</span>
          <span>Threads</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </footer>
  </div>
)
