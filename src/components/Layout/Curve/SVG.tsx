import { motion } from 'framer-motion';
import { animation, curve, slide } from './animationTemplates';

const SVG = ({ height, width }: {
  height: number;
  width: number;
}) => {
  const initialPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0 
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0 
  `;

  return (
    <motion.svg
      className="w-screen fixed left-0 pointer-events-none z-50 top-[-300px]"
      style={{ height: 'calc(100vh + 600px)' }}
      {...animation(slide)}
    >
      <motion.path {...animation(curve(initialPath, targetPath))}></motion.path>
    </motion.svg>
  );
};

export default SVG;
