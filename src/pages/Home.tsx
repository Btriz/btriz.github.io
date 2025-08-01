import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

// import Island from '../models/Island';
import Sky from '../models/Sky';
// import Bird from '../models/Bird';

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
// import YoshisIsland from '../models/YoshisIsland';
import World from '../models/World';
import Ufo from '../models/Ufo';
import { Welcome, Loader, HomeInfo } from '../components';

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);
  const [showWelcome, setShowWelcome] = useState(true);
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 20]);

  useEffect(() => {
    if (!showWelcome) {
      let frame: number;

      const animate = () => {
        setCameraPosition((prev) => {
          const target: [number, number, number] = [0, 0, 5];
          const speed = 0.1;

          const next: [number, number, number] = [
            prev[0] + (Math.abs(target[0] - prev[0]) < 0.01 ? 0 : (target[0] - prev[0]) * speed),
            prev[1] + (Math.abs(target[1] - prev[1]) < 0.01 ? 0 : (target[1] - prev[1]) * speed),
            prev[2] + (Math.abs(target[2] - prev[2]) < 0.01 ? 0 : (target[2] - prev[2]) * speed),
          ];

          if (next.some((value, index) => Math.abs(value - target[index]) > 0.01)) {
            frame = requestAnimationFrame(animate);
          }

          return next;
        });
      };

      animate();

      return () => cancelAnimationFrame(frame);
    }
  }, [showWelcome]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isAudioPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isAudioPlaying]);

  const handleEnter = () => {
    setShowWelcome(false);
  };

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
    const screenPosition: [number, number, number] = [0, -0.5, 0]; // horizontal, vertical, depth
    const rotation: [number, number, number] = [0, 0, 0.5]; // x, y, z rotation

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3]; // bottom, top, sides
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
      ufoPosition = [0, 0, 3.3]; // horizontal, vertical, depth
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
      {showWelcome && <Welcome handleEnter={handleEnter} />}

      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
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

          <hemisphereLight
            args={['#ffcc80', '#ff9100', 0.15]}
          />

          <Sky isRotating={isRotating} />

          <World
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setRotationDirection={setRotationDirection}
          />

          <Ufo
            isRotating={isRotating}
            rotationDirection={rotationDirection}
            scale={ufoScale}
            position={ufoPosition}
            rotation={[0.5, 0, 0]}
          />

        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={isAudioPlaying ? soundon : soundoff}
          alt="Sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        />
      </div>
    </section>
  );
}

export default Home;
