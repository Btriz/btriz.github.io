import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import { EffectComposer, Bloom, Noise, Scanline, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import { World, Ufo, Sky } from '../models';
import { Loader, HomeInfo } from '../components';

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 20]);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => {
    let frame: number;

    const target: [number, number, number] = [0, 0, 5];
    const speed = 0.1;
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

  useEffect(() => {
    const audio = audioRef.current;
    if (isAudioPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isAudioPlaying]);

  const CameraUpdater = ({ position }: { position: [number, number, number] }) => {
    const { camera } = useThree();
    useFrame(() => {
      camera.position.set(...position);
      camera.updateProjectionMatrix();
    });
    return null;
  };

  const adjustIslandForScreenSize = () => {
    let screenScale: [number, number, number];
    const screenPosition: [number, number, number] = [0, -0.5, 0];
    const rotation: [number, number, number] = [0, 0, 0.5];

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
    } else {
      screenScale = [1.8, 1.8, 1.8];
    }

    return [screenScale, screenPosition, rotation];
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

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [ufoScale, ufoPosition] = adjustUfoForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <AnimatePresence>
        {currentStage && cameraReady && (
          <motion.div
            key={currentStage}
            className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
          >
            <HomeInfo currentStage={currentStage} />
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas
        className={`w-full h-screen bg-transparent ${isInteracting ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <CameraUpdater position={cameraPosition} />

        <Suspense fallback={<Loader />}>
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

          <Sky isMoving={isMoving} />

          <World
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            setCurrentStage={setCurrentStage}
            setRotationDirection={setRotationDirection}
            isInteracting={isInteracting}
            setIsInteracting={setIsInteracting}
            setIsMoving={setIsMoving}
          />

          <Ufo
            isInteracting={isMoving}
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

      <motion.div
        className="absolute bottom-2 left-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img
          src={isAudioPlaying ? soundon : soundoff}
          alt="Sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        />
      </motion.div>
    </section>
  );
}

export default Home;
