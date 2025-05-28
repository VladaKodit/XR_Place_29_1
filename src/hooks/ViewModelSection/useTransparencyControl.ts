import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import {
  isCameraInside,
  transparentWallMaterial,
  transparentRoofMaterial,
} from '../../sections/ViewModelSection';
import type { Mesh } from 'three';

export const useTransparencyControl = (
  wallsRef: React.RefObject<Mesh[]>,
  lightRef: React.RefObject<Mesh[]>,
  roofRef: React.RefObject<Mesh[]>,
  firstPersonMode: boolean,
) => {
  const { camera } = useThree();
  const [transparentWalls, setTransparentWalls] = useState(!firstPersonMode);

  useEffect(() => {
    setTransparentWalls(!firstPersonMode);
  }, [firstPersonMode]);

  useFrame(() => {
    const walls = wallsRef.current;
    const lights = lightRef.current;
    const roofs = roofRef.current;

    if (walls?.length > 0 && transparentWalls) {
      const isInside = isCameraInside(walls, camera.position);
      walls.forEach((wall) => {
        wall.material = isInside
          ? wall.userData.originalMaterial
          : transparentWallMaterial;
      });
    }

    if (lights?.length > 0 && transparentWalls) {
      const isInside = isCameraInside(lights, camera.position);
      lights.forEach((light) => {
        light.material = isInside
          ? light.userData.originalMaterial
          : transparentWallMaterial;
      });
    }

    if (roofs?.length > 0 && transparentWalls) {
      const isInside = isCameraInside(roofs, camera.position);
      roofs.forEach((roof) => {
        roof.material = isInside
          ? roof.userData.originalMaterial
          : transparentRoofMaterial;
      });
    }
  });
};
