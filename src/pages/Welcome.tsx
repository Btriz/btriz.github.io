import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90"
    >
      <motion.h1
        className="text-4xl md:text-6xl text-white mb-6 font-bold text-center"
        variants={itemVariants}
      >
        Boas vindas!
      </motion.h1>

      <motion.p
        className="text-white text-lg md:text-xl mb-8 text-center max-w-2xl px-4"
        variants={itemVariants}
      >
        Explore minha jornada como desenvolvedora através de um mundo 3D interativo
      </motion.p>

      <motion.button
        className="px-8 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/home')}
      >
        Explorar
      </motion.button>
    </motion.div>
  );
};

export default Welcome;
