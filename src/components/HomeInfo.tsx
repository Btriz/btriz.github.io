import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { arrow } from '../assets/icons';

type HomeInfoProps = {
    currentStage: number;
};

const InfoBox = ({ text, link, btnText }: {
  text: string | React.ReactNode;
  link?: string;
  btnText?: string;
}) => (
  <motion.div
    className="info-box neo-brutalism-blue"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 300 }}
    exit={{
      opacity: 0,
      scale: 0.5,
      y: 40,
      transition: { duration: 0.3, type: 'tween', ease: 'easeIn' },
    }}
  >
    <motion.p
      className="font-medium sm:text-xl text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {text}
    </motion.p>

    {link && btnText && (
      <motion.div>
        <Link to={link} className="neo-brutalism-white neo-btn">
          {btnText}

          <motion.img
            src={arrow}
            alt="arrow"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
        </Link>
      </motion.div>
    )}
  </motion.div>
);

const renderContent: { [key: number]: React.ReactElement } = {
  1: (
    <InfoBox
      text={
        <>
          Hi, I am <span className="font-semibold">Beatriz</span> 👋

          <br />
          A software developer from Brazil.
        </>
      }
    />
  ),
  2: (
    <InfoBox
      text={'I\'ve worked with some wonderful companies and picked up many skills along the way'}
      link={'/about'}
      btnText={'Learn more'}
    />
  ),
  3: (
    <InfoBox
      text={'I love creating things, and I\'m always looking for new challenges to tackle'}
      link={'/projects'}
      btnText={'Visit my portfolio'}
    />
  ),
  4: (
    <InfoBox
      text={'Looking for a dev? I\'m just a few keystrokes away!'}
      link={'/contact'}
      btnText={'Contact me'}
    />
  ),
};

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  return (
    <div
      key={currentStage}
    >
      {renderContent[currentStage] || null}
    </div>
  );
};

export default HomeInfo;
