import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { linkedin } from '../assets/icons';
import Magnetic from './Magnetic';

const CTA = () => {
  return (
    <motion.section
      className="cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="font-tiny5 text-lg md:text-xl text-neon-light/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind?
        <br className="sm:block hidden" />
        Let's build something together!
      </motion.p>

      <div className="flex gap-5">
        <Magnetic>
          <Link to="/contact" className="metal-btn-wide">
          CONTACT
            <div className="sticky-element" />
          </Link>
        </Magnetic>

        <Magnetic>
          <a
            href="https://www.linkedin.com/in/fagundesbeatriz/"
            target="_blank"
            rel="noopener noreferrer"
            className="metal-btn-wide"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
            />

            <div className="sticky-element" />
          </a>
        </Magnetic>

      </div>
    </motion.section>
  );
};

export default CTA;
