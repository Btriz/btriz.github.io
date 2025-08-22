import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

const NavItems = forwardRef<HTMLAnchorElement>((_, ref) => {
  const { t } = useTranslation();

  return(
    <>
      <div className="text-2xl font-tiny5 flex justify-evenly w-full border-r border-lavender/20 ">
        <NavLink
          to="/about"
          ref={ref}
          className={({ isActive }) =>
            isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'
          }
        >
          {t('navbar.links.about', { defaultValue: 'About' })}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'
          }
        >
          {t('navbar.links.projects', { defaultValue: 'Projects' })}
        </NavLink>
      </div>

      <LanguageSelector />
    </>
  );
});

export default NavItems;
