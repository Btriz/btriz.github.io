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
