import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

// import Island from '../models/Island';
import Sky from '../models/Sky';
// import Bird from '../models/Bird';

import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
// import YoshisIsland from '../models/YoshisIsland';
import World from '../models/World';
import Ufo from '../models/Ufo';

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [rotationDirection, setRotationDirection] = useState<1 | -1>(1);

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
      ufoPosition = [0, 0.1, 2.8]; // horizontal, vertical, depth
    } else {
      ufoScale = [0.15, 0.15, 0.15];
      ufoPosition = [0, 0.1, 2.8];
    }

    return [ufoScale, ufoPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [ufoScale, ufoPosition] = adjustUfoForScreenSize();

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
            intensity={300}
            color={'#ff8000'} // laranja
          />

          <spotLight
            position={[-9, -1, 0]}
            intensity={20}
            color="#0000ff" // rosa
            angle={0.7}
            penumbra={0.5}
          />

          {/* <spotLight // ufo light
            position={[0, 1.3, 4.3]}
            intensity={30}
            distance={2.5}
            color="#00ff80"
            target-position={ufoPosition}
            angle={2}
          /> */}

          <spotLight
            position={[ufoPosition[0], ufoPosition[1], ufoPosition[2]]} // mesma posição do UFO
            intensity={10}
            distance={2}
            color="#00ff80"
            angle={0.5}
            target-position={[0, 0, 10]} // alvo para o sul (eixo z positivo)
          />

          {/* <Bird /> */}

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
