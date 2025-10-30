import ProjectLayout from './ProjectLayout.jsx'

function Telia() {
  return (
    <ProjectLayout
      title="inclusive ux design with begripsam"
      subtitle="Inclusive UX design project, Taking Telia as a study case, collaborating with Begripsam to enhance digital accessibility."
      year="2025"
      heroImage="/projectsImages/Telia/Telia0.jpg"
      heroAlt="Telia Project Overview"
    >
      <h2>Background</h2>
      <p>
       Digital accessibility is becoming increasingly important as more and more services move into the 
       digital landscape and as technology plays a central role in today's society. For telecommunication 
       companies such as Telia, ensuring that services are accessible to all users is not only a matter of 
       compliance to EU laws, but also a greater responsibility to society. When done right, accessibility 
       can drive innovation and improve solutions for all (Barnes, 2011). However, through speaking with experts, 
       within accessibility from Begripsam, it has become apparent that this can’t be taken for granted and provided 
       multiple areas of improvement.
      </p>

      <p>
        Each station receives its own sonic character while staying in tune with the system-wide motif. Riders can scan
        QR codes to listen back to archived mixes, contribute short voice notes, and learn about the data stewardship
        practices behind the project.
      </p>

      <section>
        <h2>Method</h2>
        <h3>Web Accessibility Evaluation</h3>
        <p>
            We looked into Telia’s web service and evaluated their accessibilty with Google Lighthouse and Wave to see if 
            it meets the WCAG standard.
            This stage was a challenge for us. Although we tried to identify problems, Telia's website was well-designed 
            according to the WCAG 2.0 guidelines. While the tool indicated that the website is accessible, we found that 
            the Estonian version is more accessible compared to the Swedish version.
            This raised a question for us: Is the tool actually accurate? Although it follows the standard guidelines, it 
            does not seem to be fully accessible for a diverse group of users.
        </p>
      </section>

      <section>
        <h2>Toolbox</h2>
        <ul className="project__tags">
          <li className="project__tag">UI/UX</li>
          <li className="project__tag">Inclusive Design</li>
          <li className="project__tag">Accessibility Evaluation</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}

export default Telia
