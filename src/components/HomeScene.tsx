import type { Dispatch, SetStateAction } from 'react';

import { EffectComposer, Bloom, Noise, Scanline, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { World, Ufo } from '../models';
import { useFrame, useThree } from '@react-three/fiber';

const CameraUpdater = ({ position }: { position: [number, number, number] }) => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.set(...position);
    camera.updateProjectionMatrix();
  });
  return null;
};

type HomeSceneProps = {
  cameraPosition: [number, number, number];
  setCurrentStage: Dispatch<SetStateAction<number | null>>;
  setRotationDirection: Dispatch<SetStateAction<1 | -1>>;
  isInteracting: boolean;
  setIsInteracting: Dispatch<SetStateAction<boolean>>;
  setIsMoving: Dispatch<SetStateAction<boolean>>;
  isMoving: boolean;
  rotationDirection: 1 | -1;
}

const HomeScene = ({
  cameraPosition,
  setCurrentStage,
  setRotationDirection,
  isInteracting,
  setIsInteracting,
  setIsMoving,
  isMoving,
  rotationDirection,
}: HomeSceneProps) => {

  return (
    <>
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

      <World
        setCurrentStage={setCurrentStage}
        setRotationDirection={setRotationDirection}
        isInteracting={isInteracting}
        setIsInteracting={setIsInteracting}
        setIsMoving={setIsMoving}
      />

      <Ufo
        isMoving={isMoving}
        rotationDirection={rotationDirection}
      />

      <EffectComposer>
        <Bloom intensity={0.1} luminanceThreshold={0.3} luminanceSmoothing={0.9} />

        <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.4} />

        <Scanline density={0.9} opacity={0.02} />

        <Vignette />
      </EffectComposer>
    </>
  );
};

export default HomeScene;
