import { animate, motion, transform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Cursor = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isBigHovered, setIsBigHovered] = useState(false);
  const cursorRef = useRef(null);

  let cursorSize = isHovered ? 60 : 30;
  cursorSize = isBigHovered ? 110 : cursorSize;

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
    setIsBigHovered(false);
  }, [location.pathname]);

  useEffect(() => {
    const rotateCursor = (distance: { y: number; x: number; }) => {
      const angle = Math.atan2(distance.y, distance.x);
      animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
    };

    const manageMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      let hovered = false;
      let bigHovered = false;
      let stickyRect: DOMRect | null = null;

      document.querySelectorAll('.sticky-element').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          clientX >= rect.left
          && clientX <= rect.right
          && clientY >= rect.top
          && clientY <= rect.bottom
        ) {
          hovered = true;
          stickyRect = rect;
          if (el.classList.contains('se-big')) {
            bigHovered = true;
          }
        }
      });

      setIsHovered(hovered);
      setIsBigHovered(bigHovered);

      if (hovered && stickyRect) {
        const rect: DOMRect = stickyRect;

        const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };

        const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
        const newScaleX = transform(absDistance, [0, rect.width / 2], [1, 1.3]);
        const newScaleY = transform(absDistance, [0, rect.width / 2], [1, 0.8]);

        rotateCursor(distance);

        scale.x.set(newScaleX);
        scale.y.set(newScaleY);

        mouse.x.set((center.x - (bigHovered ? 100 : 70) / 2) + distance.x * 0.5);
        mouse.y.set((center.y - (bigHovered ? 100 : 70) / 2) + distance.y * 0.5);
      } else {
        scale.x.set(1);
        scale.y.set(1);
        mouse.x.set(clientX - 15);
        mouse.y.set(clientY - 15);
      }
    };

    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, [mouse.x, mouse.y, scale.x, scale.y]);

  const template = ({ rotate, scaleX, scaleY }: { rotate: number; scaleX: number; scaleY: number }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <motion.div
      transformTemplate={template}
      ref={cursorRef}
      className={`
      bg-radial 
      size-[30px] rounded-full fixed z-30 pointer-events-none
      mix-blend-color-dodge blur-[1px] 
      ${isHovered
      ? 'blur-[2px] from-purple-900 via-purple-800 to-purple-500'
      : 'blur-[1px] from-emerald-900 via-emerald-800 to-emerald-500'}
      `}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    >
    </motion.div>
  );
};

export default Cursor;
