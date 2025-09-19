import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';
import { NavLink } from 'react-router-dom';
import { useNextRoute } from '../../context/NextRouteContext';

const NavItems = ({ onChangeLanguage }: { onChangeLanguage?: () => void }) => {
  const { t } = useTranslation();
  const { setNextRoute } = useNextRoute();
  const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Magnetic>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-neon' : 'text-lavender hover:text-neon-light')}
        onClick={() => setNextRoute(to)}
      >
        {children}

        <div className="sticky-element" />
      </NavLink>
    </Magnetic>
  );

  return(
    <>
      <div className="text-xl md:text-2xl font-tiny5 flex justify-evenly w-full border-r border-lavender/20 ">
        <CustomLink to="/home">
          {t('navbar.links.home', { defaultValue: 'Home' })}
        </CustomLink>

        <CustomLink to="/about">
          {t('navbar.links.about', { defaultValue: 'About' })}
        </CustomLink>

        <CustomLink to="/projects">
          {t('navbar.links.projects', { defaultValue: 'Projects' })}
        </CustomLink>
      </div>

      <LanguageSelector onChangeLanguage={onChangeLanguage} />
    </>
  );
};

export default NavItems;
