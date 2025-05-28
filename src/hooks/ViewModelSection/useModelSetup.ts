import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial, FrontSide } from 'three';
import {
  checkNameMatch,
  glassMaterial,
  lumpMaterial,
  screenShader,
  wallWrapperShader,
} from '../../sections/ViewModelSection';

export const useModelSetup = (modelPath: string) => {
  const gltf = useGLTF(modelPath);
  const scene = gltf.scene;
  const lightRef = useRef<Mesh[]>([]);
  const wallsRef = useRef<Mesh[]>([]);
  const roofRef = useRef<Mesh[]>([]);

  useEffect(() => {
    const lights: Mesh[] = [];
    const walls: Mesh[] = [];
    const roof: Mesh[] = [];
    const screens: Mesh[] = [];

    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material instanceof MeshStandardMaterial) {
        child.material.shadowSide = FrontSide;
      }

      if (checkNameMatch(child.name, 'Floor')) {
        child.userData.isFloor = true;
      }

      if (checkNameMatch(child.name, 'Wall')) {
        walls.push(child);
        child.userData.originalMaterial = child.material;
      }

      if (checkNameMatch(child.name, 'Roof')) {
        roof.push(child);
        child.userData.originalMaterial = child.material;
        child.raycast = () => {};
      }

      if (checkNameMatch(child.name, 'Window')) {
        child.userData.originalMaterial = child.material;
        child.material = glassMaterial;
        child.castShadow = false;
        child.raycast = () => {};
      }

      if (checkNameMatch(child.name, 'WrapperWalka')) {
        child.userData.originalMaterial = child.material;
        child.material = wallWrapperShader;
      }

      if (checkNameMatch(child.name, 'Luminaire')) {
        child.userData.originalMaterial = child.material;
        child.material = lumpMaterial;
        child.castShadow = false;
        child.raycast = () => {};
      }

      if (checkNameMatch(child.name, 'Light')) {
        lights.push(child);
        child.userData.originalMaterial = child.material;
        child.castShadow = false;
        child.raycast = () => {};
      }

      if (checkNameMatch(child.name, 'Screen')) {
        screens.push(child);
        child.userData.originalMaterial = child.material;
        child.material = screenShader;
      }
    });

    lightRef.current = lights;
    wallsRef.current = walls;
    roofRef.current = roof;
  }, [scene]);

  return {
    scene,
    lightRef,
    wallsRef,
    roofRef,
  };
};
