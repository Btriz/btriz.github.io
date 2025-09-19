import React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedPlane = React.memo(({
  planeRef,
  orbitRadius,
  heightAboveSurface,
  speed,
  angleRef,
  direction = 1,
}: {
  planeRef: React.RefObject<THREE.Group | null>;
  orbitRadius: number;
  heightAboveSurface: number;
  speed: number;
  angleRef: React.RefObject<number>;
  direction?: 1 | -1;
}) => {
  useFrame((_, delta) => {
    angleRef.current += direction * (Math.PI * 2 * delta) / speed;

    if (planeRef.current) {
      const x = orbitRadius * Math.cos(angleRef.current);
      const z = orbitRadius * Math.sin(angleRef.current);
      const y = heightAboveSurface;

      planeRef.current.position.set(x, y, z);

      const tangent = new THREE.Vector3(
        -Math.sin(angleRef.current) * direction,
        0,
        Math.cos(angleRef.current) * direction,
      ).normalize();

      const up = new THREE.Vector3(0, 1, 0);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(up, tangent);

      planeRef.current.setRotationFromQuaternion(quaternion);
    }
  });

  return null;
});

export default AnimatedPlane;
