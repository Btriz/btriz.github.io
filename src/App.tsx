import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cursor, Navbar } from './components';
import { Home, About, Projects, Contact, Welcome } from './pages';
import { NextRouteProvider } from './context/NextRouteContext';
import { init } from '@emailjs/browser';
import { useEffect, useState } from 'react';

const App = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  interface NavigatorWithMSTouch extends Navigator {
  msMaxTouchPoints?: number;
}
  useEffect(() => {
    const detectMobile = () => {
      const nav = navigator as NavigatorWithMSTouch;

      // Verifica suporte a touch
      const hasTouchSupport = 'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (nav.msMaxTouchPoints !== undefined && nav.msMaxTouchPoints > 0);

      // Verifica user-agent
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

      // Combinação das verificações
      setIsMobile(hasTouchSupport && isMobileUA);
    };

    detectMobile();
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
