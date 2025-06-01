import {
  Vector3,
  ShaderMaterial,
  Vector2,
  MeshStandardMaterial,
  DoubleSide,
  MeshPhysicalMaterial,
  CircleGeometry,
  MeshBasicMaterial,
} from 'three';

import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

export const screenShader = new ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    u_time: {
      value: 0,
    },
    u_resolution: {
      value: new Vector2(window.innerWidth, window.innerHeight),
    },
    u_baseColor: {
      value: new Vector3(0.9, 0.8, 0.7),
    },
  },
});

export const wallWrapperShader = new ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    u_time: {
      value: 0,
    },
    u_resolution: {
      value: new Vector2(window.innerWidth, window.innerHeight),
    },
    u_baseColor: {
      value: new Vector3(0.251, 0.878, 0.816),
    },
  },
});

export const glowingMaterial = new MeshStandardMaterial({
  color: 0x40e0d0,
  emissive: 0x40e0d0,
  emissiveIntensity: 0.5,
  metalness: 0.1,
  roughness: 0.5,
});

export const lumpMaterial = new MeshStandardMaterial({
  emissive: 0xffffff,
  emissiveIntensity: 0.9,
});

export const transparentWallMaterial = new MeshStandardMaterial({
  color: 'gray',
  transparent: true,
  opacity: 0.1,
});

export const transparentRoofMaterial = new MeshStandardMaterial({
  color: 'gray',
  transparent: true,
  opacity: 0.1,
  side: DoubleSide,
});

export const glassMaterial = new MeshPhysicalMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.1,
  metalness: 0.0,
  roughness: 0.05,
  side: DoubleSide,
});

export const hoverGeometry = new CircleGeometry(0.5, 32);
export const hoverMaterial = new MeshBasicMaterial({
  color: 'yellow',
  transparent: true,
  opacity: 0.5,
});
