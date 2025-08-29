import { lazy, Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';

import { Loader, InfoPopUp } from '../components';
import DragIndicator from '../components/DragIndicator';
import { useAnimatedCamera } from '../hooks';
import Curve from '../components/Layout/Curve';

const HomeScene = lazy(() => import('../components/HomeScene'));

function Home() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);

  const { cameraPosition, cameraReady } = useAnimatedCamera([0, 0, 5]);

  return (
    <Curve>
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

        <Canvas
          className={`w-full h-screen bg-transparent touch-none overscroll-contain ${isInteracting ? 'cursor-grabbing' : 'cursor-grab'}`}
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

        <AnimatePresence>
          {cameraReady && currentStage === 1 && (
            <DragIndicator />
          )}
        </AnimatePresence>

      </section>
    </Curve>
  );
}

export default Home;
