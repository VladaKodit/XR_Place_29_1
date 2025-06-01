import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export const useHoverEffect = (hoverPoint: Vector3 | null) => {
  const hoverMeshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (hoverMeshRef.current && hoverPoint) {
      hoverMeshRef.current.position.lerp(
        new Vector3(hoverPoint.x, hoverPoint.y + 0.01, hoverPoint.z),
        0.2,
      );
    }
  });

  return { hoverMeshRef };
};
