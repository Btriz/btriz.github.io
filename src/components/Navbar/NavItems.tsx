import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

const NavItems = () => {
  const { t } = useTranslation();

  const CustomLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Magnetic>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-neon' : 'text-lavender hover:text-neon-light')}
      >
        {children}

        <div className="sticky-element" />
      </NavLink>
    </Magnetic>
  );

  return(
    <>
      <div className="text-2xl font-tiny5 flex justify-evenly w-full border-r border-lavender/20 ">
        <CustomLink to="/about">
          {t('navbar.links.about', { defaultValue: 'About' })}
        </CustomLink>

        <CustomLink to="/projects">
          {t('navbar.links.projects', { defaultValue: 'Projects' })}
        </CustomLink>
      </div>

      <LanguageSelector />
    </>
  );
};

export default NavItems;
