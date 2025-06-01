import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Mesh } from 'three';

export const useSceneObjects = () => {
  const { scene } = useThree();
  const lightsRef = useRef<Mesh[]>([]);
  const wallsRef = useRef<Mesh[]>([]);
  const roofRef = useRef<Mesh[]>([]);

  useEffect(() => {
    const walls: Mesh[] = [];
    const roof: Mesh[] = [];
    const lights: Mesh[] = [];

    scene.traverse((child) => {
      if (
        (child.name === 'Wall' ||
          child.name.toLowerCase().startsWith('wall') ||
          child.name === 'DoorMay228' ||
          child.name.toLowerCase().startsWith('doormay228')) &&
        child instanceof Mesh
      ) {
        walls.push(child);
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material;
        }
      }

      if (
        (child.name === 'Roof' ||
          child.name.toLowerCase().startsWith('roof')) &&
        child instanceof Mesh
      ) {
        roof.push(child);
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material;
        }
      }

      if (
        (child.name === 'Light' ||
          child.name.toLowerCase().startsWith('light')) &&
        child instanceof Mesh
      ) {
        lights.push(child);
        if (!child.userData.originalMaterial) {
          child.userData.originalMaterial = child.material;
        }
      }
    });

    lightsRef.current = lights;
    wallsRef.current = walls;
    roofRef.current = roof;

    // Восстановление оригинальных материалов
    [lights, walls, roof].forEach((objects) => {
      objects.forEach((obj) => {
        if (obj.userData.originalMaterial) {
          obj.material = obj.userData.originalMaterial;
        }
      });
    });
  }, [scene]);

  return { lightsRef, wallsRef, roofRef };
};
