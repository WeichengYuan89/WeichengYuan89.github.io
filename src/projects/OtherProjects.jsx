import ProjectLayout from "./ProjectLayout";

function OtherProjects() {
  return (
    <ProjectLayout
      title="other projects"
      subtitle="Here are other projects of mine."
      year="2024-2025"
    >
      <section>
        <h2>Chronoicles of Shadows —  2D Puzzle Game</h2>
        <img 
        src="/projectsImages/OtherProjects/Cover.jpg"
        />
        <p>
            Set in the Ming Dynasty of China, the player takes on the role of a registrar working 
            in the Imperial Household's Yellow Register Chamber. Tasked with investigating a mysterious 
            case — a missing page from an official household(Yellow register) — the player must uncover the 
            truth behind the disappearance.
        </p>
        <p>
            To do so, they will use a special oil lamp that allows them to retrace time and 
            observe shadows left behind in different scenes. By gathering clues, identifying 
            shadow identities, and piecing together fragmented memories, the player will eventually 
            reveal the true culprit behind the case.
        </p>
        <p>
          Play it on itch! :{' '}
          <a
            className="project__link"
            href="https://coodey.itch.io/chroniclesofshadows"
            target="_blank"
            rel="noreferrer"
          > https://coodey.itch.io/chroniclesofshadows
          </a>
          </p>
      </section>

      <section>
        <h2>WHAT IS THE COLOUR OF THAT MUSIC EXCERPT</h2>
        <h3>Abstract</h3>
        <p>
            This research assesses the universality of the associations of colour and jazz music 
            performed by John Coltrane. Participants were asked to listen to 30-second excerpts 
            of Coltrane’s songs, each representing specificemotional cues, after which they were 
            asked to match them to predefined colour hues. The results of the study show consistency 
            of music colour association across demographic groups, demonstrating a universal relationship 
            between music and colour perception. These findings correlate with previous studies, suggesting 
            that humans have a collective understanding of music and colour. Research such as this could be 
            applied in fields such as education and musical therapy. The results of this study could be validated 
            in the future with an expansion of genre and demographic.
        </p>
        <img 
        src="/projectsImages/OtherProjects/image.png"
        />
        <h3>Result</h3>
        <p>
            The results demonstrate a strong universality in music and colour association. Across all participants, 
            colder were chosen for excerpts dominated by slower tempo, while warmer hues were chosen for more upbeat 
            excerpts. This suggests a shared participant response to these pieces of music, and that music-colour 
            associations transcend demographic background and individual differences.
        </p>
      </section>

    </ProjectLayout>
  )
}

export default OtherProjects