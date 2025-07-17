import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

interface PlaneProps {
  isRotating: boolean;
  [key: string]: unknown;
}

const Plane = ({ isRotating, ...props }: PlaneProps) => {
  const planeRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    const takeAction = actions['Take 001'];

    if (isRotating) {
      takeAction?.play();
    } else {
      takeAction?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} ref={planeRef} />
    </mesh>
  );
};

export default Plane;
