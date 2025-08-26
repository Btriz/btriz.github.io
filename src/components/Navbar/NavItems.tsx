import { NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

const NavItems = () => {
  const { t } = useTranslation();

  return(
    <>
      <div className="text-2xl font-tiny5 flex justify-evenly w-full border-r border-lavender/20 ">
        <Magnetic>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'}`
            }
          >
            {t('navbar.links.about', { defaultValue: 'About' })}

            <div className="sticky-element" />
          </NavLink>

        </Magnetic>

        <Magnetic>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'}`
            }
          >
            {t('navbar.links.projects', { defaultValue: 'Projects' })}

            <div className="sticky-element" />
          </NavLink>
        </Magnetic>
      </div>

      <LanguageSelector />
    </>
  );
};

export default NavItems;
