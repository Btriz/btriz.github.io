import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact, Welcome } from './pages';

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

const App = () => {
  // const location = useLocation();

  return (
    <main className="bg-slate-300/20">

      {/* {location.pathname !== '/' && <Navbar />} */}

      <Navbar />

      <AnimatedRoutes />

    </main>
  );
};

export default App;
