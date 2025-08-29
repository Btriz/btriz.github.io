import { useScroll } from 'framer-motion';
import { StickyCard } from '.';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
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

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="">
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
