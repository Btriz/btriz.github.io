import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSelector, MenuButton, MusicPlayer, NavItems } from '.';
import { useTranslation } from 'react-i18next';
import { Magnetic } from '..';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const location = useLocation();
  const isWelcomePage = location.pathname === '/';

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`
        absolute top-0 right-0 left-0 z-20 overflow-hidden
        border-b border-lavender/20 transition-all duration-300
        ${open && 'bg-purple-dark/60'}`}
    >
      <div
        className={`
        flex justify-between items-center
        px-5 py-3 md:py-4 md:px-8
        bg-transparent  
        `}
      >
        <div className="flex items-center gap-3 md:gap-5">
          {!isWelcomePage && (
            <Magnetic>
              <NavLink
                to="/"
                className="metal-btn"
                aria-label={t('navbar.logo', { defaultValue: 'Go to welcome screen' })}
              >
                <p>B</p>

                <div className="sticky-element" />
              </NavLink>
            </Magnetic>
          )}

          <MusicPlayer />
        </div>

        {isWelcomePage && <LanguageSelector className="w-auto!" />}

        {!isWelcomePage && (
          <nav>
            <Magnetic>
              <MenuButton
                ref={buttonRef}
                open={open}
                onClick={() => setOpen(!open)}
                className="md:hidden!"
                aria-expanded={open}
                aria-controls="main-menu"
                aria-label={open
                  ? t('navbar.menu_close', { defaultValue: 'Close menu' })
                  : t('navbar.menu_open', { defaultValue: 'Open menu' })}
              />
            </Magnetic>

            <div
              className="hidden md:flex items-center w-95"
            >
              <NavItems />
            </div>
          </nav>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="main-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={menuRef}
            className="flex items-center
              w-full py-1 relative z-10
              border-t border-lavender/20"
          >
            <NavItems />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
