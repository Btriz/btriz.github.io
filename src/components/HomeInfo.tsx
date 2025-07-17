import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

type HomeInfoProps = {
    currentStage: number;
};

const InfoBox = ({ text, link, btnText }: {
  text: string;
  link: string;
  btnText: string;
}) => (
  <div className="info-box neo-brutalism-blue">
    <p className="font-medium sm:text-xl text-center">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}

      <img src={arrow} />
    </Link>
  </div>
);

const renderContent: { [key: number]: React.ReactElement } = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Beatriz</span> 👋

      <br />
      A software developer from Brazil.

    </h1>
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
  return renderContent[currentStage] || (null);
};

export default HomeInfo;
