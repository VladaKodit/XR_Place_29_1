import { useFrame, useThree } from '@react-three/fiber';
import type { MutableRefObject } from 'react';
import { Vector3 } from 'three';

export const useMovement = (
  keys: MutableRefObject<{ w: boolean; a: boolean; s: boolean; d: boolean }>,
  checkWallCollisions: (newPosition: Vector3) => boolean,
  playerCollider: React.MutableRefObject<{ position: Vector3 }>,
  initialHeight: React.MutableRefObject<number | null>,
) => {
  const { camera } = useThree();
  const moveSpeed = 0.034;

  useFrame(() => {
    if (initialHeight.current === null) return;

    const moveDirection = new Vector3();

    if (keys.current.w) moveDirection.z -= 0.2;
    if (keys.current.s) moveDirection.z += 0.2;
    if (keys.current.a) moveDirection.x -= 0.2;
    if (keys.current.d) moveDirection.x += 0.2;

    moveDirection.normalize();
    moveDirection.multiplyScalar(moveSpeed);
    camera.getWorldDirection(new Vector3());
    moveDirection.applyEuler(camera.rotation);

    const newPosition = camera.position.clone().add(moveDirection);
    newPosition.y = initialHeight.current;

    if (!checkWallCollisions(newPosition)) {
      camera.position.copy(newPosition);
      playerCollider.current.position.copy(newPosition);
    }
  });
};
