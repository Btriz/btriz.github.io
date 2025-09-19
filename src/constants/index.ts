import { blip, mercadolivre, puc, trybe } from '../assets/images';
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  python,
} from '../assets/icons';

export const skills = [
  [
    {
      imageUrl: motion,
      name: 'Motion',
      type: 'Animation',
    },
    {
      imageUrl: tailwindcss,
      name: 'Tailwind',
      type: 'Frontend',
    },
    {
      imageUrl: nodejs,
      name: 'Node.js',
      type: 'Backend',
    },
    {
      imageUrl: express,
      name: 'Express',
      type: 'Backend',
    },
    {
      imageUrl: python,
      name: 'Python',
      type: 'Backend',
    },
    {
      imageUrl: typescript,
      name: 'TypeScript',
      type: 'Frontend',
    },
    {
      imageUrl: mongodb,
      name: 'MongoDB',
      type: 'Database',
    },
    {
      imageUrl: nextjs,
      name: 'Next.js',
      type: 'Frontend',
    },
  ],
  [
    {
      imageUrl: git,
      name: 'Git',
      type: 'Version Control',
    },
    {
      imageUrl: github,
      name: 'GitHub',
      type: 'Version Control',
    },
    {
      imageUrl: html,
      name: 'HTML',
      type: 'Frontend',
    },
    {
      imageUrl: css,
      name: 'CSS',
      type: 'Frontend',
    },
    {
      imageUrl: javascript,
      name: 'JavaScript',
      type: 'Frontend',
    },
    {
      imageUrl: react,
      name: 'React',
      type: 'Frontend',
    },
    {
      imageUrl: redux,
      name: 'Redux',
      type: 'State Management',
    },
    {
      imageUrl: sass,
      name: 'Sass',
      type: 'Frontend',
    },
  ],
];

export type Experience = {
  company_name: string | { defaultValue: string; key: string };
  date: string;
  icon: string;
  title: string | { defaultValue: string; key: string };
  points: { defaultValue: string; key: string }[];
  color: string;
  type: 'work' | 'education';
};

export const experiences: Experience[] = [
  {
    title: 'Frontend Software Developer',
    company_name: 'Mercado Livre',
    icon: mercadolivre,
    date: 'Jul 2022 - Nov 2024',
    points: [
      { defaultValue: 'Development of scalable interfaces with React.js, JavaScript, and TypeScript integrated into CI/CD pipelines and definition/monitoring of product metrics in a high-availability environment.', key: 'experiences.meli.point1' },
      { defaultValue: 'Experience with observability tools (Datadog, New Relic, Grafana) and conducting post-incident analyses.', key: 'experiences.meli.point2' },
      { defaultValue: 'Collaboration with international teams, including technical communication in Spanish.', key: 'experiences.meli.point3' },
    ],
    color: '#AEB2E7',
    type: 'work',
  },
  {
    title: 'Chatbot Developer',
    company_name: 'Take Blip',
    icon: blip,
    date: 'Jan 2021 - Jul 2022',
    points: [
      { defaultValue: 'Development, maintenance, and evolution of intelligent conversational flows using JavaScript within the Blip platform, focusing on service automation and omnichannel integration, especially with WhatsApp Business API.', key: 'experiences.blip.point1' },
    ],
    color: '#add8e6',
    type: 'work',
  },
  {
    title: { defaultValue: 'Information Systems Bachelor', key: 'experiences.puc.title' },
    company_name: { defaultValue: 'Pontifical Catholic University of Minas Gerais', key: 'experiences.puc.company' },
    icon: puc,
    date: '2024 - 2027',
    points: [
      { defaultValue: 'Participating in a extension project focused on building a Data Warehouse for a real organization. Activities involve requirements analysis, multidimensional modeling, data integration, web prototype development for analytical visualization, and agile methodology application with continuous validation alongside partners. ', key: 'experiences.puc.point1' },
    ],
    color: '#AEE7DD',
    type: 'education',
  },
  {
    title: { defaultValue: 'Full Stack Web Development', key: 'experiences.trybe.title' },
    company_name: 'Trybe',
    icon: trybe,
    date: '2021 - 2022',
    points: [
      { defaultValue: 'Intensive training covering front-end and back-end technologies, computer science fundamentals, software engineering principles, agile methodologies, and soft skills.', key: 'experiences.trybe.point1' },
    ],
    color: '#AEE7B8',
    type: 'education',
  },
];

export const socialLinks = {
  contact: {
    name: 'Contact',
    iconUrl: '',
    link: '/contact',
  },
  github: {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Btriz',
  },
  linkedin: {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/fagundesbeatriz/',
  },
};

export const projects = [
  {
    iconUrl: '',
    theme: '',
    name: '',
    description: '',
    link: '',
  },
];
