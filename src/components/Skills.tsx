import { useRef } from 'react';
import { skills } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const left = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const right = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const groupScroll = [left, right, left, right];

  return (
    <div
      ref={containerRef}
      className={`
      relative mt-10 mb-25
      flex flex-col items-center sm:gap-20 gap-6
    `}
    >
      {skills.map((group, groupIdx) => (
        <motion.div
          key={groupIdx}
          className={`
          skill-group flex justify-between
          w-full pointer-events-none gap-6
          ${groupIdx % 2 === 0 ? 'ml-20' : 'mr-20'}
        `}
          style={{
            zIndex: groupIdx + 1,
            x: groupScroll[groupIdx],
          }}
        >
          {group.map((skill) => (
            <motion.div
              key={skill.name}
              className={`
              w-15 md:w-20 flex flex-col items-center justify-center relative
              hover:scale-150 transition-transform
              bg-white/20 p-2 rounded-lg backdrop-blur-sm
           `}
              style={{ pointerEvents: 'auto' }}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className={`
                w-full
              `}
              />

              {/* <span className="mt-2 text-xs">{skill.name}</span> */}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
