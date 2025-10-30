import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { projects } from './projects/projects.js'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="layout">
      <button
        type="button"
        className="layout__menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="site-sidebar"
        onClick={toggleMenu}
      >
        Menu
      </button>

      <div
        className={`layout__overlay ${menuOpen ? 'layout__overlay--visible' : ''}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        id="site-sidebar"
        className={`layout__sidebar ${menuOpen ? 'layout__sidebar--open' : ''}`}
        aria-label="Site navigation"
      >
        <div className="layout__brand">
          <NavLink to="/" className="layout__title" onClick={closeMenu}>
            weicheng&nbsp;yuan
          </NavLink>
          {/* <p className="layout__tagline">袁炜程</p> */}
        </div>

        <nav className="layout__nav">
          {/* <NavLink
            to="/"
            className={({ isActive }) => `layout__link${isActive ? ' layout__link--active' : ''}`}
            onClick={closeMenu}
          >
            About
          </NavLink> */}
          <p className="layout__section-label">/projects</p>
          {projects.map((project) => (
            <NavLink
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={({ isActive }) =>
                `layout__link layout__link--project${isActive ? ' layout__link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {project.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
