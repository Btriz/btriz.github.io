import { motion } from 'framer-motion';

const DragIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-30 left-1/2 -translate-x-1/2  z-20 pointer-events-none"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: [0, -10, 0], opacity: 1 }}
      transition={{
        opacity: { duration: 0.5, ease: 'easeInOut' },
        x: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
      }}
      exit={{ x: -50, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      aria-label="Indicador de gesto: arraste para a esquerda"
      role="status"
    >
      <div className="flex flex-col items-center text-neon-light/80">
        <svg className="size-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z" fill="currentColor" /> </svg>

        <span className="select-none font-handjet text-2xl">ARRASTE</span>
      </div>
    </motion.div>
  );
};

export default DragIndicator;
