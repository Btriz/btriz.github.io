import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

const Magnetic = ({ children }: {children: React.ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const middle = {
        x: clientX - (left + width / 2),
        y: clientY - (top + height / 2),
      };

      setPosition({
        x: middle.x * 0.1,
        y: middle.y * 0.1,
      });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      className="relative"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}

    </motion.div>
  );
};

export default Magnetic;
