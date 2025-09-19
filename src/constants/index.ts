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
  company_name: string;
  date: string;
  icon: string;
  title: string;
  points: string[];
  color: string;
  type: 'work' | 'education';
};

export const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company_name: 'Mercado Livre',
    icon: mercadolivre,
    date: 'Jul 2022 - Nov 2024',
    points: [
      'Desenvolvimento de interfaces escaláveis com React.js, JavaScript e TypeScript integradas à pipelines CI/CD e definição/monitoramento de métricas de produto em ambiente de alta disponibilidade.',
      'Atuação com ferramentas de observabilidade (Datadog, New Relic, Grafana) e condução de análises pós-incidente.',
      'Vivência em colaboração com equipes internacionais, incluindo comunicação técnica em espanhol.',
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
      'Desenvolvimento, manutenção e evolução de fluxos conversacionais inteligentes usando JavaScript dentro da plataforma Blip, com foco em automação de atendimento e integração omnichannel, especialmente com WhatsApp Business API.',
    ],
    color: '#add8e6',
    type: 'work',
  },
  {
    title: 'Information Systems Bachelor',
    company_name: 'Pontifícia Universidade Católica de Minas Gerais',
    icon: puc,
    date: '2024 - 2027',
    points: [
      'Participação em projeto de extensão voltado à construção de um Data Warehouse com foco em reduzir desperdícios na distribuição de alimentos. Atividades incluem diagnóstico de requisitos, modelagem multidimensional, integração de fontes de dados, construção de protótipo web para visualização analítica e aplicação de metodologia ágil com validação contínua junto ao parceiro.',
    ],
    color: '#AEE7DD',
    type: 'education',
  },
  {
    title: 'Full Stack Web Development',
    company_name: 'Trybe',
    icon: trybe,
    date: '2021 - 2022',
    points: [
      'Back-end',
      'Ciência da computação',
      'Engenharia de software',
      'Metodologias ágeis',
      'Habilidades comportamentais',

      // 'Developing and maintaining web applications using React.js and other related technologies.',
      // 'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      // 'Implementing responsive design and ensuring cross-browser compatibility.',
      // 'Participating in code reviews and providing constructive feedback to other developers.',
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
