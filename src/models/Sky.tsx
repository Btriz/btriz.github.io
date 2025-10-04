import type { JSX } from 'react';
import type { GLTF } from 'three-stdlib';
import type * as THREE from 'three';

import { useGLTF } from '@react-three/drei';
import skyScene from '../assets/3d/sky-optimized.glb';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    Skybox_mat: THREE.MeshStandardMaterial;
  };
};

function Sky(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(skyScene) as unknown as GLTFResult;

  return (
    <group {...props}>
      <mesh geometry={nodes.Object_4.geometry}>
        <meshBasicMaterial map={materials.Skybox_mat.map} />
      </mesh>
    </group>
  );
}

export default Sky;

useGLTF.preload(skyScene);
