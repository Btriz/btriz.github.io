import { Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { EffectComposer, Bloom, Noise, Scanline, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

import { World, Ufo } from '../models';
import { Loader, InfoPopUp } from '../components';
import DragIndicator from '../components/DragIndicator';

function Home() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 20]);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    let frame: number;

    const target: [number, number, number] = [0, 0, 5];
    const speed = 0.0005;
    const threshold = 0.01;

    // cálculo da distância Euclidiana
    function distance(a: [number, number, number], b: [number, number, number]) {
      return Math.sqrt(
        (a[0] - b[0]) ** 2 +
        (a[1] - b[1]) ** 2 +
        (a[2] - b[2]) ** 2,
      );
    }

    const animate = () => {
      setCameraPosition((prev) => {
        const next: [number, number, number] = [
          prev[0] + (Math.abs(target[0] - prev[0]) < threshold ? 0 : (target[0] - prev[0]) * speed),
          prev[1] + (Math.abs(target[1] - prev[1]) < threshold ? 0 : (target[1] - prev[1]) * speed),
          prev[2] + (Math.abs(target[2] - prev[2]) < threshold ? 0 : (target[2] - prev[2]) * speed),
        ];

        if (distance(next, target) > threshold) {
          frame = requestAnimationFrame(animate);
        } else {
          setCameraReady(true);
        }

        return next;
      });
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, []);

  const CameraUpdater = ({ position }: { position: [number, number, number] }) => {
    const { camera } = useThree();
    useFrame(() => {
      camera.position.set(...position);
      camera.updateProjectionMatrix();
    });
    return null;
  };

  const adjustGlobeForScreenSize = () => {
    let screenScale: [number, number, number];
    const screenPosition: [number, number, number] = [0, -0.6, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
    } else {
      screenScale = [1.8, 1.8, 1.8];
    }

    return [screenScale, screenPosition];
  };

  const adjustUfoForScreenSize = () => {
    let ufoScale: [number, number, number];
    let ufoPosition: [number, number, number];

    if (window.innerWidth < 768) {
      ufoScale = [0.1, 0.1, 0.1];
      ufoPosition = [0, 0, 3.3];
    } else {
      ufoScale = [0.15, 0.15, 0.15];
      ufoPosition = [0, 0, 3.3];
    }

    return [ufoScale, ufoPosition];
  };

  const [islandScale, islandPosition] =
    adjustGlobeForScreenSize();

  const [ufoScale, ufoPosition] = adjustUfoForScreenSize();

  return (
    <section className="w-full h-screen relative">
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
          <CameraUpdater position={cameraPosition} />

          <directionalLight
            position={[5, 0, 2]}
            intensity={1.2}
            color="#fff8e1"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <ambientLight intensity={0.3} />

          <spotLight
            position={[5, 0, 0]}
            intensity={400}
            color={'#ff8000'}
          />

          <spotLight
            position={[-9, -1, 0]}
            intensity={90}
            color="#f542ef"
            angle={0.7}
            penumbra={0.5}
          />

          {/* <hemisphereLight
            args={['#ffcc80', '#ff9100', 0.15]}
          /> */}

          <World
            position={islandPosition}
            scale={islandScale}
            setCurrentStage={setCurrentStage}
            setRotationDirection={setRotationDirection}
            isInteracting={isInteracting}
            setIsInteracting={setIsInteracting}
            setIsMoving={setIsMoving}
          />

          <Ufo
            isMoving={isMoving}
            rotationDirection={rotationDirection}
            scale={ufoScale}
            position={ufoPosition}
            rotation={[0.5, 0, 0]}
          />

          <EffectComposer>
            <Bloom intensity={0.1} luminanceThreshold={0.3} luminanceSmoothing={0.9} />

            <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.4} />

            <Scanline density={0.9} opacity={0.02} />

            <Vignette />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <AnimatePresence>
        {cameraReady && currentStage === 1 && (
          <DragIndicator />
        )}
      </AnimatePresence>

    </section>
  );
}

export default Home;
