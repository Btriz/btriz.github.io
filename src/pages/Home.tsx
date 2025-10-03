import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';

import { Loader, InfoPopUp } from '../components';
import DragIndicator from '../components/DragIndicator';
import { useAnimatedCamera } from '../hooks';

const HomeScene = lazy(() => import('../components/Scenes/HomeScene'));

function Home() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { cameraPosition, cameraReady } = useAnimatedCamera([0, 0, 5]);
  useEffect(() => {
    const handleCanvasClick = () => {
      document.dispatchEvent(new Event('canvas-click'));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleCanvasClick);
      container.addEventListener('touchstart', handleCanvasClick);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleCanvasClick);
        container.removeEventListener('touchstart', handleCanvasClick);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <section className="w-full h-screen relative overflow-hidden">
        <AnimatePresence>
          {currentStage && cameraReady && (
            <motion.div
              key={currentStage}
              className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
            >
              <InfoPopUp currentStage={currentStage} />
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={containerRef} className="w-full h-full">
          <Canvas
            className={`w-full h-screen touch-none overscroll-contain ${isInteracting ? 'cursor-grabbing' : 'cursor-grab'}`}
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <HomeScene
                cameraPosition={cameraPosition}
                setCurrentStage={setCurrentStage}
                setRotationDirection={setRotationDirection}
                isInteracting={isInteracting}
                setIsInteracting={setIsInteracting}
                setIsMoving={setIsMoving}
                isMoving={isMoving}
                rotationDirection={rotationDirection}
              />
            </Suspense>
          </Canvas>
        </div>

        <AnimatePresence>
          {cameraReady && currentStage === 1 && (
            <DragIndicator />
          )}
        </AnimatePresence>

      </section>
    </div>
  );
}

export default Home;
