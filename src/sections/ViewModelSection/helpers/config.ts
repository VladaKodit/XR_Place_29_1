import type {
  PointLightRoomsProps,
  CanvasPosition,
  ObjectsAccessChanges,
  CanvasSettingsType,
  HoverPointTypes,
  EnvironmentDataTypes,
  ShadowPlaneFloorSizingTypes,
  DirectionalLightDataTypes,
} from '@types';
import { PCFSoftShadowMap } from 'three';

export const ModelPath = './apartments-model.glb';

export const ShadowSizeMap = 128;
export const IntensitySmallSizeLamp = 1;
export const IntensityMediumSizeLamp = 2;
export const IntensityBigSizeLamp = 3;
export const LampZCoordinate = 2.3;
export const LampZCoordinateParaphyria = 2;
export const LampXCoordinateParaphyria = -4.31;

export const lightsMap: PointLightRoomsProps[] = [
  {
    position: [LampXCoordinateParaphyria, LampZCoordinateParaphyria, 0.3],
    intensity: IntensitySmallSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [LampXCoordinateParaphyria, LampZCoordinateParaphyria, 1.8],
    intensity: IntensitySmallSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [-2.15, LampZCoordinate, -1.6],
    intensity: IntensityBigSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [0.4, LampZCoordinate, -0.8],
    intensity: IntensityMediumSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [0.4, LampZCoordinate, -2.5],
    intensity: IntensityMediumSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [-0.1, LampZCoordinate, 0.7],
    intensity: IntensityMediumSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [2.2, LampZCoordinate, 2],
    intensity: IntensityBigSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
  {
    position: [2.8, LampZCoordinate, -2.2],
    intensity: IntensityBigSizeLamp,
    shadowMapsSize: ShadowSizeMap,
  },
];

export const shadowPlaneFloorSizing: ShadowPlaneFloorSizingTypes = {
  x: 400,
  y: 400,
};

export const positionPrimitive: CanvasPosition = [0, 0, 0];

export const OBJECT_TYPES: Record<
  ObjectsAccessChanges,
  {
    startsWith?: string;
    exact?: string;
  }
> = {
  Screen: {
    startsWith: 'screen',
  },
  screen: {
    exact: 'screen',
  },
  WrapperWalka: {
    startsWith: 'wrapperwalka',
  },
  wrapperwalka: {
    exact: 'wrapperwalka',
  },
  Light: {
    startsWith: 'light',
  },
  light: {
    exact: 'light',
  },
  Luminaire: {
    startsWith: 'luminaire',
  },
  luminaire: {
    exact: 'luminaire',
  },
  Window: {
    startsWith: 'window',
  },
  window: {
    exact: 'window',
  },
  Roof: {
    startsWith: 'roof',
  },
  roof: {
    exact: 'roof',
  },
  Wall: {
    startsWith: 'wall',
  },
  wall: {
    exact: 'wall',
  },
  Floor: {
    startsWith: 'floor',
  },
  floor: {
    exact: 'floor',
  },
} as const;

export const ScaleModel = 2;

export const CameraSettings: CanvasSettingsType = {
  camera: {
    position: [-5, 5, 0],
    fov: 75,
    near: 0.1,
    far: 1000,
  },
  shadows: { type: PCFSoftShadowMap },
};

export const HoverPointMouse: HoverPointTypes = {
  shiftHoverActive: 0.01,
  rotationShape: [-Math.PI / 2, 0, 0],
};

export const EnvironmentData: EnvironmentDataTypes = {
  backgroundIntensity: 0,
  environmentIntensity: 0,
  ground: {
    radius: 150,
    height: 60,
    scale: 100,
  },
};

export const DirectionalLightData: DirectionalLightDataTypes = {
  position: [10, 20, 10],
  intensity: 1,
  shadowMapSizeWidth: 1024,
  shadowCameraNear: 0.5,
  shadowCameraFar: 50,
  shadowCameraLeft: -10,
  shadowCameraRight: 10,
  shadowCameraTop: 10,
  shadowCameraBottom: -10,
};
