import TheCastle from './TheCastle.jsx'
import Telia from './Telia.jsx'
import Chameleon from './Chameleon.jsx'
import ListeningWall from './ListeningWall.jsx'
import OtherProjects from './OtherProjects.jsx'
import Indag from './Indag.jsx'

export const projects = [
  {
    slug: 'TheCastle',
    title: 'game design - the castle',
    description: 'The Castle — A Puzzle Adventure Game on Unity',
    component: TheCastle,
  },
  {
    slug: 'Inclusive-UX-Design',
    title: 'inclusive ux design with begripsam',
    description: 'Inclusive UX design project collaborating with Begripsam to enhance digital accessibility.',
    component: Telia,
  },
  {
    slug: 'Chameleon',
    title: 'physical interaction - chameleon robot',
    description: 'Physical Interaction Project',
    component: Chameleon,
  },
  {
    slug: 'Indago',
    title: 'dog carer mobile app design',
    description: 'Indago - mobile app and physical dog collar design',
    component: Indag,
  },
  {
    slug: 'Other-Projects',
    title: '/other projects',
    description: 'Other projects of mine',
    component: OtherProjects,
  },
]
