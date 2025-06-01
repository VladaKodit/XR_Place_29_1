import type { Object3D, Vector3 } from 'three';

export type canvasPosition =
  | Object3D['position']
  | Vector3
  | [x: number, y: number, z: number];

export type PointLightRoomsProps = {
  position: canvasPosition;
  intensity: number;
  shadowMapsSize: number;
};
