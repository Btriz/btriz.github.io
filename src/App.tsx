import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor, Navbar } from './components';
import { Home, About, Projects, Contact, Welcome } from './pages';
import { useEffect } from 'react';

const App = () => {
  const AnimatedRoutes = () => {
    const location = useLocation();

    const pageVariants = {
      initial: {
        opacity: 0,
      },
      in: {
        opacity: 1,
      },
      out: {
        opacity: 0,
      },
    };

    useEffect(() => {
      let bg = 'var(--color-lavender)';
      if (location.pathname === '/about') {
        bg = 'var(--color-blue-dark)';
      }

      document.body.style.backgroundColor = bg;

      return () => {
        document.body.style.backgroundColor = 'var(--color-lavender)';
      };
    }, [location.pathname]);
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: 0.3,
          }}
          className="w-full min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<Welcome key={location.pathname} />} />

            <Route path="/Home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <main>
      <Navbar />

      <Cursor />

      <AnimatedRoutes />

    </main>
  );
};

export default App;
