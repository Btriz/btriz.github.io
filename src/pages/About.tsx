import { experiences } from '../constants';
import { useTranslation } from 'react-i18next';
import Curve from '../components/Layout/Curve';
import { CTA, ExperienceCards, Skills } from '../components';
import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import AboutBg from '../components/ShaderGradient/AboutBg';
import { useLenis } from '../hooks';

const About = () => {
  const { t } = useTranslation();
  const pageRef = useRef(null);
  const introRef = useRef(null);
  const experiencesRef = useRef(null);

  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ['start start', 'center start'],
  });

  const { scrollYProgress: experiencesProgress } = useScroll({
    target: experiencesRef,
    offset: ['start end', 'start center'],
  });

  const Letter = ({ char, index, progress, className, invert }: {
    char: string;
    index: number;
    progress: MotionValue<number>;
    className?: string;
    invert?: boolean;
  }) => {
    const random = useMemo(() => Math.floor(Math.random() * -200) - 25, []);

    const scroll = useTransform(progress, [0, 1], invert ? [random, 0] : [0, random]);

    return (
      <motion.span
        key={`l_${index}`}
        className={`relative ${className}`}
        style={{
          animationDelay: `${index * 0.1}s`,
          top: scroll,
        }}
      >
        {char}
      </motion.span>
    );
  };

  const surge = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 1 },
  };

  useLenis();

  return (
    <Curve>
      <AboutBg />

      <main
        className="max-container px-0!"
        ref={pageRef}
      >
        <p
          ref={introRef}
          className="paragraph mb-30 md:mb-45 px-8"
        >
          <div className="mt-5 flex flex-col gap-10">
            <span>
              {t('about.hello', { defaultValue: 'Hello, I\'m ' })}
            </span>

            <span>
              {
                'Beatriz'.split('').map((letter, index) => (
                  <Letter
                    key={`l_${index}`}
                    char={letter}
                    index={index}
                    progress={introProgress}
                    className=" bg-radial from-neon-light via-neon to-neon-dark bg-clip-text text-transparent font-oi text-5xl md:text-7xl"
                  />
                ))
              }
            </span>

            <motion.p>
              {t('about.subtitle', { defaultValue: 'Full Stack Web Developer with a focus on Front-end and undergraduate student in Information Systems.' })
                .split('').map((letter, index) => (
                  <Letter key={`l_${index}`} char={letter} index={index} progress={introProgress} />
                ))}
            </motion.p>
          </div>
        </p>

        <section className="md:mb-25">
          <motion.h2 {...surge} className={'title-text px-8'}>
            {t('about.skills.title', { defaultValue: 'My Skills' })}

            {' ⊹₊⟡'}
          </motion.h2>

          <Skills />
        </section>

        <div className="px-8">
          <section ref={experiencesRef}>
            <motion.h2 {...surge} className="title-text mb-10">
              {t('about.experience.title', { defaultValue: 'Experience' })}

              {' ₊✴︎⋆'}

            </motion.h2>

            <p className="paragraph mb-10 md:mb-25">
              {t('about.experience.description', {
                defaultValue: 'I\'ve worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here\'s the rundown:',
              })
                .split('').map((letter, index) => (
                  <Letter
                    key={`l_${index}`}
                    char={letter}
                    index={index}
                    progress={experiencesProgress}
                    invert
                  />
                ))}
            </p>

            <ExperienceCards experiences={experiences} />
          </section>

          <hr className="border-slate-200" />

          <CTA />
        </div>
      </main>
    </Curve>
  );
};

export default About;
