import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Portfolio', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: "Un site web pour présenter mes projets et ceux auxquels j'ai contribué.", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, je suis',
  name: 'Hugo Barou',
  subtitle: 'Developpeur Full Stack',
  cta: 'À propos',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Je suis un étudiant de l'École de technologie supérieure en génie logiciel à Montréal. En 2021, j'ai complété ma technique en informatique de gestion au Collège de Rosemont. Durant mes études et mes projets fait dans mes temps libres, j'ai acquis plusieurs connaissances qui sont utiles pour un développeur Full Stack.",
  paragraphTwo: "",
  paragraphThree: "",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'progression.png',
    title: 'Progression',
    info: 'Progression est un logiciel libre qui vise à être intégré à la plateforme Moodle afin de permettre aux enseignants de suivre la progression de leurs étudiants sur les exercices qu’ils auront créés pour leurs cours.',
    info2: "Cette application permet de compiler et d’exécuter le code transmis par l’étudiant pour un exercice donné, puis de comparer les résultats obtenus aux résultats attendus.",
    info3: "Ma contribution à Progression c'est fait dans le cadre d'un stage où j’ai pu pratiquer plusieurs méthodes de travail et appliquer les normes de la programmation.",
    info4: '#Docker #Lumen #Vue.js #PHPUnit #PHP',
    info5: 'https://ameqenligne.com/share/64428/article/education/niveau/Coll%C3%A9gial/2/885951/Un-exerciseur-de-programmation-en-developpement-au-College-de-Rosemont-grace-au-programme-NovaScience-.html',
    url: 'https://progression.dti.crosemont.quebec/dev/#/',
    repo: 'https://git.dti.crosemont.quebec/progression', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drive.gif',
    title: 'Drive App',
    info: "Une application sur android qui utilise un API pour transmettre les fichiers d'un utilisateur à leur drive personnel.",
    info2: "Le back end permet de décoder les fichiers et de les sauvegarder dans le répertoire demandé par l'utilisateur.",
    info3: 'Développer avec Android Studio comme project de session au Collège de Rosemont.',
    info4: '#Node.js #MongoDB #JavaScript #Java #JWT',
    info5: '',
    url: '',
    repo: 'https://github.com/hugobarou/drive-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'echange.png',
    title: 'Échange de services',
    info: 'Un projet dont le concept a été basé sur les applications connues comme UberEats, Postmate ou DoorDash.',
    info2: "Son objectif principal est de facilité la communication et la recherche de petit service proposé proche de chez vous.",
    info3: "J’ai pu appliquer et pratiquer les méthodes Agiles et Scrum durant le développement de l'application.",
    info4: '#MySQL #React.js #Node.js #JavaScript',
    info5: '',
    url: '',
    repo: 'https://gitlab.com/hugobarou/echange-de-services', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'favoris.png',
    title: 'Favoris',
    info: "Une simple application web pour la gestion des favoris d'un utilisateur.",
    info2: 'Développer avec Visual Studio comme projet de session au Collège de Rosemont.',
    info3: '#ASP.NET #MySQL #C#',
    info4: '',
    info5: '',
    url: '',
    repo: 'https://github.com/hugobarou/favoris', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  tel: '',
  btn: '',
  email: 'hugo.barou@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hugobarou',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hugo-barou/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://gitlab.com/hugobarou',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
