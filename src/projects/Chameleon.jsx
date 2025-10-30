import ProjectLayout from "./ProjectLayout";

function Chameleon() {
  return (
    <ProjectLayout
      title="robotic chameleon"
      subtitle="physical interaction design and realization"
      year="2025"
      //heroImage="/projectsImages/Chameleon/poster.png"
      //heroAlt="C"
    >
        <section>
        <p className="three-act__wrap">
            <img
              className="project__image--left" 
              width={"35%"}
              src="/projectsImages/Chameleon/poster.png"
              alt="chameleonPoster"
            />
            <p>---</p>
            <p>
                a non-verbal conversational robot that communicates only through movement, 
                light — no screens, no voices, just expressive body language.
            </p>
            <p>---</p>
            <p>
                a robot that attaches to the body and reacts to movement.
            </p>
            <p>---</p>
            <p>
                a robot that as your needy companion, with its own temper.
            </p>
        </p>
        </section>

        <section>
          <div className="project__video">
            <iframe
              src="https://www.youtube.com/embed/9apV00UbOxI"
              title="Chameleon project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
            <h2>Brainstorming</h2>
            <p>
                In the brainstorming stage, our team have used low-fi sketching 
                to convey how it would look when people wear it, 
                as well as showing to peers our concept for them to critique.
            </p>
            <p>
                And we also use parallel design during the initial stage of design. 
                The final concept was the convergence of two parallel ideas -- the 
                needy robot and the wearable robot on your neck.
            </p>
            <img 
            src="/projectsImages/Chameleon/brainstorm.png"
            alt="brainstorm sketches"
            width={"80%"}
            />
        </section>

        <section>
            <h2>Prototyping</h2>
            <h3>Low-Fi</h3>
            <p>
                we use cardboard to quickly prototype the shape and size of the robot,
                And we also use strings and cardboard for the tail to simulate the mechanism.
            </p>
            <p>
                For the light, we use simple LED lights, arduino circuit to simulate the light effect
                with chameleon's mood changes.
            </p>
            <img 
            src="/projectsImages/Chameleon/prototype.png"
            alt="low-fi prototype"
            />
            <h3>Low_Fi to High-Fi</h3>
            <img 
            src="/projectsImages/Chameleon/printing1.png"
            alt="prototyping process"
            />
        </section>

        <section>
            <h3>Structure</h3>
            <img
            src="/projectsImages/Chameleon/structure.png"
            alt="chameleon structure diagram"
            />
        </section>
        
        <section>
        <h2>Toolbox</h2>
        <ul className="project__tags">
          <li className="project__tag">Physical Interaction</li>
          <li className="project__tag">3D Printing</li>
          <li className="project__tag">Circuit Design</li>
        </ul>
      </section>

      </ProjectLayout>
  )
}

export default Chameleon;
