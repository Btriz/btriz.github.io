import React from 'react';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor, Navbar } from './components';
import { Home, About, Projects, Contact, Welcome } from './pages';
import { NextRouteProvider } from './context/NextRouteContext';
import { init as initEmailJs } from '@emailjs/browser';
import { useIsMobile } from './hooks/useIsMobile';

const App = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY) {
      initEmailJs(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  return (
    <main>
      <NextRouteProvider>
        <Navbar />

        {!isMobile && <Cursor />}

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
          >
            <Routes location={location}>
              <Route path="/" element={<Welcome />} />

              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/projects" element={<Projects />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </NextRouteProvider>
    </main>
  );
};

export default App;
