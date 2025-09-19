import type { Object3D } from 'three';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Ufo } from '../../models';

const PortfolioScene = () => {
  const AnimatedText = ({
    position = [0, 0, 0],
    fontSize = 1,
    color = 'white',
    children,
  }: {
  position?: [number, number, number];
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
}) => {
    const ref = useRef<Object3D | null>(null);

    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      if (ref.current) {
        ref.current.rotation.y = Math.sin(t * 0.8) * 0.6;
        ref.current.position.y = position[1] + Math.sin(t * 2) * 0.05;
        ref.current.position.x = position[0] + Math.cos(t * 1.2) * 0.06;
      }
    });

    return (
      <Text ref={ref} position={position} fontSize={fontSize} color={color}>
        {children}
      </Text>
    );
  };

  return (
    <>
      <ambientLight intensity={3} />

      <spotLight
        position={[-3, 2, -3]}
        intensity={300}
        color={'#ff8000'}
      />

      <Ufo
        scale={[1.3, 1.3, 1.3]}
        position={[0, 0.9, 0.5]}
        rotation={[-0.2, 0, 0]}
      />

      <AnimatedText
        position={[-2, 1.2, -2]}
        fontSize={1.5}
        color="white"
      >
        ✶
      </AnimatedText>

      <AnimatedText position={[2, -1.7, -2]} fontSize={1} color="white">
        ⟡
      </AnimatedText>
    </>
  );
};

export default PortfolioScene;
