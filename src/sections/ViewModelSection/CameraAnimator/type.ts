import type { AnimationCameraTypes } from '@types';

export type CameraAnimatorProps = {
  cameraAnimation: AnimationCameraTypes | null;
  onAnimationComplete: () => void;
};
