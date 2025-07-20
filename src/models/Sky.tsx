import type { GLTF } from 'three-stdlib';
import type { JSX } from 'react';

import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import skyScene from '../assets/3d/sky.glb';

type SkyProps = JSX.IntrinsicElements['group'] & {
  isRotating: boolean;
};

function Sky({ isRotating }: SkyProps) {
  const sky = useGLTF(skyScene) as GLTF;
  const skyRef = useRef<THREE.Group>(null);

  useEffect(() => {
    sky.scene.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        const mesh = obj;
        const oldMat = mesh.material;
        mesh.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          map: oldMat.map || null,
        });
        mesh.material.needsUpdate = true;
      }
    });
  }, [sky]);

  useFrame((_, delta) => {
    if (skyRef.current && isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <primitive object={sky.scene} ref={skyRef} />
  );
}

export default Sky;
