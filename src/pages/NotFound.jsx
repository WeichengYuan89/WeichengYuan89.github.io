import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/">Back to home</Link>
    </section>
  )
}

export default NotFound
