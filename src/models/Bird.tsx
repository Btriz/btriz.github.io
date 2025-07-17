import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions['Take 001']?.play();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    const currentBird = birdRef.current;

    if (!currentBird) return;

    // Update the Y position to simulate bird-like motion using a sine wave
    currentBird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    // Check if the bird reached a certain endpoint relative to the camera
    if(currentBird.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      currentBird.rotation.y = Math.PI;
    } else if(currentBird.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      currentBird.rotation.y = 0;
    }

    //Update the X and Z position based on the direction
    if(currentBird.rotation.y === 0) {
      //Move forward
      currentBird.position.x += 0.01;
      currentBird.position.z -= 0.01;
    } else {
      //Move backward
      currentBird.position.x -= 0.01;
      currentBird.position.z += 0.01;
    }
  });

  return (
    <mesh
      ref={birdRef}
      position={[-5, 2, 1]}
      scale={[0.003, 0.003, 0.003]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
