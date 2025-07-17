import type { GLTF } from 'three-stdlib';

import * as THREE from 'three';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

type SkyProps = {
  isRotating: boolean;
  [key: string]: unknown;
};

type SkyGLTFResult = GLTF & {
  nodes: {
    sky: THREE.Mesh;
  };
  materials: {
    skyMaterial: THREE.Material;
  };
};

function Sky({ isRotating }: SkyProps) {
  const sky = useGLTF(skyScene) as unknown as SkyGLTFResult;
  const skyRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (skyRef.current) {
      if (isRotating) {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
