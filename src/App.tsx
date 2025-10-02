import React, { Suspense } from 'react';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor, Navbar, Loader } from './components'; // Adicione o Loader aqui
import { NextRouteProvider } from './context/NextRouteContext';
import { init as initEmailJs } from '@emailjs/browser';
import { useIsMobile } from './hooks/useIsMobile';

// Lazy load das páginas
const Welcome = React.lazy(() => import('./pages/Welcome'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

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

        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </NextRouteProvider>
    </main>
  );
};

export default App;
