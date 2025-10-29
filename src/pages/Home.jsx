import './Home.css'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/weicheng-yuan-a02730328/' },
]

function Home() {
  return (
    <section className="home">
      <header className="home__intro">
        <p className="home__eyebrow">Hello!</p>
        <h1>Weicheng Yuan</h1>
        <p className="home__lead">
          I'm a master student in Interactive Media Technology at KTH Royal Institute of Technology, Stockholm.
        </p>
      </header>

      <section className="home__section">
        <h2>About</h2>
        <p>
          UI/UX,
          game design,
          interactive design,
          front-end development.
        </p>
      </section>

      <section className="home__section">
        <h2>Contact</h2>
        <p>email: wyua@kth.se</p>
        <ul className="home__contact">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Home
