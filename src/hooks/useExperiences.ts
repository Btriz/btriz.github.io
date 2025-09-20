import { useTranslation } from 'react-i18next';
import mercadolivre from '../assets/images/experiences/mercadolivre.png';
import blip from '../assets/images/experiences/blip.png';
import puc from '../assets/images/experiences/puc.png';
import trybe from '../assets/images/experiences/trybe.png';

type Experience = {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  points: string[];
  color: string;
  type: 'work' | 'education';
}

const useExperiences = (): Experience[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('experiences.meli.title', 'Frontend Software Developer'),
      company_name: 'Mercado Livre',
      icon: mercadolivre,
      date: 'Jul 2022 - Nov 2024',
      points: [
        t('experiences.meli.point1', 'Development of scalable interfaces with React.js, JavaScript, and TypeScript integrated into CI/CD pipelines and definition/monitoring of product metrics in a high-availability environment.'),
        t('experiences.meli.point2', 'Experience with observability tools (Datadog, New Relic, Grafana) and conducting post-incident analyses.'),
        t('experiences.meli.point3', 'Collaboration with international teams, including technical communication in Spanish.'),
      ],
      color: '#AEB2E7',
      type: 'work',
    },
    {
      title: t('experiences.blip.title', 'Chatbot Developer'),
      company_name: 'Take Blip',
      icon: blip,
      date: 'Jan 2021 - Jul 2022',
      points: [
        t('experiences.blip.point1', 'Development, maintenance, and evolution of intelligent conversational flows using JavaScript within the Blip platform, focusing on service automation and omnichannel integration, especially with WhatsApp Business API.'),
      ],
      color: '#add8e6',
      type: 'work',
    },
    {
      title: t('experiences.puc.title', 'Information Systems Bachelor'),
      company_name: t('experiences.puc.company', 'Pontifical Catholic University of Minas Gerais'),
      icon: puc,
      date: '2024 - 2027',
      points: [
        t('experiences.puc.point1', 'Participating in a extension project focused on building a Data Warehouse for a real organization. Activities involve requirements analysis, multidimensional modeling, data integration, web prototype development for analytical visualization, and agile methodology application with continuous validation alongside partners.'),
      ],
      color: '#AEE7DD',
      type: 'education',
    },
    {
      title: t('experiences.trybe.title', 'Full Stack Web Development'),
      company_name: 'Trybe',
      icon: trybe,
      date: '2021 - 2022',
      points: [
        t('experiences.trybe.point1', 'Intensive training covering front-end and back-end technologies, computer science fundamentals, software engineering principles, agile methodologies, and soft skills.'),
      ],
      color: '#AEE7B8',
      type: 'education',
    },
  ];
};

export type { Experience };
export default useExperiences;
