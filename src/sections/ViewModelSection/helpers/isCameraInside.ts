import { Mesh, Vector3, Box3 } from 'three';

export const isCameraInside = (walls: Mesh[], cameraPos: Vector3) => {
  let inside = false;

  for (const wall of walls) {
    const wallBox = new Box3().setFromObject(wall);
    if (wallBox.containsPoint(cameraPos)) {
      inside = true;
      break;
    }
  }

  return inside;
};
