import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

// import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import YoshisIsland from '../models/YoshisIsland';

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (isAudioPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isAudioPlaying]);

  const adjustIslandForScreenSize = () => {
    let screenScale: [number, number, number];
    const screenPosition: [number, number, number] = [0, -4, -40]; // horizontal, vertical, depth
    const rotation: [number, number, number] = [0.2, 4.7, 0]; // x, y, z rotation

    if (window.innerWidth < 768) {
      screenScale = [0.22, 0.22, 0.22]; // bottom, top, sides
    } else {
      screenScale = [0.3, 0.3, 0.3];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale: [number, number, number];
    let screenPosition: [number, number, number];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} /> }
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />

          <ambientLight intensity={0.5} />

          <hemisphereLight args={['#c20010', '#000000', 0.5]} />

          <Bird />

          <Sky isRotating={isRotating} />

          <YoshisIsland
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
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
