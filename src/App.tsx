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

const App = () => {
  const location = useLocation();
  init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

  return (
    <main>
      <NextRouteProvider>
        <Navbar />

        <Cursor />

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
