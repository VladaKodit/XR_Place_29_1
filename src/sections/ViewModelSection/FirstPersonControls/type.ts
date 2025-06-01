import type { Vector3 } from 'three';

export type FirstPersonControlsProps = {
  targetPosition: Vector3 | null;
  onExit: () => void;
};
