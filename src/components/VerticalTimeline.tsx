import { motion } from 'framer-motion';

type Experience = {
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  title: string;
  points: string[];
  color?: string; // cor opcional para cada etapa
};

interface VerticalTimelineProps {
  experiences: Experience[];
}

const VerticalTimeline = ({ experiences }: VerticalTimelineProps) => (
  <div className="relative flex flex-col items-center w-full py-12">
    {/* Linha vertical central */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300 -translate-x-1/2 z-0" />

    <div className="flex flex-col gap-16 w-full z-10">
      {experiences.map((exp, idx) => {
        const isLeft = idx % 2 === 0;
        return (
          <div
            key={exp.company_name + exp.date}
            className={`
              relative flex flex-col md:flex-row items-center w-full
              ${isLeft ? 'md:justify-start' : 'md:justify-end'}
            `}
          >
            {/* Espaço para alinhar à esquerda/direita */}
            {isLeft && <div className="hidden md:block md:w-1/2" />}

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative bg-white/90 rounded-xl shadow-lg p-6 w-full md:w-[420px] border-l-4
                ${exp.color ? exp.color : 'border-blue-200'}
                ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}
                z-10
              `}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-bold text-blue-900">{exp.title}</h3>

                <span className="text-sm text-blue-400 font-mono mt-2 md:mt-0">{exp.date}</span>
              </div>

              <p className="text-blue-700 font-semibold">{exp.company_name}</p>

              <ul className="mt-3 list-disc ml-5 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-blue-800/80 text-sm">{point}</li>
                ))}
              </ul>
            </motion.div>

            {/* Ícone centralizado na linha */}
            <div
              className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-20
              ${exp.color ? exp.color : 'bg-blue-200'}
            `}
              style={{ background: exp.iconBg }}
            >
              <img src={exp.icon} alt={exp.company_name} className="w-3/4 h-3/4 object-contain" />
            </div>

            {/* Espaço para alinhar à esquerda/direita */}
            {!isLeft && <div className="hidden md:block md:w-1/2" />}
          </div>
        );
      })}
    </div>
  </div>
);

export default VerticalTimeline;
