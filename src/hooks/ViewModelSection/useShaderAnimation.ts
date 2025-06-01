import { useFrame } from '@react-three/fiber';
import { Object3D, ShaderMaterial } from 'three';

export const useShaderAnimation = (object: Object3D) => {
  useFrame((state) => {
    object.traverse((child) => {
      if (
        (child.name.includes('Screen') ||
          child.name.includes('WrapperWalka')) &&
        'material' in child &&
        child.material instanceof ShaderMaterial
      ) {
        child.material.uniforms.u_time.value = state.clock.getElapsedTime();
      }
    });
  });
};
