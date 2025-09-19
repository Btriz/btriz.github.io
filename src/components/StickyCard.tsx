import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Experience } from '../constants';

type StickyCardProps = {
  experience: Experience;
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
}

const StickyCard = ({ experience, index, range, targetScale, progress }: StickyCardProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const {
    title,
    date,
    icon,
    points,
    company_name: companyName,
  } = experience;

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      key={index}
      ref={containerRef}
      className="card-container h-screen flex items-center justify-center sticky top-0"
      style={{ scale }}
    >
      <div
        className={`
            card max-w-1000 h-4/5 md:h-2/3 flex flex-col md:flex-row items-center relative
            p-5 gap-5 rounded-2xl md:py-70 md:px-10 justify-center
            bg-neon-light/10 backdrop-blur-xl border-4 border-neon-light/20
          `}
        style={{
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <div className="image-container relative w-1/3 md:w-1/2">
          <motion.div
            className="inner w-full h-full"
            style={{ scale: imageScale }}
          >
            <img
              src={icon}
              alt={companyName}
              className=" w-full"
            />
          </motion.div>
        </div>

        <div className="info flex flex-col font-64 text-neon-light md:max-w-2/3 min-h-fit">
          <h3 className="text-lg md:text-2xl">{title}</h3>

          <p className="text-xl md:text-3xl font-handjet">{companyName}</p>

          <span className="font-handjet">{date}</span>

          <ul className="mt-5 ml-5 space-y-2 text-lg font-handjet">
            {points.map((point, i) => (
              <li key={i} className="">
                {'✦  '}

                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCard;
