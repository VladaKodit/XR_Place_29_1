import { useState } from 'react';
import { Vector3 } from 'three';

export const useViewModes = () => {
  const [firstPersonMode, setFirstPersonMode] = useState(false);
  const [targetPosition, setTargetPosition] = useState<Vector3 | null>(null);

  const exitFirstPersonMode = () => {
    setFirstPersonMode(false);
  };

  return {
    firstPersonMode,
    setFirstPersonMode,
    targetPosition,
    setTargetPosition,
    exitFirstPersonMode,
  };
};
