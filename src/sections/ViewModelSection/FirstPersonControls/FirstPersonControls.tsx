import {
  useCollisionDetection,
  useKeyboardControls,
  useMovement,
  useSceneObjects,
} from '@hooks';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

export const FirstPersonControls = ({
  targetPosition,
  onExit,
}: {
  targetPosition: Vector3 | null;
  onExit: () => void;
}) => {
  const { camera } = useThree();
  const initialHeight = useRef<number | null>(null);

  const keys = useKeyboardControls(onExit);
  const { wallsRef } = useSceneObjects();
  const { playerCollider, checkWallCollisions } =
    useCollisionDetection(wallsRef);

  useMovement(keys, checkWallCollisions, playerCollider, initialHeight);

  useEffect(() => {
    if (targetPosition) {
      const cameraPosition = targetPosition.clone().add(new Vector3(0, 1.7, 0));
      initialHeight.current = cameraPosition.y;
      camera.position.copy(cameraPosition);
      camera.rotation.set(0, 0, 0);
      playerCollider.current.position.copy(cameraPosition);
    }
  }, [targetPosition, camera, playerCollider]);

  return <PointerLockControls />;
};
