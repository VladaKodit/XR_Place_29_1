import { type PointLightRoomsProps } from './type';

export const PointLightRooms = ({
  position,
  intensity,
  shadowMapsSize,
}: PointLightRoomsProps) => (
  <pointLight
    position={position}
    intensity={intensity}
    shadow-mapSize-width={shadowMapsSize}
    shadow-mapSize-height={shadowMapsSize}
    shadow-camera-near={0.5}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
    shadow-bias={-0.001}
    shadow-normalBias={0.05}
  />
);
