import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdWavingHand } from 'react-icons/md';
import { Trans, useTranslation } from 'react-i18next';
import { useNextRoute } from '../context/NextRouteContext';
import { Magnetic, NeonButton } from '.';
import { FaCaretSquareRight } from 'react-icons/fa';

type InfoPopUpProps = {
    currentStage: number;
};

const InfoBox = ({ text, image, link, btnText }: {
  text: string | React.ReactNode;
  link?: string;
  btnText?: string;
  image: React.ReactNode;
  side?: 'left' | 'right';
}) => {
  const { setNextRoute } = useNextRoute();
  const navigate = useNavigate();

  return(
    <motion.div
      className={`
        rounded-md text-neon-light p-4 mx-5 
        max-w-xl
        border-3 border-neon-light/30 backdrop-blur-xs bg-teal-800/30 overflow-hidden
      `}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
      exit={{ opacity: 0, scale: 0.5, y: 40, transition: { duration: 0.3, ease: 'easeIn' } }}
      role="region"
      aria-label="Informações"
    >
      <div className="flex gap-5 items-center">
        <div
          className={`
            relative w-15 h-fit md:w-24 aspect-square shrink-0
            flex items-center justify-center overflow-hidden
            border-3 border-neon-light p-1
          `}
        >
          {image}

          <div className="absolute inset-0 bg-neon/30 mix-blend-darken pointer-events-none" />
        </div>

        <p className="text-base sm:text-2xl tracking-wider font-handjet">{text}</p>
      </div>

      <div className="mt-3 w-fit m-auto">
        {link && btnText && (
          <Magnetic>
            <NeonButton
              className="text-xs sm:text-sm md:text-base"
              text={btnText}
              icon={<FaCaretSquareRight />}
              onClick={() => {
                setNextRoute(link);
                navigate(link);
              }}
            />
          </Magnetic>
        )}
      </div>

    </motion.div>
  );
};

const InfoPopUp = ({ currentStage }: InfoPopUpProps) => {
  const { t } = useTranslation();

  const renderContent: { [key: number]: React.ReactElement } = {
    1: (
      <InfoBox
        image={
          <img
            src="src/assets/images/profilee.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />}
        text={
          <span>
            <span className="block">
              <Trans i18nKey="home.1.hello">
                Hi, I am <span className="font-bold">Beatriz </span>
              </Trans>

              <MdWavingHand className="text-neon-light inline size-5 animate-wave mb-2" />
            </span>

            <span>{t('home.1.info', { defaultValue: 'a software developer from Brazil...' })}
            </span>
          </span>
        }
      />
    ),
    2: (
      <InfoBox
        image={<svg className="size-15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16 3H8v4H2v14h20V7h-6V3zm-2 4h-4V5h4v2zM4 19V9h16v10H4zm10-8h2v2h-2v-2zm-2 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z" fill="currentColor" /> </svg>}
        text={t('home.2.info', { defaultValue: 'I\'ve worked with some wonderful companies and picked up many skills along the way...' })}
        link={'/about'}
        btnText={t('home.2.btn', { defaultValue: 'Learn more' })}
      />
    ),
    3: (
      <InfoBox
        image={<svg className="size-15" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M13 2h-2v4h2V2Zm2 6H9v2H7v4h2v4h6v-4h2v-4h-2V8Zm0 2v4h-2v2h-2v-2H9v-4h6ZM9 20h6v2H9v-2Zm14-9v2h-4v-2h4ZM5 13v-2H1v2h4Zm12-7h2v2h-2V6Zm2 0h2V4h-2v2ZM5 6h2v2H5V6Zm0 0V4H3v2h2Z" /> </svg>}
        text={t('home.3.info', { defaultValue: 'I love creating things, and I\'m always looking for new challenges to tackle...' })}
        link={'/projects'}
        btnText={t('home.3.btn', { defaultValue: 'See my work' })}
      />
    ),
    4: (
      <InfoBox
        image={<svg className="size-15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z" fill="currentColor" /> </svg>}
        text={t('home.4.info', { defaultValue: 'Looking for a dev? I\'m just a few keystrokes away!' })}
        link={'/contact'}
        btnText={t('home.4.btn', { defaultValue: 'Contact me' })}
      />
    ),
  };

  return (
    <div
      key={currentStage}
    >
      {renderContent[currentStage] || null}
    </div>
  );
};

export default InfoPopUp;
