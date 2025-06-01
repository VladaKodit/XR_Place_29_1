import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import { Vector3 } from 'three';

import { ApartmentModel, FirstPersonControls } from '../';
import { useCameraAnimation, useViewModes } from '@hooks';
import { CameraAnimator } from '../CameraAnimator';
import styles from './WrapperModelScale.module.scss';
import {
  HoverPointMouse,
  ScaleModel,
  positionPrimitive,
  CameraSettings,
  EnvironmentData,
  DirectionalLightData,
  ModelPath,
} from '../helpers';

export const WrapperModelScale = () => {
  const orbitControlsRef = useRef(null);
  const { cameraAnimation, setCameraAnimation, startCameraAnimation } =
    useCameraAnimation(orbitControlsRef);
  const {
    firstPersonMode,
    setFirstPersonMode,
    targetPosition,
    setTargetPosition,
    exitFirstPersonMode,
  } = useViewModes();

  const handleFloorClick = (position: Vector3) => {
    if (firstPersonMode || cameraAnimation?.isAnimating) return;
    startCameraAnimation(position);
    setTargetPosition(position);
  };

  const handleAnimationComplete = () => {
    setCameraAnimation(null);
    setFirstPersonMode(true);
  };

  return (
    <div className={styles['wrapper-model-scale']}>
      <Canvas
        camera={{
          position: CameraSettings.camera.position,
          fov: CameraSettings.camera.fov,
          near: CameraSettings.camera.near,
          far: CameraSettings.camera.far,
        }}
        shadows={{ type: CameraSettings.shadows.type }}
      >
        <CameraAnimator
          cameraAnimation={cameraAnimation}
          onAnimationComplete={handleAnimationComplete}
        />
        <Suspense fallback={null}>
          <hemisphereLight groundColor="#b97a20" intensity={0.2} />
          <ambientLight intensity={0} />
          <directionalLight
            castShadow
            position={DirectionalLightData.position}
            intensity={DirectionalLightData.intensity}
            shadow-mapSize-width={DirectionalLightData.shadowMapSizeWidth}
            shadow-mapSize-height={DirectionalLightData.shadowMapSizeWidth}
            shadow-camera-near={DirectionalLightData.shadowCameraNear}
            shadow-camera-far={DirectionalLightData.shadowCameraFar}
            shadow-camera-left={DirectionalLightData.shadowCameraLeft}
            shadow-camera-right={DirectionalLightData.shadowCameraRight}
            shadow-camera-top={DirectionalLightData.shadowCameraTop}
            shadow-camera-bottom={DirectionalLightData.shadowCameraBottom}
          />
          <Environment
            files="./cyclorama_hard_light_1k.exr"
            background
            backgroundIntensity={EnvironmentData.backgroundIntensity}
            environmentIntensity={EnvironmentData.environmentIntensity}
            ground={{
              radius: EnvironmentData.ground.radius,
              height: EnvironmentData.ground.height,
              scale: EnvironmentData.ground.scale,
            }}
          />

          <ApartmentModel
            modelPath={ModelPath}
            onFloorClick={handleFloorClick}
            firstPersonMode={firstPersonMode}
            hoverPointMouseData={HoverPointMouse}
            objScale={ScaleModel}
            objPosition={positionPrimitive}
          />

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.01, 0]}
            receiveShadow
          >
            <planeGeometry args={[400, 400]} />
            <shadowMaterial opacity={0.3} />
          </mesh>
        </Suspense>

        {firstPersonMode ? (
          <FirstPersonControls
            targetPosition={targetPosition}
            onExit={exitFirstPersonMode}
          />
        ) : (
          <OrbitControls
            ref={orbitControlsRef}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minDistance={10}
            maxDistance={30}
          />
        )}
      </Canvas>
    </div>
  );
};

export default WrapperModelScale;
