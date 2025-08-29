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
    color,
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
        className={'card w-[1000px] h-[500px] flex items-center relative p-10 gap-5 rounded-2xl overflow-hidden'}
        style={{ backgroundColor: color,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
      >
        <div className="image-container relative w-[50%]">
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

        <div className="info flex flex-col">
          <h3 className="text-3xl font-bold text-white mt-5">{title}</h3>

          <p className="text-xl text-white/80 font-mono">{companyName}</p>

          <span className="text-sm text-white/70 font-mono">{date}</span>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, i) => (
              <li key={i} className="text-white/90 text-sm">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default StickyCard;
