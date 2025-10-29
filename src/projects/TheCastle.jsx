import ProjectLayout from './ProjectLayout.jsx'

function TheCastle() {
  return (
    <ProjectLayout
      title="The Castle"
      subtitle={
        <>
          A Puzzle Adventure Game on Unity. Read the full paper:{' '}
          <a
            className="project__link"
            href="https://www.researchgate.net/publication/382405312_Design_and_Implementation_of_Puzzle_Adventure_Game_Based_on_Unity"
            target="_blank"
            rel="noreferrer"
          >
            Design and Implementation of Puzzle Adventure Game Based on Unity
          </a>
          .
        </>
      }
      year="2023"
      heroImage="/public/projectsImages/TheCastle/TheCastle0.png"
      heroAlt="Main Images"
    >
      <p>
        The castle is a puzzle adventure game design and implement by myself 
        as a bachelor degree project. In this game, you play as a little boy 
        start the journey to the castle to save the princess. You can experience 
        thrilling adventure in a mysterious world, and achieve a sense of accomplishment 
        by solving puzzles and overcoming obstacles.
      </p>
      <p>
        The game design is carried out through multiple aspects such as game art 
        style, plot, sound effects, and game puzzles to provide players with an 
        interesting gameplay experience. For the implementation part of the game, 
        various plugins and functions of the Unity engine are integrated to complete 
        the development of the game system, such as using Unity’s navigation system 
        to bake navigation meshes and implement automatic pathfinding for game characters. 
        The animation state machine is used to arrange and control game character animations, 
        and the Unity event system is used to implement click-based interactive functions 
        in the game. At the same time, optimization was carried out based on the test results, 
        improving the experience of user interface and the stability of game program, further 
        enhancing the player’s gameplay experience.
      </p>

      <section>
        <img
          src="/projectsImages/TheCastle/TheCastle1.png"
          alt="In Game ScreenShot"
        />
        <h2>Game Design</h2>

        <h3>Design Overview</h3>
          <p>
            The overall game design consists of basic art design, narrative design, and puzzles 
            design in gameplay. The art of the scenes and environments serve as stages for creating 
            ambiance in story. And the narrative of game primarily involves environmental storytelling, 
            with the different scenes serving as the central element of a “three-act” narrative structure. 
            Puzzles design play a role in core game play mechanics when player experience the game.
          </p>

          <h3>Scene Design</h3>
          <p>
            The game comprises a total of six distinct scenes: the room, the parlor, the village, 
            the forest, the graveyard, and the castle. All these scenes are constructed using low-poly 
            style assets. To create an atmosphere conducive to adventure and puzzle-solving gameplay, 
            each scene’s layout and vibe is meticulously integrated into the narrative, allowing players 
            to immerse themselves in a sense of adventure and novelty as they explore each setting. 
          </p>

          <p>
            The indoor scenes are designed with a minimalist aesthetic that aligns with the low-poly style. 
            Scenes such as the village and forest vividly exemplify the characteristics of the low-polygon style, 
            featuring flat, soft lighting effects where objects within the scenes have distinct edges, and the 
            overall scenery leans towards abstraction.
          </p>

          <img
          src="/projectsImages/TheCastle/TheCastle2.png"
          alt="Scene Design"
          />

          <h3>Narrative Design</h3>
          <p>
            The narrative design of a game is of paramount importance as it directly influences player immersion 
            and their ability to empathize with in-game characters. The pacing of gameplay significantly impacts 
            player immersion, and a well-balanced game narrative can effectively guide player emotions and entice 
            them to continue playing.
          </p>
          <p>
            In this game, players assume the role of a young boy in a small village, who, guided by others, decides 
            to venture beyond the village in a quest to reach the castle and rescue the princess. Starting the journey 
            from his own bedroom, little venturer traverses through the village, forest, and eerie graveyard, engaging 
            with diverse characters along the way, unraveling puzzles within each scene, and ultimately arriving at the 
            castle to uncover its secrets and reveal the truth.
            The overall narrative design of the game takes a summarily illustrative approach, in line with the low-poly
             visual style in the game. The plot emphasizes character development and the overarching storyline, without 
             becoming overly entangled in minutiae. The fable-like narrative design aims for simplicity in story structure 
             while remaining rich in expressiveness, aiming to evoke strong emotional connection from players in a metaphorical 
             narrative way.
          </p>

          <h3>Three-Act Narrative</h3>
          <p className="three-act__wrap">
            <img
              className="project__image--right"
              src="/projectsImages/TheCastle/TheCastle3.png"
              alt="Three-act structure diagram"
            />
            In order to tap into player’s emotions, a well-structured narrative pace is indispensable. For those desiring a 
            more profound emotional experience, a sequence of emotional fluctuations and accumulations is necessary. The 
            narrative pattern of this game adopts a three-act structure, which divides the storytelling into three distinct phases:
          </p>
          <p>
            (1). The first act typically comprises one to two small fluctuations, providing context and background to the story and arousing player interest.
            </p>
          <p>
            (2). The second act introduces a primary obstacle, prompting players to tackle challenges and further immersing them in the narrative.
          </p>
          <p>
            (3). The third act takes players from the emotional low point to the highest peak, portraying the protagonist’s
            triumph over adversity through courage and determination. By contrasting with the second act, this phase allows
            players to release the emotions they have accumulated.
          </p>
          <p>
            Within this game, environmental storytelling serves as the primary narrative mechanism, with the narrative subject 
            being the environmental settings in which the player-controlled protagonist is situated. These settings metaphorically 
            symbolize the protagonist’s circumstances and emotions.
          </p>

      </section>

      <section>
        <h2>Toolbox</h2>
        <ul className="project__tags">
          <li className="project__tag">Unity 3D</li>
          <li className="project__tag">C#</li>
          <li className="project__tag">Game Design</li>
        </ul>
      </section>
    </ProjectLayout>
  )
}

export default TheCastle
