import { useScroll } from 'framer-motion';
import { StickyCard } from '.';
import { useRef } from 'react';
import type { Experience } from '../constants';

interface ExperienceCardsProps {
  experiences: Experience[];
}

const ExperienceCards = ({ experiences }: ExperienceCardsProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
    >
      { experiences.map((experience, index) => {
        const targetScale = 1 - ((experiences.length - index) * 0.05);
        const range = [index * 0.25, 1];

        return (
          <StickyCard
            key={`e_${index}`}
            progress={scrollYProgress}
            { ...{ range, targetScale, experience, index } }
          />
        );
      })}
    </div>
  );
};

export default ExperienceCards;
