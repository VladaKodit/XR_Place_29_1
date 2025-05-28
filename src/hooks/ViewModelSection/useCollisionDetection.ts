import { useRef } from 'react';
import { Mesh, Sphere, Vector3 } from 'three';

export const useCollisionDetection = (wallsRef: React.RefObject<Mesh[]>) => {
  const playerCollider = useRef({
    radius: 0.1,
    height: 0.5,
    position: new Vector3(),
  });

  const checkWallCollisions = (newPosition: Vector3): boolean => {
    const walls = wallsRef.current;

    if (!walls || !walls.length) return false;

    playerCollider.current.position.copy(newPosition);

    for (const wall of walls) {
      if (wall instanceof Mesh) {
        const playerSphere = new Sphere(
          playerCollider.current.position,
          playerCollider.current.radius,
        );

        wall.geometry.computeBoundingBox();
        const wallBox = wall.geometry.boundingBox?.clone();

        if (wallBox) {
          wallBox.applyMatrix4(wall.matrixWorld);

          if (playerSphere.intersectsBox(wallBox)) {
            return true;
          }
        }
      }
    }

    return false;
  };

  return { playerCollider, checkWallCollisions };
};
