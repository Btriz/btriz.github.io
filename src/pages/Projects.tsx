import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import { Trans, useTranslation } from 'react-i18next';
import Curve from '../components/Layout/Curve';

function Projects() {
  const { t } = useTranslation();
  return (
    <Curve>
      <motion.section
        className="max-container projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="head-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Trans i18nKey="projects.title">
          My <span className="gradient_text font-semibold drop-shadow">projects</span>
          </Trans>
        </motion.h1>

        <motion.p
          className="mt-5 flex flex-col gap-3 text-slate-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('projects.description', { defaultValue: 'I\'ve embarked on numerous projects throughout my journey as a developer, each one teaching me something new and pushing my skills to the next level. Here are some of my favorites:' })}
        </motion.p>

        <motion.div
          className="flex flex-wrap my-20 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="lg:w-[400px] w-full"
              key={project.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.4,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="block-container w-12 h-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`btn-back rounded-xl ${project.theme}`} />

                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                className="mt-5 flex flex-col"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>

                <p className="mt-2 text-slate-500">{project.description}</p>

                <motion.div
                  className="mt-5 flex items-center gap-2 font-poppins"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold"
                  >
                  Live Link
                  </Link>

                  <motion.img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.hr
          className="border-slate-200"
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
      </motion.section>
    </Curve>
  );
}

export default Projects;
