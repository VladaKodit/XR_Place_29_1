import { PointLightRooms } from '../PointLightRooms';
import {
  hoverGeometry,
  hoverMaterial,
  lightsMap,
  positionPrimitive,
  ScaleModel,
} from '../helpers';
import { type ApartmentModelProps } from '@types';
import {
  useApartmentHandlers,
  useTransparencyControl,
  useHoverEffect,
  useModelSetup,
  useShaderAnimation,
} from '@hooks';

export const ApartmentModel = ({
  modelPath,
  onFloorClick,
  firstPersonMode,
  hoverPointMouseData,
}: ApartmentModelProps) => {
  const { scene, lightRef, wallsRef, roofRef } = useModelSetup(modelPath);
  const { hoverPoint, handlePointerDown, handlePointerMove, handleClick } =
    useApartmentHandlers(onFloorClick);
  const { hoverMeshRef } = useHoverEffect(hoverPoint);

  useTransparencyControl(wallsRef, lightRef, roofRef, firstPersonMode);
  useShaderAnimation(scene);

  return (
    <>
      {lightsMap.map((pointLight, index) => (
        <PointLightRooms
          key={index}
          position={pointLight.position}
          intensity={pointLight.intensity}
          shadowMapsSize={pointLight.intensity}
        />
      ))}

      <primitive
        scale={ScaleModel}
        object={scene}
        position={positionPrimitive}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onClick={handleClick}
      />

      {hoverPoint && (
        <mesh
          ref={hoverMeshRef}
          geometry={hoverGeometry}
          material={hoverMaterial}
          position={[
            hoverPoint.x,
            hoverPoint.y + hoverPointMouseData.shiftHoverActive,
            hoverPoint.z,
          ]}
          rotation={hoverPointMouseData.rotationShape}
        />
      )}
    </>
  );
};
