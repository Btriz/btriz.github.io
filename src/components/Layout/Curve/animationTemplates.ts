import type { Variants } from 'framer-motion';

const animation = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

const curve = (
  initialPath: string,
  targetPath: string,
) => {
  return { initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition,
    },
    exit: {
      d: initialPath,
      transition,
    },
  };
};

const transition = {
  duration: .75,
  delay: 0.3,
  ease: [0.76, 0, 0, 0.24],
};

const slide = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition,
    transitionEnd: { top: '100vh' },
  },
  exit: {
    top: '-300px',
    transition,
  },
};

const text = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition,
    transitionEnd: {
      top: '48%',
    },
  },
  exit: {
    opacity: 1,
    top: '40%',
    transition: {
      duration: .5,
      delay: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export {
  animation,
  curve,
  transition,
  slide,
  text,
};
