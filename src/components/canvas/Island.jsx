import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const SphereModel = ({ isSmallScreen }) => {
  const sphere = useGLTF('/island/scene.glb');

  return (
    <mesh castShadow receiveShadow>
      {/* 3D Model */}
      <primitive
        object={sphere.scene}
        scale={isSmallScreen ? .2 : .4}
        position={isSmallScreen ? [0, -1, 0] : [0, -1, 0]}
        rotation={[0.1, Math.PI / 4, 0]}
      />
    </mesh>
  );
};

const SphereCanvas = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const smallScreenQuery = window.matchMedia('(max-width: 500px)');

    setIsSmallScreen(smallScreenQuery.matches);

    const handleMediaQueryChange = () => {
      setIsSmallScreen(smallScreenQuery.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    smallScreenQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      smallScreenQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 1, 10], fov: 55 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <SphereModel isSmallScreen={isSmallScreen} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SphereCanvas;
