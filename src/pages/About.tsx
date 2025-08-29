import { skills, experiences } from '../constants';
import { Trans, useTranslation } from 'react-i18next';
import Curve from '../components/Layout/Curve';
import { CTA, ExperienceCards } from '../components';

const About = () => {
  const { t } = useTranslation();

  return (
    <Curve backgroundColor="rgba(4, 34, 27)">
      <section className="max-container about">
        <h1 className="head-text">
          <Trans i18nKey="about.hello">
        Hello, I'm <span className="drop-shadow font-oi">Beatriz</span>.
          </Trans>
        </h1>

        <div className="mt-5 flex flex-col gap-3">
          <p className="paragraph">
            {t('about.subtitle', { defaultValue: 'I\'m a software developer from Brazil...' })}
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">
            {t('about.skills.title', { defaultValue: 'My Skills' })}
          </h3>
        </div>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-16">
          <h2 className="subhead-text">
            {t('about.experience.title', { defaultValue: 'Experience' })}
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            <p className="paragraph">
              {t('about.experience.description', {
                defaultValue: 'I\'ve worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here\'s the rundown:',
              })}
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
