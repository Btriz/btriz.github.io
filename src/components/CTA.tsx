import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        className="cta-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project in mind?
        <br className="sm:block hidden" />
        Let's build something together!
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        viewport={{ once: true }}
      >
        <Link to="/contact" className="metal-btn-wide">
          Contact
          <div className="sticky-element" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
