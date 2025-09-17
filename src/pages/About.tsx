import { experiences } from '../constants';
import { useTranslation } from 'react-i18next';
import Curve from '../components/Layout/Curve';
import { CTA, ExperienceCards, Skills } from '../components';
import Lenis from 'lenis';
import { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import AboutBg from '../components/ShaderGradient/AboutBg';

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

  // useEffect(() => {
  //   const lenis = new Lenis({ autoRaf: true });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

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

  return (
    <Curve backgroundColor="rgba(4, 34, 27)">
      <AboutBg />

      <section
        className="max-container about"
        ref={pageRef}
      >
        <p
          ref={introRef}
          className={`
            paragraph
            introduction
            flex flex-col justify-center items-center
            pt-43 md:pt-55
          `}
        >
          <div className="mt-5 flex flex-col gap-10">
            <span className="">
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

            <motion.p
              className=""
            >
              {t('about.subtitle', { defaultValue: 'I\'m a software developer from Brazil...' })
                .split('').map((letter, index) => (
                  <Letter key={`l_${index}`} char={letter} index={index} progress={introProgress} />
                ))}
            </motion.p>
          </div>
        </p>

        <div className="flex flex-col">
          <h3 className="subhead-text">
            {
              t('about.skills.title', { defaultValue: 'My Skills' })
            }

            {' ⊹₊⟡'}

          </h3>

          <Skills />
        </div>

        <div
          ref={experiencesRef}
        >
          <h2 className="subhead-text">
            {t('about.experience.title', { defaultValue: 'Experience' })}

            {' ₊✴︎⋆'} ݁

          </h2>

          <div className="flex flex-col gap-3">
            <p className="paragraph mb-0!">
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
          </div>

          <ExperienceCards experiences={experiences} />
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </Curve>
  );
};

export default About;
