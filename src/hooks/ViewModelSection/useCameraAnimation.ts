import { useState, type RefObject } from 'react';
import { Vector3, Quaternion, Euler } from 'three';
import { OrbitControls } from 'three-stdlib';

import { type AnimationCameraTypes } from '@types';

export const useCameraAnimation = (
  orbitControlsRef: RefObject<OrbitControls | null>,
) => {
  const [cameraAnimation, setCameraAnimation] =
    useState<AnimationCameraTypes | null>(null);

  const startCameraAnimation = (position: Vector3) => {
    if (cameraAnimation?.isAnimating) return;

    const startPosition =
      orbitControlsRef.current?.object.position.clone() ??
      new Vector3(-5, 5, 0);
    const targetPos = position.clone().add(new Vector3(0, 1.7, 0));

    const startQuaternion =
      orbitControlsRef.current?.object.quaternion.clone() ?? new Quaternion();
    const targetQuaternion = new Quaternion().setFromEuler(new Euler(0, 0, 0));

    setCameraAnimation({
      isAnimating: true,
      startTime: Date.now(),
      startPosition,
      targetPosition: targetPos,
      startQuaternion,
      targetQuaternion,
    });
  };

  return { cameraAnimation, setCameraAnimation, startCameraAnimation };
};
