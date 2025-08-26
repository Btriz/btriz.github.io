import { animate, motion, transform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StickyCursor = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  const cursorSize = isHovered ? 70 : 30;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  useEffect(() => {
    setIsHovered(false);
  }, [location.pathname]);

  useEffect(() => {
    const rotateCursor = (distance: { y: number; x: number; }) => {
      const angle = Math.atan2(distance.y, distance.x);
      animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
    };

    const manageMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const target = event.target as HTMLElement;

      if (isHovered && target.classList.contains('sticky-element')) {
        const { left, top, width, height } = target.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
        const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);

        rotateCursor(distance);

        scale.x.set(newScaleX);
        scale.y.set(newScaleY);

        mouse.x.set((center.x - cursorSize / 2) + distance.x * 0.5);
        mouse.y.set((center.y - cursorSize / 2) + distance.y * 0.5);
      } else {
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);

      }
    };

    const manageMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('sticky-element')) {
        setIsHovered(true);
      }
    };

    const manageMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('sticky-element')) {
        setIsHovered(false);
        animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
      }
    };

    window.addEventListener('mousemove', manageMouseMove);
    document.addEventListener('mouseover', manageMouseOver);
    document.addEventListener('mouseout', manageMouseOut);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      document.removeEventListener('mouseover', manageMouseOver);
      document.removeEventListener('mouseout', manageMouseOut);
    };
  }, [mouse.x, mouse.y, cursorSize, isHovered, scale.x, scale.y]);

  const template = ({ rotate, scaleX, scaleY }: { rotate: number; scaleX: number; scaleY: number }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      transformTemplate={template}
      ref={cursorRef}
      className={'size-[30px] bg-green-500 rounded-full fixed z-30 pointer-events-none mix-blend-difference'}
      style={{ left: smoothMouse.x, top: smoothMouse.y, scaleX: scale.x, scaleY: scale.y }}
      animate={{ width: cursorSize, height: cursorSize }}
    >
    </motion.div>
  );
};

export default StickyCursor;
