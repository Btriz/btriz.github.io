/*
Author: Graphfun (https://sketchfab.com/the_3d_animate_guy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ufo-f7ac46de718a444384a73e953d49997c
Title: UFO
*/
import type { JSX } from 'react';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ufoScene from '../assets/3d/ufo.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

type UfoProps = JSX.IntrinsicElements['group'] & {
  isMoving?: boolean;
  rotationDirection?: 1 | -1;
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
};

const Ufo = ({
  isMoving = false,
  rotationDirection = 1,
  scale,
  position = [0, -0.2, 3.3],
  rotation = [0.4, 0, 0],
  ...props
}: UfoProps) => {
  const ufoRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(ufoScene);
  const { actions } = useAnimations(animations, ufoRef);
  const { viewport } = useThree();

  const ufoScale: [number, number, number] =
    scale ??
    (viewport.width < 10 ? [0.1, 0.1, 0.1] : [0.15, 0.15, 0.15]);

  useEffect(() => {
    const action = actions['ArmatureAction.001'];

    if (action) {
      if (isMoving) {
        action.timeScale = 1 * rotationDirection;
      } else {
        action.timeScale = 0.2 * rotationDirection;
      }
      action.play();
    }
  }, [actions, isMoving, rotationDirection]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.MeshStandardMaterial;

        if (mat.name === 'LightMetal' || mat.name === 'LightMEtal') {
          const newMaterial = new THREE.MeshStandardMaterial({
            name: 'LightMetal',
            color: new THREE.Color(0xdfdeff),
            metalness: 0.7,
            roughness: 0.2,
          });

          child.material = newMaterial;
        }

        if (mat.name === 'DarkMetal') {
          const newMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0x0e029c),
          });
          child.material = newMaterial;
        }

        if (mat.name === 'Glass') {
          const newGlassMaterial = new THREE.MeshPhysicalMaterial({
            name: 'Glass',
            color: new THREE.Color(0x72e795),
            emissive: new THREE.Color(0x00ff80),
            emissiveIntensity: 0,
            opacity: 1,
            transmission: 0.5,
            transparent: true,
            depthWrite: false,
            roughness: 0.46,
            metalness: 0.15,
            clearcoat: 1.0,
            clearcoatRoughness: 0.5,
            side: THREE.DoubleSide,
          });

          child.material = newGlassMaterial;
        }
      }
    });
  }, [scene]);

  return (
    <group
      scale={ufoScale}
      position={position}
      rotation={rotation}
      raycast={() => false}
      {...props}
    >
      <primitive object={scene} ref={ufoRef} />

      <spotLight
        position={[-0.3, 0.7, 2.3]}
        intensity={0.03}
        distance={0.4}
        color="#00ff80"
        angle={2}
        penumbra={1}
      />

      <pointLight
        position={[2, 0.5, 0.1]}
        intensity={0.15}
        distance={0.5}
        color="#ffffff"
      />

      <pointLight
        position={[0, -0.2, 0.2]}
        intensity={5}
        distance={0.5}
        color="#ffffff"
        decay={2.5}
      />
    </group>
  );
};

export default Ufo;
