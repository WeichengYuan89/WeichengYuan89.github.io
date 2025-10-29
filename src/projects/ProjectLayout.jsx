import './ProjectPage.css'
import { Link } from 'react-router-dom'

function ProjectLayout({ title, subtitle, year, heroImage, heroAlt, children }) {
  return (
    <article className="project">
      <header className="project__header">
        <div className="project__meta">
          <Link to="/" className="project__back">
            ← Back to home
          </Link>
          <span className="project__year">{year}</span>
        </div>
        <h1>{title}</h1>
        {subtitle ? <div className="project__subtitle">{subtitle}</div> : null}
      </header>

      {heroImage ? (
        <div className="project__hero">
          <img src={heroImage} alt={heroAlt} />
        </div>
      ) : null}

      <div className="project__body">{children}</div>
    </article>
  )
}

export default ProjectLayout
