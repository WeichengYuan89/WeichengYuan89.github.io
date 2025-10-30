import './Home.css'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/weicheng-yuan-a02730328/' },
]

function Home() {
  return (
    <section className="home">
      <header className="home__intro">
        {/* <p className="home__eyebrow">Hello!</p> */}
        <h1>weicheng yuan</h1>
        <p className="home__lead">
          I'm a master student in Interactive Media Technology at KTH Royal Institute of Technology.
        </p>
      </header>

      <section className="home__section">
        <h2>about</h2>
        <p>
          ui/ux,
          game design,
          interactive design,
          front-end development.
        </p>
      </section>

      <section className="home__section">
        <h2>contact</h2>
        <p>email: wyua@kth.se</p>
        <p>
          linkedIn: {' '}
          <a
            className="project__link"
            href="https://www.linkedin.com/in/weicheng-yuan-a02730328/"
            target="_blank"
            rel="noreferrer"
          >
            weicheng yuan
          </a>
        </p>
        {/* <ul className="home__contact">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul> */}
      </section>
    </section>
  )
}

export default Home
