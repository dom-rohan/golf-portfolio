import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

const UserModel = ({ isSmallScreen }) => {
  const [fbxModel, setFbxModel] = useState(null);
  const [mixer, setMixer] = useState(null);

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(
      '/golf-drive/source/scene.fbx', // Ensure the correct path to your model
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Set animation mixer if the FBX has animations
        if (object.animations.length > 0) {
          const newMixer = new THREE.AnimationMixer(object);
          object.animations.forEach((clip) => {
            newMixer.clipAction(clip).play();
          });
          setMixer(newMixer);
        }

        setFbxModel(object);
      },
      undefined,
      (error) => {
        console.error('Error loading FBX model:', error);
      }
    );
  }, []);

  // Update animation frame
  useFrame((state, delta) => {
    if (mixer) mixer.update(delta);
  });

  return fbxModel ? (
    <primitive object={fbxModel} scale={isSmallScreen ? .1 : .14} position={[0, -4.5, 0]} />
  ) : null;
};

const User3DModel = () => {
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
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <UserModel isSmallScreen={isSmallScreen} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
};

export default User3DModel;
