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
  paragraphOne:
    "Je suis un étudiant à l'École de technologie supérieure en génie logiciel à Montréal. En hiver 2021, j'ai complété ma technique en informatique au Collège de Rosemont. Durant mes études et mes projets informatiques, j'ai acquis plusieurs connaissances dans le domaine de la programmation.",
  paragraphTwo: 'Il me fait plaisir de vous présenter mes projets.',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'progression.png',
    title: 'Progression',
    info: 'Cette application est un logiciel libre qui permet de compiler et d’exécuter le code transmis par un étudiant pour un exercice donné, puis de comparer les résultats obtenus aux résultats attendus.',
    info2:
      "Ma contribution à Progression s'est faite dans le cadre d'un stage où j’ai pu pratiquer plusieurs méthodes de travail.",
    info3: '#Docker #Lumen #Vue.js #PHPUnit #PHP #H-2021',
    info5:
      'https://ameqenligne.com/share/64428/article/education/niveau/Coll%C3%A9gial/2/885951/Un-exerciseur-de-programmation-en-developpement-au-College-de-Rosemont-grace-au-programme-NovaScience-.html',
    url: 'https://progression.dti.crosemont.quebec/dev/#/',
    repo: 'https://git.dti.crosemont.quebec/progression', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drive.gif',
    title: 'Drive App',
    info: "Cette application sur Android utilise un API pour transmettre les fichiers d'un utilisateur à leur drive personnel.",
    info2:
      "Le backend permet de décoder les fichiers et de les sauvegarder dans le répertoire demandé par l'utilisateur.",
    info4: '#Node.js #MongoDB #JavaScript #Java #H-2021',
    info5: '',
    url: '',
    repo: 'https://github.com/hugobarou/drive-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'echange.png',
    title: 'Échange de services',
    info: 'Le concept de ce projet est basé sur les applications connues comme UberEats, Postmate ou DoorDash.',
    info2:
      'Son objectif principal est de faciliter la communication et la recherche de petits services proposés proche de chez vous.',
    info3:
      "J’ai appliqué et pratiqué les méthodes Agiles et Scrum durant le développement de l'application.",
    info4: '#MySQL #React.js #Node.js #Express.js #JavaScript #A-2020',
    info5: '',
    url: '',
    repo: 'https://gitlab.com/hugobarou/echange-de-services', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'favoris.png',
    title: 'Favoris',
    info: "Une application web pour la gestion des favoris d'un utilisateur.",
    info2: 'Développée avec Visual Studio comme projet de session au Collège de Rosemont.',
    info3: '#ASP.NET #MySQL #C# #A-2020',
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
  email: 'hugo.barou.1@ens.etsmtl.ca',
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
