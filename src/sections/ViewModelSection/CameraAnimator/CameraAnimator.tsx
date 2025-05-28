import { useFrame } from '@react-three/fiber';

import { easeInOutCubic } from '../helpers';
import { type CameraAnimatorProps } from './type';

export const CameraAnimator = ({
  cameraAnimation,
  onAnimationComplete,
}: CameraAnimatorProps) => {
  useFrame(({ camera }) => {
    if (!cameraAnimation?.isAnimating) return;

    const duration = 1000;
    const elapsed = Date.now() - cameraAnimation.startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    camera.position.lerpVectors(
      cameraAnimation.startPosition,
      cameraAnimation.targetPosition,
      easedProgress,
    );

    camera.quaternion.slerpQuaternions(
      cameraAnimation.startQuaternion,
      cameraAnimation.targetQuaternion,
      easedProgress,
    );

    if (progress >= 1) {
      onAnimationComplete();
    }
  });

  return null;
};
