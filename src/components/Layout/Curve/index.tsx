import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNextRoute } from '../../../context/NextRouteContext';
import { animation, text } from './animationTemplates';
import SVG from './SVG';
import { useTranslation } from 'react-i18next';

const Curve = ({ children, backgroundColor }: React.PropsWithChildren & { backgroundColor?: string}) => {
  const { t } = useTranslation();
  const { nextRoute } = useNextRoute();

  const [dimensions, setDimensions] = useState<{width: number | null; height: number | null}>({
    width: null,
    height: null,
  });

  const routes = {
    '/': t('transition.welcome', { defaultValue: 'Welcome' }),
    '/home': t('transition.home', { defaultValue: 'Home' }),
    '/about': t('transition.about', { defaultValue: 'About' }),
    '/projects': t('transition.projects', { defaultValue: 'Projects' }),
    '/contact': t('transition.contact', { defaultValue: 'Contact' }),
  };

  const routeName = routes[nextRoute as keyof typeof routes];

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen" style={{ backgroundColor }}>
      {dimensions.width == null && (
        <div className="fixed h-screen w-screen top-0 left-0 z-49 bg-black" />
      )}

      <motion.p
        {...animation(text)}
        className="
        fixed left-1/2 top-[40%] -translate-x-1/2 z-51
        text-white text-2xl md:text-5xl font-shrikhand pointer-events-none
      "
      >
        {routeName}
      </motion.p>

      {dimensions.width !== null && dimensions.height !== null && (
        <SVG width={dimensions.width} height={dimensions.height} />
      )}

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default Curve;
