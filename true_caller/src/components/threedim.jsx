// src/ThreeScene.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const RotatingBox = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <Box ref={ref} args={[3, 3, 3]}>  {/* Adjust args to make the box larger */}
      <meshStandardMaterial attach="material" color="#a6d8f7" />
    </Box>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingBox />
    </Canvas>
  );
};

export default ThreeScene;
