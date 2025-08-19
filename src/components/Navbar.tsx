import { NavLink, useLocation } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';

const Navbar = () => {
  const isWelcomePage = useLocation().pathname === '/';

  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4  mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 border-b border-lavender/20">
      <div className="flex items-center gap-5">
        {!isWelcomePage && (
          <NavLink
            to="/"
            className="metal-btn"
          >
            <p className="">B</p>
          </NavLink>
        )}

        <MusicPlayer />
      </div>

      {!isWelcomePage && (
        <nav className="flex gap-7 font-tiny5 text-2xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'
            }
          >
          About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-neon' : 'text-lavender hover:text-neon-light'
            }
          >
          Projects
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
