import type {
  Euler,
  EulerOrder,
  Object3D,
  Quaternion,
  ShadowMapType,
  Vector3,
} from 'three';

type CameraProps = {
  position: [number, number, number];
  fov: number;
  near: number;
  far: number;
};
export type AnimationCameraTypes = {
  isAnimating: boolean;
  startTime: number;
  startPosition: Vector3;
  targetPosition: Vector3;
  startQuaternion: Quaternion;
  targetQuaternion: Quaternion;
};
type ShadowSettings = {
  type: ShadowMapType;
};

export type CanvasSettingsType = {
  camera: CameraProps;
  shadows: ShadowSettings;
};

export type ObjectsAccessChanges =
  | 'Screen'
  | 'screen'
  | 'WrapperWalka'
  | 'wrapperwalka'
  | 'Light'
  | 'light'
  | 'Luminaire'
  | 'luminaire'
  | 'Window'
  | 'window'
  | 'Roof'
  | 'roof'
  | 'Wall'
  | 'wall'
  | 'Floor'
  | 'floor';

export type CanvasPosition =
  | Object3D['position']
  | Vector3
  | [x: number, y: number, z: number];

export type PointLightRoomsProps = {
  position: CanvasPosition;
  intensity: number;
  shadowMapsSize: number;
};

export type HoverPointTypes = {
  shiftHoverActive: number;
  rotationShape:
    | Euler
    | [x: number, y: number, z: number, order?: EulerOrder | undefined]
    | Readonly<
        | number
        | Euler
        | [x: number, y: number, z: number, order?: EulerOrder | undefined]
        | undefined
      >;
};

export type ApartmentModelProps = {
  modelPath: string;
  onFloorClick: (position: Vector3) => void;
  firstPersonMode: boolean;
  hoverPointMouseData: HoverPointTypes;
  objScale: number;
  objPosition: CanvasPosition;
};

export type EnvironmentDataGroundTypes = {
  radius: number;
  height: number;
  scale: number;
};
export type EnvironmentDataTypes = {
  backgroundIntensity: number;
  environmentIntensity: number;
  ground: EnvironmentDataGroundTypes;
};

export type ShadowPlaneFloorSizingTypes = {
  x: number;
  y: number;
};

export type DirectionalLightDataTypes = {
  position: CanvasPosition;
  intensity: number;
  shadowMapSizeWidth: number;
  shadowCameraNear: number;
  shadowCameraFar: number;
  shadowCameraLeft: number;
  shadowCameraRight: number;
  shadowCameraTop: number;
  shadowCameraBottom: number;
};
