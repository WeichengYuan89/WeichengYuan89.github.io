import ProjectLayout from './ProjectLayout.jsx'

function ListeningWall() {
  return (
    <ProjectLayout
      title="Listening Wall"
      subtitle="Community storytelling mural that captures voices and diffuses them as layered textures."
      year="2022"
      heroImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Interactive mural with embedded speakers and lights"
    >
      <p>
        Listening Wall is a portable installation commissioned by neighborhood libraries. Visitors record memories,
        poems, or sound fragments directly into the mural; the system loops and harmonizes their contributions,
        gradually composing a collective sound quilt that plays back through embedded speakers and haptic panels.
      </p>

      <p>
        Every evening the recordings are archived and uploaded to an open web portal where locals can continue adding
        remixes or captions. The mural&apos;s LED matrix reflects the density and sentiment of the day&apos;s stories,
        shifting colors based on real-time analysis.
      </p>

      <section>
        <h2>Process</h2>
        <ul className="project__list">
          <li>Designed modular audio capture units that run on battery or mains power</li>
          <li>Implemented sentiment-aware lighting cues using lightweight ML models</li>
          <li>Produced workshops teaching participants how to record and mix their own pieces</li>
        </ul>
      </section>

      <section>
        <h2>Toolbox</h2>
        <ul className="project__tags">
          <li className="project__tag">Unity</li>
          <li className="project__tag">TouchDesigner</li>
          <li className="project__tag">Teensy</li>
          <li className="project__tag">Community Workshops</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}

export default ListeningWall
