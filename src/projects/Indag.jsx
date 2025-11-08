import ProjectLayout from "./ProjectLayout";

function Indag(){
    return(
        <ProjectLayout
        title="indago - mobile app & physical collar"
        subtitle="A interaction design walkthrough of double diamond process focusing on interdependence in pet caring."
        year="2024"
        // heroImage="/projectsImages/Indag/image.png"
        // heroAlt="Indag Project Overview"
      >
        <section>
        <p className="three-act__wrap">
            <img
              className="project__image--left" 
              width={"35%"}
              src="/projectsImages/Indag/image.png"
              alt="poster"
            />
            <p>
                Working with the theme of designing for interdependent living, exploring how technologies
                might look different when we move away from a culture that organises arond independence
                toward one that embraces and congnises importance of interdependence between people.
            </p>
            <p>
              This project aims to solve the problem of dog owners needing reliable assistance 
              in caring for their dogs, particularly through enhancing the connection and trust 
              between owners and pet sitters.
            </p>
        </p>
        </section>
             <p>
            Indago consists of two parts, an app and a physical collar with sensors.
            </p>
            <img 
            src="/projectsImages/Indag/Frame 9.png"
            />
        <section>
            <h2>Design Workbook</h2>
            <div className="pdf-viewer" style={{ width: "100%", height: "80vh" }}>
                <iframe
                  src="/Workbook.pdf#view=FitH"
                  title="Indag Design Workbook"
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
            </div>
        </section>
        <section>
        <h2>Toolbox</h2>
        <ul className="project__tags">
          <li className="project__tag">Figma</li>
          <li className="project__tag">User Research Methods</li>
          <li className="project__tag">Ideation</li>
        </ul>
      </section>

        </ProjectLayout>
    )
}

export default Indag
