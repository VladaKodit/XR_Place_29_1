import { useState, useRef } from 'react';
import type { Object3D, Vector3 } from 'three';

export const useApartmentHandlers = (
  onFloorClick: (point: Vector3) => void,
) => {
  const isDragging = useRef(false);
  const [hoverPoint, setHoverPoint] = useState<Vector3 | null>(null);

  const handlePointerDown = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (
    e: Event & {
      object: Object3D;
      point: Vector3;
    },
  ) => {
    isDragging.current = true;

    if (e.object.userData.isFloor) {
      setHoverPoint(e.point);
    } else {
      setHoverPoint(null);
    }
  };

  const handleClick = (
    e: Event & {
      object: Object3D;
      point: Vector3;
      stopPropagation: () => void;
    },
  ) => {
    e.stopPropagation();

    if (!isDragging.current && e.object.userData.isFloor) {
      const point = e.point;
      onFloorClick(point);
    }
  };

  return {
    isDragging,
    hoverPoint,
    setHoverPoint,
    handlePointerDown,
    handlePointerMove,
    handleClick,
  };
};
