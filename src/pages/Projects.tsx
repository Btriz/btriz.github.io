import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { Trans } from 'react-i18next';
import Curve from '../components/Layout/Curve';
import AboutBg from '../components/ShaderGradient/AboutBg';
import { Canvas } from '@react-three/fiber';
import { lazy, Suspense } from 'react';
import { Loader, NeonButton } from '../components';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { useLenis } from '../hooks';
const PortfolioScene = lazy(() => import('../components/Scenes/PortfolioScene'));
function Projects() {
  // const { t } = useTranslation();
  useLenis();

  return (
    <Curve>
      <AboutBg />

      <section
        className="max-container"
      >
        <div className="flex flex-col relative gap-5 md:gap-30">
          <h1
            className="title-text mb-10! md:mb-0!"
          >
            <Trans i18nKey="projects.title">
              My <span>projects</span>
            </Trans>

            {' ⊹₊⟡'}
          </h1>

          <section className="flex flex-col items-center md:items-start md:flex-row relative">
            <Canvas
              className="h-[210px]!"
              camera={{ near: 0.1, far: 1000, position: [0, 0, -5] }}
            >
              <Suspense fallback={<Loader />}>
                <PortfolioScene />
              </Suspense>
            </Canvas>

            <div
              className={`
                md:max-w-3/4 flex flex-col items-center md:items-start gap-3
                text-xl md:text-2xl text-center md:text-left
                mt-5 md:mt-0 leading-relaxed
            `}
            >
              <p>
                Este portfolio é uma exploração de tecnologias novas para mim: React Three Fiber, Three.js, Framer Motion e Vite.
              </p>

              <p>
                O projeto tem design responsivo, usa TypeScript, Tailwind e conta com internacionalização através de react-i18next.
              </p>

              <NeonButton
                text={'Repositório'}
                className="text-sm mt-10 md:mt-5"
                onClick={() =>
                  window.open(
                    'https://github.com/Btriz/btriz.github.io',
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
                icon={RiGitRepositoryFill}
              />
            </div>
          </section>

          <motion.hr
            className="border-white/50 mt-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </div>

        <section
          className="flex flex-col items-center justify-center text-center h-100 text-lg md:text-xl md:px-20 gap-5"
        >
          <p>
              Esta sessão está em construção. Enquanto isso, você pode conferir o código-fonte do meu portfolio no GitHub.
          </p>

          <p>
            ⋆✴︎˚｡⋆.𖥔 ݁ ˖🛸.✦⋆˚࿔ ⊹⭒₊
          </p>
        </section>

        <motion.hr
          className="border-white/50"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CTA />
        </motion.div>
      </section>
    </Curve>
  );
}

export default Projects;
