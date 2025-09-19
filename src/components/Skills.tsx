import { AnimatePresence, motion } from 'framer-motion';
import { skills } from '../constants';
import { OrbitingCircles } from './magicui/OrbitingCircles';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getIconSize = (index: number) => {
    const w = dimensions.width;
    if (w < 420) return index === 0 ? 60 : 50;
    if (w < 640) return index === 0 ? 70 : 60;
    return index === 0 ? 90 : 70;
  };
  const maxRadius =
  dimensions.width > dimensions.height
    ? dimensions.height / 2 - 47
    : dimensions.width / 2;
  const outerRadius = maxRadius;
  const innerRadius = maxRadius * 0.55;

  return (
    <div className="relative overflow-hidden h-[80vh] md:h-screen w-full">
      {[outerRadius, innerRadius].map((radius, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full h-full pointer-events-none"
        >
          <AnimatePresence>
            {hoveredSkill && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-neon-light/80 font-tiny5 text-3xl uppercase transition-all duration-200 pointer-events-none
                "
              >
                {hoveredSkill}
              </motion.span>
            )}
          </AnimatePresence>

          <OrbitingCircles
            iconSize={getIconSize(index)}
            radius={radius}
            speed={0.2 + index * 0.2}
            duration={25 - index * 2}
            className="backdrop-blur-sm bg-radial to-transparent from-white/50 p-2 flex items-center justify-center"
          >
            {skills[index].map((skill) => (
              <>
                <div
                  className="sticky-element rounded-full pointer-events-auto"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                />

                <img
                  key={skill.name}
                  src={skill.imageUrl}
                  alt={skill.name}
                  className=" hover:brightness-200 transition-transform duration-300 ease-in-out w-full h-full object-contain"
                />
              </>

            ))}
          </OrbitingCircles>
        </div>
      ))}
    </div>
  );
};

export default Skills;
